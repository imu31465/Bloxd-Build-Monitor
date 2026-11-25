# Changed — Bundle Modifications Report (Part 020 / 056)

- **Updated at**: `2026-11-25T18:33 JST`
- **Part**: `20 / 56` (**309** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 019](part-019.md) · [Part 021 →](part-021.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/79.js` (sn3sfj.2522680a → 8104he.3820eae0 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/79.js` (171 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda)

#### 165. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L7086-L7112` → after: `L39400-L39414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR39400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L39400-L39414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L39400-L39414) · [Before (L7086-L7112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L7086-L7112)

```diff
-                           function Pp(pp, ip, cp) {
-                             var Op;
-                             return cp + (ip.unicode && (null !== (Op = pp.codePointAt(cp)) && void 0 !== Op ? Op : 0) > 65535 ? 2 : 1)
-                           }
-                         }, 4933: (pp, ip, cp) => {
-                           cp.d(ip, {
-                             e: () => op,
-                             i: () => Lp,
-                             j: () => Ip,
-                             n: () => Sp,
-                             o: () => xp,
-                             q: () => wp,
-                             r: () => Dp,
-                             u: () => Ap,
-                             v: () => Up,
-                             y: () => Wp
- ... (11 more removed lines; see GitHub link above)
+     function zQ(QQ, WQ, XQ) {
+       const wQ = Math.floor(WQ.base[0] + qQ),
+         zQ = Math.floor(WQ.max[0] - qQ),
+         sQ = Math.floor(WQ.base[2] + qQ),
+         FQ = Math.floor(WQ.max[2] - qQ);
+       let PQ = -1 / 0;
+       for (let gQ = wQ; gQ <= zQ; gQ++)
+         for (let wQ = sQ; wQ <= FQ; wQ++) {
+           const zQ = QQ(gQ, XQ, wQ);
+           if (!zQ) continue;
+           const sQ = Array.isArray(zQ) ? zQ : TQ;
+           for (let QQ = 0; QQ < sQ.length; QQ += 6) WQ.base[0] < gQ + sQ[QQ + 3] - qQ && WQ.max[0] > gQ + sQ[QQ] + qQ && WQ.base[1] < XQ + sQ[QQ + 4] - qQ && WQ.max[1] > XQ + sQ[QQ + 1] + qQ && WQ.base[2] < wQ + sQ[QQ + 5] - qQ && WQ.max[2] > wQ + sQ[QQ + 2] + qQ && XQ + sQ[QQ +  … [truncated]
+         }
+       return PQ
+     }
```

#### 166. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L7114-L7116` → after: `L39416-L39425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR39416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L39416-L39425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L39416-L39425) · [Before (L7114-L7116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L7114-L7116)

```diff
-                           function Dp(pp) {
-                             return `/docs/${Yp(pp)}.md`
-                           }
+     function sQ(QQ, WQ, XQ) {
+       const wQ = Math.floor(WQ.base[0] + qQ),
+         TQ = Math.floor(WQ.max[0] - qQ),
+         zQ = Math.floor(WQ.base[2] + qQ),
+         sQ = Math.floor(WQ.max[2] - qQ);
+       for (let qQ = wQ; qQ <= TQ; qQ++)
+         for (let WQ = zQ; WQ <= sQ; WQ++)
+           if (QQ(qQ, XQ, WQ)) return !0;
+       return !1
+     }
```

#### 167. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L7118-L7130` → after: `L39427-L39433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR39427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L39427-L39433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L39427-L39433) · [Before (L7118-L7130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L7118-L7130)

```diff
-                           function Ap(pp, ip) {
-                             return `/docs/${Yp(pp)}/${ip+1}.md`
-                           }
-                           const Pp = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;
- 
-                           function Wp(pp) {
-                             const ip = Pp.exec(pp);
-                             return null === ip ? null : {
-                               name: ip[1],
-                               part: void 0 === ip[2] ? null : Number(ip[2])
-                             }
-                           }
-                           const yp = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;
+     function FQ(QQ) {
+       return QQ.Dk && QQ.Bs > 0 && QQ.depenetrate && null === QQ.Hk
+     }
+     const PQ = {
+       base: [0, 0, 0],
+       max: [0, 0, 0]
+     };
```

#### 168. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L7132-L7137` → after: `L39435-L39583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR39435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L39435-L39583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L39435-L39583) · [Before (L7132-L7137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L7132-L7137)

```diff
-                           function Up(pp) {
-                             const ip = yp.exec(pp);
-                             if (null === ip) return null;
-                             const [, cp = "", Op] = ip;
-                             return void 0 === Op ? Dp(cp) : Ap(cp, Number(Op) - 1)
-                           }
+     function gQ(QQ, WQ, XQ) {
+       const TQ = XQ.base[1],
+         FQ = Math.floor(TQ),
+         gQ = zQ(QQ, XQ, FQ),
+         JQ = gQ - TQ;
+       if (!(JQ >= wQ)) return 0;
+       if (sQ(WQ, XQ, FQ)) return 0;
+       const rQ = PQ;
+       for (let wQ = 0; wQ < 3; wQ++) rQ.base[wQ] = XQ.base[wQ], rQ.max[wQ] = XQ.max[wQ];
+       rQ.base[1] += JQ, rQ.max[1] += JQ;
+       const IQ = Math.floor(rQ.max[1] - qQ);
+       for (let wQ = Math.floor(gQ); wQ <= IQ; wQ++)
+         if (sQ(WQ, rQ, wQ) || zQ(QQ, rQ, wQ) !== -1 / 0) return 0;
+       return JQ
+     }
+   },
+ ... (133 more added lines; see GitHub link above)
```

#### 169. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L7139-L7293` → after: `L39585-L39587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR39585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L39585-L39587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L39585-L39587) · [Before (L7139-L7293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L7139-L7293)

```diff
-                           function wp(pp) {
-                             return `/docsHtml/${Yp(pp)}.html`
-                           }
-                         }, 4970: (pp, ip, cp) => {
-                           cp.d(ip, {
-                             d: () => op,
-                             f: () => Op,
-                             i: () => Ip,
-                             m: () => Lp,
-                             o: () => Sp
-                           });
-                           const Op = ["sine", "triangle", "square", "sawtooth"],
-                             op = 55,
-                             Ip = {
-                               soft: {
-                                 waveform: "sine",
- ... (139 more removed lines; see GitHub link above)
+     function zQ(QQ, WQ) {
+       return QQ + 65536 * WQ
+     }
```

#### 170. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L7295-L7297` → after: `L39589-L39591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR39589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L39589-L39591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L39589-L39591) · [Before (L7295-L7297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L7295-L7297)

```diff
-                           function xp(pp, ip, cp) {
-                             return Math.min(cp, Math.max(ip, pp))
-                           }
+     function sQ(QQ, WQ) {
+       return FQ(QQ) + 4 * FQ(WQ)
+     }
```

#### 171. `bundles/preprod.bloxd.io/chunks/js/79.js` (Changed code · before: `L7299-L7325` → after: `L39593-L39599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfdaR39593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd30e7b7e5d6aaa983901bfd25293449c94a8ed03640c54e1c47dea70938cfda) · [After (L39593-L39599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/79.js#L39593-L39599) · [Before (L7299-L7325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/79.js#L7299-L7325)

```diff
-                           function Lp(pp) {
-                             const ip = xp(pp.durationMs, 10, 500),
-                               cp = xp(pp.attackMs, 0, ip),
-                               {
-                                 intonation: op
-                               } = pp;
-                             return {
-                               waveform: Op.includes(pp.waveform) ? pp.waveform : "sine",
-                               pitchHz: xp(pp.pitchHz, 20, 4e3),
-                               glideSemitones: xp(pp.glideSemitones, -24, 24),
-                               durationMs: ip,
-                               attackMs: cp,
-                               releaseMs: xp(pp.releaseMs, 0, ip - cp),
-                               lowpassHz: null === pp.lowpassHz ? null : xp(pp.lowpassHz, 20, 2e4),
-                               volume: xp(pp.volume, 0, 2),
-                               intonation: {
- ... (11 more removed lines; see GitHub link above)
+     function FQ(QQ) {
+       return (Math.round(QQ / (Math.PI / 2)) % 4 + 4) % 4
+     }
+   }
+ };
+ Object.freeze(modules);
+ for (const QQ in modules) Object.freeze(modules[QQ]);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/80.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/80.js` (47 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102)

#### 1. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L4-L23` → after: `L4-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L4-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/80.js#L4-L56) · [Before (L4-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/80.js#L4-L23)

```diff
-   4824: pp => {
-     function ip(pp) {
-       return pp instanceof Map ? pp.clear = pp.delete = pp.set = function() {
-         throw new Error("map is read-only")
-       } : pp instanceof Set && (pp.add = pp.clear = pp.delete = function() {
-         throw new Error("set is read-only")
-       }), Object.freeze(pp), Object.getOwnPropertyNames(pp).forEach((cp => {
-         const Op = pp[cp],
-           op = typeof Op;
-         "object" !== op && "function" !== op || Object.isFrozen(Op) || ip(Op)
-       })), pp
-     }
-     class cp {
-       constructor(pp) {
-         void 0 === pp.data && (pp.data = {}), this.data = pp.data, this.isMatchIgnored = !1
-       }
- ... (4 more removed lines; see GitHub link above)
+   5002: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       e: () => tW,
+       f: () => JX,
+       g: () => KW,
+       k: () => WX,
+       n: () => NW,
+       o: () => mW,
+       p: () => LW,
+       q: () => nW,
+       s: () => hW,
+       v: () => gX,
+       z: () => PX,
+       A: () => xW,
+       C: () => uW
+     });
+ ... (37 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L25-L26` → after: `L58-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L58-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/80.js#L58-L59) · [Before (L25-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/80.js#L25-L26)

```diff
-     function Op(pp) {
-       return pp.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
+     function aQ(QQ, WQ) {
+       return QQ === `function ${WQ}() { [native code] }` || QQ === `function ${WQ}() {\n    [native code]\n}`
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L29-L54` → after: `L66-L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L66-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/80.js#L66-L92) · [Before (L29-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/80.js#L29-L54)

```diff
-     function op(pp) {
-       const ip = Object.create(null);
-       for (const Ip in pp) ip[Ip] = pp[Ip];
-       for (var cp = arguments.length, Op = new Array(cp > 1 ? cp - 1 : 0), op = 1; op < cp; op++) Op[op - 1] = arguments[op];
-       return Op.forEach((function(pp) {
-         for (const cp in pp) ip[cp] = pp[cp]
-       })), ip
-     }
-     const Ip = pp => !!pp.scope;
-     class Sp {
-       constructor(pp, ip) {
-         this.buffer = "", this.classPrefix = ip.classPrefix, pp.walk(this)
-       }
-       addText(pp) {
-         this.buffer += Op(pp)
-       }
- ... (10 more removed lines; see GitHub link above)
+     function AQ(QQ, WQ, XQ) {
+       if (cQ === iQ && vQ === pQ && ! function() {
+           const QQ = bQ;
+           return HQ >= VQ && (dQ(IQ, rQ, [QQ]), HQ = 0), QQ[HQ++] < 256 / yQ
+         }()) return function(QQ, WQ, XQ) {
+         return dQ(QQ, WQ, XQ ?? 0)
+       }(...arguments);
+       if (cQ === lQ || vQ === GQ) return zQ(QQ, WQ, XQ);
+       let wQ;
+       cQ = lQ;
+       try {
+         vQ === DQ && (vQ = UQ, vQ = function() {
+           const QQ = zQ(qQ, zQ, []);
+           if (aQ(QQ, "apply")) return GQ;
+           if (null === zQ(TQ, /\(\.\.\.arguments\)/, [QQ]) && null === zQ(TQ, /^function\s*\(\.\.\.[\w$]+\)/, [QQ])) return GQ;
+           if ("function" !== typeof BQ || "function" !== typeof sQ || "function" !== typeof FQ || "function" !== typeof PQ || "function" !== typeof gQ || "function" !== typeof IQ || "function" !== typeof JQ || !aQ(zQ(qQ, sQ, []), "call") || !aQ(zQ(qQ, FQ, []), "apply") || !aQ(zQ( … [truncated]
+ ... (11 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L56-L69` → after: `L94-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L94-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/80.js#L94-L97) · [Before (L56-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/80.js#L56-L69)

```diff
-           return `${cp}${pp}`
-         })(pp.scope, {
-           prefix: this.classPrefix
-         });
-         this.span(ip)
-       }
-       closeNode(pp) {
-         Ip(pp) && (this.buffer += "</span>")
-       }
-       value() {
-         return this.buffer
-       }
-       span(pp) {
-         this.buffer += `<span class="${pp}">`
+           return dQ = WQ, pQ
+         }()), wQ = zQ(QQ, WQ, XQ)
+       } catch (jQ) {
+         throw vQ = GQ, jQ
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L72-L117` → after: `L101-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L101-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/80.js#L101-L104) · [Before (L72-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/80.js#L72-L117)

```diff
-     const xp = function() {
-       let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
-       const ip = {
-         children: []
-       };
-       return Object.assign(ip, pp), ip
-     };
-     class Lp {
-       constructor() {
-         this.ZH = xp(), this.stack = [this.ZH]
-       }
-       get top() {
-         return this.stack[this.stack.length - 1]
-       }
-       get root() {
-         return this.ZH
- ... (30 more removed lines; see GitHub link above)
+     let RQ = zQ;
+ 
+     function EQ() {
+       return (RQ === zQ ? 0 : 3) + cQ
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L119-L141` → after: `L106-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L106-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/80.js#L106-L109) · [Before (L119-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/80.js#L119-L141)

```diff
-     class Yp extends Lp {
-       constructor(pp) {
-         super(), this.options = pp
-       }
-       addText(pp) {
-         "" !== pp && this.add(pp)
-       }
-       startScope(pp) {
-         this.openNode(pp)
-       }
-       endScope() {
-         this.closeNode()
-       }
-       __addSublanguage(pp, ip) {
-         const cp = pp.root;
-         ip && (cp.scope = `language:${ip}`), this.add(cp)
- ... (7 more removed lines; see GitHub link above)
+ 
+     function CQ() {
+       const QQ = EQ();
+       return RQ = zQ, QQ
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L145` → after: `L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/80.js#L113) · [Before (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/80.js#L145)

```diff
-       return pp ? "string" === typeof pp ? pp : pp.source : null
+       RQ = QQ >= 3 ? AQ : zQ, cQ = QQ % 3
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L149` → after: `L132-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L132-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/80.js#L132-L138) · [Before (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/80.js#L149)

```diff
-       return yp("(?=", pp, ")")
+       if ("function" !== typeof QQ) return "#a0.0";
+       const WQ = RQ(nQ, mQ, [QQ]);
+       if (void 0 !== WQ) return WQ;
+       const XQ = RQ(LQ, QQ, []),
+         wQ = XQ.length > OQ ? OQ : XQ.length,
+         qQ = `#${function(QQ,WQ){const XQ=RQ(SQ,YQ,[WQ]);if(null===XQ)return"s";const wQ=XQ[1];if("ProxyObject"===wQ)return"p";if(""!==wQ)return RQ(oQ,wQ,["bound "])?"b":"n";try{const WQ=kQ(QQ,"name"),XQ=void 0!==WQ&&RQ(fQ,WQ,["value"])?WQ.value:void 0;return"string"===typeof XQ& … [truncated]
+       return RQ(xQ, mQ, [QQ, qQ]), qQ
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L153` → after: `L142-L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L142-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/80.js#L142-L143) · [Before (L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/80.js#L153)

```diff
-       return yp("(?:", pp, ")*")
+       const WQ = RQ(SQ, KQ, [QQ]);
+       return null === WQ ? QQ : WQ[1]
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L156-L157` → after: `L157-L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L157-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/80.js#L157-L164) · [Before (L156-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/80.js#L156-L157)

```diff
-     function Wp(pp) {
-       return yp("(?:", pp, ")?")
+     function rW(QQ, WQ, XQ) {
+       return {
+         code: QQ,
+         holder: WQ,
+         key: XQ,
+         ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
+         native: new RegExp(`^function (get )?${XQ}\\(\\) \\{\\s*\\[native code\\]\\s*\\}$`)
+       }
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L161-L162` → after: `L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/80.js#L168) · [Before (L161-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/80.js#L161-L162)

```diff
-       for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
-       return ip.map((pp => Dp(pp))).join("")
+       return JW
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L166-L171` → after: `L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/80.js#L174) · [Before (L166-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/80.js#L166-L171)

```diff
-       for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
-       const Op = function(pp) {
-         const ip = pp[pp.length - 1];
-         return "object" === typeof ip && ip.constructor === Object ? (pp.splice(pp.length - 1, 1), ip) : {}
-       }(ip);
-       return "(" + (Op.capture ? "" : "?:") + ip.map((pp => Dp(pp))).join("|") + ")"
+       return BW
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L175` → after: `L245-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L245-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/80.js#L245-L250) · [Before (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/80.js#L175)

```diff
-       return new RegExp(pp.toString() + "|").exec("").length - 1
+       let WQ;
+       try {
+         const XQ = PW(globalThis, QQ);
+         WQ = "function" === typeof XQ ? XQ.prototype : void 0
+       } catch {}
+       return () => WQ
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L179-L197` → after: `L253-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/80.js#L253-L254) · [Before (L179-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/80.js#L179-L197)

```diff
-     function tp(pp, ip) {
-       let {
-         joinWith: cp
-       } = ip, Op = 0;
-       return pp.map((pp => {
-         Op += 1;
-         const ip = Op;
-         let cp = Dp(pp),
-           op = "";
-         for (; cp.length > 0;) {
-           const pp = vp.exec(cp);
-           if (!pp) {
-             op += cp;
-             break
-           }
-           op += cp.substring(0, pp.index), cp = cp.substring(pp.index + pp[0].length), "\\" === pp[0][0] && pp[1] ? op += "\\" + String(Number(pp[1]) + ip) : (op += pp[0], "(" === pp[0] && Op++)
- ... (3 more removed lines; see GitHub link above)
+     function bW(QQ, WQ, XQ) {
+       return XQ.map((XQ => rW(QQ, WQ, XQ)))
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L199-L253` → after: `L256-L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L256-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/80.js#L256-L257) · [Before (L199-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/80.js#L199-L253)

```diff
-     const Hp = "[a-zA-Z]\\w*",
-       dp = "[a-zA-Z_]\\w*",
-       ep = "\\b\\d+(\\.\\d+)?",
-       jp = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
-       kp = "\\b(0b[01]+)",
-       mp = {
-         mW: "\\\\[\\s\\S]",
-         relevance: 0
-       },
-       Rp = {
-         scope: "string",
-         mW: "'",
-         end: "'",
-         illegal: "\\n",
-         contains: [mp]
-       },
- ... (39 more removed lines; see GitHub link above)
+     const vW = rW("rx", UW("HTMLCanvasElement"), "getContext"),
+       dW = ["createShader", "shaderSource", "compileShader", "createProgram", "linkProgram", "useProgram", "drawArrays", "drawElements", "depthFunc", "depthMask", "enable", "disable", "blendFuncSeparate", "colorMask"],
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L255-L282` → after: `L259-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L259-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/80.js#L259-L261) · [Before (L255-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/80.js#L255-L282)

```diff
-         scope: "number",
-         mW: kp,
-         relevance: 0
-       },
-       Bp = {
-         scope: "regexp",
-         mW: /\/(?=[^/\n]*\/)/,
-         end: /\/[gimuy]*/,
-         contains: [mp, {
-           mW: /\[/,
-           end: /\]/,
-           relevance: 0,
-           contains: [mp]
-         }]
-       },
-       Np = {
- ... (12 more removed lines; see GitHub link above)
+         webgpu: [...bW("gd", UW("GPUDevice"), ["createShaderModule", "createRenderPipeline", "createCommandEncoder"]), ...bW("gq", UW("GPUQueue"), ["submit", "writeBuffer"]), ...bW("ge", UW("GPUCommandEncoder"), ["beginRenderPass", "finish"]), ...bW("gp", UW("GPURenderPassEncoder … [truncated]
+         webgl: [...bW("g2", UW("WebGL2RenderingContext"), [...dW, "drawArraysInstanced", "drawElementsInstanced"]), vW],
+         webgl1: [...bW("g1", UW("WebGLRenderingContext"), dW), vW]
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L284-L333` → after: `L263-L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L263-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/80.js#L263-L264) · [Before (L284-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/80.js#L284-L333)

```diff
-     var bp = Object.freeze({
-       __proto__: null,
-       APOS_STRING_MODE: Rp,
-       BACKSLASH_ESCAPE: mp,
-       BINARY_NUMBER_MODE: Jp,
-       BINARY_NUMBER_RE: kp,
-       COMMENT: Mp,
-       C_BLOCK_COMMENT_MODE: Ep,
-       C_LINE_COMMENT_MODE: Cp,
-       C_NUMBER_MODE: Qp,
-       C_NUMBER_RE: jp,
-       END_SAME_AS_BEGIN: function(pp) {
-         return Object.assign(pp, {
-           "on:begin": (pp, ip) => {
-             ip.data._beginMatch = pp[1]
-           },
- ... (34 more removed lines; see GitHub link above)
+     let aW = [];
+     const lW = new WeakMap;
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L336` → after: `L267-L272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L267-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/80.js#L267-L272) · [Before (L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/80.js#L336)

```diff
-       "." === pp.input[pp.index - 1] && ip.ignoreMatch()
+       const XQ = CQ();
+       try {
+         RQ(FW, lW, [QQ, WQ])
+       } finally {
+         uQ(XQ)
+       }
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L339-L340` → after: `L275-L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L275-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/80.js#L275-L282) · [Before (L339-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/80.js#L339-L340)

```diff
-     function ap(pp, ip) {
-       void 0 !== pp.className && (pp.scope = pp.className, delete pp.className)
+     function iW(QQ) {
+       try {
+         const WQ = sX(QQ),
+           XQ = RQ(sW, lW, [WQ]);
+         return QX(XQ, QQ) ? cW(QQ, !0) : `${cW(QQ,!1)}${MQ(XQ??WQ)}`
+       } catch {
+         return `${cW(QQ,!1)}${MQ(void 0)}`
+       }
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L344` → after: `L286-L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L286-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/80.js#L286-L290) · [Before (L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/80.js#L344)

```diff
-       ip && pp.beginKeywords && (pp.mW = "\\b(" + pp.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", pp.__beforeBegin = hp, pp.keywords = pp.keywords || pp.beginKeywords, delete pp.beginKeywords, void 0 === pp.relevance && (pp.relevance = 0))
+       let {
+         code: XQ,
+         key: wQ
+       } = QQ;
+       return `wh:${XQ}${WQ?"-dbg":""}:${wQ}`
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L347-L348` → after: `L293-L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L293-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/80.js#L293-L294) · [Before (L347-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/80.js#L347-L348)

```diff
-     function Fp(pp, ip) {
-       Array.isArray(pp.illegal) && (pp.illegal = Up(...pp.illegal))
+     function AW(QQ) {
+       return Object.values(HW).flatMap((WQ => WQ.map((WQ => cW(WQ, QQ)))))
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L351-L354` → after: `L300-L309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L300-L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/80.js#L300-L309) · [Before (L351-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/80.js#L351-L354)

```diff
-     function gp(pp, ip) {
-       if (pp.match) {
-         if (pp.mW || pp.end) throw new Error("begin & end are not supported with match");
-         pp.mW = pp.match, delete pp.match
+     function uW(QQ) {
+       aW = HW[QQ]
+     }
+ 
+     function LW(QQ) {
+       const WQ = CQ();
+       try {
+         return kW(QQ) || kW(QW(QQ))
+       } finally {
+         uQ(WQ)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L358-L359` → after: `L313-L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L313-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/80.js#L313-L314) · [Before (L358-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/80.js#L358-L359)

```diff
-     function Gp(pp, ip) {
-       void 0 === pp.relevance && (pp.relevance = 1)
+     function kW(QQ) {
+       return RQ(zW, EW, [QQ])
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L376-L381` → after: `L317-L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L317-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/80.js#L317-L323) · [Before (L376-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/80.js#L376-L381)

```diff
-     function zp(pp, ip) {
-       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "keyword";
-       const Op = Object.create(null);
-       return "string" === typeof pp ? op(cp, pp.split(" ")) : Array.isArray(pp) ? op(cp, pp) : Object.keys(pp).forEach((function(cp) {
-         Object.assign(Op, zp(pp[cp], ip, cp))
-       })), Op;
+     function fW(QQ) {
+       return new Set(GW.filter((WQ => WQ.tier === QQ)).map((QQ => `wh:${QQ.code}`)))
+     }
+     const SW = fW("punished"),
+       tW = !1,
+       oW = new Set(WW.d),
+       eW = fW("weighted");
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L383-L387` → after: `L325-L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L325-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/80.js#L325-L330) · [Before (L383-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/80.js#L383-L387)

```diff
-       function op(pp, cp) {
-         ip && (cp = cp.map((pp => pp.toLowerCase()))), cp.forEach((function(ip) {
-           const cp = ip.split("|");
-           Op[cp[0]] = [pp, sp(cp[0], cp[1])]
-         }))
+     function nW(QQ) {
+       const WQ = CQ();
+       try {
+         return YW(QW(QQ))
+       } finally {
+         uQ(WQ)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L391-L394` → after: `L334-L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L334-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/80.js#L334-L340) · [Before (L391-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/80.js#L391-L394)

```diff
-     function sp(pp, ip) {
-       return ip ? Number(ip) : function(pp) {
-         return Zp.includes(pp.toLowerCase())
-       }(pp) ? 0 : 1
+     function xW(QQ) {
+       const WQ = CQ();
+       try {
+         return QW(QQ)
+       } finally {
+         uQ(WQ)
+       }
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L409-L417` → after: `L343-L344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L343-L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/80.js#L343-L344) · [Before (L409-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/80.js#L409-L417)

```diff
-     function oi(pp, ip, cp) {
-       let {
-         key: Op
-       } = cp, op = 0;
-       const Ip = pp[Op],
-         Sp = {},
-         xp = {};
-       for (let Lp = 1; Lp <= ip.length; Lp++) xp[Lp + op] = Ip[Lp], Sp[Lp + op] = !0, op += wp(ip[Lp - 1]);
-       pp[Op] = xp, pp[Op]._emit = Sp, pp[Op]._multi = !0
+     function YW(QQ) {
+       return RQ(zW, eW, [QQ])
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L421-L449` → after: `L348-L353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L348-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/80.js#L348-L353) · [Before (L421-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/80.js#L421-L449)

```diff
-       ! function(pp) {
-         pp.scope && "object" === typeof pp.scope && null !== pp.scope && (pp.beginScope = pp.scope, delete pp.scope)
-       }(pp), "string" === typeof pp.beginScope && (pp.beginScope = {
-           _wrap: pp.beginScope
-         }), "string" === typeof pp.endScope && (pp.endScope = {
-           _wrap: pp.endScope
-         }),
-         function(pp) {
-           if (Array.isArray(pp.mW)) {
-             if (pp.skip || pp.excludeBegin || pp.returnBegin) throw Vp("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), Oi;
-             if ("object" !== typeof pp.beginScope || null === pp.beginScope) throw Vp("beginScope must be object"), Oi;
-             oi(pp, pp.mW, {
-               key: "beginScope"
-             }), pp.mW = tp(pp.mW, {
-               joinWith: ""
-             })
- ... (13 more removed lines; see GitHub link above)
+       const WQ = CQ();
+       try {
+         return ZW(QQ)
+       } finally {
+         uQ(WQ)
+       }
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L453-L546` → after: `L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/80.js#L357) · [Before (L453-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/80.js#L453-L546)

```diff
-       function ip(ip, cp) {
-         return new RegExp(Dp(ip), "m" + (pp.case_insensitive ? "i" : "") + (pp.unicodeRegex ? "u" : "") + (cp ? "g" : ""))
-       }
-       class cp {
-         constructor() {
-           this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
-         }
-         addRule(pp, ip) {
-           ip.position = this.position++, this.matchIndexes[this.matchAt] = ip, this.regexes.push([ip, pp]), this.matchAt += wp(pp) + 1
-         }
-         compile() {
-           0 === this.regexes.length && (this.exec = () => null);
-           const pp = this.regexes.map((pp => pp[1]));
-           this.matcherRe = ip(tp(pp, {
-             joinWith: "|"
-           }), !0), this.lastIndex = 0
- ... (78 more removed lines; see GitHub link above)
+       return RQ(zW, oW, [QQ])
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L550` → after: `L361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/80.js#L361) · [Before (L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/80.js#L550)

```diff
-       return !!pp && (pp.endsWithParent || xi(pp.starts))
+       return "wb" === QQ || RQ(zW, SW, [QQ])
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L552-L554` → after: `L363-L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L363-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/80.js#L363-L369) · [Before (L552-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/80.js#L552-L554)

```diff
-     class Li extends Error {
-       constructor(pp, ip) {
-         super(pp), this.name = "HTMLInjectionError", this.html = ip
+ 
+     function KW(QQ) {
+       const WQ = CQ();
+       try {
+         return OW(QQ) || ZW(QQ)
+       } finally {
+         uQ(WQ)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L582-L597` → after: `L373-L380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L373-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/80.js#L373-L380) · [Before (L582-L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/80.js#L582-L597)

```diff
-         function wp(pp) {
-           return Dp.noHighlightRe.test(pp)
-         }
- 
-         function vp(pp, ip, cp) {
-           let Op = "",
-             op = "";
-           "object" === typeof ip ? (Op = pp, cp = ip.ignoreIllegals, op = ip.language) : (ci("10.7.0", "highlight(lang, code, ...args) has been deprecated."), ci("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), op … [truncated]
-           const Ip = {
-             code: Op,
-             language: op
-           };
-           qp("before:highlight", Ip);
-           const Sp = Ip.result ? Ip.result : tp(Ip.language, Ip.code, cp);
-           return Sp.code = Ip.code, qp("after:highlight", Sp), Sp
-         }
+     function mW(QQ) {
+       const WQ = CQ();
+       try {
+         return "wb" === QQ || tW && OW(QQ)
+       } finally {
+         uQ(WQ)
+       }
+     }
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L599-L600` → after: `L382-L388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L382-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/80.js#L382-L388) · [Before (L599-L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/80.js#L599-L600)

```diff
-         function tp(pp, ip, op, Ip) {
-           const Lp = Object.create(null);
+     function MW(QQ, WQ) {
+       let {
+         isGetter: XQ
+       } = WQ;
+       const wQ = wW(QQ, XQ ? "get" : "value");
+       return void 0 === wQ ? void 0 : wQ.value
+     }
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L602-L624` → after: `L390-L396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L390-L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/80.js#L390-L396) · [Before (L602-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/80.js#L602-L624)

```diff
-           function Yp() {
-             if (!qp.keywords) return void Cp.addText(Ep);
-             let pp = 0;
-             qp.keywordPatternRe.lastIndex = 0;
-             let ip = qp.keywordPatternRe.exec(Ep),
-               cp = "";
-             for (; ip;) {
-               cp += Ep.substring(pp, ip.index);
-               const op = jp.case_insensitive ? ip[0].toLowerCase() : ip[0],
-                 Ip = (Op = op, qp.keywords[Op]);
-               if (Ip) {
-                 const [pp, Op] = Ip;
-                 if (Cp.addText(cp), cp = "", Lp[op] = (Lp[op] || 0) + 1, Lp[op] <= 7 && (Xp += Op), pp.startsWith("_")) cp += ip[0];
-                 else {
-                   const cp = jp.classNameAliases[pp] || pp;
-                   Pp(ip[0], cp)
- ... (7 more removed lines; see GitHub link above)
+     function QX(QQ, WQ) {
+       let {
+         isConstructor: XQ,
+         native: wQ
+       } = WQ;
+       return "function" === typeof QQ && (!(!XQ && RQ(TW, QQ, ["prototype"])) && null !== RQ(qW, wQ, [RQ(XW, QQ, [])]))
+     }
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L626-L636` → after: `L398-L404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L398-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/80.js#L398-L404) · [Before (L626-L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/80.js#L626-L636)

```diff
-           function Ap() {
-             null != qp.subLanguage ? function() {
-               if ("" === Ep) return;
-               let pp = null;
-               if ("string" === typeof qp.subLanguage) {
-                 if (!Op[qp.subLanguage]) return void Cp.addText(Ep);
-                 pp = tp(qp.subLanguage, Ep, !0, Mp[qp.subLanguage]), Mp[qp.subLanguage] = pp._top
-               } else pp = Hp(Ep, qp.subLanguage.length ? qp.subLanguage : null);
-               qp.relevance > 0 && (Xp += pp.relevance), Cp.__addSublanguage(pp._emitter, pp.language)
-             }() : Yp(), Ep = ""
-           }
+     function WX(QQ, WQ) {
+       return QX(QQ, rW("", (() => {}), WQ, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? {
+         isConstructor: !0
+       } : {}))
+     }
+     let XX = null,
+       wX = !1;
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L638-L640` → after: `L406-L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L406-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/80.js#L406-L412) · [Before (L638-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/80.js#L638-L640)

```diff
-           function Pp(pp, ip) {
-             "" !== pp && (Cp.startScope(ip), Cp.addText(pp), Cp.endScope())
-           }
+     function qX() {
+       try {
+         return globalThis.WebAssembly === JW
+       } catch {
+         return !1
+       }
+     }
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L642-L652` → after: `L414-L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L414-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/80.js#L414-L430) · [Before (L642-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/80.js#L642-L652)

```diff
-           function Wp(pp, ip) {
-             let cp = 1;
-             const Op = ip.length - 1;
-             for (; cp <= Op;) {
-               if (!pp._emit[cp]) {
-                 cp++;
-                 continue
-               }
-               const Op = jp.classNameAliases[pp[cp]] || pp[cp],
-                 op = ip[cp];
-               Op ? Pp(op, Op) : (Ep = op, Yp(), Ep = ""), cp++
+     function TX(QQ) {
+       try {
+         return function(QQ) {
+           const {
+             holder: WQ,
+             key: XQ,
+             onNamespace: wQ,
+             inSecureContext: qQ
+           } = QQ, TQ = WQ(), zQ = pW(TQ, XQ);
+           if (!zQ) return !(qQ && !0 === globalThis.isSecureContext);
+           const sQ = MW(zQ, QQ);
+           if (!QX(sQ, QQ)) return !1;
+           if (wQ) {
+             const WQ = globalThis.WebAssembly;
+             if (WQ !== TQ && null !== WQ && ("object" === typeof WQ || "function" === typeof WQ)) {
+               const wQ = PW(WQ, XQ);
+ ... (1 more added lines; see GitHub link above)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L656-L680` → after: `L440-L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L440-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/80.js#L440-L448) · [Before (L656-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/80.js#L656-L680)

```diff
-           function yp(pp, ip) {
-             return pp.scope && "string" === typeof pp.scope && Cp.openNode(jp.classNameAliases[pp.scope] || pp.scope), pp.beginScope && (pp.beginScope._wrap ? (Pp(Ep, jp.classNameAliases[pp.beginScope._wrap] || pp.beginScope._wrap), Ep = "") : pp.beginScope._multi && (Wp(pp.begin … [truncated]
-               parent: {
-                 value: qp
-               }
-             }), qp
-           }
- 
-           function Up(pp, ip, Op) {
-             let op = function(pp, ip) {
-               const cp = pp && pp.exec(ip);
-               return cp && 0 === cp.index
-             }(pp.endRe, Op);
-             if (op) {
-               if (pp["on:end"]) {
-                 const Op = new cp(pp);
- ... (9 more removed lines; see GitHub link above)
+     function zX(QQ) {
+       const WQ = `wh:${QQ.code}`;
+       if ("punished" === QQ.tier) return WQ;
+       try {
+         return `${WQ}${MQ(sX(QQ))}`
+       } catch {
+         return `${WQ}${MQ(void 0)}`
+       }
+     }
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L682-L684` → after: `L450-L454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L450-L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/80.js#L450-L454) · [Before (L682-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/80.js#L682-L684)

```diff
-           function wp(pp) {
-             return 0 === qp.matcher.regexIndex ? (Ep += pp[0], 1) : (Jp = !0, 0)
-           }
+     function sX(QQ) {
+       const WQ = pW(QQ.holder(), QQ.key),
+         XQ = void 0 === WQ ? void 0 : MW(WQ, QQ);
+       return QQ.onNamespace && !qX() && QX(XQ, QQ) ? PW(globalThis.WebAssembly, QQ.key) : XQ
+     }
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L686-L698` → after: `L456-L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L456-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/80.js#L456-L462) · [Before (L686-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/80.js#L686-L698)

```diff
-           function vp(pp) {
-             const cp = pp[0],
-               Op = ip.substring(pp.index),
-               op = Up(qp, pp, Op);
-             if (!op) return Ai;
-             const Ip = qp;
-             qp.endScope && qp.endScope._wrap ? (Ap(), Pp(cp, qp.endScope._wrap)) : qp.endScope && qp.endScope._multi ? (Ap(), Wp(qp.endScope, pp)) : Ip.skip ? Ep += cp : (Ip.returnEnd || Ip.excludeEnd || (Ep += cp), Ap(), Ip.excludeEnd && (Ep = cp));
-             do {
-               qp.scope && Cp.closeNode(), qp.skip || qp.subLanguage || (Xp += qp.relevance), qp = qp.parent
-             } while (qp !== op.parent);
-             return op.starts && yp(op.starts, pp), Ip.returnEnd ? 0 : cp.length
-           }
-           let dp = {};
+     function FX(QQ) {
+       if (OW(QQ)) return 5;
+       const WQ = QW(QQ);
+       return YW(WQ) ? 4 : ZW(QQ) ? 3 : kW(WQ) ? function(QQ) {
+         return RQ(zW, RW, [QQ])
+       }(WQ) ? -1 : WQ === CW ? 0 : 1 : 2
+     }
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L700-L725` → after: `L464-L479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L464-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/80.js#L464-L479) · [Before (L700-L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/80.js#L700-L725)

```diff
-           function ep(Op, Ip) {
-             const xp = Ip && Ip[0];
-             if (Ep += Op, null == xp) return Ap(), 0;
-             if ("mW" === dp.type && "end" === Ip.type && dp.index === Ip.index && "" === xp) {
-               if (Ep += ip.slice(Ip.index, Ip.index + 1), !Sp) {
-                 const ip = new Error(`0 width match regex (${pp})`);
-                 throw ip.languageName = pp, ip.badRule = dp.rule, ip
-               }
-               return 1
-             }
-             if (dp = Ip, "mW" === Ip.type) return function(pp) {
-               const ip = pp[0],
-                 Op = pp.rule,
-                 op = new cp(Op),
-                 Ip = [Op.__beforeBegin, Op["on:begin"]];
-               for (const cp of Ip)
- ... (10 more removed lines; see GitHub link above)
+     function PX() {
+       const QQ = function() {
+         const QQ = EQ();
+         return vQ === DQ || vQ === pQ ? (RQ = AQ, cQ = hQ) : RQ = zQ, QQ
+       }();
+       try {
+         if (null === XX || !OW(XX)) {
+           const QQ = function() {
+             if (void 0 === JW) return null;
+             let QQ = qX() ? null : "wh:wa";
+             const WQ = WQ => {
+               null !== WQ && (null === QQ || FX(WQ) > FX(QQ)) && (QQ = WQ)
+             };
+             for (let XQ = 0; XQ < GW.length; XQ++) {
+               const QQ = GW[XQ];
+               void 0 === QQ || TX(QQ) || WQ(zX(QQ))
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L727-L729` → after: `L481-L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L481-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/80.js#L481-L484) · [Before (L727-L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/80.js#L727-L729)

```diff
-             if ("illegal" === Ip.type && "" === xp) return Ep += "\n", 1;
-             if (Qp > 1e5 && Qp > 3 * Ip.index) {
-               throw new Error("potential infinite loop, way more iterations than matches")
+             WQ((0, WW.p)());
+             for (let XQ = 0; XQ < aW.length; XQ++) {
+               const QQ = aW[XQ];
+               void 0 === QQ || TX(QQ) || WQ(iW(QQ))
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L731-L743` → after: `L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/80.js#L486) · [Before (L731-L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/80.js#L731-L743)

```diff
-             return Ep += xp, xp.length
-           }
-           const jp = kp(pp);
-           if (!jp) throw Vp(xp.replace("{}", pp)), new Error('Unknown language: "' + pp + '"');
-           const mp = Si(jp);
-           let Rp = "",
-             qp = Ip || mp;
-           const Mp = {},
-             Cp = new Dp.__emitter(Dp);
-           ! function() {
-             const pp = [];
-             for (let ip = qp; ip !== jp; ip = ip.parent) ip.scope && pp.unshift(ip.scope);
-             pp.forEach((pp => Cp.openNode(pp)))
+             return QQ
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L745-L899` → after: `L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/80.js#L488) · [Before (L745-L899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/80.js#L745-L899)

```diff
-           let Ep = "",
-             Xp = 0,
-             lp = 0,
-             Qp = 0,
-             Jp = !1;
-           try {
-             if (jp.__emitTokens) jp.__emitTokens(ip, Cp);
-             else {
-               for (qp.matcher.considerAll();;) {
-                 Qp++, Jp ? Jp = !1 : qp.matcher.considerAll(), qp.matcher.lastIndex = lp;
-                 const pp = qp.matcher.exec(ip);
-                 if (!pp) break;
-                 const cp = ep(ip.substring(lp, pp.index), pp);
-                 lp = pp.index + cp
-               }
-               ep(ip.substring(lp))
- ... (139 more removed lines; see GitHub link above)
+           (null === XX || null !== QQ && FX(QQ) > FX(XX)) && (XX = QQ)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L901-L1322` → after: `L490-L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L490-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/80.js#L490-L491) · [Before (L901-L1322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/80.js#L901-L1322)

```diff
-         Object.assign(pp, {
-           highlight: vp,
-           highlightAuto: Hp,
-           highlightAll: jp,
-           highlightElement: dp,
-           highlightBlock: function(pp) {
-             return ci("10.7.0", "highlightBlock will be removed entirely in v12.0"), ci("10.7.0", "Please use highlightElement now."), dp(pp)
-           },
-           configure: function(pp) {
-             Dp = Di(Dp, pp)
-           },
-           initHighlighting: () => {
-             jp(), ci("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.")
-           },
-           initHighlightingOnLoad: function() {
-             jp(), ci("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
- ... (406 more removed lines; see GitHub link above)
+       } finally {
+         uQ(QQ)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L1339-L1669` → after: `L495-L496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L495-L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/80.js#L495-L496) · [Before (L1339-L1669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/80.js#L1339-L1669)

```diff
-     function Ap(pp) {
-       const ip = pp.regex,
-         cp = Op,
-         Ap = "<>",
-         Pp = "</>",
-         Wp = {
-           mW: /<[A-Za-z0-9\\._:-]+/,
-           end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
-           isTrulyOpeningTag: (pp, ip) => {
-             const cp = pp[0].length + pp.index,
-               Op = pp.input[cp];
-             if ("<" === Op || "," === Op) return void ip.ignoreMatch();
-             let op;
-             ">" === Op && (((pp, ip) => {
-               let {
-                 after: cp
- ... (315 more removed lines; see GitHub link above)
+     function gX() {
+       wX = !0
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/80.js` (Changed code · before: `L1672-L1723` → after: `L499-L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102R499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e34e2209479edb8bc2373ba80a8271167466813bd7802276be193fc9f03b9102) · [After (L499-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/80.js#L499-L504) · [Before (L1672-L1723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/80.js#L1672-L1723)

```diff
-     function Pp(pp) {
-       const ip = pp.regex,
-         cp = Ap(pp),
-         Sp = Op,
-         xp = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"],
-         Lp = {
-           mW: [/namespace/, /\s+/, pp.IDENT_RE],
-           beginScope: {
-             1: "keyword",
-             3: "title.class"
-           }
-         },
-         Pp = {
-           beginKeywords: "interface",
-           end: /\{/,
-           excludeEnd: !0,
- ... (36 more removed lines; see GitHub link above)
+     function JX() {
+       if (wX) return "wb";
+       if ((!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && PX(), null !== XX) return XX;
+       if (void 0 === JW) return "wn:unsupported";
+       const QQ = (0, wQ.r)();
+       return null === QQ ? null : `wn:${QQ}`
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/81.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/81.js` (73 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa)

#### 1. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L4` → after: `L4-L8656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L4-L8656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L4-L8656) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L4)

```diff
-   4844: (pp, ip, cp) => {
+   34384: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       EverythingMenu: () => FF
+     });
+     var wQ = XQ(61),
+       qQ = XQ(1081),
+       TQ = XQ.n(qQ),
+       zQ = XQ(1226),
+       sQ = XQ(1094),
+       FQ = XQ(2145),
+       PQ = XQ(1507),
+       gQ = XQ(1154),
+       JQ = XQ(1145);
+ 
+     function rQ(QQ) {
+       let {
+ ... (8637 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L7-L15` → after: `L8659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR8659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L8659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L8659) · [Before (L7-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L7-L15)

```diff
-       g: () => Sp,
-       k: () => wp,
-       n: () => Up,
-       q: () => xp,
-       r: () => op,
-       s: () => Ip,
-       t: () => yp,
-       w: () => Wp,
-       x: () => Pp
+       e: () => yQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L17` → after: `L8661-L8672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR8661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L8661-L8672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L8661-L8672) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L17)

```diff
-     const Op = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;
+     XQ(34562);
+     var wQ = XQ(61),
+       qQ = XQ(1081),
+       TQ = XQ.n(qQ),
+       zQ = XQ(1226),
+       sQ = XQ(1507),
+       FQ = XQ(2726),
+       PQ = XQ(1094),
+       gQ = XQ(2329),
+       JQ = XQ(3336),
+       rQ = XQ(2366),
+       IQ = XQ(1145);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L20-L24` → after: `L8675-L8734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR8675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L8675-L8734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L8675-L8734) · [Before (L20-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L20-L24)

```diff
-       try {
-         return decodeURIComponent(pp.slice(1))
-       } catch {
-         return pp.slice(1)
-       }
+       let {
+         endsAt: WQ,
+         className: XQ
+       } = QQ;
+       return (0, IQ.jsxs)("span", {
+         className: TQ()("NewPlayerDealClock", XQ),
+         children: [(0, IQ.jsx)(PQ.d, {
+           name: "hourglass"
+         }), (0, IQ.jsx)(FQ.h, {
+           toTime: WQ
+         })]
+       })
+     }
+ 
+     function BQ(QQ) {
+       let {
+ ... (44 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L28` → after: `L8738-L8771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR8738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L8738-L8771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L8738-L8771) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L28)

```diff
-       return pp.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
+       let {
+         view: WQ,
+         needsLogin: XQ,
+         busy: qQ,
+         highlight: sQ,
+         onBuy: FQ
+       } = QQ;
+       const {
+         t: PQ
+       } = (0, zQ.C)();
+       return (0, IQ.jsxs)("div", {
+         className: TQ()("NewPlayerDealPacks", WQ.packs.length > 1 ? "NewPlayerDealPacksTwo" : "NewPlayerDealPacksOne"),
+         children: [WQ.packs.map(((QQ, WQ) => (0, IQ.jsxs)(wQ.Fragment, {
+           children: [WQ > 0 && (0, IQ.jsx)("div", {
+             className: "NewPlayerDealDivider",
+             "aria-hidden": !0,
+ ... (18 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L30` → after: `L8773-L8799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR8773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L8773-L8799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L8773-L8799) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L30)

```diff
-     const Sp = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${Op.source}`, "g");
+   },
+   34568: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       c: () => HQ,
+       d: () => lQ
+     });
+     XQ(34562);
+     var wQ = XQ(3330),
+       qQ = XQ(1532),
+       TQ = XQ(2359),
+       zQ = XQ(3320),
+       sQ = XQ(3294),
+       FQ = XQ(3322),
+       PQ = XQ(3276),
+       gQ = XQ(1226),
+       JQ = XQ(1404),
+ ... (11 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L33` → after: `L8802-L8825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR8802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L8802-L8825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L8802-L8825) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L33)

```diff
-       return 2 === pp.length ? ip.replace(/^ (.*) $/, "$1") : ip
+       null !== QQ && (0, VQ.o)(QQ) || ((0, qQ.reportAnalyticsClick)({
+         id: "store.purchase_done",
+         value: `self:${WQ.pack.packageId}`
+       }), null !== QQ && (0, VQ.u)(QQ), HQ(WQ.pack.gems))
+     }
+ 
+     function dQ(QQ, WQ, XQ) {
+       const qQ = (0, VQ.b)(WQ);
+       switch (QQ.kind) {
+         case "completed":
+           vQ(qQ, XQ);
+           break;
+         case "pending":
+           TQ = QQ.intentId, zQ = () => {
+             yQ.e.refresh(), vQ(qQ, XQ)
+           }, bQ || (bQ = !0, UQ.listen()), UQ.follow(TQ, zQ);
+ ... (8 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L37` → after: `L8829-L8836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR8829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L8829-L8836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L8829-L8836) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L37)

```diff
-       return "" === pp.trim()
+       JQ.NotificationProvider.showCustomPopup({
+         body: WQ => (0, GQ.jsx)(aQ, {
+           gems: QQ,
+           close: WQ
+         }),
+         middleScreenPopupClassName: "NewPlayerDealAddedPopup",
+         disableExitButton: !0
+       })
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L41-L43` → after: `L8840-L8863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR8840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L8840-L8863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L8840-L8863) · [Before (L41-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L41-L43)

```diff
-       const ip = [];
-       for (const cp of pp.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) ip.length > 0 && ip[ip.length - 1].endsWith("\\") ? ip[ip.length - 1] += `|${cp}` : ip.push(cp);
-       return ip.map((pp => pp.trim().replaceAll("\\|", "|")))
+       let {
+         gems: WQ,
+         close: XQ
+       } = QQ;
+       const {
+         t: wQ
+       } = (0, gQ.C)();
+       return (0, GQ.jsxs)("div", {
+         className: "NewPlayerDealAdded",
+         children: [(0, GQ.jsxs)("div", {
+           className: "NewPlayerDealAddedHead",
+           children: [(0, GQ.jsx)(jQ.d, {
+             name: "circle-check"
+           }), (0, GQ.jsx)(BQ.d, {
+             amount: WQ
+           }), (0, GQ.jsx)("span", {
+ ... (8 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L48-L58` → after: `L8867-L8892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR8867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L8867-L8892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L8867-L8892) · [Before (L48-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L48-L58)

```diff
-       const ip = [],
-         cp = [{
-           indent: -1,
-           items: ip
-         }];
-       let Op = null;
-       for (const op of pp) {
-         const pp = op.match(Dp);
-         if (!pp) {
-           Op && (Op.text += ` ${op.trim()}`);
-           continue
+       let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zQ.d;
+       const {
+         userContext: XQ
+       } = (0, rQ.c)(), {
+         purchaseUnderWay: wQ,
+         notice: qQ,
+         buy: FQ
+       } = (0, sQ.b)(WQ), PQ = (0, DQ.j)(), gQ = XQ.mayBuy() || (0, TQ.guestsMayBuy)(), JQ = null === PQ ? !gQ : PQ.guest && !XQ.isLoggedIn();
+       return {
+         purchaseUnderWay: wQ,
+         notice: qQ,
+         needsLogin: JQ,
+         buyPack: function(wQ, qQ) {
+           (0, VQ.F)("new_player_deal.buy", (0, pQ.e)(wQ.arm, QQ, qQ.pack.packageId)), null === PQ ? FQ(function(QQ) {
+             return {
+               sku: QQ.pack.packageId,
+ ... (10 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L60-L67` → after: `L8894-L9035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR8894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L8894-L9035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L8894-L9035) · [Before (L60-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L60-L67)

```diff
-         const ip = pp[1].replace(/\t/g, "  ").length;
-         for (; ip <= cp[cp.length - 1].indent;) cp.pop();
-         Op = {
-           text: pp[3].trim(),
-           children: []
-         }, cp[cp.length - 1].items.push(Op), cp.push({
-           indent: ip,
-           items: Op.children
+       }
+     }
+   },
+   5241: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       e: () => yQ
+     });
+     var wQ = XQ(1081),
+       qQ = XQ.n(wQ),
+       TQ = XQ(4958),
+       zQ = XQ(1226),
+       sQ = XQ(1094),
+       FQ = XQ(1507),
+       PQ = XQ(1548),
+       gQ = XQ(1404),
+       JQ = XQ(2614),
+ ... (126 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L70` → after: `L9038-L9065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR9038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L9038-L9065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L9038-L9065) · [Before (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L70)

```diff
-       return ip
+       return (0, rQ.jsxs)("button", {
+         type: "button",
+         className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
+         style: {
+           background: yQ.color
+         },
+         ...(0, FQ.ab)(),
+         onClick: () => {
+           VQ()
+         },
+         children: [(0, rQ.jsx)(jQ, {
+           platform: WQ
+         }), (0, rQ.jsxs)("span", {
+           className: "PlayerProfileSocialLinkText",
+           children: [(0, rQ.jsx)("span", {
+             className: "PlayerProfileSocialLinkName SmallTextBold",
+ ... (12 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L74` → after: `L9069-L9137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR9069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L9069-L9137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L9069-L9137) · [Before (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L74)

```diff
-       const ip = pp.replace(/\r\n/g, "\n").split("\n"),
+       let {
+         socialLinks: WQ,
+         editable: XQ = !1,
+         userContext: wQ,
+         onLinksUpdated: qQ
+       } = QQ;
+       if (!XQ && 0 === WQ.length) return null;
+       const zQ = new Map(WQ.map((QQ => [QQ.platform, QQ]))),
+         sQ = XQ ? TQ.s : WQ.map((QQ => QQ.platform));
+       return (0, rQ.jsx)("div", {
+         className: "PlayerProfileSocialLinks",
+         children: (0, rQ.jsx)("div", {
+           className: "PlayerProfileSocialLinksList",
+           children: sQ.map((QQ => (0, rQ.jsx)(BQ, {
+             platform: QQ,
+             link: zQ.get(QQ),
+ ... (53 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L76-L138` → after: `L9139-L9345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR9139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L9139-L9345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L9139-L9345) · [Before (L76-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L76-L138)

```diff
-       let Op = 0;
-       for (; Op < ip.length;) {
-         const pp = ip[Op];
-         if (Lp(pp)) {
-           Op++;
-           continue
-         }
-         const op = pp.match(/^\s*```\s*(\w*)\s*$/);
-         if (op) {
-           const pp = [];
-           for (Op++; Op < ip.length && !/^\s*```\s*$/.test(ip[Op]);) pp.push(ip[Op]), Op++;
-           Op++, cp.push({
-             kind: "code",
-             lang: op[1] || "text",
-             code: pp.join("\n").replace(/\s+$/, "")
-           });
- ... (47 more removed lines; see GitHub link above)
+       if (QQ.lines && (rQ.push({
+           x: qQ + zQ,
+           y: 0,
+           w: TQ,
+           h: qQ,
+           arm: "right"
+         }), rQ.push({
+           x: -zQ - TQ,
+           y: 0,
+           w: TQ,
+           h: qQ,
+           arm: "left"
+         }), rQ.push({
+           x: 0,
+           y: qQ + zQ,
+           w: qQ,
+ ... (191 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L140` → after: `L9347-L9397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR9347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L9347-L9397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L9347-L9397) · [Before (L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L140)

```diff
-           continue
+           return (0, TQ.useLayoutEffect)((() => {
+             const WQ = QQ.current;
+             if (!WQ) return;
+             const wQ = () => {
+               const QQ = WQ.getBoundingClientRect(),
+                 wQ = window.devicePixelRatio || 1;
+               XQ((WQ => WQ.dpr === wQ && WQ.box.left === QQ.left && WQ.box.top === QQ.top && WQ.box.width === QQ.width && WQ.box.height === QQ.height ? WQ : {
+                 box: {
+                   left: QQ.left,
+                   top: QQ.top,
+                   width: QQ.width,
+                   height: QQ.height
+                 },
+                 dpr: wQ
+               }))
+             };
+ ... (35 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L142-L146` → after: `L9399-L9432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR9399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L9399-L9432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L9399-L9432) · [Before (L142-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L142-L146)

```diff
-         const xp = [];
-         for (; Op < ip.length && !Lp(ip[Op]) && !/^\s*```/.test(ip[Op]) && !/^#{1,6}\s/.test(ip[Op]) && !ip[Op].startsWith(">") && !Dp.test(ip[Op]) && (!ip[Op].trim().startsWith("|") || 0 !== xp.length);) xp.push(ip[Op].trim()), Op++;
-         0 === xp.length && (xp.push(ip[Op].trim()), Op++), cp.push({
-           kind: "paragraph",
-           text: xp.join(" ")
+       }), [gQ]);
+       const aQ = null !== PQ && void 0 !== PQ ? PQ : HQ.current;
+       return (0, rQ.jsx)("div", {
+         ref: JQ,
+         className: qQ()("CrosshairShapes", {
+           CrosshairInPreview: XQ,
+           CrosshairInEditor: wQ || XQ,
+           CrosshairSpreads: void 0 !== gQ
+         }),
+         children: (0, rQ.jsx)("div", {
+           className: "CrosshairShapesOrigin",
+           style: {
+             left: DQ.x,
+             top: DQ.y,
+             opacity: WQ.opacity / 100
+           },
+ ... (18 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L149` → after: `L9504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR9504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L9504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L9504) · [Before (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L149)

```diff
-       return cp
+       return null
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L153-L158` → after: `L9508-L9518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR9508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L9508-L9518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L9508-L9518) · [Before (L153-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L153-L158)

```diff
-       let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
-       const cp = Pp(pp);
-       let Op = "";
-       const op = [],
-         Ip = [],
-         Sp = new Map;
+       if (!QQ || QQ.length !== FQ || JQ(QQ.slice(0, -1)) !== QQ[QQ.length - 1]) return null;
+       const WQ = QQ[0],
+         XQ = {
+           ...wQ.h,
+           style: 1 & WQ ? "shapes" : "classic"
+         };
+       TQ.forEach(((QQ, wQ) => {
+         XQ[QQ] = 0 !== (WQ & 1 << wQ + 1)
+       }));
+       let qQ = 1;
+       for (const wQ of sQ) XQ[wQ] = QQ[qQ] << 16 | QQ[qQ + 1] << 8 | QQ[qQ + 2], qQ += 3;
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L160-L177` → after: `L9520-L9524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR9520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L9520-L9524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L9520-L9524) · [Before (L160-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L160-L177)

```diff
-         if ("heading" === Yp.kind) {
-           var xp;
-           const pp = (null !== (xp = Sp.get(Yp.anchor)) && void 0 !== xp ? xp : 0) + 1;
-           Sp.set(Yp.anchor, pp), pp > 1 && (Yp.anchor = `${Yp.anchor}-${pp}`)
-         }
-         if ("heading" === Yp.kind && 1 === Yp.level && !Op) {
-           Op = Yp.text;
-           continue
-         }
-         if ("heading" === Yp.kind && Yp.level <= ip) {
-           Ip.push({
-             heading: Yp,
-             blocks: []
-           });
-           continue
-         }
- ... (2 more removed lines; see GitHub link above)
+         const {
+           min: WQ,
+           step: zQ
+         } = wQ.e[TQ];
+         XQ[TQ] = (0, wQ.i)(TQ, WQ + QQ[qQ] * zQ), qQ++
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L179-L183` → after: `L9526-L9594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR9526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L9526-L9594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L9526-L9594) · [Before (L179-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L179-L183)

```diff
-       const Lp = pp => {
-         for (;
-           "rule" === (null === (ip = pp.at(-1)) || void 0 === ip ? void 0 : ip.kind);) {
-           var ip;
-           pp.pop()
+       return XQ
+     }
+   },
+   34471: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       e: () => wQ,
+       h: () => qQ,
+       i: () => TQ,
+       l: () => PQ,
+       o: () => FQ,
+       q: () => gQ,
+       u: () => sQ,
+       x: () => zQ
+     });
+     const wQ = {
+         opacity: {
+ ... (53 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L185-L187` → after: `L9596-L9632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR9596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L9596-L9632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L9596-L9632) · [Before (L185-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L185-L187)

```diff
-       };
-       Lp(op);
-       for (const Yp of Ip) Lp(Yp.blocks);
+       },
+       qQ = Object.freeze({
+         style: "classic",
+         color: 16777215,
+         opacity: 100,
+         outline: 1.2,
+         outlineColor: 0,
+         growOnClick: !0,
+         size: 100,
+         lines: !0,
+         lineLength: 6,
+         lineThickness: 2,
+         gap: 3,
+         tStyle: !1,
+         dot: !1,
+         dotSize: 2,
+ ... (21 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L189-L191` → after: `L9634-L9635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR9634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L9634-L9635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L9634-L9635) · [Before (L189-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L189-L191)

```diff
-         title: Op,
-         intro: op,
-         sections: Ip
+         ...QQ,
+         [WQ]: wQ
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L196-L202` → after: `L9645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR9645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L9645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L9645) · [Before (L196-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L196-L202)

```diff
-       return [{
-         heading: null,
-         blocks: pp.intro
-       }, ...pp.sections.map((pp => ({
-         heading: pp.heading,
-         blocks: pp.blocks
-       })))]
+       return sQ(QQ, qQ)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L206` → after: `L9649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR9649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L9649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L9649) · [Before (L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L206)

```diff
-       return pp.flatMap((pp => "code" === pp.kind ? [pp] : "quote" === pp.kind ? Up(pp.blocks) : []))
+       return `#${QQ.toString(16).padStart(6,"0")}`
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L210-L226` → after: `L9653-L9654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR9653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L9653-L9654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L9653-L9654) · [Before (L210-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L210-L226)

```diff
-       switch (pp.kind) {
-         case "heading":
-         case "paragraph":
-           return pp.text;
-         case "code":
-           return pp.code;
-         case "table":
-           return [pp.header, ...pp.rows].map((pp => pp.join(" "))).join(" ");
-         case "list": {
-           const ip = pp => pp.map((pp => `${pp.text} ${ip(pp.children)}`)).join(" ");
-           return ip(pp.items)
-         }
-         case "quote":
-           return pp.blocks.map(wp).join(" ");
-         case "rule":
-           return ""
- ... (1 more removed lines; see GitHub link above)
+       const WQ = /^#?([0-9a-f]{6})$/i.exec(QQ.trim());
+       return WQ ? parseInt(WQ[1], 16) : null
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L229` → after: `L9657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR9657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L9657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L9657) · [Before (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L229)

```diff
-   6637: (pp, ip, cp) => {
+   34491: (QQ, WQ, XQ) => {
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L233` → after: `L9660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR9660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L9660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L9660) · [Before (L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L233)

```diff
-       d: () => xp
+       e: () => rQ
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L235-L239` → after: `L9662-L9668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR9662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L9662-L9668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L9662-L9668) · [Before (L235-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L235-L239)

```diff
-     cp(6630);
-     var Op = cp(62),
-       op = cp(4844),
-       Ip = cp(1112);
-     const Sp = /\[([^\][\n]{1,200})\]\(([^)\s]{1,500})\)|\*\*([^*]+)\*\*|__([^_]+)__|\*([^*\s][^*]*)\*|`([^`]+)`/g;
+     var wQ = XQ(61),
+       qQ = XQ(43),
+       TQ = XQ(34488),
+       zQ = XQ(34471);
+     const sQ = "crosshairCode";
+     let FQ = null;
+     const PQ = new Set;
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L241-L242` → after: `L9670-L9676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR9670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L9670-L9676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L9670-L9676) · [Before (L241-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L241-L242)

```diff
-     function xp(pp, ip) {
-       return pp === ip ? pp : `${pp} (${ip})`
+     function gQ() {
+       if (null === FQ) {
+         var QQ;
+         const WQ = qQ.i.getItem(sQ);
+         FQ = null !== (QQ = "string" === typeof WQ ? (0, TQ.h)(WQ) : null) && void 0 !== QQ ? QQ : zQ.h
+       }
+       return FQ
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L246-L259` → after: `L9680-L9681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR9680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L9680-L9681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L9680-L9681) · [Before (L246-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L246-L259)

```diff
-       const ip = [];
-       let cp = 0;
-       for (const Op of pp.matchAll(Sp)) {
-         Op.index > cp && ip.push(pp.slice(cp, Op.index));
-         const [, op, Sp, Lp, Yp, Dp, Ap] = Op;
-         void 0 !== op ? ip.push(xp(op, Sp)) : void 0 !== Lp || void 0 !== Yp ? ip.push((0, Ip.jsx)("strong", {
-           children: null !== Lp && void 0 !== Lp ? Lp : Yp
-         }, Op.index)) : void 0 !== Dp ? ip.push((0, Ip.jsx)("em", {
-           children: Dp
-         }, Op.index)) : ip.push((0, Ip.jsx)("code", {
-           children: Ap
-         }, Op.index)), cp = Op.index + Op[0].length
-       }
-       return cp < pp.length && ip.push(pp.slice(cp)), ip
+       FQ = QQ, (0, zQ.o)(QQ) ? qQ.i.removeItem(sQ) : qQ.i.setItem(sQ, (0, TQ.j)(QQ));
+       for (const WQ of PQ) WQ()
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L262-L272` → after: `L9684-L9694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR9684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L9684-L9694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L9684-L9694) · [Before (L262-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L262-L272)

```diff
-     function Yp(pp, ip) {
-       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
-       const Op = pp.map(((pp, ip) => (0, Ip.jsxs)("li", {
-         children: [Lp(pp.text), pp.children.length > 0 && Yp(pp.children, !1)]
-       }, ip)));
-       return ip ? (0, Ip.jsx)("ol", {
-         start: cp,
-         children: Op
-       }) : (0, Ip.jsx)("ul", {
-         children: Op
-       })
+     function rQ() {
+       const [QQ, WQ] = (0, wQ.useState)(gQ);
+       return (0, wQ.useEffect)((() => {
+         const QQ = () => {
+           WQ(gQ())
+         };
+         return QQ(), XQ = QQ, PQ.add(XQ), () => {
+           PQ.delete(XQ)
+         };
+         var XQ
+       }), []), QQ
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L276-L319` → after: `L9705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR9705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L9705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L9705) · [Before (L276-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L276-L319)

```diff
-       switch (pp.kind) {
-         case "heading":
-           return pp.level <= 2 ? (0, Ip.jsx)("h3", {
-             children: Lp(pp.text)
-           }, ip) : (0, Ip.jsx)("h4", {
-             children: Lp(pp.text)
-           }, ip);
-         case "paragraph":
-           return (0, Ip.jsx)("p", {
-             children: Lp(pp.text)
-           }, ip);
-         case "list":
-           return (0, Ip.jsx)(Op.Fragment, {
-             children: Yp(pp.items, pp.ordered)
-           }, ip);
-         case "quote":
- ... (28 more removed lines; see GitHub link above)
+       return QQ && !WQ
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L322-L335` → after: `L9708-L9709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR9708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L9708-L9709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L9708-L9709) · [Before (L322-L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L322-L335)

```diff
-     function Ap(pp) {
-       let {
-         markdown: ip
-       } = pp, cp = 0;
-       return (0, Ip.jsx)("div", {
-         className: "StudioAiAnswerText",
-         children: (0, op.x)(ip).map(((pp, ip) => {
-           if ("list" !== pp.kind || !pp.ordered) return cp = 0, Dp(pp, ip);
-           const op = cp + 1;
-           return cp += pp.items.length, (0, Ip.jsx)(Op.Fragment, {
-             children: Yp(pp.items, !0, op)
-           }, ip)
-         }))
-       })
+     function TQ() {
+       return qQ(wQ.b.get("isTouchScreen"), wQ.b.get("clientEscMenuOptions").touchActionButtons)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L338` → after: `L9712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR9712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L9712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L9712) · [Before (L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L338)

```diff
-   6621: (pp, ip, cp) => {
+   5025: (QQ, WQ, XQ) => {
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L345-L348` → after: `L9718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR9718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L9718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L9718) · [Before (L345-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L345-L348)

```diff
-     var Op = cp(1216),
-       op = cp(6575),
-       Ip = cp(4984);
-     const Sp = /\b(the prompt (says|asks|wants|tells)|the user (wants|asks|said)|my instructions(?! (?:below|above|here|in step))|the instructions (say|ask)|as instructed(?! (?:below|above|here|in step|by (?!the (?:prompt|user|system)\b))))\b/i;
+     let wQ = null;
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L351` → after: `L9721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR9721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L9721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L9721) · [Before (L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L351)

```diff
-       return (0, Ip.f)(pp, Sp, (ip => !/^my/i.test(ip[0]) || !/follow $/i.test(pp.slice(0, ip.index)))).length > 0
+       wQ = QQ
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L357-L371` → after: `L9724-L9725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR9724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L9724-L9725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L9724-L9725) · [Before (L357-L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L357-L371)

```diff
-     function Ap(pp) {
-       return function(pp) {
-         const ip = [];
-         let cp = !1;
-         for (const Op of pp.split("\n")) {
-           if (/^\s*(```|~~~)/.test(Op)) {
-             cp = !cp;
-             continue
-           }
-           if (cp || /^\s*>/.test(Op)) continue;
-           const pp = Op.replace(/`[^`]*`/g, "code").replace(/"[^"]*"|\u201c[^\u201d]*\u201d/g, '"quote"').trim();
-           ip.push(...(0, op.r)(pp))
-         }
-         return ip
-       }(pp).filter((pp => xp(pp) || Yp.test(pp) && !Lp.test(pp)))
+     function TQ() {
+       return wQ
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L388-L396` → after: `L9729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR9729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L9729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L9729) · [Before (L388-L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L388-L396)

```diff
-       const ip = Wp.findIndex((ip => ip.name === pp));
-       return -1 === ip ? Wp.length : ip
-     }
-     const Up = 2500,
-       wp = 12e4;
-     class vp extends Error {
-       constructor(pp) {
-         super(`Studio AI chat ${pp}`), this.reason = pp
-       }
+       return "bloxd" === QQ.site && !QQ.isMobileApp && !QQ.isTouchScreen
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L398` → after: `L9731-L9732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR9731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L9731-L9732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L9731-L9732) · [Before (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L398)

```diff
- 
+   },
+   34426: (QQ, WQ, XQ) => {
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L400-L457` → after: `L9734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR9734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L9734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L9734) · [Before (L400-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L400-L457)

```diff
-       const cp = new AbortController,
-         Op = () => {
-           cp.abort()
-         },
-         op = setTimeout(Op, pp);
-       return null !== ip && void 0 !== ip && ip.aborted && Op(), null === ip || void 0 === ip || ip.addEventListener("abort", Op, {
-         once: !0
-       }), {
-         signal: cp.signal,
-         clear: () => {
-           clearTimeout(op), null === ip || void 0 === ip || ip.removeEventListener("abort", Op)
-         }
-       }
-     }
- 
-     function Hp(pp, ip, cp) {
- ... (42 more removed lines; see GitHub link above)
+       return QQ && !WQ
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L460` → after: `L9746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR9746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L9746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L9746) · [Before (L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L460)

```diff
-     function dp(pp) {
+     function qQ() {
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L462` → after: `L9748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR9748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L9748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L9748) · [Before (L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L462)

```diff
-       return "length" === (null === pp || void 0 === pp || null === (ip = pp.choices) || void 0 === ip || null === (cp = ip[0]) || void 0 === cp ? void 0 : cp.finish_reason)
+       return null !== (QQ = null === (WQ = screen.orientation) || void 0 === WQ ? void 0 : WQ.type) && void 0 !== QQ ? QQ : innerWidth > innerHeight ? "landscape" : "portrait"
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L464-L509` → after: `L9750-L9784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR9750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L9750-L9784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L9750-L9784) · [Before (L464-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L464-L509)

```diff
-     async function ep(pp, ip, cp) {
-       const Op = Wp.find((ip => ip.name === pp));
-       if (void 0 === Op) return "failed";
-       const op = tp(wp, cp);
-       try {
-         const pp = await jp(Op, ip, op.signal);
-         return null !== pp && "object" === typeof pp ? pp.isCutOff ? (console.warn(`Studio AI: ${Op.name}'s answer was cut off at the token limit`), null) : {
-           text: pp.text
-         } : pp
-       } finally {
-         op.clear()
-       }
-     }
-     async function jp(pp, ip, cp) {
-       const Op = await fetch(Pp, {
-         method: "POST",
- ... (30 more removed lines; see GitHub link above)
+     const TQ = new class {
+       constructor() {
+         this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
+           document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
+         }
+       }
+       isHeld() {
+         return this.holding && qQ() !== this.heldOrientation && (this.holding = !1), this.holding
+       }
+       hold() {
+         this.heldOrientation = qQ(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
+           this.holding && (0, wQ.jB)(new Error("Game view size held for 60 s"))
+         }), 6e4)
+       }
+       release() {
+         clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
+ ... (19 more added lines; see GitHub link above)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L513` → after: `L9788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR9788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L9788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L9788) · [Before (L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L513)

```diff
-   6575: (pp, ip, cp) => {
+   34405: (QQ, WQ, XQ) => {
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L515-L531` → after: `L9790-L9793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR9790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L9790-L9793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L9790-L9793) · [Before (L515-L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L515-L531)

```diff
-       A: () => dp,
-       C: () => jp,
-       D: () => wp,
-       E: () => Hp,
-       I: () => ep,
-       K: () => tp,
-       L: () => Ap,
-       N: () => Yp,
-       P: () => Wp,
-       c: () => yp,
-       g: () => xp,
-       i: () => Sp,
-       l: () => Up,
-       n: () => Pp,
-       r: () => Dp,
-       s: () => Ip,
- ... (1 more removed lines; see GitHub link above)
+       e: () => DQ,
+       h: () => PQ,
+       k: () => BQ,
+       m: () => jQ
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L533-L535` → after: `L9795-L9805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR9795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L9795-L9805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L9795-L9805) · [Before (L533-L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L533-L535)

```diff
-     var Op = cp(4984);
-     const op = 2e3,
-       Ip = 2e4;
+     var wQ = XQ(193),
+       qQ = XQ(1302),
+       TQ = XQ(1238),
+       zQ = XQ(1165),
+       sQ = XQ(1795);
+     const FQ = {
+       offline: "homePage:onboardingNameNoAccount",
+       outdated: "general:updatedReloading",
+       busy: "homePage:changeNameTooFast",
+       server: "homePage:changeNameFailed"
+     };
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L538` → after: `L9808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR9808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L9808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L9808) · [Before (L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L538)

```diff
-       return pp.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
+       return FQ[QQ]
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L542` → after: `L9812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR9812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L9812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L9812) · [Before (L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L542)

```diff
-       return pp.replace(/\$/g, "\\$")
+       return (0, sQ.d)(QQ) ? "outdated" : QQ instanceof wQ.b ? 429 === QQ.httpCode ? "busy" : "server" : "offline"
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L546-L549` → after: `L9815-L9821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR9815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L9815-L9821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L9815-L9821) · [Before (L546-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L546-L549)

```diff
-     function Yp(pp, ip) {
-       Lp.lastIndex = ip;
-       const cp = Lp.exec(pp);
-       return cp.index + cp[0].length
+     function JQ(QQ, WQ, XQ) {
+       return (0, zQ.postJsonWithMetricsCookiesAndJsonResponse)(`${TQ.clientSideServerUrls.indexUrl}${WQ}`, XQ, {
+         retries: 3
+       }, QQ.getMetricsCookies()).catch((QQ => (console.error("Bad response from the server when trying to change name:", WQ, QQ), {
+         outcome: "failed",
+         failure: gQ(QQ)
+       })))
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L553` → after: `L9825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR9825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L9825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L9825) · [Before (L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L553)

```diff
-       return (0, Op.s)(pp, /\s+/g, (0, Op.p)(".!?")).flatMap((pp => pp.split("\n")))
+       return "outcome" in QQ && "failed" === QQ.outcome
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L556-L561` → after: `L9828-L9832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR9828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L9828-L9832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L9828-L9832) · [Before (L556-L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L556-L561)

```diff
-     function Ap(pp, ip) {
-       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ip;
-       const Op = [...pp.matchAll(/[.!?](?!\d)(?=\s|$)/g)].map((pp => pp.index)),
-         op = Op.filter((pp => pp < ip)),
-         Ip = Op.find((pp => pp >= cp));
-       return [0 === op.length ? 0 : op.at(-1) + 1, void 0 === Ip ? pp.length : Ip + 1]
+     function IQ(QQ) {
+       return console.error("Error when trying to get with new name from DB", QQ), {
+         outcome: "refused",
+         message: QQ
+       }
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L563-L566` → after: `L9834-L9839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR9834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L9834-L9839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L9834-L9839) · [Before (L563-L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L563-L566)

```diff
- 
-     function Pp(pp, ip) {
-       const cp = pp.charCodeAt(ip - 1);
-       return pp.slice(0, ip > 0 && ip < pp.length && cp >= 55296 && cp <= 56319 ? ip - 1 : ip)
+     async function jQ(QQ) {
+       const WQ = await JQ(QQ, "/index/name/random", {});
+       return rQ(WQ) ? WQ : "err" in WQ ? IQ(WQ.err) : (QQ.setPlayerName(WQ.name), {
+         outcome: "changed",
+         name: WQ.name
+       })
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L568-L570` → after: `L9841-L9850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR9841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L9841-L9850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L9841-L9850) · [Before (L568-L570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L568-L570)

```diff
- 
-     function Wp(pp, ip) {
-       return `${ip}${pp.replace(/\\/g,"\\\\").split(ip).join(`\\${ip}`)}${ip}`
+     async function BQ(QQ, WQ) {
+       const XQ = await JQ(QQ, "/index/name/update", {
+         name: WQ
+       });
+       return rQ(XQ) ? XQ : "err" in XQ ? IQ(XQ.err) : XQ.nameExists ? {
+         outcome: "taken"
+       } : (QQ.setPlayerName(WQ), {
+         outcome: "changed",
+         name: WQ
+       })
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L573-L574` → after: `L9853-L9857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR9853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L9853-L9857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L9853-L9857) · [Before (L573-L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L573-L574)

```diff
-     function yp(pp) {
-       return pp.charAt(0).toUpperCase() + pp.slice(1)
+     function yQ(QQ, WQ) {
+       let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
+       const wQ = 1 === WQ ? 1 : 10 ** (WQ - 1),
+         TQ = String(wQ + Math.floor(XQ() * (10 ** WQ - wQ)));
+       return `${QQ.slice(0,qQ.j-WQ)}${TQ}`
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L576-L578` → after: `L9859-L9870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR9859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L9859-L9870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L9859-L9870) · [Before (L576-L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L576-L578)

```diff
- 
-     function Up(pp) {
-       return Math.round(pp).toLocaleString("en-US")
+     const VQ = [1, 2, 3, 4];
+     async function DQ(QQ, WQ) {
+       const XQ = await BQ(QQ, WQ);
+       if ("taken" !== XQ.outcome) return XQ;
+       for (const wQ of VQ) {
+         const XQ = yQ(WQ, wQ),
+           qQ = await BQ(QQ, XQ);
+         if ("taken" !== qQ.outcome) return qQ
+       }
+       return {
+         outcome: "taken"
+       }
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L581-L582` → after: `L9883-L9885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR9883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L9883-L9885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L9883-L9885) · [Before (L581-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L581-L582)

```diff
-     function wp(pp) {
-       return pp.replace(/([a-z\d])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z\d]+/).filter((pp => "" !== pp))
+     function sQ() {
+       var QQ;
+       return null === (QQ = wQ.b.get("showDistantNametags")) || void 0 === QQ || QQ
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L586-L587` → after: `L9888-L9894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR9888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L9888-L9894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L9888-L9894) · [Before (L586-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L586-L587)

```diff
-     function tp(pp, ip) {
-       return wp(pp).filter((pp => pp.length >= vp && !/\d/.test(pp))).map((pp => `${pp} ${ip}`))
+     function FQ() {
+       var QQ;
+       return null !== (QQ = function() {
+         const QQ = new URLSearchParams(window.location.search).get(TQ),
+           WQ = null === QQ || "" === QQ ? NaN : Number(QQ);
+         return Number.isFinite(WQ) && WQ >= 0 ? Math.min(WQ, zQ) : null
+       }()) && void 0 !== QQ ? QQ : sQ() ? 0 : qQ
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L590-L591` → after: `L9910-L9917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR9910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L9910-L9917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L9910-L9917) · [Before (L590-L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L590-L591)

```diff
-     function Hp(pp) {
-       return pp.split(/[\s:_]+/).filter((pp => "" !== pp)).map(Sp).join("[`:_\\s]+")
+     function PQ() {
+       if (sQ.f) return;
+       const QQ = (0, qQ.pageOperatingSystem)();
+       if ("android" !== QQ && "windows" !== QQ || (0, sQ.e)("webgl_default")) return;
+       if ("windows" === QQ) return QQ => "qualcomm" === (0, qQ.normaliseGpuVendor)((0, zQ.c)(QQ).vendor);
+       const WQ = (0, TQ.n)(),
+         XQ = null === WQ ? (0, wQ.o)() : (0, wQ.g)(WQ.vendor, WQ.renderer);
+       return null !== XQ && FQ.has(XQ) ? QQ => (0, wQ.i)((0, zQ.c)(QQ).vendor, XQ) : void 0
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L594-L595` → after: `L9920-L9921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR9920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L9920-L9921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L9920-L9921) · [Before (L594-L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L594-L595)

```diff
-     function dp(pp) {
-       return wp(pp.split(".").pop())
+     function gQ(QQ, WQ) {
+       return QQ ? () => !0 : WQ()
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L597-L599` → after: `L9923-L9935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR9923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L9923-L9935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L9923-L9935) · [Before (L597-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L597-L599)

```diff
- 
-     function ep(pp) {
-       return pp.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim()
+     async function JQ(QQ) {
+       try {
+         const WQ = gQ(QQ, PQ),
+           XQ = navigator.gpu;
+         if (void 0 === WQ || void 0 === XQ) return !1;
+         const wQ = await (0, zQ.m)(XQ, {
+           seed: !1,
+           compatibility: WQ
+         });
+         return "string" !== typeof wQ && wQ.compatibility && !(0, zQ.h)(wQ.adapter)
+       } catch (WQ) {
+         return console.error("WebGPU compatibility-mode adapter request failed.", WQ), !1
+       }
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L603-L608` → after: `L10126-L10145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR10126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L10126-L10145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L10126-L10145) · [Before (L603-L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L603-L608)

```diff
-       let ip = null;
-       return () => {
-         const cp = ip ??= pp();
-         return cp.catch((() => {
-           ip === cp && (ip = null)
-         })), cp
+       let WQ, XQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
+       if ("number" === typeof QQ) {
+         if (!Number.isFinite(QQ)) return "0";
+         if (Math.abs(QQ) < 100) {
+           const WQ = QQ < 0 ? "-" : "",
+             XQ = Math.abs(QQ);
+           return XQ >= 10 ? `${WQ}${XQ.toFixed(1).replace(/\.0$/,"")}` : `${WQ}${XQ.toFixed(2).replace(/\.?0+$/,"")}`
+         }
+         WQ = BigInt(Math.floor(QQ))
+       } else WQ = QQ;
+       const qQ = WQ < 0n ? -WQ : WQ,
+         TQ = WQ < 0n ? "-" : "",
+         zQ = qQ.toString();
+       if (zQ.length <= XQ) return `${TQ}${zQ}`;
+       const sQ = 3 * Math.floor((zQ.length - 1) / 3);
+       if (sQ < 3) return `${TQ}${zQ}`;
+ ... (4 more added lines; see GitHub link above)
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L611-L613` → after: `L10154-L10158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR10154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L10154-L10158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L10154-L10158) · [Before (L611-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L611-L613)

```diff
-   },
-   4984: (pp, ip, cp) => {
-     function Op(pp) {
+     const TQ = wQ.map((QQ => {
+       let {
+         threshold: WQ,
+         suffix: XQ
+       } = QQ;
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L615` → after: `L10160-L10161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR10160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L10160-L10161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L10160-L10161) · [Before (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L615)

```diff
-         notAfter: pp
+         threshold: Number(WQ),
+         suffix: XQ
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L620-L621` → after: `L10190-L10191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR10190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L10190-L10191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L10190-L10191) · [Before (L620-L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L620-L621)

```diff
-       f: () => Yp,
-       j: () => xp,
+       d: () => JQ,
+       h: () => zQ,
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L623-L627` → after: `L10193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR10193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L10193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L10193) · [Before (L623-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L623-L627)

```diff
-       m: () => op,
-       n: () => Ip,
-       p: () => Sp,
-       r: () => Dp,
-       s: () => Ap
+       m: () => FQ
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L629-L630` → after: `L10195-L10270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR10195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L10195-L10270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L10195-L10270) · [Before (L629-L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L629-L630)

```diff
-     const op = Op("\\w$."),
-       Ip = Op("\\w.,");
+     var wQ = XQ(402);
+     const qQ = ["Wood Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table"],
+       TQ = {
+         Damage: {
+           translationKey: "enchantments:damageDescription"
+         },
+         "Attack Speed": {
+           translationKey: "enchantments:attackSpeedDescription"
+         },
+         "Critical Damage": {
+           translationKey: "enchantments:criticalDamageDescription"
+         },
+         Protection: {
+           translationKey: "enchantments:protectionDescription"
+         },
+         Health: {
+ ... (60 more added lines; see GitHub link above)
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L633` → after: `L10273-L10276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR10273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L10273-L10276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L10273-L10276) · [Before (L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L633)

```diff
-       return ip => Lp(ip, pp)
+       var WQ;
+       return null !== (WQ = TQ[QQ]) && void 0 !== WQ ? WQ : {
+         translationKey: ""
+       }
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L637-L641` → after: `L10332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR10332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L10332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L10332) · [Before (L637-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L637-L641)

```diff
-       return ip => !pp.test(ip.input.slice(0, ip.index))
-     }
- 
-     function Lp(pp, ip) {
-       return pp.index > 0 && new RegExp(`[${ip}]`).test(pp.input[pp.index - 1])
+       return qQ.includes(QQ)
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L644-L675` → after: `L10335-L10337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR10335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L10335-L10337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L10335-L10337) · [Before (L644-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L644-L675)

```diff
-     function Yp(pp, ip, cp) {
-       return function(pp) {
-         return void 0 !== pp && "function" !== typeof pp
-       }(cp) ? function(pp, ip, cp) {
-         const Op = ip.flags.replace(/[gy]/g, ""),
-           op = new RegExp(`[^${cp}](?:${ip.source})`, `${Op}g`),
-           Ip = [],
-           Sp = cp => {
-             const Op = cp.index + cp[0].length;
-             return ("" === cp[0] ? Pp(pp, ip, Op) : Op) - 1
-           },
-           xp = new RegExp(`(?:${ip.source})`, `${Op}y`).exec(pp);
-         if (xp) {
-           if (Ip.push(xp), !ip.global) return Ip;
-           op.lastIndex = Sp(xp)
-         }
- ... (16 more removed lines; see GitHub link above)
+     function PQ(QQ) {
+       var WQ;
+       return !0 === (null === QQ || void 0 === QQ || null === (WQ = QQ.customAttributes) || void 0 === WQ ? void 0 : WQ.cannotEnchant)
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L678-L682` → after: `L10340-L10344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR10340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L10340-L10344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L10340-L10344) · [Before (L678-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L678-L682)

```diff
-     function Dp(pp, ip, cp, Op) {
-       let op = "",
-         Ip = 0;
-       for (const Sp of Yp(pp, ip, cp)) op += pp.slice(Ip, Sp.index) + Op(Sp), Ip = Sp.index + Sp[0].length;
-       return op + pp.slice(Ip)
+     function gQ(QQ, WQ) {
+       const {
+         max: XQ
+       } = sQ[QQ].at(-1);
+       return WQ <= XQ
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L685-L689` → after: `L10347-L10374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR10347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L10347-L10374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L10347-L10374) · [Before (L685-L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L685-L689)

```diff
-     function Ap(pp, ip, cp) {
-       const Op = [];
-       let op = 0;
-       for (const Ip of Yp(pp, ip, cp)) Op.push(pp.slice(op, Ip.index)), op = Ip.index + Ip[0].length;
-       return [...Op, pp.slice(op)]
+     function JQ(QQ) {
+       const WQ = Math.sin(QQ / 80),
+         XQ = QQ => {
+           if (QQ <= 0) return 0;
+           if (QQ > 1) return 1;
+           let WQ = 0;
+           const XQ = [1, 7, 21, 35, 35, 21, 7, 1];
+           for (let wQ = 0; wQ < XQ.length; wQ++) {
+             WQ += (wQ % 2 === 0 ? 1 : -1) * XQ[wQ] * Math.pow(QQ, 2 + wQ) / (2 + wQ)
+           }
+           return 72 * WQ
+         },
+         wQ = .3 - .78 * WQ,
+         qQ = .5 - .78 * WQ,
+         TQ = .6 - .7 * WQ,
+         zQ = .8 - .6 * WQ;
+ ... (12 more added lines; see GitHub link above)
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L692-L694` → after: `L10377-L10385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR10377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L10377-L10385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L10377-L10385) · [Before (L692-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L692-L694)

```diff
-     function Pp(pp, ip, cp) {
-       var Op;
-       return cp + (ip.unicode && (null !== (Op = pp.codePointAt(cp)) && void 0 !== Op ? Op : 0) > 65535 ? 2 : 1)
+     function rQ(QQ, WQ) {
+       const {
+         min: XQ,
+         max: qQ
+       } = sQ[QQ][WQ], TQ = wQ.b.sampleUniformIntDistribution(XQ, qQ, "includeMax");
+       return {
+         ...JQ(TQ),
+         level: TQ
+       }
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/81.js` (Changed code · before: `L697` → after: `L10388-L10401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755faR10388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9a84875f39779979fda7bdb970c819e9d65157aebd165827d48e4253d9a755fa) · [After (L10388-L10401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/81.js#L10388-L10401) · [Before (L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/81.js#L697)

```diff
-   6630: () => {}
+   34485: () => {},
+   34562: () => {},
+   13285: QQ => {
+     QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAaUlEQVR4AWyOQQ6AIAwECwGNr/HkYzz4Hy9+WEkq01BDDCRDy3ZbGo9rU2c/V+1Bj9JOeW7RokaTBO0zpDxJXmYJKXjdohlwOqbWi4YaJFIgcYEIaGAT+JvHCDNQ8El9ziQz/BdzE00vAAAA//+cTXaSAAAABklEQVQDAHI9N5g1NM74AAAAAElFTkSuQmCC … [truncated]
+   },
+   14462: QQ => {
+     QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAGBJREFUGJVNjjEOxEAIA+dW22Rpk2+nSndPZFtMewU6FBdIjJHx536+ABARUl7XCbjvyV9mJqX7BtY6RkS0t9bRc0op5ZuaGTAqtPZCpfG+AqSs8FFlulh7s6j7rh9d9wclFjd0V4Z2HAAAAABJRU5ErkJggg=="
+   },
+   15966: QQ => {
+     QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAbUlEQVR4nESOSwqAMAxEow0pive/gIcTBBdSsZh+NG20DlnkM8MLhnXuzHSnAwBaI8LIV2RXOiIkaGfMKfXGyByZparbyQZpGNUV/KaHGrWowZKVgSx8Qr8vzdXgAkYFCIn9mZP7E8pQ1Q9fzAMAAP//PTNTFgAAAAZJREFUAwAk1D9dXrbJngAAAABJRU5E … [truncated]
+   },
+   16473: QQ => {
+     QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAE1JREFUGJVNjsEOwDAIQp/GZv3/j+xx5zVbsh0wZFxEImCsc88RRwHsB5OaI8SA636hjwosNXSUWuRTphxp5iahHX+pozQs+Yt0rU1SPg0CIfgDMgomAAAAAElFTkSuQmCC"
+   }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/82.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/82.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-18b547ff441c5b6195545c7bb1e67c7e408412b02f30591e01ceede9970029ba)

#### 1. `bundles/preprod.bloxd.io/chunks/js/82.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-18b547ff441c5b6195545c7bb1e67c7e408412b02f30591e01ceede9970029baR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-18b547ff441c5b6195545c7bb1e67c7e408412b02f30591e01ceede9970029ba) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/82.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/82.js#L2)

```diff
- export const ids = [82];
+ export const ids = [82, 98];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/82.js` (Changed code · before: `L4-L116` → after: `L4-L7325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-18b547ff441c5b6195545c7bb1e67c7e408412b02f30591e01ceede9970029baR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-18b547ff441c5b6195545c7bb1e67c7e408412b02f30591e01ceede9970029ba) · [After (L4-L7325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/82.js#L4-L7325) · [Before (L4-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/82.js#L4-L116)

```diff
-   4852: (pp, ip, cp) => {
-     cp.d(ip, {
-       d: () => Up
-     });
-     const Op = '# Callbacks\n\nPlayers can use World Code in custom worlds get functions they\'ve written to run when game events happen. These special functions are called callbacks. The world code can be viewed by pressing F8 by default. Initially the world code will have this  … [truncated]
-       op = '# Client Options\n\nA player\'s "Client Options" impact what they are capable of doing in the world. For example you can give them a double jump by setting the player\'s `airJumpCount` to `1`. Alternatively their health bar can be increased by setting their `maxHealth … [truncated]
-       Ip = '# Entity Settings\n\nAn "Entity Setting" impacts how a player sees or interacts with another player or entity.\nE.g. Player 1 could have an otherEntitySetting for entity 2 as opacity set to 0.5. This means player 1 sees entity 2 as partly see-through. Player1 is the r … [truncated]
-       Sp = '# Mob Settings\n\nThese impact the behaviour of mobs, what they look like, and how they sound. These can either be set on a per-mob basis or the default can be set for all mobs of a particular type.\nThese API methods allow you to modify mob settings:\n\n```js\n/**\n  … [truncated]
-       xp = '# Vehicle Settings\n\nA vehicle is something you get into and ride, like a boat or a kart. A physics type is a list of settings describing how something moves - its weight, speed, steering, and so on. The two are separate: riding a vehicle normally changes your physic … [truncated]
-       Lp = "# API Reference\n\n## addCustomKillfeedMessage\nAdd a custom killfeed message to the killfeed\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| killer | ` { eId: EntityId } \\| { name: string; colour: string } ` | The entity … [truncated]
-     var Yp = cp(4861),
-       Dp = cp(4868);
-     const Ap = '# How-Tos\n\nThis contains a quick list of tutorials for some features that may be harder to understand on first glance.\n\n## Variations\n\nCustom games now support *variations*, which allow you to create your own alterations of gameplay.\n\n### Custom Games\n\nI … [truncated]
-       Pp = '# Snippets\n\nShort pieces of code to copy into a code block and change to suit your world. In a code block or board, `myId` is the player who ran it. In World Code, use the player ID a callback is given instead.\n\n## Make the player jump\n\nSets the player\'s veloci … [truncated]
- 
-     function Wp(pp) {
- ... (97 more removed lines; see GitHub link above)
+     5178: (QQ, WQ, XQ) => {
+       XQ.d(WQ, {
+         c: () => yQ,
+         f: () => VQ
+       });
+       var wQ = XQ(1081),
+         qQ = XQ.n(wQ),
+         TQ = XQ(61),
+         zQ = XQ(1226),
+         sQ = XQ(5181),
+         FQ = XQ(1975),
+         PQ = XQ(2535),
+         gQ = XQ(5187),
+         JQ = XQ(1145);
+       const rQ = new WeakMap;
+       let IQ = 0;
+ ... (7306 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/83.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/83.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-53aca8b2c0d6cb60f55e420b640cb00cecf870e4e9bce279e4f89f744268bcd5)

#### 1. `bundles/preprod.bloxd.io/chunks/js/83.js` (Changed code · before: `L4-L5` → after: `L4-L1724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-53aca8b2c0d6cb60f55e420b640cb00cecf870e4e9bce279e4f89f744268bcd5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-53aca8b2c0d6cb60f55e420b640cb00cecf870e4e9bce279e4f89f744268bcd5) · [After (L4-L1724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/83.js#L4-L1724) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/83.js#L4-L5)

```diff
-   4861: pp => {
-     pp.exports = '# Block Names (1533 blocks)\n#\n# Each block name listed below is the ROOT block - use it exactly as shown (no suffix).\n# Some blocks also have meta variants, indicated by codes in brackets.\n#\n# ROOT BLOCK: Use the block name exactly as listed (e.g. "Maple Do … [truncated]
+   5042: QQ => {
+     function WQ(QQ) {
+       return QQ instanceof Map ? QQ.clear = QQ.delete = QQ.set = function() {
+         throw new Error("map is read-only")
+       } : QQ instanceof Set && (QQ.add = QQ.clear = QQ.delete = function() {
+         throw new Error("set is read-only")
+       }), Object.freeze(QQ), Object.getOwnPropertyNames(QQ).forEach((XQ => {
+         const wQ = QQ[XQ],
+           qQ = typeof wQ;
+         "object" !== qQ && "function" !== qQ || Object.isFrozen(wQ) || WQ(wQ)
+       })), QQ
+     }
+     class XQ {
+       constructor(QQ) {
+         void 0 === QQ.data && (QQ.data = {}), this.data = QQ.data, this.isMatchIgnored = !1
+       }
+ ... (1705 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/84.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/84.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/84.js` (Changed code · before: `L4-L6` → after: `L4-L697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-2a1f0343a857cba145c244a632a1f4d09d443078d940edd416e5385d39332de1) · [After (L4-L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/84.js#L4-L697) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/84.js#L4-L6)

```diff
-   4868: pp => {
-     pp.exports = "# Item Names (1532 items)\n\nWood Pickaxe\nStone Pickaxe\nIron Pickaxe\nGold Pickaxe\nDiamond Pickaxe\nMoonstone Pickaxe\nGolem Pickaxe\nWood Axe\nStone Axe\nIron Axe\nGold Axe\nDiamond Axe\nMoonstone Axe\nArtisan Axe\nWood Spade\nStone Spade\nIron Spade\nGold S … [truncated]
-   }
+   5062: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       B: () => rQ,
+       d: () => wQ,
+       g: () => zQ,
+       j: () => yQ,
+       k: () => BQ,
+       m: () => sQ,
+       p: () => qQ,
+       s: () => TQ,
+       t: () => jQ,
+       x: () => IQ
+     });
+     const wQ = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;
+ 
+     function qQ(QQ) {
+ ... (678 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/85.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/85.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/85.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/85.js#L4-L6)

```diff
-   4874: (pp, ip, cp) => {
-     cp.r(ip), cp.d(ip, {
-       default: () => Op
+   5071: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       e: () => BQ
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/85.js` (Changed code · before: `L8-L4491` → after: `L8-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0dR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6125ab44b9b978b4333f9f34e06771dcfb77ddbf6b3156dd03644603ddb8ae0d) · [After (L8-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/85.js#L8-L112) · [Before (L8-L4491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/85.js#L8-L4491)

```diff
-     const Op = String.raw`export interface GameApi {
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
- ... (4468 more removed lines; see GitHub link above)
+     const wQ = '# Callbacks\n\nPlayers can use World Code in custom worlds get functions they\'ve written to run when game events happen. These special functions are called callbacks. The world code can be viewed by pressing F8 by default. Initially the world code will have this  … [truncated]
+       qQ = '# Client Options\n\nA player\'s "Client Options" impact what they are capable of doing in the world. For example you can give them a double jump by setting the player\'s `airJumpCount` to `1`. Alternatively their health bar can be increased by setting their `maxHealth … [truncated]
+       TQ = '# Entity Settings\n\nAn "Entity Setting" impacts how a player sees or interacts with another player or entity.\nE.g. Player 1 could have an otherEntitySetting for entity 2 as opacity set to 0.5. This means player 1 sees entity 2 as partly see-through. Player1 is the r … [truncated]
+       zQ = '# Mob Settings\n\nThese impact the behaviour of mobs, what they look like, and how they sound. These can either be set on a per-mob basis or the default can be set for all mobs of a particular type.\nThese API methods allow you to modify mob settings:\n\n```js\n/**\n  … [truncated]
+       sQ = '# Vehicle Settings\n\nA vehicle is something you get into and ride, like a boat or a kart. A physics type is a list of settings describing how something moves - its weight, speed, steering, and so on. The two are separate: riding a vehicle normally changes your physic … [truncated]
+       FQ = "# API Reference\n\n## addCustomKillfeedMessage\nAdd a custom killfeed message to the killfeed\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| killer | ` { eId: EntityId } \\| { name: string; colour: string } ` | The entity … [truncated]
+     var PQ = XQ(5075),
+       gQ = XQ(5083);
+     const JQ = '# How-Tos\n\nThis contains a quick list of tutorials for some features that may be harder to understand on first glance.\n\n## Variations\n\nCustom games now support *variations*, which allow you to create your own alterations of gameplay.\n\n### Custom Games\n\nI … [truncated]
+       rQ = '# Snippets\n\nShort pieces of code to copy into a code block and change to suit your world. In a code block or board, `myId` is the player who ran it. In World Code, use the player ID a callback is given instead.\n\n## Make the player jump\n\nSets the player\'s veloci … [truncated]
+ 
+     function IQ(QQ) {
+       return QQ.split("\n").filter((QQ => QQ.startsWith("## "))).map((QQ => QQ.replace(/^## (.+)$/gm, "$1").trim()))
+     }
+ 
+     function jQ(QQ) {
+ ... (89 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/86.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/86.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14)

#### 1. `bundles/preprod.bloxd.io/chunks/js/86.js` (Changed code · before: `L4-L23436` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7bed313184d0e14d814233c0c7ab540aef253da778762b303cfee51c99fd5e14) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/86.js#L4-L5) · [Before (L4-L23436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/86.js#L4-L23436)

```diff
-   36728: (pp, ip, cp) => {
-     cp.d(ip, {
-       d: () => hp,
-       g: () => fp
-     });
-     var Op = cp(62),
-       op = cp(1956),
-       Ip = cp(36730),
-       Sp = cp.n(Ip),
-       xp = cp(4635),
-       Lp = cp(1929),
-       Yp = cp(1476),
-       Dp = cp(104),
-       Ap = cp(116),
-       Pp = cp(337),
-       Wp = cp(1049),
- ... (23417 more removed lines; see GitHub link above)
+   5075: QQ => {
+     QQ.exports = '# Block Names (1533 blocks)\n#\n# Each block name listed below is the ROOT block - use it exactly as shown (no suffix).\n# Some blocks also have meta variants, indicated by codes in brackets.\n#\n# ROOT BLOCK: Use the block name exactly as listed (e.g. "Maple Do … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/87.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/87.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3)

#### 1. `bundles/preprod.bloxd.io/chunks/js/87.js` (Changed code · before: `L4-L869` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b5c65a3eb47529196d724d1d7bae3d2717afbc1040757598dc78ab1eba3b17b3) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/87.js#L4-L5) · [Before (L4-L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/87.js#L4-L869)

```diff
-   4882: (pp, ip, cp) => {
-     cp.d(ip, {
-       b: () => dp,
-       e: () => vp
-     });
-     var Op = cp(1325),
-       op = cp(34);
-     var Ip = cp(337);
-     var Sp = cp(640);
-     var xp = cp(2457),
-       Lp = cp(4886),
-       Yp = cp(4919),
-       Dp = cp(4927);
-     class Ap {
-       constructor(pp, ip, cp, Op, op, Ip) {
-         this.id = pp, this.type = ip, this.parameters = cp, this.tearDownNotification = Op, this.onDonePromise = op, this.resolveRequest = Ip
- ... (850 more removed lines; see GitHub link above)
+   5083: QQ => {
+     QQ.exports = "# Item Names (1532 items)\n\nWood Pickaxe\nStone Pickaxe\nIron Pickaxe\nGold Pickaxe\nDiamond Pickaxe\nMoonstone Pickaxe\nGolem Pickaxe\nWood Axe\nStone Axe\nIron Axe\nGold Axe\nDiamond Axe\nMoonstone Axe\nArtisan Axe\nWood Spade\nStone Spade\nIron Spade\nGold S … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/88.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/88.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46)

#### 1. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L4-L23` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/88.js#L4-L6) · [Before (L4-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/88.js#L4-L23)

```diff
-   41079: (pp, ip, cp) => {
-     cp.d(ip, {
-       $: () => lp,
-       C: () => Jp,
-       G: () => Qp,
-       H: () => sp,
-       I: () => Np,
-       K: () => Ep,
-       O: () => Bp,
-       S: () => Cp,
-       T: () => gp,
-       X: () => Fp,
-       d: () => Gp,
-       f: () => fp,
-       h: () => qp,
-       j: () => rp,
- ... (4 more removed lines; see GitHub link above)
+   5085: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       default: () => wQ
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L25-L999` → after: `L8-L4478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L8-L4478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/88.js#L8-L4478) · [Before (L25-L999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/88.js#L25-L999)

```diff
-     var Op = cp(1419),
-       op = cp(34),
-       Ip = cp(1308),
-       Sp = cp(2457),
-       xp = cp(4927),
-       Lp = cp(4886);
-     let Yp, Dp = !1,
-       Ap = !1,
-       Pp = !1,
-       Wp = !1;
-     const yp = 1300,
-       Up = 3e3;
-     let wp = 0,
-       vp = !1,
-       tp = !1,
-       Hp = 0;
- ... (959 more removed lines; see GitHub link above)
+     const wQ = String.raw`export interface GameApi {
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
+ ... (4455 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L1001-L1003` → after: `L4480-L4501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R4480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L4480-L4501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/88.js#L4480-L4501) · [Before (L1001-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/88.js#L1001-L1003)

```diff
-     function op(pp) {
-       return "__private_" + Op++ + "_" + pp
-     }
+ export type OtherEntitySettings = {
+ 		opacity: number
+ 		zIndex: 0 | 1
+ 		overlayColour: string
+ 		canAttack: boolean
+ 		canSee: boolean
+ 		interactable: boolean
+ 		interactionPrompt: string | CustomTextStyling
+ 		showDamageAmounts: boolean
+ 		lockHeadToBody: boolean
+ 		killfeedColour: string
+ 		meshScaling: EntityMeshScalingMap
+ 		colorInLobbyLeaderboard: string
+ 		lobbyLeaderboardValues: LobbyLeaderboardValues
+ 		lobbyLeaderboardTags: ChatTags
+ 		nameTagInfo: NameTagInfo
+ ... (6 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/89.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/89.js` (56 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L4-L63` → after: `L4-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L4-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/89.js#L4-L78) · [Before (L4-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/89.js#L4-L63)

```diff
-   40730: (pp, ip, cp) => {
-     cp.r(ip), cp.d(ip, {
-       startWasmPadGameplay: () => fp
-     });
-     cp(40736);
-     var Op = cp(40739),
-       op = cp(40758),
-       Ip = cp(1982),
-       Sp = cp(40769),
-       xp = cp(4911),
-       Lp = cp(4886),
-       Yp = cp(40778),
-       Dp = cp(40783),
-       Ap = cp(4921),
-       Pp = cp(40867),
-       Wp = cp(2463),
- ... (44 more removed lines; see GitHub link above)
+   36831: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       d: () => SQ,
+       f: () => kQ
+     });
+     var wQ = XQ(61),
+       qQ = XQ(2003),
+       TQ = XQ(36833),
+       zQ = XQ.n(TQ),
+       sQ = XQ(4863),
+       FQ = XQ(1975),
+       PQ = XQ(1498),
+       gQ = XQ(105),
+       JQ = XQ(129),
+       rQ = XQ(402),
+       IQ = XQ(1081),
+ ... (59 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L65-L66` → after: `L80-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L80-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/89.js#L80-L86) · [Before (L65-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/89.js#L65-L66)

```diff
-           op = () => {
-             cp = !1, ip.reset(), Op(0, 0)
+           wQ = XQ => {
+             const wQ = WQ,
+               qQ = wQ && (0, cQ.e)(XQ.changedTouches, wQ.id);
+             qQ && (XQ.preventDefault(), QQ.scrollBy({
+               top: wQ.y - qQ.clientY,
+               behavior: "instant"
+             }), wQ.y = qQ.clientY)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L68-L77` → after: `L88-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L88-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/89.js#L88-L93) · [Before (L68-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/89.js#L68-L77)

```diff
-         return {
-           update: (op, Ip, Lp) => {
-             cp || (pp.discardPending(), cp = !0);
-             const Yp = (0, Up.o)(ip, op, Ip, Lp, performance.now());
-             Op(Yp.yawRadPerSec, Yp.pitchRadPerSec);
-             const Dp = pp.drainLookDelta();
-             0 === Dp.QE && 0 === Dp.TE || (0, Wp.z)(xp.z.PadLook, Sp.rd.Gyro, Dp.QE, Dp.TE, 0)
-           },
-           release: op,
-           uninstall: op
+         return QQ.addEventListener("touchstart", XQ, {
+           passive: !0
+         }), QQ.addEventListener("touchmove", wQ, {
+           passive: !1
+         }), () => {
+           QQ.removeEventListener("touchstart", XQ), QQ.removeEventListener("touchmove", wQ)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L79-L87` → after: `L95-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L95-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/89.js#L95-L139) · [Before (L79-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/89.js#L79-L87)

```diff
-       },
-       Np = () => {
-         const pp = lp();
-         return null !== pp && 0 !== (Qp(pp) & Sp.wd.PadSneakToggled)
-       },
-       Tp = () => {
-         const pp = (pp => {
-           const ip = pp => function() {
-             return (0, Pp.c)(), pp(...arguments)
+       }), [xQ]);
+       const [YQ, NQ] = (0, wQ.useState)(!1), [ZQ, OQ] = (0, wQ.useState)(!1), KQ = (0, wQ.useRef)(YQ), mQ = (0, wQ.useRef)(null), MQ = (0, wQ.useRef)(!1), QW = (0, wQ.useRef)(null), WW = (0, wQ.useRef)(null), XW = (0, wQ.useRef)(null), wW = (0, wQ.useRef)(sW);
+       wW.current = sW;
+       const qW = (0, hQ.k)();
+ 
+       function TW() {
+         GQ.current = !1, IQ(!1), WW.current.blur()
+       }
+ 
+       function zW(QQ) {
+         KQ.current = QQ, NQ(QQ)
+       }
+ 
+       function sW() {
+         const QQ = WW.current.value;
+         WW.current.value = "", FW(QQ)
+ ... (29 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L89-L114` → after: `L141-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L141-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/89.js#L141-L205) · [Before (L89-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/89.js#L89-L114)

```diff
-           return {
-             primaryFireDown: ip((pp => (Mp(Hp, Sp.id.Down | (pp ? Sp.id.Repeat : 0)), 0))),
-             primaryFireUp: ip((() => {
-               Ep(Hp)
-             })),
-             altFireDown: ip((() => (Cp(dp), 0))),
-             altFireUp: ip((() => {
-               Ep(dp)
-             })),
-             jumpDown: ip((() => {
-               Xp(jp)
-             })),
-             specialActionDown: ip((pp => {
-               Cp(qp[pp])
-             })),
-             specialActionUp: ip((pp => {
- ... (10 more removed lines; see GitHub link above)
+           document.addEventListener("touchstart", QQ, {
+             capture: !0
+           });
+           const WQ = QQ => {
+             (0, aQ.h)(QQ.target) && (GQ.current = !1, IQ(!1))
+           };
+           document.addEventListener("mousedown", WQ, {
+             capture: !0
+           });
+           const XQ = () => {
+               clearTimeout(mQ.current), zW(!0)
+             },
+             wQ = () => {
+               clearTimeout(mQ.current), mQ.current = setTimeout((() => {
+                 zW(!1), gW()
+               }), 4e3)
+ ... (49 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L116` → after: `L207-L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L207-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/89.js#L207-L222) · [Before (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/89.js#L116)

```diff
-             pickBlock: ip((() => (Xp(ep), Jp(pp()))))
+             rQ = () => {
+               PQ = !0, JQ.unobserve(FQ), JQ.observe(FQ)
+             };
+           QW.current = rQ;
+           const jQ = new MutationObserver(rQ);
+           return jQ.observe(FQ, {
+             childList: !0,
+             subtree: !0
+           }), () => {
+             document.removeEventListener("keydown", sQ, {
+               capture: !0
+             }), document.removeEventListener("touchstart", QQ, {
+               capture: !0
+             }), document.removeEventListener("mousedown", WQ, {
+               capture: !0
+             }), document.removeEventListener("pointerlockchange", TQ), QW.current = null, jQ.disconnect(), JQ.disconnect(), clearTimeout(mQ.current)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L118-L148` → after: `L224-L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L224-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/89.js#L224-L226) · [Before (L118-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/89.js#L118-L148)

```diff
-         })(lp);
-         let ip = !1,
-           cp = null;
-         const Op = () => {
-           var pp;
-           null === (pp = cp) || void 0 === pp || pp(), cp = null
-         };
-         return {
-           bodies: () => pp,
-           look: Bp(),
-           move: (pp, cp) => {
-             var op;
-             Op();
-             const {
-               bits: Ip,
-               flips: xp
- ... (15 more removed lines; see GitHub link above)
+         }), []), (0, pQ.r)(WW, {
+           open: () => {
+             IQ(!0)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L150-L168` → after: `L228-L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L228-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/89.js#L228-L229) · [Before (L150-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/89.js#L150-L168)

```diff
-           stopMoving: () => {
-             var pp;
-             ip && (ip = !(null !== (pp = lp()) && void 0 !== pp && pp.padMove(0, 0, 0, 0, 0, 0)), Op(), cp = (0, Lp.s)((() => {
-               Op(), (0, wp.e)(Np())
-             })))
-           },
-           uninstall: Op,
-           deviceChanged: pp => {
-             var cp;
-             "touch" === pp ? ((0, wp.e)(!1), null !== (cp = lp()) && void 0 !== cp && cp.padMove(0, 0, 0, 0, Sp.nd.EndToggle, 0) && (ip = !1)) : "gamepad" === pp && (0, wp.e)(Np())
-           },
-           hasPlayer: () => null !== lp(),
-           isPlayerDead: () => {
-             var pp;
-             return !1 === (null === (pp = lp()) || void 0 === pp ? void 0 : pp.localPlayerAlive())
-           },
- ... (3 more removed lines; see GitHub link above)
+           close: () => {
+             TW()
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L170-L172` → after: `L231-L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L231-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/89.js#L231-L232) · [Before (L170-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/89.js#L170-L172)

```diff
-           isFreeCameraOn: () => {
-             const pp = lp();
-             return null !== pp && 0 !== (Qp(pp) & Sp.wd.FreeCam)
+           submit: () => {
+             "" !== WW.current.value && sW(), TW()
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L174-L177` → after: `L234-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L234-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/89.js#L234-L235) · [Before (L174-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/89.js#L174-L177)

```diff
-           targetsBlock: () => Jp(lp()),
-           selectedSlotEmpty: () => {
-             var pp;
-             return !(null !== (pp = lp()) && void 0 !== pp && pp.items.sx())
+           stepHistory: () => {
+             PW(1, !0)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L179-L181` → after: `L237-L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L237-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/89.js#L237-L238) · [Before (L179-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/89.js#L179-L181)

```diff
-           pickBlockAllowed: () => !!Ip.c.get("creative") && !!Ip.c.get("canPickBlocks"),
-           scrollHotbar: pp => {
-             Mp(Sp.ld.Hotbar, Sp.id.Down | (pp > 0 ? Sp.id.Next : 0))
+           sendLine: QQ => {
+             FW(QQ), TW()
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L183-L190` → after: `L240-L461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L240-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/89.js#L240-L461) · [Before (L183-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/89.js#L183-L190)

```diff
-           hasFullInventory: Yp.o,
-           hasLobbyTab: () => (0, vp.d)({
-             lobbyLeaderboardInfo: Ip.c.get("lobbyLeaderboardInfo"),
-             lobbyManage: Ip.c.get("lobbyManage")
-           }),
-           contextActionInputs: () => {
-             var pp, ip, cp, Op;
-             const op = lp();
+           selectNextChannel: () => {
+             dQ.b.selectNextChannel()
+           }
+         }), (0, wQ.useEffect)((() => {
+           var QQ;
+           (GQ.current = TQ, WW.current) && (TQ ? (oQ.current = 0, WW.current.focus()) : (WW.current.blur(), null === (QQ = QW.current) || void 0 === QQ || QQ.call(QW)))
+         }), [TQ]),
+         function(QQ, WQ) {
+           (0, wQ.useLayoutEffect)((() => {
+             if (!WQ) return;
+             AQ.c.hold();
+             const XQ = QQ.current.closest(".InGameHeaderAndChat"),
+               wQ = (0, RQ.c)((QQ => {
+                 let {
+                   top: WQ,
+                   height: wQ
+ ... (206 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L192-L194` → after: `L463-L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L463-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/89.js#L463-L465) · [Before (L192-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/89.js#L192-L194)

```diff
-               holdingGun: !1 !== (null === op || void 0 === op ? void 0 : op.localPlayerAlive()) && "Gun" === (null === op || void 0 === op || null === (pp = op.items.sx()) || void 0 === pp || null === (ip = pp.typeObj) || void 0 === ip ? void 0 : ip.type),
-               customButtons: null !== (cp = Ip.c.get("customButtons")) && void 0 !== cp ? cp : null,
-               touchscreenActionButton: null !== (Op = Ip.c.get("touchscreenActionButton")) && void 0 !== Op ? Op : null
+               icon: WQ,
+               text: XQ,
+               onPointerDown: wQ
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L197-L198` → after: `L619-L811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L619-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/89.js#L619-L811) · [Before (L197-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/89.js#L197-L198)

```diff
-           pressTouchButton: pp => {
-             pp ? Cp(Rp) : Ep(Rp)
+           onPointerUp: GQ,
+           onPointerCancel: GQ,
+           onLostPointerCapture: GQ
+         }), gQ && (0, sQ.jsx)(zQ.o, {
+           className: "ResizableSidePanelClose",
+           onClick: gQ
+         })]
+       })
+     }
+   },
+   37194: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       A: () => UQ,
+       D: () => dQ,
+       F: () => qQ,
+       G: () => vQ,
+ ... (177 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L201-L207` → after: `L818-L22724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L818-L22724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/89.js#L818-L22724) · [Before (L201-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/89.js#L201-L207)

```diff
-       },
-       fp = () => {
-         const pp = (0, op.d)(Tp()),
-           ip = (0, Op.e)(),
-           cp = null;
-         return () => {
-           pp(), ip(), null === cp || void 0 === cp || cp()
+       }
+       subscribe(QQ) {
+         return this.listeners.add(QQ), () => {
+           this.listeners.delete(QQ)
+         }
+       }
+     }
+     const sQ = new zQ("codeEditorLightMode", !1),
+       FQ = new zQ("codeEditorAiHints", !0),
+       PQ = new zQ("codeEditorAiKeySafetyCheck", !0, TQ.featureFlags.isOwnTopLevelSite);
+ 
+     function gQ(QQ) {
+       const [WQ, XQ] = (0, wQ.useState)(QQ.get);
+       return (0, wQ.useEffect)((() => {
+         const WQ = QQ.subscribe(XQ);
+         return XQ(QQ.get()), WQ
+ ... (21891 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L210-L235` → after: `L22747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR22747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L22747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/89.js#L22747) · [Before (L210-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/89.js#L210-L235)

```diff
-   },
-   4886: (pp, ip, cp) => {
-     cp.d(ip, {
-       B: () => tp,
-       D: () => Sp,
-       H: () => xp,
-       K: () => Rp,
-       b: () => mp,
-       c: () => dp,
-       f: () => Xp,
-       h: () => Ep,
-       j: () => vp,
-       m: () => jp,
-       n: () => Hp,
-       p: () => ep,
-       s: () => qp,
- ... (10 more removed lines; see GitHub link above)
+     }
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L238` → after: `L22750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR22750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L22750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/89.js#L22750) · [Before (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/89.js#L238)

```diff
-       Ip = null !== pp && void 0 !== pp ? pp : op
+       null !== QQ && cQ.afterAliasJoinLeft(performance.now() - QQ)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L242` → after: `L22754-L22757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR22754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L22754-L22757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/89.js#L22754-L22757) · [Before (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/89.js#L242)

```diff
-       return Ip
+       return gQ.e.errorWithCode("Left the game while it loaded", TQ.h.REQUEST_TO_MATCHMAKING, {
+         severity: "low",
+         fX: !0
+       })
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L244-L252` → after: `L22759-L22762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR22759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L22759-L22762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/89.js#L22759-L22762) · [Before (L244-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/89.js#L244-L252)

```diff
-     const Lp = new Set,
-       Yp = new Set;
-     let Dp = -1;
-     const Ap = new Set,
-       Pp = new Set;
-     let Wp = 0,
-       yp = 0;
-     const Up = new Set,
-       wp = new Set;
+     setTimeout((() => {
+       window.initialD ? Date.now = window.initialD : console.error("window.initialD not defined")
+     }), 3e3);
+     const LQ = 1e4;
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L254-L257` → after: `L22764-L22790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR22764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L22764-L22790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/89.js#L22764-L22790) · [Before (L254-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/89.js#L254-L257)

```diff
-     function vp(pp) {
-       return Lp.add(pp), () => {
-         Lp.delete(pp)
-       }
+     function kQ(QQ, WQ, XQ) {
+       return fQ(QQ, WQ, XQ).then((QQ => ({
+         result: QQ,
+         at: performance.now()
+       })))
+     }
+     async function fQ(QQ, WQ, XQ) {
+       return (0, wQ.G)(QQ) || QQ instanceof qQ.h || !(QQ.length > JQ.K) ? await pQ.e.matchmakePlayer(XQ, QQ, WQ, (0, UQ.c)()).then((QQ => {
+         if (!1 === QQ.succeeded) return gQ.e.errorWithCode(QQ.failReason, TQ.h.REQUEST_TO_MATCHMAKING, {
+           severity: "low"
+         });
+         const {
+           gameServerHost: WQ,
+           lobbyName: XQ,
+           gameNameWithVariation: wQ
+         } = QQ, qQ = SQ(cQ.hostFor(WQ));
+ ... (11 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L260-L265` → after: `L22793-L22800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR22793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L22793-L22800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/89.js#L22793-L22800) · [Before (L260-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/89.js#L260-L265)

```diff
-     function tp(pp, ip) {
-       for (const Op of Lp) try {
-         Op(pp)
-       } catch (cp) {
-         ip(cp)
-       }
+     function SQ(QQ) {
+       const WQ = GQ.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(QQ);
+       return WQ.isError() ? gQ.e.errorWithCode(WQ.asError().message, TQ.h.CONNECT_TO_GAME_SERVER, {
+         severity: "medium"
+       }) : gQ.e.value(WQ.getValue())
+     }
+     window.leaveGame = () => {
+       (0, DQ.n)("/")
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L269-L270` → after: `L22812-L22819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR22812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L22812-L22819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/89.js#L22812-L22819) · [Before (L269-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/89.js#L269-L270)

```diff
-       return Yp.add(pp), () => {
-         Yp.delete(pp)
+       var WQ, XQ;
+       if ((0, qQ.G)(QQ)) return !0;
+       const zQ = null !== (WQ = null === (XQ = TQ.siteUsedData[TQ.siteUsed]) || void 0 === XQ ? void 0 : XQ.adConfig.showRewardedAds) && void 0 !== WQ && WQ;
+       for (const qQ in QQ) {
+         const WQ = QQ[qQ];
+         if (null !== WQ && void 0 !== WQ && WQ.items)
+           for (const QQ in WQ.items)
+             if ((0, wQ.k)(WQ.items[QQ], zQ)) return !1
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L275-L281` → after: `L22832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR22832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L22832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/89.js#L22832) · [Before (L275-L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/89.js#L275-L281)

```diff
-       const cp = Dp < 0 ? 0 : pp - Dp;
-       Dp = pp;
-       for (const op of Yp) try {
-         op(cp)
-       } catch (Op) {
-         ip(Op)
-       }
+       return null !== wQ(QQ, WQ)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L284-L287` → after: `L22853-L22854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR22853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L22853-L22854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/89.js#L22853-L22854) · [Before (L284-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/89.js#L284-L287)

```diff
-     function ep(pp) {
-       return Ap.add(pp), () => {
-         Ap.delete(pp)
-       }
+     function PQ(QQ, WQ) {
+       return (!(0, zQ.d)() || 0 === QQ && 0 === WQ) && (0, TQ.w)(qQ.j.Joystick, 0, QQ, WQ, 0)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L291-L293` → after: `L22867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR22867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L22867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/89.js#L22867) · [Before (L291-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/89.js#L291-L293)

```diff
-       return Pp.add(pp), () => {
-         Pp.delete(pp)
-       }
+       return QQ.classList.contains("TouchKeyHit") && IQ() ? null : QQ.firstElementChild
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L298` → after: `L22871-L22877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR22871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L22871-L22877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/89.js#L22871-L22877) · [Before (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/89.js#L298)

```diff
-       kp += pp
+       return QQ.classList.contains("TouchKeyHit") && !QQ.classList.contains("CanvasZone") ? {
+         whole: !IQ(),
+         keyBox: null
+       } : {
+         whole: !1,
+         keyBox: jQ(JQ(QQ))
+       }
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L302-L303` → after: `L22881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR22881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L22881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/89.js#L22881) · [Before (L302-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/89.js#L302-L303)

```diff
-       const pp = kp;
-       return kp = 0, pp
+       return document.documentElement.classList.contains(sQ.m)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L307-L308` → after: `L22885-L22887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR22885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L22885-L22887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/89.js#L22885-L22887) · [Before (L307-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/89.js#L307-L308)

```diff
-       return Up.add(pp), () => {
-         Up.delete(pp)
+       return !(QQ instanceof HTMLElement) || QQ.offsetWidth <= 0 || QQ.offsetHeight <= 0 ? null : {
+         width: QQ.offsetWidth,
+         height: QQ.offsetHeight
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L313-L314` → after: `L22897-L22962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR22897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L22897-L22962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/89.js#L22897-L22962) · [Before (L313-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/89.js#L313-L314)

```diff
-       return wp.add(pp), () => {
-         wp.delete(pp)
+       return {
+         x: QQ.left + QQ.width / 2,
+         y: QQ.top + QQ.height / 2,
+         radius: Math.min(QQ.width, QQ.height) / 2
+       }
+     }
+     const VQ = new class {
+       constructor(QQ) {
+         this.write = QQ, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
+       }
+       set(QQ, WQ) {
+         let XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         WQ ? this.elements.set(QQ, {
+           element: WQ,
+           hidden: XQ
+         }) : this.elements.delete(QQ), this.measureOne(QQ)
+ ... (50 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L318-L319` → after: `L22983-L23000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR22983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L22983-L23000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/89.js#L22983-L23000) · [Before (L318-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/89.js#L318-L319)

```diff
-     function Cp() {
-       Wp = 0, yp = 0, Dp = -1
+     function TQ(QQ) {
+       return "download" === QQ ? {
+         icon: "wifi",
+         title: "wasmScreens:downloadFailedTitle",
+         help: "wasmScreens:downloadFailedHelp",
+         helpValues: {},
+         discordLink: !1,
+         confirm: "general:tryAgain",
+         cancel: "general:back"
+       } : {
+         icon: "face-dizzy",
+         title: "wasmScreens:unsupportedTitle",
+         help: "wasmScreens:unsupportedHelp",
+         helpValues: {},
+         discordLink: !1,
+         confirm: "general:ok",
+ ... (2 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L323-L326` → after: `L23004-L23014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR23004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L23004-L23014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/89.js#L23004-L23014) · [Before (L323-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/89.js#L323-L326)

```diff
-       if ("paced" === pp) return yp += ip, null;
-       if ("drawn" !== pp && "skipped" !== pp) return null;
-       const cp = ip + yp;
-       return yp = 0, cp
+       return {
+         icon: "face-dizzy",
+         title: "wasmScreens:crashTitle",
+         help: WQ ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
+         helpValues: {
+           code: QQ.code
+         },
+         discordLink: WQ,
+         confirm: "general:reload",
+         cancel: "general:back"
+       }
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L329-L353` → after: `L23017-L23025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR23017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L23017-L23025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/89.js#L23017-L23025) · [Before (L329-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/89.js#L329-L353)

```diff
-     function Xp(pp, ip, cp, op) {
-       const Ip = (0, Op.j)(ip),
-         Sp = pp > 0 ? performance.now() : 0;
-       for (let Op = 0; Op < pp; Op++)
-         for (const pp of Up) try {
-           pp()
-         } catch (xp) {
-           op(xp)
-         }
-       if (pp > 0 && mp(performance.now() - Sp), null !== cp) {
-         for (const pp of Ap) try {
-           pp(cp)
-         } catch (xp) {
-           op(xp)
-         }
-         Wp += cp
- ... (9 more removed lines; see GitHub link above)
+     function sQ() {
+       return {
+         icon: "face-dizzy",
+         title: "wasmScreens:turnstilePageTitle",
+         help: "wasmScreens:turnstilePageHelp",
+         helpValues: {},
+         discordLink: !1,
+         confirm: "general:ok",
+         cancel: null
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L355-L358` → after: `L23027-L23039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR23027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L23027-L23039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/89.js#L23027-L23039) · [Before (L355-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/89.js#L355-L358)

```diff
-       for (const Op of wp) try {
-         Op(pp, Ip)
-       } catch (xp) {
-         op(xp)
+     }
+ 
+     function FQ(QQ, WQ, XQ) {
+       return {
+         icon: "wifi",
+         title: "wasmScreens:disconnectedTitle",
+         help: XQ ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
+         helpValues: {
+           reason: QQ.reason
+         },
+         discordLink: null === QQ.name,
+         confirm: WQ ? "general:reconnect" : QQ.requiresRefresh ? "general:reload" : "general:ok",
+         cancel: null
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L362` → after: `L23043-L23050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR23043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L23043-L23050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/89.js#L23043-L23050) · [Before (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/89.js#L362)

```diff
-   4921: (pp, ip, cp) => {
+   37183: (QQ, WQ, XQ) => {
+     function wQ(QQ, WQ) {
+       return null === QQ || null === WQ ? QQ === WQ : QQ[0] === WQ[0] && QQ[1] === WQ[1] && QQ[2] === WQ[2]
+     }
+ 
+     function qQ(QQ) {
+       return [QQ[0] + .5, QQ[1] + .5, QQ[2] + .5]
+     }
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L365-L368` → after: `L23053-L23059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR23053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L23053-L23059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/89.js#L23053-L23059) · [Before (L365-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/89.js#L365-L368)

```diff
-       e: () => Ip,
-       i: () => Sp,
-       j: () => Op,
-       n: () => xp
+       e: () => wQ
+     })
+   },
+   37152: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       d: () => FQ,
+       f: () => sQ
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L371-L567` → after: `L23062-L23077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR23062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L23062-L23077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/89.js#L23062-L23077) · [Before (L371-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/89.js#L371-L567)

```diff
-         Mouse1: 1,
-         Mouse2: 2,
-         Mouse3: 3,
-         "Alt+Left Click": 4,
-         F2: 5,
-         F4: 6,
-         F5: 7,
-         F8: 8,
-         F9: 9,
-         Digit0: 10,
-         Digit1: 11,
-         Digit2: 12,
-         Digit3: 13,
-         Digit4: 14,
-         Digit5: 15,
-         Digit6: 16,
- ... (181 more removed lines; see GitHub link above)
+         files: {
+           "debugLog.ts": "export function debugLog(message: string): void {\n\tconsole.log(`[debug] ${message}`)\n}\n",
+           "index.ts": 'import type { PlayerId } from "@bloxd"\nimport { debugLog } from "./debugLog"\n\nonPlayerJoin = (player: PlayerId) => {\n\tapi.log(`Player ${player} joined - Love from Debug Plugin!`)\n}\n\nexport { debugLog }\n'
+         },
+         dependencies: [],
+         bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in … [truncated]
+         types: "declare function debugLog(message: string): void;\n\nexport { debugLog };\n"
+       },
+       qQ = {
+         files: {
+           "index.ts": 'import type { CustomTextStyling, DialogueText, PlayerId, SpeechVoice } from "@bloxd"\nimport { clearTimeout, setTimeout, TimeoutId } from "@plugins/helpers"\n\n/** Long enough to read most lines once they have appeared. */\nconst DEFAULT_DURATION_MS = 6000\ … [truncated]
+         },
+         dependencies: ["helpers"],
+         bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in … [truncated]
+         types: "import { CustomTextStyling, SpeechVoice, PlayerId, DialogueText } from '@bloxd';\n\ntype DialogueOpts = {\n    /** Shown above the line, such as a name. */\n    speakerName?: string | CustomTextStyling;\n    /** A preset such as \"regular\" or \"gruff\", or every  … [truncated]
+       },
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L569-L629` → after: `L23079-L23087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR23079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L23079-L23087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/89.js#L23079-L23087) · [Before (L569-L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/89.js#L569-L629)

```diff
-         forward: [21, 46],
-         backward: [31, 49],
-         left: [30, 47],
-         right: [32, 48],
-         sprint: [50, 51],
-         jump: [59],
-         crouch: [52, 41, 60, 61, 62, 53],
-         "primary-fire": [1],
-         "alt-fire": [3, 22],
-         SpecialAction1: [23],
-         SpecialAction2: [33],
-         ReloadGun: [23],
-         DropItem: [20],
-         "mid-fire": [2, 4],
-         Zoom: [42],
-         SwapCameraZoom: [29, 7],
- ... (45 more removed lines; see GitHub link above)
+         files: {
+           "chunk.ts": 'import { setTimeout } from "./timers"\n\n/**\n * Forces a chunk to be loaded.\n * @param x - The x coordinate of the chunk\n * @param y - The y coordinate of the chunk\n * @param z - The z coordinate of the chunk\n * @param onLoaded - The function to call w … [truncated]
+           "index.ts": 'import { handleTimers } from "./timers"\n\ntick = () => {\n\thandleTimers()\n}\n\nexport { setTimeout, setInterval, clearTimeout, clearInterval } from "./timers"\nexport type { TimeoutId, IntervalId } from "./timers"\nexport { forceLoadChunk } from "./chunk … [truncated]
+           "random.ts": "/**\n * Generates a random integer between min and max, inclusive.\n * @param min - The minimum value.\n * @param max - The maximum value.\n * @param includeMax - Whether to include the max value in the range. Defaults to false.\n * @returns A random integ … [truncated]
+           "timers.ts": 'import { PlayerId } from "@bloxd"\n\ndeclare const __brand: unique symbol\ntype Branded<T, B> = T & { [__brand]: B }\nexport type TimeoutId = Branded<number, "TimeoutId">\nexport type IntervalId = Branded<number, "IntervalId">\n\nlet nextTimeoutId: number  … [truncated]
+         },
+         dependencies: [],
+         bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in … [truncated]
+         types: 'import { PlayerId } from \'@bloxd\';\n\ndeclare const __brand: unique symbol;\ntype Branded<T, B> = T & {\n    [__brand]: B;\n};\ntype TimeoutId = Branded<number, "TimeoutId">;\ntype IntervalId = Branded<number, "IntervalId">;\n/**\n * Registers a function to be c … [truncated]
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L632-L636` → after: `L23090-L23100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR23090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L23090-L23100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/89.js#L23090-L23100) · [Before (L632-L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/89.js#L632-L636)

```diff
-         jump: [188],
-         crouch: [189],
-         SwapCameraZoom: [190],
-         "primary-fire": [194],
-         "alt-fire": [195]
+         files: {
+           "MapVoter.ts": 'import { PlayerId } from "@bloxd"\nimport { BaseMapInfo, BaseTeamInfo } from "./types"\nimport { SessionBasedPlayer } from "./SessionBasedPlayer"\nimport { shuffleArray, getRandomItem, setTimeout } from "@plugins/helpers"\n\nconst MAP_VOTING_CATEGORY = " … [truncated]
+           "SessionBasedGame.ts": 'import { BaseTeamInfo, BaseMapInfo, SessionBasedGameSetupOptions, MapSource } from "./types"\nimport { SessionBasedPlayer } from "./SessionBasedPlayer"\nimport { BlockName, CustomTextStyling, PlayerId, Pos } from "@bloxd"\nimport { style, getDime … [truncated]
+           "SessionBasedPlayer.ts": 'import { BaseTeamInfo, BaseMapInfo } from "./types"\nimport { ChatTags, PlayerId, Pos, RecursiveReadonly } from "@bloxd"\nimport { SessionBasedGame } from "./SessionBasedGame"\nimport { style, getLowHigh } from "./helpers"\n\n/** Opacity a spec … [truncated]
+           "helpers.ts": 'import { CustomTextStyling, Pos, RecursiveReadonly, TranslatedText } from "@bloxd"\nimport { MapSource, MaybeRecursiveReadonly } from "./types"\n\nexport function style(msg: string | TranslatedText, colour: string): CustomTextStyling {\n\treturn [{ str: m … [truncated]
+           "index.ts": 'import { ChatTags, CustomTextStyling, EntityId, PlayerId, Pos, TranslatedText, RecursiveReadonly, BlockName } from "@bloxd"\nimport { BaseTeamInfo, BaseMapInfo, MapSource, SessionBasedGameSetupOptions } from "./types"\nimport { SessionBasedPlayer } from "./ … [truncated]
+           "types.ts": 'import { BlockName, CustomTextStyling, Pos, RecursiveReadonly } from "@bloxd"\nimport { SessionBasedPlayer } from "./SessionBasedPlayer"\n\nexport type BaseTeamInfo = RecursiveReadonly<{\n\tname: string\n\tmaxPlayers: number\n\tcolour: string\n}>\n\n/** A w … [truncated]
+         },
+         dependencies: ["helpers"],
+         bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __defNormalProp = (obj, key, value) => key in obj … [truncated]
+         types: 'import * as _bloxd from \'@bloxd\';\nimport { PlayerId, CustomTextStyling, BlockName, ChatTags, Pos, RecursiveReadonly } from \'@bloxd\';\n\ndeclare class SessionBasedGame<TeamInfo extends BaseTeamInfo, MapInfo extends BaseMapInfo<TeamInfo>, Player extends Session … [truncated]
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L638` → after: `L23102-L23159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR23102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L23102-L23159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/89.js#L23102-L23159) · [Before (L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/89.js#L638)

```diff
-       xp = [16]
+       sQ = {
+         debug: {
+           name: "debug",
+           specifier: "@plugins/debug",
+           sourceVfsPath: "/node_modules/@plugins/debug/index.ts",
+           typesVfsPath: "/node_modules/@plugins/debug/index.d.ts",
+           files: wQ.files,
+           dependencies: wQ.dependencies,
+           bundledSource: wQ.bundledSource,
+           types: wQ.types
+         },
+         dialogue: {
+           name: "dialogue",
+           specifier: "@plugins/dialogue",
+           sourceVfsPath: "/node_modules/@plugins/dialogue/index.ts",
+           typesVfsPath: "/node_modules/@plugins/dialogue/index.d.ts",
+ ... (42 more added lines; see GitHub link above)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L640` → after: `L23161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR23161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L23161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/89.js#L23161) · [Before (L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/89.js#L640)

```diff
-   40867: (pp, ip, cp) => {
+   37158: (QQ, WQ, XQ) => {
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L643-L644` → after: `L23164-L23171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR23164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L23164-L23171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/89.js#L23164-L23171) · [Before (L643-L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/89.js#L643-L644)

```diff
-       f: () => Ip,
-       i: () => op
+       g: () => sQ,
+       h: () => zQ,
+       j: () => TQ,
+       l: () => PQ,
+       o: () => gQ,
+       q: () => jQ,
+       t: () => IQ,
+       x: () => rQ
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L646` → after: `L23173-L23174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR23173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L23173-L23174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/89.js#L23173-L23174) · [Before (L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/89.js#L646)

```diff
-     let Op = null;
+     var wQ = XQ(1273);
+     const qQ = ["quickjs", "ses"];
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L649` → after: `L23177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR23177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L23177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/89.js#L23177) · [Before (L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/89.js#L649)

```diff
-       Op = pp
+       return qQ.includes(QQ)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L653` → after: `L23181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR23181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L23181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/89.js#L23181) · [Before (L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/89.js#L653)

```diff
-       Op === pp && (Op = null)
+       return QQ === wQ.j || QQ === wQ.k
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L656-L658` → after: `L23184-L23185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR23184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L23184-L23185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/89.js#L23184-L23185) · [Before (L656-L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/89.js#L656-L658)

```diff
-     function Sp() {
-       var pp;
-       null === (pp = Op) || void 0 === pp || pp()
+     function sQ(QQ, WQ) {
+       return QQ === wQ.j && WQ === wQ.k || QQ === wQ.k && WQ === wQ.j
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L672` → after: `L23189-L23191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR23189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L23189-L23191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/89.js#L23189-L23191) · [Before (L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/89.js#L672)

```diff
-       return pp instanceof HTMLElement && (!!(pp.isContentEditable || pp instanceof HTMLTextAreaElement || pp instanceof HTMLSelectElement) || pp instanceof HTMLInputElement && !Ip.has(pp.type))
+       const WQ = wQ.k in QQ,
+         XQ = wQ.j in QQ;
+       return WQ && XQ ? null : WQ ? wQ.k : XQ ? wQ.j : null
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L675-L696` → after: `L23194-L23196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR23194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L23194-L23196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/89.js#L23194-L23196) · [Before (L675-L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/89.js#L675-L696)

```diff
-     function xp(pp) {
-       let ip = null;
-       const cp = cp => {
-           const op = Sp(cp);
-           op !== ip && (ip = op, pp(Op.i.UiCapture, Op.C.Keyboard, 0, 0, op ? Op.C.Keyboard : 0))
-         },
-         op = pp => {
-           cp(pp.target)
-         },
-         Ip = pp => {
-           cp(pp.relatedTarget)
-         },
-         xp = () => {
-           cp(document.activeElement)
-         },
-         Lp = {
- ... (6 more removed lines; see GitHub link above)
+     function PQ(QQ, WQ, XQ) {
+       const wQ = `${WQ}/`;
+       return QQ.filter((QQ => QQ.startsWith(wQ))).map((QQ => [QQ, `${XQ}/${QQ.slice(wQ.length)}`]))
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L705-L711` → after: `L23201-L23202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR23201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L23201-L23202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/89.js#L23201-L23202) · [Before (L705-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/89.js#L705-L711)

```diff
-       for (const op of Lp.values()) Ip |= op;
-       return (0, op.E)(pp, Ip & pp)
-     }
-   },
-   37146: (pp, ip, cp) => {
-     function Op(pp) {
-       return pp.includes("Leaf Bed")
+       for (const [wQ, qQ] of Object.entries(QQ)) wQ !== WQ && (XQ += qQ.length);
+       return XQ
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L715` → after: `L23207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR23207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L23207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/89.js#L23207) · [Before (L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/89.js#L715)

```diff
-       return / Bed(?: Head)?(?:\||$)/.test(pp) && !Op(pp)
+       return `${JQ}${QQ}`
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L718-L719` → after: `L23210-L23211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR23210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L23210-L23211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/89.js#L23210-L23211) · [Before (L718-L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/89.js#L718-L719)

```diff
-     function Ip(pp) {
-       return pp.includes(" Strongbed")
+     function IQ(QQ, WQ) {
+       return `/node_modules/@plugins/${QQ}/${WQ}`
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L723` → after: `L23215-L23219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR23215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L23215-L23219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/89.js#L23215-L23219) · [Before (L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/89.js#L723)

```diff
-       return Op(pp) || op(pp) || Ip(pp)
+       if (!QQ.startsWith(JQ)) return null;
+       const WQ = QQ.slice(JQ.length);
+       return function(QQ) {
+         return /^[a-zA-Z][a-zA-Z0-9_-]*$/.test(QQ)
+       }(WQ) ? WQ : null
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L728-L734` → after: `L23226-L23228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR23226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L23226-L23228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/89.js#L23226-L23228) · [Before (L728-L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/89.js#L728-L734)

```diff
-       g: () => Ip,
-       h: () => op
-     })
-   },
-   37142: (pp, ip, cp) => {
-     cp.d(ip, {
-       c: () => Yp
+       j: () => zQ,
+       l: () => FQ,
+       o: () => TQ
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L736-L749` → after: `L23230-L23240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR23230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L23230-L23240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/89.js#L23230-L23240) · [Before (L736-L749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/89.js#L736-L749)

```diff
-     var Op = cp(37146),
-       op = cp(9338);
-     const Ip = [],
-       Sp = [],
-       xp = [],
-       Lp = [];
-     for (const Dp of Object.keys(op.h))(0, Op.f)(Dp) ? Ip.push(Dp) : (0, Op.h)(Dp) && Sp.push(Dp), (0, Op.g)(Dp) && xp.push(Dp), (Dp.includes(" Bed Head") || Dp.includes(" Strongbed Head")) && Lp.push(Dp);
-     const Yp = {
-       leafBeds: Ip,
-       woolBeds: Sp,
-       strongBeds: xp,
-       beds: [...Ip, ...Sp, ...xp],
-       bedHeads: Lp,
-       blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
+     var wQ = XQ(2531);
+     const qQ = 5,
+       TQ = "[SCHEMATIC]",
+       zQ = 1024e4;
+ 
+     function sQ(QQ) {
+       return QQ.endsWith(".bloxdschem") && (0, wQ.t)(QQ.slice(0, -11) + ".ts") && QQ.length <= 64
+     }
+ 
+     function FQ(QQ) {
+       return Object.fromEntries(Object.keys(QQ).map((QQ => [QQ, TQ])))
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L752` → after: `L23243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR23243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L23243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/89.js#L23243) · [Before (L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/89.js#L752)

```diff
-   6605: (pp, ip, cp) => {
+   5196: (QQ, WQ, XQ) => {
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L754-L755` → after: `L23245-L23246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR23245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L23245-L23246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/89.js#L23245-L23246) · [Before (L754-L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/89.js#L754-L755)

```diff
-       e: () => Sp,
-       g: () => op,
+       d: () => qQ,
+       f: () => wQ,
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/89.js` (Changed code · before: `L760-L783` → after: `L23249-L23445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04bR23249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-61bae065020c990a5bf2541e3c3a7690adcae82a50b8ec2dc913c7112d34c04b) · [After (L23249-L23445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/89.js#L23249-L23445) · [Before (L760-L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/89.js#L760-L783)

```diff
-       m: () => xp
-     });
-     let Op = function(pp) {
-         return pp[pp.DEFAULT = 0] = "DEFAULT", pp[pp.BOAT = 1] = "BOAT", pp[pp.GLIDER = 2] = "GLIDER", pp[pp.BALLOON = 3] = "BALLOON", pp[pp.SLEEPING = 4] = "SLEEPING", pp[pp.RIDING_MOB = 5] = "RIDING_MOB", pp[pp.CAR = 6] = "CAR", pp[pp.HOVERCRAFT = 7] = "HOVERCRAFT", pp
-       }({}),
-       op = function(pp) {
-         return pp[pp.WOOD = 0] = "WOOD", pp[pp.OBSIDIAN = 1] = "OBSIDIAN", pp[pp.SPEED = 2] = "SPEED", pp
-       }({}),
-       Ip = function(pp) {
-         return pp[pp.WOOD = 0] = "WOOD", pp[pp.IRON = 1] = "IRON", pp[pp.GOLD = 2] = "GOLD", pp[pp.DIAMOND = 3] = "DIAMOND", pp
-       }({}),
-       Sp = function(pp) {
-         return pp[pp.YELLOW = 0] = "YELLOW", pp[pp.WHITE = 1] = "WHITE", pp[pp.RED = 2] = "RED", pp[pp.PURPLE = 3] = "PURPLE", pp[pp.PINK = 4] = "PINK", pp[pp.ORANGE = 5] = "ORANGE", pp[pp.MAGENTA = 6] = "MAGENTA", pp[pp.LIME = 7] = "LIME", pp[pp.LIGHT_GRAY = 8] = "LIGHT_GRAY", p … [truncated]
-       }({}),
-       xp = function(pp) {
-         return pp[pp.ROTATION_1 = 0] = "ROTATION_1", pp[pp.ROTATION_2 = 1] = "ROTATION_2", pp[pp.ROTATION_3 = 2] = "ROTATION_3", pp[pp.ROTATION_4 = 3] = "ROTATION_4", pp
- ... (8 more removed lines; see GitHub link above)
+       p: () => zQ
+     });
+     const wQ = ["sine", "triangle", "square", "sawtooth"],
+       qQ = 55,
+       TQ = {
+         soft: {
+           waveform: "sine",
+           pitchHz: 300,
+           glideSemitones: -.5,
+           durationMs: 80,
+           attackMs: 6,
+           releaseMs: 18,
+           lowpassHz: null,
+           volume: .6,
+           intonation: {
+             variationSemitones: 1.2,
+ ... (181 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/90.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/90.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/90.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/90.js#L4)

```diff
-   4911: (pp, ip, cp) => {
+   5111: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L6-L11` → after: `L6-L361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L6-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/90.js#L6-L361) · [Before (L6-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/90.js#L6-L11)

```diff
-       A: () => Vp,
-       Bb: () => Cp,
-       C: () => Ap,
-       Fb: () => Mp,
-       G: () => Pp,
-       Hb: () => Tp,
+       c: () => GQ,
+       d: () => VQ
+     });
+     var wQ = XQ(1357),
+       qQ = XQ(31);
+     var TQ = XQ(402);
+     var zQ = XQ(663);
+     var sQ = XQ(2506),
+       FQ = XQ(5118),
+       PQ = XQ(5146),
+       gQ = XQ(5153);
+     class JQ {
+       constructor(QQ, WQ, XQ, wQ, qQ, TQ) {
+         this.id = QQ, this.type = WQ, this.parameters = XQ, this.tearDownNotification = wQ, this.onDonePromise = qQ, this.resolveRequest = TQ
+       }
+     }
+ ... (340 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L32-L33` → after: `L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/90.js#L365) · [Before (L32-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/90.js#L32-L33)

```diff
-       f: () => sp,
-       gb: () => Xp,
+       g: () => cQ,
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L37-L45` → after: `L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/90.js#L368) · [Before (L37-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/90.js#L37-L45)

```diff
-       kb: () => Gp,
-       lb: () => Fp,
-       m: () => Wp,
-       mb: () => hp,
-       ob: () => Bp,
-       p: () => mp,
-       q: () => Zp,
-       qb: () => fp,
-       r: () => kp,
+       o: () => bQ,
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L52-L53` → after: `L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/90.js#L373) · [Before (L52-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/90.js#L52-L53)

```diff
-       xb: () => wp,
-       z: () => dp
+       y: () => hQ
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L55-L56` → after: `L375-L750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L375-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/90.js#L375-L750) · [Before (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/90.js#L55-L56)

```diff
-     const Op = 32,
-       op = 33.333333333333336,
+     var wQ = XQ(5126);
+     const qQ = {
+       lockPointer: () => !1,
+       unlockPointer: () => {},
+       leaveGame: () => {}
+     };
+     let TQ = qQ;
+ 
+     function zQ(QQ) {
+       TQ = null !== QQ && void 0 !== QQ ? QQ : qQ
+     }
+ 
+     function sQ() {
+       return TQ
+     }
+     const FQ = new Set,
+ ... (360 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L58-L89` → after: `L752-L812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L752-L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/90.js#L752-L812) · [Before (L58-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/90.js#L58-L89)

```diff
-         AbiVersion: 0,
-         Status: 1,
-         LastError: 2,
-         ErrorCount: 3,
-         FrameIndex: 4,
-         TicksRun: 5,
-         TicksDropped: 6,
-         Alpha: 7,
-         NetOutPtr: 8,
-         NetOutLen: 9,
-         WorkerOutPtr: 10,
-         WorkerOutLen: 11,
-         EventsPtr: 12,
-         EventsLen: 13,
-         ScenePtr: 14,
-         SceneLen: 15,
- ... (16 more removed lines; see GitHub link above)
+         forward: [21, 46],
+         backward: [31, 49],
+         left: [30, 47],
+         right: [32, 48],
+         sprint: [50, 51],
+         jump: [59],
+         crouch: [52, 41, 60, 61, 62, 53],
+         "primary-fire": [1],
+         "alt-fire": [3, 22],
+         SpecialAction1: [23],
+         SpecialAction2: [33],
+         ReloadGun: [23],
+         DropItem: [20],
+         "mid-fire": [2, 4],
+         Zoom: [42],
+         SwapCameraZoom: [29, 7],
+ ... (45 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L92-L95` → after: `L815-L819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L815-L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/90.js#L815-L819) · [Before (L92-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/90.js#L92-L95)

```diff
-         NotYet: 0,
-         Drawn: 1,
-         Backstop: 2,
-         HeldBackstop: 3
+         jump: [188],
+         crouch: [189],
+         SwapCameraZoom: [190],
+         "primary-fire": [194],
+         "alt-fire": [195]
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L97-L578` → after: `L821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/90.js#L821) · [Before (L97-L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/90.js#L97-L578)

```diff
-       xp = {
-         NotDrawn: 0,
-         Drawn: 1,
-         Paced: 2
-       },
-       Lp = {
-         AheadMask: 15,
-         Defaulted: 128,
-         LagsShift: 8,
-         CountMask: 4095
-       },
-       Yp = {
-         TerrainDrawn: 1,
-         ChunkRequested: 2,
-         ChunkStored: 4,
-         MeshLanded: 8,
- ... (466 more removed lines; see GitHub link above)
+       sQ = [16]
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L580` → after: `L823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/90.js#L823) · [Before (L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/90.js#L580)

```diff
-   4903: (pp, ip, cp) => {
+   5153: (QQ, WQ, XQ) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L582-L677` → after: `L825-L827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L825-L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/90.js#L825-L827) · [Before (L582-L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/90.js#L582-L677)

```diff
-       $: () => sp,
-       Ac: () => Op.gb,
-       B: () => Sp,
-       Bc: () => Op.ib,
-       Bd: () => vp,
-       Cd: () => Pi,
-       D: () => Qp,
-       Db: () => Oi,
-       Dc: () => Op.mb,
-       Fb: () => Kp,
-       Gc: () => ti,
-       Gd: () => hp,
-       H: () => vi,
-       Hb: () => Op.C,
-       J: () => Vp,
-       Jc: () => yi,
- ... (80 more removed lines; see GitHub link above)
+       b: () => sQ,
+       f: () => zQ,
+       i: () => PQ
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L679-L797` → after: `L829-L860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L829-L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/90.js#L829-L860) · [Before (L679-L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/90.js#L679-L797)

```diff
-     var Op = cp(4911),
-       op = cp(2457);
-     const Ip = Math.round(1e3 / Op.Wb),
-       Sp = 4,
-       xp = 2;
- 
-     function Lp() {
-       return crypto.getRandomValues(new Uint32Array(xp))
-     }
-     const Yp = {
-         Ok: 0,
-         Errors: 1,
-         Fatal: 2
-       },
-       Dp = 16,
-       Ap = {
- ... (103 more removed lines; see GitHub link above)
+     var wQ = XQ(2506),
+       qQ = XQ(2510);
+     const TQ = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);
+ 
+     function zQ(QQ) {
+       return QQ instanceof HTMLElement && (!!(QQ.isContentEditable || QQ instanceof HTMLTextAreaElement || QQ instanceof HTMLSelectElement) || QQ instanceof HTMLInputElement && !TQ.has(QQ.type))
+     }
+ 
+     function sQ(QQ) {
+       let WQ = null;
+       const XQ = XQ => {
+           const qQ = zQ(XQ);
+           qQ !== WQ && (WQ = qQ, QQ(wQ.j.UiCapture, wQ.x.Keyboard, 0, 0, qQ ? wQ.x.Keyboard : 0))
+         },
+         qQ = QQ => {
+           XQ(QQ.target)
+ ... (16 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/90.js` (Changed code · before: `L800-L969` → after: `L863-L868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16eR863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5e3b85d664592d935b7ce1496fbfa1a0b2f1b56f343f7dabfa39155ff7c6d16e) · [After (L863-L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/90.js#L863-L868) · [Before (L800-L969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/90.js#L800-L969)

```diff
-       return (pp | ip << 8) >>> 0
-     }
- 
-     function Bp(pp) {
-       return 255 & pp
-     }
- 
-     function Np(pp) {
-       return pp >>> 8
-     }
- 
-     function Tp(pp) {
-       return pp + 3 & -4
-     }
-     const fp = 16777216,
-       bp = 20;
- ... (154 more removed lines; see GitHub link above)
+       var XQ;
+       let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
+       FQ.set(wQ, (null !== (XQ = FQ.get(wQ)) && void 0 !== XQ ? XQ : 0) & ~QQ | WQ & QQ);
+       let TQ = 0;
+       for (const qQ of FQ.values()) TQ |= qQ;
+       return (0, qQ.C)(QQ, TQ & QQ)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/91.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/91.js` (37 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/91.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/91.js#L4)

```diff
-   36591: (pp, ip, cp) => {
+   41094: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L7-L8` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/91.js#L15) · [Before (L7-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/91.js#L7-L8)

```diff
-       c: () => xp,
-       g: () => Yp,
+       e: () => kQ,
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L10` → after: `L17-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L17-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/91.js#L17-L23) · [Before (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/91.js#L10)

```diff
-       l: () => Hp
+       j: () => YQ,
+       l: () => lQ,
+       p: () => HQ,
+       r: () => LQ,
+       v: () => cQ,
+       x: () => EQ,
+       y: () => RQ
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L12-L24` → after: `L25-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L25-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/91.js#L25-L68) · [Before (L12-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/91.js#L12-L24)

```diff
-     var Op = cp(643),
-       op = cp(1779),
-       Ip = cp(4911);
-     class Sp {
-       constructor(pp, ip) {
-         this.width = pp, this.TA = ip, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(pp * ip)
-       }
-       push(pp) {
-         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         const cp = this.data,
-           Op = this.next * this.width;
-         for (let op = 0; op < this.width; op++) cp[Op + op] = pp[ip + op];
-         this.next = (this.next + 1) % this.TA, this.size = Math.min(this.size + 1, this.TA)
+     var wQ = XQ(1454),
+       qQ = XQ(31),
+       TQ = XQ(1335),
+       zQ = XQ(2506),
+       sQ = XQ(5153),
+       FQ = XQ(5118);
+     let PQ, gQ = !1,
+       JQ = !1,
+       rQ = !1,
+       IQ = !1;
+     const jQ = 1300,
+       BQ = 3e3;
+     let yQ = 0,
+       VQ = !1,
+       DQ = !1,
+       pQ = 0;
+ ... (28 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L26-L35` → after: `L70-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L70-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/91.js#L70-L74) · [Before (L26-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/91.js#L26-L35)

```diff
-       rows() {
-         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1 / 0;
-         const cp = [],
-           Op = (this.next - this.size + this.TA) % this.TA;
-         for (let op = 0; op < this.size; op++) {
-           const Ip = (Op + op) % this.TA * this.width;
-           this.data[Ip + pp] >= ip && cp.push(Array.from(this.data.subarray(Ip, Ip + this.width)))
-         }
-         return cp
+     }
+ 
+     function cQ(QQ) {
+       return dQ.add(QQ), () => {
+         dQ.delete(QQ)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L37-L38` → after: `L76-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L76-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/91.js#L76-L88) · [Before (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/91.js#L37-L38)

```diff
-       lines() {
-         return this.rows().map((pp => pp.join(",")))
+     }
+ 
+     function AQ() {
+       (0, sQ.i)(zQ.x.Menu, (0, TQ.A)() ? 0 : zQ.x.Menu)
+     }
+ 
+     function RQ() {
+       DQ = !1, pQ = 0, AQ(), eQ()
+     }
+ 
+     function EQ(QQ) {
+       return vQ.add(QQ), () => {
+         vQ.delete(QQ)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L77` → after: `L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/91.js#L93) · [Before (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/91.js#L77)

```diff
-       return "js" === pp ? Dp.jsClient : Dp.wasmClient
+       JQ = !1, QQ !== gQ && (gQ = QQ, IQ = !1, clearTimeout(PQ), rQ = !gQ && UQ, gQ ? (VQ = !1, DQ = !1, pQ = 0) : hQ() && !UQ && (DQ = !0), UQ = !1, gQ && !hQ() && ZQ(), KQ(), rQ && eQ())
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L79-L82` → after: `L95-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L95-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/91.js#L95-L97) · [Before (L79-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/91.js#L79-L82)

```diff
-     class tp {
-       constructor() {
-         this.steps = new Sp(xp, Ap), this.events = new Sp(Wp.length, Ap), this.frames = new Sp(yp.length, Ap), this.cameraSets = new Sp(Ip.e, 256), this.changes = new Sp(wp.length, 256)
-       }
+ 
+     function uQ(QQ) {
+       QQ !== VQ && (VQ = QQ, QQ || eQ())
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L84-L95` → after: `L99-L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L99-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/91.js#L99-L248) · [Before (L84-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/91.js#L84-L95)

```diff
-     const Hp = new class {
-       constructor() {
-         this.rings = null, this.sample = new Float64Array(Wp.length), this.startedClient = null, this.startedAtMs = 0
-       }
-       get client() {
-         return this.startedClient
-       }
-       start(pp, ip) {
-         this.startedClient = pp, this.startedAtMs = performance.now(), null !== this.rings ? this.change(vp(pp)) : ip && this.allocate()
-       }
-       lockGained() {
-         this.allocate(), this.change(Dp.lockGained)
+ 
+     function LQ() {
+       JQ = !1, IQ || !0 !== tQ() || (IQ = !0, clearTimeout(PQ), PQ = setTimeout(fQ, jQ))
+     }
+ 
+     function kQ() {
+       return (!JQ || performance.now() - yQ > BQ) && (JQ = (0, FQ.H)().lockPointer(), yQ = performance.now()), JQ
+     }
+ 
+     function fQ() {
+       SQ() && oQ() && kQ()
+     }
+ 
+     function SQ() {
+       return hQ() && !gQ && !VQ && !(0, wQ.l)()
+     }
+ ... (134 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L97-L98` → after: `L250-L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L250-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/91.js#L250-L256) · [Before (L97-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/91.js#L97-L98)

```diff
-       allocate() {
-         null === this.rings && (this.rings = new tp, null !== this.startedClient && this.changeAt(this.startedAtMs, vp(this.startedClient), 1))
+     }
+ 
+     function DQ(QQ, WQ) {
+       for (const wQ of FQ) try {
+         wQ(QQ)
+       } catch (XQ) {
+         WQ(XQ)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L100-L102` → after: `L258-L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L258-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/91.js#L258-L262) · [Before (L100-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/91.js#L100-L102)

```diff
-       step(pp, ip) {
-         var cp;
-         pp[ip + 6] !== Lp.Hw && (null === (cp = this.rings) || void 0 === cp || cp.steps.push(pp, ip))
+     }
+ 
+     function pQ(QQ) {
+       return PQ.add(QQ), () => {
+         PQ.delete(QQ)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L104-L106` → after: `L264-L272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L264-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/91.js#L264-L272) · [Before (L104-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/91.js#L104-L106)

```diff
-       cameraSet(pp, ip) {
-         var cp;
-         null === (cp = this.rings) || void 0 === cp || cp.cameraSets.push(pp, ip)
+     }
+ 
+     function GQ(QQ, WQ) {
+       const XQ = gQ < 0 ? 0 : QQ - gQ;
+       gQ = QQ;
+       for (const qQ of PQ) try {
+         qQ(XQ)
+       } catch (wQ) {
+         WQ(wQ)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L108-L112` → after: `L274-L278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L274-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/91.js#L274-L278) · [Before (L108-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/91.js#L108-L112)

```diff
-       mouseMove(pp, ip) {
-         const cp = this.rings;
-         if (null === cp) return;
-         const Op = this.sample;
-         Op[0] = pp.timeStamp, Op[1] = performance.now(), Op[2] = pp.movementX, Op[3] = pp.movementY, Op[4] = ip ? 1 : 0, cp.events.push(Op)
+     }
+ 
+     function UQ(QQ) {
+       return JQ.add(QQ), () => {
+         JQ.delete(QQ)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L114-L118` → after: `L280-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L280-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/91.js#L280-L284) · [Before (L114-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/91.js#L114-L118)

```diff
-       frame(pp, ip, cp, Op) {
-         const op = this.rings;
-         if (null === op || Op === Yp.none) return;
-         const Ip = this.sample;
-         Ip[0] = performance.now(), Ip[1] = pp, Ip[2] = ip, Ip[3] = cp, Ip[4] = Op, op.frames.push(Ip)
+     }
+ 
+     function bQ(QQ) {
+       return rQ.add(QQ), () => {
+         rQ.delete(QQ)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L120-L122` → after: `L286-L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L286-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/91.js#L286-L300) · [Before (L120-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/91.js#L120-L122)

```diff
-       change(pp) {
-         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-         this.changeAt(performance.now(), pp, ip)
+     }
+     let vQ = 0;
+ 
+     function dQ(QQ) {
+       vQ += QQ
+     }
+ 
+     function HQ() {
+       const QQ = vQ;
+       return vQ = 0, QQ
+     }
+ 
+     function aQ(QQ) {
+       return BQ.add(QQ), () => {
+         BQ.delete(QQ)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L124-L128` → after: `L302-L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L302-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/91.js#L302-L306) · [Before (L124-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/91.js#L124-L128)

```diff
-       changeAt(pp, ip, cp) {
-         const Op = this.rings;
-         if (null === Op) return;
-         const op = this.sample;
-         op[0] = pp, op[1] = ip, op[2] = cp, Op.changes.push(op)
+     }
+ 
+     function lQ(QQ) {
+       return yQ.add(QQ), () => {
+         yQ.delete(QQ)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L130-L133` → after: `L308-L336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L308-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/91.js#L308-L336) · [Before (L130-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/91.js#L130-L133)

```diff
-       dumpText() {
-         var pp, ip;
-         const cp = this.rings;
-         return [`look records (${this.startedClient}): ${Pp.join(",")}`, ...null !== (pp = null === cp || void 0 === cp ? void 0 : cp.steps.lines()) && void 0 !== pp ? pp : [], `mousemove events: ${Wp.join(",")}`, ...null !== (ip = null === cp || void 0 === cp ? void 0 : cp.event … [truncated]
+     }
+ 
+     function hQ() {
+       IQ = 0, jQ = 0, gQ = -1
+     }
+ 
+     function iQ(QQ, WQ) {
+       if ("paced" === QQ) return jQ += WQ, null;
+       if ("drawn" !== QQ && "skipped" !== QQ) return null;
+       const XQ = WQ + jQ;
+       return jQ = 0, XQ
+     }
+ 
+     function cQ(QQ, WQ, XQ, qQ) {
+       const TQ = (0, wQ.f)(WQ),
+         zQ = QQ > 0 ? performance.now() : 0;
+ ... (13 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L135-L172` → after: `L338-L344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L338-L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/91.js#L338-L344) · [Before (L135-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/91.js#L135-L172)

```diff
-       toJson(pp, ip) {
-         var cp;
-         const op = pp - 6e4,
-           Ip = this.rings,
-           Sp = function(pp, ip) {
-             var cp;
-             let Op = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-             const Ip = null !== (cp = null === pp || void 0 === pp ? void 0 : pp.rows(Op, op)) && void 0 !== cp ? cp : [];
-             return {
-               columns: ip,
-               fromMs: 0 === Ip.length ? null : Ip[0][Op],
-               rows: Ip
-             }
-           };
-         return {
-           version: Op.c,
- ... (22 more removed lines; see GitHub link above)
+       if ("drawn" === WQ) {
+         const QQ = IQ;
+         IQ = 0;
+         for (const WQ of rQ) try {
+           WQ(QQ)
+         } catch (sQ) {
+           qQ(sQ)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L175-L179` → after: `L347-L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L347-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/91.js#L347-L350) · [Before (L175-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/91.js#L175-L179)

```diff
-       save(pp) {
-         const ip = JSON.stringify(this.toJson(performance.now(), pp));
-         (0, op.c)(new Blob([ip], {
-           type: "application/json"
-         }), `bloxd-mouse-look-${(new Date).toISOString().replace(/[:.]/g,"-")}.json`)
+       for (const wQ of yQ) try {
+         wQ(QQ, TQ)
+       } catch (sQ) {
+         qQ(sQ)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L183-L189` → after: `L354-L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L354-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/91.js#L354-L373) · [Before (L183-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/91.js#L183-L189)

```diff
-   36582: (pp, ip, cp) => {
-     cp.r(ip), cp.d(ip, {
-       LOOK_DEBUG_HEADER: () => Dp,
-       endLookDebugTake: () => vp,
-       noteLookDroppedCopy: () => tp,
-       saveLookCapture: () => Hp,
-       startLookDebug: () => wp
+   41106: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       e: () => wQ
+     });
+     const wQ = {
+       stop: () => wQ,
+       fade: () => wQ,
+       rate: () => wQ,
+       getVolume: () => 0,
+       getRelativeVolume: () => 0,
+       setRelativeVolume: () => wQ,
+       setPannerAttr: () => wQ,
+       setPosition: () => wQ
+     }
+   },
+   5146: (QQ, WQ, XQ) => {
+ ... (4 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L191-L197` → after: `L375-L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L375-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/91.js#L375-L376) · [Before (L191-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/91.js#L191-L197)

```diff
-     var Op = cp(4911),
-       op = cp(2908),
-       Ip = cp(1927);
-     const Sp = new Map(Object.entries(Op.h).map((pp => {
-       let [ip, cp] = pp;
-       return [cp, ip]
-     })));
+     var wQ = XQ(2506),
+       qQ = XQ(5148);
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L200` → after: `L379-L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L379-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/91.js#L379-L383) · [Before (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/91.js#L200)

```diff
-       return (0, Ip.C)(pp).toFixed(1)
+       let {
+         action: WQ,
+         flags: XQ
+       } = QQ;
+       return "mid-fire" === WQ && 0 !== (XQ & wQ.e.AltLeftClick)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L203-L204` → after: `L387-L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L387-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/91.js#L387-L390) · [Before (L203-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/91.js#L203-L204)

```diff
-     function Lp(pp, ip) {
-       return `camera set by ${Sp.get(pp[ip+1])}: heading ${`${xp(pp[ip+2])} -> ${xp(pp[ip+4])}`} deg, pitch ${`${xp(pp[ip+3])} -> ${xp(pp[ip+5])}`} deg, at ${pp[ip].toFixed(1)} ms`
+     function sQ(QQ) {
+       return zQ.add(QQ), () => {
+         zQ.delete(QQ)
+       }
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L210` → after: `L394-L403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L394-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/91.js#L394-L403) · [Before (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/91.js#L210)

```diff
-       return Number.isFinite(pp) ? String(Math.round(10 * pp) / 10) : String(pp)
+       const WQ = qQ.b[255 & QQ];
+       if (void 0 === WQ) return;
+       const XQ = QQ >>> 8 & 255,
+         TQ = {
+           action: WQ,
+           down: 0 !== (XQ & wQ.e.Down),
+           flags: XQ,
+           press: QQ >>> 16
+         };
+       for (const wQ of zQ) wQ(TQ)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L214-L224` → after: `L697-L701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L697-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/91.js#L697-L701) · [Before (L214-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/91.js#L214-L224)

```diff
-       return Number.isFinite(pp) ? pp.toFixed(1) : String(pp)
-     }
-     class Wp {
-       constructor() {
-         this.frames = 0, this.looked = 0, this.idle = 0, this.FX = 0, this.pastLimit = 0, this.lockSkips = 0, this.Hw = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakR … [truncated]
-       }
-       moved() {
-         return this.events > 0 || 0 !== this.raw[0] || 0 !== this.raw[1] || this.lockSkips > 0 || this.FX > 0 || this.dropped > 0 || this.cameraSets > 0
-       }
-       hasEvent() {
-         return this.FX > 0 || this.pastLimit > 0 || this.bigEvents > 0 || this.dropped > 0 || this.cameraSets > 0
+       zQ = !0;
+       try {
+         QQ()
+       } finally {
+         zQ = !1
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L227-L285` → after: `L704-L719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L704-L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/91.js#L704-L719) · [Before (L227-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/91.js#L227-L285)

```diff
-     class yp {
-       constructor() {
-         var pp = this;
-         this.topicOn = (0, op.r)("look"), this.remote = (0, op.v)(), this.tally = new Wp, this.takes = null, this.started = !1, this.record = function(ip) {
-           let cp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-           if (Yp.l.step(ip, cp), !pp.topicOn) return;
-           const Op = ip[cp],
-             op = ip[cp + 1],
-             Ip = ip[cp + 2],
-             Sp = ip[cp + 3],
-             xp = ip[cp + 4],
-             Lp = ip[cp + 5],
-             Dp = ip[cp + 6],
-             Wp = ip[cp + 7],
-             yp = ip[cp + 8],
-             Up = ip[cp + 9],
- ... (43 more removed lines; see GitHub link above)
+ 
+     function PQ(QQ, WQ) {
+       if (zQ) return !1;
+       switch (QQ) {
+         case wQ.G.MouseDown:
+         case wQ.G.MouseUp:
+         case wQ.G.TouchStart:
+         case wQ.G.TouchEnd:
+         case wQ.G.TouchCancel:
+         case wQ.G.TouchButton:
+           return !0;
+         case wQ.G.KeyDown:
+         case wQ.G.KeyUp:
+           return 0 === (WQ & qQ.g.Repeat) && !(0, TQ.f)(document.activeElement);
+         default:
+           return !1
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L287-L294` → after: `L721-L758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L721-L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/91.js#L721-L758) · [Before (L287-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/91.js#L287-L294)

```diff
-       start(pp, ip) {
-         if (Yp.l.start(pp, null !== document.pointerLockElement), this.takes = ip, this.topicOn) {
-           const {
-             screen: ip
-           } = window;
-           (0, op.n)("look", `start: ${pp} client, dpr ${window.devicePixelRatio}, screen ${ip.width}x${ip.height}, pointer lock ${document.pointerLockElement?"sx":"free"}`)
-         }
-         this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
+     }
+ 
+     function gQ(QQ) {
+       sQ || (sQ = !0, queueMicrotask((() => {
+         sQ = !1, QQ()
+       })))
+     }
+   },
+   5153: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       b: () => sQ,
+       f: () => zQ,
+       i: () => PQ
+     });
+     var wQ = XQ(2506),
+       qQ = XQ(2510);
+ ... (22 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L297` → after: `L761-L763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L761-L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/91.js#L761-L763) · [Before (L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/91.js#L297)

```diff
-         }), window.addEventListener("focus", this.onFocus), window.addEventListener("blur", this.onBlur), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychang … [truncated]
+         };
+       return document.addEventListener("focusin", qQ, FQ), document.addEventListener("focusout", TQ, FQ), document.addEventListener("keydown", sQ, FQ), XQ(document.activeElement), () => {
+         document.removeEventListener("focusin", qQ, FQ), document.removeEventListener("focusout", TQ, FQ), document.removeEventListener("keydown", sQ, FQ)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L299-L327` → after: `L765-L855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L765-L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/91.js#L765-L855) · [Before (L299-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/91.js#L299-L327)

```diff
-       outlier(pp) {
-         const ip = this.tally;
-         ip.outliers >= 20 ? ip.suppressed++ : (ip.outliers++, (0, op.n)("look", pp))
-       }
-       eventOutlier(pp) {
-         const ip = this.tally;
-         ip.eventLines >= 10 ? ip.suppressed++ : (ip.eventLines++, (0, op.n)("look", pp))
-       }
-       takeRecords() {
-         if (null === this.takes) return;
-         const pp = this.takes.look();
-         if (pp.length >= Dp) {
-           this.counted(Yp.b.stepsLost, pp[0]), this.counted(Yp.b.droppedCopies, pp[1]);
-           for (let ip = Dp; ip + Yp.c <= pp.length; ip += Yp.c) this.record(pp, ip)
-         }
-         const ip = this.takes.cameraSets();
- ... (13 more removed lines; see GitHub link above)
+     }
+     const FQ = new Map;
+ 
+     function PQ(QQ, WQ) {
+       var XQ;
+       let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
+       FQ.set(wQ, (null !== (XQ = FQ.get(wQ)) && void 0 !== XQ ? XQ : 0) & ~QQ | WQ & QQ);
+       let TQ = 0;
+       for (const qQ of FQ.values()) TQ |= qQ;
+       return (0, qQ.C)(QQ, TQ & QQ)
+     }
+   },
+   41170: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       e: () => gQ,
+       g: () => FQ,
+ ... (75 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L329-L330` → after: `L857-L890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L857-L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/91.js#L857-L890) · [Before (L329-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/91.js#L329-L330)

```diff
-       endTake() {
-         this.takeRecords(), this.takes = null
+       return IQ
+     }
+ 
+     function pQ(QQ) {
+       const WQ = (0, zQ.m)(),
+         [XQ, wQ] = DQ().size(WQ);
+       return (0, zQ.g)(XQ, wQ, WQ, QQ.n)
+     }
+ 
+     function GQ(QQ) {
+       var WQ, XQ, wQ, qQ;
+       const TQ = (0, zQ.m)(),
+         [FQ, PQ] = DQ().size(TQ);
+       if (FQ <= 0 || PQ <= 0) return null;
+       const gQ = (0, zQ.g)(FQ, PQ, TQ, rQ().n);
+       return (0, zQ.c)(QQ, gQ), QQ.style.left = `${null!==(WQ=null===(XQ=yQ)||void 0===XQ?void 0:XQ.rect.left)&&void 0!==WQ?WQ:0}px`, QQ.style.top = `${null!==(wQ=null===(qQ=yQ)||void 0===qQ?void 0:qQ.rect.top)&&void 0!==wQ?wQ:0}px`, (0, sQ.L)(QQ.style, yQ), gQ
+ ... (18 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L336-L337` → after: `L903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/91.js#L903) · [Before (L336-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/91.js#L336-L337)

```diff
-       let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
-       return Up ??= new yp, Up.start(pp, ip), Up.record
+       wQ = QQ
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L340-L342` → after: `L906-L907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L906-L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/91.js#L906-L907) · [Before (L340-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/91.js#L340-L342)

```diff
-     function vp() {
-       var pp;
-       null === (pp = Up) || void 0 === pp || pp.endTake()
+     function TQ(QQ) {
+       wQ === QQ && (wQ = null)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L347` → after: `L912-L928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L912-L928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/91.js#L912-L928) · [Before (L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/91.js#L347)

```diff
-       null === (pp = Up) || void 0 === pp || pp.droppedCopy()
+       null === (QQ = wQ) || void 0 === QQ || QQ()
+     }
+   },
+   41164: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       e: () => qQ,
+       g: () => PQ,
+       i: () => TQ,
+       j: () => JQ,
+       l: () => gQ,
+       p: () => rQ
+     });
+     var wQ = XQ(3110);
+     class qQ extends Error {
+       constructor(QQ, WQ, XQ) {
+         super(`${"fetch"===QQ?"fetching":"decoding"} ${WQ} failed`, XQ), this.stage = QQ, this.source = WQ, this.name = "ShellImageError"
+ ... (1 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L351-L359` → after: `L981-L983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L981-L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/91.js#L981-L983) · [Before (L351-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/91.js#L351-L359)

```diff
-       null === (ip = Up) || void 0 === ip || ip.takeRecords();
-       const {
-         clientHintsRead: Op,
-         debugDeviceLines: op
-       } = await cp.e(29).then((() => cp(34291)));
-       await Op, Yp.l.save({
-         ...pp,
-         device: op()
-       })
+       const XQ = sQ.get(QQ);
+       if (XQ) return XQ.close(), void sQ.delete(QQ);
+       null === (WQ = zQ) || void 0 === WQ || WQ.BwQ(QQ)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L362` → after: `L986-L990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L986-L990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/91.js#L986-L990) · [Before (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/91.js#L362)

```diff
-   4911: (pp, ip, cp) => {
+   41114: (QQ, WQ, XQ) => {
+     function wQ(QQ, WQ) {
+       if (!Object.prototype.hasOwnProperty.call(QQ, WQ)) throw new TypeError("attempted to use private field on non-instance");
+       return QQ
+     }
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L364-L411` → after: `L992-L997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L992-L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/91.js#L992-L997) · [Before (L364-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/91.js#L364-L411)

```diff
-       A: () => Vp,
-       Bb: () => Cp,
-       C: () => Ap,
-       Fb: () => Mp,
-       G: () => Pp,
-       Hb: () => Tp,
-       I: () => Dp,
-       Kb: () => gp,
-       L: () => Yp,
-       M: () => ep,
-       Mb: () => bp,
-       O: () => Lp,
-       Ob: () => ap,
-       Q: () => Up,
-       Rb: () => np,
-       S: () => yp,
- ... (32 more removed lines; see GitHub link above)
+       d: () => wQ
+     })
+   },
+   41122: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       b: () => qQ
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/91.js` (Changed code · before: `L413-L936` → after: `L999-L1003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78dR999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-868d74837558339b7311edc49baf3898f3a05042d04868abb6c0a64875efe78d) · [After (L999-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/91.js#L999-L1003) · [Before (L413-L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/91.js#L413-L936)

```diff
-     const Op = 32,
-       op = 33.333333333333336,
-       Ip = {
-         AbiVersion: 0,
-         Status: 1,
-         LastError: 2,
-         ErrorCount: 3,
-         FrameIndex: 4,
-         TicksRun: 5,
-         TicksDropped: 6,
-         Alpha: 7,
-         NetOutPtr: 8,
-         NetOutLen: 9,
-         WorkerOutPtr: 10,
-         WorkerOutLen: 11,
-         EventsPtr: 12,
- ... (508 more removed lines; see GitHub link above)
+     var wQ = 0;
+ 
+     function qQ(QQ) {
+       return "__private_" + wQ++ + "_" + QQ
+     }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/92.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/92.js` (40 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc)

#### 1. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/92.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/92.js#L2)

```diff
- export const ids = [92, 398];
+ export const ids = [92];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L4-L46` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/92.js#L4) · [Before (L4-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/92.js#L4-L46)

```diff
-   41726: (pp, ip, cp) => {
-     async function Op(pp, ip) {
-       const [{
-         clientSideServerUrls: Op
-       }, {
-         postJsonWithMetricsCookiesAndJsonResponse: op
-       }, {
-         gameBridge: Ip
-       }] = await Promise.all([Promise.resolve().then((() => cp(1211))), Promise.resolve().then((() => cp(1149))), Promise.resolve().then((() => cp(1956)))]), Sp = Ip.latest("connectedGame").websocketUrl;
-       if (!Sp) throw new Error("AI Helper: not connected to a game server");
-       const xp = `${Op.getHttpUrlFromWebSocketUrl(Sp)}${pp}`;
-       return await op(xp, ip, {
-         retries: 0
-       })
-     }
-     cp.r(ip), cp.d(ip, {
- ... (27 more removed lines; see GitHub link above)
+   40781: (QQ, WQ, XQ) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L48-L49` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/92.js#L6) · [Before (L48-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/92.js#L48-L49)

```diff
-       WorldCodeAiPanel: () => qP,
-       default: () => MP
+       startWasmPadGameplay: () => kQ
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L51-L74` → after: `L8-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L8-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/92.js#L8-L63) · [Before (L51-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/92.js#L51-L74)

```diff
-     var Op = cp(62),
-       op = cp(1049),
-       Ip = cp.n(op),
-       Sp = cp(1112);
- 
-     function xp(pp) {
-       let {
-         title: ip,
-         children: cp,
-         isCalm: op = !1,
-         isElsewhere: xp = !1,
-         defaultOpen: Lp = !1,
-         isOpen: Yp,
-         onToggle: Dp,
-         className: Ap
-       } = pp;
- ... (8 more removed lines; see GitHub link above)
+     XQ(40787);
+     var wQ = XQ(40790),
+       qQ = XQ(40802),
+       TQ = XQ(2036),
+       zQ = XQ(40813),
+       sQ = XQ(5140),
+       FQ = XQ(5118),
+       PQ = XQ(40822),
+       gQ = XQ(40829),
+       JQ = XQ(5148),
+       rQ = XQ(40889),
+       IQ = XQ(2510),
+       jQ = XQ(9220),
+       BQ = XQ(40796),
+       yQ = XQ(9189),
+       VQ = XQ(39373);
+ ... (40 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L76-L150` → after: `L65-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L65-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/92.js#L65-L66) · [Before (L76-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/92.js#L76-L150)

```diff
-           children: [(0, Sp.jsx)("span", {
-             className: "WorldCodeAiLogChevron",
-             "aria-hidden": "true",
-             children: yp ? "\u25be" : "\u25b8"
-           }), ip]
-         }), yp && (0, Sp.jsx)("div", {
-           className: "WorldCodeAiLogBody",
-           children: cp
-         })]
-       })
-     }
-     var Lp = cp(1956),
-       Yp = cp(6637),
-       Dp = cp(1480),
-       Ap = cp(37092),
-       Pp = cp(1060),
- ... (59 more removed lines; see GitHub link above)
+           qQ = () => {
+             XQ = !1, WQ.reset(), wQ(0, 0)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L183-L185` → after: `L69-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L69-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/92.js#L69-L77) · [Before (L183-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/92.js#L183-L185)

```diff
-           from: Sp.from,
-           to: Sp.to,
-           isLoose: !Sp.isOnly || Op
+           update: (qQ, TQ, FQ) => {
+             XQ || (QQ.discardPending(), XQ = !0);
+             const PQ = (0, BQ.p)(WQ, qQ, TQ, FQ, performance.now());
+             wQ(PQ.yawRadPerSec, PQ.pitchRadPerSec);
+             const gQ = QQ.drainLookDelta();
+             0 === gQ.jR && 0 === gQ.yR || (0, IQ.u)(sQ.G.PadLook, zQ.Zd.Gyro, gQ.jR, gQ.yR, 0)
+           },
+           release: qQ,
+           uninstall: qQ
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L187-L191` → after: `L79-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L79-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/92.js#L79-L124) · [Before (L187-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/92.js#L187-L191)

```diff
-       }
-       const xp = pp.indexOf(ip);
-       if (-1 !== xp) {
-         var Lp, Yp, Dp;
-         const cp = /\w/.test(ip[0]) && /\w/.test(null !== (Lp = pp[xp - 1]) && void 0 !== Lp ? Lp : "") || /\w/.test(null !== (Yp = ip.at(-1)) && void 0 !== Yp ? Yp : "") && /\w/.test(null !== (Dp = pp[xp + ip.length]) && void 0 !== Dp ? Dp : "");
+       },
+       uQ = () => {
+         const QQ = AQ();
+         return null !== QQ && 0 !== (RQ(QQ) & zQ.ae.PadSneakToggled)
+       },
+       LQ = () => {
+         const QQ = (QQ => {
+           const WQ = QQ => function() {
+             return (0, rQ.e)(), QQ(...arguments)
+           };
+           return {
+             primaryFireDown: WQ((QQ => (lQ(pQ, zQ.Td.Down | (QQ ? zQ.Td.Repeat : 0)), 0))),
+             primaryFireUp: WQ((() => {
+               iQ(pQ)
+             })),
+             altFireDown: WQ((() => (hQ(GQ), 0))),
+ ... (30 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L193-L195` → after: `L126-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L126-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/92.js#L126-L207) · [Before (L193-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/92.js#L193-L195)

```diff
-           from: xp,
-           to: xp + ip.length,
-           isLoose: cp || -1 !== pp.indexOf(ip, xp + 1)
+           bodies: () => QQ,
+           look: CQ(),
+           move: (QQ, XQ) => {
+             var qQ;
+             wQ();
+             const {
+               bits: TQ,
+               flips: sQ
+             } = (QQ => {
+               if (null === QQ) return {
+                 bits: zQ.Xd.Peek,
+                 flips: 0
+               };
+               const WQ = QQ.sneakHeld ? zQ.Xd.SneakHeld : 0;
+               return "hold" === QQ.mode ? {
+                 bits: WQ | zQ.Xd.SneakHoldMode,
+ ... (66 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L198-L205` → after: `L210-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L210-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/92.js#L210-L235) · [Before (L198-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/92.js#L198-L205)

```diff
-       const Ap = ip.split("\n").map(Mp).filter(Boolean),
-         Pp = Cp(cp.filter((pp => "" !== Mp(pp.text))), Ap, Mp);
-       return null === Pp ? null : {
-         from: Pp.from,
-         to: Pp.to,
-         isLoose: !0
-       }
-     }
+   },
+   5118: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       B: () => DQ,
+       F: () => zQ,
+       H: () => sQ,
+       I: () => HQ,
+       d: () => dQ,
+       e: () => GQ,
+       g: () => cQ,
+       h: () => iQ,
+       k: () => VQ,
+       o: () => bQ,
+       s: () => pQ,
+       t: () => UQ,
+       w: () => aQ,
+ ... (10 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L208-L209` → after: `L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/92.js#L238) · [Before (L208-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/92.js#L208-L209)

```diff
-       var ip, cp;
-       return null !== (ip = null === (cp = /^[ \t]*/.exec(pp)) || void 0 === cp ? void 0 : cp[0]) && void 0 !== ip ? ip : ""
+       TQ = null !== QQ && void 0 !== QQ ? QQ : qQ
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L212-L256` → after: `L241-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L241-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/92.js#L241-L242) · [Before (L212-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/92.js#L212-L256)

```diff
-     function lp(pp, ip, cp, Op) {
-       if (ip.from > 0 && "\n" !== pp[ip.from - 1]) return Op;
-       const op = pp.slice(ip.from, ip.to).split("\n").filter((pp => "" !== pp.trim())),
-         Ip = cp.split("\n").filter((pp => "" !== pp.trim()));
-       if (0 === op.length || 0 === Ip.length) return Op;
-       const Sp = Xp(op[0]),
-         xp = Xp(Ip[0]);
-       if (Sp === xp) return Op;
-       const Lp = Ip.length > 1 && Ip.length === op.length && Ip.slice(1).every(((pp, ip) => Xp(pp) === Xp(op[ip + 1]))),
-         Yp = Op.split("\n"),
-         Dp = Yp.findIndex((pp => "" !== pp.trim()));
-       if (-1 === Dp || Xp(Yp[Dp]) === Sp) return Op;
-       let Ap = !1;
-       return Yp.map(((pp, ip) => {
-         var cp, Op;
-         const op = Ap;
- ... (29 more removed lines; see GitHub link above)
+     function sQ() {
+       return TQ
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L260-L261` → after: `L255-L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L255-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/92.js#L255-L257) · [Before (L260-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/92.js#L260-L261)

```diff
-       var ip;
-       return null !== (ip = pp.split("\n").find((pp => "" !== pp.trim()))) && void 0 !== ip ? ip : ""
+       return FQ.add(QQ), () => {
+         FQ.delete(QQ)
+       }
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L265-L274` → after: `L261-L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L261-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/92.js#L261-L264) · [Before (L265-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/92.js#L265-L274)

```diff
-       const cp = new Map;
-       for (const Sp of pp) {
-         var Op;
-         cp.set(Sp, (null !== (Op = cp.get(Sp)) && void 0 !== Op ? Op : 0) + 1)
-       }
-       let op = 0;
-       for (const Sp of ip) {
-         var Ip;
-         const pp = null !== (Ip = cp.get(Sp)) && void 0 !== Ip ? Ip : 0;
-         pp > 0 && (cp.set(Sp, pp - 1), op++)
+       for (const wQ of FQ) try {
+         wQ(QQ)
+       } catch (XQ) {
+         WQ(XQ)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L280-L284` → after: `L269-L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L269-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/92.js#L269-L270) · [Before (L280-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/92.js#L280-L284)

```diff
-       return {
-         text: pp,
-         pieces: Array.from({
-           length: pp.length - 1
-         }, ((ip, cp) => pp.slice(cp, cp + 2)))
+       return PQ.add(QQ), () => {
+         PQ.delete(QQ)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L289-L310` → after: `L275-L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L275-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/92.js#L275-L280) · [Before (L289-L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/92.js#L289-L310)

```diff
-       const cp = ip.split("\n").map(Mp).filter(Boolean),
-         Op = qp(pp).filter((pp => "" !== Mp(pp.text)));
-       if (0 === cp.length || 0 === Op.length) return null;
-       const op = Math.min(cp.length, Op.length),
-         Ip = cp.map(Np),
-         Sp = Op.map((pp => Np(Mp(pp.text))));
-       let xp = null;
-       for (let Ap = 0; Ap + op <= Op.length; Ap++) {
-         let pp = 0;
-         for (let ip = 0; ip < op; ip++) pp += (Lp = Sp[Ap + ip], Yp = Ip[ip], Lp.text === Yp.text ? 1 : 0 === Lp.pieces.length || 0 === Yp.pieces.length ? 0 : 2 * Bp(Lp.pieces, Yp.pieces) / (Lp.pieces.length + Yp.pieces.length));
-         pp /= cp.length, (null === xp || pp > xp.score) && (xp = {
-           start: Ap,
-           score: pp
-         })
-       }
-       var Lp, Yp;
- ... (6 more removed lines; see GitHub link above)
+       const XQ = gQ < 0 ? 0 : QQ - gQ;
+       gQ = QQ;
+       for (const qQ of PQ) try {
+         qQ(XQ)
+       } catch (wQ) {
+         WQ(wQ)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L315` → after: `L285-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L285-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/92.js#L285-L287) · [Before (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/92.js#L315)

```diff
-       return Rp().isFunctionExpression(pp) || Rp().isArrowFunction(pp)
+       return JQ.add(QQ), () => {
+         JQ.delete(QQ)
+       }
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L319-L329` → after: `L291-L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L291-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/92.js#L291-L292) · [Before (L319-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/92.js#L319-L329)

```diff
-       return Rp().isExpressionStatement(pp) && Rp().isBinaryExpression(pp.expression) && Rp().isPropertyAccessExpression(pp.expression.left) && ! function(pp) {
-         return Rp().isIdentifier(pp) && ("globalThis" === pp.text || "window" === pp.text || "self" === pp.text)
-       }(pp.expression.left.expression)
-     }
- 
-     function hp(pp, ip, cp) {
-       let Op = cp;
-       for (const Ip of (null !== (op = Rp().getLeadingCommentRanges(pp, ip.getFullStart())) && void 0 !== op ? op : []).reverse()) {
-         var op;
-         if (/\n[^\S\n]*\n/.test(pp.slice(Ip.end, Op))) break;
-         Op = Ip.pos
+       return rQ.add(QQ), () => {
+         rQ.delete(QQ)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L335-L339` → after: `L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/92.js#L298) · [Before (L335-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/92.js#L335-L339)

```diff
-       var ip;
-       const {
-         parseDiagnostics: cp
-       } = pp;
-       return (null !== (ip = null === cp || void 0 === cp ? void 0 : cp.length) && void 0 !== ip ? ip : 0) > 0
+       vQ += QQ
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L342-L378` → after: `L301-L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L301-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/92.js#L301-L303) · [Before (L342-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/92.js#L342-L378)

```diff
-     function np(pp) {
-       const ip = Rp().createSourceFile("worldCode.js", pp, Rp().ScriptTarget.Latest, !1, Rp().ScriptKind.JS),
-         cp = [],
-         Op = (op, Ip) => {
-           const Sp = function(pp) {
-             var ip, cp;
-             if (Rp().isFunctionDeclaration(pp)) return null !== (ip = null === (cp = pp.name) || void 0 === cp ? void 0 : cp.text) && void 0 !== ip ? ip : null;
-             if (Rp().isVariableStatement(pp) && 1 === pp.declarationList.declarations.length) {
-               const ip = pp.declarationList.declarations[0];
-               return Rp().isIdentifier(ip.name) && ip.initializer && fp(ip.initializer) ? ip.name.text : null
-             }
-             if (Rp().isExpressionStatement(pp) && Rp().isBinaryExpression(pp.expression) && pp.expression.operatorToken.kind === Rp().SyntaxKind.EqualsToken && fp(pp.expression.right)) {
-               const ip = pp.expression.left;
-               return Rp().isIdentifier(ip) ? ip.text : Rp().isPropertyAccessExpression(ip) ? ip.name.text : null
-             }
-             return null
- ... (21 more removed lines; see GitHub link above)
+     function HQ() {
+       const QQ = vQ;
+       return vQ = 0, QQ
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L382` → after: `L307-L309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L307-L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/92.js#L307-L309) · [Before (L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/92.js#L382)

```diff
-       return np(pp).functions
+       return BQ.add(QQ), () => {
+         BQ.delete(QQ)
+       }
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L386` → after: `L313-L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L313-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/92.js#L313-L315) · [Before (L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/92.js#L386)

```diff
-       return pp.trim().replace(/^(?:callback:|function\s+)/, "").replace(/\s*\(.*$/s, "").trim()
+       return yQ.add(QQ), () => {
+         yQ.delete(QQ)
+       }
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L389-L394` → after: `L318-L319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L318-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/92.js#L318-L319) · [Before (L389-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/92.js#L389-L394)

```diff
-     function Gp(pp, ip) {
-       var cp;
-       const Op = pp.filter((pp => pp.name === ip)),
-         op = Op.filter((pp => !pp.isProperty)),
-         Ip = op.length > 0 ? op : Op;
-       return null !== (cp = Ip.find((pp => pp.topLevel))) && void 0 !== cp ? cp : Ip[0]
+     function hQ() {
+       IQ = 0, jQ = 0, gQ = -1
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L398-L417` → after: `L323-L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L323-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/92.js#L323-L326) · [Before (L398-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/92.js#L398-L417)

```diff
-       return "" === pp.trim() ? `${ip.trim()}\n` : `${pp.replace(/\s*$/,"")}\n\n${ip.trim()}\n`
-     }
- 
-     function Zp(pp, ip, cp) {
-       const Op = np(pp),
-         op = Fp(cp),
-         Ip = sp(Op.functions, ip, op);
-       return Ip ? Kp(pp, Op, Ip, op, cp) : rp(pp, cp)
-     }
- 
-     function zp(pp, ip, cp) {
-       return void 0 !== sp(Fp(pp), ip, Fp(cp))
-     }
- 
-     function sp(pp, ip, cp) {
-       var Op, op;
- ... (4 more removed lines; see GitHub link above)
+       if ("paced" === QQ) return jQ += WQ, null;
+       if ("drawn" !== QQ && "skipped" !== QQ) return null;
+       const XQ = WQ + jQ;
+       return jQ = 0, XQ
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L420-L428` → after: `L329-L359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L329-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/92.js#L329-L359) · [Before (L420-L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/92.js#L420-L428)

```diff
-     function Kp(pp, ip, cp, Op, op) {
-       let {
-         functions: Ip,
-         hasErrors: Sp
-       } = ip;
-       const xp = Ip.some((pp => pp.from > cp.from && pp.to <= cp.to && !Op.some((ip => ip.name === pp.name))));
-       if (Sp && xp) return null;
-       const Lp = /^\s*(?:\/\/|\/\*)/.test(op) ? cp.commentFrom : cp.from;
-       return pp.slice(0, Lp) + Qp(pp.slice(Lp, cp.to), op.trim(), Jp(pp.slice(cp.to))) + pp.slice(cp.to)
+     function cQ(QQ, WQ, XQ, qQ) {
+       const TQ = (0, wQ.f)(WQ),
+         zQ = QQ > 0 ? performance.now() : 0;
+       for (let wQ = 0; wQ < QQ; wQ++)
+         for (const QQ of BQ) try {
+           QQ()
+         } catch (sQ) {
+           qQ(sQ)
+         }
+       if (QQ > 0 && dQ(performance.now() - zQ), null !== XQ) {
+         for (const QQ of JQ) try {
+           QQ(XQ)
+         } catch (sQ) {
+           qQ(sQ)
+         }
+         IQ += XQ
+ ... (15 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L431-L452` → after: `L648-L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L648-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/92.js#L648-L649) · [Before (L431-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/92.js#L431-L452)

```diff
-     function Vp(pp, ip, cp, Op, op) {
-       const Ip = Op.trim();
-       if (Ip.includes("\n") || !Ip.endsWith("{")) return null;
-       const Sp = np(pp),
-         xp = Sp.functions.find((Op => Op.topLevel && ii(pp, Op.from) <= ip && cp < Op.to && !pp.slice(Op.from, cp).includes("\n"))),
-         Lp = np(op),
-         Yp = Lp.functions.filter((pp => pp.topLevel)),
-         Dp = !Lp.hasErrors && (1 === Yp.length || Yp.some((pp => pp.name === (null === xp || void 0 === xp ? void 0 : xp.name)))),
-         Ap = 1 === Yp.length && Yp[0].name !== (null === xp || void 0 === xp ? void 0 : xp.name) ? Yp[0].name : void 0,
-         Pp = void 0 === Ap ? void 0 : Sp.functions.find((pp => pp.topLevel && pp.name === Ap));
-       return xp && Dp ? Kp(pp, Sp, null !== Pp && void 0 !== Pp ? Pp : xp, Lp.functions, op) : function(pp, ip, cp, Op, op) {
-         const Ip = Rp().createSourceFile("worldCode.js", pp, Rp().ScriptTarget.Latest, !0, Rp().ScriptKind.JS),
-           Sp = Ip.statements.find((Op => {
-             const op = Op.getStart(Ip);
-             return ii(pp, op) <= ip && cp < Op.getEnd() && !pp.slice(op, cp).includes("\n")
-           })),
- ... (6 more removed lines; see GitHub link above)
+     function qQ(QQ) {
+       wQ = QQ
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L455-L458` → after: `L652-L653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L652-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/92.js#L652-L653) · [Before (L455-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/92.js#L455-L458)

```diff
-     function ii(pp, ip) {
-       let cp = ip;
-       for (; cp > 0 && (" " === pp[cp - 1] || "\t" === pp[cp - 1]);) cp--;
-       return 0 === cp || "\n" === pp[cp - 1] ? cp : ip
+     function TQ(QQ) {
+       wQ === QQ && (wQ = null)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L461-L465` → after: `L656-L658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L656-L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/92.js#L656-L658) · [Before (L461-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/92.js#L461-L465)

```diff
-     function ci(pp, ip, cp) {
-       const Op = ip.trim().toLowerCase();
-       if ("" !== pp.trim() && ("top" === Op || "start" === Op)) return `${cp.trim()}\n\n${pp.replace(/^\s+/,"")}`;
-       const op = "end" === Op ? void 0 : Gp(Fp(pp), gp(ip));
-       return op ? `${pp.slice(0,op.to)}\n\n${cp.trim()}${pp.slice(op.to)}` : rp(pp, cp)
+     function zQ() {
+       var QQ;
+       null === (QQ = wQ) || void 0 === QQ || QQ()
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L469` → after: `L672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/92.js#L672) · [Before (L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/92.js#L469)

```diff
-       return [...new Set(Fp(pp).filter((pp => pp.topLevel)).map((pp => pp.name)))]
+       return QQ instanceof HTMLElement && (!!(QQ.isContentEditable || QQ instanceof HTMLTextAreaElement || QQ instanceof HTMLSelectElement) || QQ instanceof HTMLInputElement && !TQ.has(QQ.type))
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L475-L479` → after: `L676-L695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L676-L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/92.js#L676-L695) · [Before (L475-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/92.js#L475-L479)

```diff
-       let ip = pp.replace(/\s+/g, " ").trim();
-       if ("" === ip || Ii.test(ip)) return null;
-       if (ip.length > oi) {
-         const pp = ip.slice(0, oi);
-         ip = `${pp.slice(0,Math.max(pp.lastIndexOf(" "),60)).trimEnd()}\u2026`
+       let WQ = null;
+       const XQ = XQ => {
+           const qQ = zQ(XQ);
+           qQ !== WQ && (WQ = qQ, QQ(wQ.j.UiCapture, wQ.x.Keyboard, 0, 0, qQ ? wQ.x.Keyboard : 0))
+         },
+         qQ = QQ => {
+           XQ(QQ.target)
+         },
+         TQ = QQ => {
+           XQ(QQ.relatedTarget)
+         },
+         sQ = () => {
+           XQ(document.activeElement)
+         },
+         FQ = {
+           capture: !0,
+ ... (4 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L492-L567` → after: `L701-L706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L701-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/92.js#L701-L706) · [Before (L492-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/92.js#L492-L567)

```diff
-       const cp = new Set,
-         Op = new Set,
-         op = new Set,
-         Ip = Object.values(pp).map((pp => {
-           const ip = Fp(pp),
-             cp = ip.filter((pp => "playerCommand" === pp.name)).map((ip => pp.slice(ip.from, ip.to)));
-           return {
-             text: pp,
-             found: ip,
-             own: cp
-           }
-         })),
-         Sp = new Set(Ip.flatMap((pp => {
-           let {
-             own: ip
-           } = pp;
- ... (60 more removed lines; see GitHub link above)
+       var XQ;
+       let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
+       FQ.set(wQ, (null !== (XQ = FQ.get(wQ)) && void 0 !== XQ ? XQ : 0) & ~QQ | WQ & QQ);
+       let TQ = 0;
+       for (const qQ of FQ.values()) TQ |= qQ;
+       return (0, qQ.C)(QQ, TQ & QQ)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L569-L571` → after: `L708-L709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L708-L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/92.js#L708-L709) · [Before (L569-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/92.js#L569-L571)

```diff
-     const Wi = /\b(?:game|minigame|tycoon|rpg|simulator|obby|shop|store|upgrades?|levels?|rounds?|teams?|quests?|leaderboards?|lobby|economy|inventory|bosse?s?|waves?|missions?)\b/gi,
-       yi = /,|\band\b|\bthen\b|\bplus\b|\bwith\b|\balso\b/gi;
- 
+   },
+   37217: (QQ, WQ, XQ) => {
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L573-L577` → after: `L711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/92.js#L711) · [Before (L573-L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/92.js#L573-L577)

```diff
-       var ip, cp;
-       const Op = pp.trim().split(/\s+/).length,
-         op = new Set((null !== (ip = pp.match(Wi)) && void 0 !== ip ? ip : []).map((pp => pp.toLowerCase().replace(/s$/, "")))).size,
-         Ip = (null !== (cp = pp.match(yi)) && void 0 !== cp ? cp : []).length;
-       return op >= 2 && Ip >= 2 || Op >= 30 && Ip >= 3
+       return QQ.includes("Leaf Bed")
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L581-L582` → after: `L715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/92.js#L715) · [Before (L581-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/92.js#L581-L582)

```diff
-       const ip = pp.split(/\n|\|/).map((pp => pp.replace(/^\s*(?:[-*\u2022]|\d+[.)]|step\s*\d+[:.)]?)\s*/i, "").replace(/\s+/g, " ").trim())).filter((pp => "" !== pp)).slice(0, 5).map((pp => pp.length > 90 ? `${pp.slice(0,89).trimEnd()}\u2026` : pp));
-       return ip.length >= 2 ? ip : []
+       return / Bed(?: Head)?(?:\||$)/.test(QQ) && !wQ(QQ)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L587` → after: `L719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/92.js#L719) · [Before (L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/92.js#L587)

```diff
-       return pp.replace(/^on/, "").replace(/^player/i, "").toLowerCase()
+       return QQ.includes(" Strongbed")
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L591-L622` → after: `L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/92.js#L723) · [Before (L591-L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/92.js#L591-L622)

```diff
-       const ip = new Set;
-       for (const cp of pp.matchAll(/^(?:async\s+)?function\s+([A-Za-z_$][\w$]*)\s*\(/gm)) ip.add(cp[1]);
-       for (const cp of pp.matchAll(/^([A-Za-z_$][\w$]*)\s*=\s*(?:async\s+)?(?:function\b|\([^)]*\)\s*=>|[A-Za-z_$][\w$]*\s*=>)/gm)) ip.add(cp[1]);
-       return [...ip]
-     }
- 
-     function di(pp, ip) {
-       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
-       const Op = new Set(ip),
-         op = new Map;
-       for (const Ap of ip) {
-         var Ip;
-         const pp = ti(Ap);
-         op.set(pp, [...null !== (Ip = op.get(pp)) && void 0 !== Ip ? Ip : [], Ap])
-       }
-       const Sp = Hi(pp),
- ... (16 more removed lines; see GitHub link above)
+       return wQ(QQ) || qQ(QQ) || TQ(QQ)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L625-L13014` → after: `L744-L749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L744-L749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/92.js#L744-L749) · [Before (L625-L13014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/92.js#L625-L13014)

```diff
-         functions: "api",
-         callbacks: "callback",
-         "client options": "clientOption"
-       },
-       ui = Object.keys(ei).map((pp => `"${pp}"`)).join(", ").replace(/, ([^,]*)$/, " or $1"),
-       ji = {
-         type: "string",
-         description: "A few plain words for the creator on what this change does, under 80 characters"
-       },
-       ki = {
-         readOnlyHint: !0,
-         destructiveHint: !1,
-         idempotentHint: !0,
-         openWorldHint: !1
-       },
-       mi = [{
- ... (12374 more removed lines; see GitHub link above)
+       leafBeds: TQ,
+       woolBeds: zQ,
+       strongBeds: sQ,
+       beds: [...TQ, ...zQ, ...sQ],
+       bedHeads: FQ,
+       blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L13016-L13158` → after: `L751-L760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L751-L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/92.js#L751-L760) · [Before (L13016-L13158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/92.js#L13016-L13158)

```diff
-     async relabel(pp, ip, cp) {
-       const Op = this.load(pp).then((async Op => this.save(pp, (pp => NY(Op, pp).map((pp => pp.id === ip ? {
-         ...pp,
-         label: cp
-       } : pp))))));
-       this.aW.set(pp, Op.then((pp => {
-         let {
-           snapshots: ip
-         } = pp;
-         return ip
-       })));
-       const {
-         snapshots: op,
-         isSaved: Ip
-       } = await Op;
-       var Sp;
- ... (127 more removed lines; see GitHub link above)
+   },
+   6873: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       c: () => zQ,
+       g: () => qQ,
+       j: () => FQ,
+       n: () => TQ,
+       q: () => PQ,
+       s: () => wQ,
+       u: () => sQ
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L13160-L13736` → after: `L762-L764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L762-L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/92.js#L762-L764) · [Before (L13160-L13736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/92.js#L13160-L13736)

```diff
-     const Op = "function" === typeof ResizeObserver ? new ResizeObserver(cp) : null;
-     return null === Op || void 0 === Op || Op.observe(ip), null === Op || void 0 === Op || Op.observe(pp), () => {
-       ip.removeEventListener("scroll", cp), null === Op || void 0 === Op || Op.disconnect()
-     }
-   }), [Ip]), (0, Sp.jsx)("div", {
-     ref: op,
-     className: "WorldCodeAiChips WorldCodeAiFollowUps",
-     children: ip.map((pp => (0, Op.createElement)("button", {
-       ...FL.f,
-       key: pp,
-       className: "WorldCodeAiChip",
-       onClick: () => {
-         cp(pp)
-       }
-     }, function(pp) {
-       const ip = pp.replace(/^It didn't work: /, "").replace(/\.$/, "");
- ... (561 more removed lines; see GitHub link above)
+     let wQ = function(QQ) {
+         return QQ[QQ.DEFAULT = 0] = "DEFAULT", QQ[QQ.BOAT = 1] = "BOAT", QQ[QQ.GLIDER = 2] = "GLIDER", QQ[QQ.BALLOON = 3] = "BALLOON", QQ[QQ.SLEEPING = 4] = "SLEEPING", QQ[QQ.RIDING_MOB = 5] = "RIDING_MOB", QQ[QQ.CAR = 6] = "CAR", QQ[QQ.HOVERCRAFT = 7] = "HOVERCRAFT", QQ
+       }({}),
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L13738-L13930` → after: `L766-L767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L766-L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/92.js#L766-L767) · [Before (L13738-L13930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/92.js#L13738-L13930)

```diff
-         let ip = gA.get(pp);
-         return ip || (ip = {
-           entries: [],
-           nextId: 1,
-           dismissedErrorCounts: new Map,
-           turns: new kS
-         }, gA.set(pp, ip)), ip
-       }(np),
-       [xi, Li] = (0, Op.useState)((() => Ii.entries)),
-       Di = (0, Op.useRef)(!0),
-       Ai = (0, Op.useCallback)((pp => {
-         const ip = "function" === typeof pp ? pp : () => pp;
-         Di.current ? Li(ip) : Ii.setEntries ? Ii.setEntries(ip) : Ii.entries = ip(Ii.entries)
-       }), [Ii]);
-     (0, Op.useEffect)((() => (Di.current = !0, Ii.setEntries = Li, () => {
-       Di.current = !1, Ii.setEntries === Li && (Ii.setEntries = void 0)
- ... (177 more removed lines; see GitHub link above)
+         return QQ[QQ.WOOD = 0] = "WOOD", QQ[QQ.OBSIDIAN = 1] = "OBSIDIAN", QQ[QQ.SPEED = 2] = "SPEED", QQ
+       }({}),
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/92.js` (Changed code · before: `L13932-L16783` → after: `L769-L783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dcR769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-70dde13e47e6aa81fd87b2ddeb48db998c8f841db1356365603ffd6db12e15dc) · [After (L769-L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/92.js#L769-L783) · [Before (L13932-L16783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/92.js#L13932-L16783)

```diff
-         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ap;
-         const cp = Hc();
-         return vi(!1), ei(!1), Ai((Op => [...Op, {
-           ...pp,
-           id: cp,
-           target: ip
-         }])), cp
-       },
-       lc = pp => pp.target.key === ap.key,
-       Qc = (pp, ip) => {
-         Ai((cp => cp.map((cp => cp.id === pp ? {
-           ...cp,
-           ..."function" === typeof ip ? ip(cp) : ip
-         } : cp))))
-       },
-       Jc = (pp, ip) => {
- ... (2836 more removed lines; see GitHub link above)
+         return QQ[QQ.WOOD = 0] = "WOOD", QQ[QQ.IRON = 1] = "IRON", QQ[QQ.GOLD = 2] = "GOLD", QQ[QQ.DIAMOND = 3] = "DIAMOND", QQ
+       }({}),
+       zQ = function(QQ) {
+         return QQ[QQ.YELLOW = 0] = "YELLOW", QQ[QQ.WHITE = 1] = "WHITE", QQ[QQ.RED = 2] = "RED", QQ[QQ.PURPLE = 3] = "PURPLE", QQ[QQ.PINK = 4] = "PINK", QQ[QQ.ORANGE = 5] = "ORANGE", QQ[QQ.MAGENTA = 6] = "MAGENTA", QQ[QQ.LIME = 7] = "LIME", QQ[QQ.LIGHT_GRAY = 8] = "LIGHT_GRAY", Q … [truncated]
+       }({}),
+       sQ = function(QQ) {
+         return QQ[QQ.ROTATION_1 = 0] = "ROTATION_1", QQ[QQ.ROTATION_2 = 1] = "ROTATION_2", QQ[QQ.ROTATION_3 = 2] = "ROTATION_3", QQ[QQ.ROTATION_4 = 3] = "ROTATION_4", QQ
+       }({}),
+       FQ = function(QQ) {
+         return QQ[QQ.KART = 0] = "KART", QQ[QQ.OFF_ROADER = 1] = "OFF_ROADER", QQ[QQ.CAR = 2] = "CAR", QQ[QQ.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", QQ[QQ.ARMORED_CAR = 4] = "ARMORED_CAR", QQ[QQ.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", QQ[QQ.DIAMOND_MINING_DRILL = 6] = … [truncated]
+       }({});
+     wQ.DEFAULT, wQ.BOAT, qQ.SPEED, wQ.GLIDER, TQ.DIAMOND, wQ.BALLOON, zQ.BLACK, wQ.SLEEPING, sQ.ROTATION_4, wQ.RIDING_MOB, wQ.CAR, FQ.MOONSTONE_MINING_DRILL, wQ.HOVERCRAFT;
+     let PQ = function(QQ) {
+       return QQ[QQ.NORMAL = 0] = "NORMAL", QQ[QQ.GLIDING = 1] = "GLIDING", QQ[QQ.FLOATING = 2] = "FLOATING", QQ
+     }({})
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/93.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/93.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L4-L454` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/93.js#L4) · [Before (L4-L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/93.js#L4-L454)

```diff
-   41507: (pp, ip, cp) => {
-     cp.r(ip), cp.d(ip, {
-       DOCS_AGENT_PART_CHARS: () => Ti.e,
-       DOCS_LLMS_FULL_TXT_PATH: () => Ti.i,
-       DOCS_LLMS_TXT_PATH: () => Ti.j,
-       DOCS_LLMS_TXT_URL: () => Ti.n,
-       ROOT_LLMS_TXT_PATH: () => Ti.o,
-       allGamemodeSettings: () => Op.c,
-       arcadeModeStaticConfig: () => Up.b,
-       arenaStaticConfig: () => Si,
-       backroomsStaticConfig: () => Ii.b,
-       battleBoxStaticConfig: () => Di,
-       bedwarsStaticConfig: () => Ep.c,
-       bloxdAggregatorConfig: () => xp.e,
-       bloxdPreprodAggregatorConfig: () => Lp.d,
-       bloxdStagingAggregatorConfig: () => Yp.d,
- ... (435 more removed lines; see GitHub link above)
+   5140: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L456` → after: `L6-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L6-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/93.js#L6-L35) · [Before (L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/93.js#L456)

```diff
-       e: () => op,
+       $b: () => aQ,
+       A: () => sQ,
+       Ab: () => uQ,
+       C: () => wQ,
+       Cb: () => yQ,
+       F: () => TQ,
+       G: () => GQ,
+       Gb: () => hQ,
+       I: () => mQ,
+       Ib: () => lQ,
+       M: () => JQ,
+       Mb: () => LQ,
+       Nb: () => nQ,
+       Pb: () => fQ,
+       Q: () => rQ,
+       Sb: () => tQ,
+ ... (14 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L458` → after: `L37-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L37-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/93.js#L37-L39) · [Before (L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/93.js#L458)

```diff
-       j: () => Ip,
+       jb: () => AQ,
+       l: () => pQ,
+       mb: () => RQ,
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L460` → after: `L41-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L41-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/93.js#L41-L42) · [Before (L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/93.js#L460)

```diff
-       o: () => xp,
+       nb: () => cQ,
+       p: () => IQ,
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L464-L465` → after: `L48-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L48-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/93.js#L48-L53) · [Before (L464-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/93.js#L464-L465)

```diff
-       v: () => Up,
-       y: () => Wp
+       ub: () => eQ,
+       vb: () => SQ,
+       y: () => bQ,
+       yb: () => CQ,
+       z: () => zQ,
+       zb: () => kQ
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L467-L472` → after: `L55-L707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L55-L707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/93.js#L55-L707) · [Before (L467-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/93.js#L467-L472)

```diff
-     var Op = cp(1603);
-     const op = 24e3,
-       Ip = "/docs/llms.txt",
-       Sp = `${Op.b}${Ip}`,
-       xp = "/llms.txt",
-       Lp = "/docs/llms-full.txt";
+     const wQ = 32,
+       qQ = 33.333333333333336,
+       TQ = {
+         AbiVersion: 0,
+         Status: 1,
+         LastError: 2,
+         ErrorCount: 3,
+         FrameIndex: 4,
+         TicksRun: 5,
+         TicksDropped: 6,
+         Alpha: 7,
+         NetOutPtr: 8,
+         NetOutLen: 9,
+         WorkerOutPtr: 10,
+         WorkerOutLen: 11,
+         EventsPtr: 12,
+ ... (637 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L475-L476` → after: `L710-L746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L710-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/93.js#L710-L746) · [Before (L475-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/93.js#L475-L476)

```diff
-       return pp || "index"
-     }
+       return (QQ.nametagsHidden ? vQ.NametagsHidden : 0) | (QQ.crouchToggle ? vQ.CrouchToggle : 0) | (QQ.bhopDisabled ? vQ.BhopDisabled : 0) | (QQ.disableBobbing ? vQ.DisableBobbing : 0) | (null !== QQ.ezTowering ? vQ.EzTowering : 0) | ("jump" === QQ.ezTowering ? vQ.EzTowerJump : … [truncated]
+     }
+     const BQ = {
+         Flags: 0,
+         PhysicsVersion: 1,
+         InbuiltOverwritten: 2,
+         AltComplete: 3,
+         ProbeUsedProp: 4
+       },
+       yQ = {
+         Ready: 1,
+         SendFnReplaced: 2,
+         Butto: 4,
+         IdentityChanged: 32,
+         CheckFuncHit: 128,
+         OriginStackHit: 256
+ ... (21 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L479-L480` → after: `L749-L798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L749-L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/93.js#L749-L798) · [Before (L479-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/93.js#L479-L480)

```diff
-       return `/docs/${Yp(pp)}.md`
-     }
+       const WQ = {
+         off: 0,
+         lit: IQ.CellLight,
+         all: IQ.CellLight | IQ.CellLightUnlit
+       } [QQ.cellLight];
+       return (QQ.showFog ? IQ.ShowFog : 0) | (QQ.lighting ? IQ.Lighting : 0) | (QQ.chunkFade ? IQ.ChunkFade : 0) | WQ
+     }
+     const bQ = {
+         ResetFirst: 1,
+         AdStart: 2,
+         PreventMovement: 4,
+         AdEnd: 8,
+         PayloadMaxBytes: 1 << 20
+       },
+       vQ = {
+         NametagsHidden: 1,
+ ... (34 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L483-L485` → after: `L801-L802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L801-L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/93.js#L801-L802) · [Before (L483-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/93.js#L483-L485)

```diff
-       return `/docs/${Yp(pp)}/${ip+1}.md`
-     }
-     const Pp = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;
+       return (QQ | WQ << 8) >>> 0
+     }
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L488-L491` → after: `L805-L946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L805-L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/93.js#L805-L946) · [Before (L488-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/93.js#L488-L491)

```diff
-       const ip = Pp.exec(pp);
-       return null === ip ? null : {
-         name: ip[1],
-         part: void 0 === ip[2] ? null : Number(ip[2])
+       return 255 & QQ
+     }
+ 
+     function uQ(QQ) {
+       return QQ >>> 8
+     }
+ 
+     function LQ(QQ) {
+       return QQ + 3 & -4
+     }
+     const kQ = 16777216,
+       fQ = 20;
+     const SQ = 8,
+       tQ = 8,
+       oQ = 16777216,
+       eQ = {
+ ... (126 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L494` → after: `L949-L956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L949-L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/93.js#L949-L956) · [Before (L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/93.js#L494)

```diff
-     const yp = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;
+   },
+   5126: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       b: () => zQ,
+       e: () => TQ,
+       f: () => qQ
+     });
+     var wQ = XQ(5134);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L497-L500` → after: `L959-L971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L959-L971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/93.js#L959-L971) · [Before (L497-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/93.js#L497-L500)

```diff
-       const ip = yp.exec(pp);
-       if (null === ip) return null;
-       const [, cp = "", Op] = ip;
-       return void 0 === Op ? Dp(cp) : Ap(cp, Number(Op) - 1)
+       return "none" !== QQ
+     }
+ 
+     function TQ(QQ, WQ) {
+       if (!QQ) return "none";
+       switch (WQ) {
+         case wQ.cb.Drawn:
+           return "drawn";
+         case wQ.cb.Paced:
+           return "paced";
+         default:
+           return "skipped"
+       }
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/93.js` (Changed code · before: `L504` → after: `L975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7dR975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-024f8f6e830ce47d248d7e8d7903d09a439381ea55c14e2978e27859fbf2dd7d) · [After (L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/93.js#L975) · [Before (L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/93.js#L504)

```diff
-       return `/docsHtml/${Yp(pp)}.html`
+       return "drawn" === QQ
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/94.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/94.js` (33 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8)

#### 1. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L3` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/94.js#L2) · [Before (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/94.js#L3)

```diff
- export const ids = [10, 13, 15, 16, 18, 20, 21, 23, 24, 94, 137, 138];
+ export const ids = [94];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L5-L29350` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/94.js#L4) · [Before (L5-L29350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/94.js#L5-L29350)

```diff
-   39448: (pp, ip, cp) => {
-     var Op = {
-       "./bedwars/bedwarsClient": 39456,
-       "./bridgeBattle/bridgeBattleClient": 39460,
-       "./buildAFactory2/buildAFactory2Client": 38704,
-       "./classic/classicClient": 39464,
-       "./clutch/clutchClient": 39472,
-       "./containmentBreach/containmentBreachClient": 39474,
-       "./cooking/cookingClient": 39608,
-       "./defusal/defusalClient": 39617,
-       "./frontline/frontlineClient": 39623,
-       "./goalRush/goalRushClient": 39631,
-       "./luckyBedwars/luckyBedwarsClient": 39640,
-       "./ninetyNineNights/ninetyNineNightsClient": 39642,
-       "./oneBlock/oneBlockClient": 39649,
-       "./plots/plotsClient": 39655,
- ... (29330 more removed lines; see GitHub link above)
+   36674: (QQ, WQ, XQ) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L29352` → after: `L6-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L6-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/94.js#L6-L10) · [Before (L29352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/94.js#L29352)

```diff
-       e: () => op
+       d: () => gQ,
+       g: () => sQ,
+       j: () => PQ,
+       k: () => FQ,
+       m: () => pQ
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L29354-L29363` → after: `L12-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L12-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/94.js#L12-L17) · [Before (L29354-L29363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/94.js#L29354-L29363)

```diff
-     const Op = !1;
- 
-     function op(pp) {
-       return Op && Ip(pp), pp
-     }
- 
-     function Ip(pp) {
-       if ("object" === typeof pp && null !== pp && !Object.isFrozen(pp)) {
-         Object.freeze(pp);
-         for (const ip of Object.keys(pp)) Ip(pp[ip])
+     var wQ = XQ(670),
+       qQ = XQ(1812),
+       TQ = XQ(5140);
+     class zQ {
+       constructor(QQ, WQ) {
+         this.width = QQ, this.yJ = WQ, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(QQ * WQ)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L29365-L38744` → after: `L19-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L19-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/94.js#L19-L38) · [Before (L29365-L38744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/94.js#L29365-L38744)

```diff
-     }
-   },
-   39410: (pp, ip, cp) => {
-     cp.d(ip, {
-       b: () => Ip,
-       e: () => Sp
-     });
-     var Op = cp(337),
-       op = cp(39418);
-     const Ip = {
-       "Maple Wood Planks": [{
-         requires: [{
-           items: Op.Oc,
-           amt: 1
-         }],
-         produces: 4,
- ... (9364 more removed lines; see GitHub link above)
+       push(QQ) {
+         let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         const XQ = this.data,
+           wQ = this.next * this.width;
+         for (let qQ = 0; qQ < this.width; qQ++) XQ[wQ + qQ] = QQ[WQ + qQ];
+         this.next = (this.next + 1) % this.yJ, this.size = Math.min(this.size + 1, this.yJ)
+       }
+       rows() {
+         let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
+           WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1 / 0;
+         const XQ = [],
+           wQ = (this.next - this.size + this.yJ) % this.yJ;
+         for (let qQ = 0; qQ < this.size; qQ++) {
+           const TQ = (wQ + qQ) % this.yJ * this.width;
+           this.data[TQ + QQ] >= WQ && XQ.push(Array.from(this.data.subarray(TQ, TQ + this.width)))
+         }
+ ... (4 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L38748-L38749` → after: `L76-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L76-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/94.js#L76-L77) · [Before (L38748-L38749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/94.js#L38748-L38749)

```diff
-     function Dp(pp, ip) {
-       return Yp(pp, ip, 3)
+     function VQ(QQ) {
+       return "js" === QQ ? gQ.jsClient : gQ.wasmClient
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L38751-L38761` → after: `L79-L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L79-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/94.js#L79-L81) · [Before (L38751-L38761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/94.js#L38751-L38761)

```diff
- 
-     function Ap(pp, ip) {
-       return {
-         [pp]: [{
-           requires: [{
-             items: [ip],
-             amt: 5
-           }],
-           produces: 3,
-           station: "Workbench"
-         }]
+     class DQ {
+       constructor() {
+         this.steps = new zQ(sQ, JQ), this.events = new zQ(IQ.length, JQ), this.frames = new zQ(jQ.length, JQ), this.cameraSets = new zQ(TQ.f, 256), this.changes = new zQ(yQ.length, 256)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L38764-L38774` → after: `L84-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L84-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/94.js#L84-L86) · [Before (L38764-L38774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/94.js#L38764-L38774)

```diff
- 
-     function Pp(pp, ip) {
-       return {
-         [pp]: [{
-           requires: [{
-             items: [ip],
-             amt: 4
-           }],
-           produces: 1,
-           station: "Workbench"
-         }]
+     const pQ = new class {
+       constructor() {
+         this.rings = null, this.sample = new Float64Array(IQ.length), this.startedClient = null, this.startedAtMs = 0
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L38776-L38793` → after: `L88-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L88-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/94.js#L88-L197) · [Before (L38776-L38793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/94.js#L38776-L38793)

```diff
-     }
- 
-     function Wp(pp, ip) {
-       return Yp(pp, ip, 2)
-     }
-   },
-   39091: (pp, ip, cp) => {
-     cp.d(ip, {
-       c: () => Op.g
-     });
-     var Op = cp(195)
-   },
-   38954: (pp, ip, cp) => {
-     cp.d(ip, {
-       e: () => Op,
-       f: () => op
- ... (2 more removed lines; see GitHub link above)
+       get client() {
+         return this.startedClient
+       }
+       start(QQ, WQ) {
+         this.startedClient = QQ, this.startedAtMs = performance.now(), null !== this.rings ? this.change(VQ(QQ)) : WQ && this.allocate()
+       }
+       lockGained() {
+         this.allocate(), this.change(gQ.lockGained)
+       }
+       allocate() {
+         null === this.rings && (this.rings = new DQ, null !== this.startedClient && this.changeAt(this.startedAtMs, VQ(this.startedClient), 1))
+       }
+       step(QQ, WQ) {
+         var XQ;
+         QQ[WQ + 6] !== FQ.Py && (null === (XQ = this.rings) || void 0 === XQ || XQ.steps.push(QQ, WQ))
+       }
+ ... (94 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L38796-L38797` → after: `L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/94.js#L200) · [Before (L38796-L38797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/94.js#L38796-L38797)

```diff
-       var ip;
-       return null !== (ip = Op.get(pp)) && void 0 !== ip ? ip : pp
+       return (0, TQ.y)(QQ).toFixed(1)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L38811-L38814` → after: `L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/94.js#L204) · [Before (L38811-L38814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/94.js#L38811-L38814)

```diff
-       let cp = Sp.get(ip);
-       void 0 === cp && (cp = new Map, Sp.set(ip, cp));
-       let op = cp.get(pp);
-       return void 0 === op && (op = `${pp}${(0,Op.C)(ip)}`, cp.set(pp, op)), op
+       return `camera set by ${zQ.get(QQ[WQ+1])}: heading ${`${sQ(QQ[WQ+2])} -> ${sQ(QQ[WQ+4])}`} deg, pitch ${`${sQ(QQ[WQ+3])} -> ${sQ(QQ[WQ+5])}`} deg, at ${QQ[WQ].toFixed(1)} ms`
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/94.js` (Changed code · before: `L38816-L38891` → after: `L206-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8R206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-a021d3560a1c48bc66b1dee70f69e276b8167c5c5cfbf2d85f58a0b2d690cca8) · [After (L206-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/94.js#L206-L207) · [Before (L38816-L38891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/94.js#L38816-L38891)

```diff
-   },
-   39488: (pp, ip, cp) => {
-     pp.exports = cp.p + "static/media/breach-zero-uncaught.c7d4410f99269ac1ee2f.webp"
-   },
-   39497: (pp, ip, cp) => {
-     pp.exports = cp.p + "static/media/breach-zero.ef5aacecf502228cd20b.webp"
-   },
-   39505: (pp, ip, cp) => {
-     pp.exports = cp.p + "static/media/brood-father-uncaught.ee678432c71b7061fae1.webp"
-   },
-   39507: (pp, ip, cp) => {
-     pp.exports = cp.p + "static/media/brood-father.e48391955a574c1155fa.webp"
-   },
-   39510: (pp, ip, cp) => {
-     pp.exports = cp.p + "static/media/carousel-uncaught.a92757620f569f31d7d2.webp"
-   },
- ... (60 more removed lines; see GitHub link above)
+     var PQ = XQ(36674);
+     const gQ = 2;
```
