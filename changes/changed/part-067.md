# Changed — Bundle Modifications Report (Part 067 / 115)

- **Updated at**: `2026-11-21T00:51 JST`
- **Part**: `67 / 115` (**411** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 066](part-066.md) · [Part 068 →](part-068.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/91.js` (bcgkc.38229551 → bbb6l5.0244a119 · continued)

- **File**: `bundles/bloxd.io/chunks/js/91.js` (3590 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619)

#### 246. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2128-L2130` → after: `L2292-L2294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R2292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L2292-L2294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L2292-L2294) · [Before (L2128-L2130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2128-L2130)

```diff
-         const TT = this.mirror.pA,
-           kT = TT.dC(),
-           cT = this.mirror.wasm.wasmView(Int32Array, TT.LC(), 3 * kT);
+         const qq = this.mirror.kB,
+           Eq = qq.fW(),
+           gq = this.mirror.wasm.wasmView(Int32Array, qq.MW(), 3 * Eq);
```

#### 247. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2133` → after: `L2297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R2297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L2297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L2297) · [Before (L2133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2133)

```diff
-           const TT = `${cT[MT]},${cT[MT+1]},${cT[MT+2]}`;
+           const qq = `${gq[lq]},${gq[lq+1]},${gq[lq+2]}`;
```

#### 248. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2141-L2142` → after: `L2305-L2306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R2305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L2305-L2306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L2305-L2306) · [Before (L2141-L2142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2141-L2142)

```diff
-       if (!kT.hV) throw new Error(`wasm physics: a pick ${cT}, and picks here run only in wasm`);
-       return TT.jsPicks++, kT.hV()
+       if (!Eq.Fs) throw new Error(`wasm physics: a pick ${gq}, and picks here run only in wasm`);
+       return qq.jsPicks++, Eq.Fs()
```

#### 249. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2154-L2156` → after: `L2318-L2320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R2318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L2318-L2320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L2318-L2320) · [Before (L2154-L2156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2154-L2156)

```diff
-             position: kT.WG,
-             normal: kT.nG,
-             cell: kT.pG
+             position: Eq.jF,
+             normal: Eq.vF,
+             cell: Eq.ZF
```

#### 250. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2173-L2174` → after: `L2337-L2338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R2337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L2337-L2338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L2337-L2338) · [Before (L2173-L2174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2173-L2174)

```diff
-         } = TT, fT = lT.pA, xT = this.rounds;
-         xT.Ij();
+         } = qq, Aq = Yq.kB, cq = this.rounds;
+         cq.gN();
```

#### 251. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2178` → after: `L2342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R2342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L2342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L2342) · [Before (L2178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2178)

```diff
-           const IT = fT.gC();
+           const uq = Aq.zW();
```

#### 252. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2189` → after: `L2353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R2353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L2353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L2353) · [Before (L2189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2189)

```diff
-         return fT.zC(), uc
+         return Aq.QW(), pg
```

#### 253. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2192` → after: `L2356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R2356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L2356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L2356) · [Before (L2192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2192)

```diff
-         const kT = this.mirror.sC,
+         const Eq = this.mirror.FW,
```

#### 254. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2198` → after: `L2362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R2362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L2362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L2362) · [Before (L2198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2198)

```diff
-           return TT ? TT(cT) && (null === (lT = kT.rV(cT)) || void 0 === lT || lT) : kT.Tj(cT)
+           return qq ? qq(gq) && (null === (Yq = Eq.Xs(gq)) || void 0 === Yq || Yq) : Eq.sW(gq)
```

#### 255. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2203` → after: `L2367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R2367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L2367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L2367) · [Before (L2203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2203)

```diff
-         }, this.mirror.pA.qC(lT.index, MT.kinds, MT.shapeOffsets, MT.shapes, this.mirror.unloadedId), lT.registryKey = cT, this.tables.set(TT, lT), lT.index) : -1
+         }, this.mirror.kB.UW(Yq.index, lq.kinds, lq.shapeOffsets, lq.shapes, this.mirror.unloadedId), Yq.registryKey = gq, this.tables.set(qq, Yq), Yq.index) : -1
```

#### 256. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2206` → after: `L2370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R2370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L2370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L2370) · [Before (L2206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2206)

```diff
-         return this.pickIoView ??= new this.mirror.wasm.WasmBufferView(Float64Array, this.mirror.pA.UC(), 12), this.pickIoView.view()
+         return this.pickIoView ??= new this.mirror.wasm.WasmBufferView(Float64Array, this.mirror.kB.SW(), 12), this.pickIoView.view()
```

#### 257. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2221` → after: `L2385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R2385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L2385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L2385) · [Before (L2221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2221)

```diff
-         return lT[0] === kT[0] && lT[1] === kT[1] && lT[2] === kT[2] && Object.is(lT[3], cT[0]) && Object.is(lT[4], cT[1]) && Object.is(lT[5], cT[2]) || (lT[0] = kT[0], lT[1] = kT[1], lT[2] = kT[2], lT[3] = cT[0], lT[4] = cT[1], lT[5] = cT[2], TT.WA(lT[0], lT[1], lT[2], lT[3], lT … [truncated]
+         return Yq[0] === Eq[0] && Yq[1] === Eq[1] && Yq[2] === Eq[2] && Object.is(Yq[3], gq[0]) && Object.is(Yq[4], gq[1]) && Object.is(Yq[5], gq[2]) || (Yq[0] = Eq[0], Yq[1] = Eq[1], Yq[2] = Eq[2], Yq[3] = gq[0], Yq[4] = gq[1], Yq[5] = gq[2], qq.LB(Yq[0], Yq[1], Yq[2], Yq[3], Yq … [truncated]
```

#### 258. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2226-L2227` → after: `L2390-L2391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R2390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L2390-L2391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L2390-L2391) · [Before (L2226-L2227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2226-L2227)

```diff
-         const OT = null !== (cT = null === (lT = kT.getDesyncedBlockCount) || void 0 === lT ? void 0 : lT.call(kT)) && void 0 !== cT ? cT : 0,
-           yT = 0 === OT ? 0 : null !== (MT = null === (KT = kT.getDesyncVersion) || void 0 === KT ? void 0 : KT.call(kT)) && void 0 !== MT ? MT : -1;
+         const mq = null !== (gq = null === (Yq = Eq.getDesyncedBlockCount) || void 0 === Yq ? void 0 : Yq.call(Eq)) && void 0 !== gq ? gq : 0,
+           xq = 0 === mq ? 0 : null !== (lq = null === (Oq = Eq.getDesyncVersion) || void 0 === Oq ? void 0 : Oq.call(Eq)) && void 0 !== lq ? lq : -1;
```

#### 259. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2233` → after: `L2397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R2397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L2397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L2397) · [Before (L2233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2233)

```diff
-           }(kT.wV, this.types) && gc(kT.wc, this.walkRects) && gc(kT.mV, this.cantRects)) return this.valid;
+           }(Eq.EX, this.types) && Rg(Eq.SO, this.walkRects) && Rg(Eq.BX, this.cantRects)) return this.valid;
```

#### 260. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2235-L2238` → after: `L2399-L2402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R2399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L2399-L2402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L2399-L2402) · [Before (L2235-L2238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2235-L2238)

```diff
-         for (const xT of kT.wV) "number" === typeof xT && this.types.push(xT);
-         if (Uc(kT.wc, this.walkRects), Uc(kT.mV, this.cantRects), 0 === OT && 0 === this.types.length && 0 === this.walkRects.length && 0 === this.cantRects.length) return this.nonEmpty && (TT.YA(), this.nonEmpty = !1), this.valid = !0, !0;
-         const fT = 0 === OT ? Rc : this.packDesync(kT, OT, yT);
-         return this.valid = null !== fT, fT && (TT.nA(fT, Float64Array.from(this.types), Float64Array.from(this.walkRects), Float64Array.from(this.cantRects)), this.nonEmpty = !0), this.valid
+         for (const cq of Eq.EX) "number" === typeof cq && this.types.push(cq);
+         if (Ug(Eq.SO, this.walkRects), Ug(Eq.BX, this.cantRects), 0 === mq && 0 === this.types.length && 0 === this.walkRects.length && 0 === this.cantRects.length) return this.nonEmpty && (qq.pB(), this.nonEmpty = !1), this.valid = !0, !0;
+         const Aq = 0 === mq ? kg : this.packDesync(Eq, mq, xq);
+         return this.valid = null !== Aq, Aq && (qq.JB(Aq, Float64Array.from(this.types), Float64Array.from(this.walkRects), Float64Array.from(this.cantRects)), this.nonEmpty = !0), this.valid
```

#### 261. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2283` → after: `L2447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R2447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L2447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L2447) · [Before (L2283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2283)

```diff
-         this.wasm = TT, this.sC = kT, this.options = cT, this.label = lT, this.handling = MT, this.pA = void 0, this.epochStartMs = performance.now(), this.epoch = -1, this.registryState = -1, this.unsupported = !1, this.broken = !1, this.yv = !1, this.picks = new Xc(this), this. … [truncated]
+         this.wasm = qq, this.FW = Eq, this.options = gq, this.label = Yq, this.handling = lq, this.kB = void 0, this.epochStartMs = performance.now(), this.epoch = -1, this.registryState = -1, this.unsupported = !1, this.broken = !1, this.eN = !1, this.picks = new Gg(this), this. … [truncated]
```

#### 262. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2291` → after: `L2455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R2455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L2455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L2455) · [Before (L2291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2291)

```diff
-           return pk(cT, lT, yT, `${MT} mirror`, "creating it", KT), null
+           return KE(gq, Yq, xq, `${lq} mirror`, "creating it", Oq), null
```

#### 263. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2298` → after: `L2462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R2462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L2462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L2462) · [Before (L2298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2298)

```diff
-         return !this.yv && !this.broken && this.wasm.isBloxdWasmReady()
+         return !this.eN && !this.broken && this.wasm.isBloxdWasmReady()
```

#### 264. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2307` → after: `L2471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R2471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L2471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L2471) · [Before (L2307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2307)

```diff
-         return this.usable() && !this.unsupported && Hc(this.sC) === this.registryState
+         return this.usable() && !this.unsupported && Zg(this.FW) === this.registryState
```

#### 265. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2311` → after: `L2475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R2475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L2475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L2475) · [Before (L2311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2311)

```diff
-         const cT = this.pA.dC();
+         const gq = this.kB.fW();
```

#### 266. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2313-L2314` → after: `L2477-L2478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R2477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L2477-L2478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L2477-L2478) · [Before (L2313-L2314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2313-L2314)

```diff
-         const lT = Array.from(this.wasm.wasmView(Int32Array, this.pA.LC(), 3 * cT));
-         this.pA.zC();
+         const Yq = Array.from(this.wasm.wasmView(Int32Array, this.kB.MW(), 3 * gq));
+         this.kB.QW();
```

#### 267. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2320` → after: `L2484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R2484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L2484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L2484) · [Before (L2320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2320)

```diff
-             this.pA.XC(lT[KT], lT[KT + 1], lT[KT + 2]), this.unreadable.set(`${lT[KT]},${lT[KT+1]},${lT[KT+2]}`, MT)
+             this.kB.ZW(Yq[Oq], Yq[Oq + 1], Yq[Oq + 2]), this.unreadable.set(`${Yq[Oq]},${Yq[Oq+1]},${Yq[Oq+2]}`, lq)
```

#### 268. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2324-L2325` → after: `L2488-L2489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R2488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L2488-L2489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L2488-L2489) · [Before (L2324-L2325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2324-L2325)

```diff
-         const [TT, kT, cT] = this.pA.fC(), lT = this.unreadable.get(`${TT},${kT},${cT}`);
-         if (!lT) throw new Error(`wasm physics: a read threw in chunk ${TT},${kT},${cT}, which was never marked unreadable`);
+         const [qq, Eq, gq] = this.kB.EW(), Yq = this.unreadable.get(`${qq},${Eq},${gq}`);
+         if (!Yq) throw new Error(`wasm physics: a read threw in chunk ${qq},${Eq},${gq}, which was never marked unreadable`);
```

#### 269. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2338` → after: `L2502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R2502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L2502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L2502) · [Before (L2338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2338)

```diff
-         return this.picks.gC(TT, kT)
+         return this.picks.zW(qq, Eq)
```

#### 270. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2344` → after: `L2508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R2508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L2508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L2508) · [Before (L2344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2344)

```diff
-         this.usable() && this.pA.nC(TT, kT, cT, lT)
+         this.usable() && this.kB.JW(qq, Eq, gq, Yq)
```

#### 271. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2347` → after: `L2511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R2511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L2511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L2511) · [Before (L2347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2347)

```diff
-         this.usable() && this.pA.eC(TT, kT, cT)
+         this.usable() && this.kB.vW(qq, Eq, gq)
```

#### 272. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2350` → after: `L2514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R2514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L2514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L2514) · [Before (L2350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2350)

```diff
-         this.usable() && this.pA.HC()
+         this.usable() && this.kB.rW()
```

#### 273. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2353` → after: `L2517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R2517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L2517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L2517) · [Before (L2353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2353)

```diff
-         const MT = this.wasm.wasmView(Uint16Array, this.pA.mC(TT, kT, cT), Sc),
+         const lq = this.wasm.wasmView(Uint16Array, this.kB.oW(qq, Eq, gq), Hg),
```

#### 274. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2362` → after: `L2526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R2526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L2526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L2526) · [Before (L2362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2362)

```diff
-         if (this.yv || !qk(this.wasm)) return {
+         if (this.eN || !IE(this.wasm)) return {
```

#### 275. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2368` → after: `L2532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R2532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L2532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L2532) · [Before (L2368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2368)

```diff
-         const TT = this.pA.Oj();
+         const qq = this.kB.eW();
```

#### 276. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2370-L2371` → after: `L2534-L2535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R2534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L2534-L2535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L2534-L2535) · [Before (L2370-L2371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2370-L2371)

```diff
-           resident: this.pA.WC(),
-           known: this.pA.ZC(),
+           resident: this.kB.LW(),
+           known: this.kB.bW(),
```

#### 277. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2380` → after: `L2544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R2544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L2544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L2544) · [Before (L2380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2380)

```diff
-         const TT = this.sC,
+         const qq = this.FW,
```

#### 278. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2384` → after: `L2548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R2548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L2548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L2548) · [Before (L2384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2384)

```diff
-         const cT = Gc(ec(TT), (kT => TT.Tj(kT)));
+         const gq = Mg(fg(qq), (Eq => qq.sW(Eq)));
```

#### 279. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2387-L2388` → after: `L2551-L2552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R2551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L2551-L2552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L2551-L2552) · [Before (L2387-L2388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2387-L2388)

```diff
-           for (let cT = 0; cT < kT.length; cT++) kT[cT] = TT.kj[cT] ? 1 : 0;
-           this.pA.iC(cT.kinds, cT.shapeOffsets, cT.shapes, kT);
+           for (let gq = 0; gq < Eq.length; gq++) Eq[gq] = qq.XW[gq] ? 1 : 0;
+           this.kB.RW(gq.kinds, gq.shapeOffsets, gq.shapes, Eq);
```

#### 280. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2390-L2391` → after: `L2554-L2555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R2554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L2554-L2555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L2554-L2555) · [Before (L2390-L2391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2390-L2391)

```diff
-           for (let cT = 0; cT < lT.length; cT++) lT[cT] = TT.Mj[cT] ? 1 : 0;
-           this.pA.Kj(lT)
+           for (let gq = 0; gq < Yq.length; gq++) Yq[gq] = qq.KW[gq] ? 1 : 0;
+           this.kB.IW(Yq)
```

#### 281. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2396` → after: `L2560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R2560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L2560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L2560) · [Before (L2396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2396)

```diff
-         if (this.options.pA) return;
+         if (this.options.kB) return;
```

#### 282. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2398` → after: `L2562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R2562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L2562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L2562) · [Before (L2398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2398)

```diff
-         TT !== this.epoch && (this.epoch = TT, this.pA.pC(TT), this.pA.evict(this.options.maxResident, Math.max(0, TT - this.options.idleSeconds)))
+         qq !== this.epoch && (this.epoch = qq, this.kB.kW(qq), this.kB.evict(this.options.maxResident, Math.max(0, qq - this.options.idleSeconds)))
```

#### 283. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2401` → after: `L2565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R2565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L2565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L2565) · [Before (L2401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2401)

```diff
-         this.yv || (this.yv = !0, this.options.pA || sk(this.wasm, this.pA))
+         this.eN || (this.eN = !0, this.options.kB || eE(this.wasm, this.kB))
```

#### 284. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2411` → after: `L2575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R2575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L2575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L2575) · [Before (L2411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2411)

```diff
-           pA: kT
+           kB: Eq
```

#### 285. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2447` → after: `L2611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R2611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L2611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L2611) · [Before (L2447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2447)

```diff
-         cT[lT] = kT ? cT[lT] | TT : cT[lT] & ~TT
+         gq[Yq] = Eq ? gq[Yq] | qq : gq[Yq] & ~qq
```

#### 286. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2581` → after: `L2745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R2745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L2745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L2745) · [Before (L2581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2581)

```diff
-         qc(this.Oh, TT)
+         Ig(this.JV, qq)
```

#### 287. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2593` → after: `L2757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R2757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L2757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L2757) · [Before (L2593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2593)

```diff
-         qc(this.KV, TT)
+         Ig(this.XF, qq)
```

#### 288. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2599` → after: `L2763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R2763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L2763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L2763) · [Before (L2599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2599)

```diff
-         qc(this.yV, TT)
+         Ig(this.KF, qq)
```

#### 289. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2606` → after: `L2770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R2770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L2770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L2770) · [Before (L2606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2606)

```diff
-     var sc = cT(39339);
+     var eg = gq(39476);
```

#### 290. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2628` → after: `L2792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R2792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L2792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L2792) · [Before (L2628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2628)

```diff
-         jT[vT + 0] = lT, jT[vT + 1] = MT, jT[vT + 2] = KT, jT[vT + 3] = OT, jT[vT + 4] = -1, jT[vT + 5] = -1, jT[vT + 6] = -1, jT[vT + 7] = -1, jT[vT + 8] = 0, jT[vT + 9] = 10, jT[vT + Tc] = 0, jT[vT + Tc + 1] = 0, jT[vT + Tc + 2] = 0, jT[vT + 13] = 0, jT[vT + kc] = 17 | (fT ? 2  … [truncated]
+         Nq[aq + 0] = Yq, Nq[aq + 1] = lq, Nq[aq + 2] = Oq, Nq[aq + 3] = mq, Nq[aq + 4] = -1, Nq[aq + 5] = -1, Nq[aq + 6] = -1, Nq[aq + 7] = -1, Nq[aq + 8] = 0, Nq[aq + 9] = 10, Nq[aq + DE] = 0, Nq[aq + DE + 1] = 0, Nq[aq + DE + 2] = 0, Nq[aq + 13] = 0, Nq[aq + qg] = 17 | (Aq ? 2  … [truncated]
```

#### 291. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2679` → after: `L2843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R2843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L2843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L2843) · [Before (L2679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2679)

```diff
-     kl.prototype.loadFromCopy = uk.prototype.loadFromCopy, kl.prototype.loadStateFromCopy = uk.prototype.loadStateFromCopy, kl.prototype.setPosition = uk.prototype.setPosition, kl.prototype.kN = uk.prototype.kN, kl.prototype.applyForce = uk.prototype.applyForce, kl.prototype.appl … [truncated]
+     qY.prototype.loadFromCopy = pE.prototype.loadFromCopy, qY.prototype.loadStateFromCopy = pE.prototype.loadStateFromCopy, qY.prototype.setPosition = pE.prototype.setPosition, qY.prototype.Py = pE.prototype.Py, qY.prototype.applyForce = pE.prototype.applyForce, qY.prototype.appl … [truncated]
```

#### 292. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2682` → after: `L2846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R2846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L2846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L2846) · [Before (L2682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2682)

```diff
-         this.wasm = TT, this.physics = kT, this.handle = void 0, this.f64Pages = [], this.f32Pages = [], this.fresh = [], this.freed = [], this.freedHead = 0, this.slotOwners = [], this.releaseCount = 0, this.handle = new(TT.getBloxdWasm().YI)
+         this.wasm = qq, this.physics = Eq, this.handle = void 0, this.f64Pages = [], this.f32Pages = [], this.fresh = [], this.freed = [], this.freedHead = 0, this.slotOwners = [], this.releaseCount = 0, this.handle = new(qq.getBloxdWasm().Su)
```

#### 293. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2711` → after: `L2875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R2875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L2875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L2875) · [Before (L2711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2711)

```diff
-         const TT = this.handle.SA(),
+         const qq = this.handle.BB(),
```

#### 294. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2713` → after: `L2877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R2877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L2877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L2877) · [Before (L2713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2713)

```diff
-         this.f64Pages.push(new kT(Float64Array, this.handle.rA(TT), 4096)), this.f32Pages.push(new kT(Float32Array, this.handle.FA(TT), 5376));
+         this.f64Pages.push(new Eq(Float64Array, this.handle.VB(qq), 4096)), this.f32Pages.push(new Eq(Float32Array, this.handle.aB(qq), 5376));
```

#### 295. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2783` → after: `L2947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R2947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L2947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L2947) · [Before (L2783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2783)

```diff
-         return null !== (kT = this.slotOfBody.get(TT)) && void 0 !== kT ? kT : -1
+         return null !== (Eq = this.slotOfBody.get(qq)) && void 0 !== Eq ? Eq : -1
```

#### 296. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2796-L2797` → after: `L2960-L2961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R2960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L2960-L2961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L2960-L2961) · [Before (L2796-L2797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2796-L2797)

```diff
-         if (this.rows.invalidate(), this.isStaging.length < TT.DA) {
-           const kT = new Uint8Array(TT.DA);
+         if (this.rows.invalidate(), this.isStaging.length < qq.WB) {
+           const Eq = new Uint8Array(qq.WB);
```

#### 297. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2806` → after: `L2970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R2970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L2970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L2970) · [Before (L2806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2806)

```diff
-             const KT = lT.BA;
+             const Oq = Yq.GB;
```

#### 298. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2817-L2819` → after: `L2981-L2983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R2981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L2981-L2983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L2981-L2983) · [Before (L2817-L2819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2817-L2819)

```diff
-             const xT = lT.Oh,
-               IT = lT.KV,
-               AT = lT.yV,
+             const cq = Yq.JV,
+               uq = Yq.XF,
+               Bq = Yq.KF,
```

#### 299. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2824` → after: `L2988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R2988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L2988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L2988) · [Before (L2824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2824)

```diff
-                 zI: vT,
+                 Am: aq,
```

#### 300. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2828` → after: `L2992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R2992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L2992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L2992) · [Before (L2828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2828)

```diff
-                 tC: QT,
+                 AW: Hq,
```

#### 301. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2839` → after: `L3003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3003) · [Before (L2839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2839)

```diff
-             TT[wT + 0] = vT, TT[wT + 1] = tT, TT[wT + 2] = hT, TT[wT + 3] = NT, TT[wT + 4] = QT, TT[wT + 5] = ST, TT[wT + 6] = DT, TT[wT + 7] = aT, TT[wT + 8] = FT, TT[wT + 9] = rT, TT[wT + Tc] = jT[0], TT[wT + Tc + 1] = jT[1], TT[wT + Tc + 2] = jT[2], TT[wT + 13] = PT & fc ? lT. … [truncated]
+             qq[vq + 0] = aq, qq[vq + 1] = Vq, qq[vq + 2] = dq, qq[vq + 3] = jq, qq[vq + 4] = Hq, qq[vq + 5] = oq, qq[vq + 6] = Pq, qq[vq + 7] = Qq, qq[vq + 8] = yq, qq[vq + 9] = tq, qq[vq + DE] = Nq[0], qq[vq + DE + 1] = Nq[1], qq[vq + DE + 2] = Nq[2], qq[vq + 13] = rq & xg ? Yq. … [truncated]
```

#### 302. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2879` → after: `L3043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3043) · [Before (L2879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2879)

```diff
-         this.physics = TT, this.kind = kT, this.wasm = cT, this.rollsBack = lT, this.hostStore = MT, this.current = null, this.store = null, this.staging = void 0, this.listView = null, this.impactsView = null, this.resultView = null, this.listed = 0, this.listSynced = !1, this.l … [truncated]
+         this.physics = qq, this.kind = Eq, this.wasm = gq, this.rollsBack = Yq, this.hostStore = lq, this.current = null, this.store = null, this.staging = void 0, this.listView = null, this.impactsView = null, this.resultView = null, this.listed = 0, this.listSynced = !1, this.l … [truncated]
```

#### 303. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2881` → after: `L3045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3045) · [Before (L2881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2881)

```diff
-           return kT >= 0 ? kT : this.staging.bV(TT)
+           return Eq >= 0 ? Eq : this.staging.ZZ(qq)
```

#### 304. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2901` → after: `L3065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3065) · [Before (L2901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2901)

```diff
-         return "string" === typeof kT ? kT : TT && !TT(kT, this.bV, !0) ? "has a lookup context wasm can't take (a world offset or walk-through override)" : kT
+         return "string" === typeof Eq ? Eq : qq && !qq(Eq, this.ZZ, !0) ? "has a lookup context wasm can't take (a world offset or walk-through override)" : Eq
```

#### 305. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2917` → after: `L3081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3081) · [Before (L2917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2917)

```diff
-           this.current = new(this.wasm.getBloxdWasm().PhysicsEngine)(kT.tC, kT.fluidDrag, kT.hC, cT[0], cT[1], cT[2], kT.minBounceImpulse, Nc[this.kind]), this.options.fill(NaN), this.listView = null, this.listed = 0, this.listSynced = !1, this.rollbackSlot = -1
+           this.current = new(this.wasm.getBloxdWasm().PhysicsEngine)(Eq.AW, Eq.fluidDrag, Eq.cW, gq[0], gq[1], gq[2], Eq.minBounceImpulse, dg[this.kind]), this.options.fill(NaN), this.listView = null, this.listed = 0, this.listSynced = !1, this.rollbackSlot = -1
```

#### 306. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2922` → after: `L3086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3086) · [Before (L2922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2922)

```diff
-         if (TT.TC() < kT && (TT.KC(Math.max(kT, 2 * TT.TC(), 16)), this.listView = null), !this.listView) {
+         if (qq.sB() < Eq && (qq.eB(Math.max(Eq, 2 * qq.sB(), 16)), this.listView = null), !this.listView) {
```

#### 307. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2924` → after: `L3088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3088) · [Before (L2924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2924)

```diff
-           this.listView = new kT(Uint32Array, TT.kC(), TT.TC()), this.impactsView = new kT(Float64Array, TT.sA(), 3), this.resultView = new kT(Float64Array, TT.OC(), 5)
+           this.listView = new Eq(Uint32Array, qq.XB(), qq.sB()), this.impactsView = new Eq(Float64Array, qq.FB(), 3), this.resultView = new Eq(Float64Array, qq.DB(), 5)
```

#### 308. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2932` → after: `L3096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3096) · [Before (L2932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2932)

```diff
-           const TT = new Uint32Array(this.store.DA);
+           const qq = new Uint32Array(this.store.WB);
```

#### 309. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2944` → after: `L3108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3108) · [Before (L2944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2944)

```diff
-           let fT = this.bV(yT);
+           let Aq = this.ZZ(xq);
```

#### 310. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2957` → after: `L3121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3121) · [Before (L2957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2957)

```diff
-         return this.reserveList(kT, lT), this.staging.clear(), null === this.fillList(TT, !0) ? `lists a body twice, or ${fl}` : (this.listSynced && lT === this.listed || (kT.vC(lT, cT.handle), this.listSynced = !0, this.listed = lT), this.listReleases = cT.releases, this.setRoll … [truncated]
+         return this.reserveList(Eq, Yq), this.staging.clear(), null === this.fillList(qq, !0) ? `lists a body twice, or ${xY}` : (this.listSynced && Yq === this.listed || (Eq.xW(Yq, gq.handle), this.listSynced = !0, this.listed = Yq), this.listReleases = gq.releases, this.setRoll … [truncated]
```

#### 311. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2963` → after: `L3127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3127) · [Before (L2963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2963)

```diff
-         cT < 0 && (cT = this.staging.rollbackSlot()), cT !== this.rollbackSlot && (TT.SC(cT, kT.handle), this.rollbackSlot = cT)
+         gq < 0 && (gq = this.staging.rollbackSlot()), gq !== this.rollbackSlot && (qq.WW(gq, Eq.handle), this.rollbackSlot = gq)
```

#### 312. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2974` → after: `L3138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3138) · [Before (L2974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2974)

```diff
-         return this.reserveList(lT, kT), null === this.fillList(TT, !1) ? 2 : (lT.vC(kT, cT.handle), this.listSynced = !0, this.listed = kT, this.listReleases = cT.releases, 1)
+         return this.reserveList(Yq, Eq), null === this.fillList(qq, !1) ? 2 : (Yq.xW(Eq, gq.handle), this.listSynced = !0, this.listed = Eq, this.listReleases = gq.releases, 1)
```

#### 313. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2979` → after: `L3143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3143) · [Before (L2979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2979)

```diff
-           const lT = this.bV(TT[cT]);
+           const Yq = this.ZZ(qq[gq]);
```

#### 314. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L2994` → after: `L3158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3158) · [Before (L2994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L2994)

```diff
-         Object.is(kT[0], TT.tC) && Object.is(kT[1], TT.fluidDrag) && Object.is(kT[2], TT.hC) && Object.is(kT[3], cT[0]) && Object.is(kT[4], cT[1]) && Object.is(kT[5], cT[2]) && Object.is(kT[6], TT.minBounceImpulse) || (kT[0] = TT.tC, kT[1] = TT.fluidDrag, kT[2] = TT.hC, kT[3] = c … [truncated]
+         Object.is(Eq[0], qq.AW) && Object.is(Eq[1], qq.fluidDrag) && Object.is(Eq[2], qq.cW) && Object.is(Eq[3], gq[0]) && Object.is(Eq[4], gq[1]) && Object.is(Eq[5], gq[2]) && Object.is(Eq[6], qq.minBounceImpulse) || (Eq[0] = qq.AW, Eq[1] = qq.fluidDrag, Eq[2] = qq.cW, Eq[3] = g … [truncated]
```

#### 315. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3004` → after: `L3168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3168) · [Before (L3004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3004)

```diff
-         this.physics = TT, this.host = kT, this.bodies = void 0, this.impacts = new Float64Array(3), this.testSolid = void 0, this.testFluid = void 0, this.rollsBack = void 0, this.failedInTick = !1, this.stoppedMs = 0, this.stoppedRun = 0, this.lastStopAt = 0, this.lost = !1, th … [truncated]
+         this.physics = qq, this.host = Eq, this.bodies = void 0, this.impacts = new Float64Array(3), this.testSolid = void 0, this.testFluid = void 0, this.rollsBack = void 0, this.failedInTick = !1, this.stoppedMs = 0, this.stoppedRun = 0, this.lastStopAt = 0, this.lost = !1, th … [truncated]
```

#### 316. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3015` → after: `L3179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3179) · [Before (L3015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3015)

```diff
-         if (this.host.stats.stoppedTicks++, this.host.failure.fatal) throw new Error(`wasm physics: ${lT} physics ${TT}, and it runs only in wasm here`);
+         if (this.host.stats.stoppedTicks++, this.host.failure.fatal) throw new Error(`wasm physics: ${Yq} physics ${qq}, and it runs only in wasm here`);
```

#### 317. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3017` → after: `L3181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3181) · [Before (L3017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3017)

```diff
-         ik(TT, (() => new Error(`wasm physics: ${lT} physics ${TT}, so its tick stopped there`)), this.host.failure, !0, this.stopsReported);
+         CE(qq, (() => new Error(`wasm physics: ${Yq} physics ${qq}, so its tick stopped there`)), this.host.failure, !0, this.stopsReported);
```

#### 318. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3019` → after: `L3183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3183) · [Before (L3019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3019)

```diff
-         MT - this.lastStopAt > 3e3 && (this.stoppedMs = 0, this.stoppedRun = 0), this.lastStopAt = MT, this.stoppedMs += cT, this.stoppedRun++, !this.lost && this.stoppedRun >= 100 && this.stoppedMs >= 1e4 && this.lose(`${TT}, on every tick for ${Math.round(this.stoppedMs/1e3)}s` … [truncated]
+         lq - this.lastStopAt > 3e3 && (this.stoppedMs = 0, this.stoppedRun = 0), this.lastStopAt = lq, this.stoppedMs += gq, this.stoppedRun++, !this.lost && this.stoppedRun >= 100 && this.stoppedMs >= 1e4 && this.lose(`${qq}, on every tick for ${Math.round(this.stoppedMs/1e3)}s` … [truncated]
```

#### 319. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3027` → after: `L3191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3191) · [Before (L3027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3027)

```diff
-         const kT = new Error(`wasm physics: ${this.host.kind} physics ${TT}, so it can't tick until the page reloads`);
+         const Eq = new Error(`wasm physics: ${this.host.kind} physics ${qq}, so it can't tick until the page reloads`);
```

#### 320. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3029` → after: `L3193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3193) · [Before (L3029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3029)

```diff
-         (console.error(kT), this.host.failure.lost) ? this.host.failure.lost(kT): null === (cT = (lT = this.host.failure).Yj) || void 0 === cT || cT.call(lT, kT)
+         (console.error(Eq), this.host.failure.lost) ? this.host.failure.lost(Eq): null === (gq = (Yq = this.host.failure).SN) || void 0 === gq || gq.call(Yq, Eq)
```

#### 321. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3062-L3063` → after: `L3226-L3227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3226-L3227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3226-L3227) · [Before (L3062-L3063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3062-L3063)

```diff
-         if (!this.rollsBack) return TT.IC || TT.lV ? "was given unloaded hooks" : null;
-         return (0, Uk.n)(TT.IC) === this.host.kind && "cell" === (0, Uk.n)(TT.lV) ? null : "had an unloaded hook replaced"
+         if (!this.rollsBack) return qq.YW || qq.sF ? "was given unloaded hooks" : null;
+         return (0, UE.n)(qq.YW) === this.host.kind && "cell" === (0, UE.n)(qq.sF) ? null : "had an unloaded hook replaced"
```

#### 322. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3076` → after: `L3240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3240) · [Before (L3076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3076)

```diff
-           if (MT = kT, 5 === MT.gA(TT, this.bodies.bodyStore.handle)) return fl
+           if (lq = Eq, 5 === lq.zB(qq, this.bodies.bodyStore.handle)) return xY
```

#### 323. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3111` → after: `L3275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3275) · [Before (L3111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3111)

```diff
-           const KT = TT.resume(kT.pA, cT);
+           const Oq = qq.resume(Eq.kB, gq);
```

#### 324. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3113` → after: `L3277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3277) · [Before (L3113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3113)

```diff
-             if (this.host.stats.missRounds++, ++lT > 4096) return kT.pA.zC(), "missed chunks for 4096 rounds";
+             if (this.host.stats.missRounds++, ++Yq > 4096) return Eq.kB.QW(), "missed chunks for 4096 rounds";
```

#### 325. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3119` → after: `L3283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3283) · [Before (L3119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3119)

```diff
-           if (3 === KT) throw new Bk(new Error(mc(TT.qA())));
+           if (3 === Oq) throw new sE(new Error(vg(qq.UB())));
```

#### 326. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3122` → after: `L3286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3286) · [Before (L3122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3122)

```diff
-           if (yT.yC) {
+           if (xq.qW) {
```

#### 327. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3126` → after: `L3290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3290) · [Before (L3126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3126)

```diff
-               yT.yC(this.impacts)
+               xq.qW(this.impacts)
```

#### 328. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3136` → after: `L3300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3300) · [Before (L3136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3136)

```diff
-           if (null !== fT) return `${fT} in an onCollide handler`;
+           if (null !== Aq) return `${Aq} in an onCollide handler`;
```

#### 329. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3164` → after: `L3328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3328) · [Before (L3164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3164)

```diff
-             cT.xC && cT.xC()
+             gq.gW && gq.gW()
```

#### 330. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3178-L3179` → after: `L3342-L3343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3342-L3343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3342-L3343) · [Before (L3178-L3179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3178-L3179)

```diff
-         const KT = !kT.BA;
-         return KT && (this.pendingSlot = -1, this.pendingBody = null), !(this.tickLen > cT.length) && (TT.lC(this.committedCursor, this.tickLen, KT), !(this.host.prepare && !this.host.prepare(TT, lT.bV, 0 !== MT)) && (!!lT.encodeStagedAfterHandler(this.pendingSlot, this.committed … [truncated]
+         const Oq = !Eq.GB;
+         return Oq && (this.pendingSlot = -1, this.pendingBody = null), !(this.tickLen > gq.length) && (qq.CB(this.committedCursor, this.tickLen, Oq), !(this.host.prepare && !this.host.prepare(qq, Yq.ZZ, 0 !== lq)) && (!!Yq.encodeStagedAfterHandler(this.pendingSlot, this.committed … [truncated]
```

#### 331. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3184` → after: `L3348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3348) · [Before (L3184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3184)

```diff
-         this.cC = TT, this.physics = kT, this.options = cT, this.stats = {
+         this.wB = qq, this.physics = Eq, this.options = gq, this.stats = {
```

#### 332. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3235` → after: `L3399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3399) · [Before (L3235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3235)

```diff
-           Yj: cT.reportError,
+           SN: gq.reportError,
```

#### 333. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3248-L3249` → after: `L3412-L3413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3412-L3413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3412-L3413) · [Before (L3248-L3249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3248-L3249)

```diff
-               const cT = this.cC.oN.JV(this.cC.jH);
-               TT.AC(cT ? kT(cT) : -1)
+               const gq = this.wB.Iy.FX(this.wB.oR);
+               qq.lW(gq ? Eq(gq) : -1)
```

#### 334. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3296` → after: `L3460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3460) · [Before (L3296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3296)

```diff
-         this.driver.UA(TT)
+         this.driver.SB(qq)
```

#### 335. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3307` → after: `L3471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3471) · [Before (L3307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3307)

```diff
-         return OT.vV(yT, TT, kT, cT, lT, MT, KT)
+         return mq.Qs(xq, qq, Eq, gq, Yq, lq, Oq)
```

#### 336. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3318` → after: `L3482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3482) · [Before (L3318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3318)

```diff
-           return TT = kT, this.physics.rollbackBody = Lk(((TT, cT, lT, MT, KT, OT, yT) => kT.vV(kT.allocate(), TT, cT, lT, MT, KT, OT, yT))), kT
+           return qq = Eq, this.physics.rollbackBody = JE(((qq, gq, Yq, lq, Oq, mq, xq) => Eq.Qs(Eq.allocate(), qq, gq, Yq, lq, Oq, mq, xq))), Eq
```

#### 337. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3333` → after: `L3497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3497) · [Before (L3333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3333)

```diff
-           return TT ? lT && !(0, Uk.e)(lT) ? Zc(kT, cT, "has a block test not marked markIdOnlyBlockTest") : !MT || dc(MT[0]) && dc(MT[1]) && dc(MT[2]) ? TT.gC(kT, cT) : Zc(kT, cT, "has an offset that isn't whole cells") : Zc(kT, cT, "has no mirror")
+           return qq ? Yq && !(0, UE.d)(Yq) ? Sg(Eq, gq, "has a block test not marked markIdOnlyBlockTest") : !lq || Lg(lq[0]) && Lg(lq[1]) && Lg(lq[2]) ? qq.zW(Eq, gq) : Sg(Eq, gq, "has an offset that isn't whole cells") : Sg(Eq, gq, "has no mirror")
```

#### 338. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3352` → after: `L3516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3516) · [Before (L3352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3352)

```diff
-             const cT = TT.aC(kT.pA, MT[0], MT[1], MT[2], KT[0], KT[1], KT[2], lT[0], lT[1], lT[2]);
+             const gq = qq.aW(Eq.kB, lq[0], lq[1], lq[2], Oq[0], Oq[1], Oq[2], Yq[0], Yq[1], Yq[2]);
```

#### 339. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3356` → after: `L3520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3520) · [Before (L3356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3356)

```diff
-           kT.pA.zC()
+           Eq.kB.QW()
```

#### 340. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3364` → after: `L3528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3528) · [Before (L3364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3364)

```diff
-         return null !== (TT = null === (kT = this.mirror) || void 0 === kT ? void 0 : kT.residency()) && void 0 !== TT ? TT : null
+         return null !== (qq = null === (Eq = this.mirror) || void 0 === Eq ? void 0 : Eq.residency()) && void 0 !== qq ? qq : null
```

#### 341. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3367-L3368` → after: `L3531-L3532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3531-L3532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3531-L3532) · [Before (L3367-L3368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3367-L3368)

```diff
-         const kT = this.cC.QC;
-         return this.context.setOffsets(TT, kT, kT) && this.context.uploadOverrides(TT, this.cC.pA)
+         const Eq = this.wB.BW;
+         return this.context.setOffsets(qq, Eq, Eq) && this.context.uploadOverrides(qq, this.wB.kB)
```

#### 342. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3377-L3378` → after: `L3541-L3542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3541-L3542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3541-L3542) · [Before (L3377-L3378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3377-L3378)

```diff
-         const kT = this.cC.pA.Rv.physicsWorld;
-         return kT && rc(this.options.wasm) ? (this.mirror = new Wc(this.options.wasm, kT, this.cC.sC, this.failure), this.mirror) : null
+         const Eq = this.wB.kB.fa.physicsWorld;
+         return Eq && yg(this.options.wasm) ? (this.mirror = new Xg(this.options.wasm, Eq, this.wB.FW, this.failure), this.mirror) : null
```

#### 343. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3384` → after: `L3548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3548) · [Before (L3384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3384)

```diff
-     var Cl = cT(38241);
+     var BY = gq(38393);
```

#### 344. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3394` → after: `L3558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3558) · [Before (L3394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3394)

```diff
-         takeRefusedAllocation: null !== (kT = TT.takeBloxdWasmRefusedAllocation) && void 0 !== kT ? kT : () => 0
+         takeRefusedAllocation: null !== (Eq = qq.takeBloxdWasmRefusedAllocation) && void 0 !== Eq ? Eq : () => 0
```

#### 345. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3404-L3406` → after: `L3568-L3570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3568-L3570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3568-L3570) · [Before (L3404-L3406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3404-L3406)

```diff
-         const yT = null !== (lT = null === (MT = (KT = OT.bindings).kA) || void 0 === MT ? void 0 : MT.call(KT)) && void 0 !== lT ? lT : [];
-         if (!(yT.length === tl.length && tl.every(((TT, kT) => yT[kT] === TT)))) throw new Error(`@bloxd/wasm's chunk ingest constants [${Array.from(yT).join()}] are not [${tl.join()}]`);
-         return new hl(OT, new OT.bindings.pI, kT, cT)
+         const xq = null !== (Yq = null === (lq = (Oq = mq.bindings).Xu) || void 0 === lq ? void 0 : lq.call(Oq)) && void 0 !== Yq ? Yq : [];
+         if (!(xq.length === aY.length && aY.every(((qq, Eq) => xq[Eq] === qq)))) throw new Error(`@bloxd/wasm's chunk ingest constants [${Array.from(xq).join()}] are not [${aY.join()}]`);
+         return new VY(mq, new mq.bindings.Ju, Eq, gq)
```

#### 346. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3409` → after: `L3573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3573) · [Before (L3409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3409)

```diff
-         this.runtime = TT, this.handle = kT, this.sC = cT, this.reportTrap = lT, this.lightU8 = void 0, this.lightU16 = void 0, this.registryState = -1, this.lightU8 = new TT.BufferView(Uint8Array, kT.tj(!1), vl), this.lightU16 = new TT.BufferView(Uint16Array, kT.tj(!0), vl)
+         this.runtime = qq, this.handle = Eq, this.FW = gq, this.reportTrap = Yq, this.lightU8 = void 0, this.lightU16 = void 0, this.registryState = -1, this.lightU8 = new qq.BufferView(Uint8Array, Eq.xN(!1), NY), this.lightU16 = new qq.BufferView(Uint16Array, Eq.xN(!0), NY)
```

#### 347. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3412` → after: `L3576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3576) · [Before (L3412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3412)

```diff
-         return this.attempt((() => (this.syncRegistry(), Sl(this.handle.Nj(kT.pA, kT.slot, TT)), this.scan(kT))))
+         return this.attempt((() => (this.syncRegistry(), HY(this.handle.cN(Eq.kB, Eq.slot, qq)), this.scan(Eq))))
```

#### 348. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3418` → after: `L3582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3582) · [Before (L3418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3418)

```diff
-         return this.attempt((() => (Sl(this.handle.hj(TT, kT)), kT ? this.lightU16.view().slice() : this.lightU8.view().slice())))
+         return this.attempt((() => (HY(this.handle.AN(qq, Eq)), Eq ? this.lightU16.view().slice() : this.lightU8.view().slice())))
```

#### 349. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3421` → after: `L3585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3585) · [Before (L3421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3421)

```diff
-         const kT = this.handle.scan(TT.pA, TT.slot),
+         const Eq = this.handle.scan(qq.kB, qq.slot),
```

#### 350. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3425-L3428` → after: `L3589-L3592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3589-L3592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3589-L3592) · [Before (L3425-L3428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3425-L3428)

```diff
-           YV: this.runtime.view(Uint16Array, this.handle.Qj(), 32).slice(),
-           Am: 1 === cT || 0 !== cT && void 0,
-           sj: 0 !== (4 & kT),
-           qV: this.runtime.view(Uint16Array, this.handle.Sj(), lT).slice()
+           mp: this.runtime.view(Uint16Array, this.handle.uN(), 32).slice(),
+           Qp: 1 === gq || 0 !== gq && void 0,
+           UN: 0 !== (4 & Eq),
+           kS: this.runtime.view(Uint16Array, this.handle.BN(), Yq).slice()
```

#### 351. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3439` → after: `L3603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3603) · [Before (L3439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3439)

```diff
-             cT = new Error(`Chunk ingest trapped in wasm (${TT})`);
+             gq = new Error(`Chunk ingest trapped in wasm (${qq})`);
```

#### 352. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3445-L3446` → after: `L3609-L3610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3609-L3610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3609-L3610) · [Before (L3445-L3446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3445-L3446)

```diff
-         const kT = this.sC,
-           cT = 65536 * (null !== (TT = kT.tV) && void 0 !== TT ? TT : 0) + kT.Bv.length;
+         const Eq = this.FW,
+           gq = 65536 * (null !== (qq = Eq.Gs) && void 0 !== qq ? qq : 0) + Eq.Sa.length;
```

#### 353. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3450` → after: `L3614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3614) · [Before (L3450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3450)

```diff
-           const kT = Math.max(TT.Bv.length, TT.GV.length, TT.VV.length, TT.XV.length),
+           const Eq = Math.max(qq.Sa.length, qq.bS.length, qq.pT.length, qq.XT.length),
```

#### 354. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3453-L3454` → after: `L3617-L3618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3617-L3618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3617-L3618) · [Before (L3453-L3454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3453-L3454)

```diff
-             const kT = TT.Bv[lT];
-             cT[lT] = (void 0 === kT ? 2 : kT ? 1 : 0) | (TT.GV[lT] ? 4 : 0) | (TT.VV[lT] ? 8 : 0) | (TT.XV[lT] ? 16 : 0)
+             const Eq = qq.Sa[Yq];
+             gq[Yq] = (void 0 === Eq ? 2 : Eq ? 1 : 0) | (qq.bS[Yq] ? 4 : 0) | (qq.pT[Yq] ? 8 : 0) | (qq.XT[Yq] ? 16 : 0)
```

#### 355. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3458` → after: `L3622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3622) · [Before (L3458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3458)

```diff
-         this.handle.Dj(lT)
+         this.handle.WN(Yq)
```

#### 356. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3467-L3468` → after: `L3631-L3632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3631-L3632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3631-L3632) · [Before (L3467-L3468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3467-L3468)

```diff
-     var Dl = cT(38245);
-     const al = [11, 0, 1, 2, 3, 4, 5, 6, 10, 0, 1, 2, 32768, 4 * Dl.U, Dl.I, Dl.C, Dl.G, Dl.z, Dl.t, Dl.J, Dl.K, Dl.v, Dl._, Dl.W, Dl.db, Dl.hb, Dl.ab, Dl.r, Dl.i, Dl.m, Dl.q, Dl.N, Dl.e, ...Dl.R],
+     var oY = gq(38396);
+     const PY = [11, 0, 1, 2, 3, 4, 5, 6, 10, 0, 1, 2, 32768, 4 * oY.Q, oY.H, oY.B, oY.F, oY.x, oY.u, oY.I, oY.K, oY.w, oY.T, oY.S, oY.X, oY.Z, oY.V, oY.r, oY.h, oY.l, oY.n, oY.L, oY.b, ...oY.N],
```

#### 357. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3475-L3476` → after: `L3639-L3640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3639-L3640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3639-L3640) · [Before (L3475-L3476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3475-L3476)

```diff
-         const yT = null !== (lT = null === (MT = (KT = OT.bindings).sI) || void 0 === MT ? void 0 : MT.call(KT)) && void 0 !== lT ? lT : [];
-         return yT.length === al.length && al.every(((TT, kT) => yT[kT] === TT)) ? new rl(OT, new OT.bindings.nI, kT, cT) : (console.error(`@bloxd/wasm's block edit constants [${Array.from(yT).join()}] are not [${al.join()}], so blocks are set in JS`), null)
+         const xq = null !== (Yq = null === (lq = (Oq = mq.bindings).Uu) || void 0 === lq ? void 0 : lq.call(Oq)) && void 0 !== Yq ? Yq : [];
+         return xq.length === PY.length && PY.every(((qq, Eq) => xq[Eq] === qq)) ? new yY(mq, new mq.bindings.Lu, Eq, gq) : (console.error(`@bloxd/wasm's block edit constants [${Array.from(xq).join()}] are not [${PY.join()}], so blocks are set in JS`), null)
```

#### 358. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3479` → after: `L3643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3643) · [Before (L3479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3479)

```diff
-         this.runtime = TT, this.handle = kT, this.sC = cT, this.Yj = lT, this.header = void 0, this.journalPtr = void 0, this.sentProps = null, this.plainProps = null, this.hookedProps = null, this.busy = !1, this.startFailedAt = null, this.header = new TT.BufferView(Uint32Array, … [truncated]
+         this.runtime = qq, this.handle = Eq, this.FW = gq, this.SN = Yq, this.header = void 0, this.journalPtr = void 0, this.sentProps = null, this.plainProps = null, this.hookedProps = null, this.busy = !1, this.startFailedAt = null, this.header = new qq.BufferView(Uint32Array, … [truncated]
```

#### 359. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3482` → after: `L3646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3646) · [Before (L3482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3482)

```diff
-         let MT = (0, Dl.tb)(kT);
+         let lq = (0, oY.hb)(Eq);
```

#### 360. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3488` → after: `L3652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3652) · [Before (L3488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3488)

```diff
-           OT = this.propsFor(null === cT || void 0 === cT ? void 0 : cT.isHookId), yT = null !== (fT = null === cT || void 0 === cT || null === (xT = cT.watched) || void 0 === xT ? void 0 : xT.call(cT)) && void 0 !== fT ? fT : Fl
+           mq = this.propsFor(null === gq || void 0 === gq ? void 0 : gq.isHookId), xq = null !== (Aq = null === gq || void 0 === gq || null === (cq = gq.watched) || void 0 === cq ? void 0 : cq.call(gq)) && void 0 !== Aq ? Aq : QY
```

#### 361. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3490-L3491` → after: `L3654-L3655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3654-L3655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3654-L3655) · [Before (L3490-L3491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3490-L3491)

```diff
-           if (this.startFailedAt !== this.sC.tV) {
-             this.startFailedAt = this.sC.tV;
+           if (this.startFailedAt !== this.FW.Gs) {
+             this.startFailedAt = this.FW.Gs;
```

#### 362. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3493` → after: `L3657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3657) · [Before (L3493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3493)

```diff
-             this.Yj(new Error(`Block edits could not start in wasm (${TT}), so batches are set in JS until that is fixed`))
+             this.SN(new Error(`Block edits could not start in wasm (${qq}), so batches are set in JS until that is fixed`))
```

#### 363. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3497-L3498` → after: `L3661-L3662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3661-L3662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3661-L3662) · [Before (L3497-L3498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3497-L3498)

```diff
-         const IT = Dl.J | (null !== cT && void 0 !== cT && cT.isHookId ? Dl.K : 0);
-         if (!this.call(TT, !1, (() => (OT !== this.sentProps && (this.handle.jj(OT), this.sentProps = OT), this.handle.vj(yT), this.handle.Ij(kT), !0)))) return MT;
+         const uq = oY.I | (null !== gq && void 0 !== gq && gq.isHookId ? oY.K : 0);
+         if (!this.call(qq, !1, (() => (mq !== this.sentProps && (this.handle.ON(mq), this.sentProps = mq), this.handle.mN(xq), this.handle.gN(Eq), !0)))) return lq;
```

#### 364. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3527` → after: `L3691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3691) · [Before (L3527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3527)

```diff
-         return this.runtime.isReady() && TT.Rv.physicsWorld === kT
+         return this.runtime.isReady() && qq.fa.physicsWorld === Eq
```

#### 365. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3530` → after: `L3694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3694) · [Before (L3530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3530)

```diff
-         return this.busy || !this.runtime.isReady() ? null : TT.Rv.physicsWorld
+         return this.busy || !this.runtime.isReady() ? null : qq.fa.physicsWorld
```

#### 366. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3539-L3540` → after: `L3703-L3704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3703-L3704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3703-L3704) · [Before (L3539-L3540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3539-L3540)

```diff
-             KT = cT ? `, its ${cT} voxel writes undone for JS to redo` : "";
-           return this.Yj(new Error(`Block edits trapped in wasm (${MT})${KT}, so blocks are set in JS from now on`)), null
+             Oq = gq ? `, its ${gq} voxel writes undone for JS to redo` : "";
+           return this.SN(new Error(`Block edits trapped in wasm (${lq})${Oq}, so blocks are set in JS from now on`)), null
```

#### 367. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3552` → after: `L3716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3716) · [Before (L3552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3552)

```diff
-           if (void 0 === yT && (yT = TT.Rv.slotData(cT), MT.set(cT, yT)), yT) {
+           if (void 0 === xq && (xq = qq.fa.slotData(gq), lq.set(gq, xq)), xq) {
```

#### 368. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3560` → after: `L3724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3724) · [Before (L3560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3560)

```diff
-         const kT = this.sC.tV,
+         const Eq = this.FW.Gs,
```

#### 369. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3565` → after: `L3729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3729) · [Before (L3565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3565)

```diff
-           props: (0, Dl.pb)(this.sC, TT)
+           props: (0, oY.bb)(this.FW, qq)
```

#### 370. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3567` → after: `L3731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3731) · [Before (L3567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3567)

```diff
-         return TT ? this.hookedProps = lT : this.plainProps = lT, lT.props
+         return qq ? this.hookedProps = Yq : this.plainProps = Yq, Yq.props
```

#### 371. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3572` → after: `L3736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3736) · [Before (L3572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3572)

```diff
-         0 !== cT && (0, Dl.lb)(TT, {
+         0 !== gq && (0, oY.ab)(qq, {
```

#### 372. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3574-L3575` → after: `L3738-L3739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3738-L3739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3738-L3739) · [Before (L3574-L3575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3574-L3575)

```diff
-           words: this.runtime.view(Int32Array, kT[0], cT * Dl.U),
-           layerIds: this.runtime.view(Uint16Array, kT[0], cT * Dl.U * 2),
+           words: this.runtime.view(Int32Array, Eq[0], gq * oY.Q),
+           layerIds: this.runtime.view(Uint16Array, Eq[0], gq * oY.Q * 2),
```

#### 373. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3583-L3585` → after: `L3747-L3749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3747-L3749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3747-L3749) · [Before (L3583-L3585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3583-L3585)

```diff
-     var Pl = cT(37315),
-       wl = cT(38234),
-       ml = cT(38919),
+     var tY = gq(37489),
+       rY = gq(38386),
+       vY = gq(39064),
```

#### 374. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3603` → after: `L3767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3767) · [Before (L3603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3603)

```diff
-       TT.pE = TT.qE = 0
+       qq.jK = qq.rK = 0
```

#### 375. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3610` → after: `L3774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3774) · [Before (L3610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3610)

```diff
-       HZ: !1,
+       IK: !1,
```

#### 376. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3612` → after: `L3776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3776) · [Before (L3612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3612)

```diff
-       eZ: !1
+       gC: !1
```

#### 377. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3626` → after: `L3790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3790) · [Before (L3626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3626)

```diff
-     class dl extends ml.d {
+     class LY extends vY.c {
```

#### 378. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3634` → after: `L3798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3798) · [Before (L3634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3634)

```diff
-         this.ZZ = null;
+         this.YC = null;
```

#### 379. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3642` → after: `L3806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3806) · [Before (L3642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3642)

```diff
-           TT.container.gH && function(TT, kT, cT, lT) {
+           qq.container.pR && function(qq, Eq, gq, Yq) {
```

#### 380. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3647` → after: `L3811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3811) · [Before (L3647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3647)

```diff
-           }(OT, cT.movementX, cT.movementY, cT.timeStamp) && (this.uZ.dx -= cT.movementX, this.uZ.dy -= cT.movementY, this.ZZ && this.ZZ())
+           }(mq, gq.movementX, gq.movementY, gq.timeStamp) && (this.lC.dx -= gq.movementX, this.lC.dy -= gq.movementY, this.YC && this.YC())
```

#### 381. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3653-L3657` → after: `L3817-L3821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3817-L3821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3817-L3821) · [Before (L3653-L3657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3653-L3657)

```diff
-     var Ll = cT(38227),
-       Rl = cT(39339),
-       gl = cT(350),
-       Ul = cT(39342),
-       Yl = cT(9455).h;
+     var JY = gq(38379),
+       kY = gq(39476),
+       RY = gq(317),
+       UY = gq(39485),
+       FY = gq(9385).j;
```

#### 382. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3659` → after: `L3823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3823) · [Before (L3659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3659)

```diff
-       UA(TT) {
+       SB(qq) {
```

#### 383. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3691-L3692` → after: `L3855-L3856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3855-L3856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3855-L3856) · [Before (L3691-L3692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3691-L3692)

```diff
-       if (!kT.sG || kT.zI <= 0) {
-         var MT = kT.Oh;
+       if (!Eq.JF || Eq.Am <= 0) {
+         var lq = Eq.JV;
```

#### 384. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3694` → after: `L3858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3858) · [Before (L3694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3694)

```diff
-         var KT = kT.KV;
+         var Oq = Eq.XF;
```

#### 385. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3696` → after: `L3860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3860) · [Before (L3696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3696)

```diff
-         var OT = kT.yV;
+         var mq = Eq.KF;
```

#### 386. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3699` → after: `L3863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3863) · [Before (L3699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3699)

```diff
-       var yT = !!TT.IC,
+       var xq = !!qq.YW,
```

#### 387. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3702-L3703` → after: `L3866-L3867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3866-L3867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3866-L3867) · [Before (L3702-L3703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3702-L3703)

```diff
-           if (!TT.lV) return;
-           var cT = (0, Ll.h)(hc(TT, kT), TT.lV, kT.BA);
+           if (!qq.sF) return;
+           var gq = (0, JY.f)(Vg(qq, Eq), qq.sF, Eq.GB);
```

#### 388. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3705` → after: `L3869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3869) · [Before (L3705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3705)

```diff
-           PM[1] = cT, kT.BA.translate(PM), kT.fV(), kT.xC && kT.xC()
+           tl[1] = gq, Eq.GB.translate(tl), Eq.Ws(), Eq.gW && Eq.gW()
```

#### 389. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3708` → after: `L3872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3872) · [Before (L3708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3708)

```diff
-           if (kT.wakeInFluid && TT.testFluid(Math.floor(kT.BA.base[0]), Math.floor(kT.BA.base[1]), Math.floor(kT.BA.base[2]))) return !1;
+           if (Eq.wakeInFluid && qq.testFluid(Math.floor(Eq.GB.base[0]), Math.floor(Eq.GB.base[1]), Math.floor(Eq.GB.base[2]))) return !1;
```

#### 390. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3714` → after: `L3878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3878) · [Before (L3714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3714)

```diff
-           return IM = !1, Ul(OT, kT.BA, oM, AM, !0), IM
+           return cl = !1, UY(mq, Eq.GB, il, ul, !0), cl
```

#### 391. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3720` → after: `L3884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3884) · [Before (L3720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3720)

```diff
-             var cT = kT.BA,
+             var gq = Eq.GB,
```

#### 392. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3733-L3737` → after: `L3897-L3901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3897-L3901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3897-L3901) · [Before (L3733-L3737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3733-L3737)

```diff
-             gl.scale(AT, TT.gravity, -TT.hC * IT * kT.gravityMultiplier), kT.applyForce(AT), kT.inFluid = !0, kT.ratioInFluid = xT
-           }(TT, kT), GM(kT.KV), GM(kT.yV), GM(kT.Oh), GM(kT.resting);
-         var IT = kT.Oh,
-           AT = kT.KV,
-           CT = kT.yV,
+             RY.scale(Bq, qq.gravity, -qq.cW * uq * Eq.gravityMultiplier), Eq.applyForce(Bq), Eq.inFluid = !0, Eq.ratioInFluid = cq
+           }(qq, Eq), Ml(Eq.XF), Ml(Eq.KF), Ml(Eq.JV), Ml(Eq.resting);
+         var uq = Eq.JV,
+           Bq = Eq.XF,
+           Wq = Eq.KF,
```

#### 393. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3739` → after: `L3903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3903) · [Before (L3739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3739)

```diff
-           vT = 1 / kT.zI;
+           aq = 1 / Eq.Am;
```

#### 394. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3742` → after: `L3906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3906) · [Before (L3742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3742)

```diff
-         Wl[0] = Wl[0] + jT[0] * tT, Wl[1] = Wl[1] + jT[1] * tT, Wl[2] = Wl[2] + jT[2] * tT, vT = 1 / kT.zI, nl[0] = CT[0] * vT, nl[1] = CT[1] * vT, nl[2] = CT[2] * vT, nl[0] = nl[0] + Wl[0] * cT, nl[1] = nl[1] + Wl[1] * cT, nl[2] = nl[2] + Wl[2] * cT, IT[0] = IT[0] + nl[0], IT[1] … [truncated]
+         XY[0] = XY[0] + Nq[0] * Vq, XY[1] = XY[1] + Nq[1] * Vq, XY[2] = XY[2] + Nq[2] * Vq, aq = 1 / Eq.Am, wY[0] = Wq[0] * aq, wY[1] = Wq[1] * aq, wY[2] = Wq[2] * aq, wY[0] = wY[0] + XY[0] * gq, wY[1] = wY[1] + XY[1] * gq, wY[2] = wY[2] + XY[2] * gq, uq[0] = uq[0] + wY[0], uq[1] … [truncated]
```

#### 395. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3747` → after: `L3911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3911) · [Before (L3747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3747)

```diff
-           ST = kT.tC >= 0 ? kT.tC : TT.tC,
+           oq = Eq.AW >= 0 ? Eq.AW : qq.AW,
```

#### 396. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3750-L3751` → after: `L3914-L3915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3914-L3915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3914-L3915) · [Before (L3750-L3751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3750-L3751)

```diff
-         kT.inFluid && (DT = kM(kT, kT.fluidDragHoriz >= 0 ? kT.fluidDragHoriz : QT), aT = kM(kT, kT.fluidDragVert >= 0 ? kT.fluidDragVert : QT)), DT = Math.max(1 - DT * cT / kT.zI, 0), aT = Math.max(1 - aT * cT / kT.zI, 0), cM[0] = DT, cM[1] = aT, cM[2] = DT, IT[0] = IT[0] * cM[0 … [truncated]
-           if (Ul.checkInput(kT.BA, cT), !kT.resting[1] || cT[1] > 0) return;
+         Eq.inFluid && (Pq = ql(Eq, Eq.fluidDragHoriz >= 0 ? Eq.fluidDragHoriz : Hq), Qq = ql(Eq, Eq.fluidDragVert >= 0 ? Eq.fluidDragVert : Hq)), Pq = Math.max(1 - Pq * gq / Eq.Am, 0), Qq = Math.max(1 - Qq * gq / Eq.Am, 0), El[0] = Pq, El[1] = Qq, El[2] = Pq, uq[0] = uq[0] * El[0 … [truncated]
+           if (UY.checkInput(Eq.GB, gq), !Eq.resting[1] || gq[1] > 0) return;
```

#### 397. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3753` → after: `L3917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3917) · [Before (L3753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3753)

```diff
-           eM(MT, kT.BA);
+           fl(lq, Eq.GB);
```

#### 398. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3759` → after: `L3923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3923) · [Before (L3759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3759)

```diff
-         }(TT, kT, pl, TM), jM(TT, kT, kT.BA, pl, kT.resting, kT.slideOnCollision), kT.iG && function(TT, kT, cT, lT) {
+         }(qq, Eq, KY, DY), Wl(qq, Eq, Eq.GB, KY, Eq.resting, Eq.slideOnCollision), Eq.SF && function(qq, Eq, gq, Yq) {
```

#### 399. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3768` → after: `L3932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3932) · [Before (L3768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3768)

```diff
-             xT = kT.BA.base[1];
+             cq = Eq.GB.base[1];
```

#### 400. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3784` → after: `L3948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3948) · [Before (L3784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3784)

```diff
-         for (var FT = 0; FT < 3; ++FT) kT.resting[FT] = kT.resting[FT] || TM[FT], il[FT] = 0, kT.resting[FT] && (ql[FT] || (il[FT] = -kT.Oh[FT]), kT.Oh[FT] = 0);
+         for (var yq = 0; yq < 3; ++yq) Eq.resting[yq] = Eq.resting[yq] || DY[yq], CY[yq] = 0, Eq.resting[yq] && (IY[yq] || (CY[yq] = -Eq.JV[yq]), Eq.JV[yq] = 0);
```

#### 401. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3786` → after: `L3950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3950) · [Before (L3786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3786)

```diff
-         rT > .001 && (gl.scale(il, il, kT.zI), kT.yC && kT.yC(il)),
+         tq > .001 && (RY.scale(CY, CY, Eq.Am), Eq.qW && Eq.qW(CY)),
```

#### 402. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3788` → after: `L3952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3952) · [Before (L3788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3788)

```diff
-             if (!kT.BA) return;
+             if (!Eq.GB) return;
```

#### 403. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3790-L3792` → after: `L3954-L3956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3954-L3956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3954-L3956) · [Before (L3790-L3792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3790-L3792)

```diff
-             var MT = gl.squaredLength(kT.Oh);
-             MT > 1e-5 && kT.fV();
-             TT.IC && TT.IC(kT) ? (kT.loadStateFromCopy(TT.rollbackBody), kT.rolledBackLastTick = !0) : kT.rolledBackLastTick = !1
+             var lq = RY.squaredLength(Eq.JV);
+             lq > 1e-5 && Eq.Ws();
+             qq.YW && qq.YW(Eq) ? (Eq.loadStateFromCopy(qq.rollbackBody), Eq.rolledBackLastTick = !0) : Eq.rolledBackLastTick = !1
```

#### 404. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3805` → after: `L3969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3969) · [Before (L3805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3805)

```diff
-       gl.copy(OM, cT.Oh), OM[kT] = 0;
+       RY.copy(Ol, gq.JV), Ol[Eq] = 0;
```

#### 405. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3809-L3810` → after: `L3973-L3974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R3973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L3973-L3974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L3973-L3974) · [Before (L3809-L3810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3809-L3810)

```diff
-           xT = yT > fT ? (yT - fT) / yT : 0;
-         cT.Oh[(kT + 1) % 3] *= xT, cT.Oh[(kT + 2) % 3] *= xT
+           cq = xq > Aq ? (xq - Aq) / xq : 0;
+         gq.JV[(Eq + 1) % 3] *= cq, gq.JV[(Eq + 2) % 3] *= cq
```

#### 406. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3857` → after: `L4021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4021) · [Before (L3857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3857)

```diff
-           }(TT, kT, cT))) return eM(kT.BA, cT), kT.resting[0] = tM[0], kT.resting[2] = tM[2], kT.xC && kT.xC(), !0
+           }(qq, Eq, gq))) return fl(Eq.GB, gq), Eq.resting[0] = al[0], Eq.resting[2] = al[2], Eq.gW && Eq.gW(), !0
```

#### 407. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3888` → after: `L4052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4052) · [Before (L3888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3888)

```diff
-       tC: .1
+       AW: .1
```

#### 408. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3893-L3897` → after: `L4057-L4061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4057-L4061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4057-L4061) · [Before (L3893-L3897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3893-L3897)

```diff
-         var cT = TT.pA,
-           lT = TT.sC.kj,
-           MT = TT.QC;
-         kT.lV = (0, Uk.k)(((TT, kT, lT) => !cT.Tu(TT + MT[0], kT + MT[1], lT + MT[2])), "cell"), super(kT, ((TT, kT, lT) => cT.DC(TT + MT[0], kT + MT[1], lT + MT[2])), ((TT, kT, KT) => {
-           var OT = cT.RZ(TT + MT[0], kT + MT[1], KT + MT[2]);
+         var gq = qq.kB,
+           Yq = qq.FW.XW,
+           lq = qq.BW;
+         Eq.sF = (0, UE.j)(((qq, Eq, Yq) => !gq.yC(qq + lq[0], Eq + lq[1], Yq + lq[2])), "cell"), super(Eq, ((qq, Eq, Yq) => gq.NW(qq + lq[0], Eq + lq[1], Yq + lq[2])), ((qq, Eq, Oq) => {
+           var mq = gq.mC(qq + lq[0], Eq + lq[1], Oq + lq[2]);
```

#### 409. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3899` → after: `L4063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4063) · [Before (L3899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3899)

```diff
-         })), this.wasm = null, this.ku = 0, this.Eu = 0
+         })), this.wasm = null, this.tC = 0, this.rC = 0
```

#### 410. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3903` → after: `L4067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4067) · [Before (L3903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3903)

```diff
-         this.wasm ? this.wasm.UA(TT) : super.UA(TT), this.ku += performance.now() - kT, this.Eu++
+         this.wasm ? this.wasm.SB(qq) : super.SB(qq), this.tC += performance.now() - Eq, this.rC++
```

#### 411. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3906` → after: `L4070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4070) · [Before (L3906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3906)

```diff
-         return this.wasm && this.wasm.vV(TT, kT, cT, lT, MT, KT) || super.vV(TT, kT, cT, lT, MT, KT)
+         return this.wasm && this.wasm.Qs(qq, Eq, gq, Yq, lq, Oq) || super.Qs(qq, Eq, gq, Yq, lq, Oq)
```

#### 412. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3909-L3910` → after: `L4073-L4074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4073-L4074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4073-L4074) · [Before (L3909-L3910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3909-L3910)

```diff
-         var kT = super.jC(TT);
-         return kT && this.wasm && this.wasm.oV(TT), kT
+         var Eq = super.mW(qq);
+         return Eq && this.wasm && this.wasm.Ow(qq), Eq
```

#### 413. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3914-L3915` → after: `L4078-L4079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4078-L4079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4078-L4079) · [Before (L3914-L3915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3914-L3915)

```diff
-           ms: this.ku,
-           count: this.Eu
+           ms: this.tC,
+           count: this.rC
```

#### 414. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3917` → after: `L4081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4081) · [Before (L3917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3917)

```diff
-         return this.ku = 0, this.Eu = 0, TT
+         return this.tC = 0, this.rC = 0, qq
```

#### 415. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3920` → after: `L4084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4084) · [Before (L3920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3920)

```diff
-     var ZM = cT(39339),
+     var Sl = gq(39476),
```

#### 416. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3922` → after: `L4086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4086) · [Before (L3922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3922)

```diff
-       XM = cT(39342),
+       Gl = gq(39485),
```

#### 417. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3924` → after: `L4088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4088) · [Before (L3924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3924)

```diff
-       LM = cT(37235);
+       Jl = gq(37413);
```

#### 418. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3927` → after: `L4091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4091) · [Before (L3927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3927)

```diff
-       this.Xu = !1, this.Yu = !1, this.yX = 1, this.FX = 0, this.EX = 10, this.BX = 10, this.cL = 0, this.lL = .2
+       this.nC = !1, this.bC = !1, this.ZC = 1, this.fC = 0, this.zC = 10, this.pC = 10, this.JC = 0, this.RC = .2
```

#### 419. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3933-L3936` → after: `L4097-L4100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4097-L4100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4097-L4100) · [Before (L3933-L3936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3933-L3936)

```diff
-         kT = Object.assign({}, new RM, kT), this.cC = TT, this.EX = +kT.EX, this.BX = +kT.BX, this.Xu = !!kT.Xu, this.Yu = !!kT.Yu, this.yX = kT.yX, this.FX = kT.FX, this.heading = 0, this.pitch = 0, this.dv = 0, this.Bt = QT().create(), this.fL = this.cC.oN.tL(["position"]);
-         var cT = .9 * TT.oN.wL(TT.jH).height;
-         TT.oN.dJ(this.fL, "Xw", {
-           Tv: TT.jH,
+         Eq = Object.assign({}, new kl, Eq), this.wB = qq, this.zC = +Eq.zC, this.pC = +Eq.pC, this.nC = !!Eq.nC, this.bC = !!Eq.bC, this.ZC = Eq.ZC, this.fC = Eq.fC, this.heading = 0, this.pitch = 0, this.ta = 0, this.fV = Hq().create(), this.sC = this.wB.Iy.eC(["position"]);
+         var gq = .9 * qq.Iy.qI(qq.oR).height;
+         qq.Iy.zk(this.sC, "HZ", {
+           FN: qq.oR,
```

#### 420. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3938` → after: `L4102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4102) · [Before (L3938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3938)

```diff
-         }), this.uL = kT.cL, this.lL = kT.lL, this.dL = kT.cL, this.uZ = {
+         }), this.mI = Eq.JC, this.RC = Eq.RC, this.xI = Eq.JC, this.lC = {
```

#### 421. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3941` → after: `L4105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4105) · [Before (L3941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3941)

```diff
-         }, this.RL = null, this.targetX = 0, this.targetY = 0, this.cameraRotationOffset = [0, 0, 0], this.cameraPositionOffset = [0, 0, 0], this.gL = new AK(this), this.YL = QT().ck(0, 0, 1), this.qL = QT().ck(0, 0, 1), this.aG = !1, this.kR = {
+         }, this.HI = null, this.targetX = 0, this.targetY = 0, this.cameraRotationOffset = [0, 0, 0], this.cameraPositionOffset = [0, 0, 0], this.yI = new uO(this), this.vI = Hq().gq(0, 0, 1), this.bI = Hq().gq(0, 0, 1), this.IU = !1, this.ZI = {
```

#### 422. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3943-L3946` → after: `L4107-L4110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4107-L4110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4107-L4110) · [Before (L3943-L3946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3943-L3946)

```diff
-           vy: 0,
-           pE: 0,
-           qE: 0
-         }, this.yR = NaN, this.aE = null, this.fR = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.xR = null, this.jR = null, this.vR = null, this.JR = null
+           qJ: 0,
+           jK: 0,
+           rK: 0
+         }, this.MI = NaN, this.Iw = null, this.pI = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.JI = null, this.qD = null, this.lD = null, this.uD = null
```

#### 423. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3950-L3951` → after: `L4114-L4115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4114-L4115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4114-L4115) · [Before (L3950-L3951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3950-L3951)

```diff
-         var kT = this.cC.oN.wL(this.fL);
-         QT().copy(TT, kT.uR);
+         var Eq = this.wB.Iy.qI(this.sC);
+         Hq().copy(qq, Eq.dD);
```

#### 424. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3953` → after: `L4117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4117) · [Before (L3953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3953)

```diff
-         return 0 === cT[0] && 0 === cT[1] && 0 === cT[2] || 0 === this.dL || iM(this, TT, this.heading), TT
+         return 0 === gq[0] && 0 === gq[1] && 0 === gq[2] || 0 === this.xI || Cl(this, qq, this.heading), qq
```

#### 425. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3957-L3960` → after: `L4121-L4124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4121-L4124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4121-L4124) · [Before (L3957-L3960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3957-L3960)

```diff
-         var kT = this.oR(TT);
-         if (0 === this.dL) return kT;
-         const cT = this.cC.bloxd.pR(this.cC.jH);
-         return QT().ek(kT, kT, this.YL, -this.dL * cT)
+         var Eq = this.ND(qq);
+         if (0 === this.xI) return Eq;
+         const gq = this.wB.bloxd.PD(this.wB.oR);
+         return Hq().sq(Eq, Eq, this.vI, -this.xI * gq)
```

#### 426. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3963` → after: `L4127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4127) · [Before (L3963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3963)

```diff
-         return this.gR(TT)
+         return this.jD(qq)
```

#### 427. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3966` → after: `L4130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4130) · [Before (L3966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3966)

```diff
-         var TT = this.oR(),
+         var qq = this.ND(),
```

#### 428. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3968` → after: `L4132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4132) · [Before (L3968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3968)

```diff
-         return this.cC.IU(TT, kT)
+         return this.wB.bD(qq, Eq)
```

#### 429. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3971` → after: `L4135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4135) · [Before (L3971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3971)

```diff
-         var TT = this.gR(),
+         var qq = this.jD(),
```

#### 430. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3973` → after: `L4137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4137) · [Before (L3973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3973)

```diff
-         return this.cC.IU(TT, kT)
+         return this.wB.bD(qq, Eq)
```

#### 431. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3980` → after: `L4144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4144) · [Before (L3980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3980)

```diff
-         return QT().copy(this.aU, this.qL)
+         return Hq().copy(this.pD, this.bI)
```

#### 432. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3983` → after: `L4147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4147) · [Before (L3983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3983)

```diff
-         return QT().copy(this.aU, this.YL)
+         return Hq().copy(this.pD, this.vI)
```

#### 433. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3986-L3987` → after: `L4150-L4151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4150-L4151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4150-L4151) · [Before (L3986-L3987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3986-L3987)

```diff
-         var lT = this.fR;
-         return lT[0] = TT, lT[1] = kT, lT[2] = cT.dx, lT[3] = cT.dy, lT[7] = this.kR.vx, lT[8] = this.kR.vy, lT[9] = function(TT) {
+         var Yq = this.pI;
+         return Yq[0] = qq, Yq[1] = Eq, Yq[2] = gq.dx, Yq[3] = gq.dy, Yq[7] = this.ZI.vx, Yq[8] = this.ZI.qJ, Yq[9] = function(qq) {
```

#### 434. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3992` → after: `L4156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4156) · [Before (L3992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3992)

```diff
-         TT[4] = cT, TT[5] = lT, TT[6] = kT, this.aE && this.aE(TT)
+         qq[4] = gq, qq[5] = Yq, qq[6] = Eq, this.Iw && this.Iw(qq)
```

#### 435. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L3997-L3998` → after: `L4161-L4162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4161-L4162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4161-L4162) · [Before (L3997-L3998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L3997-L3998)

```diff
-           dx: this.uZ.dx,
-           dy: this.uZ.dy
+           dx: this.lC.dx,
+           dy: this.lC.dy
```

#### 436. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4000` → after: `L4164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4164) · [Before (L4000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4000)

```diff
-         this.uZ.dx = this.uZ.dy = 0;
+         this.lC.dx = this.lC.dy = 0;
```

#### 437. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4005-L4009` → after: `L4169-L4173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4169-L4173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4169-L4173) · [Before (L4005-L4009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4005-L4009)

```diff
-           return "number" === typeof TT ? TT : performance.now()
-         }()) - this.yR, this.yR = lT);
-         var MT = !TT && this.aE ? this.dU(lT, cT, kT) : null;
-         const KT = this.vR ? this.vR() : 0,
-           OT = this.JR ? this.JR() : null,
+           return "number" === typeof qq ? qq : performance.now()
+         }()) - this.MI, this.MI = Yq);
+         var lq = !qq && this.Iw ? this.eD(Yq, gq, Eq) : null;
+         const Oq = this.lD ? this.lD() : 0,
+           mq = this.uD ? this.uD() : null,
```

#### 438. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4011-L4015` → after: `L4175-L4179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4175-L4179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4175-L4179) · [Before (L4011-L4015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4011-L4015)

```diff
-         var fT = this.yX;
-         if (this.cC.container.UH && (this.cC.container.gH || (fT *= this.FX)), 0 === fT && 0 === KT && !yT) return TT || El(this.kR), void(MT && this.WU(MT, Jl, 0, 0));
-         if (this.aG) {
-           if (this.aG = !1, 0 === KT && !yT) return TT || El(this.kR), void(MT && this.WU(MT, el, 0, 0));
-           fT = 0, MT && this.WU(MT, el, 0, 0), MT = null
+         var Aq = this.ZC;
+         if (this.wB.container.JR && (this.wB.container.pR || (Aq *= this.fC)), 0 === Aq && 0 === Oq && !xq) return qq || zY(this.ZI), void(lq && this.N7(lq, bY, 0, 0));
+         if (this.IU) {
+           if (this.IU = !1, 0 === Oq && !xq) return qq || zY(this.ZI), void(lq && this.N7(lq, fY, 0, 0));
+           Aq = 0, lq && this.N7(lq, fY, 0, 0), lq = null
```

#### 439. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4023-L4027` → after: `L4187-L4191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4187-L4191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4187-L4191) · [Before (L4023-L4027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4023-L4027)

```diff
-                 OT = Zl(kT.dy, lT, TT.vy, MT);
-               return 0 !== KT && KT !== TT.pE || 0 !== OT && OT !== TT.qE ? (TT.pE = KT, TT.qE = OT, kT.dx = TT.vx * lT, kT.dy = TT.vy * lT, !0) : (TT.pE = TT.qE = 0, TT.vx = kT.dx / lT, TT.vy = kT.dy / lT, !1)
-             }(this.kR, kT, cT);
-             MT && this.WU(MT, xT ? Hl : ol, kT.dx, kT.dy)
-           } else El(this.kR), MT && this.WU(MT, Jl, 0, 0);
+                 mq = SY(Eq.dy, Yq, qq.qJ, lq);
+               return 0 !== Oq && Oq !== qq.jK || 0 !== mq && mq !== qq.rK ? (qq.jK = Oq, qq.rK = mq, Eq.dx = qq.vx * Yq, Eq.dy = qq.qJ * Yq, !0) : (qq.jK = qq.rK = 0, qq.vx = Eq.dx / Yq, qq.qJ = Eq.dy / Yq, !1)
+             }(this.ZI, Eq, gq);
+             lq && this.N7(lq, cq ? ZY : iY, Eq.dx, Eq.dy)
+           } else zY(this.ZI), lq && this.N7(lq, bY, 0, 0);
```

#### 440. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4029-L4031` → after: `L4193-L4195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4193-L4195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4193-L4195) · [Before (L4029-L4031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4029-L4031)

```diff
-           AT = kT.dx * this.EX * fT * IT,
-           CT = kT.dy * this.BX * fT * IT;
-         this.Xu && (AT = -AT), this.Yu && (CT = -CT), yT && (AT += OT.Rm, CT += OT.Wm), (0 !== fT || yT) && (CT += this.gL.pU(CT));
+           Bq = Eq.dx * this.zC * Aq * uq,
+           Wq = Eq.dy * this.pC * Aq * uq;
+         this.nC && (Bq = -Bq), this.bC && (Wq = -Wq), xq && (Bq += mq.VJ, Wq += mq.dJ), (0 !== Aq || xq) && (Wq += this.yI.J7(Wq));
```

#### 441. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4033` → after: `L4197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4197) · [Before (L4033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4033)

```diff
-         this.heading += AT < 0 ? AT + jT : AT, this.heading > jT && (this.heading -= jT), (0 !== KT || yT) && (this.heading = ((this.heading + KT) % jT + jT) % jT), this.pitch = Math.max(-IK, Math.min(IK, this.pitch + CT)), null !== this.jR && (this.heading = this.jR), null !== t … [truncated]
+         this.heading += Bq < 0 ? Bq + Nq : Bq, this.heading > Nq && (this.heading -= Nq), (0 !== Oq || xq) && (this.heading = ((this.heading + Oq) % Nq + Nq) % Nq), this.pitch = Math.max(-cO, Math.min(cO, this.pitch + Wq)), null !== this.qD && (this.heading = this.qD), null !== t … [truncated]
```

#### 442. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4036-L4037` → after: `L4200-L4201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4200-L4201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4200-L4201) · [Before (L4036-L4037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4036-L4037)

```diff
-         QT().set(this.qL, 0, 0, 1);
-         var TT = this.qL,
+         Hq().set(this.bI, 0, 0, 1);
+         var qq = this.bI,
```

#### 443. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4039` → after: `L4203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4203) · [Before (L4039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4039)

```diff
-         qM(this, this.heading, this.pitch, 0 !== this.dL, this.YL), QT().AO(TT, TT, kT, this.pitch), QT().Of(TT, TT, kT, this.heading)
+         Il(this, this.heading, this.pitch, 0 !== this.xI, this.vI), Hq().AO(qq, qq, Eq, this.pitch), Hq().tm(qq, qq, Eq, this.heading)
```

#### 444. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4045` → after: `L4209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4209) · [Before (L4045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4045)

```diff
-           OT = this.cC.bloxd.pR(this.cC.jH),
+           mq = this.wB.bloxd.PD(this.wB.oR),
```

#### 445. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4048` → after: `L4212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4212) · [Before (L4048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4048)

```diff
-         return 0 === fT ? (QT().copy(MT, TT), 0) : (QT().ek(MT, MT, KT, -fT * OT), fT)
+         return 0 === Aq ? (Hq().copy(lq, qq), 0) : (Hq().sq(lq, lq, Oq, -Aq * mq), Aq)
```

#### 446. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4051` → after: `L4215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4215) · [Before (L4051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4051)

```diff
-         return QT().rc(fK, kT), WM(this, TT, fK, cT)
+         return Hq().nY(xO, Eq), Xl(this, qq, xO, gq)
```

#### 447. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4054-L4055` → after: `L4218-L4219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4218-L4219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4218-L4219) · [Before (L4054-L4055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4054-L4055)

```diff
-         const kT = (this.uL - this.dL) * this.lL;
-         Math.abs(kT) < 1e-4 ? this.dL = this.uL : this.dL += kT, 0 !== kT && this.RL && this.RL(this.dL, this.dL - kT), this.gL.update(TT)
+         const Eq = (this.mI - this.xI) * this.RC;
+         Math.abs(Eq) < 1e-4 ? this.xI = this.mI : this.xI += Eq, 0 !== Eq && this.HI && this.HI(this.xI, this.xI - Eq), this.yI.update(qq)
```

#### 448. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4058-L4060` → after: `L4222-L4224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4222-L4224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4222-L4224) · [Before (L4058-L4060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4058-L4060)

```diff
-         var TT = pM(BM(this), this.cC.bloxd.pR(this.cC.jH));
-         this.dL > TT && (this.dL = TT);
-         var kT = this.cC.gv.hY().aY;
+         var qq = Kl(sl(this), this.wB.bloxd.PD(this.wB.oR));
+         this.xI > qq && (this.xI = qq);
+         var Eq = this.wB.Ma.o3().U3;
```

#### 449. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4071-L4073` → after: `L4235-L4237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4235-L4237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4235-L4237) · [Before (L4071-L4073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4071-L4073)

```diff
-       const kT = TT.cC.bloxd.pR(TT.cC.jH);
-       var cT = Math.max(TT.uL, TT.dL) * kT + .5;
-       return WM(TT, TT.oR(), TT.PU(), cT)
+       const Eq = qq.wB.bloxd.PD(qq.wB.oR);
+       var gq = Math.max(qq.mI, qq.xI) * Eq + .5;
+       return Xl(qq, qq.ND(), qq.KD(), gq)
```

#### 450. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4078-L4079` → after: `L4242-L4243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4242-L4243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4242-L4243) · [Before (L4078-L4079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4078-L4079)

```diff
-         var MT = TT.cC.QC;
-         lK = new(uM())([0, 0, 0], QT().clone(KK)), MK = (kT, cT, lT) => TT.cC.pA.DC(kT + MT[0], cT + MT[1], lT + MT[2]), QT().scale(KK, KK, -.5)
+         var lq = qq.wB.BW;
+         gO = new(pl())([0, 0, 0], Hq().clone(lO)), YO = (Eq, gq, Yq) => qq.wB.kB.NW(Eq + lq[0], gq + lq[1], Yq + lq[2]), Hq().scale(lO, lO, -.5)
```

#### 451. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4096` → after: `L4260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4260) · [Before (L4096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4096)

```diff
-       return QT().set(MT, 0, 0, 1), QT().AO(MT, MT, KT, TT.Bt[0]), QT().Of(MT, MT, KT, TT.Bt[1]), QT().nf(MT, MT, KT, TT.Bt[2]), QT().AO(MT, MT, KT, cT), QT().Of(MT, MT, KT, kT), lT && (QT().AO(MT, MT, KT, TT.cameraRotationOffset[0]), QT().Of(MT, MT, KT, TT.cameraRotationOffset[1 … [truncated]
+       return Hq().set(lq, 0, 0, 1), Hq().AO(lq, lq, Oq, qq.fV[0]), Hq().tm(lq, lq, Oq, qq.fV[1]), Hq().GA(lq, lq, Oq, qq.fV[2]), Hq().AO(lq, lq, Oq, gq), Hq().tm(lq, lq, Oq, Eq), Yq && (Hq().AO(lq, lq, Oq, qq.cameraRotationOffset[0]), Hq().tm(lq, lq, Oq, qq.cameraRotationOffset[1 … [truncated]
```

#### 452. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4100-L4102` → after: `L4264-L4266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4264-L4266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4264-L4266) · [Before (L4100-L4102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4100-L4102)

```diff
-       lK.setPosition(TT.gR()), lK.translate(KK);
-       var kT = Math.max(TT.targetY, TT.cC.gv.hY().aY[1]) + .5,
-         cT = TT.vU();
+       gO.setPosition(qq.jD()), gO.translate(lO);
+       var Eq = Math.max(qq.targetY, qq.wB.Ma.o3().U3[1]) + .5,
+         gq = qq.ZD();
```

#### 453. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4107` → after: `L4271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4271) · [Before (L4107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4107)

```diff
-       const kT = TT.gR(),
+       const Eq = qq.jD(),
```

#### 454. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4109-L4110` → after: `L4273-L4274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4273-L4274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4273-L4274) · [Before (L4109-L4110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4109-L4110)

```diff
-       QT().ek(kT, kT, cT, TT.cC.gv.hY().aY[1]), lK.setPosition(kT), lK.translate(KK);
-       var lT = Math.max(TT.targetX, TT.cC.gv.hY().aY[0]) + .5;
+       Hq().sq(Eq, Eq, gq, qq.wB.Ma.o3().U3[1]), gO.setPosition(Eq), gO.translate(lO);
+       var Yq = Math.max(qq.targetX, qq.wB.Ma.o3().U3[0]) + .5;
```

#### 455. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4116-L4117` → after: `L4280-L4281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4280-L4281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4280-L4281) · [Before (L4116-L4117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4116-L4117)

```diff
-       var kT = TT.cC.physics?.wasm;
-       return kT ? kT.HV(lK, OK, cK) : cK()
+       var Eq = qq.wB.physics?.wasm;
+       return Eq ? Eq.mw(gO, OO, EO) : EO()
```

#### 456. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4123` → after: `L4287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4287) · [Before (L4123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4123)

```diff
-     var lK, MK, KK = QT().ck(.2, .2, .2),
+     var gO, YO, lO = Hq().gq(.2, .2, .2),
```

#### 457. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4131` → after: `L4295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4295) · [Before (L4131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4131)

```diff
-         this.FY = TT, this.rY = 0, this.bY = 0, this.JY = 0, this.VY = 0, this.EY = performance.now(), this.ZY = performance.now(), this.RY = 0, this.pY = 0
+         this.X3 = qq, this.K3 = 0, this.I3 = 0, this.i6 = 0, this.Z6 = 0, this.f6 = performance.now(), this.M6 = performance.now(), this.T6 = 0, this.R6 = 0
```

#### 458. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4134-L4136` → after: `L4298-L4300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4298-L4300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4298-L4300) · [Before (L4134-L4136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4134-L4136)

```diff
-         const kT = this.bY - this.JY,
-           cT = this.FY.pitch + IK;
-         this.rY = Math.min(this.rY + TT, kT + cT), this.EY = performance.now()
+         const Eq = this.I3 - this.i6,
+           gq = this.X3.pitch + cO;
+         this.K3 = Math.min(this.K3 + qq, Eq + gq), this.f6 = performance.now()
```

#### 459. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4139` → after: `L4303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4303) · [Before (L4139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4139)

```diff
-         this.VY = TT
+         this.Z6 = qq
```

#### 460. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4142` → after: `L4306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4306) · [Before (L4142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4142)

```diff
-         this.rY = 0, this.bY = 0, this.JY = 0, this.RY = 0, this.pY = 0
+         this.K3 = 0, this.I3 = 0, this.i6 = 0, this.T6 = 0, this.R6 = 0
```

#### 461. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4145-L4149` → after: `L4309-L4313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4309-L4313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4309-L4313) · [Before (L4145-L4149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4145-L4149)

```diff
-         this.JY > 0 && (this.pY += this.JY), (this.rY > 0 || this.bY > 0) && TT > 0 && (this.RY += TT);
-         let kT = this.JY;
-         this.JY = 0;
-         if (kT < 0 && this.pY > 0 && this.RY > 0) {
-           kT *= 1 - Math.min(1, this.RY / this.pY)
+         this.i6 > 0 && (this.R6 += this.i6), (this.K3 > 0 || this.I3 > 0) && qq > 0 && (this.T6 += qq);
+         let Eq = this.i6;
+         this.i6 = 0;
+         if (Eq < 0 && this.R6 > 0 && this.T6 > 0) {
+           Eq *= 1 - Math.min(1, this.T6 / this.R6)
```

#### 462. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4155-L4159` → after: `L4319-L4323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4319-L4323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4319-L4323) · [Before (L4155-L4159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4155-L4159)

```diff
-           cT = Math.min(kT - this.EY, 75);
-         this.rY = Math.max(0, this.rY - this.VY * cT * TT);
-         const lT = Math.min(1, .009 * (kT - this.ZY)),
-           MT = (this.rY - this.bY) * lT;
-         Math.abs(MT) < 1e-6 ? this.bY = this.rY : (this.JY += MT, this.bY += MT), 0 === this.rY && Math.abs(this.bY) < 1e-6 && (this.RY = 0, this.pY = 0), this.ZY = kT
+           gq = Math.min(Eq - this.f6, 75);
+         this.K3 = Math.max(0, this.K3 - this.Z6 * gq * qq);
+         const Yq = Math.min(1, .009 * (Eq - this.M6)),
+           lq = (this.K3 - this.I3) * Yq;
+         Math.abs(lq) < 1e-6 ? this.I3 = this.K3 : (this.i6 += lq, this.I3 += lq), 0 === this.K3 && Math.abs(this.I3) < 1e-6 && (this.T6 = 0, this.R6 = 0), this.M6 = Eq
```

#### 463. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4162` → after: `L4326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4326) · [Before (L4162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4162)

```diff
-     var CK = cT(37429),
+     var BO = gq(37578),
```

#### 464. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4164` → after: `L4328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4328) · [Before (L4164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4164)

```diff
-         lB: ""
+         I6: ""
```

#### 465. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4168` → after: `L4332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4332) · [Before (L4168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4168)

```diff
-         kT = Object.assign({}, jK, kT), this.cC = TT, this.zB = kT.lB;
+         Eq = Object.assign({}, WO, Eq), this.wB = qq, this.E_ = Eq.I6;
```

#### 466. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4185` → after: `L4349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4349) · [Before (L4185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4185)

```diff
-         this.Wv = [0, 0, 0, 0, 0, 0], this.tV = 0;
+         this.Ga = [0, 0, 0, 0, 0, 0], this.Gs = 0;
```

#### 467. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4189-L4190` → after: `L4353-L4354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4353-L4354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4353-L4354) · [Before (L4189-L4190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4189-L4190)

```diff
-         this.sV = function(TT, kT) {
-           var cT = new NK(kT && kT.lj),
+         this.pw = function(qq, Eq) {
+           var gq = new dO(Eq && Eq.wW),
```

#### 468. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4193-L4194` → after: `L4357-L4358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4357-L4358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4357-L4358) · [Before (L4193-L4194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4193-L4194)

```diff
-           for (; TT > MT.length;) this.sV(MT.length, {});
-           this.tV++, MT[TT] = !!ST.solid, KT[TT] = !!ST.solid && (ST.kh ?? !0), OT[TT] = ST.kh ?? null, yT[TT] = !!ST.opaque, fT[TT] = !!ST.lj, xT[TT] = !!ST.cW, AT[TT] = ST.cW || null;
+           for (; qq > lq.length;) this.pw(lq.length, {});
+           this.Gs++, lq[qq] = !!oq.solid, Oq[qq] = !!oq.solid && (oq.pV ?? !0), mq[qq] = oq.pV ?? null, xq[qq] = !!oq.opaque, Aq[qq] = !!oq.wW, cq[qq] = !!oq.j_, Bq[qq] = oq.j_ || null;
```

#### 469. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4204-L4207` → after: `L4368-L4371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4368-L4371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4368-L4371) · [Before (L4204-L4207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4204-L4207)

```diff
-           for (var FT = 0; FT < 6; ++FT) this.Wv[6 * TT + FT] = tK(this, lT, DT[FT], !0);
-           IT[TT] = {}, fT[TT] && (IT[TT].hC = ST.hC, IT[TT].OW = ST.OW);
-           var PT = ST.onLoad || ST.fW || ST.jW || ST.vW || ST.DW;
-           CT[TT] = PT ? new hK(ST) : null, vT[TT] = ST.tv?.some((TT => TT >= 1)) ? ST.tv.map((TT => Math.max(TT, 0))) : null, tT[TT] = (ST.Mh ?? 0) >= 1 ? ST.Mh : null, yT[TT] ? hT[TT] = 15 : (ST.hv ?? 0) >= 1 ? hT[TT] = ST.hv : hT[TT] = fT[TT] ? 3 : 1, NT[TT] = ST.vJ | (yT[TT] ? … [truncated]
+           for (var yq = 0; yq < 6; ++yq) this.Ga[6 * qq + yq] = aO(this, Yq, Pq[yq], !0);
+           uq[qq] = {}, Aq[qq] && (uq[qq].cW = oq.cW, uq[qq].o_ = oq.o_);
+           var rq = oq.onLoad || oq.lT || oq.eT || oq.wT || oq.wZ;
+           Wq[qq] = rq ? new VO(oq) : null, aq[qq] = oq.ma?.some((qq => qq >= 1)) ? oq.ma.map((qq => Math.max(qq, 0))) : null, Vq[qq] = (oq.GV ?? 0) >= 1 ? oq.GV : null, xq[qq] ? dq[qq] = 15 : (oq.xa ?? 0) >= 1 ? dq[qq] = oq.xa : dq[qq] = Aq[qq] ? 3 : 1, jq[qq] = oq.iJ | (xq[qq] ? … [truncated]
```

#### 470. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4210` → after: `L4374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4374) · [Before (L4210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4210)

```diff
-         }, this.FW = function(TT, kT) {
+         }, this.P_ = function(qq, Eq) {
```

#### 471. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4215` → after: `L4379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4379) · [Before (L4215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4215)

```diff
-           var OT = (MT.uB ?? []).map((TT => this.zB + TT)),
+           var mq = (lq.m_ ?? []).map((qq => this.E_ + qq)),
```

#### 472. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4218` → after: `L4382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4382) · [Before (L4218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4218)

```diff
-           4 === fT.length && (yT = fT.pop()), !0 === MT.rW ? ST[KT] = fT : ST[KT] = null, DT[KT] = MT.YB, aT[KT] = {
+           4 === Aq.length && (xq = Aq.pop()), !0 === lq.Q_ ? oq[Oq] = Aq : oq[Oq] = null, Pq[Oq] = lq.A_, Qq[Oq] = {
```

#### 473. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4221-L4227` → after: `L4385-L4391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4385-L4391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4385-L4391) · [Before (L4221-L4227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4221-L4227)

```diff
-             uB: OT,
-             XB: !!MT.XB,
-             YB: MT.YB,
-             Mt: MT.zW,
-             Kh: MT.Kh,
-             nB: MT.nB,
-             qB: MT.qB ?? null
+             m_: mq,
+             x_: !!lq.x_,
+             A_: lq.A_,
+             Ca: lq.y_,
+             LV: lq.LV,
+             B_: lq.B_,
+             N_: lq.N_ ?? null
```

#### 474. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4229-L4231` → after: `L4393-L4395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4393-L4395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4393-L4395) · [Before (L4229-L4231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4229-L4231)

```diff
-           const xT = cT.oW(KT);
-           return MT.YB >= 0 && MT.XB && (0, CK.o)(cT, KT, cT.wv(xT)), KT
-         }, this.iZ = function(TT) {
+           const cq = gq.r_(Oq);
+           return lq.A_ >= 0 && lq.x_ && (0, BO.n)(gq, Oq, gq.da(cq)), Oq
+         }, this.uC = function(qq) {
```

#### 475. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4233` → after: `L4397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4397) · [Before (L4233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4233)

```diff
-         }, this.Tj = function(TT) {
+         }, this.sW = function(qq) {
```

#### 476. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4235` → after: `L4399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4399) · [Before (L4235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4235)

```diff
-         }, this.rV = function(TT) {
+         }, this.Xs = function(qq) {
```

#### 477. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4237` → after: `L4401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4401) · [Before (L4237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4237)

```diff
-         }, this.EW = function(TT) {
+         }, this.v_ = function(qq) {
```

#### 478. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4239` → after: `L4403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4403) · [Before (L4239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4239)

```diff
-         }, this.dW = function(TT) {
+         }, this.h_ = function(qq) {
```

#### 479. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4241` → after: `L4405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4405) · [Before (L4241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4241)

```diff
-         }, this.UW = function(TT) {
+         }, this.n_ = function(qq) {
```

#### 480. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4243` → after: `L4407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4407) · [Before (L4243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4243)

```diff
-         }, this.pW = function(TT) {
+         }, this.b_ = function(qq) {
```

#### 481. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4245-L4247` → after: `L4409-L4411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4409-L4411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4409-L4411) · [Before (L4245-L4247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4245-L4247)

```diff
-         }, this.iW = function(TT, kT) {
-           return this.Wv[6 * TT + kT]
-         }, this.lt = function(TT) {
+         }, this.i_ = function(qq, Eq) {
+           return this.Ga[6 * qq + Eq]
+         }, this.Ka = function(qq) {
```

#### 482. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4249` → after: `L4413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4413) · [Before (L4249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4249)

```diff
-         }, this.fn = function() {
+         }, this.f_ = function() {
```

#### 483. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4251-L4252` → after: `L4415-L4416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4415-L4416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4415-L4416) · [Before (L4251-L4252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4251-L4252)

```diff
-           return aT.some((kT => kT.uB.some((cT => cT === TT && kT.XB))))
-         }, this.Mj = MT, this.Bv = yT, this.kj = fT, this.VV = xT, this.kp = AT, this.XV = CT, this.GV = jT, this.pv = ST, this.nv = DT, this.sv = vT, this.Tt = tT, this.kt = hT, this.ov = NT, this.Qp = QT
+           return Qq.some((Eq => Eq.m_.some((gq => gq === qq && Eq.x_))))
+         }, this.KW = lq, this.Sa = xq, this.XW = Aq, this.pT = cq, this.M_ = Bq, this.XT = Wq, this.bS = Nq, this.Ja = oq, this.La = Pq, this.Ua = aq, this.Fa = Vq, this.sa = dq, this.Qa = jq, this.T_ = Hq
```

#### 484. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4259` → after: `L4423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4423) · [Before (L4259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4259)

```diff
-       return void 0 === MT && lT && (MT = TT.FW(cT, {})), MT
+       return void 0 === lq && Yq && (lq = qq.P_(gq, {})), lq
```

#### 485. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4263` → after: `L4427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4427) · [Before (L4263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4263)

```diff
-       this.onLoad = TT.onLoad || null, this.fW = TT.fW || null, this.jW = TT.jW || null, this.vW = TT.vW || null, this.DW = TT.DW || null
+       this.onLoad = qq.onLoad || null, this.lT = qq.lT || null, this.eT = qq.eT || null, this.wT = qq.wT || null, this.wZ = qq.wZ || null
```

#### 486. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4268` → after: `L4432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4432) · [Before (L4268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4268)

```diff
-       this.solid = !TT, this.kh = null, this.opaque = !TT, this.lj = !1, this.material = null, this.cW = null, this.hC = 1, this.OW = .5, this.onLoad = null, this.fW = null, this.jW = null, this.vW = null, this.DW = null, this.tv = null, this.Mh = null, this.hv = null, this.vJ =  … [truncated]
+       this.solid = !qq, this.pV = null, this.opaque = !qq, this.wW = !1, this.material = null, this.j_ = null, this.cW = 1, this.o_ = .5, this.onLoad = null, this.lT = null, this.eT = null, this.wT = null, this.wZ = null, this.ma = null, this.GV = null, this.xa = null, this.iJ =  … [truncated]
```

#### 487. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4272` → after: `L4436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4436) · [Before (L4272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4272)

```diff
-       this.color = null, this.rW = !0, this.uB = [], this.XB = !1, this.YB = -1, this.nB = null, this.qB = null, this.zW = null, this.Kh = null
+       this.color = null, this.Q_ = !0, this.m_ = [], this.x_ = !1, this.A_ = -1, this.B_ = null, this.N_ = null, this.y_ = null, this.LV = null
```

#### 488. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4274-L4277` → after: `L4438-L4441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4438-L4441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4438-L4441) · [Before (L4274-L4277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4274-L4277)

```diff
-     cT(37322);
-     var SK = cT(37242),
-       DK = cT(37695),
-       aK = cT(39349);
+     gq(2778);
+     var HO = gq(2790),
+       oO = gq(37821),
+       PO = gq(39494);
```

#### 489. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4280-L4282` → after: `L4444-L4446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4444-L4446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4444-L4446) · [Before (L4280-L4282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4280-L4282)

```diff
-       this.cC = TT, this.mesh = kT;
-       var cT = kT.Dv();
-       this.Xp = !0 === cT.lq && !!TT.Bj, this.Xp && (0, DK.l)(kT), this.Iq = cT.Aq?.(kT, this.Xp ? wK : PK) ?? null, this.buffer = null, this.hq = null, this.Qq = null, this.wq = TT.Ft.wq, this.Im = !1, this.mq = null, this.bq = null, this.zq = 0, this.qt = null, this.Jq = !1, th … [truncated]
+       this.wB = qq, this.mesh = Eq;
+       var gq = Eq.Ba();
+       this.L_ = !0 === gq.J_ && !!qq.pN, this.L_ && (0, oO.k)(Eq), this.R_ = gq.U_?.(Eq, this.L_ ? rO : tO) ?? null, this.buffer = null, this.F_ = null, this.e_ = null, this.Q8 = qq.BV.Q8, this.mJ = !1, this.Z8 = null, this.K8 = null, this.u9 = 0, this.zV = null, this.W9 = !1, th … [truncated]
```

#### 490. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4286-L4287` → after: `L4450-L4451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4450-L4451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4450-L4451) · [Before (L4286-L4287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4286-L4287)

```diff
-           if (cT.o4 && Array.isArray(cT.o4))
-             for (var MT = 0; MT < cT.o4.length; MT++) cT.o4[MT] && lT.push(cT.o4[MT]);
+           if (gq.Bqq && Array.isArray(gq.Bqq))
+             for (var lq = 0; lq < gq.Bqq.length; lq++) gq.Bqq[lq] && Yq.push(gq.Bqq[lq]);
```

#### 491. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4291` → after: `L4455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4455) · [Before (L4291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4291)

```diff
-             GK.has(KT) || ((0, DK.d)(KT, kT), GK.add(KT))
+             MO.has(Oq) || ((0, oO.b)(Oq, Eq), MO.add(Oq))
```

#### 492. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4293` → after: `L4457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4457) · [Before (L4293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4293)

```diff
-         }(this.mesh, TT.gv), this.cC.gv.GJ(this.mesh), this.cC.emit("addingTerrainMesh", this.mesh)
+         }(this.mesh, qq.Ma), this.wB.Ma.Vk(this.mesh), this.wB.emit("addingTerrainMesh", this.mesh)
```

#### 493. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4297-L4298` → after: `L4461-L4462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4461-L4462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4461-L4462) · [Before (L4297-L4298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4297-L4298)

```diff
-       return (null === kT || kT.data.length < 2 * TT.zq) && (kT = {
-         data: new Uint32Array(Math.max(16, 4 * TT.zq)),
+       return (null === Eq || Eq.data.length < 2 * qq.u9) && (Eq = {
+         data: new Uint32Array(Math.max(16, 4 * qq.u9)),
```

#### 494. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4300` → after: `L4464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4464) · [Before (L4300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4300)

```diff
-       }), kT.count = (0, aK.L)(TT.mq, TT.bq, TT.zq, cT, aK.e, kT.data), kT
+       }), Eq.count = (0, PO.F)(qq.Z8, qq.K8, qq.u9, gq, PO.g, Eq.data), Eq
```

#### 495. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4303-L4304` → after: `L4467-L4468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4467-L4468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4467-L4468) · [Before (L4303-L4304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4303-L4304)

```diff
-       this.yv || (this.wq.M6.delete(this), (0, aK.K)(this.mesh, null), this.Im && (0, aK.D)(this.mesh, void 0), this.Im = !1, this.mesh.w6 = 0, this.Z6(0), this.cC.emit("removingTerrainMesh", this.mesh), this.cC.gv.R6(this.mesh, !1), this.mesh = null, this.Hs = null, this.Gs = nu … [truncated]
-     }, FK.prototype.K3 = function(TT, kT, cT, lT, MT, KT, OT) {
+       this.eN || (this.Q8.K4.delete(this), (0, PO.D)(this.mesh, null), this.mJ && (0, PO.x)(this.mesh, void 0), this.mJ = !1, this.mesh.o5 = 0, this.y5(0), this.wB.emit("removingTerrainMesh", this.mesh), this.wB.Ma.t5(this.mesh, !1), this.mesh = null, this.Q0 = null, this.O4 = nu … [truncated]
+     }, QO.prototype.Z5 = function(qq, Eq, gq, Yq, lq, Oq, mq) {
```

#### 496. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4306-L4308` → after: `L4470-L4472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4470-L4472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4470-L4472) · [Before (L4306-L4308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4306-L4308)

```diff
-         if (TT.count < TT.DA) return;
-         var kT = Math.max(8, 2 * TT.DA);
-         TT.Z6(kT)
+         if (qq.count < qq.WB) return;
+         var Eq = Math.max(8, 2 * qq.WB);
+         qq.y5(Eq)
```

#### 497. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4311` → after: `L4475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4475) · [Before (L4311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4311)

```diff
-       this.Gs[this.count] = kT, this.Hs.set(kT, yT);
+       this.O4[this.count] = Eq, this.Q0.set(Eq, xq);
```

#### 498. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4314` → after: `L4478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4478) · [Before (L4314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4314)

```diff
-       if (fT.set(KT.matrix, yT), fT[yT + 12] = xT[0] + (TT.x - OT[0] + cT), fT[yT + 13] = xT[1] + (TT.y - OT[1] + lT), fT[yT + 14] = xT[2] + (TT.z - OT[2] + MT), this.Im) {
+       if (Aq.set(Oq.matrix, xq), Aq[xq + 12] = cq[0] + (qq.x - mq[0] + gq), Aq[xq + 13] = cq[1] + (qq.y - mq[1] + Yq), Aq[xq + 14] = cq[2] + (qq.z - mq[2] + lq), this.mJ) {
```

#### 499. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4316` → after: `L4480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4480) · [Before (L4316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4316)

```diff
-         this.Qq[this.count] = IT ? this.wq.bV(TT) : 0
+         this.e_[this.count] = uq ? this.Q8.ZZ(qq) : 0
```

#### 500. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4318-L4322` → after: `L4482-L4486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4482-L4486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4482-L4486) · [Before (L4318-L4322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4318-L4322)

```diff
-       this.count++, this.bv = !0
-     }, FK.prototype.zp = function(TT, kT) {
-       return this.Xp ? (kT | this.cC.sC.ov[TT] << 16) >>> 0 : kT
-     }, FK.prototype.o3 = function(TT, kT) {
-       var cT = this.Hs.get(kT);
+       this.count++, this.Ha = !0
+     }, QO.prototype.p_ = function(qq, Eq) {
+       return this.L_ ? (Eq | this.wB.FW.Qa[qq] << 16) >>> 0 : Eq
+     }, QO.prototype.qqq = function(qq, Eq) {
+       var gq = this.Q0.get(Eq);
```

#### 501. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4324` → after: `L4488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4488) · [Before (L4324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4324)

```diff
-       this.Hs.delete(kT);
+       this.Q0.delete(Eq);
```

#### 502. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4331-L4333` → after: `L4495-L4497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4495-L4497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4495-L4497) · [Before (L4331-L4333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4331-L4333)

```diff
-         }(this.buffer, KT, this.buffer, cT), this.hq[lT] = this.hq[MT], this.Im && (this.Qq[lT] = this.Qq[MT]);
-         var OT = this.Gs[MT];
-         this.Hs.set(OT, cT), this.Gs[lT] = OT
+         }(this.buffer, Oq, this.buffer, gq), this.F_[Yq] = this.F_[lq], this.mJ && (this.e_[Yq] = this.e_[lq]);
+         var mq = this.O4[lq];
+         this.Q0.set(mq, gq), this.O4[Yq] = mq
```

#### 503. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4335` → after: `L4499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4499) · [Before (L4335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4335)

```diff
-       this.count--, this.bv = !0,
+       this.count--, this.Ha = !0,
```

#### 504. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4337-L4339` → after: `L4501-L4503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4501-L4503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4501-L4503) · [Before (L4337-L4339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4337-L4339)

```diff
-           if (TT.count > .4 * TT.DA) return;
-           if (TT.DA < 100) return;
-           TT.Z6(Math.round(TT.DA / 2)), TT.Gs.length = Math.min(TT.Gs.length, TT.DA)
+           if (qq.count > .4 * qq.WB) return;
+           if (qq.WB < 100) return;
+           qq.y5(Math.round(qq.WB / 2)), qq.O4.length = Math.min(qq.O4.length, qq.WB)
```

#### 505. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4341` → after: `L4505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4505) · [Before (L4341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4341)

```diff
-     }, FK.prototype.X3 = function() {
+     }, QO.prototype.Eqq = function() {
```

#### 506. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4343-L4345` → after: `L4507-L4509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4507-L4509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4507-L4509) · [Before (L4343-L4345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4343-L4345)

```diff
-       this.bv ? (this.Im && (8 * eK(TT = this) > JK.length && (function(TT) {
-         for (var kT = TT.count, cT = TT.Qq, lT = 0; lT < kT; lT++) mK[cT[lT]]++;
-         oK = TT.wq.keys, JK.sort(HK), oK = null;
+       this.Ha ? (this.mJ && (8 * fO(qq = this) > bO.length && (function(qq) {
+         for (var Eq = qq.count, gq = qq.e_, Yq = 0; Yq < Eq; Yq++) vO[gq[Yq]]++;
+         iO = qq.Q8.keys, bO.sort(ZO), iO = null;
```

#### 507. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4350` → after: `L4514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4514) · [Before (L4350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4350)

```diff
-         for (var yT = TT.buffer.slice(0, kT << 4), fT = TT.hq.slice(0, kT), xT = cT.slice(0, kT), IT = TT.Gs.slice(0, kT), AT = 0; AT < kT; AT++) {
+         for (var xq = qq.buffer.slice(0, Eq << 4), Aq = qq.F_.slice(0, Eq), cq = gq.slice(0, Eq), uq = qq.O4.slice(0, Eq), Bq = 0; Bq < Eq; Bq++) {
```

#### 508. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4354` → after: `L4518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4518) · [Before (L4354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4354)

```diff
-             TT.hq[CT] = fT[AT], cT[CT] = xT[AT];
+             qq.F_[Wq] = Aq[Bq], gq[Wq] = cq[Bq];
```

#### 509. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4356` → after: `L4520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4520) · [Before (L4356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4356)

```diff
-             TT.Gs[CT] = hT, TT.Hs.set(hT, vT)
+             qq.O4[Wq] = dq, qq.Q0.set(dq, aq)
```

#### 510. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4360-L4366` → after: `L4524-L4530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4524-L4530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4524-L4530) · [Before (L4360-L4366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4360-L4366)

```diff
-       }(TT), eK(TT)), (0, aK.K)(this.mesh, null), this.Jq = !1, null !== this.oq && (this.uq = this.oq, this.oq = null, (0, aK.D)(this.mesh, null)), this.Yq = !0), this.mesh.w6 = this.count, this.Iq ? (this.Iq.U3(this.count), this.Iq.B3()) : (this.mesh.Q0("matrix"), this.mesh.Q0( … [truncated]
-     }, FK.prototype.N7 = function(TT, kT, cT) {
-       if (0 !== this.zq && ((0, aK.l)() ? (this.qt = rK(this, this.qt, TT), this.Jq = this.qt.count >= 0, (0, aK.K)(this.mesh, this.Jq ? this.qt : null)) : this.Jq && (this.Jq = !1, (0, aK.K)(this.mesh, null)), cT || this.Yq)) {
-         this.Yq = !1;
-         var lT = rK(this, this.uq, kT),
-           MT = this.oq;
-         lT.count < 0 ? (this.uq = lT, null !== MT && (this.oq = null, (0, aK.D)(this.mesh, null))) : null !== MT && function(TT, kT) {
+       }(qq), fO(qq)), (0, PO.D)(this.mesh, null), this.W9 = !1, null !== this.N9 && (this.o9 = this.N9, this.N9 = null, (0, PO.x)(this.mesh, null)), this.J9 = !0), this.mesh.o5 = this.count, this.R_ ? (this.R_.gqq(this.count), this.R_.Yqq()) : (this.mesh.lqq("matrix"), this.mesh. … [truncated]
+     }, QO.prototype.Oqq = function(qq, Eq, gq) {
+       if (0 !== this.u9 && ((0, PO.n)() ? (this.zV = yO(this, this.zV, qq), this.W9 = this.zV.count >= 0, (0, PO.D)(this.mesh, this.W9 ? this.zV : null)) : this.W9 && (this.W9 = !1, (0, PO.D)(this.mesh, null)), gq || this.J9)) {
+         this.J9 = !1;
+         var Yq = yO(this, this.o9, Eq),
+           lq = this.N9;
+         Yq.count < 0 ? (this.o9 = Yq, null !== lq && (this.N9 = null, (0, PO.x)(this.mesh, null))) : null !== lq && function(qq, Eq) {
```

#### 511. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4371` → after: `L4535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4535) · [Before (L4371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4371)

```diff
-         }(MT, lT) ? this.uq = lT : (this.uq = MT, this.oq = lT, (0, aK.D)(this.mesh, lT))
+         }(lq, Yq) ? this.o9 = Yq : (this.o9 = lq, this.N9 = Yq, (0, PO.x)(this.mesh, Yq))
```

#### 512. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4373` → after: `L4537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4537) · [Before (L4373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4373)

```diff
-     }, FK.prototype.Z6 = function() {
+     }, QO.prototype.y5 = function() {
```

#### 513. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4375` → after: `L4539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4539) · [Before (L4375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4375)

```diff
-       if (this.DA = TT, 0 === TT) this.buffer = null, this.hq = null, this.Qq = null;
+       if (this.WB = qq, 0 === qq) this.buffer = null, this.F_ = null, this.e_ = null;
```

#### 514. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4377` → after: `L4541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4541) · [Before (L4377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4377)

```diff
-         var kT = new Float32Array(16 * this.DA);
+         var Eq = new Float32Array(16 * this.WB);
```

#### 515. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4381-L4384` → after: `L4545-L4548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4545-L4548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4545-L4548) · [Before (L4381-L4384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4381-L4384)

```diff
-         var MT = this.Xp ? new Uint32Array(this.DA) : new Float32Array(this.DA);
-         if (this.hq) {
-           var KT = Math.min(this.hq.length, MT.length);
-           for (lT = 0; lT < KT; lT++) MT[lT] = this.hq[lT]
+         var lq = this.L_ ? new Uint32Array(this.WB) : new Float32Array(this.WB);
+         if (this.F_) {
+           var Oq = Math.min(this.F_.length, lq.length);
+           for (Yq = 0; Yq < Oq; Yq++) lq[Yq] = this.F_[Yq]
```

#### 516. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4386-L4388` → after: `L4550-L4552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4550-L4552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4550-L4552) · [Before (L4386-L4388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4386-L4388)

```diff
-         if (this.hq = MT, this.Im) {
-           var OT = new Uint16Array(this.DA);
-           this.Qq && OT.set(this.Qq.subarray(0, Math.min(this.Qq.length, OT.length))), this.Qq = OT
+         if (this.F_ = lq, this.mJ) {
+           var mq = new Uint16Array(this.WB);
+           this.e_ && mq.set(this.e_.subarray(0, Math.min(this.e_.length, mq.length))), this.e_ = mq
```

#### 517. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4392` → after: `L4556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4556) · [Before (L4392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4392)

```diff
-       this.Iq && 0 === TT ? this.Iq.release() : this.Iq ? this.Iq.attach(this.buffer, this.hq) : (this.mesh.O4("matrix", this.buffer, 16, yT), this.mesh.O4("aPackedLightLevels", this.hq, 1, yT)), this.X3()
+       this.R_ && 0 === qq ? this.R_.release() : this.R_ ? this.R_.attach(this.buffer, this.F_) : (this.mesh.cqq("matrix", this.buffer, 16, xq), this.mesh.cqq("aPackedLightLevels", this.F_, 1, xq)), this.Eqq()
```

#### 518. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4405-L4406` → after: `L4569-L4570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4569-L4570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4569-L4570) · [Before (L4405-L4406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4405-L4406)

```diff
-       mK = new Uint32Array(aK.b),
-       bK = new Uint32Array(aK.b),
+       vO = new Uint32Array(PO.c),
+       hO = new Uint32Array(PO.c),
```

#### 519. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4417-L4424` → after: `L4581-L4588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4581-L4588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4581-L4588) · [Before (L4417-L4424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4417-L4424)

```diff
-         cT = TT.Qq,
-         lT = TT.wq.keys;
-       if (null === TT.mq || TT.mq.length < kT) {
-         var MT = Math.max(8, TT.DA);
-         TT.mq = new Uint16Array(MT), TT.bq = new Uint32Array(MT)
-       }
-       var KT = TT.mq,
-         OT = TT.bq,
+         gq = qq.e_,
+         Yq = qq.Q8.keys;
+       if (null === qq.Z8 || qq.Z8.length < Eq) {
+         var lq = Math.max(8, qq.WB);
+         qq.Z8 = new Uint16Array(lq), qq.K8 = new Uint32Array(lq)
+       }
+       var Oq = qq.Z8,
+         mq = qq.K8,
```

#### 520. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4431` → after: `L4595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4595) · [Before (L4431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4431)

```diff
-       return TT.zq = fT, xT
+       return qq.u9 = Aq, cq
```

#### 521. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4434` → after: `L4598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4598) · [Before (L4434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4434)

```diff
-     var VK = cT(37449),
+     var TO = gq(37594),
```

#### 522. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4438` → after: `L4602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4602) · [Before (L4438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4438)

```diff
-         i6: null
+         i5: null
```

#### 523. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4442` → after: `L4606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4606) · [Before (L4442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4442)

```diff
-       this.mN = (0, ST.u)(TT.gv, "objectMeshRoot");
+       this.jy = (0, oq.o)(qq.Ma, "objectMeshRoot");
```

#### 524. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4446-L4448` → after: `L4610-L4612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4610-L4612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4610-L4612) · [Before (L4446-L4448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4446-L4448)

```diff
-           position: new nT.Fv,
-           rotation: new nT.Fv,
-           GA: new nT.Fv
+           position: new Kq.Na,
+           rotation: new Kq.Na,
+           rc: new Kq.Na
```

#### 525. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4451` → after: `L4615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4615) · [Before (L4451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4451)

```diff
-       this.o5 = [], this.wq = new aK.h;
+       this.jqq = [], this.Q8 = new PO.j;
```

#### 526. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4461` → after: `L4625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4625) · [Before (L4461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4461)

```diff
-         CT = TT => (0, zT.f)(TT) ? TT.parts.geometry : TT.geometry,
+         Wq = qq => (0, bq.c)(qq) ? qq.parts.geometry : qq.geometry,
```

#### 527. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4464` → after: `L4628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4628) · [Before (L4464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4464)

```diff
-           var cT = TT.sC.kp[kT];
+           var gq = qq.FW.M_[Eq];
```

#### 528. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4474` → after: `L4638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4638) · [Before (L4474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4474)

```diff
-             if (!(cT = OT.get(lT))) return fT.has(kT) || (fT.add(kT), TT.jt(`Building the model of block ${kT} failed`, yT.get(lT))), null
+             if (!(gq = mq.get(Yq))) return Aq.has(Eq) || (Aq.add(Eq), qq.YV(`Building the model of block ${Eq} failed`, xq.get(Yq))), null
```

#### 529. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4480` → after: `L4644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4644) · [Before (L4480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4480)

```diff
-           return this.o5.includes(cT) || this.o5.push(cT), cT.metadata || (cT.metadata = {}), cT.metadata[Pl.q] = !0, KT[kT] = new FK(TT, cT)
+           return this.jqq.includes(gq) || this.jqq.push(gq), gq.metadata || (gq.metadata = {}), gq.metadata[tY.q] = !0, Oq[Eq] = new QO(qq, gq)
```

#### 530. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4495-L4496` → after: `L4659-L4660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4659-L4660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4659-L4660) · [Before (L4495-L4496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4495-L4496)

```diff
-             if (fT.Y5 && fT.get(jT, vT, tT) === CT) try {
-               this.B5(fT, CT, jT, vT, tT)
+             if (Aq.oqq && Aq.get(Nq, aq, Vq) === Wq) try {
+               this.Yz(Aq, Wq, Nq, aq, Vq)
```

#### 531. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4500` → after: `L4664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4664) · [Before (L4500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4500)

```diff
-           yT && TT.jt("Placing the blocks of a built model failed", yT)
+           xq && qq.YV("Placing the blocks of a built model failed", xq)
```

#### 532. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4502-L4503` → after: `L4666-L4667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4666-L4667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4666-L4667) · [Before (L4502-L4503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4502-L4503)

```diff
-       this.Pt = function(TT) {
-         TT.Y5 = new Map;
+       this.NV = function(qq) {
+         qq.oqq = new Map;
```

#### 533. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4505-L4506` → after: `L4669-L4670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4669-L4670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4669-L4670) · [Before (L4505-L4506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4505-L4506)

```diff
-         TT.i5 = tT.length > 0 ? tT.pop() : kT * kT * kT * hT++
-       }, this.B5 = function(cT, KT, OT, yT, fT) {
+         qq.Pqq = Vq.length > 0 ? Vq.pop() : Eq * Eq * Eq * dq++
+       }, this.Yz = function(gq, Oq, mq, xq, Aq) {
```

#### 534. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4509-L4510` → after: `L4673-L4674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4673-L4674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4673-L4674) · [Before (L4509-L4510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4509-L4510)

```diff
-           CT = cT.i5 + AT,
-           vT = cT.Y5.get(AT) || 0;
+           Wq = gq.Pqq + Bq,
+           aq = gq.oqq.get(Bq) || 0;
```

#### 535. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4512` → after: `L4676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4676) · [Before (L4512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4512)

```diff
-           if (vT > 0) jT(vT).o3(cT, CT);
+           if (aq > 0) Nq(aq).qqq(gq, Wq);
```

#### 536. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4515-L4518` → after: `L4679-L4682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4679-L4682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4679-L4682) · [Before (L4515-L4518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4515-L4518)

```diff
-             if (!tT) return xT.get(TT.sC.kp[KT])?.push([cT, KT, OT, yT, fT]), void cT.Y5.delete(AT);
-             tT.K3(cT, CT, OT, yT, fT, (kT => {
-               var cT = TT.sC.XV[kT],
-                 KT = cT && cT.DW || null,
+             if (!Vq) return cq.get(qq.FW.M_[Oq])?.push([gq, Oq, mq, xq, Aq]), void gq.oqq.delete(Bq);
+             Vq.Z5(gq, Wq, mq, xq, Aq, (Eq => {
+               var gq = qq.FW.XT[Eq],
+                 Oq = gq && gq.wZ || null,
```

#### 537. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4520-L4521` → after: `L4684-L4685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4684-L4685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4684-L4685) · [Before (L4520-L4521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4520-L4521)

```diff
-               if (OT && OT.i6 === KT) return OT;
-               for (var yT = TT.sC.XV.length; MT.length < yT;) MT.push(null);
+               if (mq && mq.i5 === Oq) return mq;
+               for (var xq = qq.FW.XT.length; lq.length < xq;) lq.push(null);
```

#### 538. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4523` → after: `L4687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4687) · [Before (L4523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4523)

```diff
-               lT.position.I5(.5, .5, .5), lT.GA.Xs(1), lT.rotation.Xs(0), KT(lT, kT);
+               Yq.position.Vqq(.5, .5, .5), Yq.rc.A4(1), Yq.rotation.A4(0), Oq(Yq, Eq);
```

#### 539. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4526` → after: `L4690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4690) · [Before (L4526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4526)

```diff
-                 matrix: Float32Array.from((0, VK.d)(lT)),
+                 matrix: Float32Array.from((0, TO.f)(Yq)),
```

#### 540. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4528` → after: `L4692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4692) · [Before (L4528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4528)

```diff
-                 i6: KT
+                 i5: Oq
```

#### 541. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4531-L4532` → after: `L4695-L4696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4695-L4696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4695-L4696) · [Before (L4531-L4532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4531-L4532)

```diff
-             var hT = tT.Hs.get(CT);
-             cT.kv ? tT.hq[hT >> 4] = tT.zp(KT, (0, SK.z)(cT.kv, cT.Mv, AT)) : tT.hq[hT >> 4] = tT.zp(KT, SK.l)
+             var dq = Vq.Q0.get(Wq);
+             gq.sN ? Vq.F_[dq >> 4] = Vq.p_(Oq, (0, HO.x)(gq.sN, gq.KN, Bq)) : Vq.F_[dq >> 4] = Vq.p_(Oq, HO.h)
```

#### 542. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4534` → after: `L4698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4698) · [Before (L4534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4534)

```diff
-           vT > 0 && !KT && cT.Y5.delete(AT), KT > 0 && cT.Y5.set(AT, KT)
+           aq > 0 && !Oq && gq.oqq.delete(Bq), Oq > 0 && gq.oqq.set(Bq, Oq)
```

#### 543. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4536` → after: `L4700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4700) · [Before (L4536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4536)

```diff
-       }, this.E1 = function() {
+       }, this.nS = function() {
```

#### 544. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4539-L4549` → after: `L4703-L4713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4703-L4713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4703-L4713) · [Before (L4539-L4549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4539-L4549)

```diff
-           kT.X3(), 0 === kT.count && kT.dispose(), kT.yv && delete KT[TT]
-         }
-         this.wq.uploaded(), uK("rebuilt"), uK("end")
-       }, this.Vv = function(TT) {
-         var kT = TT.i5;
-         for (var [lT, MT] of TT.Y5) jT(MT).o3(TT, kT + lT);
-         tT.push(kT), TT.Y5 = null, this.wq.release(TT), cT = !0
-       }, this.UA = function() {
-         cT && (this.E1(), cT = !1)
-       }, this.U1 = function(TT) {
-         for (var lT in kT[0] += TT[0], kT[1] += TT[1], kT[2] += TT[2], KT) KT[lT].Fs = !1;
+           Eq.Eqq(), 0 === Eq.count && Eq.dispose(), Eq.eN && delete Oq[qq]
+         }
+         this.Q8.uploaded(), pO("rebuilt"), pO("end")
+       }, this.ha = function(qq) {
+         var Eq = qq.Pqq;
+         for (var [Yq, lq] of qq.oqq) Nq(lq).qqq(qq, Eq + Yq);
+         Vq.push(Eq), qq.oqq = null, this.Q8.release(qq), gq = !0
+       }, this.SB = function() {
+         gq && (this.nS(), gq = !1)
+       }, this.Qqq = function(qq) {
+         for (var Yq in Eq[0] += qq[0], Eq[1] += qq[1], Eq[2] += qq[2], Oq) Oq[Yq].I9 = !1;
```

#### 545. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4552` → after: `L4716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4716) · [Before (L4552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4552)

```diff
-           if (!OT.Fs) {
+           if (!mq.I9) {
```

#### 546. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4557` → after: `L4721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4721) · [Before (L4557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4557)

```diff
-             OT.Fs = !0, OT.bv = !0
+             mq.I9 = !0, mq.Ha = !0
```

#### 547. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4561-L4566` → after: `L4725-L4730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4725-L4730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4725-L4730) · [Before (L4561-L4566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4561-L4566)

```diff
-       }, this.rt = function(TT) {
-         if (TT.Y5) {
-           var kT = TT.kv,
-             lT = TT.Mv,
-             MT = TT.i5;
-           for (var [OT, yT] of TT.Y5) {
+       }, this.WV = function(qq) {
+         if (qq.oqq) {
+           var Eq = qq.sN,
+             Yq = qq.KN,
+             lq = qq.Pqq;
+           for (var [mq, xq] of qq.oqq) {
```

#### 548. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4568-L4570` → after: `L4732-L4734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4732-L4734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4732-L4734) · [Before (L4568-L4570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4568-L4570)

```diff
-               xT = fT.Hs.get(MT + OT) >> 4,
-               IT = fT.zp(yT, kT ? (0, SK.z)(kT, lT, OT) : SK.l);
-             fT.hq[xT] !== IT && (fT.hq[xT] = IT, fT.Qs = !0, cT = !0)
+               cq = Aq.Q0.get(lq + mq) >> 4,
+               uq = Aq.p_(xq, Eq ? (0, HO.x)(Eq, Yq, mq) : HO.h);
+             Aq.F_[cq] !== uq && (Aq.F_[cq] = uq, Aq.K9 = !0, gq = !0)
```

#### 549. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4576-L4582` → after: `L4740-L4746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4740-L4746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4740-L4746) · [Before (L4576-L4582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4576-L4582)

```diff
-       XK = cT(37340),
-       dK = cT(37260),
-       LK = cT(37442);
-     var RK = cT(37676),
-       gK = cT(6633),
-       UK = cT(38583),
-       YK = cT(38589);
+       GO = gq(37499),
+       LO = gq(37431),
+       JO = gq(37586);
+     var kO = gq(37801),
+       RO = gq(6521),
+       UO = gq(38714),
+       FO = gq(38718);
```

#### 550. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4589` → after: `L4753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4753) · [Before (L4589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4589)

```diff
-         this.cC = TT, this.options = kT, this.mode = "off", this.defines = new Map(gK.e.map((TT => [TT, 0])))
+         this.wB = qq, this.options = Eq, this.mode = "off", this.defines = new Map(RO.b.map((qq => [qq, 0])))
```

#### 551. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4598` → after: `L4762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4762) · [Before (L4598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4598)

```diff
-         return gK.e.some((TT => 0 !== this.defineFor(TT)))
+         return RO.b.some((qq => 0 !== this.defineFor(qq)))
```

#### 552. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4601` → after: `L4765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4765) · [Before (L4601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4601)

```diff
-         return gK.e.some((TT => {
+         return RO.b.some((qq => {
```

#### 553. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4603` → after: `L4767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4767) · [Before (L4603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4603)

```diff
-           return !0 === (null === (kT = (0, UK.d)(this.defineFor(TT))) || void 0 === kT ? void 0 : kT.sceneDepth)
+           return !0 === (null === (Eq = (0, UO.i)(this.defineFor(qq))) || void 0 === Eq ? void 0 : Eq.sceneDepth)
```

#### 554. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4609-L4610` → after: `L4773-L4774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4773-L4774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4773-L4774) · [Before (L4609-L4610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4609-L4610)

```diff
-         for (const cT of gK.e) {
-           const lT = (0, UK.d)(this.defineFor(cT));
+         for (const gq of RO.b) {
+           const Yq = (0, UO.i)(this.defineFor(gq));
```

#### 555. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4620` → after: `L4784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4784) · [Before (L4620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4620)

```diff
-         return !(!this.options.keepCircleShadows && null !== (TT = this.cC.gv.Uv) && void 0 !== TT && TT.castsEntitySunShadows) || !this.sunShadowReach().sunShadow
+         return !(!this.options.keepCircleShadows && null !== (qq = this.wB.Ma.Ta) && void 0 !== qq && qq.castsEntitySunShadows) || !this.sunShadowReach().sunShadow
```

#### 556. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4623` → after: `L4787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4787) · [Before (L4623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4623)

```diff
-         return this.cC.gv.bt
+         return this.wB.Ma.VV
```

#### 557. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4628-L4630` → after: `L4792-L4794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4792-L4794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4792-L4794) · [Before (L4628-L4630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4628-L4630)

```diff
-         for (const cT of gK.e) {
-           const lT = (0, UK.h)(this.options.variants, TT, cT),
-             MT = lT ? (0, UK.i)(lT) : 0;
+         for (const gq of RO.b) {
+           const Yq = (0, UO.l)(this.options.variants, qq, gq),
+             lq = Yq ? (0, UO.n)(Yq) : 0;
```

#### 558. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4637` → after: `L4801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4801) · [Before (L4637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4637)

```diff
-         return null !== (kT = this.defines.get(TT)) && void 0 !== kT ? kT : 0
+         return null !== (Eq = this.defines.get(qq)) && void 0 !== Eq ? Eq : 0
```

#### 559. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4643` → after: `L4807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4807) · [Before (L4643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4643)

```diff
-         return this.cC.QC
+         return this.wB.BW
```

#### 560. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4645` → after: `L4809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4809) · [Before (L4645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4645)

```diff
-       M_() {
+       vqq() {
```

#### 561. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4647` → after: `L4811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4811) · [Before (L4647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4647)

```diff
-         return null !== (TT = this.cC.gv.M_) && void 0 !== TT ? TT : pK
+         return null !== (qq = this.wB.Ma.vqq) && void 0 !== qq ? qq : KO
```

#### 562. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4650` → after: `L4814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4814) · [Before (L4650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4650)

```diff
-         const TT = (0, YK.k)(this.M_());
+         const qq = (0, FO.u)(this.vqq());
```

#### 563. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4657` → after: `L4821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4821) · [Before (L4657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4657)

```diff
-           status: "KT"
+           status: "lE"
```

#### 564. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4660-L4661` → after: `L4824-L4825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4824-L4825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4824-L4825) · [Before (L4660-L4661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4660-L4661)

```diff
-           gv: cT
-         } = this.cC, lT = null === (TT = cT.Uv) || void 0 === TT ? void 0 : TT.terrain;
+           Ma: gq
+         } = this.wB, Yq = null === (qq = gq.Ta) || void 0 === qq ? void 0 : qq.terrain;
```

#### 565. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4663` → after: `L4827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4827) · [Before (L4663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4663)

```diff
-           materials: this.cC.y_.allMaterials.filter((TT => !(0, RK.h)(TT))),
+           materials: this.wB.hqq.allMaterials.filter((qq => !(0, kO.m)(qq))),
```

#### 566. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4665-L4666` → after: `L4829-L4830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4829-L4830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4829-L4830) · [Before (L4665-L4666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4665-L4666)

```diff
-           lighting: cT.bt,
-           dirLightCount: (0, dK.r)(cT.model.view),
+           lighting: gq.VV,
+           dirLightCount: (0, LO.w)(gq.model.view),
```

#### 567. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4680-L4693` → after: `L4844-L4857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4844-L4857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4844-L4857) · [Before (L4680-L4693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4680-L4693)

```diff
-       f_: !1,
-       Iw: 1.8,
-       Ow: .6,
-       x_: [0, 10, 0],
-       Cw: !1,
-       A_: !0,
-       xJ: 30,
-       nH: 0,
-       mw: 10,
-       yG: !0,
-       j_: !0,
-       xG: !1,
-       v_: !1,
-       h_: 25
+       nqq: !1,
+       UH: 1.8,
+       ZH: .6,
+       bqq: [0, 10, 0],
+       sH: !1,
+       iqq: !0,
+       bJ: 30,
+       aU: 0,
+       IH: 10,
+       vU: !0,
+       fqq: !0,
+       hU: !1,
+       Mqq: !1,
+       Tqq: 25
```

#### 568. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4700` → after: `L4864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4864) · [Before (L4700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4700)

```diff
-           console.log(`noa-engine v${this.version}${kT}`)
+           console.log(`noa-engine v${this.version}${Eq}`)
```

#### 569. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4702` → after: `L4866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4866) · [Before (L4702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4702)

```diff
-         this.FQ = !1, this.Q_ = TT.h_, this.QC = [0, 0, 0], this.S_ = 0, this.F_ = 0, this.r_ = "default", this.P_ = 1, this.container = new mk(this, TT), this.pA = new wl.d(this, TT);
+         this.Av = !1, this.Sqq = qq.Tqq, this.BW = [0, 0, 0], this.pqq = 0, this.Gqq = 0, this.Lqq = "default", this.Jqq = 1, this.container = new hE(this, qq), this.kB = new rY.b(this, qq);
```

#### 570. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4704` → after: `L4868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4868) · [Before (L4704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4704)

```diff
-           this.gv = new Pl.e(this, TT, this.container.canvas)
+           this.Ma = new tY.b(this, qq, this.container.canvas)
```

#### 571. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4706-L4713` → after: `L4870-L4877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4870-L4877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4870-L4877) · [Before (L4706-L4713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4706-L4713)

```diff
-           throw this.ZD(!0), this.container.EQ.rG = () => {}, OT
-         }
-         this.xJ = this.container.EQ.xJ, this.nH = this.container.EQ.nH, this.Bj = TT.Bj ? new iK(this, TT.Bj) : null, this.y_ = new RK.b(this), this.inputs = new dl(this, TT, this.container.element), this.sC = new vK(this, TT, this.y_), this.pA.b_ = TT.m_ ? hl.create(TT.m_.wasm,  … [truncated]
-           this.jt(TT.message, TT)
-         })) : null, TT.m_ && (this.pA.Rv = Cl.b.wasm(this.pA.o_, TT.m_.wasm, (TT => {
-           this.jt(TT.message, TT)
-         })), this.pA.e_ = rl.create(TT.m_.wasm, this.sC, (TT => {
-           this.jt(TT.message, TT)
+           throw this.uL(!0), this.container.Tv.YF = () => {}, mq
+         }
+         this.bJ = this.container.Tv.bJ, this.aU = this.container.Tv.aU, this.pN = qq.pN ? new CO(this, qq.pN) : null, this.hqq = new kO.e(this), this.inputs = new LY(this, qq, this.container.element), this.FW = new NO(this, qq, this.hqq), this.kB.RZ = qq.kqq ? VY.create(qq.kqq.wa … [truncated]
+           this.YV(qq.message, qq)
+         })) : null, qq.kqq && (this.kB.fa = BY.d.wasm(this.kB.Uqq, qq.kqq.wasm, (qq => {
+           this.YV(qq.message, qq)
+         })), this.kB.Fqq = yY.create(qq.kqq.wasm, this.FW, (qq => {
+           this.YV(qq.message, qq)
```

#### 572. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4716` → after: `L4880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4880) · [Before (L4716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4716)

```diff
-         TT.f_ && (console.log = () => {}), TT.f_ && (console.log = cT), this.physics = new EM(this, TT), this.physics.wasm = TT.Cv ? new Al(this, this.physics, TT.Cv) : null, this.entities = new rk.c(this, TT), this.oN = this.entities;
+         qq.nqq && (console.log = () => {}), qq.nqq && (console.log = gq), this.physics = new zl(this, qq), this.physics.wasm = qq.Ya ? new uY(this, this.physics, qq.Ya) : null, this.entities = new tE.c(this, qq), this.Iy = this.entities;
```

#### 573. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4718-L4723` → after: `L4882-L4887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4882-L4887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4882-L4887) · [Before (L4718-L4723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4718-L4723)

```diff
-         this.jH = lT.add(TT.x_, TT.Ow, TT.Iw, null, null, !0, TT.A_), lT.dJ(this.jH, lT.names.collideTerrain), lT.dJ(this.jH, lT.names.collideEntities);
-         var MT = lT.E_(this.jH).body;
-         if (MT.gravityMultiplier = 2, MT.iG = TT.Cw, this.camera = new YM(this, TT), this.mw = TT.mw, this.R_ = this.sC.iZ, this.U_ = null, this.Y_ = !1, this.p_ = null, this.i_ = null, this.K9 = null, TT.v_ || (this.I9 = TT => {
-             const kT = this.K9;
-             kT ? this.gv.N9(!0, kT.position, kT.normal) : !TT || !this.lD.canChange && !this.pA.J9(TT.position[0], TT.position[1], TT.position[2]) && !this.pA.J9(TT.Wt[0], TT.Wt[1], TT.Wt[2]) || this.entities.o9(this.jH, "Gw") && !1 === this.entities.getState(this.jH, "Gw").Gw.u9 … [truncated]
-           }, this.on("miningTargetBlockChanged", this.I9)), this.bloxd = void 0, this.jt = (TT, kT) => {
+         this.oR = Yq.add(qq.bqq, qq.ZH, qq.UH, null, null, !0, qq.iqq), Yq.zk(this.oR, Yq.names.collideTerrain), Yq.zk(this.oR, Yq.names.collideEntities);
+         var lq = Yq.sqq(this.oR).body;
+         if (lq.gravityMultiplier = 2, lq.SF = qq.sH, this.camera = new Fl(this, qq), this.IH = qq.IH, this.wqq = this.FW.uC, this.Kqq = null, this.Cqq = !1, this.Dqq = null, this.qEq = null, this.gEq = null, qq.Mqq || (this.YEq = qq => {
+             const Eq = this.gEq;
+             Eq ? this.Ma.lEq(!0, Eq.position, Eq.normal) : !qq || !this.Uy.canChange && !this.kB.OEq(qq.position[0], qq.position[1], qq.position[2]) && !this.kB.OEq(qq.MV[0], qq.MV[1], qq.MV[2]) || this.entities.mEq(this.oR, "aZ") && !1 === this.entities.getState(this.oR, "aZ").a … [truncated]
+           }, this.on("miningTargetBlockChanged", this.YEq)), this.bloxd = void 0, this.YV = (qq, Eq) => {
```

#### 574. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4725-L4731` → after: `L4889-L4895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4889-L4895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4889-L4895) · [Before (L4725-L4731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4725-L4731)

```diff
-           }, this.vt = () => {}, this.lD = {}, this.IH = {
-             [this.jH]: {}
-           }, this.W9 = void 0, this.K8 = null, this.Q8 = null, this.sounds = {
-             Z8: null,
-             W8: null
-           }, this.room = null, this.Km = null, this.TTT = null, this.IC = TT.IC, this.bS = new XK.d(this, this.y_, this.gv.Uv?.terrain ? null : (0, LK.e)(), TT), this.Ft = new ZK(this), this.kTT = {
-             JB: 0,
+           }, this.lV = () => {}, this.Uy = {}, this.jR = {
+             [this.oR]: {}
+           }, this.AEq = void 0, this.cEq = null, this.uEq = null, this.sounds = {
+             BEq: null,
+             WEq: null
+           }, this.room = null, this.gJ = null, this.NEq = null, this.YW = qq.YW, this.Qv = new GO.d(this, this.hqq, this.Ma.Ta?.terrain ? null : (0, JO.b)(), qq), this.BV = new SO(this), this.aEq = {
+             Y_: 0,
```

#### 575. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4734-L4737` → after: `L4898-L4901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4898-L4901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4898-L4901) · [Before (L4734-L4737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4734-L4737)

```diff
-             Wt: QT().create(),
-             WG: QT().create()
-           }, this.cTT = "", this.lTT = {
-             JB: 0,
+             MV: Hq().create(),
+             jF: Hq().create()
+           }, this.VEq = "", this.dEq = {
+             Y_: 0,
```

#### 576. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4740-L4743` → after: `L4904-L4907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4904-L4907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4904-L4907) · [Before (L4740-L4743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4740-L4743)

```diff
-             Wt: QT().create(),
-             WG: QT().create()
-           }, this.MTT = "", this.KTT = QT().create(), this.yTT = {
-             fTT: QT().create(),
+             MV: Hq().create(),
+             jF: Hq().create()
+           }, this.jEq = "", this.HEq = Hq().create(), this.oEq = {
+             PEq: Hq().create(),
```

#### 577. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4746` → after: `L4910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4910) · [Before (L4746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4746)

```diff
-             xTT: [0, 0, 0]
+             QEq: [0, 0, 0]
```

#### 578. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4748` → after: `L4912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4912) · [Before (L4748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4748)

```diff
-           this.vec3 = QT(), this.Ut = Hk(), lT.ITT(1).ATT = 999;
+           this.vec3 = Hq(), this.pa = ZE(), Yq.yEq(1).tEq = 999;
```

#### 579. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4750` → after: `L4914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4914) · [Before (L4750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4750)

```diff
-           KT.cC = this, KT.vec3 = QT(), KT.Ut = Hk(), KT.et = this.gv.et
+           Oq.wB = this, Oq.vec3 = Hq(), Oq.pa = ZE(), Oq.PV = this.Ma.PV
```

#### 580. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4755` → after: `L4919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4919) · [Before (L4755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4755)

```diff
-           if (TT *= this.P_ || 1, this.FQ) return void(this.pA.CTT && this.pA.UA());
+           if (qq *= this.Jqq || 1, this.Av) return void(this.kB.rEq && this.kB.SB());
```

#### 581. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4757-L4765` → after: `L4921-L4929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4921-L4929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4921-L4929) · [Before (L4757-L4765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4757-L4765)

```diff
-               var kT = TT.oN.wL(TT.jH).fTT,
-                 cT = TT.Q_;
-               if (QT().pk(kT) < cT * cT) return;
-               for (var lT = [], MT = 0; MT < 3; MT++) lT[MT] = Math.floor(kT[MT]), TT.QC[MT] += lT[MT];
-               TT.gv.U1(lT), TT.entities.U1(lT), TT.Ft.U1(lT)
-             }(this), this.pA.UA(), cO("world"), this.IC && this.IC(this.oN.JV(this.jH)) || !this.pA.jTT) return void this.gv.UA(TT);
-           this.emit("beforePhysicsTick", TT), this.physics.UA(TT), cO("physics"), this.Ft.UA(), this.gv.UA(TT), cO("gv"), this.n_(), cO("targets"), this.entities.UA(TT), cO("entities"), this.emit("UA", TT), cO("tick event"), cO("end");
-           var kT = this.inputs.uZ;
-           kT.vTT = kT.tTT = kT.hTT = 0
+               var Eq = qq.Iy.qI(qq.oR).PEq,
+                 gq = qq.Sqq;
+               if (Hq().pg(Eq) < gq * gq) return;
+               for (var Yq = [], lq = 0; lq < 3; lq++) Yq[lq] = Math.floor(Eq[lq]), qq.BW[lq] += Yq[lq];
+               qq.Ma.Qqq(Yq), qq.entities.Qqq(Yq), qq.BV.Qqq(Yq)
+             }(this), this.kB.SB(), Em("world"), this.YW && this.YW(this.Iy.FX(this.oR)) || !this.kB.vEq) return void this.Ma.SB(qq);
+           this.emit("beforePhysicsTick", qq), this.physics.SB(qq), Em("physics"), this.BV.SB(), this.Ma.SB(qq), Em("Ma"), this.eqq(), Em("targets"), this.entities.SB(qq), Em("entities"), this.emit("SB", qq), Em("tick event"), Em("end");
+           var Eq = this.inputs.lC;
+           Eq.hEq = Eq.nEq = Eq.bEq = 0
```

#### 582. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4768` → after: `L4932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4932) · [Before (L4768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4768)

```diff
-             this.jt("Error in noa tickloop", cT)
+             this.YV("Error in noa tickloop", gq)
```

#### 583. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4776-L4777` → after: `L4940-L4941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4940-L4941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4940-L4941) · [Before (L4776-L4777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4776-L4777)

```diff
-           if ((0, dK.h)(), this.F_ = performance.now(), this.emit("renderTickBegin", TT), TT *= this.P_ || 1, this.S_ = kT, this.FQ) return void(this.pA.CTT && this.pA.render());
-           lO("start"), this.emit("beforeInputs", TT), this.camera.bR(), this.emit("afterInputs", TT), lO("init"), this.pA.render(), lO("meshing"), this.camera.fY(TT), this.entities.render(TT), this.camera.AY(), cO("entities"), this.emit("beforeRender", TT), lO("before render"), t … [truncated]
+           if ((0, LO.m)(), this.Gqq = performance.now(), this.emit("renderTickBegin", qq), qq *= this.Jqq || 1, this.pqq = Eq, this.Av) return void(this.kB.rEq && this.kB.render());
+           gm("start"), this.emit("beforeInputs", qq), this.camera.mD(), this.emit("afterInputs", qq), gm("init"), this.kB.render(), gm("meshing"), this.camera.U1(qq), this.entities.render(qq), this.camera.B3(), Em("entities"), this.emit("beforeRender", qq), gm("before render"), t … [truncated]
```

#### 584. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4779` → after: `L4943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4943) · [Before (L4779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4779)

```diff
-           this.jt("Error in noa renderloop", cT)
+           this.YV("Error in noa renderloop", gq)
```

#### 585. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4784` → after: `L4948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4948) · [Before (L4784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4784)

```diff
-         this.FQ = !!TT, TT || (this.camera.uZ.dx = this.camera.uZ.dy = 0)
+         this.Av = !!qq, qq || (this.camera.lC.dx = this.camera.lC.dy = 0)
```

#### 586. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4789` → after: `L4953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4953) · [Before (L4789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4789)

```diff
-         return TT.length ? this.pA.RZ(TT[0], TT[1], TT[2]) : this.pA.RZ(TT, kT, cT)
+         return qq.length ? this.kB.mC(qq[0], qq[1], qq[2]) : this.kB.mC(qq, Eq, gq)
```

#### 587. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4794` → after: `L4958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4958) · [Before (L4794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4794)

```diff
-         return cT = kT.length ? this.pA.lE(TT, kT[0], kT[1], kT[2]) : this.pA.lE(TT, kT, lT, MT), this.B_(), cT
+         return gq = Eq.length ? this.kB.Jw(qq, Eq[0], Eq[1], Eq[2]) : this.kB.Jw(qq, Eq, Yq, lq), this.Iqq(), gq
```

#### 588. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4796` → after: `L4960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4960) · [Before (L4796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4796)

```diff
-       STT(TT, kT) {
+       fEq(qq, Eq) {
```

#### 589. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4800-L4801` → after: `L4964-L4965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4964-L4965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4964-L4965) · [Before (L4800-L4801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4800-L4801)

```diff
-           if (this.entities.aTT(kT[0], kT[1], kT[2])) return;
-           return this.pA.lE(TT, kT[0], kT[1], kT[2]), TT
+           if (this.entities.MEq(Eq[0], Eq[1], Eq[2])) return;
+           return this.kB.Jw(qq, Eq[0], Eq[1], Eq[2]), qq
```

#### 590. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4803` → after: `L4967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4967) · [Before (L4803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4803)

```diff
-         if (!this.entities.aTT(kT, cT, lT)) return this.pA.lE(TT, kT, cT, lT), TT
+         if (!this.entities.MEq(Eq, gq, Yq)) return this.kB.Jw(qq, Eq, gq, Yq), qq
```

#### 591. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4805-L4806` → after: `L4969-L4970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4969-L4970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4969-L4970) · [Before (L4805-L4806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4805-L4806)

```diff
-       FTT(TT, kT, cT) {
-         var lT = this.QC;
+       TEq(qq, Eq, gq) {
+         var Yq = this.BW;
```

#### 592. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4818` → after: `L4982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4982) · [Before (L4818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4818)

```diff
-         var lT = this.QC;
+         var Yq = this.BW;
```

#### 593. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4834-L4835` → after: `L4998-L4999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4998-L4999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L4998-L4999) · [Before (L4834-L4835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4834-L4835)

```diff
-         var MT = this.KTT;
-         return TT && (this.FTT(TT, null, MT), TT = MT), this.zV(TT, kT, cT, lT)
+         var lq = this.HEq;
+         return qq && (this.TEq(qq, null, lq), qq = lq), this.yX(qq, Eq, gq, Yq)
```

#### 594. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4842` → after: `L5006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L5006) · [Before (L4842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4842)

```diff
-           MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.yTT;
+           lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.oEq;
```

#### 595. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4844-L4845` → after: `L5008-L5009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5008-L5009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L5008-L5009) · [Before (L4844-L4845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4844-L4845)

```diff
-         var KT = this.pA,
-           OT = this.QC,
+         var Oq = this.kB,
+           mq = this.BW,
```

#### 596. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4847-L4848` → after: `L5011-L5012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5011-L5012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L5011-L5012) · [Before (L4847-L4848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4847-L4848)

```diff
-             var MT = KT.RZ(TT + OT[0], kT + OT[1], cT + OT[2]);
-             return lT(MT, TT + OT[0], kT + OT[1], cT + OT[2]) && (this.sC.rV(MT) ?? !0)
+             var lq = Oq.mC(qq + mq[0], Eq + mq[1], gq + mq[2]);
+             return Yq(lq, qq + mq[0], Eq + mq[1], gq + mq[2]) && (this.FW.Xs(lq) ?? !0)
```

#### 597. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4850-L4851` → after: `L5014-L5015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5014-L5015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L5014-L5015) · [Before (L4850-L4851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4850-L4851)

```diff
-             var lT = KT.RZ(TT + OT[0], kT + OT[1], cT + OT[2]);
-             return this.sC.Tj(lT)
+             var Yq = Oq.mC(qq + mq[0], Eq + mq[1], gq + mq[2]);
+             return this.FW.sW(Yq)
```

#### 598. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4853-L4854` → after: `L5017-L5018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5017-L5018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L5017-L5018) · [Before (L4853-L4854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4853-L4854)

```diff
-         TT || (TT = this.camera.oR()), kT = kT || this.camera.rU(), cT = cT || -1, cT < 0 && (cT = this.mw);
-         var fT = MT.fTT,
+         qq || (qq = this.camera.ND()), Eq = Eq || this.camera.RD(), gq = gq || -1, gq < 0 && (gq = this.IH);
+         var Aq = lq.PEq,
```

#### 599. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4857` → after: `L5021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L5021) · [Before (L4857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4857)

```diff
-         return (IT ? IT.gC({
+         return (uq ? uq.zW({
```

#### 600. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4863-L4867` → after: `L5027-L5031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5027-L5031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L5027-L5031) · [Before (L4863-L4867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4863-L4867)

```diff
-           WG: fT,
-           nG: xT,
-           pG: MT.xTT,
-           hV: () => Vk(yT, TT, kT, cT, fT, xT, MT.xTT)
-         }) : Vk(yT, TT, kT, cT, fT, xT, MT.xTT)) ? (QT().add(MT.xTT, MT.xTT, OT), QT().ek(fT, fT, xT, .01), this.IU(fT, MT.position), MT) : null
+           jF: Aq,
+           vF: cq,
+           ZF: lq.QEq,
+           Fs: () => TE(xq, qq, Eq, gq, Aq, cq, lq.QEq)
+         }) : TE(xq, qq, Eq, gq, Aq, cq, lq.QEq)) ? (Hq().add(lq.QEq, lq.QEq, mq), Hq().sq(Aq, Aq, cq, .01), this.bD(Aq, lq.position), lq) : null
```

#### 601. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4875` → after: `L5039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L5039) · [Before (L4875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4875)

```diff
-             JB: 0,
+             Y_: 0,
```

#### 602. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4878-L4879` → after: `L5042-L5043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5042-L5043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L5042-L5043) · [Before (L4878-L4879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4878-L4879)

```diff
-             Wt: [],
-             WG: []
+             MV: [],
+             jF: []
```

#### 603. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4881` → after: `L5045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L5045) · [Before (L4881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4881)

```diff
-           KT = this.gC(TT, kT, cT, lT);
+           Oq = this.zW(qq, Eq, gq, Yq);
```

#### 604. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4884` → after: `L5048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L5048) · [Before (L4884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4884)

```diff
-       n_() {
+       eqq() {
```

#### 605. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4886` → after: `L5050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L5050) · [Before (L4886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4886)

```diff
-         this.Y_ = !1;
+         this.Cqq = !1;
```

#### 606. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4888-L4891` → after: `L5052-L5055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5052-L5055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L5052-L5055) · [Before (L4888-L4891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4888-L4891)

```diff
-           cT = this.R_ || this.sC.iZ;
-         let lT = this.K8,
-           MT = this.Q8;
-         var KT = this.zV(lT, MT, null, cT);
+           gq = this.wqq || this.FW.uC;
+         let Yq = this.cEq,
+           lq = this.uEq;
+         var Oq = this.yX(Yq, lq, null, gq);
```

#### 607. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4893-L4897` → after: `L5057-L5061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5057-L5061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L5057-L5061) · [Before (L4893-L4897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4893-L4897)

```diff
-           var OT = this.kTT;
-           kO(this, KT, OT), this.U_ = OT, kT = TO(OT)
-         } else this.U_ = null;
-         const yT = this.rTT();
-         this.U_ && !yT(this.U_.JB, ...this.U_.position) && (KT = this.zV(lT, MT, null, yT));
+           var mq = this.aEq;
+           qm(this, Oq, mq), this.Kqq = mq, Eq = DO(mq)
+         } else this.Kqq = null;
+         const xq = this.zEq();
+         this.Kqq && !xq(this.Kqq.Y_, ...this.Kqq.position) && (Oq = this.yX(Yq, lq, null, xq));
```

#### 608. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4900-L4903` → after: `L5064-L5067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5064-L5067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L5064-L5067) · [Before (L4900-L4903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4900-L4903)

```diff
-           const TT = this.lTT;
-           kO(this, KT, TT), this.p_ = TT, fT = TO(TT)
-         } else this.p_ = null;
-         (kT != this.cTT || TT) && (this.emit("targetBlockChanged", this.U_), this.cTT = kT), (fT !== this.MTT || TT) && (this.emit("miningTargetBlockChanged", this.p_), this.MTT = fT)
+           const qq = this.dEq;
+           qm(this, Oq, qq), this.Dqq = qq, Aq = DO(qq)
+         } else this.Dqq = null;
+         (Eq != this.VEq || qq) && (this.emit("targetBlockChanged", this.Kqq), this.VEq = Eq), (Aq !== this.jEq || qq) && (this.emit("miningTargetBlockChanged", this.Dqq), this.jEq = Aq)
```

#### 609. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4905-L4909` → after: `L5069-L5073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5069-L5073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L5069-L5073) · [Before (L4905-L4909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4905-L4909)

```diff
-       B_() {
-         if (this.kTT.JB = this.pA.RZ(this.kTT.position[0], this.kTT.position[1], this.kTT.position[2]), 0 === this.kTT.JB && (this.U_ = null, this.Y_ = !0), this.p_) {
-           const TT = this.p_;
-           TT.JB = this.pA.RZ(...TT.position);
-           this.rTT()(TT.JB, ...TT.position) || (this.p_ = null)
+       Iqq() {
+         if (this.aEq.Y_ = this.kB.mC(this.aEq.position[0], this.aEq.position[1], this.aEq.position[2]), 0 === this.aEq.Y_ && (this.Kqq = null, this.Cqq = !0), this.Dqq) {
+           const qq = this.Dqq;
+           qq.Y_ = this.kB.mC(...qq.position);
+           this.zEq()(qq.Y_, ...qq.position) || (this.Dqq = null)
```

#### 610. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4912-L4913` → after: `L5076-L5077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5076-L5077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L5076-L5077) · [Before (L4912-L4913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4912-L4913)

```diff
-       q_(TT) {
-         this.K9 = TT, this.I9(this.p_)
+       EEq(qq) {
+         this.gEq = qq, this.YEq(this.Dqq)
```

#### 611. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4915-L4916` → after: `L5079-L5080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5079-L5080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L5079-L5080) · [Before (L4915-L4916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4915-L4916)

```diff
-       rTT() {
-         return this.i_ || this.R_ || this.sC.iZ
+       zEq() {
+         return this.qEq || this.wqq || this.FW.uC
```

#### 612. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4923` → after: `L5087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L5087) · [Before (L4923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4923)

```diff
-         JB: cT,
+         Y_: gq,
```

#### 613. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4926` → after: `L5090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L5090) · [Before (L4926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4926)

```diff
-       return `${kT[0]}|${kT[1]}|${kT[2]}|${cT}|${lT[0]}|${lT[1]}|${lT[2]}`
+       return `${Eq[0]}|${Eq[1]}|${Eq[2]}|${gq}|${Yq[0]}|${Yq[1]}|${Yq[2]}`
```

#### 614. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4930` → after: `L5094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L5094) · [Before (L4930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4930)

```diff
-       QT().copy(cT.position, kT.xTT), QT().copy(cT.normal, kT.normal), QT().add(cT.Wt, cT.position, cT.normal), QT().copy(cT.WG, kT.position), cT.JB = TT.pA.RZ(cT.position[0], cT.position[1], cT.position[2])
+       Hq().copy(gq.position, Eq.QEq), Hq().copy(gq.normal, Eq.normal), Hq().add(gq.MV, gq.position, gq.normal), Hq().copy(gq.jF, Eq.position), gq.Y_ = qq.kB.mC(gq.position[0], gq.position[1], gq.position[2])
```

#### 615. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4934-L4952` → after: `L5098-L5116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5098-L5116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L5098-L5116) · [Before (L4934-L4952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4934-L4952)

```diff
-       MO = cT(3679),
-       KO = cT(38561),
-       OO = cT(36113),
-       yO = cT(36108),
-       fO = cT(3684),
-       xO = cT(3692),
-       IO = cT(36097),
-       AO = cT(36092),
-       CO = cT(3697),
-       jO = cT(4681),
-       vO = cT(36065),
-       tO = cT(3673),
-       hO = cT(2884),
-       NO = cT(2891),
-       QO = cT(36069),
-       SO = cT(645),
- ... (3 more removed lines; see GitHub link above)
+       Ym = gq(2797),
+       lm = gq(38693),
+       Om = gq(36380),
+       mm = gq(36372),
+       xm = gq(2805),
+       Am = gq(2815),
+       cm = gq(36361),
+       um = gq(36359),
+       Bm = gq(3565),
+       Wm = gq(4524),
+       Nm = gq(36331),
+       am = gq(3563),
+       Vm = gq(2841),
+       dm = gq(2853),
+       jm = gq(36339),
+       Hm = gq(614),
+ ... (3 more added lines; see GitHub link above)
```

#### 616. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4959` → after: `L5123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L5123) · [Before (L4959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4959)

```diff
-           } = await Promise.all([cT.e(296), cT.e(262)]).then((() => cT(41230)));
+           } = await Promise.all([gq.e(296), gq.e(262)]).then((() => gq(41387)));
```

#### 617. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4966-L4967` → after: `L5130-L5131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5130-L5131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L5130-L5131) · [Before (L4966-L4967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4966-L4967)

```diff
-                 XF: KT,
-                 Uv: MT,
+                 nH: Oq,
+                 Ta: lq,
```

#### 618. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4977` → after: `L5141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L5141) · [Before (L4977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4977)

```diff
-                   MT.gpuDevice && (0, aO.b)(MT.gpuDevice)
+                   lq.gpuDevice && (0, Pm.e)(lq.gpuDevice)
```

#### 619. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4999-L5000` → after: `L5163-L5164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5163-L5164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L5163-L5164) · [Before (L4999-L5000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L4999-L5000)

```diff
-           OT = null !== (MT = null !== lT && void 0 !== lT ? lT : null === cT || void 0 === cT ? void 0 : cT.message) && void 0 !== MT ? MT : String(cT);
-         (0, FO.c)("Lite pipeline failed", new Error(`${TT}${KT?` ${KT}`:""}: ${OT} [${kT}]`))
+           mq = null !== (lq = null !== Yq && void 0 !== Yq ? Yq : null === gq || void 0 === gq ? void 0 : gq.message) && void 0 !== lq ? lq : String(gq);
+         (0, Qm.b)("Lite pipeline failed", new Error(`${qq}${Oq?` ${Oq}`:""}: ${mq} [${Eq}]`))
```

#### 620. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5004-L5010` → after: `L5168-L5174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5168-L5174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L5168-L5174) · [Before (L5004-L5010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L5004-L5010)

```diff
-     var bO = cT(31),
-       zO = cT(37571),
-       JO = cT(38593),
-       oO = cT(326),
-       HO = cT(1734),
-       eO = cT(2853),
-       GO = cT(4499);
+     var nm = gq(24),
+       bm = gq(2751),
+       im = gq(38724),
+       Zm = gq(289),
+       fm = gq(1702),
+       Mm = gq(2733),
+       Tm = gq(4343);
```

#### 621. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5020` → after: `L5184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L5184) · [Before (L5020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L5020)

```diff
-       } = kT.Uv;
+       } = Eq.Ta;
```

#### 622. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5022` → after: `L5186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L5186) · [Before (L5022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L5022)

```diff
-       (0, oO.i)();
+       (0, Zm.k)();
```

#### 623. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5025-L5026` → after: `L5189-L5190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5189-L5190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L5189-L5190) · [Before (L5025-L5026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L5025-L5026)

```diff
-         (0, aO.d)(cT) || ((0, eO.o)("webgpuloss") && (0, GO.d)((kT => {
-           kT.noteWebGpuLoss("js", !0 === TT.framesRefused ? `${TT.reason} frames refused` : TT.reason, TT.message)
+         (0, Pm.i)(gq) || ((0, Mm.s)("webgpuloss") && (0, Tm.b)((Eq => {
+           Eq.noteWebGpuLoss("js", !0 === qq.framesRefused ? `${qq.reason} frames refused` : qq.reason, qq.message)
```

#### 624. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5029` → after: `L5193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L5193) · [Before (L5029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L5029)

```diff
-           EO = !0, bO.e.turnOffWebGpuAfterDeviceLoss();
+           Sm = !0, nm.b.turnOffWebGpuAfterDeviceLoss();
```

#### 625. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5034` → after: `L5198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L5198) · [Before (L5034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L5034)

```diff
-           (0, FO.c)(JO.e.WebGPU, lT), (0, NO.e)("render_lost", lT, cT), (0, zO.c)(VO)
+           (0, Qm.b)(im.e.WebGPU, Yq), (0, dm.d)("render_lost", Yq, gq), (0, bm.c)(zm)
```

#### 626. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5046` → after: `L5210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L5210) · [Before (L5046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L5046)

```diff
-             xT = (0, JO.o)(!0 === KT, MT, "destroyed" === lT);
+             cq = (0, im.q)(!0 === Oq, lq, "destroyed" === Yq);
```

#### 627. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5048-L5049` → after: `L5212-L5213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5212-L5213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L5212-L5213) · [Before (L5048-L5049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L5048-L5049)

```diff
-             detail: `${xT} ${yT} up${(0,JO.h)(OT-cT)} ${(0,JO.n)(TT.adapterInfo)}: ${MT}`,
-             code: `${xT}_${fT}_${XO(OT)}`
+             detail: `${cq} ${xq} up${(0,im.h)(mq-gq)} ${(0,im.p)(qq.adapterInfo)}: ${lq}`,
+             code: `${cq}_${Aq}_${Lm(mq)}`
```

#### 628. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5056` → after: `L5220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L5220) · [Before (L5056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L5056)

```diff
-       const cT = (0, oO.d)(),
+       const gq = (0, Zm.f)(),
```

#### 629. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5059` → after: `L5223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L5223) · [Before (L5059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L5059)

```diff
-         KT = lT ? kT - cT : null;
+         Oq = Yq ? Eq - gq : null;
```

#### 630. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5061-L5062` → after: `L5225-L5226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5225-L5226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L5225-L5226) · [Before (L5061-L5062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L5061-L5062)

```diff
-         page: null === KT ? MT : `${MT}${(0,JO.h)(KT)}`,
-         pageCode: null === KT ? MT : `${MT}_${(0,JO.k)(KT)}`
+         page: null === Oq ? lq : `${lq}${(0,im.h)(Oq)}`,
+         pageCode: null === Oq ? lq : `${lq}_${(0,im.k)(Oq)}`
```

#### 631. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5067-L5069` → after: `L5231-L5233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5231-L5233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L5231-L5233) · [Before (L5067-L5069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L5067-L5069)

```diff
-       if ((0, HO.c)()) return "ad_open";
-       const kT = (0, HO.b)();
-       return null === kT ? "ad_none" : `ad_${(0,JO.k)(TT-kT.endedAt)}_${kT.pageHid?"h":"v"}`
+       if ((0, fm.d)()) return "ad_open";
+       const Eq = (0, fm.c)();
+       return null === Eq ? "ad_none" : `ad_${(0,im.k)(qq-Eq.endedAt)}_${Eq.pageHid?"h":"v"}`
```

#### 632. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5071` → after: `L5235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L5235) · [Before (L5071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L5071)

```diff
-     var dO = cT(159);
+     var Jm = gq(136);
```

#### 633. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5086` → after: `L5250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L5250) · [Before (L5086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L5086)

```diff
-         this.actions.Yj(`webgl_restored_${kT}_${(0,JO.m)(TT-this.lostAt)}`, `WebGL${this.webGlVersion} context restored (${kT})`), this.lostAt = null, this.restoredAt = TT, this.clearTimers()
+         this.actions.SN(`webgl_restored_${Eq}_${(0,im.m)(qq-this.lostAt)}`, `WebGL${this.webGlVersion} context restored (${Eq})`), this.lostAt = null, this.restoredAt = qq, this.clearTimers()
```

#### 634. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5097-L5098` → after: `L5261-L5262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5261-L5262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L5261-L5262) · [Before (L5097-L5098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L5097-L5098)

```diff
-         } = uO(this.startedAt, TT), MT = `webgl${this.webGlVersion} ${cT} up${(0,JO.h)(TT-this.startedAt)}: ${kT}`;
-         (0, FO.c)(JO.e.WebGL2, new Error(MT)), this.actions.Yj(`webgl_lost_${lT}_${XO(TT)}`, `WebGL${this.webGlVersion} context lost: ${MT}`)
+         } = Gm(this.startedAt, qq), lq = `webgl${this.webGlVersion} ${gq} up${(0,im.h)(qq-this.startedAt)}: ${Eq}`;
+         (0, Qm.b)(im.e.WebGL2, new Error(lq)), this.actions.SN(`webgl_lost_${Yq}_${Lm(qq)}`, `WebGL${this.webGlVersion} context lost: ${lq}`)
```

#### 635. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5128` → after: `L5292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L5292) · [Before (L5128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L5128)

```diff
-         if (!this.actions.inGame()) return this.waiting || (this.waiting = !0, this.actions.Yj(`webgl_waiting_${kT}`, `WebGL${this.webGlVersion} context not restored: waiting for a game`)), this.restoreDidNotHold = !1, void this.armTimers(TT);
+         if (!this.actions.inGame()) return this.waiting || (this.waiting = !0, this.actions.SN(`webgl_waiting_${Eq}`, `WebGL${this.webGlVersion} context not restored: waiting for a game`)), this.restoreDidNotHold = !1, void this.armTimers(qq);
```

#### 636. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5131-L5133` → after: `L5295-L5297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5295-L5297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L5295-L5297) · [Before (L5131-L5133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L5131-L5133)

```diff
-           lT = hk.g.getItem(LO);
-         if (!("number" === typeof lT && Date.now() - lT < 3e5) && this.actions.canRejoin() && hk.g.setItem(LO, Date.now())) return this.actions.Yj(`webgl_rejoin_${kT}_${cT}`, `WebGL${this.webGlVersion} context not restored: rejoining`), void this.actions.rejoin();
-         this.actions.Yj(`webgl_end_${kT}_${cT}`, `WebGL${this.webGlVersion} context not restored: game ended`), this.actions.end()
+           Yq = dE.k.getItem(km);
+         if (!("number" === typeof Yq && Date.now() - Yq < 3e5) && this.actions.canRejoin() && dE.k.setItem(km, Date.now())) return this.actions.SN(`webgl_rejoin_${Eq}_${gq}`, `WebGL${this.webGlVersion} context not restored: rejoining`), void this.actions.rejoin();
+         this.actions.SN(`webgl_end_${Eq}_${gq}`, `WebGL${this.webGlVersion} context not restored: game ended`), this.actions.end()
```

#### 637. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5142-L5143` → after: `L5306-L5307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5306-L5307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L5306-L5307) · [Before (L5142-L5143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L5142-L5143)

```diff
-       Yj(TT, kT) {
-         (0, NO.e)("render_lost", kT, TT, !0, QO.d)
+       SN(qq, Eq) {
+         (0, dm.d)("render_lost", Eq, qq, !0, jm.e)
```

#### 638. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5147` → after: `L5311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L5311) · [Before (L5147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L5147)

```diff
-         return !0 === (null === (TT = (0, BT.c)()) || void 0 === TT ? void 0 : TT.client.isConnectedToServer())
+         return !0 === (null === (qq = (0, Xq.b)()) || void 0 === qq ? void 0 : qq.client.isConnectedToServer())
```

#### 639. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5151` → after: `L5315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L5315) · [Before (L5151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L5151)

```diff
-         return !(0, dO.c)() && null !== (null !== (TT = null === (kT = (0, BT.c)().client.getConnectionInfo()) || void 0 === kT ? void 0 : kT.lobbyName) && void 0 !== TT ? TT : null)
+         return !(0, Jm.c)() && null !== (null !== (qq = null === (Eq = (0, Xq.b)().client.getConnectionInfo()) || void 0 === Eq ? void 0 : Eq.lobbyName) && void 0 !== qq ? qq : null)
```

#### 640. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5154` → after: `L5318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L5318) · [Before (L5154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L5154)

```diff
-         (0, BT.c)().client.leaveGameUnwanted({
+         (0, Xq.b)().client.leaveGameUnwanted({
```

#### 641. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5171` → after: `L5335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L5335) · [Before (L5171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L5171)

```diff
-         const kT = (0, oO.d)();
+         const Eq = (0, Zm.f)();
```

#### 642. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5175` → after: `L5339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L5339) · [Before (L5175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L5175)

```diff
-         return (0, HO.l)(TT)
+         return (0, fm.m)(qq)
```

#### 643. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5182` → after: `L5346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L5346) · [Before (L5182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L5182)

```diff
-       YO || (YO = !0, (0, NO.e)("wasm_physics", TT), setTimeout(WO, 0))
+       sm || (sm = !0, (0, dm.d)("wasm_physics", qq), setTimeout(wm, 0))
```

#### 644. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5187` → after: `L5351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L5351) · [Before (L5187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L5187)

```diff
-       const kT = null === (TT = (0, BT.c)()) || void 0 === TT ? void 0 : TT.client;
+       const Eq = null === (qq = (0, Xq.b)()) || void 0 === qq ? void 0 : qq.client;
```

#### 645. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5198` → after: `L5362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L5362) · [Before (L5198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L5198)

```diff
-       hT.k.nt("unrecoverableError", UO)
+       dq.i.TV("unrecoverableError", Fm)
```

#### 646. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5200-L5201` → after: `L5364-L5365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5364-L5365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L5364-L5365) · [Before (L5200-L5201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L5200-L5201)

```diff
-     var nO = cT(38277),
-       pO = cT(36619);
+     var Km = gq(38427),
+       Cm = gq(36841);
```

#### 647. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5233-L5234` → after: `L5397-L5398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5397-L5398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L5397-L5398) · [Before (L5233-L5234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L5233-L5234)

```diff
-         uF: function(kT, cT) {
-           cT.speedMultiplier = new pO.h, cT.jumpMultiplier = new pO.h, cT.cameraDirection = QT().create(),
+         Fy: function(Eq, gq) {
+           gq.speedMultiplier = new Cm.g, gq.jumpMultiplier = new Cm.g, gq.cameraDirection = Hq().create(),
```

#### 648. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5238` → after: `L5402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L5402) · [Before (L5238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L5238)

```diff
-                 cT.pose = kT, lT && QT().set(cT.meshOffset, lT[0], lT[1], lT[2]), MT && TT.bloxd.removeFromEyeHeightCache(cT.ZJ)
+                 gq.pose = Eq, Yq && Hq().set(gq.meshOffset, Yq[0], Yq[1], Yq[2]), lq && qq.bloxd.removeFromEyeHeightCache(gq.Zk)
```

#### 649. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5241` → after: `L5405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L5405) · [Before (L5241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L5241)

```diff
-                 QT().set(cT.meshOffset, kT, lT, MT), KT && TT.bloxd.removeFromEyeHeightCache(cT.ZJ)
+                 Hq().set(gq.meshOffset, Eq, Yq, lq), Oq && qq.bloxd.removeFromEyeHeightCache(gq.Zk)
```

#### 650. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5243` → after: `L5407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L5407) · [Before (L5243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L5243)

```diff
-                 cT.crouching !== kT && (cT.crouching = kT, TT.bloxd.removeFromEyeHeightCache(cT.ZJ))
+                 gq.crouching !== Eq && (gq.crouching = Eq, qq.bloxd.removeFromEyeHeightCache(gq.Zk))
```

#### 651. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5245` → after: `L5409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L5409) · [Before (L5245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L5245)

```diff
-                 kT === TT.jH && (cT.armSwinging = !0, cT._armSwungLastTick = !0, cT._renderTickSinceSwing = !1, cT._tickSinceSwing = !1)
+                 Eq === qq.oR && (gq.armSwinging = !0, gq._armSwungLastTick = !0, gq._renderTickSinceSwing = !1, gq._tickSinceSwing = !1)
```

#### 652. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5249` → after: `L5413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L5413) · [Before (L5249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L5249)

```diff
-         Om: null,
+         OJ: null,
```

#### 653. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5251` → after: `L5415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L5415) · [Before (L5251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L5251)

```diff
-           for (const lT of cT) lT.ZJ === TT.jH && (!lT._armSwungLastTick && lT._tickSinceSwing && lT._renderTickSinceSwing && (lT.armSwinging = !1), lT._tickSinceSwing = !0, lT._armSwungLastTick = !1, lT.hitInPrevTick = !1)
+           for (const Yq of gq) Yq.Zk === qq.oR && (!Yq._armSwungLastTick && Yq._tickSinceSwing && Yq._renderTickSinceSwing && (Yq.armSwinging = !1), Yq._tickSinceSwing = !0, Yq._armSwungLastTick = !1, Yq.hitInPrevTick = !1)
```

#### 654. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5253-L5254` → after: `L5417-L5418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5417-L5418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L5417-L5418) · [Before (L5253-L5254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L5253-L5254)

```diff
-         ZN: function(kT, cT) {
-           for (const lT of cT) lT.ZJ === TT.jH && (lT._renderTickSinceSwing = !0)
+         Vr: function(Eq, gq) {
+           for (const Yq of gq) Yq.Zk === qq.oR && (Yq._renderTickSinceSwing = !0)
```

#### 655. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5258-L5259` → after: `L5422-L5423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5422-L5423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L5422-L5423) · [Before (L5258-L5259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L5258-L5259)

```diff
-     var qO = cT(38049),
-       sO = cT(37849);
+     var em = gq(38183),
+       Dm = gq(37966);
```

#### 656. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L5272-L5273` → after: `L5436-L5437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R5436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L5436-L5437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/91.js#L5436-L5437) · [Before (L5272-L5273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/91.js#L5272-L5273)

```diff
-         uF: function(kT, cT) {
-           if (cT.inventory || (cT.inventory = new sO.e(TT, cT, ET.z)), !cT.opWrapper) {
+         Fy: function(Eq, gq) {
+           if (gq.inventory || (gq.inventory = new Dm.b(qq, gq, Sq.u)), !gq.opWrapper) {
```
