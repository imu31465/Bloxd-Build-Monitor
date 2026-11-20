# Changed — Bundle Modifications Report (Part 002 / 115)

- **Updated at**: `2026-11-21T00:51 JST`
- **Part**: `2 / 115` (**412** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 001](part-001.md) · [Part 003 →](part-003.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/103.js` (bcgkc.38229551 → bbb6l5.0244a119 · continued)

- **File**: `bundles/bloxd.io/chunks/js/103.js` (2760 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e)

#### 272. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L4842` → after: `L4842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR4842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L4842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L4842) · [Before (L4842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L4842)

```diff
-               return null !== cT && !cT.isStale && cT.playerCount > 0 && (lT = `${lT} ${hT("studioEventFlow:edgeShare",{share:NK(kT.playerCount/cT.playerCount)})}`), null === kT.medianDeltaMs ? lT : `${lT} ${hT("studioEventFlow:edgeTime",{time:Wk(kT.medianDeltaMs)})}`
+               return null !== gq && !gq.isStale && gq.playerCount > 0 && (Yq = `${Yq} ${dq("studioEventFlow:edgeShare",{share:dO(Eq.playerCount/gq.playerCount)})}`), null === Eq.medianDeltaMs ? Yq : `${Yq} ${dq("studioEventFlow:edgeTime",{time:XE(Eq.medianDeltaMs)})}`
```

#### 273. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L4850` → after: `L4850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR4850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L4850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L4850) · [Before (L4850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L4850)

```diff
-               return null !== (cT = kT.get(El(TT))) && void 0 !== cT ? cT : null
+               return null !== (gq = Eq.get(zY(qq))) && void 0 !== gq ? gq : null
```

#### 274. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L4866` → after: `L4866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR4866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L4866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L4866) · [Before (L4866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L4866)

```diff
-                   OT = null !== (kT = null === KT || void 0 === KT ? void 0 : KT.incomingEdges.get(El(TT.from))) && void 0 !== kT ? kT : null;
+                   mq = null !== (Eq = null === Oq || void 0 === Oq ? void 0 : Oq.incomingEdges.get(zY(qq.from))) && void 0 !== Eq ? Eq : null;
```

#### 275. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L4869` → after: `L4869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR4869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L4869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L4869) · [Before (L4869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L4869)

```diff
-                   value: null !== (MT = null === OT || void 0 === OT ? void 0 : OT.playerCount) && void 0 !== MT ? MT : null,
+                   value: null !== (lq = null === mq || void 0 === mq ? void 0 : mq.playerCount) && void 0 !== lq ? lq : null,
```

#### 276. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L4877` → after: `L4877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR4877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L4877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L4877) · [Before (L4877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L4877)

```diff
-           return null === tT ? TT : {
+           return null === Vq ? qq : {
```

#### 277. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L4894` → after: `L4894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR4894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L4894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L4894) · [Before (L4894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L4894)

```diff
-               children: [(0, Ak.jsx)(dl.d, {
+               children: [(0, BE.jsx)(LY.b, {
```

#### 278. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L4901` → after: `L4901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR4901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L4901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L4901) · [Before (L4901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L4901)

```diff
-             }), (0, Ak.jsx)(LT.b, {
+             }), (0, BE.jsx)(kq.c, {
```

#### 279. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L4907` → after: `L4907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR4907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L4907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L4907) · [Before (L4907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L4907)

```diff
-             children: [(0, Ak.jsx)(DT.e, {
+             children: [(0, BE.jsx)(Pq.d, {
```

#### 280. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L4912` → after: `L4912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR4912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L4912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L4912) · [Before (L4912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L4912)

```diff
-             children: [(0, Ak.jsx)(DT.e, {
+             children: [(0, BE.jsx)(Pq.d, {
```

#### 281. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L4918` → after: `L4918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR4918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L4918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L4918) · [Before (L4918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L4918)

```diff
-               children: [(0, Ak.jsx)(DT.e, {
+               children: [(0, BE.jsx)(Pq.d, {
```

#### 282. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L4921` → after: `L4921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR4921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L4921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L4921) · [Before (L4921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L4921)

```diff
-             }), (0, Ak.jsx)(ST.P, {
+             }), (0, BE.jsx)(oq.Q, {
```

#### 283. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L4934` → after: `L4934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR4934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L4934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L4934) · [Before (L4934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L4934)

```diff
-           }), `${kT} event flow.json`)
+           }), `${Eq} event flow.json`)
```

#### 284. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L4949` → after: `L4949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR4949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L4949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L4949) · [Before (L4949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L4949)

```diff
-                 return [cT(lT.from), cT(lT.to), null !== (kT = null === KT || void 0 === KT ? void 0 : KT.medianDeltaMs) && void 0 !== kT ? kT : null, OT]
+                 return [gq(Yq.from), gq(Yq.to), null !== (Eq = null === Oq || void 0 === Oq ? void 0 : Oq.medianDeltaMs) && void 0 !== Eq ? Eq : null, mq]
```

#### 285. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L4961` → after: `L4961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR4961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L4961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L4961) · [Before (L4961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L4961)

```diff
-             return TT.edges.length >= Gl ? TT : {
+             return qq.edges.length >= MY ? qq : {
```

#### 286. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5013` → after: `L5013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5013) · [Before (L5013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5013)

```diff
-         if (Math.abs(kT) >= cT) return `${Number((kT/lT).toPrecision(3)).toLocaleString("en-GB")}${MT}`;
+         if (Math.abs(Eq) >= gq) return `${Number((Eq/Yq).toPrecision(3)).toLocaleString("en-GB")}${lq}`;
```

#### 287. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5020` → after: `L5020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5020) · [Before (L5020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5020)

```diff
-       return kT >= 60 ? `${TT} min-${kT/60} h` : `${TT}-${kT} min`
+       return Eq >= 60 ? `${qq} min-${Eq/60} h` : `${qq}-${Eq} min`
```

#### 288. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5029` → after: `L5029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5029) · [Before (L5029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5029)

```diff
-       return `${TT} / ${""===kT?cT:kT}`
+       return `${qq} / ${""===Eq?gq:Eq}`
```

#### 289. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5044` → after: `L5044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5044) · [Before (L5044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5044)

```diff
-       }))), PK, !0) + (cT ? oK : 0)
+       }))), tO, !0) + (gq ? iO : 0)
```

#### 290. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5096` → after: `L5096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5096) · [Before (L5096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5096)

```diff
-       } = (0, jT.B)();
+       } = (0, Nq.v)();
```

#### 291. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5102` → after: `L5102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5102) · [Before (L5102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5102)

```diff
-     var EK = cT(6194);
+     var zO = gq(6091);
```

#### 292. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5128` → after: `L5128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5128) · [Before (L5128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5128)

```diff
-       } = (0, jT.B)();
+       } = (0, Nq.v)();
```

#### 293. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5143` → after: `L5143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5143) · [Before (L5143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5143)

```diff
-       return [null !== (kT = null === TT || void 0 === TT ? void 0 : TT.median) && void 0 !== kT ? kT : null, null !== (cT = null === TT || void 0 === TT ? void 0 : TT.p25) && void 0 !== cT ? cT : null, null !== (lT = null === TT || void 0 === TT ? void 0 : TT.p75) && void 0 !==  … [truncated]
+       return [null !== (Eq = null === qq || void 0 === qq ? void 0 : qq.median) && void 0 !== Eq ? Eq : null, null !== (gq = null === qq || void 0 === qq ? void 0 : qq.p25) && void 0 !== gq ? gq : null, null !== (Yq = null === qq || void 0 === qq ? void 0 : qq.p75) && void 0 !==  … [truncated]
```

#### 294. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5154-L5155` → after: `L5154-L5155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5154-L5155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5154-L5155) · [Before (L5154-L5155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5154-L5155)

```diff
-           yT = null !== (cT = [...XK].reverse().find((TT => TT <= MT))) && void 0 !== cT ? cT : 0,
-           fT = null !== (lT = XK.find((TT => TT >= KT))) && void 0 !== lT ? lT : KT;
+           xq = null !== (gq = [...GO].reverse().find((qq => qq <= lq))) && void 0 !== gq ? gq : 0,
+           Aq = null !== (Yq = GO.find((qq => qq >= Oq))) && void 0 !== Yq ? Yq : Oq;
```

#### 295. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5175` → after: `L5175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5175) · [Before (L5175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5175)

```diff
-       } = (0, jT.B)(), OT = [{
+       } = (0, Nq.v)(), mq = [{
```

#### 296. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5205` → after: `L5205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5205) · [Before (L5205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5205)

```diff
-       } = (0, jT.B)(), yT = cT.length - 1, fT = cT.map(((TT, kT) => {
+       } = (0, Nq.v)(), xq = gq.length - 1, Aq = gq.map(((qq, Eq) => {
```

#### 297. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5218` → after: `L5218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5218) · [Before (L5218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5218)

```diff
-           partialWhisker: xT ? fT : null,
+           partialWhisker: cq ? Aq : null,
```

#### 298. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5222` → after: `L5222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5222) · [Before (L5222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5222)

```diff
-       return (0, Ak.jsx)(RT.b, {
+       return (0, BE.jsx)(Rq.d, {
```

#### 299. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5225` → after: `L5225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5225) · [Before (L5225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5225)

```diff
-         children: (0, Ak.jsxs)(gT.d, {
+         children: (0, BE.jsxs)(Uq.e, {
```

#### 300. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5228` → after: `L5228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5228) · [Before (L5228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5228)

```diff
-           children: [(0, Ak.jsx)(UT.b, {
+           children: [(0, BE.jsx)(Fq.c, {
```

#### 301. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5233` → after: `L5233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5233) · [Before (L5233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5233)

```diff
-           }), (0, Ak.jsx)(YT.c, {
+           }), (0, BE.jsx)(sq.b, {
```

#### 302. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5236` → after: `L5236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5236) · [Before (L5236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5236)

```diff
-             UA: {
+             SB: {
```

#### 303. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5243` → after: `L5243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5243) · [Before (L5243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5243)

```diff
-             UA: {
+             SB: {
```

#### 304. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5250` → after: `L5250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5250) · [Before (L5250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5250)

```diff
-           }), (0, Ak.jsx)(WT.b, {
+           }), (0, BE.jsx)(wq.e, {
```

#### 305. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5272` → after: `L5272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5272) · [Before (L5272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5272)

```diff
-           }), (0, Ak.jsx)(nT.b, {
+           }), (0, BE.jsx)(Kq.d, {
```

#### 306. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5280` → after: `L5280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5280) · [Before (L5280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5280)

```diff
-           }), (0, Ak.jsx)(nT.b, {
+           }), (0, BE.jsx)(Kq.d, {
```

#### 307. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5288` → after: `L5288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5288) · [Before (L5288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5288)

```diff
-           }), (0, Ak.jsx)(pT.d, {
+           }), (0, BE.jsx)(Cq.b, {
```

#### 308. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5298` → after: `L5298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5298) · [Before (L5298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5298)

```diff
-           }), (0, Ak.jsx)(pT.d, {
+           }), (0, BE.jsx)(Cq.b, {
```

#### 309. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5313` → after: `L5313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5313) · [Before (L5313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5313)

```diff
-             children: (0, Ak.jsx)(EK.b, {
+             children: (0, BE.jsx)(zO.e, {
```

#### 310. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5321` → after: `L5321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5321) · [Before (L5321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5321)

```diff
-           }), (0, Ak.jsx)(pT.d, {
+           }), (0, BE.jsx)(Cq.b, {
```

#### 311. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5336` → after: `L5336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5336) · [Before (L5336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5336)

```diff
-             children: (0, Ak.jsx)(EK.b, {
+             children: (0, BE.jsx)(zO.e, {
```

#### 312. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5362` → after: `L5362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5362) · [Before (L5362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5362)

```diff
-       } = (0, jT.B)(), [fT, xT] = (0, lT.useState)("minute"), IT = UK(MT), {
+       } = (0, Nq.v)(), [Aq, cq] = (0, Yq.useState)("minute"), uq = UO(lq), {
```

#### 313. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5404` → after: `L5404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5404) · [Before (L5404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5404)

```diff
-           children: [(0, Ak.jsx)(ST.P, {
+           children: [(0, BE.jsx)(oq.Q, {
```

#### 314. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5410` → after: `L5410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5410) · [Before (L5410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5410)

```diff
-           }), (0, Ak.jsx)(ST.P, {
+           }), (0, BE.jsx)(oq.Q, {
```

#### 315. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5421` → after: `L5421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5421) · [Before (L5421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5421)

```diff
-             children: [(0, Ak.jsx)(dl.d, {
+             children: [(0, BE.jsx)(LY.b, {
```

#### 316. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5428` → after: `L5428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5428) · [Before (L5428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5428)

```diff
-           }), (0, Ak.jsx)(LT.b, {
+           }), (0, BE.jsx)(kq.c, {
```

#### 317. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5459` → after: `L5459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5459) · [Before (L5459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5459)

```diff
-       return TO(TT, 10 * TT).find((cT => kT ? cT >= TT : cT > TT))
+       return DO(qq, 10 * qq).find((gq => Eq ? gq >= qq : gq > qq))
```

#### 318. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5480` → after: `L5480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5480) · [Before (L5480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5480)

```diff
-       } = (0, jT.B)(), {
+       } = (0, Nq.v)(), {
```

#### 319. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5483` → after: `L5483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5483) · [Before (L5483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5483)

```diff
-       } = (0, vT.b)(), xT = KT ? "latest" : "total", IT = wl((() => dT.getGameEventValueSpread(yT, {
+       } = (0, aq.c)(), cq = Oq ? "latest" : "total", uq = rY((() => Jq.getGameEventValueSpread(xq, {
```

#### 320. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5489-L5490` → after: `L5489-L5490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5489-L5490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5489-L5490) · [Before (L5489-L5490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5489-L5490)

```diff
-       })), [cT, lT.gameCategory, lT.eventType, lT.eventValue, xT], !fT, "Failed to load game event value spread"), AT = "loaded" === IT.status ? IT.data : null, CT = (null !== (kT = null === AT || void 0 === AT ? void 0 : AT.bins) && void 0 !== kT ? kT : []).map(((TT, kT) => {
-         let cT = `${PK(TT.from)} \u2013 ${PK(TT.to)}`;
+       })), [gq, Yq.gameCategory, Yq.eventType, Yq.eventValue, cq], !Aq, "Failed to load game event value spread"), Bq = "loaded" === uq.status ? uq.data : null, Wq = (null !== (Eq = null === Bq || void 0 === Bq ? void 0 : Bq.bins) && void 0 !== Eq ? Eq : []).map(((qq, Eq) => {
+         let gq = `${tO(qq.from)} \u2013 ${tO(qq.to)}`;
```

#### 321. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5513` → after: `L5513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5513) · [Before (L5513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5513)

```diff
-       })), void 0 !== tT && (NT += ` ${OT("studioEventValues:spreadTop",{from:PK(tT.from),to:PK(tT.to)})}`);
+       })), void 0 !== Vq && (jq += ` ${mq("studioEventValues:spreadTop",{from:tO(Vq.from),to:tO(Vq.to)})}`);
```

#### 322. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5531` → after: `L5531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5531) · [Before (L5531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5531)

```diff
-         children: null !== AT && (0, Ak.jsx)(RT.b, {
+         children: null !== Bq && (0, BE.jsx)(Rq.d, {
```

#### 323. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5534` → after: `L5534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5534) · [Before (L5534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5534)

```diff
-           children: (0, Ak.jsxs)(sT.b, {
+           children: (0, BE.jsxs)(Dq.d, {
```

#### 324. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5543` → after: `L5543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5543) · [Before (L5543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5543)

```diff
-             children: [(0, Ak.jsx)(UT.b, {
+             children: [(0, BE.jsx)(Fq.c, {
```

#### 325. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5548` → after: `L5548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5548) · [Before (L5548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5548)

```diff
-             }), (0, Ak.jsx)(YT.c, {
+             }), (0, BE.jsx)(sq.b, {
```

#### 326. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5552` → after: `L5552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5552) · [Before (L5552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5552)

```diff
-               UA: {
+               SB: {
```

#### 327. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5557` → after: `L5557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5557) · [Before (L5557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5557)

```diff
-                 return null !== (kT = null === (cT = CT[TT]) || void 0 === cT ? void 0 : cT.label) && void 0 !== kT ? kT : ""
+                 return null !== (Eq = null === (gq = Wq[qq]) || void 0 === gq ? void 0 : gq.label) && void 0 !== Eq ? Eq : ""
```

#### 328. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5562` → after: `L5562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5562) · [Before (L5562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5562)

```diff
-               UA: {
+               SB: {
```

#### 329. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5569` → after: `L5569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5569) · [Before (L5569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5569)

```diff
-             }), (0, Ak.jsx)(WT.b, {
+             }), (0, BE.jsx)(wq.e, {
```

#### 330. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5593` → after: `L5593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5593) · [Before (L5593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5593)

```diff
-             }), (0, Ak.jsx)(Tk.d, {
+             }), (0, BE.jsx)(qE.b, {
```

#### 331. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5597` → after: `L5597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5597) · [Before (L5597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5597)

```diff
-               children: CT.map((TT => (0, Ak.jsx)(kk.d, {
+               children: Wq.map((qq => (0, BE.jsx)(EE.c, {
```

#### 332. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5601` → after: `L5601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5601) · [Before (L5601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5601)

```diff
-             }), CT.length > 0 && (0, Ak.jsx)(iT.b, {
+             }), Wq.length > 0 && (0, BE.jsx)(Iq.c, {
```

#### 333. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5655` → after: `L5655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5655) · [Before (L5655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5655)

```diff
-       } = (0, jT.B)(), fT = function(TT, kT) {
+       } = (0, Nq.v)(), Aq = function(qq, Eq) {
```

#### 334. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5679` → after: `L5679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5679) · [Before (L5679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5679)

```diff
-             ...(0, ST.X)(),
+             ...(0, oq.V)(),
```

#### 335. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5691` → after: `L5691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5691) · [Before (L5691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5691)

```diff
-           }, (0, Ak.jsx)(DT.e, {
+           }, (0, BE.jsx)(Pq.d, {
```

#### 336. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5747` → after: `L5747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5747) · [Before (L5747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5747)

```diff
-       } = (0, jT.B)(), MT = KO(kT, cT);
+       } = (0, Nq.v)(), lq = lm(Eq, gq);
```

#### 337. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5752` → after: `L5752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5752) · [Before (L5752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5752)

```diff
-           children: [(0, Ak.jsx)(DT.e, {
+           children: [(0, BE.jsx)(Pq.d, {
```

#### 338. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5780` → after: `L5780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5780) · [Before (L5780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5780)

```diff
-       return (0, Ak.jsx)(RT.b, {
+       return (0, BE.jsx)(Rq.d, {
```

#### 339. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5783` → after: `L5783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5783) · [Before (L5783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5783)

```diff
-         children: (0, Ak.jsxs)(gT.d, {
+         children: (0, BE.jsxs)(Uq.e, {
```

#### 340. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5786` → after: `L5786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5786) · [Before (L5786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5786)

```diff
-           children: [(0, Ak.jsx)(UT.b, {
+           children: [(0, BE.jsx)(Fq.c, {
```

#### 341. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5791` → after: `L5791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5791) · [Before (L5791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5791)

```diff
-           }), (0, Ak.jsx)(YT.c, {
+           }), (0, BE.jsx)(sq.b, {
```

#### 342. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5794` → after: `L5794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5794) · [Before (L5794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5794)

```diff
-             UA: {
+             SB: {
```

#### 343. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5801` → after: `L5801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5801) · [Before (L5801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5801)

```diff
-             UA: {
+             SB: {
```

#### 344. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5806` → after: `L5806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5806) · [Before (L5806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5806)

```diff
-           }), (0, Ak.jsx)(WT.b, {
+           }), (0, BE.jsx)(wq.e, {
```

#### 345. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5823` → after: `L5823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5823) · [Before (L5823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5823)

```diff
-           }), (0, Ak.jsx)(pT.d, {
+           }), (0, BE.jsx)(Cq.b, {
```

#### 346. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5833` → after: `L5833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5833) · [Before (L5833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5833)

```diff
-           }), (0, Ak.jsx)(pT.d, {
+           }), (0, BE.jsx)(Cq.b, {
```

#### 347. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5864` → after: `L5864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5864) · [Before (L5864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5864)

```diff
-       } = (0, jT.B)(), [xT, IT] = (0, lT.useState)(!1), AT = VK(MT), CT = UK(yT), vT = cT.byDay.length - 1, tT = cT.byDay.map(((TT, kT) => ({
+       } = (0, Nq.v)(), [cq, uq] = (0, Yq.useState)(!1), Bq = TO(lq), Wq = UO(xq), aq = gq.byDay.length - 1, Vq = gq.byDay.map(((qq, Eq) => ({
```

#### 348. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5893` → after: `L5893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5893) · [Before (L5893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5893)

```diff
-         return MT.reduce(((TT, kT) => TT + (null !== kT && void 0 !== kT ? kT : 0)), 0) / MT.length
+         return lq.reduce(((qq, Eq) => qq + (null !== Eq && void 0 !== Eq ? Eq : 0)), 0) / lq.length
```

#### 349. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5896` → after: `L5896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5896) · [Before (L5896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5896)

```diff
-         value: PK(null !== (kT = wT[vT]) && void 0 !== kT ? kT : 0)
+         value: tO(null !== (Eq = vq[aq]) && void 0 !== Eq ? Eq : 0)
```

#### 350. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5915` → after: `L5915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5915) · [Before (L5915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5915)

```diff
-           return [yk(TT, "1d"), ...BK(null !== (lT = cT.byDay[kT]) && void 0 !== lT ? lT : null)]
+           return [xE(qq, "1d"), ...sO(null !== (Yq = gq.byDay[Eq]) && void 0 !== Yq ? Yq : null)]
```

#### 351. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5928` → after: `L5928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5928) · [Before (L5928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5928)

```diff
-           children: [(0, Ak.jsx)(ST.P, {
+           children: [(0, BE.jsx)(oq.Q, {
```

#### 352. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5934` → after: `L5934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5934) · [Before (L5934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5934)

```diff
-           }), (0, Ak.jsx)(ST.P, {
+           }), (0, BE.jsx)(oq.Q, {
```

#### 353. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5956-L5957` → after: `L5956-L5957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5956-L5957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5956-L5957) · [Before (L5956-L5957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5956-L5957)

```diff
-     var CO = cT(6449),
-       jO = cT(4831);
+     var Bm = gq(6317),
+       Wm = gq(4701);
```

#### 354. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5960` → after: `L5960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5960) · [Before (L5960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5960)

```diff
-       for (const lT of Object.values(null !== kT && void 0 !== kT ? kT : {}))
+       for (const Yq of Object.values(null !== Eq && void 0 !== Eq ? Eq : {}))
```

#### 355. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5963` → after: `L5963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5963) · [Before (L5963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5963)

```diff
-           const lT = null !== (cT = TT.get(kT)) && void 0 !== cT ? cT : new Set;
+           const Yq = null !== (gq = qq.get(Eq)) && void 0 !== gq ? gq : new Set;
```

#### 356. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5977` → after: `L5977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5977) · [Before (L5977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5977)

```diff
-           const TT = null !== (cT = kT.get(lT.eventType)) && void 0 !== cT ? cT : new Set;
+           const qq = null !== (gq = Eq.get(Yq.eventType)) && void 0 !== gq ? gq : new Set;
```

#### 357. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L5983` → after: `L5983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR5983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L5983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L5983) · [Before (L5983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L5983)

```diff
-           const OT = null !== (cT = MT.get(lT)) && void 0 !== cT ? cT : new Set;
+           const mq = null !== (gq = lq.get(Yq)) && void 0 !== gq ? gq : new Set;
```

#### 358. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L6004` → after: `L6004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR6004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L6004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L6004) · [Before (L6004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L6004)

```diff
-       QO = new RegExp(`^${NO}\\s*(?:(?:->|\u2192|\u2013|-|to)\\s*${NO}\\d|(?:and|or|,)\\s*${NO}\\d+${NO}(?=\\s*(?:,|and\\b|or\\b|[.;:!?)[]|$)))`, "i"),
+       jm = new RegExp(`^${dm}\\s*(?:(?:->|\u2192|\u2013|-|to)\\s*${dm}\\d|(?:and|or|,)\\s*${dm}\\d+${dm}(?=\\s*(?:,|and\\b|or\\b|[.;:!?)[]|$)))`, "i"),
```

#### 359. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L6010` → after: `L6010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR6010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L6010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L6010) · [Before (L6010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L6010)

```diff
-       const MT = (0, CO.j)(cT),
+       const lq = (0, Bm.l)(gq),
```

#### 360. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L6014-L6016` → after: `L6014-L6016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR6014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L6014-L6016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L6014-L6016) · [Before (L6014-L6016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L6014-L6016)

```diff
-         fT = new RegExp(`${(0,CO.j)(kT)}${NO}${OT}${NO}${MT}${hO}`, yT),
-         xT = (0, jO.m)("\\w-"),
-         IT = (0, jO.h)(TT, fT, xT),
+         Aq = new RegExp(`${(0,Bm.l)(Eq)}${dm}${mq}${dm}${lq}${Vm}`, xq),
+         cq = (0, Wm.i)("\\w-"),
+         uq = (0, Wm.d)(qq, Aq, cq),
```

#### 361. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L6018` → after: `L6018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR6018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L6018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L6018) · [Before (L6018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L6018)

```diff
-       return void 0 !== AT && AT !== KT && IT.push(...(0, jO.h)(TT, new RegExp(`${AT}s?${NO}\\s+${NO}${MT}${hO}`, "gi"), xT)), /[A-Za-z]/.test(cT) && IT.push(...TT.matchAll(new RegExp(`[\`'"\u201c\u2018]${MT}[\`'"\u201d\u2019]`, "gi"))),
+       return void 0 !== Bq && Bq !== Oq && uq.push(...(0, Wm.d)(qq, new RegExp(`${Bq}s?${dm}\\s+${dm}${lq}${Vm}`, "gi"), cq)), /[A-Za-z]/.test(gq) && uq.push(...qq.matchAll(new RegExp(`[\`'"\u201c\u2018]${lq}[\`'"\u201d\u2019]`, "gi"))),
```

#### 362. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L6021` → after: `L6021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR6021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L6021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L6021) · [Before (L6021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L6021)

```diff
-         }(cT) && IT.push(...(0, jO.h)(TT, new RegExp(`${MT}${hO}`, "gi"), xT)), IT
+         }(gq) && uq.push(...(0, Wm.d)(qq, new RegExp(`${lq}${Vm}`, "gi"), cq)), uq
```

#### 363. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L6026` → after: `L6026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR6026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L6026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L6026) · [Before (L6026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L6026)

```diff
-       const KT = (null !== (lT = null === cT || void 0 === cT || null === (MT = cT.events.find((TT => TT.eventType === kT))) || void 0 === MT ? void 0 : MT.values) && void 0 !== lT ? lT : []).filter((cT => aO(TT, kT, cT).length > 0));
+       const Oq = (null !== (Yq = null === gq || void 0 === gq || null === (lq = gq.events.find((qq => qq.eventType === Eq))) || void 0 === lq ? void 0 : lq.values) && void 0 !== Yq ? Yq : []).filter((gq => Pm(qq, Eq, gq).length > 0));
```

#### 364. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L6030` → after: `L6030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR6030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L6030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L6030) · [Before (L6030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L6030)

```diff
-         const lT = null !== (cT = kT.index) && void 0 !== cT ? cT : 0;
+         const Yq = null !== (gq = Eq.index) && void 0 !== gq ? gq : 0;
```

#### 365. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L6043` → after: `L6043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR6043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L6043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L6043) · [Before (L6043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L6043)

```diff
-         return (null !== (MT = null === lT || void 0 === lT ? void 0 : lT.heatmaps) && void 0 !== MT ? MT : []).some((lT => lT.gameCategory === TT && lT.eventType === kT && lT.values.includes(cT)))
+         return (null !== (lq = null === Yq || void 0 === Yq ? void 0 : Yq.heatmaps) && void 0 !== lq ? lq : []).some((Yq => Yq.gameCategory === qq && Yq.eventType === Eq && Yq.values.includes(gq)))
```

#### 366. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L6045` → after: `L6045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR6045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L6045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L6045) · [Before (L6045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L6045)

```diff
-       return KT ? TT : {
+       return Oq ? qq : {
```

#### 367. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L6055` → after: `L6055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR6055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L6055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L6055) · [Before (L6055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L6055)

```diff
-       return null !== TT.gameCategory ? lT(TT.gameCategory) ? TT.gameCategory : null : null === TT.eventType ? null : lT(Hl) ? Hl : null !== (cT = Object.keys(kT).sort().find(lT)) && void 0 !== cT ? cT : null
+       return null !== qq.gameCategory ? Yq(qq.gameCategory) ? qq.gameCategory : null : null === qq.eventType ? null : Yq(ZY) ? ZY : null !== (gq = Object.keys(Eq).sort().find(Yq)) && void 0 !== gq ? gq : null
```

#### 368. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L6061` → after: `L6061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR6061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L6061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L6061) · [Before (L6061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L6061)

```diff
-         lT = (null !== kT && void 0 !== kT ? kT : []).filter((TT => null !== cT && TT.eventTypes.includes(cT)));
+         Yq = (null !== Eq && void 0 !== Eq ? Eq : []).filter((qq => null !== gq && qq.eventTypes.includes(gq)));
```

#### 369. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L6071` → after: `L6071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR6071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L6071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L6071) · [Before (L6071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L6071)

```diff
-       return `${function(TT){let kT=0;for(const cT of TT.matchAll(bO))kT=cT.index+cT[0].length;return TT.slice(kT)}(TT.trimEnd())} ${cT?"":function(TT){const kT=TT.search(/[.!?](?=\s|$)|\n/);return-1===kT?TT:TT.slice(0,kT)}(kT)}`
+       return `${function(qq){let Eq=0;for(const gq of qq.matchAll(nm))Eq=gq.index+gq[0].length;return qq.slice(Eq)}(qq.trimEnd())} ${gq?"":function(qq){const Eq=qq.search(/[.!?](?=\s|$)|\n/);return-1===Eq?qq:qq.slice(0,Eq)}(Eq)}`
```

#### 370. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L6076` → after: `L6076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR6076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L6076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L6076) · [Before (L6076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L6076)

```diff
-       return (0, jO.h)(TT, new RegExp(`${kT}(?![\\w-])${lT}`, cT), (0, jO.m)("\\w-")).length > 0
+       return (0, Wm.d)(qq, new RegExp(`${Eq}(?![\\w-])${Yq}`, gq), (0, Wm.i)("\\w-")).length > 0
```

#### 371. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L6081` → after: `L6081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR6081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L6081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L6081) · [Before (L6081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L6081)

```diff
-         return JO(TT, (0, CO.j)(kT), "i")
+         return im(qq, (0, Bm.l)(Eq), "i")
```

#### 372. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L6085-L6086` → after: `L6085-L6086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR6085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L6085-L6086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L6085-L6086) · [Before (L6085-L6086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L6085-L6086)

```diff
-         const cT = (0, CO.j)(kT);
-         return !(![...TT.matchAll(/`([^`\n]+)`/g)].some((TT => new RegExp(`^\\s*${cT}(?::\\s*\\S.*| \\d+)?\\s*$`).test(TT[1]))) && !new RegExp(`["'\u201c\u2018]${cT}["'\u201d\u2019]`).test(TT)) || !(! function(TT) {
+         const gq = (0, Bm.l)(Eq);
+         return !(![...qq.matchAll(/`([^`\n]+)`/g)].some((qq => new RegExp(`^\\s*${gq}(?::\\s*\\S.*| \\d+)?\\s*$`).test(qq[1]))) && !new RegExp(`["'\u201c\u2018]${gq}["'\u201d\u2019]`).test(qq)) || !(! function(qq) {
```

#### 373. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L6088` → after: `L6088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR6088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L6088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L6088) · [Before (L6088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L6088)

```diff
-         }(kT) || !JO(TT, cT, "")) || JO(TT, cT, "i", "(?:\\s+\\d|:\\s*\\w|\\s+events?\\b)") || new RegExp(`\\bevents?\\s+${cT}(?![\\w-])`, "i").test(TT)
+         }(Eq) || !im(qq, gq, "")) || im(qq, gq, "i", "(?:\\s+\\d|:\\s*\\w|\\s+events?\\b)") || new RegExp(`\\bevents?\\s+${gq}(?![\\w-])`, "i").test(qq)
```

#### 374. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L6098` → after: `L6098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR6098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L6098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L6098) · [Before (L6098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L6098)

```diff
-         yT = `${TT.slice(TT.lastIndexOf("\n")+1)} ${kT.split("\n")[0]}`,
+         xq = `${qq.slice(qq.lastIndexOf("\n")+1)} ${Eq.split("\n")[0]}`,
```

#### 375. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L6100` → after: `L6100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR6100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L6100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L6100) · [Before (L6100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L6100)

```diff
-         xT = void 0 === fT ? null !== (MT = oO(yT, KT)) && void 0 !== MT ? MT : null : fT;
+         cq = void 0 === Aq ? null !== (lq = Zm(xq, Oq)) && void 0 !== lq ? lq : null : Aq;
```

#### 376. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L6104` → after: `L6104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR6104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L6104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L6104) · [Before (L6104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L6104)

```diff
-         eventValue: FO(void 0 === fT ? yT : OT, xT, lT)
+         eventValue: Qm(void 0 === Aq ? xq : mq, cq, Yq)
```

#### 377. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L6169` → after: `L6169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR6169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L6169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L6169) · [Before (L6169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L6169)

```diff
-           selection: null !== OT && void 0 !== OT ? OT : XO,
+           selection: null !== mq && void 0 !== mq ? mq : Lm,
```

#### 378. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L6232` → after: `L6232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR6232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L6232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L6232) · [Before (L6232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L6232)

```diff
-       } = (0, jT.B)(), {
+       } = (0, Nq.v)(), {
```

#### 379. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L6235-L6236` → after: `L6235-L6236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR6235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L6235-L6236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L6235-L6236) · [Before (L6235-L6236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L6235-L6236)

```diff
-       } = (0, vT.b)(), [QT, DT] = (0, lT.useState)(!1), FT = wl((() => dT.getGameEventValues(hT, OT)), [OT], !NT, "Failed to load game event values"), rT = wl((() => dT.getGamePlayerEventValues(hT, OT)), [OT], !NT, "Failed to load game player event values"), PT = "loaded" === FT. … [truncated]
-         events: null !== (kT = null === PT || void 0 === PT ? void 0 : PT.eventValues) && void 0 !== kT ? kT : null,
+       } = (0, aq.c)(), [Hq, Pq] = (0, Yq.useState)(!1), yq = rY((() => Jq.getGameEventValues(dq, mq)), [mq], !jq, "Failed to load game event values"), tq = rY((() => Jq.getGamePlayerEventValues(dq, mq)), [mq], !jq, "Failed to load game player event values"), rq = "loaded" === yq. … [truncated]
+         events: null !== (Eq = null === rq || void 0 === rq ? void 0 : rq.eventValues) && void 0 !== Eq ? Eq : null,
```

#### 380. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L6240` → after: `L6240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR6240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L6240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L6240) · [Before (L6240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L6240)

```diff
-       }), zT = IK(null !== (cT = null === PT || void 0 === PT ? void 0 : PT.eventValues) && void 0 !== cT ? cT : null, yT);
+       }), bq = cO(null !== (gq = null === rq || void 0 === rq ? void 0 : rq.eventValues) && void 0 !== gq ? gq : null, xq);
```

#### 381. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L6257` → after: `L6257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR6257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L6257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L6257) · [Before (L6257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L6257)

```diff
-           children: [(0, Ak.jsx)(ST.P, {
+           children: [(0, BE.jsx)(oq.Q, {
```

#### 382. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L6263` → after: `L6263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR6263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L6263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L6263) · [Before (L6263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L6263)

```diff
-           }), (0, Ak.jsx)(ST.P, {
+           }), (0, BE.jsx)(oq.Q, {
```

#### 383. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L6269` → after: `L6269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR6269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L6269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L6269) · [Before (L6269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L6269)

```diff
-           }), (0, Ak.jsx)(LT.b, {
+           }), (0, BE.jsx)(kq.c, {
```

#### 384. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L6276` → after: `L6276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR6276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L6276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L6276) · [Before (L6276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L6276)

```diff
-           children: [null !== PT && null !== zT ? JT : (0, Ak.jsx)("div", {}), bT]
+           children: [null !== rq && null !== bq ? iq : (0, BE.jsx)("div", {}), nq]
```

#### 385. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L6284` → after: `L6284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR6284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L6284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L6284) · [Before (L6284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L6284)

```diff
-           children: (0, Ak.jsx)(aT.d, {})
+           children: (0, BE.jsx)(Qq.e, {})
```

#### 386. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L6288` → after: `L6288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR6288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L6288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L6288) · [Before (L6288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L6288)

```diff
-         return "loading" === FT.status ? TT = eT : "error" === FT.status && (TT = HT(tT("studio:statsUnavailable"))), (0, Ak.jsxs)("div", {
+         return "loading" === yq.status ? qq = Mq : "error" === yq.status && (qq = fq(Vq("studio:statsUnavailable"))), (0, BE.jsxs)("div", {
```

#### 387. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L6293` → after: `L6293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR6293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L6293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L6293) · [Before (L6293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L6293)

```diff
-       const GT = null !== (MT = null === mT || void 0 === mT ? void 0 : mT.eventValues[zT.gameCategory]) && void 0 !== MT ? MT : null,
+       const Tq = null !== (lq = null === hq || void 0 === hq ? void 0 : hq.eventValues[bq.gameCategory]) && void 0 !== lq ? lq : null,
```

#### 388. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L6297` → after: `L6297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR6297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L6297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L6297) · [Before (L6297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L6297)

```diff
-         return "loading" === wT.status ? TT = eT : "error" === wT.status && (TT = HT(tT("studio:statsUnavailable"))), (0, Ak.jsxs)("div", {
+         return "loading" === vq.status ? qq = Mq : "error" === vq.status && (qq = fq(Vq("studio:statsUnavailable"))), (0, BE.jsxs)("div", {
```

#### 389. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L6356` → after: `L6356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR6356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L6356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L6356) · [Before (L6356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L6356)

```diff
-         return `#${[1,3,5].map((lT=>{const MT=parseInt(TT.slice(lT,lT+2),16),KT=parseInt(kT.slice(lT,lT+2),16);return Math.round(MT+(KT-MT)*cT).toString(16).padStart(2,"0")})).join("")}`
+         return `#${[1,3,5].map((Yq=>{const lq=parseInt(qq.slice(Yq,Yq+2),16),Oq=parseInt(Eq.slice(Yq,Yq+2),16);return Math.round(lq+(Oq-lq)*gq).toString(16).padStart(2,"0")})).join("")}`
```

#### 390. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L6361` → after: `L6361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR6361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L6361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L6361) · [Before (L6361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L6361)

```diff
-       return [TT.gameCategory, TT.eventType, TT.eventValue].map((TT => "" === TT ? kT : TT)).join(" / ")
+       return [qq.gameCategory, qq.eventType, qq.eventValue].map((qq => "" === qq ? Eq : qq)).join(" / ")
```

#### 391. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L6368` → after: `L6368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR6368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L6368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L6368) · [Before (L6368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L6368)

```diff
-       return (0, lT.useMemo)((() => null !== kT ? kT : null === cT ? [] : [{
+       return (0, Yq.useMemo)((() => null !== Eq ? Eq : null === gq ? [] : [{
```

#### 392. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L6394` → after: `L6394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR6394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L6394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L6394) · [Before (L6394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L6394)

```diff
-     var qO = cT(6458);
+     var em = gq(6320);
```

#### 393. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L6399` → after: `L6399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR6399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L6399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L6399) · [Before (L6399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L6399)

```diff
-       return null === TT ? Ty : JSON.stringify([TT.eventType, TT.eventValue])
+       return null === qq ? qx : JSON.stringify([qq.eventType, qq.eventValue])
```

#### 394. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L6404` → after: `L6404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR6404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L6404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L6404) · [Before (L6404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L6404)

```diff
-       if (TT.length <= 1) return null !== (kT = TT[0]) && void 0 !== kT ? kT : null;
+       if (qq.length <= 1) return null !== (Eq = qq[0]) && void 0 !== Eq ? Eq : null;
```

#### 395. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L6417` → after: `L6417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR6417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L6417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L6417) · [Before (L6417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L6417)

```diff
-               const cT = (null !== (yT = kT[Number(TT)]) && void 0 !== yT ? yT : 0) + lT;
+               const gq = (null !== (xq = Eq[Number(qq)]) && void 0 !== xq ? xq : 0) + Yq;
```

#### 396. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L6506` → after: `L6506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR6506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L6506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L6506) · [Before (L6506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L6506)

```diff
-             xT = null !== (MT = null === (KT = kT.values[TT]) || void 0 === KT ? void 0 : KT[yT]) && void 0 !== MT ? MT : 0;
+             cq = null !== (lq = null === (Oq = Eq.values[qq]) || void 0 === Oq ? void 0 : Oq[xq]) && void 0 !== lq ? lq : 0;
```

#### 397. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L6533` → after: `L6533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR6533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L6533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L6533) · [Before (L6533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L6533)

```diff
-         position: (0, qO.Q)(kT, TT)
+         position: (0, em.K)(Eq, qq)
```

#### 398. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L6543` → after: `L6543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR6543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L6543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L6543) · [Before (L6543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L6543)

```diff
-       return (0, Ak.jsxs)(ST.P, {
+       return (0, BE.jsxs)(oq.Q, {
```

#### 399. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L6557` → after: `L6557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR6557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L6557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L6557) · [Before (L6557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L6557)

```diff
-           children: (0, fT.P)(kT.count)
+           children: (0, Aq.S)(Eq.count)
```

#### 400. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L6570` → after: `L6570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR6570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L6570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L6570) · [Before (L6570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L6570)

```diff
-       } = (0, jT.B)(), OT = (0, lT.useRef)(null), {
+       } = (0, Nq.v)(), mq = (0, Yq.useRef)(null), {
```

#### 401. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L6580` → after: `L6580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR6580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L6580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L6580) · [Before (L6580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L6580)

```diff
-           cT = void 0 === OT ? MT : [...MT, OT], lT = KT.filter((TT => TT !== OT))
+           gq = void 0 === mq ? lq : [...lq, mq], Yq = Oq.filter((qq => qq !== mq))
```

#### 402. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L6647` → after: `L6647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR6647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L6647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L6647) · [Before (L6647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L6647)

```diff
-                 children: `${TT.name} \xb7 ${(0,fT.P)(TT.count)}`
+                 children: `${qq.name} \xb7 ${(0,Aq.S)(qq.count)}`
```

#### 403. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L6663` → after: `L6663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR6663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L6663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L6663) · [Before (L6663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L6663)

```diff
-       } = (0, jT.B)(), KT = function(TT, kT, cT) {
+       } = (0, Nq.v)(), Oq = function(qq, Eq, gq) {
```

#### 404. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L6707` → after: `L6707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR6707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L6707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L6707) · [Before (L6707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L6707)

```diff
-       } = (0, jT.B)(), OT = null !== (kT = cT.find((TT => TT.eventType === (null === lT || void 0 === lT ? void 0 : lT.eventType)))) && void 0 !== kT ? kT : null;
+       } = (0, Nq.v)(), mq = null !== (Eq = gq.find((qq => qq.eventType === (null === Yq || void 0 === Yq ? void 0 : Yq.eventType)))) && void 0 !== Eq ? Eq : null;
```

#### 405. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L6715` → after: `L6715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR6715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L6715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L6715) · [Before (L6715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L6715)

```diff
-           }), null !== lT && (0, Ak.jsx)(ST.P, {
+           }), null !== Yq && (0, BE.jsx)(oq.Q, {
```

#### 406. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L6736-L6737` → after: `L6736-L6737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR6736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L6736-L6737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L6736-L6737) · [Before (L6736-L6737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L6736-L6737)

```diff
-     cT(6466);
-     var vy = cT(2770);
+     gq(6328);
+     var ax = gq(2660);
```

#### 407. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L6770` → after: `L6770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR6770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L6770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L6770) · [Before (L6770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L6770)

```diff
-         fullyOpaqueFrom: IT = qO.d,
+         fullyOpaqueFrom: uq = em.b,
```

#### 408. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L6780` → after: `L6780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR6780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L6780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L6780) · [Before (L6780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L6780)

```diff
-       } = (0, jT.B)(), aT = (0, lT.useRef)(null), FT = (0, lT.useRef)(null), rT = (0, vy.e)(aT), [PT, wT] = (0, lT.useState)(null), [mT, bT] = (0, lT.useState)({
+       } = (0, Nq.v)(), Qq = (0, Yq.useRef)(null), yq = (0, Yq.useRef)(null), tq = (0, ax.e)(Qq), [rq, vq] = (0, Yq.useState)(null), [hq, nq] = (0, Yq.useState)({
```

#### 409. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L6812-L6813` → after: `L6812-L6813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR6812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L6812-L6813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L6812-L6813) · [Before (L6812-L6813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L6812-L6813)

```diff
-           grid: fy(AT, MT, (TT => (0, qO.D)(TT, xT, IT) > 0)),
-           scale: (0, qO.H)((0, qO.k)(AT))
+           grid: Ax(Bq, lq, (qq => (0, em.x)(qq, cq, uq) > 0)),
+           scale: (0, em.B)((0, em.j)(Bq))
```

#### 410. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L6815` → after: `L6815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR6815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L6815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L6815) · [Before (L6815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L6815)

```diff
-       }), [AT, MT, xT, IT]), ZT = Hy(KT, yT, rT, oT), uT = null !== PT && void 0 !== PT ? PT : ZT, XT = 0 === rT.width || 0 === rT.height ? null : function(TT, kT) {
+       }), [Bq, lq, cq, uq]), pq = fx(Oq, xq, tq, Zq), Gq = null !== rq && void 0 !== rq ? rq : pq, Lq = 0 === tq.width || 0 === tq.height ? null : function(qq, Eq) {
```

#### 411. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L6866-L6867` → after: `L6866-L6867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR6866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L6866-L6867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L6866-L6867) · [Before (L6866-L6867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L6866-L6867)

```diff
-               const kT = (0, qO.D)(TT, xT, IT);
-               return kT <= 0 ? null : [...(0, qO.t)((0, qO.Q)(TT, xT)), kT]
+               const Eq = (0, em.x)(qq, cq, uq);
+               return Eq <= 0 ? null : [...(0, em.q)((0, em.K)(qq, cq)), Eq]
```

#### 412. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L6870-L6871` → after: `L6870-L6871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR6870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L6870-L6871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L6870-L6871) · [Before (L6870-L6871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L6870-L6871)

```diff
-               const kT = (0, qO.q)(TT, ET.scale);
-               return kT <= 0 ? null : [...qO.R, kT]
+               const Eq = (0, em.n)(qq, Sq.scale);
+               return Eq <= 0 ? null : [...em.L, Eq]
```

#### 413. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L6952` → after: `L6952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR6952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L6952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L6952) · [Before (L6952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L6952)

```diff
-               const lT = null !== cT && void 0 !== cT ? cT : ZT;
+               const Yq = null !== gq && void 0 !== gq ? gq : pq;
```

#### 414. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L6961` → after: `L6961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR6961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L6961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L6961) · [Before (L6961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L6961)

```diff
-             wT((cT => ey(null !== cT && void 0 !== cT ? cT : ZT, TT, kT, gT, UT)))
+             vq((gq => Mx(null !== gq && void 0 !== gq ? gq : pq, qq, Eq, Uq, Fq)))
```

#### 415. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L6975` → after: `L6975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR6975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L6975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L6975) · [Before (L6975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L6975)

```diff
-           TT.width = Math.round(cT.width * xT), TT.height = Math.round(cT.height * xT), TT.style.width = `${cT.width}px`, TT.style.height = `${cT.height}px`;
+           qq.width = Math.round(gq.width * cq), qq.height = Math.round(gq.height * cq), qq.style.width = `${gq.width}px`, qq.style.height = `${gq.height}px`;
```

#### 416. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L6978` → after: `L6978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR6978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L6978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L6978) · [Before (L6978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L6978)

```diff
-           IT.setTransform(xT, 0, 0, xT, 0, 0), IT.clearRect(0, 0, cT.width, cT.height), IT.imageSmoothingEnabled = !1, IT.fillStyle = qO.V, IT.fillRect(0, 0, cT.width, cT.height), null !== MT && IT.drawImage(MT.canvas, Jy(KT, OT, MT.maxX), OT.y + (MT.minZ - KT.minZ) * OT.scale, M … [truncated]
+           uq.setTransform(cq, 0, 0, cq, 0, 0), uq.clearRect(0, 0, gq.width, gq.height), uq.imageSmoothingEnabled = !1, uq.fillStyle = em.N, uq.fillRect(0, 0, gq.width, gq.height), null !== lq && uq.drawImage(lq.canvas, ix(Oq, mq, lq.maxX), mq.y + (lq.minZ - Oq.minZ) * mq.scale, l … [truncated]
```

#### 417. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L6997` → after: `L6997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR6997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L6997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L6997) · [Before (L6997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L6997)

```diff
-             const KT = (0, qO.O)(ry / MT.scale),
+             const Oq = (0, em.J)(tx / lq.scale),
```

#### 418. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7000` → after: `L7000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7000) · [Before (L7000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7000)

```diff
-             TT.fillStyle = kT.getPropertyValue("--heatmap-axis-band").trim(), TT.fillRect(0, 0, cT.width, wy), TT.fillRect(0, wy, my, cT.height - wy), TT.fillStyle = kT.color, TT.strokeStyle = kT.color, TT.font = `11px ${kT.fontFamily}`, TT.textBaseline = "middle", TT.lineWidth = … [truncated]
+             qq.fillStyle = Eq.getPropertyValue("--heatmap-axis-band").trim(), qq.fillRect(0, 0, gq.width, vx), qq.fillRect(0, vx, hx, gq.height - vx), qq.fillStyle = Eq.color, qq.strokeStyle = Eq.color, qq.font = `11px ${Eq.fontFamily}`, qq.textBaseline = "middle", qq.lineWidth = … [truncated]
```

#### 419. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7005` → after: `L7005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7005) · [Before (L7005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7005)

```diff
-               TT.moveTo(kT, wy - 4), TT.lineTo(kT, wy), TT.fillText(`x ${IT}`, kT, wy / 2 - 1)
+               qq.moveTo(Eq, vx - 4), qq.lineTo(Eq, vx), qq.fillText(`x ${uq}`, Eq, vx / 2 - 1)
```

#### 420. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7011` → after: `L7011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7011) · [Before (L7011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7011)

```diff
-               TT.moveTo(my - 4, kT), TT.lineTo(my, kT), TT.fillText(`z ${IT}`, my - 6, kT)
+               qq.moveTo(hx - 4, Eq), qq.lineTo(hx, Eq), qq.fillText(`z ${uq}`, hx - 6, Eq)
```

#### 421. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7017` → after: `L7017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7017) · [Before (L7017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7017)

```diff
-       const WT = null === zT ? 0 : null !== (kT = null === (cT = MT.values[zT.x]) || void 0 === cT ? void 0 : cT[zT.z]) && void 0 !== kT ? kT : 0,
+       const wq = null === bq ? 0 : null !== (Eq = null === (gq = lq.values[bq.x]) || void 0 === gq ? void 0 : gq[bq.z]) && void 0 !== Eq ? Eq : 0,
```

#### 422. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7037` → after: `L7037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7037) · [Before (L7037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7037)

```diff
-             left: `calc(${my}px + 0.5rem)`
+             left: `calc(${hx}px + 0.5rem)`
```

#### 423. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7042` → after: `L7042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7042) · [Before (L7042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7042)

```diff
-             count: (0, fT.P)(WT)
+             count: (0, Aq.S)(wq)
```

#### 424. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7047` → after: `L7047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7047) · [Before (L7047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7047)

```diff
-             children: [(0, Ak.jsx)(ST.P, {
+             children: [(0, BE.jsx)(oq.Q, {
```

#### 425. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7051` → after: `L7051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7051) · [Before (L7051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7051)

```diff
-               children: (0, Ak.jsx)(DT.e, {
+               children: (0, BE.jsx)(Pq.d, {
```

#### 426. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7054` → after: `L7054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7054) · [Before (L7054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7054)

```diff
-             }), (0, Ak.jsx)(ST.P, {
+             }), (0, BE.jsx)(oq.Q, {
```

#### 427. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7058` → after: `L7058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7058) · [Before (L7058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7058)

```diff
-               children: (0, Ak.jsx)(DT.e, {
+               children: (0, BE.jsx)(Pq.d, {
```

#### 428. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7062` → after: `L7062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7062) · [Before (L7062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7062)

```diff
-           }), oT && (0, Ak.jsx)(ST.P, {
+           }), Zq && (0, BE.jsx)(oq.Q, {
```

#### 429. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7067` → after: `L7067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7067) · [Before (L7067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7067)

```diff
-             children: (0, Ak.jsx)(DT.e, {
+             children: (0, BE.jsx)(Pq.d, {
```

#### 430. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7076-L7078` → after: `L7076-L7078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7076-L7078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7076-L7078) · [Before (L7076-L7078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7076-L7078)

```diff
-       const MT = lT ? my : 0,
-         KT = lT ? wy : 0,
-         OT = Math.max(1, cT.width - MT - (lT ? wy : 0)),
+       const lq = Yq ? hx : 0,
+         Oq = Yq ? vx : 0,
+         mq = Math.max(1, gq.width - lq - (Yq ? vx : 0)),
```

#### 431. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7122` → after: `L7122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7122) · [Before (L7122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7122)

```diff
-       return `${kT.minX},${kT.maxX},${kT.minZ},${kT.maxZ},${cT}`
+       return `${Eq.minX},${Eq.maxX},${Eq.minZ},${Eq.maxZ},${gq}`
```

#### 432. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7183` → after: `L7183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7183) · [Before (L7183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7183)

```diff
-       const KT = (0, lT.useMemo)((() => (0, qO.eb)(kT.heatmap)), [kT.heatmap]),
+       const Oq = (0, Yq.useMemo)((() => (0, em.T)(Eq.heatmap)), [Eq.heatmap]),
```

#### 433. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7185-L7186` → after: `L7185-L7186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7185-L7186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7185-L7186) · [Before (L7185-L7186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7185-L7186)

```diff
-         yT = (0, lT.useMemo)((() => (0, qO.h)(KT)), [KT]),
-         fT = (0, lT.useMemo)((() => (0, qO.H)((0, qO.k)(KT))), [KT]);
+         xq = (0, Yq.useMemo)((() => (0, em.f)(Oq)), [Oq]),
+         Aq = (0, Yq.useMemo)((() => (0, em.B)((0, em.j)(Oq))), [Oq]);
```

#### 434. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7213` → after: `L7213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7213) · [Before (L7213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7213)

```diff
-         Om: KT
+         OJ: Oq
```

#### 435. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7217` → after: `L7217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7217) · [Before (L7217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7217)

```diff
-       } = (0, jT.B)(), yT = (0, lT.useRef)(null);
+       } = (0, Nq.v)(), xq = (0, Yq.useRef)(null);
```

#### 436. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7233` → after: `L7233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7233) · [Before (L7233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7233)

```diff
-         }), kT && (0, Ak.jsxs)(ST.P, {
+         }), Eq && (0, BE.jsxs)(oq.Q, {
```

#### 437. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7235` → after: `L7235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7235) · [Before (L7235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7235)

```diff
-           children: [(0, Ak.jsx)(DT.e, {
+           children: [(0, BE.jsx)(Pq.d, {
```

#### 438. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7238` → after: `L7238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7238) · [Before (L7238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7238)

```diff
-         }), (0, Ak.jsxs)(ST.P, {
+         }), (0, BE.jsxs)(oq.Q, {
```

#### 439. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7243` → after: `L7243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7243) · [Before (L7243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7243)

```diff
-           children: [(0, Ak.jsx)(DT.e, {
+           children: [(0, BE.jsx)(Pq.d, {
```

#### 440. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7254` → after: `L7254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7254) · [Before (L7254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7254)

```diff
-       return kT > 0 ? `${kT}:${String(cT).padStart(2,"0")}:${lT}` : `${cT}:${lT}`
+       return Eq > 0 ? `${Eq}:${String(gq).padStart(2,"0")}:${Yq}` : `${gq}:${Yq}`
```

#### 441. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7260` → after: `L7260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7260) · [Before (L7260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7260)

```diff
-           count: (0, fT.P)(kT)
+           count: (0, Aq.S)(Eq)
```

#### 442. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7264` → after: `L7264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7264) · [Before (L7264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7264)

```diff
-           count: (0, fT.P)(kT)
+           count: (0, Aq.S)(Eq)
```

#### 443. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7279` → after: `L7279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7279) · [Before (L7279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7279)

```diff
-           count: (0, fT.P)(MT)
+           count: (0, Aq.S)(lq)
```

#### 444. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7281` → after: `L7281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7281) · [Before (L7281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7281)

```diff
-         const yT = null !== (KT = null === (OT = kT.values[cT]) || void 0 === OT ? void 0 : OT[lT]) && void 0 !== KT ? KT : 0;
+         const xq = null !== (Oq = null === (mq = Eq.values[gq]) || void 0 === mq ? void 0 : mq[Yq]) && void 0 !== Oq ? Oq : 0;
```

#### 445. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7285-L7286` → after: `L7285-L7286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7285-L7286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7285-L7286) · [Before (L7285-L7286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7285-L7286)

```diff
-           count: (0, fT.P)(MT),
-           players: (0, fT.P)(yT)
+           count: (0, Aq.S)(lq),
+           players: (0, Aq.S)(xq)
```

#### 446. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7298` → after: `L7298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7298) · [Before (L7298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7298)

```diff
-           count: (0, fT.P)(KT)
+           count: (0, Aq.S)(Oq)
```

#### 447. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7300` → after: `L7300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7300) · [Before (L7300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7300)

```diff
-         const IT = null !== (OT = null === (yT = kT.frequencies[cT]) || void 0 === yT || null === (xT = yT[lT]) || void 0 === xT ? void 0 : xT[MT]) && void 0 !== OT ? OT : 0;
+         const uq = null !== (mq = null === (xq = Eq.frequencies[gq]) || void 0 === xq || null === (cq = xq[Yq]) || void 0 === cq ? void 0 : cq[lq]) && void 0 !== mq ? mq : 0;
```

#### 448. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7305-L7306` → after: `L7305-L7306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7305-L7306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7305-L7306) · [Before (L7305-L7306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7305-L7306)

```diff
-           count: (0, fT.P)(KT),
-           players: (0, fT.P)(IT)
+           count: (0, Aq.S)(Oq),
+           players: (0, Aq.S)(uq)
```

#### 449. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7318-L7319` → after: `L7318-L7319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7318-L7319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7318-L7319) · [Before (L7318-L7319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7318-L7319)

```diff
-           count: (0, fT.P)(null !== (OT = null === (yT = kT.values[lT]) || void 0 === yT ? void 0 : yT[MT]) && void 0 !== OT ? OT : 0),
-           players: (0, fT.P)(null !== (xT = null === (IT = cT.values[lT]) || void 0 === IT ? void 0 : IT[MT]) && void 0 !== xT ? xT : 0)
+           count: (0, Aq.S)(null !== (mq = null === (xq = Eq.values[Yq]) || void 0 === xq ? void 0 : xq[lq]) && void 0 !== mq ? mq : 0),
+           players: (0, Aq.S)(null !== (cq = null === (uq = gq.values[Yq]) || void 0 === uq ? void 0 : uq[lq]) && void 0 !== cq ? cq : 0)
```

#### 450. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7332-L7333` → after: `L7332-L7333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7332-L7333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7332-L7333) · [Before (L7332-L7333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7332-L7333)

```diff
-           count: (0, fT.P)(null !== (yT = null === (xT = kT.frequencies[lT]) || void 0 === xT || null === (IT = xT[MT]) || void 0 === IT ? void 0 : IT[KT]) && void 0 !== yT ? yT : 0),
-           players: (0, fT.P)(null !== (AT = null === (CT = cT.frequencies[lT]) || void 0 === CT || null === (jT = CT[MT]) || void 0 === jT ? void 0 : jT[KT]) && void 0 !== AT ? AT : 0)
+           count: (0, Aq.S)(null !== (xq = null === (cq = Eq.frequencies[Yq]) || void 0 === cq || null === (uq = cq[lq]) || void 0 === uq ? void 0 : uq[Oq]) && void 0 !== xq ? xq : 0),
+           players: (0, Aq.S)(null !== (Bq = null === (Wq = gq.frequencies[Yq]) || void 0 === Wq || null === (Nq = Wq[lq]) || void 0 === Nq ? void 0 : Nq[Oq]) && void 0 !== Bq ? Bq : 0)
```

#### 451. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7339` → after: `L7339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7339) · [Before (L7339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7339)

```diff
-       return null !== kT && void 0 !== kT ? kT : TT("Positions per Block")
+       return null !== Eq && void 0 !== Eq ? Eq : qq("Positions per Block")
```

#### 452. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7363` → after: `L7363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7363) · [Before (L7363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7363)

```diff
-             background: (0, qO.B)()
+             background: (0, em.u)()
```

#### 453. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7372` → after: `L7372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7372) · [Before (L7372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7372)

```diff
-                 transform: `translateX(-${kT})`
+                 transform: `translateX(-${Eq})`
```

#### 454. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7374` → after: `L7374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7374) · [Before (L7374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7374)

```diff
-               children: "perPosition" === lT ? Uy(TT.count) : (0, fT.P)(TT.count)
+               children: "perPosition" === Yq ? Fx(qq.count) : (0, Aq.S)(qq.count)
```

#### 455. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7384` → after: `L7384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7384) · [Before (L7384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7384)

```diff
-       } = (0, jT.B)();
+       } = (0, Nq.v)();
```

#### 456. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7393` → after: `L7393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7393) · [Before (L7393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7393)

```diff
-             background: (0, qO.n)()
+             background: (0, em.m)()
```

#### 457. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7402` → after: `L7402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7402) · [Before (L7402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7402)

```diff
-       } = (0, jT.B)();
+       } = (0, Nq.v)();
```

#### 458. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7408` → after: `L7408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7408) · [Before (L7408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7408)

```diff
-         }), (0, Ak.jsx)(LT.b, {
+         }), (0, BE.jsx)(kq.c, {
```

#### 459. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7419` → after: `L7419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7419) · [Before (L7419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7419)

```diff
-       const lT = null !== TT && void 0 !== TT ? TT : kT > 0 ? -1 : cT + 1;
+       const Yq = null !== qq && void 0 !== qq ? qq : Eq > 0 ? -1 : gq + 1;
```

#### 460. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7433` → after: `L7433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7433) · [Before (L7433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7433)

```diff
-       } = (0, jT.B)(), IT = (0, lT.useRef)(null), AT = (0, vy.e)(IT), CT = (0, lT.useRef)(!1), {
+       } = (0, Nq.v)(), uq = (0, Yq.useRef)(null), Bq = (0, ax.e)(uq), Wq = (0, Yq.useRef)(!1), {
```

#### 461. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7440` → after: `L7440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7440) · [Before (L7440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7440)

```diff
-           kT.push(null !== (cT = null === (lT = TT.heatmapsByInterval[MT]) || void 0 === lT ? void 0 : lT.totalCount) && void 0 !== cT ? cT : 0)
+           Eq.push(null !== (gq = null === (Yq = qq.heatmapsByInterval[lq]) || void 0 === Yq ? void 0 : Yq.totalCount) && void 0 !== gq ? gq : 0)
```

#### 462. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7443` → after: `L7443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7443) · [Before (L7443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7443)

```diff
-       }(MT)), [MT]), ST = null === yT ? 0 : null !== (kT = QT[yT]) && void 0 !== kT ? kT : 0, DT = TT => {
+       }(lq)), [lq]), oq = null === xq ? 0 : null !== (Eq = Hq[xq]) && void 0 !== Eq ? Eq : 0, Pq = qq => {
```

#### 463. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7447` → after: `L7447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7447) · [Before (L7447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7447)

```diff
-       }, aT = AT.width / NT, FT = null !== (cT = lf.find((TT => TT * aT >= kf))) && void 0 !== cT ? cT : 3600 * Math.ceil(kf / aT / 3600), rT = [];
+       }, Qq = Bq.width / jq, yq = null !== (gq = gA.find((qq => qq * Qq >= EA))) && void 0 !== gq ? gq : 3600 * Math.ceil(EA / Qq / 3600), tq = [];
```

#### 464. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7517` → after: `L7517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7517) · [Before (L7517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7517)

```diff
-     var Of = cT(6472);
+     var OA = gq(6336);
```

#### 465. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7519` → after: `L7519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7519) · [Before (L7519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7519)

```diff
-     const ff = (0, lT.lazy)((() => Promise.all([cT.e(227), cT.e(226), cT.e(246), cT.e(247), cT.e(244), cT.e(254), cT.e(248), cT.e(253), cT.e(251), cT.e(243), cT.e(256), cT.e(250), cT.e(224), cT.e(242)]).then((() => cT(39441)))));
+     const xA = (0, Yq.lazy)((() => Promise.all([gq.e(227), gq.e(226), gq.e(246), gq.e(247), gq.e(244), gq.e(254), gq.e(248), gq.e(253), gq.e(251), gq.e(243), gq.e(256), gq.e(250), gq.e(224), gq.e(242)]).then((() => gq(39578)))));
```

#### 466. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7547` → after: `L7547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7547) · [Before (L7547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7547)

```diff
-       } = (0, jT.B)(), {
+       } = (0, Nq.v)(), {
```

#### 467. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7588` → after: `L7588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7588) · [Before (L7588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7588)

```diff
-         lastInterval: null !== (kT = null === HT || void 0 === HT ? void 0 : HT.lastInterval) && void 0 !== kT ? kT : null,
+         lastInterval: null !== (Eq = null === fq || void 0 === fq ? void 0 : fq.lastInterval) && void 0 !== Eq ? Eq : null,
```

#### 468. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7593` → after: `L7593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7593) · [Before (L7593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7593)

```diff
-       }, ET = null !== oT && void 0 !== oT ? oT : JT, ZT = (0, lT.useMemo)((() => (0, qO.eb)(JT)), [JT]), uT = (0, lT.useMemo)((() => null === oT ? ZT : (0, qO.eb)(oT)), [oT, ZT]), XT = (0, lT.useMemo)((() => {
+       }, Sq = null !== Zq && void 0 !== Zq ? Zq : iq, pq = (0, Yq.useMemo)((() => (0, em.T)(iq)), [iq]), Gq = (0, Yq.useMemo)((() => null === Zq ? pq : (0, em.T)(Zq)), [Zq, pq]), Lq = (0, Yq.useMemo)((() => {
```

#### 469. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7595` → after: `L7595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7595) · [Before (L7595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7595)

```diff
-         return null === xT ? TT : My(TT, xT.area)
+         return null === cq ? qq : lx(qq, cq.area)
```

#### 470. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7598-L7599` → after: `L7598-L7599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7598-L7599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7598-L7599) · [Before (L7598-L7599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7598-L7599)

```diff
-         const cT = Math.min(ET.min[1], null !== (TT = null === xT || void 0 === xT ? void 0 : xT.nM) && void 0 !== TT ? TT : 1 / 0),
-           lT = Math.max(ET.max[1], null !== (kT = null === xT || void 0 === xT ? void 0 : xT.pM) && void 0 !== kT ? kT : -1 / 0);
+         const gq = Math.min(Sq.min[1], null !== (qq = null === cq || void 0 === cq ? void 0 : cq.Cl) && void 0 !== qq ? qq : 1 / 0),
+           Yq = Math.max(Sq.max[1], null !== (Eq = null === cq || void 0 === cq ? void 0 : cq.Il) && void 0 !== Eq ? Eq : -1 / 0);
```

#### 471. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7606` → after: `L7606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7606) · [Before (L7606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7606)

```diff
-         return Ky(null === IT || null === HT ? ZT : null !== (TT = HT.allHeightsGrids[IT]) && void 0 !== TT ? TT : {
+         return Ox(null === uq || null === fq ? pq : null !== (qq = fq.allHeightsGrids[uq]) && void 0 !== qq ? qq : {
```

#### 472. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7613` → after: `L7613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7613) · [Before (L7613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7613)

```diff
-         return Oy(null !== (TT = HT.heatmapsByInterval[IT]) && void 0 !== TT ? TT : {
+         return mx(null !== (qq = fq.heatmapsByInterval[uq]) && void 0 !== qq ? qq : {
```

#### 473. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7622` → after: `L7622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7622) · [Before (L7622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7622)

```diff
-         return null === IT ? uT : null !== (TT = null === xT || void 0 === xT ? void 0 : xT.allHeightsGrids[IT]) && void 0 !== TT ? TT : {
+         return null === uq ? Gq : null !== (qq = null === cq || void 0 === cq ? void 0 : cq.allHeightsGrids[uq]) && void 0 !== qq ? qq : {
```

#### 474. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7628` → after: `L7628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7628) · [Before (L7628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7628)

```diff
-         return null === IT ? ET : null !== (TT = null === xT || void 0 === xT ? void 0 : xT.heatmapsByInterval[IT]) && void 0 !== TT ? TT : {
+         return null === uq ? Sq : null !== (qq = null === cq || void 0 === cq ? void 0 : cq.heatmapsByInterval[uq]) && void 0 !== qq ? qq : {
```

#### 475. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7643` → after: `L7643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7643) · [Before (L7643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7643)

```diff
-             yT[OT] = yy(KT, null !== (lT = null === (MT = kT.values[TT]) || void 0 === MT ? void 0 : MT[OT]) && void 0 !== lT ? lT : 0)
+             xq[mq] = xx(Oq, null !== (Yq = null === (lq = Eq.values[qq]) || void 0 === lq ? void 0 : lq[mq]) && void 0 !== Yq ? Yq : 0)
```

#### 476. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7663` → after: `L7663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7663) · [Before (L7663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7663)

```diff
-                 AT = yy(xT, null !== (MT = null === (KT = kT.frequencies[TT]) || void 0 === KT || null === (OT = KT[fT]) || void 0 === OT ? void 0 : OT[yT]) && void 0 !== MT ? MT : 0);
+                 Bq = xx(cq, null !== (lq = null === (Oq = Eq.frequencies[qq]) || void 0 === Oq || null === (mq = Oq[Aq]) || void 0 === mq ? void 0 : mq[xq]) && void 0 !== lq ? lq : 0);
```

#### 477. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7673` → after: `L7673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7673) · [Before (L7673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7673)

```diff
-       }(gT, BT) : gT), [UT, gT, BT]), pT = (0, lT.useMemo)((() => (0, qO.H)(CT ? (0, qO.K)(nT) : (0, qO.k)(WT))), [CT, nT, WT]), iT = (0, Ll.p)(), qT = (0, lT.useMemo)((() => (0, qO.h)(uT)), [uT]), sT = (0, lT.useMemo)((() => (0, qO.x)(ET)), [ET]), Tk = CT ? gT.totalCount : (0, q … [truncated]
+       }(Uq, Xq) : Uq), [Fq, Uq, Xq]), Cq = (0, Yq.useMemo)((() => (0, em.B)(Wq ? (0, em.F)(Kq) : (0, em.j)(wq))), [Wq, Kq, wq]), Iq = (0, JY.u)(), eq = (0, Yq.useMemo)((() => (0, em.f)(Gq)), [Gq]), Dq = (0, Yq.useMemo)((() => (0, em.s)(Sq)), [Sq]), qE = Wq ? Uq.totalCount : (0, e … [truncated]
```

#### 478. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7677-L7678` → after: `L7677-L7678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7677-L7678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7677-L7678) · [Before (L7677-L7678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7677-L7678)

```diff
-         Om: PT
-       }), ck = zT("Drag to move, Ctrl + scroll to zoom. Drag along the bottom to pick a time into the game."), lk = CT ? zT("Click the view to look around with the mouse and fly with your game movement keys, as in first person. Esc or G lets go of the mouse, F4 shows or hides the … [truncated]
+         OJ: rq
+       }), gE = bq("Drag to move, Ctrl + scroll to zoom. Drag along the bottom to pick a time into the game."), YE = Wq ? bq("Click the view to look around with the mouse and fly with your game movement keys, as in first person. Esc or G lets go of the mouse, F4 shows or hides the … [truncated]
```

#### 479. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7686` → after: `L7686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7686) · [Before (L7686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7686)

```diff
-           children: [(0, Ak.jsx)(ST.P, {
+           children: [(0, BE.jsx)(oq.Q, {
```

#### 480. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7691-L7692` → after: `L7691-L7692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7691-L7692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7691-L7692) · [Before (L7691-L7692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7691-L7692)

```diff
-             children: [wT, (0, Ak.jsx)(LT.b, {
-               hoverInfo: null === KT ? lk : `${zT("Counts only include events recorded with a position.")} ${lk}`,
+             children: [vq, (0, BE.jsx)(kq.c, {
+               hoverInfo: null === Oq ? YE : `${bq("Counts only include events recorded with a position.")} ${YE}`,
```

#### 481. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7697` → after: `L7697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7697) · [Before (L7697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7697)

```diff
-             children: [(0, Ak.jsx)(ST.P, {
+             children: [(0, BE.jsx)(oq.Q, {
```

#### 482. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7703` → after: `L7703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7703) · [Before (L7703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7703)

```diff
-             }), (0, Ak.jsx)(ST.P, {
+             }), (0, BE.jsx)(oq.Q, {
```

#### 483. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7721` → after: `L7721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7721) · [Before (L7721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7721)

```diff
-             background: null !== (cT = null === aT || void 0 === aT ? void 0 : aT.topDown) && void 0 !== cT ? cT : null,
+             background: null !== (gq = null === Qq || void 0 === Qq ? void 0 : Qq.topDown) && void 0 !== gq ? gq : null,
```

#### 484. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7723` → after: `L7723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7723) · [Before (L7723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7723)

```diff
-             getReadout: null === KT ? null : UT ? Wy(zT, RT, YT) : Yy(zT, null === IT ? uT : null),
+             getReadout: null === Oq ? null : Fq ? wx(bq, Rq, sq) : sx(bq, null === uq ? Gq : null),
```

#### 485. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7743` → after: `L7743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7743) · [Before (L7743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7743)

```diff
-               getReadout: null === KT ? null : UT ? ny(zT, gT, BT) : By(zT, null === IT ? oT : null)
+               getReadout: null === Oq ? null : Fq ? Kx(bq, Uq, Xq) : Xx(bq, null === uq ? Zq : null)
```

#### 486. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7756` → after: `L7756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7756) · [Before (L7756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7756)

```diff
-               left: `calc(${my}px + 0.5rem)`
+               left: `calc(${hx}px + 0.5rem)`
```

#### 487. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7769-L7770` → after: `L7769-L7770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7769-L7770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7769-L7770) · [Before (L7769-L7770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7769-L7770)

```diff
-                 max: qO.ab,
-                 step: qO.ab / 20,
+                 max: em.R,
+                 step: em.R / 20,
```

#### 488. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7791` → after: `L7791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7791) · [Before (L7791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7791)

```diff
-           children: [(0, Ak.jsx)(ST.P, {
+           children: [(0, BE.jsx)(oq.Q, {
```

#### 489. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7796` → after: `L7796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7796) · [Before (L7796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7796)

```diff
-             children: [(0, Ak.jsx)(ST.P, {
+             children: [(0, BE.jsx)(oq.Q, {
```

#### 490. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7800` → after: `L7800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7800) · [Before (L7800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7800)

```diff
-               children: (0, Ak.jsx)(DT.e, {
+               children: (0, BE.jsx)(Pq.d, {
```

#### 491. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7810` → after: `L7810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7810) · [Before (L7810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7810)

```diff
-               children: [null === IT ? zT("Whole game") : (Mk = IT, Kk = HT.intervalSeconds, `${Ry(Mk*Kk)}\u2013${Ry((Mk+1)*Kk)}`), null !== IT && (0, Ak.jsx)("span", {
+               children: [null === uq ? bq("Whole game") : (lE = uq, OE = fq.intervalSeconds, `${Rx(lE*OE)}\u2013${Rx((lE+1)*OE)}`), null !== uq && (0, BE.jsx)("span", {
```

#### 492. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7835-L7838` → after: `L7835-L7838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7835-L7838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7835-L7838) · [Before (L7835-L7838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7835-L7838)

```diff
-       let xT = null !== (lT = null === TT || void 0 === TT ? void 0 : TT.lastInterval) && void 0 !== lT ? lT : -1,
-         IT = null !== (MT = null === TT || void 0 === TT ? void 0 : TT.area) && void 0 !== MT ? MT : null,
-         AT = null !== (KT = null === TT || void 0 === TT ? void 0 : TT.nM) && void 0 !== KT ? KT : 1 / 0,
-         CT = null !== (OT = null === TT || void 0 === TT ? void 0 : TT.pM) && void 0 !== OT ? OT : -1 / 0;
+       let cq = null !== (Yq = null === qq || void 0 === qq ? void 0 : qq.lastInterval) && void 0 !== Yq ? Yq : -1,
+         uq = null !== (lq = null === qq || void 0 === qq ? void 0 : qq.area) && void 0 !== lq ? lq : null,
+         Bq = null !== (Oq = null === qq || void 0 === qq ? void 0 : qq.Cl) && void 0 !== Oq ? Oq : 1 / 0,
+         Wq = null !== (mq = null === qq || void 0 === qq ? void 0 : qq.Il) && void 0 !== mq ? mq : -1 / 0;
```

#### 493. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7842` → after: `L7842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7842) · [Before (L7842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7842)

```diff
-           kT = (0, qO.eb)(vT);
+           Eq = (0, em.T)(aq);
```

#### 494. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7845` → after: `L7845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7845) · [Before (L7845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7845)

```diff
-         IT = null === IT ? cT : My(IT, cT), AT = Math.min(AT, vT.min[1]), CT = Math.max(CT, vT.max[1])
+         uq = null === uq ? gq : lx(uq, gq), Bq = Math.min(Bq, aq.min[1]), Wq = Math.max(Wq, aq.max[1])
```

#### 495. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7853-L7854` → after: `L7853-L7854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7853-L7854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7853-L7854) · [Before (L7853-L7854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7853-L7854)

```diff
-         nM: AT,
-         pM: CT
+         Cl: Bq,
+         Il: Wq
```

#### 496. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7871` → after: `L7871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7871) · [Before (L7871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7871)

```diff
-         lastInterval: null === lT ? KT : Math.min(KT, lT - 1),
+         lastInterval: null === Yq ? Oq : Math.min(Oq, Yq - 1),
```

#### 497. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7873-L7874` → after: `L7873-L7874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7873-L7874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7873-L7874) · [Before (L7873-L7874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7873-L7874)

```diff
-         nM: Math.min(MT.nM, cT.nM),
-         pM: Math.max(MT.pM, cT.pM)
+         Cl: Math.min(lq.Cl, gq.Cl),
+         Il: Math.max(lq.Il, gq.Il)
```

#### 498. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7894` → after: `L7894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7894) · [Before (L7894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7894)

```diff
-       } = (0, jT.B)(), {
+       } = (0, Nq.v)(), {
```

#### 499. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7897` → after: `L7897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7897) · [Before (L7897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7897)

```diff
-       } = (0, vT.b)(), [AT, CT] = (0, lT.useState)(null), [tT, hT] = (0, lT.useState)(null), NT = wl((() => dT.getGamePlayerHeatmap(xT, MT.gameAnalyticsId).then((TT => TT.heatmapsByCategory))), [xT, MT.gameAnalyticsId], !IT, "Failed to load player heatmaps"), QT = wl((() => null  … [truncated]
+       } = (0, aq.c)(), [Bq, Wq] = (0, Yq.useState)(null), [Vq, dq] = (0, Yq.useState)(null), jq = rY((() => Jq.getGamePlayerHeatmap(cq, lq.gameAnalyticsId).then((qq => qq.heatmapsByCategory))), [cq, lq.gameAnalyticsId], !uq, "Failed to load player heatmaps"), Hq = rY((() => null  … [truncated]
```

#### 500. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L7908` → after: `L7908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR7908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L7908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L7908) · [Before (L7908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L7908)

```diff
-         } = (0, vT.b)(), [KT, OT] = (0, lT.useState)({
+         } = (0, aq.c)(), [Oq, mq] = (0, Yq.useState)({
```

#### 501. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8010` → after: `L8010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8010) · [Before (L8010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8010)

```diff
-             const TT = null !== (lT = cT.get(MT.eventType)) && void 0 !== lT ? lT : [];
+             const qq = null !== (Yq = gq.get(lq.eventType)) && void 0 !== Yq ? Yq : [];
```

#### 502. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8020` → after: `L8020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8020) · [Before (L8020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8020)

```diff
-                 name: "" === TT ? cT : `${cT}: ${TT}`,
+                 name: "" === qq ? gq : `${gq}: ${qq}`,
```

#### 503. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8027` → after: `L8027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8027) · [Before (L8027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8027)

```diff
-               label: "" === TT.eventValue ? kT : TT.eventValue,
+               label: "" === qq.eventValue ? Eq : qq.eventValue,
```

#### 504. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8037` → after: `L8037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8037) · [Before (L8037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8037)

```diff
-         }(null !== (TT = null === ST || void 0 === ST ? void 0 : ST.events) && void 0 !== TT ? TT : [], fT("general:default"))
+         }(null !== (qq = null === oq || void 0 === oq ? void 0 : oq.events) && void 0 !== qq ? qq : [], Aq("general:default"))
```

#### 505. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8056` → after: `L8056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8056) · [Before (L8056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8056)

```diff
-         if (void 0 === cT || null === kT.eventValue) return null !== (lT = null === cT || void 0 === cT ? void 0 : cT.name) && void 0 !== lT ? lT : null;
+         if (void 0 === gq || null === Eq.eventValue) return null !== (Yq = null === gq || void 0 === gq ? void 0 : gq.name) && void 0 !== Yq ? Yq : null;
```

#### 506. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8058` → after: `L8058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8058) · [Before (L8058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8058)

```diff
-         return void 0 === MT ? null : `${cT.eventType}: ${MT.label}`
+         return void 0 === lq ? null : `${gq.eventType}: ${lq.label}`
```

#### 507. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8067` → after: `L8067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8067) · [Before (L8067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8067)

```diff
-       }), [bT, mT, ST, DT, FT]), JT = zT !== DT && "error" === DT.status, [oT, HT] = (0, lT.useState)(null), [eT, GT] = (0, lT.useState)(!1), [VT, ET] = (0, lT.useState)(!1), [ZT, uT] = (0, lT.useState)(qO.d), [XT, LT] = (0, lT.useState)({
+       }), [nq, hq, oq, Pq, yq]), iq = bq !== Pq && "error" === Pq.status, [Zq, fq] = (0, Yq.useState)(null), [Mq, Tq] = (0, Yq.useState)(!1), [zq, Sq] = (0, Yq.useState)(!1), [pq, Gq] = (0, Yq.useState)(em.b), [Lq, kq] = (0, Yq.useState)({
```

#### 508. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8104` → after: `L8104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8104) · [Before (L8104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8104)

```diff
-           lT = null !== (kT = null === cT || void 0 === cT ? void 0 : cT.event) && void 0 !== kT ? kT : null;
+           Yq = null !== (Eq = null === gq || void 0 === gq ? void 0 : gq.event) && void 0 !== Eq ? Eq : null;
```

#### 509. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8108-L8109` → after: `L8108-L8109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8108-L8109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8108-L8109) · [Before (L8108-L8109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8108-L8109)

```diff
-         qT = null !== (kT = PT.find((TT => TT.gameCategoryId === AT))) && void 0 !== kT ? kT : null,
-         sT = (0, lT.useMemo)((() => null === qT || null === bT || null === mT ? qT : {
+         eq = null !== (Eq = rq.find((qq => qq.gameCategoryId === Bq))) && void 0 !== Eq ? Eq : null,
+         Dq = (0, Yq.useMemo)((() => null === eq || null === nq || null === hq ? eq : {
```

#### 510. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8156` → after: `L8156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8156) · [Before (L8156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8156)

```diff
-             }), Promise.all([cT.e(70), cT.e(197)]).then((() => cT(39438))).then((kT => {
+             }), Promise.all([gq.e(70), gq.e(198)]).then((() => gq(39576))).then((Eq => {
```

#### 511. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8182` → after: `L8182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8182) · [Before (L8182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8182)

```diff
-     var tf = cT(47);
+     var aA = gq(38);
```

#### 512. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8185` → after: `L8185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8185) · [Before (L8185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8185)

```diff
-       return `studioEventFlow:${TT}`
+       return `studioEventFlow:${qq}`
```

#### 513. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8190` → after: `L8190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8190) · [Before (L8190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8190)

```diff
-       const cT = tf.e.getItem(hf(TT));
+       const gq = aA.i.getItem(VA(qq));
```

#### 514. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8192` → after: `L8192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8192) · [Before (L8192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8192)

```diff
-       return null !== (kT = yK(JSON.stringify(cT), (TT => TT)).shape) && void 0 !== kT ? kT : TK
+       return null !== (Eq = mO(JSON.stringify(gq), (qq => qq)).shape) && void 0 !== Eq ? Eq : Dl
```

#### 515. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8206` → after: `L8206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8206) · [Before (L8206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8206)

```diff
-           0 !== kT.nodes.length ? tf.e.setItem(hf(TT), kT) : tf.e.removeItem(hf(TT))
+           0 !== Eq.nodes.length ? aA.i.setItem(VA(qq), Eq) : aA.i.removeItem(VA(qq))
```

#### 516. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8212` → after: `L8212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8212) · [Before (L8212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8212)

```diff
-           return cT === kT.shape ? kT : {
+           return gq === Eq.shape ? Eq : {
```

#### 517. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8238` → after: `L8238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8238) · [Before (L8238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8238)

```diff
-       } = (0, jT.B)(), {
+       } = (0, Nq.v)(), {
```

#### 518. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8241` → after: `L8241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8241) · [Before (L8241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8241)

```diff
-       } = (0, vT.b)(), hT = !tT, [NT, QT] = (0, lT.useState)(Sf), [DT, aT] = (0, lT.useState)(xK), [FT, rT] = (0, lT.useState)(xK), [PT, wT] = (0, lT.useState)(null), [mT, bT] = (0, lT.useState)(null), [zT, oT] = Qf(OT.gameAnalyticsId), [HT, eT] = (0, lT.useState)(xK), [GT, VT] = … [truncated]
+       } = (0, aq.c)(), dq = !Vq, [jq, Hq] = (0, Yq.useState)(HA), [Pq, Qq] = (0, Yq.useState)(AO), [yq, tq] = (0, Yq.useState)(AO), [rq, vq] = (0, Yq.useState)(null), [hq, nq] = (0, Yq.useState)(null), [bq, Zq] = jA(mq.gameAnalyticsId), [fq, Mq] = (0, Yq.useState)(AO), [Tq, zq] = … [truncated]
```

#### 519. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8308` → after: `L8308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8308) · [Before (L8308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8308)

```diff
-         Mk = null !== gT && gT.answerId === IT ? gT : null,
+         lE = null !== Uq && Uq.answerId === uq ? Uq : null,
```

#### 520. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8310` → after: `L8310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8310) · [Before (L8310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8310)

```diff
-         Ok = WO(null !== (kT = null === Kk || void 0 === Kk ? void 0 : Kk.absolute) && void 0 !== kT ? kT : null, PT),
+         mE = wm(null !== (Eq = null === OE || void 0 === OE ? void 0 : OE.absolute) && void 0 !== Eq ? Eq : null, rq),
```

#### 521. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8312` → after: `L8312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8312) · [Before (L8312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8312)

```diff
-           events: null !== (cT = null === Kk || void 0 === Kk ? void 0 : Kk.absolute) && void 0 !== cT ? cT : null,
+           events: null !== (gq = null === OE || void 0 === OE ? void 0 : OE.absolute) && void 0 !== gq ? gq : null,
```

#### 522. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8318` → after: `L8318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8318) · [Before (L8318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8318)

```diff
-           uF: TT => {
+           Fy: qq => {
```

#### 523. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8333` → after: `L8333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8333) · [Before (L8333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8333)

```diff
-           const MT = null !== (kT = null === (cT = Kk.absolute[TT.gameCategory]) || void 0 === cT || null === (lT = cT[TT.eventType]) || void 0 === lT ? void 0 : lT[TT.eventValue]) && void 0 !== kT ? kT : [],
+           const lq = null !== (Eq = null === (gq = OE.absolute[qq.gameCategory]) || void 0 === gq || null === (Yq = gq[qq.eventType]) || void 0 === Yq ? void 0 : Yq[qq.eventValue]) && void 0 !== Eq ? Eq : [],
```

#### 524. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8349` → after: `L8349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8349) · [Before (L8349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8349)

```diff
-               return null !== (kT = KT.get(cT)) && void 0 !== kT ? kT : 0
+               return null !== (Eq = Oq.get(gq)) && void 0 !== Eq ? Eq : 0
```

#### 525. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8351` → after: `L8351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8351) · [Before (L8351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8351)

```diff
-             Om: () => {
+             OJ: () => {
```

#### 526. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8365` → after: `L8365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8365) · [Before (L8365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8365)

```diff
-           uF: TT => {
+           Fy: qq => {
```

#### 527. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8371` → after: `L8371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8371) · [Before (L8371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8371)

```diff
-           const MT = null !== (kT = null === Ik || void 0 === Ik || null === (cT = Ik[TT.gameCategory]) || void 0 === cT || null === (lT = cT[TT.eventType]) || void 0 === lT ? void 0 : lT[TT.eventValue]) && void 0 !== kT ? kT : null;
+           const lq = null !== (Eq = null === uE || void 0 === uE || null === (gq = uE[qq.gameCategory]) || void 0 === gq || null === (Yq = gq[qq.eventType]) || void 0 === Yq ? void 0 : Yq[qq.eventValue]) && void 0 !== Eq ? Eq : null;
```

#### 528. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8376` → after: `L8376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8376) · [Before (L8376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8376)

```diff
-             Om: () => {
+             OJ: () => {
```

#### 529. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8404` → after: `L8404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8404) · [Before (L8404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8404)

```diff
-                   formatValue: fT.P,
+                   formatValue: Aq.S,
```

#### 530. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8408` → after: `L8408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8408) · [Before (L8408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8408)

```diff
-                   openedId: null !== (MT = null === LT || void 0 === LT ? void 0 : LT.id) && void 0 !== MT ? MT : 0
+                   openedId: null !== (lq = null === kq || void 0 === kq ? void 0 : kq.id) && void 0 !== lq ? lq : 0
```

#### 531. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8420` → after: `L8420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8420) · [Before (L8420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8420)

```diff
-                   formatValue: fT.P,
+                   formatValue: Aq.S,
```

#### 532. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8424` → after: `L8424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8424) · [Before (L8424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8424)

```diff
-                   openedId: null !== (KT = null === LT || void 0 === LT ? void 0 : LT.id) && void 0 !== KT ? KT : 0
+                   openedId: null !== (Oq = null === kq || void 0 === kq ? void 0 : kq.id) && void 0 !== Oq ? Oq : 0
```

#### 533. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8439` → after: `L8439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8439) · [Before (L8439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8439)

```diff
-                   formatValue: fT.P,
+                   formatValue: Aq.S,
```

#### 534. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8441` → after: `L8441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8441) · [Before (L8441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8441)

```diff
-                   headerActions: JT.map((TT => (0, Ak.jsx)(ST.P, {
+                   headerActions: iq.map((qq => (0, BE.jsx)(oq.Q, {
```

#### 535. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8502-L8503` → after: `L8502-L8503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8502-L8503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8502-L8503) · [Before (L8502-L8503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8502-L8503)

```diff
-     var Ff = cT(1833),
-       rf = cT(6498);
+     var QA = gq(1792),
+       yA = gq(6357);
```

#### 536. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8510` → after: `L8510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8510) · [Before (L8510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8510)

```diff
-       return /^-?\d+$/.test(kT) ? `${TT} ${kT}` : kT
+       return /^-?\d+$/.test(Eq) ? `${qq} ${Eq}` : Eq
```

#### 537. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8526` → after: `L8526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8526) · [Before (L8526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8526)

```diff
-       of = /^\s*(<=|>=|<|>)(?![<>=])/,
+       iA = /^\s*(<=|>=|<|>)(?![<>=])/,
```

#### 538. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8595` → after: `L8595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8595) · [Before (L8595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8595)

```diff
-         hint: `a bigger ${TT} makes \`${kT}\` true later, so it lasts longer`,
+         hint: `a bigger ${qq} makes \`${Eq}\` true later, so it lasts longer`,
```

#### 539. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8598` → after: `L8598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8598) · [Before (L8598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8598)

```diff
-       const yT = `a bigger ${TT} makes \`${kT}\` true ${cT?"more":"less"} often`,
+       const xq = `a bigger ${qq} makes \`${Eq}\` true ${gq?"more":"less"} often`,
```

#### 540. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8605` → after: `L8605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8605) · [Before (L8605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8605)

```diff
-           const [OT, yT] = lT ? ["sooner", "later"] : ["later", "sooner"], fT = null !== cT && /^-?\d+(?:\.\d+)?$/.test(cT.trim()) ? Number(cT) : null, xT = null !== (MT = null === cT || void 0 === cT || null === (KT = cT.trim().split(".")[1]) || void 0 === KT ? void 0 : KT.lengt … [truncated]
+           const [mq, xq] = Yq ? ["sooner", "later"] : ["later", "sooner"], Aq = null !== gq && /^-?\d+(?:\.\d+)?$/.test(gq.trim()) ? Number(gq) : null, cq = null !== (lq = null === gq || void 0 === gq || null === (Oq = gq.trim().split(".")[1]) || void 0 === Oq ? void 0 : Oq.lengt … [truncated]
```

#### 541. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8607-L8608` → after: `L8607-L8608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8607-L8608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8607-L8608) · [Before (L8607-L8608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8607-L8608)

```diff
-             bigger: `higher = players are caught ${OT}`,
-             smaller: `lower = players are caught ${yT}`,
+             bigger: `higher = players are caught ${mq}`,
+             smaller: `lower = players are caught ${xq}`,
```

#### 542. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8618` → after: `L8618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8618) · [Before (L8618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8618)

```diff
-         ...null !== (xT = gf(TT)) && void 0 !== xT ? xT : {
+         ...null !== (cq = RA(qq)) && void 0 !== cq ? cq : {
```

#### 543. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8623` → after: `L8623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8623) · [Before (L8623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8623)

```diff
-         hint: `${yT}: ${fT.bigger}${fT.example}`,
+         hint: `${xq}: ${Aq.bigger}${Aq.example}`,
```

#### 544. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8630` → after: `L8630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8630) · [Before (L8630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8630)

```diff
-       const cT = (0, CO.j)(TT);
+       const gq = (0, Bm.l)(qq);
```

#### 545. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8632` → after: `L8632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8632) · [Before (L8632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8632)

```diff
-           const cT = new RegExp(`^\\s*${(0,CO.j)(TT)}\\s*(?:\\*\\s*\\d+\\s*)?$`);
+           const gq = new RegExp(`^\\s*${(0,Bm.l)(qq)}\\s*(?:\\*\\s*\\d+\\s*)?$`);
```

#### 546. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8653` → after: `L8653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8653) · [Before (L8653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8653)

```diff
-         hint: `a bigger ${TT} makes the wait before it runs longer`,
+         hint: `a bigger ${qq} makes the wait before it runs longer`,
```

#### 547. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8656` → after: `L8656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8656) · [Before (L8656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8656)

```diff
-       const lT = new RegExp(`\\b(?:now|Date\\.now\\(\\)|\\w*(?:[Tt]ime|[Tt]ick)\\w*)\\s*\\+\\s*\\(?(?:[^+-]*[^+\\-\\w$.])?${cT}(?![\\w$])(?!\\s*[/-])`);
+       const Yq = new RegExp(`\\b(?:now|Date\\.now\\(\\)|\\w*(?:[Tt]ime|[Tt]ick)\\w*)\\s*\\+\\s*\\(?(?:[^+-]*[^+\\-\\w$.])?${gq}(?![\\w$])(?!\\s*[/-])`);
```

#### 548. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8658` → after: `L8658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8658) · [Before (L8658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8658)

```diff
-         hint: `a bigger ${TT} makes it last longer`,
+         hint: `a bigger ${qq} makes it last longer`,
```

#### 549. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8666-L8668` → after: `L8666-L8668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8666-L8668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8666-L8668) · [Before (L8666-L8668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8666-L8668)

```diff
-         const lT = `${(0,CO.j)(TT)}(?![\\w$])`,
-           MT = TT => (0, jO.h)(TT, new RegExp(lT), jO.p).length > 0;
-         for (const KT of (0, jO.h)(kT, new RegExp(lT, "g"), jO.p)) {
+         const Yq = `${(0,Bm.l)(qq)}(?![\\w$])`,
+           lq = qq => (0, Wm.d)(qq, new RegExp(Yq), Wm.l).length > 0;
+         for (const Oq of (0, Wm.d)(Eq, new RegExp(Yq, "g"), Wm.l)) {
```

#### 550. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8671` → after: `L8671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8671) · [Before (L8671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8671)

```diff
-             yT = (0, jO.h)(lT, Jf, (0, jO.m)("<>=!"))[0];
+             xq = (0, Wm.d)(Yq, bA, (0, Wm.i)("<>=!"))[0];
```

#### 551. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8677` → after: `L8677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8677) · [Before (L8677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8677)

```diff
-               return Wf(TT, `${fT} ${KT} ${TT}`, KT.startsWith("<"), kT, fT, cT, Uf.test(OT))
+               return XA(qq, `${Aq} ${Oq} ${qq}`, Oq.startsWith("<"), Eq, Aq, gq, UA.test(mq))
```

#### 552. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8680` → after: `L8680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8680) · [Before (L8680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8680)

```diff
-           const fT = of.exec(OT);
+           const Aq = iA.exec(mq);
```

#### 553. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8684` → after: `L8684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8684) · [Before (L8684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8684)

```diff
-             if (null !== yT && !MT(yT)) return Wf(TT, `${TT} ${lT} ${yT}`, lT.startsWith(">"), !1, yT, cT, Uf.test(OT))
+             if (null !== xq && !lq(xq)) return XA(qq, `${qq} ${Yq} ${xq}`, Yq.startsWith(">"), !1, xq, gq, UA.test(mq))
```

#### 554. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8688` → after: `L8688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8688) · [Before (L8688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8688)

```diff
-       }(TT, kT, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)) && void 0 !== cT ? cT : nf(TT, kT)
+       }(qq, Eq, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)) && void 0 !== gq ? gq : wA(qq, Eq)
```

#### 555. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8693` → after: `L8693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8693) · [Before (L8693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8693)

```diff
-       return null !== (cT = null === (lT = pf(TT, kT, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)) || void 0 === lT ? void 0 : lT.hint) && void 0 !== cT ? cT : null
+       return null !== (gq = null === (Yq = KA(qq, Eq, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)) || void 0 === Yq ? void 0 : Yq.hint) && void 0 !== gq ? gq : null
```

#### 556. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8748` → after: `L8748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8748) · [Before (L8748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8748)

```diff
-       const OT = null !== (cT = null !== (lT = null === (MT = /^\[\s*(.*?)\s*\]$/.exec(null !== TT && void 0 !== TT ? TT : "")) || void 0 === MT ? void 0 : MT[1]) && void 0 !== lT ? lT : TT) && void 0 !== cT ? cT : "",
+       const mq = null !== (gq = null !== (Yq = null === (lq = /^\[\s*(.*?)\s*\]$/.exec(null !== qq && void 0 !== qq ? qq : "")) || void 0 === lq ? void 0 : lq[1]) && void 0 !== Yq ? Yq : qq) && void 0 !== gq ? gq : "",
```

#### 557. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8750` → after: `L8750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8750) · [Before (L8750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8750)

```diff
-       return null !== yT ? yT[2] : null !== (KT = kT.get(OT)) && void 0 !== KT ? KT : null
+       return null !== xq ? xq[2] : null !== (Oq = Eq.get(mq)) && void 0 !== Oq ? Oq : null
```

#### 558. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8769` → after: `L8769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8769) · [Before (L8769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8769)

```diff
-         fT = (null !== yT && void 0 !== yT ? yT : []).filter((TT => null !== TT && /player|id$|^p$/i.test(TT)));
+         Aq = (null !== xq && void 0 !== xq ? xq : []).filter((qq => null !== qq && /player|id$|^p$/i.test(qq)));
```

#### 559. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8775` → after: `L8775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8775) · [Before (L8775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8775)

```diff
-       if (null === TT || null === kT || null === cT || void 0 === cT || TT.length > CO.u || /\breplace\b/i.test(kT)) return null;
+       if (null === qq || null === Eq || null === gq || void 0 === gq || qq.length > Bm.y || /\breplace\b/i.test(Eq)) return null;
```

#### 560. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8798` → after: `L8798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8798) · [Before (L8798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8798)

```diff
-             lT = null === TT ? void 0 : (null !== (xT = cT.messages) && void 0 !== xT ? xT : []).find((cT => {
+             Yq = null === qq ? void 0 : (null !== (cq = gq.messages) && void 0 !== cq ? cq : []).find((gq => {
```

#### 561. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8806` → after: `L8806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8806) · [Before (L8806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8806)

```diff
-             line: null !== (IT = lT.line) && void 0 !== IT ? IT : null,
+             line: null !== (uq = Yq.line) && void 0 !== uq ? uq : null,
```

#### 562. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8816` → after: `L8816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8816) · [Before (L8816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8816)

```diff
-           vT = 0 === jT.length ? void 0 : (null !== (fT = cT.calls) && void 0 !== fT ? fT : []).find((TT => TT.name === kT && kx(TT.where) === OT && TT.strings.join("\n") === jT.join("\n") && (void 0 === TT.line || Ix(MT[0], TT.line, OT, cT)) && (lT || void 0 === TT.line || Sx(MT … [truncated]
+           aq = 0 === Nq.length ? void 0 : (null !== (Aq = gq.calls) && void 0 !== Aq ? Aq : []).find((qq => qq.name === Eq && DA(qq.where) === mq && qq.strings.join("\n") === Nq.join("\n") && (void 0 === qq.line || Ac(lq[0], qq.line, mq, gq)) && (Yq || void 0 === qq.line || jc(lq … [truncated]
```

#### 563. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8820` → after: `L8820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8820) · [Before (L8820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8820)

```diff
-           line: null !== (AT = vT.line) && void 0 !== AT ? AT : null,
+           line: null !== (Bq = aq.line) && void 0 !== Bq ? Bq : null,
```

#### 564. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8830` → after: `L8830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8830) · [Before (L8830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8830)

```diff
-       if (null === TT || TT.length > CO.u) return null;
+       if (null === qq || qq.length > Bm.y) return null;
```

#### 565. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8881` → after: `L8881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8881) · [Before (L8881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8881)

```diff
-       if (!Kx.has(null !== (lT = Gx(TT)) && void 0 !== lT ? lT : "") || null === kT.line) return !0;
+       if (!Yc.has(null !== (Yq = fc(qq)) && void 0 !== Yq ? Yq : "") || null === Eq.line) return !0;
```

#### 566. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8883` → after: `L8883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8883) · [Before (L8883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8883)

```diff
-         OT = Xx(null !== (MT = null === cT || void 0 === cT ? void 0 : cT.constants) && void 0 !== MT ? MT : []);
+         mq = pc(null !== (lq = null === gq || void 0 === gq ? void 0 : gq.constants) && void 0 !== lq ? lq : []);
```

#### 567. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8892` → after: `L8892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8892) · [Before (L8892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8892)

```diff
-       const yT = null !== (lT = Dx[null !== (MT = Gx(kT)) && void 0 !== MT ? MT : ""]) && void 0 !== lT ? lT : [],
+       const xq = null !== (Yq = Hc[null !== (lq = fc(Eq)) && void 0 !== lq ? lq : ""]) && void 0 !== Yq ? Yq : [],
```

#### 568. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8895` → after: `L8895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8895) · [Before (L8895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8895)

```diff
-           return null !== (kT = fx(TT, cT)) && void 0 !== kT ? kT : TT.replace(/\s+/g, "").replace(/'/g, '"')
+           return null !== (Eq = mc(qq, gq)) && void 0 !== Eq ? Eq : qq.replace(/\s+/g, "").replace(/'/g, '"')
```

#### 569. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8899-L8900` → after: `L8899-L8900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8899-L8900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8899-L8900) · [Before (L8899-L8900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8899-L8900)

```diff
-         const kT = null !== (xT = TT[AT]) && void 0 !== xT ? xT : yT[AT],
-           lT = null !== (IT = OT[AT]) && void 0 !== IT ? IT : yT[AT];
+         const Eq = null !== (cq = qq[Bq]) && void 0 !== cq ? cq : xq[Bq],
+           Yq = null !== (uq = mq[Bq]) && void 0 !== uq ? uq : xq[Bq];
```

#### 570. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8934` → after: `L8934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8934) · [Before (L8934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8934)

```diff
-           const AT = (null !== (KT = kT.calls) && void 0 !== KT ? KT : []).find((TT => {
+           const Bq = (null !== (Oq = Eq.calls) && void 0 !== Oq ? Oq : []).find((qq => {
```

#### 571. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8941` → after: `L8941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8941) · [Before (L8941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8941)

```diff
-             line: null !== (OT = AT.line) && void 0 !== OT ? OT : null,
+             line: null !== (mq = Bq.line) && void 0 !== mq ? mq : null,
```

#### 572. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8953` → after: `L8953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8953) · [Before (L8953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8953)

```diff
-       return TT.length <= 1 ? null !== (kT = TT[0]) && void 0 !== kT ? kT : "" : `${TT.slice(0,-1).join(", ")} and ${TT[TT.length-1]}`
+       return qq.length <= 1 ? null !== (Eq = qq[0]) && void 0 !== Eq ? Eq : "" : `${qq.slice(0,-1).join(", ")} and ${qq[qq.length-1]}`
```

#### 573. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8970` → after: `L8970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8970) · [Before (L8970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8970)

```diff
-       return void 0 === TT ? null : null !== (kT = null === (cT = /\bapi\.(\w+)/.exec(TT)) || void 0 === cT ? void 0 : cT[1]) && void 0 !== kT ? kT : null
+       return void 0 === qq ? null : null !== (Eq = null === (gq = /\bapi\.(\w+)/.exec(qq)) || void 0 === gq ? void 0 : gq[1]) && void 0 !== Eq ? Eq : null
```

#### 574. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8978-L8979` → after: `L8978-L8979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8978-L8979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8978-L8979) · [Before (L8978-L8979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8978-L8979)

```diff
-       if (null === TT || null === kT || null === MT || void 0 === MT || TT.length > CO.u) return null;
-       const yT = (null !== (KT = MT.messages) && void 0 !== KT ? KT : []).filter((TT => !TT.text.includes("\u2026"))),
+       if (null === qq || null === Eq || null === lq || void 0 === lq || qq.length > Bm.y) return null;
+       const xq = (null !== (Oq = lq.messages) && void 0 !== Oq ? Oq : []).filter((qq => !qq.text.includes("\u2026"))),
```

#### 575. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L8999` → after: `L8999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR8999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L8999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L8999) · [Before (L8999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L8999)

```diff
-           line: null !== (CT = cT.line) && void 0 !== CT ? CT : null,
+           line: null !== (Wq = gq.line) && void 0 !== Wq ? Wq : null,
```

#### 576. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9026` → after: `L9026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9026) · [Before (L9026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9026)

```diff
-           line: null !== (NT = TT.line) && void 0 !== NT ? NT : null,
+           line: null !== (jq = qq.line) && void 0 !== jq ? jq : null,
```

#### 577. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9031` → after: `L9031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9031) · [Before (L9031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9031)

```diff
-         ST = Ex.test(`${null!==cT&&void 0!==cT?cT:""}\n${lT}`);
+         oq = Tc.test(`${null!==gq&&void 0!==gq?gq:""}\n${Yq}`);
```

#### 578. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9041` → after: `L9041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9041) · [Before (L9041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9041)

```diff
-         line: null !== (DT = QT.line) && void 0 !== DT ? DT : null,
+         line: null !== (Pq = Hq.line) && void 0 !== Pq ? Pq : null,
```

#### 579. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9044-L9045` → after: `L9044-L9045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9044-L9045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9044-L9045) · [Before (L9044-L9045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9044-L9045)

```diff
-       const aT = (null !== (OT = MT.calls) && void 0 !== OT ? OT : []).filter((TT => "giveItem" === TT.name && kx(TT.where) === tT && void 0 !== TT.strings[0]));
-       return Zx.test(null !== cT && void 0 !== cT ? cT : "") && TT.split("\n").some((TT => /\bapi\.giveItem\s*\(/.test(TT) && null !== Ax(TT, kT, MT, !0))) && aT.length > 0 ? {
+       const Qq = (null !== (mq = lq.calls) && void 0 !== mq ? mq : []).filter((qq => "giveItem" === qq.name && DA(qq.where) === Vq && void 0 !== qq.strings[0]));
+       return zc.test(null !== gq && void 0 !== gq ? gq : "") && qq.split("\n").some((qq => /\bapi\.giveItem\s*\(/.test(qq) && null !== cc(qq, Eq, lq, !0))) && Qq.length > 0 ? {
```

#### 580. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9116-L9117` → after: `L9116-L9117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9116-L9117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9116-L9117) · [Before (L9116-L9117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9116-L9117)

```diff
-         const TT = null !== (cT = null === (lT = gx(KT)) || void 0 === lT ? void 0 : lT.key) && void 0 !== cT ? cT : KT;
-         kT.set(TT, (null !== (MT = kT.get(TT)) && void 0 !== MT ? MT : 0) + 1)
+         const qq = null !== (gq = null === (Yq = kc(Oq)) || void 0 === Yq ? void 0 : Yq.key) && void 0 !== gq ? gq : Oq;
+         Eq.set(qq, (null !== (lq = Eq.get(qq)) && void 0 !== lq ? lq : 0) + 1)
```

#### 581. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9125` → after: `L9125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9125) · [Before (L9125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9125)

```diff
-       return void 0 !== lT && 1 === kT.get(lT) ? lT : null
+       return void 0 !== Yq && 1 === Eq.get(Yq) ? Yq : null
```

#### 582. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9142` → after: `L9142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9142) · [Before (L9142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9142)

```diff
-       return null === KT ? `${lT} ${kT} = ${cT}` : `${KT.key}: ${cT},`
+       return null === Oq ? `${Yq} ${Eq} = ${gq}` : `${Oq.key}: ${gq},`
```

#### 583. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9149` → after: `L9149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9149) · [Before (L9149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9149)

```diff
-       return `current line \`${kT}\`${null===cT?"":` inside \`${cT.object}\``}`
+       return `current line \`${Eq}\`${null===gq?"":` inside \`${gq.object}\``}`
```

#### 584. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9151-L9152` → after: `L9151-L9152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9151-L9152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9151-L9152) · [Before (L9151-L9152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9151-L9152)

```diff
-     const px = /^(?:(const|let|var)\s+)?([A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*)*)\s*[:=]\s*([-+\d.\s*/()_]*\d[-+\d.\s*/()_]*?)\s*[;,]?\s*(?:\/\/.*)?$/,
-       ix = 200;
+     const wc = /^(?:(const|let|var)\s+)?([A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*)*)\s*[:=]\s*([-+\d.\s*/()_]*\d[-+\d.\s*/()_]*?)\s*[;,]?\s*(?:\/\/.*)?$/,
+       Kc = 200;
```

#### 585. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9154-L9158` → after: `L9154-L9158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9154-L9158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9154-L9158) · [Before (L9154-L9158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9154-L9158)

```diff
-     function qx(TT) {
-       const kT = TT.length > ix ? null : px.exec(TT.trim());
-       return null === kT ? null : {
-         path: kT[2],
-         value: kT[3].trim()
+     function Cc(qq) {
+       const Eq = qq.length > Kc ? null : wc.exec(qq.trim());
+       return null === Eq ? null : {
+         path: Eq[2],
+         value: Eq[3].trim()
```

#### 586. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9161` → after: `L9161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9161) · [Before (L9161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9161)

```diff
-     const sx = /replace the line `([A-Za-z_$][\w$]*)\s*:[^`]*`/i,
+     const Ic = /replace the line `([A-Za-z_$][\w$]*)\s*:[^`]*`/i,
```

#### 587. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9168` → after: `L9168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9168) · [Before (L9168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9168)

```diff
-       return TT === kT || kT.startsWith(`${TT}.`)
+       return qq === Eq || Eq.startsWith(`${qq}.`)
```

#### 588. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9175` → after: `L9175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9175) · [Before (L9175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9175)

```diff
-       return cT.length > kT ? `${fI(cT,kT-1).trimEnd()}\u2026` : cT
+       return gq.length > Eq ? `${mu(gq,Eq-1).trimEnd()}\u2026` : gq
```

#### 589. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9184` → after: `L9184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9184) · [Before (L9184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9184)

```diff
-       return TT.length <= kT ? TT : `${fI(TT,Math.max(0,kT-1))}\u2026`
+       return qq.length <= Eq ? qq : `${mu(qq,Math.max(0,Eq-1))}\u2026`
```

#### 590. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9194-L9196` → after: `L9194-L9196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9194-L9196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9194-L9196) · [Before (L9194-L9196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9194-L9196)

```diff
-       const OT = null !== (kT = null === (cT = KT.match(II)) || void 0 === cT ? void 0 : cT.length) && void 0 !== kT ? kT : 0,
-         yT = null !== (lT = null === (MT = KT.match(CI)) || void 0 === MT ? void 0 : MT.length) && void 0 !== lT ? lT : 0;
-       return OT > 0 && (AI.test(KT) ? OT >= yT : OT >= 2 && OT > yT) ? "updateNotes" : "description"
+       const mq = null !== (Eq = null === (gq = Oq.match(Au)) || void 0 === gq ? void 0 : gq.length) && void 0 !== Eq ? Eq : 0,
+         xq = null !== (Yq = null === (lq = Oq.match(uu)) || void 0 === lq ? void 0 : lq.length) && void 0 !== Yq ? Yq : 0;
+       return mq > 0 && (cu.test(Oq) ? mq >= xq : mq >= 2 && mq > xq) ? "updateNotes" : "description"
```

#### 591. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9200` → after: `L9200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9200) · [Before (L9200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9200)

```diff
-       return `game-text-${TT}`
+       return `game-text-${qq}`
```

#### 592. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9213` → after: `L9213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9213) · [Before (L9213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9213)

```diff
-       return `<${TT}>\n${cT}\n</${TT}>`
+       return `<${qq}>\n${gq}\n</${qq}>`
```

#### 593. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9235` → after: `L9235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9235) · [Before (L9235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9235)

```diff
-           return void 0 === lT ? `- ${cT}: ${JSON.stringify(xI(kT,DI))}` : `- ${cT}, current line ${MT=lT,MT.includes("`")?`\`\` ${MT} \`\``: `\`${MT}\``
+           return void 0 === Yq ? `- ${gq}: ${JSON.stringify(xu(Eq,Hu))}` : `- ${gq}, current line ${lq=Yq,lq.includes("`")?`\`\` ${lq} \`\``: `\`${lq}\``
```

#### 594. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9237` → after: `L9237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9237) · [Before (L9237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9237)

```diff
-         `;var MT}))}const rI=/[<>*/%+]|-\s*[\w(]|[!=]==?/,PI=.2;function wI(TT){return TT>=1e3?Math.round(TT/100)/10+"k":String(TT)}function mI(TT,kT){return TT.length>kT?`
+         `;var lq}))}const Qu=/[<>*/%+]|-\s*[\w(]|[!=]==?/,yu=.2;function tu(qq){return qq>=1e3?Math.round(qq/100)/10+"k":String(qq)}function ru(qq,Eq){return qq.length>Eq?`
```

#### 595. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9239` → after: `L9239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9239) · [Before (L9239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9239)

```diff
-           fI(TT, kT - 2)
+           mu(qq, Eq - 2)
```

#### 596. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9242` → after: `L9242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9242) · [Before (L9242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9242)

```diff
-         `:TT}function bI(TT,kT,cT){const lT=[];let MT=0;for(const[KT,OT]of TT.entries()){const yT=TT.length-KT-1,fT=yT>0?cT(yT).length+1:0;if(MT+OT.length+1+fT>kT){const MT=TT.length-KT;return 0===lT.length&&cT(MT).length>kT?[]:[...lT,cT(MT)]}lT.push(OT),MT+=OT.length+1}return lT … [truncated]
+         `:qq}function vu(qq,Eq,gq){const Yq=[];let lq=0;for(const[Oq,mq]of qq.entries()){const xq=qq.length-Oq-1,Aq=xq>0?gq(xq).length+1:0;if(lq+mq.length+1+Aq>Eq){const lq=qq.length-Oq;return 0===Yq.length&&gq(lq).length>Eq?[]:[...Yq,gq(lq)]}Yq.push(mq),lq+=mq.length+1}return Yq … [truncated]
```

#### 597. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9244` → after: `L9244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9244) · [Before (L9244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9244)

```diff
-           TT
+           qq
```

#### 598. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9246-L9248` → after: `L9246-L9248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9246-L9248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9246-L9248) · [Before (L9246-L9248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9246-L9248)

```diff
-           cT.join(", ")
-         })`}function GI(TT,kT){let cT=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const lT=new Map(TT.callbacks.map((TT=>{let{name:kT,params:cT}=TT;return[kT,cT]}))),MT=[...kT,...lT.keys()].join(" "),KT=JI.filter((TT=>{let{callback:kT,pattern:KT,isOnlyDefined:OT}=TT;r … [truncated]
-           1 === MT.length ? "" : "s"
+           gq.join(", ")
+         })`}function fu(qq,Eq){let gq=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const Yq=new Map(qq.callbacks.map((qq=>{let{name:Eq,params:gq}=qq;return[Eq,gq]}))),lq=[...Eq,...Yq.keys()].join(" "),Oq=nu.filter((qq=>{let{callback:Eq,pattern:Oq,isOnlyDefined:mq}=qq;r … [truncated]
+           1 === lq.length ? "" : "s"
```

#### 599. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9251` → after: `L9251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9251) · [Before (L9251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9251)

```diff
-           MT.join(", ")
+           lq.join(", ")
```

#### 600. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9255` → after: `L9255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9255) · [Before (L9255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9255)

```diff
-           fT
+           Aq
```

#### 601. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9257` → after: `L9257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9257) · [Before (L9257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9257)

```diff
-             cT
+             gq
```

#### 602. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9260` → after: `L9260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9260) · [Before (L9260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9260)

```diff
-             KT || OT ? "" : ", not in my code yet"
+             Oq || mq ? "" : ", not in my code yet"
```

#### 603. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9263-L9264` → after: `L9263-L9264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9263-L9264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9263-L9264) · [Before (L9263-L9264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9263-L9264)

```diff
-             xT
-           })`})),fT=cT?"Never put code in tick: it runs many times a second.":"Code in tick runs many times a second, with no player: prefer an event's callback, or loop over api.getPlayerIds() with a check.";return`
+             cq
+           })`})),Aq=gq?"Never put code in tick: it runs many times a second.":"Code in tick runs many times a second, with no player: prefer an event's callback, or loop over api.getPlayerIds() with a check.";return`
```

#### 604. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9267` → after: `L9267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9267) · [Before (L9267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9267)

```diff
-           yT.join(", ")
+           xq.join(", ")
```

#### 605. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9269` → after: `L9269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9269) · [Before (L9269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9269)

```diff
-           fT
+           Aq
```

#### 606. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9271` → after: `L9271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9271) · [Before (L9271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9271)

```diff
-         Prefer changing what my game already has: a callback, a message, a constant.World Code has no setTimeout: for an idea after some minutes, write no timer code; use a sign, a message on an event my game has, or a constant.Keep each player 's state keyed by player id, never  … [truncated]
+         Prefer changing what my game already has: a callback, a message, a constant.World Code has no setTimeout: for an idea after some minutes, write no timer code; use a sign, a message on an event my game has, or a constant.Keep each player 's state keyed by player id, never  … [truncated]
```

#### 607. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9274-L9275` → after: `L9274-L9275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9274-L9275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9274-L9275) · [Before (L9274-L9275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9274-L9275)

```diff
-         function EI(TT) {
-           return TT.omitted.some((TT => VI.test(TT)))
+         function Tu(qq) {
+           return qq.omitted.some((qq => Mu.test(qq)))
```

#### 608. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9277` → after: `L9277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9277) · [Before (L9277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9277)

```diff
-         const ZI = new Set(["onPlayerJoin", "onPlayerLeave", "doPeriodicSave", "onClose"]), uI = /%|interval|Date\.now|elapsed|timer|every|lastLog|lastSave/i, XI = /snapshot|balance|heartbeat|periodic|autosave/i;
+         const zu = new Set(["onPlayerJoin", "onPlayerLeave", "doPeriodicSave", "onClose"]), Su = /%|interval|Date\.now|elapsed|timer|every|lastLog|lastSave/i, pu = /snapshot|balance|heartbeat|periodic|autosave/i;
```

#### 609. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9279-L9282` → after: `L9279-L9282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9279-L9282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9279-L9282) · [Before (L9279-L9282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9279-L9282)

```diff
-         function dI(TT, kT, cT) {
-           var lT;
-           const MT = (null !== (lT = null === cT || void 0 === cT ? void 0 : cT.events) && void 0 !== lT ? lT : []).filter((kT => kT.isLiteralType && kT.eventType.toLowerCase() === TT.toLowerCase()));
-           return MT.length > 0 && MT.every((TT => {
+         function Gu(qq, Eq, gq) {
+           var Yq;
+           const lq = (null !== (Yq = null === gq || void 0 === gq ? void 0 : gq.events) && void 0 !== Yq ? Yq : []).filter((Eq => Eq.isLiteralType && Eq.eventType.toLowerCase() === qq.toLowerCase()));
+           return lq.length > 0 && lq.every((qq => {
```

#### 610. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9284-L9314` → after: `L9284-L9314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9284-L9314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9284-L9314) · [Before (L9284-L9314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9284-L9314)

```diff
-               where: kT,
-               guard: cT
-             } = TT;
-             const lT = kT.split(" > ")[0];
-             return ZI.has(lT) || "tick" === kT && (null === cT || uI.test(cT))
-           })) ? "timed" : XI.test(TT) || XI.test(kT) ? "named" : null
-         }
- 
-         function LI(TT) {
-           return `fires when: ${TT.where}${null===TT.guard?"":` if ${TT.guard}`}`
-         }
- 
-         function RI(TT, kT, cT) {
-           var lT;
-           let MT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : kT.length;
-           const KT = TT => Math.floor(cT * QI[TT]),
- ... (15 more removed lines; see GitHub link above)
+               where: Eq,
+               guard: gq
+             } = qq;
+             const Yq = Eq.split(" > ")[0];
+             return zu.has(Yq) || "tick" === Eq && (null === gq || Su.test(gq))
+           })) ? "timed" : pu.test(qq) || pu.test(Eq) ? "named" : null
+         }
+ 
+         function Lu(qq) {
+           return `fires when: ${qq.where}${null===qq.guard?"":` if ${qq.guard}`}`
+         }
+ 
+         function Ju(qq, Eq, gq) {
+           var Yq;
+           let lq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Eq.length;
+           const Oq = qq => Math.floor(gq * du[qq]),
+ ... (15 more added lines; see GitHub link above)
```

#### 611. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9317-L9324` → after: `L9317-L9324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9317-L9324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9317-L9324) · [Before (L9317-L9324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9317-L9324)

```diff
-             CT = new Set;
-           let jT = !1;
-           const vT = TT => {
-               const kT = xT.has(TT) ? {
-                 eventType: TT,
-                 events: xT.get(TT)
-               } : AT.get(TT.toLowerCase());
-               return void 0 === kT ? jT = !0 : CT.add(kT.eventType), kT
+             Wq = new Set;
+           let Nq = !1;
+           const aq = qq => {
+               const Eq = cq.has(qq) ? {
+                 eventType: qq,
+                 events: cq.get(qq)
+               } : Bq.get(qq.toLowerCase());
+               return void 0 === Eq ? Nq = !0 : Wq.add(Eq.eventType), Eq
```

#### 612. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9326` → after: `L9326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9326) · [Before (L9326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9326)

```diff
-             tT = kT.slice(0, MT).map((TT => {
+             Vq = Eq.slice(0, lq).map((qq => {
```

#### 613. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9328-L9331` → after: `L9328-L9331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9328-L9331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9328-L9331) · [Before (L9328-L9331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9328-L9331)

```diff
-                 eventType: kT
-               } = TT;
-               const cT = vT(kT);
-               return void 0 === cT ? `- ${kT}: not in the current code` : `- ${kT}: ${function(TT){const kT=TT.map(LI),cT=[...new Set(TT.flatMap((TT=>null===TT.numberExpression?[]:[TT.numberExpression])))],lT=[...new Set(TT.flatMap((TT=>null===TT.valueExpression?[]:[TT.valueExpre … [truncated]
+                 eventType: Eq
+               } = qq;
+               const gq = aq(Eq);
+               return void 0 === gq ? `- ${Eq}: not in the current code` : `- ${Eq}: ${function(qq){const Eq=qq.map(Lu),gq=[...new Set(qq.flatMap((qq=>null===qq.numberExpression?[]:[qq.numberExpression])))],Yq=[...new Set(qq.flatMap((qq=>null===qq.valueExpression?[]:[qq.valueExpre … [truncated]
```

#### 614. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9334` → after: `L9334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9334) · [Before (L9334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9334)

```diff
-               eventType: PT
+               eventType: rq
```

#### 615. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9336-L9353` → after: `L9336-L9353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9336-L9353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9336-L9353) · [Before (L9336-L9353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9336-L9353)

```diff
-             of kT.slice(MT)) vT(PT);
-           tT.length > 0 && OT.push("Events in my data, and where my code sends them:", ...bI(tT, KT("events"), (TT => `- and ${TT} more`)));
-           const hT = [...xT.keys()].filter((TT => !CT.has(TT) && (!jT || xT.get(TT).some((TT => TT.isLiteralType)))));
-           if (hT.length > 0) {
-             const TT = `Events my code already sends that my data doesn't show yet, so they are built already: ${hT.join(", ")}.`;
-             OT.push(mI(TT, KT("codeOnlyEvents")))
-           }
-           if (TT.analyticsHelpers.length > 0 && OT.push(`My code sends events through its own function${1===TT.analyticsHelpers.length?"":"s"} ${TT.analyticsHelpers.join(", ")}.`), OT.push(TT.tracksPlayerPositions ? "My code records where players are, for the heatmaps." : "My cod … [truncated]
-             const kT = `Game callbacks my code defines, with their parameters and what runs them, the largest first: ${TT.callbacks.map((TT=>{const kT=[zI.get(TT.name),TT.chars>0?`${wI(TT.chars)} characters`:void 0].filter((TT=>void 0!==TT)),cT=eI(TT.name,TT.params);return kT.len … [truncated]
-             OT.push(mI(kT, KT("callbacks")))
-           } else OT.push("My code defines no game callbacks.");
-           const NT = null !== (lT = TT.messages) && void 0 !== lT ? lT : [];
-           let QT = KT("playerText");
-           if (NT.length > 0) {
-             const TT = [`${aI} players, with where and its current line if known:`, ...bI(FI(NT), Math.floor(cT * SI), (TT => `- and ${TT} more`))];
-             OT.push(...TT), QT -= TT.join("\n").length + 1
- ... (2 more removed lines; see GitHub link above)
+             of Eq.slice(lq)) aq(rq);
+           Vq.length > 0 && mq.push("Events in my data, and where my code sends them:", ...vu(Vq, Oq("events"), (qq => `- and ${qq} more`)));
+           const dq = [...cq.keys()].filter((qq => !Wq.has(qq) && (!Nq || cq.get(qq).some((qq => qq.isLiteralType)))));
+           if (dq.length > 0) {
+             const qq = `Events my code already sends that my data doesn't show yet, so they are built already: ${dq.join(", ")}.`;
+             mq.push(ru(qq, Oq("codeOnlyEvents")))
+           }
+           if (qq.analyticsHelpers.length > 0 && mq.push(`My code sends events through its own function${1===qq.analyticsHelpers.length?"":"s"} ${qq.analyticsHelpers.join(", ")}.`), mq.push(qq.tracksPlayerPositions ? "My code records where players are, for the heatmaps." : "My cod … [truncated]
+             const Eq = `Game callbacks my code defines, with their parameters and what runs them, the largest first: ${qq.callbacks.map((qq=>{const Eq=[hu.get(qq.name),qq.chars>0?`${tu(qq.chars)} characters`:void 0].filter((qq=>void 0!==qq)),gq=Zu(qq.name,qq.params);return Eq.len … [truncated]
+             mq.push(ru(Eq, Oq("callbacks")))
+           } else mq.push("My code defines no game callbacks.");
+           const jq = null !== (Yq = qq.messages) && void 0 !== Yq ? Yq : [];
+           let Hq = Oq("playerText");
+           if (jq.length > 0) {
+             const qq = [`${ou} players, with where and its current line if known:`, ...vu(Pu(jq), Math.floor(gq * ju), (qq => `- and ${qq} more`))];
+             mq.push(...qq), Hq -= qq.join("\n").length + 1
+ ... (2 more added lines; see GitHub link above)
```

#### 616. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9355-L9357` → after: `L9355-L9357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9355-L9357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9355-L9357) · [Before (L9355-L9357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9355-L9357)

```diff
-                 text: kT
-               } = TT;
-               return kT.toLowerCase()
+                 text: Eq
+               } = qq;
+               return Eq.toLowerCase()
```

#### 617. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9359-L9369` → after: `L9359-L9369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9359-L9369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9359-L9369) · [Before (L9359-L9369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9359-L9369)

```diff
-             DT = TT.playerText.filter((TT => {
-               const kT = TT.toLowerCase().trim();
-               return !ST.some((TT => TT.includes(kT)))
-             })).map((TT => `- ${JSON.stringify(xI(TT,DI))}`)),
-             aT = NT.length > 0 ? "Other text my game shows players:" : "Text my game shows players, the most useful first:";
-           DT.length > 0 && QT > aT.length && OT.push(aT, ...bI(DT, QT, (TT => `- and ${TT} more`)));
-           const FT = 0 === TT.omitted.length ? null : mI(`Left out of this summary of my code: ${TT.omitted.join("; ")}.`, KT("notes")),
-             rT = cT - OT.join("\n").length - 1 - (null === FT ? 0 : FT.length + 1);
-           return OT.push(... function(TT, kT) {
-             let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : kT;
-             const lT = TT.map((TT => {
+             Pq = qq.playerText.filter((qq => {
+               const Eq = qq.toLowerCase().trim();
+               return !oq.some((qq => qq.includes(Eq)))
+             })).map((qq => `- ${JSON.stringify(xu(qq,Hu))}`)),
+             Qq = jq.length > 0 ? "Other text my game shows players:" : "Text my game shows players, the most useful first:";
+           Pq.length > 0 && Hq > Qq.length && mq.push(Qq, ...vu(Pq, Hq, (qq => `- and ${qq} more`)));
+           const yq = 0 === qq.omitted.length ? null : ru(`Left out of this summary of my code: ${qq.omitted.join("; ")}.`, Oq("notes")),
+             tq = gq - mq.join("\n").length - 1 - (null === yq ? 0 : yq.length + 1);
+           return mq.push(... function(qq, Eq) {
+             let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Eq;
+             const Yq = qq.map((qq => {
```

#### 618. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9371-L9376` → after: `L9371-L9376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9371-L9376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9371-L9376) · [Before (L9371-L9376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9371-L9376)

```diff
-                   name: kT,
-                   value: cT,
-                   declaredWith: lT
-                 } = TT;
-                 const MT = gx(kT);
-                 return null !== MT ? `${MT.object} { ${MT.key}: ${cT} }` : `${void 0===lT?"":`${lT} `}${kT} = ${cT}`
+                   name: Eq,
+                   value: gq,
+                   declaredWith: Yq
+                 } = qq;
+                 const lq = kc(Eq);
+                 return null !== lq ? `${lq.object} { ${lq.key}: ${gq} }` : `${void 0===Yq?"":`${Yq} `}${Eq} = ${gq}`
```

#### 619. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9378-L9383` → after: `L9378-L9383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9378-L9383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9378-L9383) · [Before (L9378-L9383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9378-L9383)

```diff
-               MT = TT.map((TT => void 0 === TT.usedIn ? null : qf(TT.name, TT.usedIn, TT.value))),
-               KT = kT => null !== MT[kT] ? 2 : Number(rI.test(TT[kT].usedIn)),
-               OT = TT.map(((TT, kT) => ({
-                 index: kT,
-                 usedIn: TT.usedIn
-               }))).filter((TT => {
+               lq = qq.map((qq => void 0 === qq.usedIn ? null : CA(qq.name, qq.usedIn, qq.value))),
+               Oq = Eq => null !== lq[Eq] ? 2 : Number(Qu.test(qq[Eq].usedIn)),
+               mq = qq.map(((qq, Eq) => ({
+                 index: Eq,
+                 usedIn: qq.usedIn
+               }))).filter((qq => {
```

#### 620. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9385-L9391` → after: `L9385-L9391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9385-L9391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9385-L9391) · [Before (L9385-L9391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9385-L9391)

```diff
-                   usedIn: kT
-                 } = TT;
-                 return void 0 !== kT
-               })).sort(((TT, kT) => KT(TT.index) - KT(kT.index) || kT.index - TT.index)),
-               yT = "Constants my code is tuned by, each with the first code that reads it, which shows what a bigger or smaller number does:";
-             for (let xT = 0; xT < OT.length; xT++) {
-               const cT = new Set(OT.slice(0, xT).map((TT => {
+                   usedIn: Eq
+                 } = qq;
+                 return void 0 !== Eq
+               })).sort(((qq, Eq) => Oq(qq.index) - Oq(Eq.index) || Eq.index - qq.index)),
+               xq = "Constants my code is tuned by, each with the first code that reads it, which shows what a bigger or smaller number does:";
+             for (let cq = 0; cq < mq.length; cq++) {
+               const gq = new Set(mq.slice(0, cq).map((qq => {
```

#### 621. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9393-L9395` → after: `L9393-L9395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9393-L9395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9393-L9395) · [Before (L9393-L9395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9393-L9395)

```diff
-                     index: kT
-                   } = TT;
-                   return kT
+                     index: Eq
+                   } = qq;
+                   return Eq
```

#### 622. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9397-L9400` → after: `L9397-L9400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9397-L9400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9397-L9400) · [Before (L9397-L9400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9397-L9400)

```diff
-                 KT = TT.map(((TT, kT) => {
-                   if (void 0 === TT.usedIn || cT.has(kT)) return `- ${lT[kT]}`;
-                   const KT = MT[kT];
-                   return null === KT ? `- ${lT[kT]}, used in: ${TT.usedIn}` : `- ${lT[kT]}, used in: ${TT.usedIn.replace(/;$/,"")}. So ${KT}`
+                 Oq = qq.map(((qq, Eq) => {
+                   if (void 0 === qq.usedIn || gq.has(Eq)) return `- ${Yq[Eq]}`;
+                   const Oq = lq[Eq];
+                   return null === Oq ? `- ${Yq[Eq]}, used in: ${qq.usedIn}` : `- ${Yq[Eq]}, used in: ${qq.usedIn.replace(/;$/,"")}. So ${Oq}`
```

#### 623. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9402` → after: `L9402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9402) · [Before (L9402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9402)

```diff
-               if ([yT, ...KT].join("\n").length <= kT) return [yT, ...KT]
+               if ([xq, ...Oq].join("\n").length <= Eq) return [xq, ...Oq]
```

#### 624. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9404-L9428` → after: `L9404-L9428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9404-L9428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9404-L9428) · [Before (L9404-L9428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9404-L9428)

```diff
-             const fT = bI(lT, Math.min(kT, cT) - 40, (TT => `and ${TT} more`));
-             return 0 === fT.length ? [] : [`Constants my code is tuned by: ${UI(fT).join("; ")}.`]
-           }(TT.constants, Math.max(KT("constants"), Math.min(rT, Math.floor(cT * PI))), KT("constants"))), null !== FT && OT.push(FT), OT
-         }
-         const gI = /^(.+?) \{ (.*) \}$/;
- 
-         function UI(TT) {
-           const kT = [];
-           let cT = null;
-           for (const MT of TT) {
-             var lT;
-             const TT = gI.exec(MT);
-             null === TT || (null === (lT = cT) || void 0 === lT ? void 0 : lT.object) !== TT[1] ? (cT = null === TT ? null : {
-               object: TT[1],
-               properties: [TT[2]]
-             }, kT.push(MT)) : (cT.properties.push(TT[2]), kT[kT.length - 1] = `${cT.object} { ${cT.properties.join(", ")} }`)
- ... (9 more removed lines; see GitHub link above)
+             const Aq = vu(Yq, Math.min(Eq, gq) - 40, (qq => `and ${qq} more`));
+             return 0 === Aq.length ? [] : [`Constants my code is tuned by: ${Ru(Aq).join("; ")}.`]
+           }(qq.constants, Math.max(Oq("constants"), Math.min(tq, Math.floor(gq * yu))), Oq("constants"))), null !== yq && mq.push(yq), mq
+         }
+         const ku = /^(.+?) \{ (.*) \}$/;
+ 
+         function Ru(qq) {
+           const Eq = [];
+           let gq = null;
+           for (const lq of qq) {
+             var Yq;
+             const qq = ku.exec(lq);
+             null === qq || (null === (Yq = gq) || void 0 === Yq ? void 0 : Yq.object) !== qq[1] ? (gq = null === qq ? null : {
+               object: qq[1],
+               properties: [qq[2]]
+             }, Eq.push(lq)) : (gq.properties.push(qq[2]), Eq[Eq.length - 1] = `${gq.object} { ${gq.properties.join(", ")} }`)
+ ... (9 more added lines; see GitHub link above)
```

#### 625. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9430-L9435` → after: `L9430-L9435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9430-L9435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9430-L9435) · [Before (L9430-L9435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9430-L9435)

```diff
-                 eventType: kT,
-                 values: cT
-               } = TT;
-               const lT = (null !== cT && void 0 !== cT ? cT : []).filter((TT => "" !== TT)),
-                 MT = lT.slice(0, BI).join(", ");
-               return 0 === lT.length ? kT : `${kT} (${MT}${lT.length>BI?", \u2026":""})`
+                 eventType: Eq,
+                 values: gq
+               } = qq;
+               const Yq = (null !== gq && void 0 !== gq ? gq : []).filter((qq => "" !== qq)),
+                 lq = Yq.slice(0, Fu).join(", ");
+               return 0 === Yq.length ? Eq : `${Eq} (${lq}${Yq.length>Fu?", \u2026":""})`
```

#### 626. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9437` → after: `L9437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9437) · [Before (L9437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9437)

```diff
-             yT = new Set(kT.map((TT => {
+             xq = new Set(Eq.map((qq => {
```

#### 627. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9439-L9441` → after: `L9439-L9441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9439-L9441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9439-L9441) · [Before (L9439-L9441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9439-L9441)

```diff
-                 eventType: kT
-               } = TT;
-               return kT.toLowerCase()
+                 eventType: Eq
+               } = qq;
+               return Eq.toLowerCase()
```

#### 628. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9443-L9449` → after: `L9443-L9449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9443-L9449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9443-L9449) · [Before (L9443-L9449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9443-L9449)

```diff
-             fT = (null !== (cT = null === TT || void 0 === TT ? void 0 : TT.events) && void 0 !== cT ? cT : []).filter((TT => TT.isLiteralType && !yT.has(TT.eventType.toLowerCase()))).map((TT => TT.eventType)),
-             xT = [...OT, ...new Set(fT)].slice(0, YI + 2);
-           xT.length > 0 && KT.push(`- Logs these custom events: ${xT.join(", ")}.`);
-           const IT = function(TT) {
-             var kT, cT;
-             if (null === TT || void 0 === TT) return null;
-             const lT = (null !== (kT = TT.calls) && void 0 !== kT ? kT : []).flatMap((TT => {
+             Aq = (null !== (gq = null === qq || void 0 === qq ? void 0 : qq.events) && void 0 !== gq ? gq : []).filter((qq => qq.isLiteralType && !xq.has(qq.eventType.toLowerCase()))).map((qq => qq.eventType)),
+             cq = [...mq, ...new Set(Aq)].slice(0, Uu + 2);
+           cq.length > 0 && Oq.push(`- Logs these custom events: ${cq.join(", ")}.`);
+           const uq = function(qq) {
+             var Eq, gq;
+             if (null === qq || void 0 === qq) return null;
+             const Yq = (null !== (Eq = qq.calls) && void 0 !== Eq ? Eq : []).flatMap((qq => {
```

#### 629. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9451-L9455` → after: `L9451-L9455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9451-L9455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9451-L9455) · [Before (L9451-L9455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9451-L9455)

```diff
-                   name: kT,
-                   strings: cT,
-                   where: lT
-                 } = TT;
-                 return "onPlayerJoin" !== kx(lT) || void 0 === cT[0] ? [] : "giveItem" === kT ? [cT[0]] : "applyEffect" === kT ? [`the ${cT[0]} effect`] : []
+                   name: Eq,
+                   strings: gq,
+                   where: Yq
+                 } = qq;
+                 return "onPlayerJoin" !== DA(Yq) || void 0 === gq[0] ? [] : "giveItem" === Eq ? [gq[0]] : "applyEffect" === Eq ? [`the ${gq[0]} effect`] : []
```

#### 630. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9457` → after: `L9457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9457) · [Before (L9457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9457)

```diff
-               MT = (null !== (cT = TT.messages) && void 0 !== cT ? cT : []).filter((TT => {
+               lq = (null !== (gq = qq.messages) && void 0 !== gq ? gq : []).filter((qq => {
```

#### 631. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9459-L9462` → after: `L9459-L9462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9459-L9462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9459-L9462) · [Before (L9459-L9462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9459-L9462)

```diff
-                   where: kT
-                 } = TT;
-                 return "onPlayerJoin" === kx(kT)
-               })).slice(0, bx).map((TT => {
+                   where: Eq
+                 } = qq;
+                 return "onPlayerJoin" === DA(Eq)
+               })).slice(0, vc).map((qq => {
```

#### 632. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9464-L9466` → after: `L9464-L9466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9464-L9466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9464-L9466) · [Before (L9464-L9466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9464-L9466)

```diff
-                   text: kT
-                 } = TT;
-                 return JSON.stringify(kT.length > zx ? `${kT.slice(0,zx-1).trimEnd()}\u2026` : kT)
+                   text: Eq
+                 } = qq;
+                 return JSON.stringify(Eq.length > hc ? `${Eq.slice(0,hc-1).trimEnd()}\u2026` : Eq)
```

#### 633. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9468-L9474` → after: `L9468-L9474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9468-L9474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9468-L9474) · [Before (L9468-L9474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9468-L9474)

```diff
-               KT = [...new Set(lT)].slice(0, mx),
-               OT = [...0 === KT.length ? [] : [`gives ${Jx(KT)}`], ...0 === MT.length ? [] : [`says ${Jx(MT)}`]];
-             return 0 === OT.length ? null : OT.join(", and ")
-           }(TT);
-           if (null !== IT && KT.push(`- When a player joins (onPlayerJoin), my code already ${IT}.`), null !== TT && 0 === (null !== (lT = null === (MT = TT.messages) || void 0 === MT ? void 0 : MT.length) && void 0 !== lT ? lT : 0)) {
-             const kT = TT.playerText.slice(0, WI).map((TT => JSON.stringify(xI(TT, nI))));
-             kT.length > 0 && KT.push(`- Already shows players messages like ${kT.join(", ")}: an idea can change one, rather than add it again.`)
+               Oq = [...new Set(Yq)].slice(0, rc),
+               mq = [...0 === Oq.length ? [] : [`gives ${nc(Oq)}`], ...0 === lq.length ? [] : [`says ${nc(lq)}`]];
+             return 0 === mq.length ? null : mq.join(", and ")
+           }(qq);
+           if (null !== uq && Oq.push(`- When a player joins (onPlayerJoin), my code already ${uq}.`), null !== qq && 0 === (null !== (Yq = null === (lq = qq.messages) || void 0 === lq ? void 0 : lq.length) && void 0 !== Yq ? Yq : 0)) {
+             const Eq = qq.playerText.slice(0, su).map((qq => JSON.stringify(xu(qq, Xu))));
+             Eq.length > 0 && Oq.push(`- Already shows players messages like ${Eq.join(", ")}: an idea can change one, rather than add it again.`)
```

#### 634. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9476` → after: `L9476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9476) · [Before (L9476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9476)

```diff
-           return KT
+           return Oq
```

#### 635. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9478` → after: `L9478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9478) · [Before (L9478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9478)

```diff
-         const iI = [{
+         const Ku = [{
```

#### 636. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9503` → after: `L9503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9503) · [Before (L9503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9503)

```diff
-         }], qI = "Next change";
+         }], Cu = "Next change";
```

#### 637. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9505-L9506` → after: `L9505-L9506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9505-L9506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9505-L9506) · [Before (L9505-L9506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9505-L9506)

```diff
-         function sI(TT) {
-           return /^((your|the|one|my) )?next change\b/.test(yA(TT))
+         function Iu(qq) {
+           return /^((your|the|one|my) )?next change\b/.test(OB(qq))
```

#### 638. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9509-L9511` → after: `L9509-L9511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9509-L9511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9509-L9511) · [Before (L9509-L9511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9509-L9511)

```diff
-         function TA(TT, kT) {
-           const cT = iI.find((kT => kT.key === TT));
-           return kT ? cT.gentleHeading : cT.heading
+         function eu(qq, Eq) {
+           const gq = Ku.find((Eq => Eq.key === qq));
+           return Eq ? gq.gentleHeading : gq.heading
```

#### 639. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9514-L9515` → after: `L9514-L9515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9514-L9515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9514-L9515) · [Before (L9514-L9515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9514-L9515)

```diff
-         function kA(TT, kT) {
-           const cT = TT.sections.filter((TT => "trackNext" !== TT.key)),
+         function Du(qq, Eq) {
+           const gq = qq.sections.filter((qq => "trackNext" !== qq.key)),
```

#### 640. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9517-L9521` → after: `L9517-L9521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9517-L9521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9517-L9521) · [Before (L9517-L9521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9517-L9521)

```diff
-               texts: lT,
-               isChanged: MT
-             } = kT([TT.summary, ...cT.map((TT => TT.markdown))]);
-           if (!MT) return TT;
-           const [KT, ...OT] = lT;
+               texts: Yq,
+               isChanged: lq
+             } = Eq([qq.summary, ...gq.map((qq => qq.markdown))]);
+           if (!lq) return qq;
+           const [Oq, ...mq] = Yq;
```

#### 641. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9523-L9528` → after: `L9523-L9528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9523-L9528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9523-L9528) · [Before (L9523-L9528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9523-L9528)

```diff
-             summary: KT,
-             sections: TT.sections.map((TT => {
-               const kT = cT.indexOf(TT);
-               return -1 === kT ? TT : {
-                 ...TT,
-                 markdown: OT[kT]
+             summary: Oq,
+             sections: qq.sections.map((qq => {
+               const Eq = gq.indexOf(qq);
+               return -1 === Eq ? qq : {
+                 ...qq,
+                 markdown: mq[Eq]
```

#### 642. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9533` → after: `L9533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9533) · [Before (L9533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9533)

```diff
-         const cA = 3;
+         const qB = 3;
```

#### 643. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9535-L9540` → after: `L9535-L9540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9535-L9540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9535-L9540) · [Before (L9535-L9540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9535-L9540)

```diff
-         function lA(TT) {
-           const kT = TT.trimEnd(),
-             cT = /^ {0,3}(#{1,6})(?:\s+(.*))?$/.exec(kT);
-           var lT;
-           if (null !== cT) return {
-             text: MA(null !== (lT = cT[2]) && void 0 !== lT ? lT : ""),
+         function EB(qq) {
+           const Eq = qq.trimEnd(),
+             gq = /^ {0,3}(#{1,6})(?:\s+(.*))?$/.exec(Eq);
+           var Yq;
+           if (null !== gq) return {
+             text: gB(null !== (Yq = gq[2]) && void 0 !== Yq ? Yq : ""),
```

#### 644. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9542` → after: `L9542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9542) · [Before (L9542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9542)

```diff
-             style: cT[1]
+             style: gq[1]
```

#### 645. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9544-L9546` → after: `L9544-L9546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9544-L9546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9544-L9546) · [Before (L9544-L9546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9544-L9546)

```diff
-           const MT = /^\s*(\*\*|__)(.+?)\1(?:\s*:)?$/.exec(kT);
-           return null !== MT && (MT[2].trim().split(/\s+/).length <= cA || fA.has(yA(MT[2]))) ? {
-             text: MT[2],
+           const lq = /^\s*(\*\*|__)(.+?)\1(?:\s*:)?$/.exec(Eq);
+           return null !== lq && (lq[2].trim().split(/\s+/).length <= qB || mB.has(OB(lq[2]))) ? {
+             text: lq[2],
```

#### 646. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9552-L9555` → after: `L9552-L9555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9552-L9555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9552-L9555) · [Before (L9552-L9555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9552-L9555)

```diff
-         function MA(TT) {
-           let kT = TT.length;
-           for (; kT > 0 && "#" === TT[kT - 1];) kT--;
-           return kT === TT.length || kT > 0 && !/\s/.test(TT[kT - 1]) ? TT : TT.slice(0, kT).trimEnd()
+         function gB(qq) {
+           let Eq = qq.length;
+           for (; Eq > 0 && "#" === qq[Eq - 1];) Eq--;
+           return Eq === qq.length || Eq > 0 && !/\s/.test(qq[Eq - 1]) ? qq : qq.slice(0, Eq).trimEnd()
```

#### 647. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9557` → after: `L9557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9557) · [Before (L9557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9557)

```diff
-         const KA = /^(\s*)```/;
+         const YB = /^(\s*)```/;
```

#### 648. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9559-L9561` → after: `L9559-L9561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9559-L9561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9559-L9561) · [Before (L9559-L9561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9559-L9561)

```diff
-         function OA(TT, kT, cT) {
-           for (let lT = kT + 1; lT < cT; lT++)
-             if (KA.test(TT[lT])) return /^\s*```\s*$/.test(TT[lT]);
+         function lB(qq, Eq, gq) {
+           for (let Yq = Eq + 1; Yq < gq; Yq++)
+             if (YB.test(qq[Yq])) return /^\s*```\s*$/.test(qq[Yq]);
```

#### 649. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9565-L9566` → after: `L9565-L9566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9565-L9566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9565-L9566) · [Before (L9565-L9566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9565-L9566)

```diff
-         function yA(TT) {
-           return TT.toLowerCase().replace(/[*_`:]/g, "").replace(/[^\p{L}\p{N}' ]+/gu, " ").replace(/\s+/g, " ").trim()
+         function OB(qq) {
+           return qq.toLowerCase().replace(/[*_`:]/g, "").replace(/[^\p{L}\p{N}' ]+/gu, " ").replace(/\s+/g, " ").trim()
```

#### 650. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9568` → after: `L9568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9568) · [Before (L9568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9568)

```diff
-         const fA = new Set(iI.flatMap((TT => [TT.heading.toLowerCase(), TT.gentleHeading.toLowerCase()])));
+         const mB = new Set(Ku.flatMap((qq => [qq.heading.toLowerCase(), qq.gentleHeading.toLowerCase()])));
```

#### 651. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9570-L9573` → after: `L9570-L9573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9570-L9573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9570-L9573) · [Before (L9570-L9573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9570-L9573)

```diff
-         function xA(TT) {
-           var kT, cT;
-           const lT = yA(TT);
-           return null !== (kT = null === (cT = iI.find((TT => TT.matches.test(lT)))) || void 0 === cT ? void 0 : cT.key) && void 0 !== kT ? kT : null
+         function xB(qq) {
+           var Eq, gq;
+           const Yq = OB(qq);
+           return null !== (Eq = null === (gq = Ku.find((qq => qq.matches.test(Yq)))) || void 0 === gq ? void 0 : gq.key) && void 0 !== Eq ? Eq : null
```

#### 652. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9575` → after: `L9575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9575) · [Before (L9575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9575)

```diff
-         const IA = "\0", AA = /^\s*([-*+]|\d+[.)])\s/;
+         const AB = "\0", cB = /^\s*([-*+]|\d+[.)])\s/;
```

#### 653. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9577-L9583` → after: `L9577-L9583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9577-L9583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9577-L9583) · [Before (L9577-L9583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9577-L9583)

```diff
-         function CA(TT) {
-           return TT.flatMap(((kT, cT) => {
-             var lT;
-             if (kT !== IA) return [kT];
-             const MT = null !== (lT = TT[cT - 1]) && void 0 !== lT ? lT : "",
-               KT = TT.slice(cT + 1).find((TT => TT !== IA && "" !== TT.trim()));
-             return void 0 === KT || AA.test(KT) || "" === MT.trim() || MT === IA ? [] : [""]
+         function uB(qq) {
+           return qq.flatMap(((Eq, gq) => {
+             var Yq;
+             if (Eq !== AB) return [Eq];
+             const lq = null !== (Yq = qq[gq - 1]) && void 0 !== Yq ? Yq : "",
+               Oq = qq.slice(gq + 1).find((qq => qq !== AB && "" !== qq.trim()));
+             return void 0 === Oq || cB.test(Oq) || "" === lq.trim() || lq === AB ? [] : [""]
```

#### 654. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9587-L9609` → after: `L9587-L9609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9587-L9609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9587-L9609) · [Before (L9587-L9609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9587-L9609)

```diff
-         function jA(TT) {
-           const kT = [],
-             cT = new Map,
-             lT = new Set;
-           let MT = null,
-             KT = null,
-             OT = !1;
-           const yT = TT.split(/\r?\n/);
-           for (const [IT, AT] of yT.entries()) {
-             KA.test(AT) && (OT = !OT && OA(yT, IT, yT.length));
-             const TT = OT ? null : lA(AT),
-               CT = null !== TT && (null === KT || TT.style === KT || fA.has(yA(TT.text))),
-               jT = null !== TT && CT ? xA(TT.text) : null;
-             var fT;
-             if (null !== TT && sI(TT.text)) MT = null !== (fT = cT.get("fixFirst")) && void 0 !== fT ? fT : [], cT.set("fixFirst", MT), MT.push(AT);
-             else if (null !== jT) {
- ... (7 more removed lines; see GitHub link above)
+         function BB(qq) {
+           const Eq = [],
+             gq = new Map,
+             Yq = new Set;
+           let lq = null,
+             Oq = null,
+             mq = !1;
+           const xq = qq.split(/\r?\n/);
+           for (const [uq, Bq] of xq.entries()) {
+             YB.test(Bq) && (mq = !mq && lB(xq, uq, xq.length));
+             const qq = mq ? null : EB(Bq),
+               Wq = null !== qq && (null === Oq || qq.style === Oq || mB.has(OB(qq.text))),
+               Nq = null !== qq && Wq ? xB(qq.text) : null;
+             var Aq;
+             if (null !== qq && Iu(qq.text)) lq = null !== (Aq = gq.get("fixFirst")) && void 0 !== Aq ? Aq : [], gq.set("fixFirst", lq), lq.push(Bq);
+             else if (null !== Nq) {
+ ... (7 more added lines; see GitHub link above)
```

#### 655. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9611-L9617` → after: `L9611-L9617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9611-L9617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9611-L9617) · [Before (L9611-L9617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9611-L9617)

```diff
-                 key: kT
-               } = TT;
-               const MT = cT.get(kT);
-               return void 0 === MT ? [] : [{
-                 key: kT,
-                 heading: TA(kT, lT.has(kT)),
-                 markdown: CA(MT).trim()
+                 key: Eq
+               } = qq;
+               const lq = gq.get(Eq);
+               return void 0 === lq ? [] : [{
+                 key: Eq,
+                 heading: eu(Eq, Yq.has(Eq)),
+                 markdown: uB(lq).trim()
```

#### 656. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9622` → after: `L9622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9622) · [Before (L9622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9622)

```diff
-         const vA = SK, tA = 864e5, hA = 7, NA = 6e4, QA = "-", SA = .05, DA = 1.95;
+         const WB = HO, NB = 864e5, aB = 7, VB = 6e4, dB = "-", jB = .05, HB = 1.95;
```

#### 657. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9624-L9626` → after: `L9624-L9626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9624-L9626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9624-L9626) · [Before (L9624-L9626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9624-L9626)

```diff
-         function aA(TT) {
-           let kT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-           return Math.abs(TT - 1) < SA ? "same" : (kT ? TT > 1 : TT < 1) ? "better" : "worse"
+         function oB(qq) {
+           let Eq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+           return Math.abs(qq - 1) < jB ? "same" : (Eq ? qq > 1 : qq < 1) ? "better" : "worse"
```

#### 658. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9629-L9633` → after: `L9629-L9633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9629-L9633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9629-L9633) · [Before (L9629-L9633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9629-L9633)

```diff
-         function FA(TT) {
-           let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-           return null !== TT && void 0 !== TT && Number.isFinite(TT) ? Number(TT.toFixed(kT)).toLocaleString("en-US", {
-             maximumFractionDigits: kT
-           }) : QA
+         function PB(qq) {
+           let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+           return null !== qq && void 0 !== qq && Number.isFinite(qq) ? Number(qq.toFixed(Eq)).toLocaleString("en-US", {
+             maximumFractionDigits: Eq
+           }) : dB
```

#### 659. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9636-L9637` → after: `L9636-L9637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9636-L9637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9636-L9637) · [Before (L9636-L9637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9636-L9637)

```diff
-         function rA(TT) {
-           return null === TT || void 0 === TT ? QA : FA(TT / NA, 1)
+         function QB(qq) {
+           return null === qq || void 0 === qq ? dB : PB(qq / VB, 1)
```

#### 660. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9640-L9642` → after: `L9640-L9642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9640-L9642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9640-L9642) · [Before (L9640-L9642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9640-L9642)

```diff
-         function PA(TT) {
-           let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-           return null !== TT && void 0 !== TT && Number.isFinite(TT) ? `${FA(TT,kT)}%` : QA
+         function yB(qq) {
+           let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+           return null !== qq && void 0 !== qq && Number.isFinite(qq) ? `${PB(qq,Eq)}%` : dB
```

#### 661. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9645-L9648` → after: `L9645-L9648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9645-L9648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9645-L9648) · [Before (L9645-L9648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9645-L9648)

```diff
-         function wA(TT, kT) {
-           if (null === TT || null === kT || 0 === kT) return QA;
-           const cT = Math.round((TT - kT) / kT * 100);
-           return `${cT>0?"+":""}${cT}%`
+         function tB(qq, Eq) {
+           if (null === qq || null === Eq || 0 === Eq) return dB;
+           const gq = Math.round((qq - Eq) / Eq * 100);
+           return `${gq>0?"+":""}${gq}%`
```

#### 662. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9650` → after: `L9650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9650) · [Before (L9650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9650)

```diff
-         const mA = {
+         const rB = {
```

#### 663. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9675-L9683` → after: `L9675-L9683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9675-L9683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9675-L9683) · [Before (L9675-L9683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9675-L9683)

```diff
-         function bA(TT, kT) {
-           let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : mA.plain;
-           if (null === TT || void 0 === TT || null === kT || void 0 === kT || 0 === kT) return QA;
-           const lT = TT / kT;
-           if ("same" === aA(lT)) return "about the same";
-           const MT = void 0 === cT.note ? "" : ` (${cT.note})`;
-           if (lT >= DA) return `better, ${FA(lT,lT<10?1:0)} times the median${MT}`;
-           const KT = Math.round(100 * Math.abs(lT - 1));
-           return lT > 1 ? `better, ${KT}% ${cT.more}${MT}` : `worse, ${KT}% ${cT.less}${MT}`
+         function vB(qq, Eq) {
+           let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : rB.plain;
+           if (null === qq || void 0 === qq || null === Eq || void 0 === Eq || 0 === Eq) return dB;
+           const Yq = qq / Eq;
+           if ("same" === oB(Yq)) return "about the same";
+           const lq = void 0 === gq.note ? "" : ` (${gq.note})`;
+           if (Yq >= HB) return `better, ${PB(Yq,Yq<10?1:0)} times the median${lq}`;
+           const Oq = Math.round(100 * Math.abs(Yq - 1));
+           return Yq > 1 ? `better, ${Oq}% ${gq.more}${lq}` : `worse, ${Oq}% ${gq.less}${lq}`
```

#### 664. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9686-L9688` → after: `L9686-L9688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9686-L9688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9686-L9688) · [Before (L9686-L9688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9686-L9688)

```diff
-         function zA(TT) {
-           const kT = Math.round(TT);
-           return 50 === kT ? ", half" : kT >= 33 && kT < 50 ? ", under half" : ""
+         function hB(qq) {
+           const Eq = Math.round(qq);
+           return 50 === Eq ? ", half" : Eq >= 33 && Eq < 50 ? ", under half" : ""
```

#### 665. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9691-L9694` → after: `L9691-L9694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9691-L9694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9691-L9694) · [Before (L9691-L9694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9691-L9694)

```diff
-         function JA(TT, kT) {
-           if (null === TT || void 0 === TT || null === kT || void 0 === kT || 100 === kT) return QA;
-           const cT = aA((100 - TT) / (100 - kT), !1);
-           return "same" === cT ? "about the same" : cT
+         function nB(qq, Eq) {
+           if (null === qq || void 0 === qq || null === Eq || void 0 === Eq || 100 === Eq) return dB;
+           const gq = oB((100 - qq) / (100 - Eq), !1);
+           return "same" === gq ? "about the same" : gq
```

#### 666. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9697-L9698` → after: `L9697-L9698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9697-L9698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9697-L9698) · [Before (L9697-L9698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9697-L9698)

```diff
-         function oA(TT, kT) {
-           return kT === QA ? `median custom game: ${TT}` : `median custom game: ${TT}; this game is ${kT}`
+         function bB(qq, Eq) {
+           return Eq === dB ? `median custom game: ${qq}` : `median custom game: ${qq}; this game is ${Eq}`
```

#### 667. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9701-L9704` → after: `L9701-L9704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9701-L9704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9701-L9704) · [Before (L9701-L9704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9701-L9704)

```diff
-         function HA(TT) {
-           var kT;
-           let cT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "or";
-           return TT.length <= 1 ? null !== (kT = TT[0]) && void 0 !== kT ? kT : "" : `${TT.slice(0,-1).join(", ")} ${cT} ${TT[TT.length-1]}`
+         function iB(qq) {
+           var Eq;
+           let gq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "or";
+           return qq.length <= 1 ? null !== (Eq = qq[0]) && void 0 !== Eq ? Eq : "" : `${qq.slice(0,-1).join(", ")} ${gq} ${qq[qq.length-1]}`
```

#### 668. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9707-L9708` → after: `L9707-L9708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9707-L9708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9707-L9708) · [Before (L9707-L9708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9707-L9708)

```diff
-         function eA(TT, kT) {
-           return kT ? `(${TT})` : `[[${TT}]]`
+         function ZB(qq, Eq) {
+           return Eq ? `(${qq})` : `[[${qq}]]`
```

#### 669. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9711-L9712` → after: `L9711-L9712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9711-L9712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9711-L9712) · [Before (L9711-L9712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9711-L9712)

```diff
-         function GA(TT) {
-           return 1 === TT ? "day" : `${TT} days`
+         function fB(qq) {
+           return 1 === qq ? "day" : `${qq} days`
```

#### 670. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9715-L9716` → after: `L9715-L9716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9715-L9716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9715-L9716) · [Before (L9715-L9716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9715-L9716)

```diff
-         function VA(TT) {
-           return new Date(TT).toISOString().slice(0, 10)
+         function MB(qq) {
+           return new Date(qq).toISOString().slice(0, 10)
```

#### 671. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9719-L9720` → after: `L9719-L9720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9719-L9720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9719-L9720) · [Before (L9719-L9720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9719-L9720)

```diff
-         function EA(TT) {
-           return "" === TT ? "(none)" : TT
+         function TB(qq) {
+           return "" === qq ? "(none)" : qq
```

#### 672. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9723-L9724` → after: `L9723-L9724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9723-L9724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9723-L9724) · [Before (L9723-L9724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9723-L9724)

```diff
-         function ZA(TT, kT) {
-           return "" === kT ? TT : `${TT}: ${kT}`
+         function zB(qq, Eq) {
+           return "" === Eq ? qq : `${qq}: ${Eq}`
```

#### 673. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9727-L9729` → after: `L9727-L9729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9727-L9729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9727-L9729) · [Before (L9727-L9729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9727-L9729)

```diff
-         function uA(TT, kT) {
-           const cT = TT => `| ${TT.map((TT=>TT.replace(/\|/g,"\\|").replace(/[\r\n]+/g," "))).join(" | ")} |`;
-           return [cT(TT), cT(TT.map((() => "---"))), ...kT.map(cT)].join("\n")
+         function SB(qq, Eq) {
+           const gq = qq => `| ${qq.map((qq=>qq.replace(/\|/g,"\\|").replace(/[\r\n]+/g," "))).join(" | ")} |`;
+           return [gq(qq), gq(qq.map((() => "---"))), ...Eq.map(gq)].join("\n")
```

#### 674. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9731` → after: `L9731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9731) · [Before (L9731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9731)

```diff
-         const XA = [{
+         const pB = [{
```

#### 675. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9740` → after: `L9740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9740) · [Before (L9740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9740)

```diff
-         }], dA = {
+         }], GB = {
```

#### 676. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9744` → after: `L9744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9744) · [Before (L9744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9744)

```diff
-         }, LA = {
+         }, LB = {
```

#### 677. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9750-L9751` → after: `L9750-L9751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9750-L9751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9750-L9751) · [Before (L9750-L9751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9750-L9751)

```diff
-         function RA(TT, kT) {
-           return (kT ? LA : dA)[TT]
+         function JB(qq, Eq) {
+           return (Eq ? LB : GB)[qq]
```

#### 678. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9753` → after: `L9753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9753) · [Before (L9753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9753)

```diff
-         const gA = vA, UA = 2, YA = {
+         const kB = WB, RB = 2, UB = {
```

#### 679. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9759-L9760` → after: `L9759-L9760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9759-L9760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9759-L9760) · [Before (L9759-L9760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9759-L9760)

```diff
-         function BA(TT, kT) {
-           return 100 === kT ? null : YA[aA((100 - TT) / (100 - kT), !1)]
+         function FB(qq, Eq) {
+           return 100 === Eq ? null : UB[oB((100 - qq) / (100 - Eq), !1)]
```

#### 680. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9763-L9767` → after: `L9763-L9767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9763-L9767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9763-L9767) · [Before (L9763-L9767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9763-L9767)

```diff
-         function WA(TT) {
-           if (TT >= 100) return "all";
-           if (TT >= 99.5) return "almost all";
-           const kT = Math.round(TT / 10);
-           return 0 === kT ? "under 1 in 10" : `${Math.min(kT,9)} in 10`
+         function sB(qq) {
+           if (qq >= 100) return "all";
+           if (qq >= 99.5) return "almost all";
+           const Eq = Math.round(qq / 10);
+           return 0 === Eq ? "under 1 in 10" : `${Math.min(Eq,9)} in 10`
```

#### 681. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9770-L9773` → after: `L9770-L9773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9770-L9773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9770-L9773) · [Before (L9770-L9773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9770-L9773)

```diff
-         function nA(TT, kT, cT) {
-           const lT = {
-             value: WA(TT),
-             median: WA(kT)
+         function XB(qq, Eq, gq) {
+           const Yq = {
+             value: sB(qq),
+             median: sB(Eq)
```

#### 682. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9775-L9799` → after: `L9775-L9799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9775-L9799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9775-L9799) · [Before (L9775-L9799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9775-L9799)

```diff
-           return lT.value === lT.median === ("okay" === cT) ? lT : {
-             value: `${Math.round(TT)}%`,
-             median: `${Math.round(kT)}%`
-           }
-         }
-         const pA = "Typical Bloxd game";
- 
-         function iA(TT) {
-           var kT, cT, lT, MT, KT, OT, yT, fT, xT, IT, AT, CT, jT;
-           const vT = null !== (kT = null === (cT = TT.stats) || void 0 === cT ? void 0 : cT.sessionDurationHistogram) && void 0 !== kT ? kT : null,
-             tT = null === vT ? null : Ek(vT.sessionCounts, vT.maxBucketMinute),
-             hT = null === tT ? null : dk(tT),
-             NT = null !== (lT = null === (MT = TT.baseline) || void 0 === MT ? void 0 : MT.dropoffCurve) && void 0 !== lT ? lT : null,
-             QT = null === NT ? null : pc(NT),
-             ST = null !== (KT = null === hT || void 0 === hT ? void 0 : hT.percentStayedSessions) && void 0 !== KT ? KT : null,
-             DT = null !== (OT = null === QT || void 0 === QT ? void 0 : QT.percentStayedSessions.p50) && void 0 !== OT ? OT : null,
- ... (9 more removed lines; see GitHub link above)
+           return Yq.value === Yq.median === ("okay" === gq) ? Yq : {
+             value: `${Math.round(qq)}%`,
+             median: `${Math.round(Eq)}%`
+           }
+         }
+         const wB = "Typical Bloxd game";
+ 
+         function KB(qq) {
+           var Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq, uq, Bq, Wq, Nq;
+           const aq = null !== (Eq = null === (gq = qq.stats) || void 0 === gq ? void 0 : gq.sessionDurationHistogram) && void 0 !== Eq ? Eq : null,
+             Vq = null === aq ? null : zE(aq.sessionCounts, aq.maxBucketMinute),
+             dq = null === Vq ? null : LE(Vq),
+             jq = null !== (Yq = null === (lq = qq.baseline) || void 0 === lq ? void 0 : lq.dropoffCurve) && void 0 !== Yq ? Yq : null,
+             Hq = null === jq ? null : Kg(jq),
+             oq = null !== (Oq = null === dq || void 0 === dq ? void 0 : dq.percentStayedSessions) && void 0 !== Oq ? Oq : null,
+             Pq = null !== (mq = null === Hq || void 0 === Hq ? void 0 : Hq.percentStayedSessions.p50) && void 0 !== mq ? mq : null,
+ ... (9 more added lines; see GitHub link above)
```

#### 683. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L9801-L9803` → after: `L9801-L9803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR9801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L9801-L9803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/103.js#L9801-L9803) · [Before (L9801-L9803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/103.js#L9801-L9803)

```diff
-                 verdict: TT,
-                 reason: `${(0,CO.e)(kT.value)} still playing after ${Zk} min`,
-                 typical: kT.median,
+                 verdict: qq,
+                 reason: `${(0,Bm.e)(Eq.value)} still playing after ${SE} min`,
+                 typical: Eq.median,
```
