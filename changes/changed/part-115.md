# Changed — Bundle Modifications Report (Part 115 / 115)

- **Updated at**: `2026-11-21T00:51 JST`
- **Part**: `115 / 115` (**64** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 114](part-114.md)

## `bloxd.io` · `bundles/bloxd.io/main.js` (bcgkc.38229551 → bbb6l5.0244a119 · continued)

- **File**: `bundles/bloxd.io/main.js` (1153 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6)

#### 1090. `bundles/bloxd.io/main.js` (Changed code · before: `L41517-L41529` → after: `L19285-L19298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19285-L19298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L19285-L19298) · [Before (L41517-L41529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41517-L41529)

```diff
-           var lT = cT(211),
-             MT = cT(1499),
-             KT = cT(1514),
-             OT = cT(1508);
-           const yT = "data-analytics-id",
-             fT = "data-analytics-value",
-             xT = new Set(lT.n);
- 
-           function IT(TT) {
-             var kT;
-             return void 0 === TT || arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? {} : {
-               [yT]: TT.id,
-               [fT]: null !== (kT = TT.value) && void 0 !== kT ? kT : ""
+           var Yq = gq(987),
+             lq = gq(997),
+             Oq = gq(1e3),
+             mq = gq(989),
+             xq = gq(729);
+           const Aq = new Set([...Oq.g, mq.l]);
+           const cq = function() {
+             const qq = [],
+               Eq = new Set;
+             for (const gq of Object.keys(xq.c)) {
+               const Oq = gq;
+               if (!Aq.has(gq) || (0, Yq.j)(Oq)) continue;
+               const mq = (0, lq.d)(Oq, !0);
+               Eq.add(mq), mq === gq && qq.push(Oq)
```

#### 1091. `bundles/bloxd.io/main.js` (Changed code · before: `L41531-L41539` → after: `L19300-L19306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19300-L19306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L19300-L19306) · [Before (L41531-L41539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41531-L41539)

```diff
-           }
- 
-           function AT() {
-             document.addEventListener("click", (TT => {
-               TT.target instanceof Element && CT(TT.target)
-             }), {
-               capture: !0
-             })
-           }
+             if (Eq.size !== qq.length) {
+               const gq = new Set(qq),
+                 Yq = [...Eq].filter((qq => !gq.has(qq)));
+               console.warn("Creator Studio is omitting first-party games whose analytics group has no base config", Yq)
+             }
+             return qq
+           }();
```

#### 1092. `bundles/bloxd.io/main.js` (Changed code · before: `L41543-L41550` → after: `L19310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L19310) · [Before (L41543-L41550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41543-L41550)

```diff
-             const cT = TT.closest(`[${yT}]`),
-               lT = null === cT || void 0 === cT ? void 0 : cT.getAttribute(yT);
-             cT && lT && (! function(TT) {
-               return xT.has(TT)
-             }(lT) ? console.warn(`Unknown analytics click id "${lT}", add it to CLIENT_ANALYTICS_CLICK_IDS`) : jT({
-               id: lT,
-               value: null !== (kT = cT.getAttribute(fT)) && void 0 !== kT ? kT : ""
-             }))
+             return null !== (Eq = cq.find((Eq => Eq === qq))) && void 0 !== Eq ? Eq : null
```

#### 1093. `bundles/bloxd.io/main.js` (Changed code · before: `L41554-L41560` → after: `L19314-L19319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19314-L19319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L19314-L19319) · [Before (L41554-L41560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41554-L41560)

```diff
-             var kT;
-             (0, KT.h)({
-               type: "click",
-               elementId: TT.id,
-               elementValue: (0, OT.d)(null !== (kT = TT.value) && void 0 !== kT ? kT : "", lT.t, "other"),
-               ...(0, MT.c)()
-             })
+             const Eq = new Set;
+             for (const gq of qq) {
+               const qq = uq(gq);
+               qq && Eq.add(qq)
+             }
+             return [...Eq].sort()
```

#### 1094. `bundles/bloxd.io/main.js` (Changed code · before: `L41562-L41563` → after: `L19321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L19321) · [Before (L41562-L41563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41562-L41563)

```diff
-         },
-         1514: (TT, kT, cT) => {
+         }, , (qq, Eq, gq) => {
```

#### 1095. `bundles/bloxd.io/main.js` (Changed code · before: `L41565-L41567` → after: `L19323-L19330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19323-L19330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L19323-L19330) · [Before (L41565-L41567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41565-L41567)

```diff
-             d: () => aT,
-             flushClientAnalyticsEvents: () => PT,
-             h: () => ST
+             b: () => Wq,
+             e: () => Oq,
+             f: () => dq,
+             j: () => xq,
+             k: () => Vq,
+             o: () => uq,
+             p: () => aq,
+             q: () => Nq
```

#### 1096. `bundles/bloxd.io/main.js` (Changed code · before: `L41569-L41584` → after: `L19332-L19335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19332-L19335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L19332-L19335) · [Before (L41569-L41584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41569-L41584)

```diff
-           var lT = cT(211),
-             MT = cT(1518),
-             KT = cT(1298),
-             OT = cT(1136),
-             yT = cT(651),
-             fT = cT(1508);
-           const xT = 15e3,
-             IT = 5e3,
-             AT = new Set(["visitStarted", "mobileIdMapping", "adRevenue", "milestone", "clientError"]),
-             CT = 100,
-             jT = [];
-           let vT = null,
-             tT = 0,
-             hT = !1,
-             NT = Promise.resolve(),
-             QT = !1;
+           var Yq = gq(989),
+             lq = gq(307);
+           const Oq = "default",
+             mq = /^[A-Za-z0-9_-]{1,32}$/;
```

#### 1097. `bundles/bloxd.io/main.js` (Changed code · before: `L41587-L41594` → after: `L19338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L19338) · [Before (L41587-L41594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41587-L41594)

```diff
-             let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, yT.d)();
-             jT.push({
-               event: {
-                 ...TT,
-                 visitSessionId: kT
-               },
-               queuedAtMs: performance.now()
-             }), jT.length > CT && jT.splice(0, jT.length - CT), wT()
+             return Aq((0, lq.Tb)(qq))
```

#### 1098. `bundles/bloxd.io/main.js` (Changed code · before: `L41599-L41667` → after: `L19342-L19343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19342-L19343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L19342-L19343) · [Before (L41599-L41667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41599-L41667)

```diff
-             return DT.add(TT)
-           }
- 
-           function FT() {
-             DT.callEach(void 0, "a client analytics flushing listener")
-           }
- 
-           function rT() {
-             return null !== vT && clearTimeout(vT), mT()
-           }
-           async function PT() {
-             FT();
-             for (let TT = Math.ceil(jT.length / lT.V) + 1; TT > 0; TT--)
-               if (await rT(), 0 === jT.length && !hT) return
-           }
- 
- ... (53 more removed lines; see GitHub link above)
+             var Eq;
+             return null !== (Eq = null === qq || void 0 === qq ? void 0 : qq.startsWith(Yq.i)) && void 0 !== Eq && Eq
```

#### 1099. `bundles/bloxd.io/main.js` (Changed code · before: `L41681-L41689` → after: `L19346-L19347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19346-L19347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L19346-L19347) · [Before (L41681-L41689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41681-L41689)

```diff
-           function KT(TT, kT, cT) {
-             const KT = Array.from((yT = kT, yT.replace(/\b[a-z][a-z0-9+.-]*:\/\/\S+/gi, "<url>").replace(/"[^"]*"/g, '"<value>"').replace(/\d+/g, "#").replace(/[\uD800-\uDFFF]/gu, "?").replace(/\s+/g, " ").trim())).slice(0, lT.T).join("");
-             var yT;
-             const fT = (0, MT.d)(cT, lT.v, "other");
-             return {
-               code: fT,
-               message: KT,
-               fingerprint: OT(`${TT}|${fT}|${KT}`)
-             }
+           function cq(qq) {
+             return qq && Aq(qq) ? qq.split("|")[1] : null
```

#### 1100. `bundles/bloxd.io/main.js` (Changed code · before: `L41693-L41695` → after: `L19351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L19351) · [Before (L41693-L41695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41693-L41695)

```diff
-             let kT = 2166136261;
-             for (let cT = 0; cT < TT.length; cT++) kT ^= TT.charCodeAt(cT), kT = Math.imul(kT, 16777619);
-             return (kT >>> 0).toString(16).padStart(8, "0")
+             return cq((0, lq.Tb)(qq))
```

#### 1101. `bundles/bloxd.io/main.js` (Changed code · before: `L41718-L41765` → after: `L19355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L19355) · [Before (L41718-L41765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41718-L41765)

```diff
-             let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
-               lT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
-               tT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : jT,
-               hT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {},
-               QT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
-             try {
-               const jT = function(TT) {
-                 if (TT instanceof Error) return `${TT.name}: ${TT.message}`;
-                 if ("string" === typeof TT) return TT;
-                 if ((0, MT.x)(TT)) return `${TT.status} ${TT.statusText}`;
-                 return String(TT)
-               }(kT);
-               if (null === document.body || (0, KT.e)(jT) || "unhandled_rejection" === TT && (0, KT.i)(jT)) return;
-               const {
-                 code: ST,
-                 message: DT,
- ... (32 more removed lines; see GitHub link above)
+             return Eq && Eq !== Oq ? `${Yq.i}|${qq}|${Eq}` : `${Yq.i}|${qq}`
```

#### 1102. `bundles/bloxd.io/main.js` (Changed code · before: `L41768-L41774` → after: `L19358-L19359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19358-L19359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L19358-L19359) · [Before (L41768-L41774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41768-L41774)

```diff
-           function hT() {
-             window.addEventListener("error", (TT => {
-               var kT;
-               TT.filename && new URL(TT.filename, location.href).origin !== location.origin || null === TT.error && TT.message.startsWith("Script error") || (TT.error instanceof SyntaxError && TT.filename ? tT("uncaught", new SyntaxError(`${TT.error.message} (in ${new URL(TT.file … [truncated]
-             })), window.addEventListener("unhandledrejection", (TT => {
-               tT("unhandled_rejection", TT.reason)
-             }))
+           function Wq(qq, Eq) {
+             return `classic_${Bq(qq,Eq)}`
```

#### 1103. `bundles/bloxd.io/main.js` (Changed code · before: `L41778-L41784` → after: `L19363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L19363) · [Before (L41778-L41784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41778-L41784)

```diff
-             let {
-               budgetTier: kT,
-               renderDistance: cT,
-               renderBackend: MT
-             } = TT;
-             const KT = {};
-             return void 0 !== kT && lT.k.test(kT) && (KT.budgetTier = kT), void 0 !== cT && Number.isInteger(cT) && cT >= 0 && cT <= lT.Z && (KT.renderDistance = cT), void 0 !== MT && (KT.renderBackend = MT), KT
+             return Wq(qq)
```

#### 1104. `bundles/bloxd.io/main.js` (Changed code · before: `L41800` → after: `L19367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L19367) · [Before (L41800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41800)

```diff
-             return yT.has(TT)
+             return "string" === typeof qq && mq.test(qq)
```

#### 1105. `bundles/bloxd.io/main.js` (Changed code · before: `L41804-L41812` → after: `L19371-L19381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19371-L19381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L19371-L19381) · [Before (L41804-L41812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41804-L41812)

```diff
-             return {
-               Ix: CT("deviceMemory" in navigator ? navigator.deviceMemory : void 0),
-               Ax: (kT = navigator.hardwareConcurrency, kT ? IT(jT, kT, "17_plus") : "unreported"),
-               Cx: NT(TT.refreshHz),
-               jx: (0, MT.d)(),
-               vx: QT(TT.msaa, TT.autoMsaaOff),
-               tx: DT((0, KT.j)())
-             };
-             var kT
+             let Eq = qq;
+             if (qq.startsWith("classic_")) {
+               const gq = (0, lq.Tb)(qq);
+               if (!gq) return null;
+               Eq = gq
+             }
+             if (!Aq(Eq)) return null;
+             const gq = Eq.split("|");
+             if (gq.length < 3) return null;
+             const Yq = gq[2];
+             return Yq && Yq !== Oq ? Yq : null
```

#### 1106. `bundles/bloxd.io/main.js` (Changed code · before: `L41816-L41861` → after: `L19385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L19385) · [Before (L41816-L41861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41816-L41861)

```diff
-             var lT, MT;
-             return null !== (lT = null === (MT = TT.find((TT => {
-               let [cT] = TT;
-               return kT <= cT
-             }))) || void 0 === MT ? void 0 : MT[1]) && void 0 !== lT ? lT : cT
-           }
-           const AT = [
-             [.5, "0.5_or_less"],
-             [1, "1"],
-             [2, "2"],
-             [4, "4"]
-           ];
- 
-           function CT(TT) {
-             return "number" === typeof TT && TT > 0 ? IT(AT, TT, "8_plus") : "unreported"
-           }
- ... (30 more removed lines; see GitHub link above)
+             return `${qq}|${Eq&&Eq!==Oq?Eq:Oq}|${gq}`
```

#### 1107. `bundles/bloxd.io/main.js` (Changed code · before: `L41865` → after: `L19412-L19416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19412-L19416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L19412-L19416) · [Before (L41865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41865)

```diff
-             return null === TT ? lT.c : TT ? "on" : kT ? "auto_off" : "off"
+             return (0, Yq.j)(qq) ? Aq((0, Yq.o)(qq)) : qq !== Oq.j || Eq ? mq.includes(qq) ? "classic_survivalFactory" : "classic" === (0, lq.Yb)(qq) ? qq : (0, lq.Yb)(qq) : "classic_worlds"
+           }
+ 
+           function Aq(qq) {
+             return (0, Yq.q)(qq)
```

#### 1108. `bundles/bloxd.io/main.js` (Changed code · before: `L41874` → after: `L19420-L19421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19420-L19421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L19420-L19421) · [Before (L41874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41874)

```diff
-             return IT(ST, Math.round(TT), "1701_plus")
+             const Eq = (0, Yq.o)(qq);
+             return Eq && (0, lq.Pc)(Eq) ? Eq : null
```

#### 1109. `bundles/bloxd.io/main.js` (Changed code · before: `L41876-L41877` → after: `L19423-L19430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19423-L19430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L19423-L19430) · [Before (L41876-L41877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41876-L41877)

```diff
-         },
-         2898: (TT, kT, cT) => {
+         }, , , (qq, Eq, gq) => {
+           gq.d(Eq, {
+             e: () => lq,
+             g: () => Yq
+           });
+           const Yq = ["arcadeMode", "backrooms", "bedwars", "bedwars_1v1", "bedwars_4v4", "bedwars_4v4v4v4", "bedwars_duo", "bedwars_solo", "bedwars_trio", "bingo", "bridge", "bridgeBattle", "buildAFactory2", "classic", "classic_2d", "classic_anarchy", "classic_creative", "classi … [truncated]
+             lq = ["ranked", "customGames", "survivalFactory", "parkourPlace"]
+         }, , , , , , (qq, Eq, gq) => {
```

#### 1110. `bundles/bloxd.io/main.js` (Changed code · before: `L41879` → after: `L19432-L19439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19432-L19439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L19432-L19439) · [Before (L41879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41879)

```diff
-             return "matchmake_failed" === TT || "disconnect" === TT || "unhandled_rejection" === TT
+             const Eq = [],
+               gq = qq => {
+                 if (Array.isArray(qq))
+                   for (const Eq of qq) gq(Eq);
+                 else Eq.push(qq)
+               };
+             for (const Yq of Object.values(qq.availableGameNamesWithVariation)) Yq && gq(Yq);
+             return Eq
```

#### 1111. `bundles/bloxd.io/main.js` (Changed code · before: `L41884-L41885` → after: `L19444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L19444) · [Before (L41884-L41885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41884-L41885)

```diff
-         },
-         2873: (TT, kT, cT) => {
+         }, , , , , , , , , (qq, Eq, gq) => {
```

#### 1112. `bundles/bloxd.io/main.js` (Changed code · before: `L41892-L41894` → after: `L19447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L19447) · [Before (L41892-L41894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41892-L41894)

```diff
-             f: () => IT,
-             h: () => NT,
-             j: () => CT,
+             g: () => Yq,
```

#### 1113. `bundles/bloxd.io/main.js` (Changed code · before: `L41896-L41900` → after: `L19449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L19449) · [Before (L41896-L41900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41896-L41900)

```diff
-             logError: () => FT,
-             n: () => wT,
-             r: () => DT,
-             v: () => rT,
-             y: () => PT
+             m: () => lq
```

#### 1114. `bundles/bloxd.io/main.js` (Changed code · before: `L41902-L41904` → after: `L19451-L19459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19451-L19459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L19451-L19459) · [Before (L41902-L41904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41902-L41904)

```diff
-           var lT = cT(260);
-           const MT = "G-DXF16YBENG",
-             KT = [..."AT AX BE BG CY CZ DE DK EE ES FI FR GF GP GR HR HU IE IT LT LU LV MF MQ MT NL PL PT RE RO SE SI SK YT IS LI NO CH".split(" "), ...lT.ukCountryCodes],
+           const Yq = ["parkourPlace"];
+ 
+           function lq(qq) {
+             return Yq.includes(qq)
+           }
+           const Oq = {
+               parkourPlace: "parkourObby"
+             },
+             mq = "classic_playerSchematic|dR2m6qyt6euJs6N6nmMpD",
```

#### 1115. `bundles/bloxd.io/main.js` (Changed code · before: `L41906-L41910` → after: `L19461-L19503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19461-L19503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L19461-L19503) · [Before (L41906-L41910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41906-L41910)

```diff
-               ad_storage: "denied",
-               ad_user_data: "denied",
-               ad_personalization: "denied",
-               analytics_storage: "denied",
-               wait_for_update: 500
+               parkourPlace: [{
+                 id: "coolParkour",
+                 category: "Cool Parkour",
+                 displayTranslationKey: "customGame:coolParkour",
+                 tintColour: "#3478db",
+                 selectedGames: ["classic_playerSchematic|jIfAJMhswKPXQjVMG5Bo4", "classic_playerSchematic|d9obQf6_rqQKEcaT9Tm2a", "classic_playerSchematic|OU880KInxcJrP66zAlGCU", "classic_playerSchematic|EXTuVGBlNOGyBQqNp4zY6"],
+                 maxGames: 4
+               }, {
+                 id: "progressiveParkour",
+                 category: "Progressive Parkour",
+                 displayTranslationKey: "customGame:progressiveParkour",
+                 tintColour: "#dda52b",
+                 selectedGames: ["classic_playerSchematic|M585tnYwJh6YCXy2kP3C8", "classic_playerSchematic|uY3Rm1dEWcLEZytq11p82", "classic_playerSchematic|C1EaM-ygaqQJC94AIOkHa", "classic_playerSchematic|7IVl8eWQk2oXfB97zL_B5", "classic_playerSchematic|4QTGKw4ZMZN2N_pnmIDQk", "cl … [truncated]
+                 maxGames: 6
+               }, {
+                 id: "themedParkour",
+ ... (27 more added lines; see GitHub link above)
```

#### 1116. `bundles/bloxd.io/main.js` (Changed code · before: `L41913-L41915` → after: `L19506-L19507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19506-L19507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L19506-L19507) · [Before (L41913-L41915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41913-L41915)

```diff
-           function yT() {
-             for (var TT = arguments.length, kT = new Array(TT), cT = 0; cT < TT; cT++) kT[cT] = arguments[cT];
-             window.dataLayer.push(arguments)
+           function Aq(qq, Eq) {
+             return qq.filter((qq => Oq[qq] === Eq))
```

#### 1117. `bundles/bloxd.io/main.js` (Changed code · before: `L41917` → after: `L19509-L19512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19509-L19512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L19509-L19512) · [Before (L41917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41917)

```diff
-           let fT = !1;
+         }, , , (qq, Eq) => {
+           var gq;
+           ! function() {
+             var Yq = {}.hasOwnProperty;
```

#### 1118. `bundles/bloxd.io/main.js` (Changed code · before: `L41919-L41929` → after: `L19514-L19543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19514-L19543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L19514-L19543) · [Before (L41919-L41929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41919-L41929)

```diff
-           function xT() {
-             fT || (fT = !0, window.dataLayer ??= [], window.gtag ??= yT, yT("consent", "default", {
-               ...OT,
-               region: KT
-             }), yT("consent", "default", {
-               ...OT,
-               analytics_storage: "granted"
-             }), yT("js", new Date))
-           }
-           const IT = "fps",
-             AT = 3e5;
+             function lq() {
+               for (var qq = [], Eq = 0; Eq < arguments.length; Eq++) {
+                 var gq = arguments[Eq];
+                 if (gq) {
+                   var Oq = typeof gq;
+                   if ("string" === Oq || "number" === Oq) qq.push(gq);
+                   else if (Array.isArray(gq)) {
+                     if (gq.length) {
+                       var mq = lq.apply(null, gq);
+                       mq && qq.push(mq)
+                     }
+                   } else if ("object" === Oq)
+                     if (gq.toString === Object.prototype.toString)
+                       for (var xq in gq) Yq.call(gq, xq) && gq[xq] && qq.push(xq);
+                     else qq.push(gq.toString())
+                 }
+ ... (14 more added lines; see GitHub link above)
```

#### 1119. `bundles/bloxd.io/main.js` (Changed code · before: `L41931-L41932` → after: `L19545-L19576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19545-L19576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L19545-L19576) · [Before (L41931-L41932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41931-L41932)

```diff
-           function CT(TT, kT, cT, lT) {
-             return null !== TT && TT !== kT && (null === cT || lT - cT >= AT)
+           function mq(qq) {
+             let {
+               iconName: Eq,
+               iconCountPerGroup: gq,
+               animation: mq,
+               midShowerStart: xq = !1,
+               customClass: Aq
+             } = qq;
+             const [cq, uq] = (0, Yq.useState)({});
+             return (0, Yq.useEffect)((() => {
+               const qq = {};
+               for (const Eq of Array.from(Array(3).keys())) {
+                 qq[Eq] = [];
+                 for (let Yq = 0; Yq < gq; Yq++) qq[Eq].push({
+                   left: 100 * Math.random() + "%",
+                   animationDelay: 20 * Math.random() * (xq ? -1 : 1) + "s"
+ ... (16 more added lines; see GitHub link above)
```

#### 1120. `bundles/bloxd.io/main.js` (Changed code · before: `L41934` → after: `L19578-L19590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19578-L19590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L19578-L19590) · [Before (L41934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41934)

```diff
-           let jT = {};
+         }, , (qq, Eq, gq) => {
+           gq.d(Eq, {
+             d: () => aq,
+             h: () => Aq.g
+           });
+           var Yq = gq(57),
+             lq = gq(1018),
+             Oq = gq.n(lq),
+             mq = gq(307),
+             xq = gq(1034),
+             Aq = gq(1043),
+             cq = gq(1070);
+           const uq = xq.d;
```

#### 1121. `bundles/bloxd.io/main.js` (Changed code · before: `L41936-L41937` → after: `L19592-L19597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19592-L19597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L19592-L19597) · [Before (L41936-L41937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41936-L41937)

```diff
-           function vT() {
-             return "function" === typeof window.gtag
+           function Bq(qq, Eq, gq) {
+             if (qq()) return void gq();
+             const Yq = (0, Aq.m)((() => {
+               qq() ? gq() : Eq()
+             }));
+             return Eq(), Yq
```

#### 1122. `bundles/bloxd.io/main.js` (Changed code · before: `L41939` → after: `L19599-L19646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19599-L19646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L19599-L19646) · [Before (L41939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41939)

```diff
-           let tT = !1;
+           const Wq = Yq.forwardRef((function(qq, Eq) {
+             let {
+               name: gq,
+               kit: lq = "solid",
+               className: mq,
+               ...xq
+             } = qq;
+             const {
+               name: Wq,
+               kit: Nq,
+               extraClasses: aq
+             } = (0, Aq.l)(gq || "", lq), Vq = function(qq, Eq, gq) {
+               const [, lq] = (0, Yq.useState)(0), Oq = gq ? (0, Aq.f)(Eq) : void 0;
+               if ((0, Yq.useEffect)((() => {
+                   if (gq && !Oq) return Bq((() => void 0 !== (0, Aq.f)(Eq)), (() => (0, Aq.k)(Eq)), (() => {
+                     lq((qq => qq + 1))
+ ... (32 more added lines; see GitHub link above)
```

#### 1123. `bundles/bloxd.io/main.js` (Changed code · before: `L41941-L41942` → after: `L19648-L19656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19648-L19656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L19648-L19656) · [Before (L41941-L41942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41941-L41942)

```diff
-           function hT() {
-             tT = !0
+           function Nq(qq, Eq) {
+             let {
+               style: gq,
+               ...Yq
+             } = qq, {
+               style: lq,
+               ...Oq
+             } = Eq;
+             return (0, mq.be)(Yq, Oq) && (0, mq.be)(gq, lq)
```

#### 1124. `bundles/bloxd.io/main.js` (Changed code · before: `L41945-L41946` → after: `L19695-L19696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19695-L19696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L19695-L19696) · [Before (L41945-L41946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41945-L41946)

```diff
-           function NT() {
-             return tT && vT()
+           function xq(qq) {
+             return qq.startsWith("fa-") ? qq.slice(3) : qq
```

#### 1125. `bundles/bloxd.io/main.js` (Changed code · before: `L41949-L41950` → after: `L19700-L19705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19700-L19705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L19700-L19705) · [Before (L41949-L41950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41949-L41950)

```diff
-           function QT(TT, kT, cT, lT) {
-             if (vT()) {
+           function uq() {
+             if (Aq) return Promise.resolve(Aq);
+             if (cq) return cq;
+             const qq = Promise.all([gq.e(32).then((() => gq(6553))), gq.e(32).then((() => gq(6559)))]).then((qq => {
+               let [Eq, gq] = qq;
+               Eq.config.autoAddCss = !1;
```

#### 1126. `bundles/bloxd.io/main.js` (Changed code · before: `L41952-L41953` → after: `L19707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L19707) · [Before (L41952-L41953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41952-L41953)

```diff
-                 event_category: cT,
-                 ...kT
+                 FontAwesomeIcon: gq.FontAwesomeIcon
```

#### 1127. `bundles/bloxd.io/main.js` (Changed code · before: `L41955-L41956` → after: `L19709-L19715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19709-L19715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L19709-L19715) · [Before (L41955-L41956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41955-L41956)

```diff
-               window.gtag("event", lT ? `${cT}_${lT}` : cT, TT)
-             } else console.log(`${TT}: gtag not available`)
+               return Aq = Yq, cq = void 0, (0, Oq.o)(), Yq
+             }));
+             return qq.catch((qq => {
+               console.warn("Failed to load the icon renderer", qq), (0, lq.lV)(qq), (0, Oq.d)("renderer", (() => {
+                 cq = void 0
+               }))
+             })), cq = qq, qq
```

#### 1128. `bundles/bloxd.io/main.js` (Changed code · before: `L41959-L41960` → after: `L19718-L19719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19718-L19719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L19718-L19719) · [Before (L41959-L41960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41959-L41960)

```diff
-           function ST(TT, kT) {
-             console.log("customAnalyticsEvent currently does nothing")
+           function Bq() {
+             return Aq
```

#### 1129. `bundles/bloxd.io/main.js` (Changed code · before: `L41964-L41969` → after: `L19723-L19752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19723-L19752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L19723-L19752) · [Before (L41964-L41969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41964-L41969)

```diff
-             QT("logAnalytics", {
-               send_to: MT,
-               event_label: "initial_and_over_time_fps",
-               custom_parameter_fps_over_time: Math.round(TT),
-               custom_parameter_initial_fps: Math.round(kT)
-             }, IT)
+             if (/\s/.test(qq) || qq.startsWith("fa-")) {
+               const Eq = function(qq) {
+                 const Eq = qq.trim().split(/\s+/).filter(Boolean),
+                   gq = qq => qq in mq;
+                 let Yq = "solid";
+                 for (const Oq of Eq) gq(Oq) && (Yq = mq[Oq]);
+                 let lq = Eq.find((qq => !gq(qq) && null !== (0, Oq.f)(xq(qq), Yq)));
+                 if (void 0 === lq) {
+                   const qq = Eq.filter((qq => !gq(qq)));
+                   lq = qq[qq.length - 1]
+                 }
+                 const Aq = lq ? xq(lq) : "",
+                   cq = Eq.filter((qq => qq !== lq && !gq(qq) && qq.startsWith("fa-"))).join(" ");
+                 return {
+                   name: Aq,
+                   kit: Yq,
+ ... (14 more added lines; see GitHub link above)
```

#### 1130. `bundles/bloxd.io/main.js` (Changed code · before: `L41972-L41978` → after: `L19781-L19782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19781-L19782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L19781-L19782) · [Before (L41972-L41978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41972-L41978)

```diff
-           function aT(TT, kT) {
-             QT("logControllerUsed", {
-               send_to: MT,
-               event_label: TT,
-               custom_parameter_pad_family: TT,
-               custom_parameter_input_type: kT
-             }, "controller", "used")
+           function dq() {
+             return !(0, Yq.l)() && !(0, mq.c)()
```

#### 1131. `bundles/bloxd.io/main.js` (Changed code · before: `L41981-L41986` → after: `L19785-L19787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19785-L19787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L19785-L19787) · [Before (L41981-L41986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41981-L41986)

```diff
-           function FT(TT, kT) {
-             QT("logError", {
-               event_label: TT,
-               custom_parameter_severity: TT,
-               custom_parameter_details: kT.substring(0, 500)
-             }, "error", TT)
+           function jq() {
+             let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
+             return dq() && ((0, Yq.g)() || qq() < Bq)
```

#### 1132. `bundles/bloxd.io/main.js` (Changed code · before: `L41990-L41997` → after: `L19798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L19798) · [Before (L41990-L41997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L41990-L41997)

```diff
-             let {
-               type: kT,
-               location1: cT,
-               location2: lT,
-               location3: MT,
-               score: KT
-             } = TT;
-             console.log("progressionEvent currently does nothing")
+             return "true" === (null === qq || void 0 === qq ? void 0 : qq.fatal)
```

#### 1133. `bundles/bloxd.io/main.js` (Changed code · before: `L42001-L42008` → after: `L19804-L19806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19804-L19806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L19804-L19806) · [Before (L42001-L42008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L42001-L42008)

```diff
-             let {
-               type: kT,
-               resourceType: cT,
-               amount: lT,
-               category: MT,
-               itemName: KT
-             } = TT;
-             console.log("resourceEvent currently does nothing")
+             var Eq;
+             const gq = null !== (Eq = qq.toLowerCase().split("/")[1]) && void 0 !== Eq ? Eq : "";
+             return bq.has(gq) ? "home" : iq.has(gq) ? "game" : "play" === gq ? "play" : "other"
```

#### 1134. `bundles/bloxd.io/main.js` (Changed code · before: `L42011-L42018` → after: `L19809-L19810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19809-L19810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L19809-L19810) · [Before (L42011-L42018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L42011-L42018)

```diff
-           function wT(TT) {
-             let {
-               cat1: kT,
-               cat2: cT,
-               cat3: lT,
-               value: MT
-             } = TT, KT = kT;
-             cT && (KT += ":" + cT), lT && (KT += ":" + lT), ST()
+           function fq() {
+             return Zq("undefined" === typeof location ? "/" : location.pathname)
```

#### 1135. `bundles/bloxd.io/main.js` (Changed code · before: `L42022-L42031` → after: `L19815-L19840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19815-L19840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L19815-L19840) · [Before (L42022-L42031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L42022-L42031)

```diff
-             let {
-               leaveEventType: kT,
-               category: cT,
-               subCategory: lT,
-               value: MT
-             } = TT;
-             console.log(kT, cT, lT, MT), jT[kT] = {
-               category: cT,
-               subCategory: lT,
-               value: MT
+             const Eq = qq.payload;
+             if (!Eq.stacktrace) return qq;
+             const Yq = new URL(gq.p, location.href).href,
+               lq = Eq.stacktrace.frames.map((qq => function(qq, Eq) {
+                 const gq = aq.exec(qq.filename),
+                   Yq = gq && Vq.exec(qq.function);
+                 return gq && Yq ? {
+                   ...qq,
+                   filename: `app:///wasm/${Yq[1]}`,
+                   function: gq[1],
+                   lineno: 1,
+                   colno: parseInt(gq[2], 16) - Number(Yq[2])
+                 } : qq.filename.startsWith(Eq) ? {
+                   ...qq,
+                   filename: `app:///${qq.filename.slice(Eq.length).split(/[?#]/)[0]}`
+                 } : qq
+ ... (10 more added lines; see GitHub link above)
```

#### 1136. `bundles/bloxd.io/main.js` (Changed code · before: `L42035-L42036` → after: `L19844-L19845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19844-L19845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L19844-L19845) · [Before (L42035-L42036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L42035-L42036)

```diff
-           function bT() {
-             for (const TT in jT) {
+           function zq(qq) {
+             if ("exception" === qq.type) {
```

#### 1137. `bundles/bloxd.io/main.js` (Changed code · before: `L42038-L42043` → after: `L19847-L19861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19847-L19861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L19847-L19861) · [Before (L42038-L42043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L42038-L42043)

```diff
-                 category: kT,
-                 subCategory: cT,
-                 value: lT
-               } = jT[TT];
-               let MT = TT;
-               kT && (MT += ":" + kT), cT && (MT += ":" + cT), ST()
+                 context: Yq,
+                 stacktrace: lq
+               } = qq.payload;
+               if (! function(qq) {
+                   return void 0 !== (null === qq || void 0 === qq ? void 0 : qq.fatal)
+                 }(Yq)) {
+                 var Eq;
+                 const qq = (null !== (Eq = null === lq || void 0 === lq ? void 0 : lq.frames) && void 0 !== Eq ? Eq : []).find((qq => Nq.test(qq.filename)));
+                 if (qq && (gq = qq.filename, xq.b.some((qq => gq.includes(qq))))) return null
+               }
+               if (!nq(Yq)) {
+                 if (tq >= oq) return null;
+                 tq++
+               }
+               return Sq(Tq(qq))
```

#### 1138. `bundles/bloxd.io/main.js` (Changed code · before: `L42047-L42048` → after: `L19901-L19913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19901-L19913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L19901-L19913) · [Before (L42047-L42048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L42047-L42048)

```diff
-           function zT() {
-             bT(), jT = {}
+           function Sq(qq) {
+             var Eq;
+             const gq = null === (Eq = qq.meta.page) || void 0 === Eq ? void 0 : Eq.url;
+             return gq ? {
+               ...qq,
+               meta: {
+                 ...qq.meta,
+                 page: {
+                   ...qq.meta.page,
+                   url: gq.split(/[?#]/)[0]
+                 }
+               }
+             } : qq
```

#### 1139. `bundles/bloxd.io/main.js` (Changed code · before: `L42066-L42080` → after: `L19916-L19917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19916-L19917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L19916-L19917) · [Before (L42066-L42080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L42066-L42080)

```diff
-           function KT(TT, kT, cT) {
-             switch (TT) {
-               case "windows":
-                 return "intel" === kT ? `windows_intel_${cT()}` : "nvidia" === kT || "amd" === kT ? `windows_${kT}` : "other";
-               case "macos":
-                 return "apple" === kT ? "mac_apple" : "mac_other";
-               case "chrome_os":
-                 return "intel" === kT ? "chromeos_intel" : "chromeos_other";
-               case "android":
-                 return "qualcomm" === kT || "arm" === kT ? `android_${kT}` : "android_other";
-               case "ios":
-                 return "ios";
-               default:
-                 return "other"
-             }
+           function pq(qq) {
+             hq = qq
```

#### 1140. `bundles/bloxd.io/main.js` (Changed code · before: `L42135-L42136` → after: `L19921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L19921) · [Before (L42135-L42136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L42135-L42136)

```diff
-             var kT, cT;
-             return null === (kT = /\(0x(?:0000)?([0-9a-f]{4})\)/i.exec(TT)) || void 0 === kT || null === (cT = kT[1]) || void 0 === cT ? void 0 : cT.toLowerCase()
+             Qq = qq, null !== vq && Lq((() => {}), "Failed to name the player in Faro")
```

#### 1141. `bundles/bloxd.io/main.js` (Changed code · before: `L42139-L42162` → after: `L19924-L19970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19924-L19970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L19924-L19970) · [Before (L42139-L42162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L42139-L42162)

```diff
-           function AT(TT) {
-             const kT = TT.toLowerCase(),
-               cT = IT(kT);
-             if (void 0 !== cT) {
-               for (const [TT, kT, lT] of OT)
-                 if (TT.includes(cT)) return {
-                   family: kT,
-                   tier: lT
-                 };
-               for (const [TT, kT, lT] of yT)
-                 if (TT.includes(cT.slice(0, 2))) return {
-                   family: kT,
-                   tier: lT
-                 }
-             }
-             for (const [lT, MT, KT] of xT)
- ... (8 more removed lines; see GitHub link above)
+           function Lq(qq, Eq) {
+             (vq ??= gq.e(31).then((() => gq(6573))).then((qq => qq.initializeFaro({
+               url: uq,
+               app: {
+                 name: "bloxd-web",
+                 version: String(lq.e),
+                 release: String(lq.e),
+                 environment: (0, Yq.g)() ? "preprod" : "prod"
+               },
+               instrumentations: Hq ? [new qq.WebVitalsInstrumentation] : [],
+               webVitalsInstrumentation: {
+                 trackAttributionSources: !0
+               },
+               sessionTracking: {
+                 enabled: !1
+               },
+ ... (31 more added lines; see GitHub link above)
```

#### 1142. `bundles/bloxd.io/main.js` (Changed code · before: `L42167-L42173` → after: `L19974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L19974) · [Before (L42167-L42173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L42167-L42173)

```diff
-             var TT;
-             return CT ??= function() {
-               const TT = (0, lT.getOperatingSystem)();
-               if ("windows" !== TT) return tT(TT, (0, lT.getGpuVendor)());
-               const kT = (0, MT.r)();
-               return null === kT ? null : hT(kT)
-             }(), null !== (TT = CT) && void 0 !== TT ? TT : "other"
+             Hq && Lq((() => {}), "Failed to start web vitals logging")
```

#### 1143. `bundles/bloxd.io/main.js` (Changed code · before: `L42176-L42182` → after: `L19977-L19985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19977-L19985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L19977-L19985) · [Before (L42176-L42182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L42176-L42182)

```diff
-           function vT(TT) {
-             if (null !== CT) return CT;
-             const kT = (0, lT.getOperatingSystem)(),
-               cT = (0, MT.p)();
-             if ("windows" === kT) return cT ? hT(cT) : null;
-             const KT = TT || (null === cT || void 0 === cT ? void 0 : cT.vendor);
-             return KT ? tT(kT, (0, lT.normaliseGpuVendor)(KT)) : null
+           function Rq(qq, Eq, gq) {
+             Hq && Lq((Yq => {
+               Yq.api.pushMeasurement({
+                 type: qq,
+                 values: Eq
+               }, {
+                 context: gq
+               })
+             }), "Failed to log client measurement")
```

#### 1144. `bundles/bloxd.io/main.js` (Changed code · before: `L42185-L42186` → after: `L19988-L20006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R19988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L19988-L20006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L19988-L20006) · [Before (L42185-L42186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L42185-L42186)

```diff
-           function tT(TT, kT) {
-             return KT(TT, kT, (() => "unknown"))
+           function Uq(qq) {
+             let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+             if (Hq) try {
+               const gq = function(qq) {
+                   return qq instanceof Error ? qq : new Error("string" === typeof qq ? qq : String(qq))
+                 }(qq),
+                 Yq = `${gq.name}: ${gq.message}`;
+               if ((0, xq.f)(Yq)) return;
+               const lq = `${Yq}|${JSON.stringify(Eq)}`,
+                 Oq = nq(Eq);
+               if (Pq.has(lq) || !Oq && Pq.size - rq >= Wq) return;
+               Pq.add(lq), Oq && rq++, Lq((qq => {
+                 qq.api.pushError(gq, {
+                   context: Eq
+                 })
+               }), "Failed to log client error")
+ ... (3 more added lines; see GitHub link above)
```

#### 1145. `bundles/bloxd.io/main.js` (Changed code · before: `L42190` → after: `L20018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L20018) · [Before (L42190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L42190)

```diff
-             return KT("windows", (0, lT.normaliseGpuVendor)(TT.vendor), (() => AT(TT.renderer).tier))
+             return "TypeError: Load failed" === qq
```

#### 1146. `bundles/bloxd.io/main.js` (Changed code · before: `L42193-L42195` → after: `L20021-L20022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20021-L20022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L20021-L20022) · [Before (L42193-L42195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L42193-L42195)

```diff
-           function NT(TT, kT) {
-             const cT = TT * kT / 1e6;
-             return cT < 1 ? "under_1" : cT < 2 ? "1_to_2" : cT < 4 ? "2_to_4" : "4_plus"
+           function mq(qq) {
+             return lq.some((Eq => qq.includes(Eq)))
```

#### 1147. `bundles/bloxd.io/main.js` (Changed code · before: `L42197-L42198` → after: `L20024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L20024) · [Before (L42197-L42198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L42197-L42198)

```diff
-         },
-         298: (TT, kT, cT) => {
+         }, , , , , , , (qq, Eq, gq) => {
```

#### 1148. `bundles/bloxd.io/main.js` (Changed code · before: `L42200-L42202` → after: `L20026-L20029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20026-L20029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L20026-L20029) · [Before (L42200-L42202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L42200-L42202)

```diff
-             e: () => ST,
-             i: () => NT,
-             j: () => hT,
+             d: () => Yq,
+             f: () => cq,
+             g: () => Aq,
+             k: () => xq,
```

#### 1149. `bundles/bloxd.io/main.js` (Changed code · before: `L42206-L42371` → after: `L20033-L20034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20033-L20034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L20033-L20034) · [Before (L42206-L42371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L42206-L42371)

```diff
-           var lT = cT(118),
-             MT = cT(150),
-             KT = cT(197),
-             OT = cT(291);
-           const yT = [
-               [/mali-t\d/, "mali_midgard"],
-               [/\bg(31|51|52|71|72|76)\b/, "mali_bifrost"],
-               [/\bg(57|68|77|78|310|510|610|615|710|715)\b/, "mali_valhall"],
-               [/\bg(620|625|720|725|925)\b/, "mali_5th_gen"]
-             ],
-             fT = {
-               3: "adreno_3_5",
-               4: "adreno_3_5",
-               5: "adreno_3_5",
-               6: "adreno_6",
-               7: "adreno_7",
- ... (150 more removed lines; see GitHub link above)
+           const Yq = "long_animation_frame_worst",
+             lq = 100;
```

#### 1150. `bundles/bloxd.io/main.js` (Changed code · before: `L42374` → after: `L20037-L20039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20037-L20039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L20037-L20039) · [Before (L42374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L42374)

```diff
-             return "nvidia_pre_turing" === TT
+             let Eq = 0;
+             for (const gq of qq.scripts) Eq += gq.duration;
+             return Math.min(Eq, qq.duration)
```

#### 1151. `bundles/bloxd.io/main.js` (Changed code · before: `L42377-L42395` → after: `L20042-L20048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20042-L20048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L20042-L20048) · [Before (L42377-L42395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L42377-L42395)

```diff
-           function aT(TT, kT) {
-             if (TT) {
-               const kT = TT.trim(),
-                 cT = OT.e.test(kT),
-                 lT = function(TT) {
-                   var kT, cT, lT;
-                   const MT = /^angle \((.*)\)$/i.exec(TT);
-                   if (!MT) return TT;
-                   const KT = MT[1].split(", "),
-                     OT = null !== (kT = KT[1]) && void 0 !== kT ? kT : KT[0];
-                   return null !== (cT = null === (lT = /^vulkan [\d.]+ \((.*)\)$/i.exec(OT)) || void 0 === lT ? void 0 : lT[1]) && void 0 !== cT ? cT : OT.replace(/^angle metal renderer:\s*/i, "")
-                 }(kT.replace(OT.e, "")).replace(/\s+(direct3d\d*|d3d\d+|opengl|vulkan|metal)\b.*$/i, ""),
-                 MT = (0, OT.p)(lT),
-                 KT = `${void 0===MT?"":`:${MT}`}${cT?":similar":""}`;
-               return `${lT.replace(/\(0x[0-9a-f]+\)/gi,"").replace(/\((r|tm)\)|[\xae\u2122]/gi,"").toLowerCase().replace(/[^a-z0-9.-]+/g,"_").replace(/^_+|_+$/g,"").slice(0,64-KT.length)}${KT}`
-             }
- ... (3 more removed lines; see GitHub link above)
+           function mq(qq) {
+             if ("" === qq) return "";
+             let Eq;
+             try {
+               Eq = new URL(qq)
+             } catch {
+               return console.warn("A long animation frame's script has no absolute URL", qq.split(/[?#]/)[0]), qq.split(/[?#]/)[0].slice(0, lq)
```

#### 1152. `bundles/bloxd.io/main.js` (Changed code · before: `L42397` → after: `L20050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L20050) · [Before (L42397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L42397)

```diff
-             return null
+             return "data:" === Eq.protocol ? "data:" : "blob:" === Eq.protocol ? `blob:${Eq.origin}` : `${Eq.protocol}//${Eq.host}${Eq.pathname}`.slice(0, lq)
```

#### 1153. `bundles/bloxd.io/main.js` (Changed code · before: `L42418-L42433` → after: `L20053-L20057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20053-L20057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/main.js#L20053-L20057) · [Before (L42418-L42433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/main.js#L42418-L42433)

```diff
-             function OT(TT) {
-               if ("" === TT) return "";
-               let kT;
-               try {
-                 kT = new URL(TT)
-               } catch {
-                 return console.warn("A long animation frame's script has no absolute URL", TT.split(/[?#]/)[0]), TT.split(/[?#]/)[0].slice(0, MT)
-               }
-               return "data:" === kT.protocol ? "data:" : "blob:" === kT.protocol ? `blob:${kT.origin}` : `${kT.protocol}//${kT.host}${kT.pathname}`.slice(0, MT)
-             }
- 
-             function yT(TT, kT) {
-               return "classic-script" === kT || "module-script" === kT ? OT(TT) : TT.replace(/(\[src=)(.*)(\][^\]]*)$/, ((TT, kT, cT, lT) => `${kT}${function(TT){let kT;try{kT=new URL(TT)}catch{return""}return""===kT.host?"":`
-                     $ {
-                       kT.protocol
-                     } //${kT.host}`}(cT)}${lT}`)).slice(0,MT)}function fT(TT){return TT.slice(0,MT)}class xT{constructor(TT,kT){this.client=TT,this.send=kT,this.worst=null,this.longFrameCount=0,this.sent=!0,this.windowWorst=null,this.windowLongFrameCount=0}onEntry(TT){this.window … [truncated]
+           function xq(qq, Eq) {
+             return "classic-script" === Eq || "module-script" === Eq ? mq(qq) : qq.replace(/(\[src=)(.*)(\][^\]]*)$/, ((qq, Eq, gq, Yq) => `${Eq}${function(qq){let Eq;try{Eq=new URL(qq)}catch{return""}return""===Eq.host?"":`
+                   $ {
+                     Eq.protocol
+                   } //${Eq.host}`}(gq)}${Yq}`)).slice(0,lq)}function Aq(qq){return qq.slice(0,lq)}class cq{constructor(qq,Eq){this.client=qq,this.send=Eq,this.worst=null,this.longFrameCount=0,this.sent=!0,this.windowWorst=null,this.windowLongFrameCount=0}onEntry(qq){this.windowLo … [truncated]
```
