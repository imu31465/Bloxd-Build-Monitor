# Changed — Bundle Modifications Report (Part 145 / 154)

- **Updated at**: `2026-11-27T02:11 JST`
- **Part**: `145 / 154` (**375** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 144](part-144.md) · [Part 146 →](part-146.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmPlay.js` (cwj32u.ae3e40c2 → gw4e3a.937868ec · continued)

- **File**: `bundles/bloxd.io/chunks/js/wasmPlay.js` (1125 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f)

#### 440. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4304` → after: `L4161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4161) · [Before (L4304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4304)

```diff
-             LH.gone ||= rH, this.lose(HH, `a job trapped its wasm: ${BH.trap}`), rH && this.giveUp(HH, `trapped ${LH.trapsWithoutResult} jobs in a row`, "every meshing worker kept trapping");
+             GB.gone ||= DB, this.lose(BB, `a job trapped its wasm: ${OB.trap}`), DB && this.giveUp(BB, `trapped ${GB.trapsWithoutResult} jobs in a row`, "every meshing worker kept trapping");
```

#### 441. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4319-L4320` → after: `L4176-L4177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4176-L4177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4176-L4177) · [Before (L4319-L4320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4319-L4320)

```diff
-         const AH = (null !== (LH = this.refusals.get(BH)) && void 0 !== LH ? LH : 0) + 1;
-         this.refusals.set(BH, AH), (0, AA.r)(AH) && console.warn(`[bloxd-wasm-client] meshing worker ${HH} refused a chunk (${AH} so far for this reason): ${BH}`)
+         const YB = (null !== (GB = this.refusals.get(OB)) && void 0 !== GB ? GB : 0) + 1;
+         this.refusals.set(OB, YB), (0, YY.z)(YB) && console.warn(`[bloxd-wasm-client] meshing worker ${BB} refused a chunk (${YB} so far for this reason): ${OB}`)
```

#### 442. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4323` → after: `L4180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4180) · [Before (L4323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4323)

```diff
-         this.heapRefusals++, (0, AA.r)(this.heapRefusals) && console.warn(`[bloxd-wasm-client] meshing worker ${HH} was refused memory for a chunk's mesh (${this.heapRefusals} so far)`)
+         this.heapRefusals++, (0, YY.z)(this.heapRefusals) && console.warn(`[bloxd-wasm-client] meshing worker ${BB} was refused memory for a chunk's mesh (${this.heapRefusals} so far)`)
```

#### 443. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4330` → after: `L4187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4187) · [Before (L4330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4330)

```diff
-           }, console.warn(`[bloxd-wasm-client] meshing worker ${HH} ${BH}: giving up on it`), this.slots.every((HH => HH.gone))) {
+           }, console.warn(`[bloxd-wasm-client] meshing worker ${BB} ${OB}: giving up on it`), this.slots.every((BB => BB.gone))) {
```

#### 444. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4338` → after: `L4195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4195) · [Before (L4338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4338)

```diff
-               return `worker ${BH} ${null!==(LH=null===(AH=HH.goneFor)||void 0===AH?void 0:AH.why)&&void 0!==LH?LH:"went"}`
+               return `worker ${OB} ${null!==(GB=null===(YB=BB.goneFor)||void 0===YB?void 0:YB.why)&&void 0!==GB?GB:"went"}`
```

#### 445. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4340` → after: `L4197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4197) · [Before (L4340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4340)

```diff
-           this.options.fail(1 === HH.size ? LH : `no meshing worker is left (${BH.join(", ")})`)
+           this.options.fail(1 === BB.size ? GB : `no meshing worker is left (${OB.join(", ")})`)
```

#### 446. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4344` → after: `L4201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4201) · [Before (L4344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4344)

```diff
-         console.warn(`[bloxd-wasm-client] meshing worker ${HH} was lost: ${BH}`), this.endWorker(HH), this.stopped || (LH ? LH() : this.options.onWorkerLost(BH), this.tellLost(HH), this.start(HH))
+         console.warn(`[bloxd-wasm-client] meshing worker ${BB} was lost: ${OB}`), this.endWorker(BB), this.stopped || (GB ? GB() : this.options.onWorkerLost(OB), this.tellLost(BB), this.start(BB))
```

#### 447. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4353` → after: `L4210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4210) · [Before (L4353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4353)

```diff
-         BH.started && (BH.started = !1, this.options.write(0, UL.Ld.WorkerLost, 0, HH, 0, Or))
+         OB.started && (OB.started = !1, this.options.write(0, SG.Ud.WorkerLost, 0, BB, 0, fD))
```

#### 448. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4357` → after: `L4214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4214) · [Before (L4357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4357)

```diff
-         return null !== (BH = this.pooled(HH)) && void 0 !== BH ? BH : new ArrayBuffer(Math.max(16384, HH))
+         return null !== (OB = this.pooled(BB)) && void 0 !== OB ? OB : new ArrayBuffer(Math.max(16384, BB))
```

#### 449. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4379-L4385` → after: `L4236-L4242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4236-L4242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4236-L4242) · [Before (L4379-L4385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4379-L4385)

```diff
-     var mr = LH(37358),
-       or = LH(42078),
-       Ir = LH(42259),
-       fr = LH(42262),
-       lr = (LH(42101), LH(37100)),
-       Kr = LH(42271),
-       cr = LH(42142);
+     var KD = GB(37154),
+       uD = GB(41782),
+       mD = GB(41953),
+       ID = GB(41958),
+       FD = (GB(41805), GB(36937)),
+       iD = GB(41964),
+       LD = GB(41851);
```

#### 450. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4393` → after: `L4250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4250) · [Before (L4393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4393)

```diff
-       const BH = await (0, Kr.g)(HH);
+       const OB = await (0, iD.j)(BB);
```

#### 451. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4399` → after: `L4256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4256) · [Before (L4399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4399)

```diff
-         } = (0, cr.n)(BH);
+         } = (0, LD.s)(OB);
```

#### 452. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4412` → after: `L4269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4269) · [Before (L4412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4412)

```diff
-         this.session = HH, this.sources = BH, this.warn = LH, this.load = AH, this.nextPoll = 0, this.Mu = !1, this.warned = new Set
+         this.session = BB, this.sources = OB, this.warn = GB, this.load = YB, this.nextPoll = 0, this.Vp = !1, this.warned = new Set
```

#### 453. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4423` → after: `L4280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4280) · [Before (L4423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4423)

```diff
-         this.Mu = !0
+         this.Vp = !0
```

#### 454. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4429` → after: `L4286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4286) · [Before (L4429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4429)

```diff
-           if (zH = await this.sources.blockImageUrl(HH), null === zH) throw new Error(`block image ${HH} has no URL`);
+           if (yB = await this.sources.blockImageUrl(BB), null === yB) throw new Error(`block image ${BB} has no URL`);
```

#### 455. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4433-L4434` → after: `L4290-L4291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4290-L4291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4290-L4291) · [Before (L4433-L4434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4433-L4434)

```diff
-           const BH = null !== (CH = zH) && void 0 !== CH ? CH : `block image ${HH}`;
-           this.warned.has(BH) || (this.warned.add(BH), this.warn(`sun shadow plane texture ${BH} didn't load: its blocks cast no shadow`, EH))
+           const OB = null !== (JB = yB) && void 0 !== JB ? JB : `block image ${BB}`;
+           this.warned.has(OB) || (this.warned.add(OB), this.warn(`sun shadow plane texture ${OB} didn't load: its blocks cast no shadow`, MB))
```

#### 456. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4436` → after: `L4293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4293) · [Before (L4436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4436)

```diff
-         this.Mu || this.session.setSunShadowTexture(HH, BH, null !== (LH = null === (AH = tH) || void 0 === AH ? void 0 : AH.width) && void 0 !== LH ? LH : 0, null !== (rH = null === (SH = tH) || void 0 === SH ? void 0 : SH.height) && void 0 !== rH ? rH : 0, null === (hH = tH) || … [truncated]
+         this.Vp || this.session.setSunShadowTexture(BB, OB, null !== (GB = null === (YB = jB) || void 0 === YB ? void 0 : YB.width) && void 0 !== GB ? GB : 0, null !== (DB = null === (QB = jB) || void 0 === QB ? void 0 : QB.height) && void 0 !== DB ? DB : 0, null === (oB = jB) || … [truncated]
```

#### 457. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4439-L4447` → after: `L4296-L4304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4296-L4304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4296-L4304) · [Before (L4439-L4447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4439-L4447)

```diff
-     var Nr = LH(37162),
-       Rr = LH(42117),
-       jr = LH(42275),
-       nr = LH(42281),
-       Fr = LH(42125),
-       Dr = LH(42129),
-       wr = LH(35018),
-       Zr = LH(34861),
-       dr = LH(42292);
+     var wD = GB(36997),
+       ED = GB(41827),
+       cD = GB(41971),
+       hD = GB(41980),
+       aD = GB(41834),
+       eD = GB(41842),
+       TD = GB(34832),
+       bD = GB(34675),
+       CD = GB(41990);
```

#### 458. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4451-L4452` → after: `L4308-L4309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4308-L4309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4308-L4309) · [Before (L4451-L4452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4451-L4452)

```diff
-     var ir = LH(42032),
-       pr = LH(42295);
+     var xD = GB(41723),
+       tD = GB(41995);
```

#### 459. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4504` → after: `L4361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4361) · [Before (L4504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4504)

```diff
-     var LS = LH(42304);
+     var YQ = GB(42004);
```

#### 460. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4510` → after: `L4367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4367) · [Before (L4510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4510)

```diff
-         aux: UL.cc.AdStart | (HH ? UL.cc.PreventMovement : 0),
+         aux: SG.kc.AdStart | (BB ? SG.kc.PreventMovement : 0),
```

#### 461. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4514-L4515` → after: `L4371-L4372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4371-L4372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4371-L4372) · [Before (L4514-L4515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4514-L4515)

```diff
-     var hS = LH(3195),
-       tS = LH(280);
+     var jQ = GB(3249),
+       yQ = GB(294);
```

#### 462. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4517` → after: `L4374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4374) · [Before (L4517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4517)

```diff
-     var CS = LH(42307);
+     var MQ = GB(42006);
```

#### 463. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4536-L4537` → after: `L4393-L4394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4393-L4394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4393-L4394) · [Before (L4536-L4537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4536-L4537)

```diff
-           own: HH.includes(CA.b),
-           oneShot: HH.includes(CA.c)
+           own: BB.includes(JY.e),
+           oneShot: BB.includes(JY.i)
```

#### 464. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4547` → after: `L4404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4404) · [Before (L4547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4547)

```diff
-         })), this.channel = (null !== (BH = HH.openChannel) && void 0 !== BH ? BH : CA.s)(), null !== this.channel && (this.channel.onmessage = () => {
+         })), this.channel = (null !== (OB = BB.openChannel) && void 0 !== OB ? OB : JY.w)(), null !== this.channel && (this.channel.onmessage = () => {
```

#### 465. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4559-L4560` → after: `L4416-L4417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4416-L4417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4416-L4417) · [Before (L4559-L4560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4559-L4560)

```diff
-           })).catch((HH => (null !== BH && (0, CA.k)(BH), LH(HH), null)))
-         }((() => this.host.load(BH).then((HH => (HH.setGamePackConfirm(this.confirm), this.landed = HH, HH)))), BH ? this.host.store : null, this.host.XX), this.landRequest(this.requested), this.requested
+           })).catch((BB => (null !== OB && (0, JY.q)(OB), GB(BB), null)))
+         }((() => this.host.load(OB).then((BB => (BB.setGamePackConfirm(this.confirm), this.landed = BB, BB)))), OB ? this.host.store : null, this.host.jP), this.landRequest(this.requested), this.requested
```

#### 466. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4568` → after: `L4425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4425) · [Before (L4568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4568)

```diff
-           return null !== (HH = this.requested) && void 0 !== HH ? HH : null
+           return null !== (BB = this.requested) && void 0 !== BB ? BB : null
```

#### 467. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4576-L4580` → after: `L4433-L4437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4433-L4437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4433-L4437) · [Before (L4576-L4580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4576-L4580)

```diff
-     var XS = LH(37030);
-     const GS = 216 * XS.g,
-       YS = 92 * XS.c,
-       uS = 64 * XS.g,
-       QS = 16 * XS.g;
+     var zQ = GB(36874);
+     const lQ = 216 * zQ.h,
+       pQ = 92 * zQ.e,
+       qQ = 64 * zQ.h,
+       ZQ = 16 * zQ.h;
```

#### 468. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4584` → after: `L4441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4441) · [Before (L4584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4584)

```diff
-       return null !== (HH = null === (BH = performance.memory) || void 0 === BH ? void 0 : BH.Ix) && void 0 !== HH ? HH : null
+       return null !== (BB = null === (OB = performance.memory) || void 0 === OB ? void 0 : OB.XN) && void 0 !== BB ? BB : null
```

#### 469. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4594` → after: `L4451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4451) · [Before (L4594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4594)

```diff
-           rH = Math.max(null !== (BH = this.reads.jsHeapBytes()) && void 0 !== BH ? BH : 0, uS),
+           DB = Math.max(null !== (OB = this.reads.jsHeapBytes()) && void 0 !== OB ? OB : 0, qQ),
```

#### 470. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4620` → after: `L4477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4477) · [Before (L4620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4620)

```diff
-         return null === HH ? null : `estimate ${(0,XS.l)(HH.totalBytes)} MiB of budget ${null===BH?"none":(0,XS.l)(BH)}: wasm ${(0,XS.l)(HH.wasmBytes)} js ${(0,XS.l)(HH.jsHeapBytes)} gpu ${(0,XS.l)(HH.gpuBytes)} chunks ${HH.storedChunks}`
+         return null === BB ? null : `estimate ${(0,zQ.p)(BB.totalBytes)} MiB of budget ${null===OB?"none":(0,zQ.p)(OB)}: wasm ${(0,zQ.p)(BB.wasmBytes)} js ${(0,zQ.p)(BB.jsHeapBytes)} gpu ${(0,zQ.p)(BB.gpuBytes)} chunks ${BB.storedChunks}`
```

#### 471. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4629-L4630` → after: `L4486-L4487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4486-L4487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4486-L4487) · [Before (L4629-L4630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4629-L4630)

```diff
-             footprintMiB: Number((0, XS.l)(HH.totalBytes)),
-             gpuMiB: Number((0, XS.l)(HH.gpuBytes)),
+             footprintMiB: Number((0, zQ.p)(BB.totalBytes)),
+             gpuMiB: Number((0, zQ.p)(BB.gpuBytes)),
```

#### 472. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4633` → after: `L4490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4490) · [Before (L4633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4633)

```diff
-           footprintBudgetMiB: null === BH ? -1 : Number((0, XS.l)(BH))
+           footprintBudgetMiB: null === OB ? -1 : Number((0, zQ.p)(OB))
```

#### 473. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4637-L4641` → after: `L4494-L4498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4494-L4498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4494-L4498) · [Before (L4637-L4641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4637-L4641)

```diff
-     var xS = LH(3105),
-       vS = LH(4926),
-       PS = LH(37245),
-       TS = LH(38825);
-     const US = VL.hb + 1,
+     var WQ = GB(3136),
+       AQ = GB(4927),
+       VQ = GB(37054),
+       SQ = GB(38626);
+     const nQ = nG.kb + 1,
```

#### 474. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4645` → after: `L4502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4502) · [Before (L4645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4645)

```diff
-         this.log = HH, this.take = BH, this.LX = [], this.unshown = new Map, this.latest = new Map
+         this.log = BB, this.take = OB, this.sJ = [], this.unshown = new Map, this.latest = new Map
```

#### 475. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4649-L4652` → after: `L4506-L4509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4506-L4509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4506-L4509) · [Before (L4649-L4652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4649-L4652)

```diff
-         LH.length >= VL.gb && LH[0] > 0 && (0, xS.j)("remesh", `${LH[0]} core records lost to a full log`);
-         const AH = this.LX;
-         for (let rH = VL.gb; rH + VL.hb <= LH.length; rH += VL.hb) {
-           for (let HH = rH; HH < rH + VL.hb; HH++) AH.push(LH[HH]);
+         GB.length >= nG.jb && GB[0] > 0 && (0, WQ.m)("remesh", `${GB[0]} core records lost to a full log`);
+         const YB = this.sJ;
+         for (let DB = nG.jb; DB + nG.kb <= GB.length; DB += nG.kb) {
+           for (let BB = DB; BB < DB + nG.kb; BB++) YB.push(GB[BB]);
```

#### 476. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4662-L4663` → after: `L4519-L4520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4519-L4520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4519-L4520) · [Before (L4662-L4663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4662-L4663)

```diff
-         const AH = this.LX,
-           rH = (0, TS.f)(AH[HH + 1], AH[HH + 2], AH[HH + 3]),
+         const YB = this.sJ,
+           DB = (0, SQ.d)(YB[BB + 1], YB[BB + 2], YB[BB + 3]),
```

#### 477. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4665` → after: `L4522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4522) · [Before (L4665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4665)

```diff
-           hH = AH[HH + VL.hb];
+           oB = YB[BB + nG.kb];
```

#### 478. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4667` → after: `L4524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4524) · [Before (L4667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4667)

```diff
-           case VL.Lb.Edit:
+           case nG.Rb.Edit:
```

#### 479. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4670-L4671` → after: `L4527-L4528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4527-L4528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4527-L4528) · [Before (L4670-L4671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4670-L4671)

```diff
-           case VL.Lb.Sent:
-             this.latest.set(rH, SH), this.log.sent(rH, SH, AH[HH + 5], AH[HH + 6], AH[HH + 7], null !== (LH = this.unshown.get(rH)) && void 0 !== LH ? LH : TS.b, hH);
+           case nG.Rb.Sent:
+             this.latest.set(DB, QB), this.log.sent(DB, QB, YB[BB + 5], YB[BB + 6], YB[BB + 7], null !== (GB = this.unshown.get(DB)) && void 0 !== GB ? GB : SQ.b, oB);
```

#### 480. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4673` → after: `L4530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4530) · [Before (L4673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4673)

```diff
-           case VL.Lb.Done: {
+           case nG.Rb.Done: {
```

#### 481. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4679` → after: `L4536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4536) · [Before (L4679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4679)

```diff
-           case VL.Lb.Failed: {
+           case nG.Rb.Failed: {
```

#### 482. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4684` → after: `L4541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4541) · [Before (L4684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4684)

```diff
-           case VL.Lb.Shown:
+           case nG.Rb.Shown:
```

#### 483. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4687` → after: `L4544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4544) · [Before (L4687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4687)

```diff
-           case VL.Lb.Replaced:
+           case nG.Rb.Replaced:
```

#### 484. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4690` → after: `L4547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4547) · [Before (L4690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4690)

```diff
-           case VL.Lb.Emptied:
+           case nG.Rb.Emptied:
```

#### 485. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4694` → after: `L4551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4551) · [Before (L4694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4694)

```diff
-             console.warn(`[debug:remesh] unknown core record kind ${AH[HH]}`)
+             console.warn(`[debug:remesh] unknown core record kind ${YB[BB]}`)
```

#### 486. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4706-L4707` → after: `L4563-L4564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4563-L4564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4563-L4564) · [Before (L4706-L4707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4706-L4707)

```diff
-     var kS = LH(3585),
-       mS = LH(40696);
+     var dQ = GB(3645),
+       KQ = GB(40421);
```

#### 487. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4713` → after: `L4570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4570) · [Before (L4713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4713)

```diff
-         this.options = HH, this.worker = null, this.watch = null, this.createWorker = null, this.loading = !1, this.wanted = !1, this.LX = [], this.startsWithoutResult = 0, this.generated = !1, this.coreWaits = !1, this.lastLoss = "", this.seed = null, this.gone = !1, this.pool = … [truncated]
+         this.options = BB, this.worker = null, this.watch = null, this.createWorker = null, this.loading = !1, this.wanted = !1, this.sJ = [], this.startsWithoutResult = 0, this.generated = !1, this.coreWaits = !1, this.lastLoss = "", this.seed = null, this.gone = !1, this.pool = … [truncated]
```

#### 488. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4716-L4717` → after: `L4573-L4574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4573-L4574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4573-L4574) · [Before (L4716-L4717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4716-L4717)

```diff
-         if (!(this.gone || null === this.worker && null === this.LX))
-           if (HH === UL.Pd.WorldgenSeed) {
+         if (!(this.gone || null === this.worker && null === this.sJ))
+           if (BB === SG.Wd.WorldgenSeed) {
```

#### 489. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4728` → after: `L4585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4585) · [Before (L4728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4728)

```diff
-           } else if (HH === UL.Pd.Generate) {
+           } else if (BB === SG.Wd.Generate) {
```

#### 490. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4730-L4731` → after: `L4587-L4588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4587-L4588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4587-L4588) · [Before (L4730-L4731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4730-L4731)

```diff
-           const HH = new DataView(BH.buffer, BH.byteOffset, UL.Jd),
-             AH = null !== (LH = this.pool.pop()) && void 0 !== LH ? LH : new ArrayBuffer(8192);
+           const BB = new DataView(OB.buffer, OB.byteOffset, SG.Od),
+             YB = null !== (GB = this.pool.pop()) && void 0 !== GB ? GB : new ArrayBuffer(8192);
```

#### 491. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4746` → after: `L4603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4603) · [Before (L4746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4746)

```diff
-         this.gone || (this.release(), this.generated = !1, this.dropHeld(), this.pool.length = 0, this.coreWaits && (this.coreWaits = !1, this.options.write(0, UL.Ld.WorldgenStarted, 0, 0, fS)))
+         this.gone || (this.release(), this.generated = !1, this.dropHeld(), this.pool.length = 0, this.coreWaits && (this.coreWaits = !1, this.options.write(0, SG.Ud.WorldgenStarted, 0, 0, IQ)))
```

#### 492. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4754` → after: `L4611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4611) · [Before (L4754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4754)

```diff
-         null !== this.LX ? this.LX.push({
+         null !== this.sJ ? this.sJ.push({
```

#### 493. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4763` → after: `L4620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4620) · [Before (L4763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4763)

```diff
-         this.wanted = !1, null !== this.worker && (this.endWorker(), this.startsWithoutResult = 0, this.LX ??= [])
+         this.wanted = !1, null !== this.worker && (this.endWorker(), this.startsWithoutResult = 0, this.sJ ??= [])
```

#### 494. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4787` → after: `L4644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4644) · [Before (L4787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4787)

```diff
-           return console.warn("[bloxd-wasm-client] the world-gen worker did not start", rH), this.lastLoss = `it did not start (${String(rH)})`, void this.start()
+           return console.warn("[bloxd-wasm-client] the world-gen worker did not start", DB), this.lastLoss = `it did not start (${String(DB)})`, void this.start()
```

#### 495. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4801` → after: `L4658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4658) · [Before (L4801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4801)

```diff
-             xX: AH.g.xX
+             pP: YB.f.pP
```

#### 496. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4804` → after: `L4661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4661) · [Before (L4804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4804)

```diff
-           return console.warn("[bloxd-wasm-client] the world-gen worker could not be sent the module", rH), this.lastLoss = `it could not be sent the module (${String(rH)})`, LH.terminate(), this.worker = null, void this.start()
+           return console.warn("[bloxd-wasm-client] the world-gen worker could not be sent the module", DB), this.lastLoss = `it could not be sent the module (${String(DB)})`, GB.terminate(), this.worker = null, void this.start()
```

#### 497. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4806-L4807` → after: `L4663-L4664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4663-L4664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4663-L4664) · [Before (L4806-L4807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4806-L4807)

```diff
-         this.watch = new Vr.j(Vr.f, (HH => {
-           this.lose((0, Vr.m)(HH), (() => {
+         this.watch = new UD.g(UD.d, (BB => {
+           this.lose((0, UD.k)(BB), (() => {
```

#### 498. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4816` → after: `L4673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4673) · [Before (L4816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4816)

```diff
-             const BH = this.LX;
+             const OB = this.sJ;
```

#### 499. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4818` → after: `L4675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4675) · [Before (L4818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4818)

```diff
-               this.coreWaits = !1, this.options.write(0, UL.Ld.WorldgenStarted, 0, 0, fS);
+               this.coreWaits = !1, this.options.write(0, SG.Ud.WorldgenStarted, 0, 0, IQ);
```

#### 500. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4821` → after: `L4678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4678) · [Before (L4821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4821)

```diff
-             this.LX = null;
+             this.sJ = null;
```

#### 501. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4837` → after: `L4694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4694) · [Before (L4837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4837)

```diff
-             this.generated = !0, BH.status !== UL.ub.Trapped && (this.startsWithoutResult = 0), this.options.write(BH.ticket, UL.Ld.WorldgenResult, BH.status, BH.workerUs, new Uint8Array(BH.bytes, 0, BH.len)), this.recycle(BH.bytes), BH.spare && this.recycle(BH.spare)
+             this.generated = !0, OB.status !== SG.yb.Trapped && (this.startsWithoutResult = 0), this.options.write(OB.ticket, SG.Ud.WorldgenResult, OB.status, OB.workerUs, new Uint8Array(OB.bytes, 0, OB.len)), this.recycle(OB.bytes), OB.spare && this.recycle(OB.spare)
```

#### 502. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4841` → after: `L4698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4698) · [Before (L4841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4841)

```diff
-         console.warn(`[bloxd-wasm-client] the world-gen worker was lost: ${HH}`), this.lastLoss = HH, this.endWorker(), this.gone || (BH ? BH() : this.options.onWorkerLost(HH, this.generated), this.dropHeld(), this.LX = null, this.options.write(0, UL.Ld.WorldgenLost, UL.Rd.Lost,  … [truncated]
+         console.warn(`[bloxd-wasm-client] the world-gen worker was lost: ${BB}`), this.lastLoss = BB, this.endWorker(), this.gone || (OB ? OB() : this.options.onWorkerLost(BB, this.generated), this.dropHeld(), this.sJ = null, this.options.write(0, SG.Ud.WorldgenLost, SG.Yd.Lost,  … [truncated]
```

#### 503. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4844` → after: `L4701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4701) · [Before (L4844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4844)

```diff
-         this.gone = !0, this.dropHeld(), this.options.write(0, UL.Ld.WorldgenLost, UL.Rd.Gone, 0, fS)
+         this.gone = !0, this.dropHeld(), this.options.write(0, SG.Ud.WorldgenLost, SG.Yd.Gone, 0, IQ)
```

#### 504. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4851` → after: `L4708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4708) · [Before (L4851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4851)

```diff
-         if (null !== this.LX) {
+         if (null !== this.sJ) {
```

#### 505. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4855-L4856` → after: `L4712-L4713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4712-L4713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4712-L4713) · [Before (L4855-L4856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4855-L4856)

```diff
-             of this.LX) "generate" === HH.type && this.recycle(HH.bytes);
-           this.LX.length = 0
+             of this.sJ) "generate" === BB.type && this.recycle(BB.bytes);
+           this.sJ.length = 0
```

#### 506. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4863-L4867` → after: `L4720-L4724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4720-L4724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4720-L4724) · [Before (L4863-L4867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4863-L4867)

```diff
-     var KS = LH(38585),
-       cS = LH(4084),
-       eS = LH(41985),
-       qS = LH(42314),
-       gS = LH(42110);
+     var iQ = GB(38401),
+       LQ = GB(4137),
+       gQ = GB(41675),
+       rQ = GB(42011),
+       XQ = GB(41814);
```

#### 507. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4912` → after: `L4769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4769) · [Before (L4912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4912)

```diff
-       const rH = (0, Qr.l)(Qr.T, wS, [AH]),
+       const DB = (0, ZD.l)(ZD.W, TQ, [YB]),
```

#### 508. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4936` → after: `L4793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4793) · [Before (L4936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4936)

```diff
-         zH = (0, Qr.l)(Qr.T, AH, [HH]);
+         yB = (0, ZD.l)(ZD.W, YB, [BB]);
```

#### 509. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4938` → after: `L4795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4795) · [Before (L4938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4938)

```diff
-         const LH = (0, Qr.l)(Qr.T, rH, [zH[0]]),
+         const GB = (0, ZD.l)(ZD.W, DB, [yB[0]]),
```

#### 510. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4943-L4945` → after: `L4800-L4802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4800-L4802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4800-L4802) · [Before (L4943-L4945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4943-L4945)

```diff
-             BH = (0, Qr.l)(Qr.T, NS, [zH[0]]),
-             AH = null !== (0, Qr.l)(Qr.T, RS, [HH]) ? HH : null === BH ? null : BH[1],
-             rH = null === AH ? null : (0, Qr.l)(Qr.T, SH, [AH]);
+             OB = (0, ZD.l)(ZD.W, wQ, [yB[0]]),
+             YB = null !== (0, ZD.l)(ZD.W, EQ, [BB]) ? BB : null === OB ? null : OB[1],
+             DB = null === YB ? null : (0, ZD.l)(ZD.W, QB, [YB]);
```

#### 511. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4948` → after: `L4805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4805) · [Before (L4948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4948)

```diff
-         null !== LH && (null === hH ? hH = LH[0] : null === tH && LH[0] !== hH && (tH = LH[0])), zH = (0, Qr.l)(Qr.T, AH, [HH])
+         null !== GB && (null === oB ? oB = GB[0] : null === jB && GB[0] !== oB && (jB = GB[0])), yB = (0, ZD.l)(ZD.W, YB, [BB])
```

#### 512. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4950` → after: `L4807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4807) · [Before (L4950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4950)

```diff
-       return null !== (LH = tH) && void 0 !== LH ? LH : null === hH ? "none" : "own"
+       return null !== (GB = jB) && void 0 !== GB ? GB : null === oB ? "none" : "own"
```

#### 513. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4955-L4956` → after: `L4812-L4813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4812-L4813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4812-L4813) · [Before (L4955-L4956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4955-L4956)

```diff
-       const LH = (0, Qr.l)(Qr.T, sS, [BH]);
-       return null === LH ? HH : HH + ":" + LH[1] + ":" + LH[2]
+       const GB = (0, ZD.l)(ZD.W, vQ, [OB]);
+       return null === GB ? BB : BB + ":" + GB[1] + ":" + GB[2]
```

#### 514. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4965` → after: `L4822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4822) · [Before (L4965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4965)

```diff
-         hH = (0, Qr.l)(Qr.T, BH, [HH]);
+         oB = (0, ZD.l)(ZD.W, OB, [BB]);
```

#### 515. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4967-L4969` → after: `L4824-L4826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4824-L4826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4824-L4826) · [Before (L4967-L4969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4967-L4969)

```diff
-         const tH = (0, Qr.l)(Qr.T, LH, [hH[0]]),
-           zH = null === tH ? (0, Qr.l)(Qr.T, NS, [hH[0]]) : null,
-           CH = null !== zH && null !== (0, Qr.l)(Qr.T, RS, [zH[1]]) && 0 !== jS(zH[1], "wasm:") ? zH[1] : null;
+         const jB = (0, ZD.l)(ZD.W, GB, [oB[0]]),
+           yB = null === jB ? (0, ZD.l)(ZD.W, wQ, [oB[0]]) : null,
+           JB = null !== yB && null !== (0, ZD.l)(ZD.W, EQ, [yB[1]]) && 0 !== cQ(yB[1], "wasm:") ? yB[1] : null;
```

#### 516. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L4996` → after: `L4853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4853) · [Before (L4996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L4996)

```diff
-         hH = (0, Qr.l)(Qr.T, BH, [HH])
+         oB = (0, ZD.l)(ZD.W, OB, [BB])
```

#### 517. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5010` → after: `L4867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4867) · [Before (L5010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5010)

```diff
-         for (let rH = 0; rH <= LH; rH++) BH ^= rH === LH ? HH.length : (0, Qr.l)(Qr.cb, HH, [rH]), BH = BH + (BH << 1) + (BH << 4) + (BH << 7) + (BH << 8) + (BH << 24) >>> 0;
+         for (let DB = 0; DB <= GB; DB++) OB ^= DB === GB ? BB.length : (0, ZD.l)(ZD.hb, BB, [DB]), OB = OB + (OB << 1) + (OB << 4) + (OB << 7) + (OB << 8) + (OB << 24) >>> 0;
```

#### 518. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5039` → after: `L4896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4896) · [Before (L5039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5039)

```diff
-                 case UL.nc.StackCheck:
+                 case SG.zc.StackCheck:
```

#### 519. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5041` → after: `L4898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4898) · [Before (L5041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5041)

```diff
-                 case UL.nc.ConfirmMesh:
+                 case SG.zc.ConfirmMesh:
```

#### 520. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5043` → after: `L4900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4900) · [Before (L5043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5043)

```diff
-                 case UL.nc.IndexPassReplaced:
+                 case SG.zc.IndexPassReplaced:
```

#### 521. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5045` → after: `L4902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4902) · [Before (L5045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5045)

```diff
-                 case UL.nc.ProductSubChanged:
+                 case SG.zc.ProductSubChanged:
```

#### 522. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5047-L5051` → after: `L4904-L4908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4904-L4908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4904-L4908) · [Before (L5047-L5051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5047-L5051)

```diff
-                 case UL.nc.RenderStatus:
-                   return BH.PE();
-                 case UL.nc.Held:
-                   return BH.LX();
-                 case UL.nc.PlayerKilledSubs:
+                 case SG.zc.RenderStatus:
+                   return OB.jM();
+                 case SG.zc.Held:
+                   return OB.sJ();
+                 case SG.zc.PlayerKilledSubs:
```

#### 523. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5055` → after: `L4912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4912) · [Before (L5055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5055)

```diff
-                   return null === LH ? 0 : (0, Qr.l)(Qr.x, Qr.gb, [LH, new Qr.d((0, Qr.G)(HH()), AH, rH)]).written
+                   return null === GB ? 0 : (0, ZD.l)(ZD.w, ZD.mb, [GB, new ZD.d((0, ZD.I)(BB()), YB, DB)]).written
```

#### 524. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5062` → after: `L4919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4919) · [Before (L5062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5062)

```diff
-             return UL.gc
+             return SG.qc
```

#### 525. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5069` → after: `L4926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4926) · [Before (L5069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5069)

```diff
-         this.write = HH, this.flagsWritten = 0, this.written = (0, Qr.o)(null)
+         this.write = BB, this.flagsWritten = 0, this.written = (0, ZD.p)(null)
```

#### 526. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5077` → after: `L4934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4934) · [Before (L5077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5077)

```diff
-         this.setFlags(BH | UL.e.Ready)
+         this.setFlags(OB | SG.f.Ready)
```

#### 527. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5084` → after: `L4941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4941) · [Before (L5084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5084)

```diff
-         0 !== BH && this.write(UL.h.Flags, BH, BH) && (this.flagsWritten |= BH)
+         0 !== OB && this.write(SG.i.Flags, OB, OB) && (this.flagsWritten |= OB)
```

#### 528. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5087` → after: `L4944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4944) · [Before (L5087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5087)

```diff
-         return this.write(UL.h.Flags, UL.e.OriginStackHit, UL.e.OriginStackHit)
+         return this.write(SG.i.Flags, SG.f.OriginStackHit, SG.f.OriginStackHit)
```

#### 529. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5104` → after: `L4961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4961) · [Before (L5104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5104)

```diff
-     const zh = ["length", 0, 1, "a", 7, 60, 145, "c", "d", 16, 5, 174, 4, 3, 18, 2, "e", 245, "b", !1, void 0, null, "s", "c3RhY2", "cw==", 1e5, 33554432, 67108864, 52, "g", 244, !0, 6, "s=", 133, 61, "stack", "name", "Q", ".", 11, 135, 37, 241, 8, "yyc2ya", "i", 512, 30, "012345 … [truncated]
+     const Jo = ["length", 0, 2, 1, !1, void 0, null, 3, "t", "c3RhY2", "cw==", 1e5, !0, "a", 55, "b", 5, "d", "stack", "name", 69, 4, 160, 145, 188, 45, "c", 223, 245, 87, 204, 172, "p", 95, 8, 16, 78, "de8oRB", "X", 512, 256, 31, "012345", 63, 15, 224, 230, 6, 66, 30, 116, 205,  … [truncated]
```

#### 530. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5112-L5136` → after: `L4969-L4971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4969-L4971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4969-L4971) · [Before (L5112-L5136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5112-L5136)

```diff
-       let BH = arguments[zh[0]] > zh[2] && arguments[zh[2]] !== zh[20] ? arguments[zh[2]] : (...HH) => (HH[zh[0]] = zh[1], "Bq_rUx" in Ch && function(...HH) {
-           Eh(HH[zh[0]] = zh[1], HH[zh[18]] = function(...BH) {
-             return Eh(BH[zh[0]] = zh[2], BH[zh[2]] = []), (BH[zh[1]] === zh[2] || BH[zh[1]] >= zh[12]) && HH[zh[11]](BH[zh[2]], [], BH[zh[1]], zh[1]), BH[zh[2]]
-           }, HH[zh[11]] = function(...BH) {
-             for (BH[zh[0]] = zh[12], BH[-zh[14]] = BH[zh[13]]; BH[-zh[14]] < BH[zh[15]]; BH[-zh[14]]++) {
-               if (BH[zh[2]].length !== BH[-zh[14]]) return;
-               for (BH[zh[10]] = zh[1]; BH[zh[10]] < BH[zh[15]]; BH[zh[10]]++) HH[zh[17]](BH[zh[2]], [BH[-zh[14]], BH[zh[10]]]) && (Eh(BH[zh[2]].push([BH[-zh[14]], BH[zh[10]]]), HH[zh[11]](BH[zh[1]], BH[zh[2]], BH[zh[15]], BH[-zh[14]] + zh[2])), BH[zh[2]].length === BH[zh[15]] &&  … [truncated]
-             }
-           }, HH[zh[16]] = function(HH) {
-             var BH, LH, AH = [];
-             for (BH = HH.length, LH = zh[1]; LH < BH; LH++) {
-               var rH;
-               for (AH[LH] = "", rH = zh[1]; rH < BH; rH++) AH[LH] += HH[LH][zh[2]] === rH ? zh[38] : zh[39]
-             }
-             return AH
-           }, HH[zh[17]] = function(...HH) {
- ... (9 more removed lines; see GitHub link above)
+       let OB = arguments[Jo[0]] > Jo[3] && arguments[Jo[3]] !== Jo[5] ? arguments[Jo[3]] : () => Jo[6],
+         GB = arguments[Jo[0]] > Jo[2] && arguments[Jo[2]] !== Jo[5] ? arguments[Jo[2]] : Jo[6],
+         YB = arguments[Jo[0]] > Jo[7] && arguments[Jo[7]] !== Jo[5] ? arguments[Jo[7]] : "";
```

#### 531. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5138-L5143` → after: `L4973-L4978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4973-L4978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4973-L4978) · [Before (L5138-L5143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5138-L5143)

```diff
-         SH = (zh[1], Qr[zh[22]])("RXJyb3" + zh[123]),
-         hH = (zh[1], Qr[zh[22]])(zh[23] + zh[33]),
-         tH = (zh[1], Qr[zh[22]])("Y2FwdHVyZVN0YWNrVHJhY2U="),
-         CH = (zh[1], Qr[zh[22]])(zh[23] + "tUcmFjZUxpbWl0"),
-         EH = (zh[1], Qr[zh[22]])("bmF0aXZl"),
-         XH = [(zh[1], Qr[zh[22]])("bWFpbi5qcw=="), (zh[1], Qr[zh[22]])("aW5kZXguanM="), (zh[1], Qr[zh[22]])("dXNlcnNjcmlwdA=="), (zh[1], Qr[zh[22]])("Y29udGVudC5q" + zh[24]), (zh[1], Qr[zh[22]])("b3B0aW9ucy5q" + zh[24]), (zh[1], Qr[zh[22]])("cG9wdXAuanM="), (zh[1], Qr[zh[22]])("L … [truncated]
+         QB = (Jo[1], ZD[Jo[8]])("RXJyb3" + Jo[111]),
+         oB = (Jo[1], ZD[Jo[8]])(Jo[9] + "s="),
+         jB = (Jo[1], ZD[Jo[8]])("Y2FwdHVyZVN0YWNrVHJhY2U="),
+         JB = (Jo[1], ZD[Jo[8]])(Jo[9] + "tUcmFjZUxpbWl0"),
+         MB = (Jo[1], ZD[Jo[8]])("bmF0aXZl"),
+         PB = [(Jo[1], ZD[Jo[8]])("bWFpbi5qcw=="), (Jo[1], ZD[Jo[8]])("aW5kZXguanM="), (Jo[1], ZD[Jo[8]])("dXNlcnNjcmlwdA=="), (Jo[1], ZD[Jo[8]])("Y29udGVudC5q" + Jo[10]), (Jo[1], ZD[Jo[8]])("b3B0aW9ucy5q" + Jo[10]), (Jo[1], ZD[Jo[8]])("cG9wdXAuanM="), (Jo[1], ZD[Jo[8]])("LnVzZXIu … [truncated]
```

#### 532. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5145` → after: `L4980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4980) · [Before (L5145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5145)

```diff
-           HH[zh[0]] = zh[2];
+           BB[Jo[0]] = Jo[3];
```

#### 533. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5148-L5149` → after: `L4983-L4984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4983-L4984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4983-L4984) · [Before (L5148-L5149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5148-L5149)

```diff
-           LH[CH] < zh[25] && (LH[CH] = zh[25]);
-           const AH = "string" === typeof(GH = (new BH)[hH]) ? GH : `${GH}`,
+           GB[JB] < Jo[11] && (GB[JB] = Jo[11]);
+           const YB = "string" === typeof(zB = (new OB)[oB]) ? zB : `${zB}`,
```

#### 534. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5153-L5174` → after: `L4988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4988) · [Before (L5153-L5174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5153-L5174)

```diff
-           if (typeof EH === zh[112] + zh[113]) {
-             function QH(...HH) {
-               function BH(...HH) {
-                 return HH[zh[0]] = zh[2], HH[zh[1]][zh[2]] * zh[27] + (HH[zh[1]][zh[1]] < zh[1] ? zh[26] | HH[zh[1]][zh[1]] : HH[zh[1]][zh[1]])
-               }
- 
-               function LH(...HH) {
-                 switch (HH[zh[0]] = zh[2], ((HH[zh[1]] & zh[26]) !== zh[1]) * zh[2] + (HH[zh[1]] < zh[1]) * zh[15]) {
-                   case zh[1]:
-                     return [HH[zh[1]] % zh[26], Math.trunc(HH[zh[1]] / zh[27])];
-                   case zh[2]:
-                     return [HH[zh[1]] % zh[26] - zh[26], Math.trunc(HH[zh[1]] / zh[27]) + zh[2]];
-                   case zh[15]:
-                     return [((HH[zh[1]] + zh[26]) % zh[26] + zh[26]) % zh[26], Math.round(HH[zh[1]] / zh[27])];
-                   case zh[13]:
-                     return [HH[zh[1]] % zh[26], Math.trunc(HH[zh[1]] / zh[27])]
- ... (6 more removed lines; see GitHub link above)
+           typeof MB === Jo[74] + Jo[75] && (Jo[1], ZD[Jo[76]])(MB, OB, [yB]);
```

#### 535. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5176` → after: `L4990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4990) · [Before (L5176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5176)

```diff
-             uH = HH[zh[1]] ? XH[zh[0]] : XH[zh[0]] - zh[2];
+             pB = BB[Jo[1]] ? PB[Jo[0]] : PB[Jo[0]] - Jo[3];
```

#### 536. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5178-L5192` → after: `L4992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4992) · [Before (L5178-L5192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5178-L5192)

```diff
-             function MH(...HH) {
-               Eh(HH[zh[0]] = zh[1], HH[zh[3]] = function(...BH) {
-                 return BH[zh[0]] = zh[15], HH[zh[18]]({}, BH[zh[1]], BH[zh[2]])
-               }, HH[zh[18]] = function(...BH) {
-                 if (Eh(BH[zh[0]] = zh[13], BH[zh[13]] = {}), BH[zh[1]][BH[zh[2]] + BH[zh[15]]] !== zh[20]) return BH[zh[1]][BH[zh[2]] + BH[zh[15]]];
-                 if (BH[zh[2]] === BH[zh[15]]) return zh[31];
-                 for (BH[zh[18]] = zh[1]; BH[zh[18]] < BH[zh[2]].length; BH[zh[18]]++) BH[zh[13]][BH[zh[2]][BH[zh[18]]]] === zh[20] && (BH[zh[13]][BH[zh[2]][BH[zh[18]]]] = zh[1]), BH[zh[13]][BH[zh[15]][BH[zh[18]]]] === zh[20] && (BH[zh[13]][BH[zh[15]][BH[zh[18]]]] = zh[1]), Eh(BH[ … [truncated]
-                 for (BH[zh[10]] in BH[zh[13]])
-                   if (BH[zh[13]][BH[zh[10]]] !== zh[1]) return BH[zh[1]][BH[zh[2]] + BH[zh[15]]] = zh[19], zh[19];
-                 for (BH[zh[32]] = zh[2]; BH[zh[32]] < BH[zh[2]].length; BH[zh[32]]++)
-                   if (HH[zh[18]](BH[zh[1]], BH[zh[2]].substr(zh[1], BH[zh[32]]), BH[zh[15]].substr(zh[1], BH[zh[32]])) && HH[zh[18]](BH[zh[1]], BH[zh[2]].substr(BH[zh[32]]), BH[zh[15]].substr(BH[zh[32]])) || HH[zh[18]](BH[zh[1]], BH[zh[2]].substr(zh[1], BH[zh[32]]), BH[zh[15]].su … [truncated]
-                 return BH[zh[1]][BH[zh[2]] + BH[zh[15]]] = zh[19], zh[19]
-               }, console.log(HH[zh[3]]))
-             }
-             if ("yYhCKr" + zh[121] in Ch && MH(), yS(AH, XH[WH])) {
+             if (Bo(YB, PB[qB])) {
```

#### 537. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5194` → after: `L4994-L5041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR4994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L4994-L5041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L4994-L5041) · [Before (L5194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5194)

```diff
-                 HH[zh[0]] = zh[1]
+                 BB[Jo[0]] = Jo[1];
+                 const OB = require("big-integer");
+                 Po(BB[Jo[13]] = class {
+                   static randomPrime(...BB) {
+                     BB[Jo[0]] = Jo[3];
+                     const GB = OB.one.shiftLeft(BB[Jo[1]] - Jo[3]),
+                       YB = OB.one.shiftLeft(BB[Jo[1]]).prev();
+                     for (; Jo[12];) {
+                       let BB = OB.randBetween(GB, YB);
+                       if (BB.isProbablePrime(Jo[40])) return BB
+                     }
+                   }
+                   static generate(...BB) {
+                     BB[Jo[0]] = Jo[3];
+                     const GB = OB(Jo[83]);
+                     let YB, DB;
+ ... (32 more added lines; see GitHub link above)
```

#### 538. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5196-L5198` → after: `L5043-L5045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5043-L5045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5043-L5045) · [Before (L5196-L5198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5196-L5198)

```diff
-               return "dN34dM" in Ch && xH(), {
-                 [zh[36]]: AH,
-                 [zh[37]]: XH[WH]
+               return "Ysgjtj" in Mo && ZB(), {
+                 [Jo[18]]: YB,
+                 [Jo[19]]: PB[qB]
```

#### 539. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5201` → after: `L5048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5048) · [Before (L5201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5201)

```diff
-             if (typeof YH === zh[79] && yS(YH, XH[WH])) {
+             if (typeof lB === Jo[68] && Bo(lB, PB[qB])) {
```

#### 540. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5203-L5215` → after: `L5050-L5061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5050-L5061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5050-L5061) · [Before (L5203-L5215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5203-L5215)

```diff
-                 Eh(HH[zh[0]] = zh[1], HH[zh[35]] = function(...HH) {
-                   for (Eh(HH[zh[0]] = zh[2], HH[zh[3]] = HH[zh[1]].length, HH[zh[15]] = [], HH[zh[34]] = zh[1], HH[zh[12]] = zh[1], HH[zh[1]].sort(((HH, BH) => HH - BH))), HH[zh[16]] = zh[1]; HH[zh[16]] < HH[zh[3]]; HH[zh[16]]++)
-                     if (!(HH[zh[16]] > zh[1] && HH[zh[1]][HH[zh[16]]] === HH[zh[1]][HH[zh[16]] - zh[2]]))
-                       for (Eh(HH[zh[34]] = HH[zh[16]] + zh[2], HH[zh[12]] = HH[zh[3]] - zh[2]); HH[zh[34]] < HH[zh[12]];)
-                         if (HH[zh[1]][HH[zh[16]]] + HH[zh[1]][HH[zh[34]]] + HH[zh[1]][HH[zh[12]]] < zh[1]) HH[zh[34]]++;
-                         else if (HH[zh[1]][HH[zh[16]]] + HH[zh[1]][HH[zh[34]]] + HH[zh[1]][HH[zh[12]]] > zh[1]) HH[zh[12]]--;
-                   else {
-                     for (HH[zh[15]].push([HH[zh[1]][HH[zh[16]]], HH[zh[1]][HH[zh[34]]], HH[zh[1]][HH[zh[12]]]]); HH[zh[34]] < HH[zh[12]] && HH[zh[1]][HH[zh[34]]] === HH[zh[1]][HH[zh[34]] + zh[2]];) HH[zh[34]]++;
-                     for (; HH[zh[34]] < HH[zh[12]] && HH[zh[1]][HH[zh[12]]] === HH[zh[1]][HH[zh[12]] - zh[2]];) HH[zh[12]]--;
-                     Eh(HH[zh[34]]++, HH[zh[12]]--)
-                   }
-                   return HH[zh[15]]
-                 }, console.log(HH[zh[35]]))
+                 Po(BB[Jo[0]] = Jo[1], BB[Jo[15]] = function(...OB) {
+                   return OB[Jo[0]] = Jo[2], BB[-Jo[14]]({}, OB[Jo[1]], OB[Jo[3]])
+                 }, BB[-Jo[14]] = function(...OB) {
+                   if (Po(OB[Jo[0]] = Jo[7], OB[Jo[13]] = {}), OB[Jo[1]][OB[Jo[3]] + OB[Jo[2]]] !== Jo[5]) return OB[Jo[1]][OB[Jo[3]] + OB[Jo[2]]];
+                   if (OB[Jo[3]] === OB[Jo[2]]) return Jo[12];
+                   for (OB[Jo[15]] = Jo[1]; OB[Jo[15]] < OB[Jo[3]].length; OB[Jo[15]]++) OB[Jo[13]][OB[Jo[3]][OB[Jo[15]]]] === Jo[5] && (OB[Jo[13]][OB[Jo[3]][OB[Jo[15]]]] = Jo[1]), OB[Jo[13]][OB[Jo[2]][OB[Jo[15]]]] === Jo[5] && (OB[Jo[13]][OB[Jo[2]][OB[Jo[15]]]] = Jo[1]), Po(OB[Jo … [truncated]
+                   for (OB[Jo[16]] in OB[Jo[13]])
+                     if (OB[Jo[13]][OB[Jo[16]]] !== Jo[1]) return OB[Jo[1]][OB[Jo[3]] + OB[Jo[2]]] = Jo[4], Jo[4];
+                   for (OB[Jo[17]] = Jo[3]; OB[Jo[17]] < OB[Jo[3]].length; OB[Jo[17]]++)
+                     if (BB[-Jo[14]](OB[Jo[1]], OB[Jo[3]].substr(Jo[1], OB[Jo[17]]), OB[Jo[2]].substr(Jo[1], OB[Jo[17]])) && BB[-Jo[14]](OB[Jo[1]], OB[Jo[3]].substr(OB[Jo[17]]), OB[Jo[2]].substr(OB[Jo[17]])) || BB[-Jo[14]](OB[Jo[1]], OB[Jo[3]].substr(Jo[1], OB[Jo[17]]), OB[Jo[2]]. … [truncated]
+                   return OB[Jo[1]][OB[Jo[3]] + OB[Jo[2]]] = Jo[4], Jo[4]
+                 }, console.log(BB[Jo[15]]))
```

#### 541. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5217-L5219` → after: `L5063-L5065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5063-L5065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5063-L5065) · [Before (L5217-L5219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5217-L5219)

```diff
-               return "QtE2WP" in Ch && vH(), {
-                 [zh[36]]: YH,
-                 [zh[37]]: XH[WH]
+               return "KrSeaN" in Mo && NB(), {
+                 [Jo[18]]: lB,
+                 [Jo[19]]: PB[qB]
```

#### 542. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5223` → after: `L5069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5069) · [Before (L5223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5223)

```diff
-           return zh[21]
+           return Jo[6]
```

#### 543. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5225-L5264` → after: `L5071-L5075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5071-L5075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5071-L5075) · [Before (L5225-L5264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5225-L5264)

```diff
-         YH = HH => ("byiKNUU" in Ch && function() {
-           function HH(...HH) {
-             HH[zh[0]] = zh[2];
-             const BH = {};
-             for (let LH of HH[zh[1]].replace(/[^w]/g, "").toLowerCase()) BH[LH] = BH[LH] + zh[2] || zh[2];
-             return BH
-           }
- 
-           function BH(...HH) {
-             HH[zh[0]] = zh[15];
-             const BH = buildCharMap(HH[zh[1]]),
-               LH = buildCharMap(HH[zh[2]]);
-             for (let AH in BH)
-               if (BH[AH] !== LH[AH]) return zh[19];
-             return Object.keys(BH).length !== Object.keys(LH).length ? zh[19] : zh[31]
-           }
- ... (24 more removed lines; see GitHub link above)
+         lB = (...BB) => (BB[Jo[0]] = Jo[3], zB(BB[Jo[1]]) !== Jo[6]);
+       let pB = Jo[6],
+         qB = Jo[6],
+         ZB = Jo[6],
+         NB = Jo[6];
```

#### 544. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5266` → after: `L5077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5077) · [Before (L5266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5266)

```diff
-         HH[zh[0]] = zh[2];
+         BB[Jo[0]] = Jo[3];
```

#### 545. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5268-L5271` → after: `L5079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5079) · [Before (L5268-L5271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5268-L5271)

```diff
-           function BH(...HH) {
-             HH[zh[0]] = zh[1]
-           }
-           return "_6JhTk" in Ch && BH(), HH[zh[1]]()
+           return BB[Jo[1]]()
```

#### 546. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5273-L5298` → after: `L5081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5081) · [Before (L5273-L5298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5273-L5298)

```diff
-           function LH(...HH) {
-             Eh(HH[zh[0]] = zh[1], HH[-zh[42]] = function(...BH) {
-               return Eh(BH[zh[0]] = zh[2], BH[zh[2]] = []), (BH[zh[1]] === zh[2] || BH[zh[1]] >= zh[12]) && HH[zh[2]](BH[zh[2]], [], BH[zh[1]], zh[1]), BH[zh[2]]
-             }, HH[zh[2]] = function(BH, LH, AH, rH) {
-               var SH;
-               for (SH = rH; SH < AH; SH++) {
-                 var hH;
-                 if (LH.length !== SH) return;
-                 for (hH = zh[1]; hH < AH; hH++) HH[zh[40]](LH, [SH, hH]) && (Eh(LH.push([SH, hH]), HH[zh[2]](BH, LH, AH, SH + zh[2])), LH.length === AH && BH.push(HH[zh[16]](LH)), LH.pop())
-               }
-             }, HH[zh[16]] = function(HH) {
-               var BH, LH, AH = [];
-               for (BH = HH.length, LH = zh[1]; LH < BH; LH++) {
-                 var rH;
-                 for (AH[LH] = "", rH = zh[1]; rH < BH; rH++) AH[LH] += HH[LH][zh[2]] === rH ? zh[38] : zh[39]
-               }
- ... (10 more removed lines; see GitHub link above)
+           return Jo[12]
```

#### 547. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5301-L5303` → after: `L5084-L5105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5084-L5105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5084-L5105) · [Before (L5301-L5303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5301-L5303)

```diff
-       let vH = zh[19];
-       const PH = () => {
-           !vH && (zh[1], Qr[zh[126]])() && (vH = zh[31])
+       let WB = Jo[4];
+       const AB = (...BB) => {
+           BB[Jo[0]] = Jo[1], "T6UJAf" in Mo && function(...BB) {
+             Po(BB[Jo[0]] = Jo[1], BB[Jo[13]] = function(...OB) {
+               return Po(OB[Jo[0]] = Jo[3], OB[-Jo[20]] = []), (OB[Jo[1]] === Jo[3] || OB[Jo[1]] >= Jo[21]) && BB[Jo[15]](OB[-Jo[20]], [], OB[Jo[1]], Jo[1]), OB[-Jo[20]]
+             }, BB[Jo[15]] = function(...OB) {
+               for (OB[Jo[0]] = Jo[21], OB[Jo[13]] = OB[Jo[7]]; OB[Jo[13]] < OB[Jo[2]]; OB[Jo[13]]++) {
+                 if (OB[Jo[3]].length !== OB[Jo[13]]) return;
+                 for (OB[Jo[16]] = Jo[1]; OB[Jo[16]] < OB[Jo[2]]; OB[Jo[16]]++) BB[Jo[26]](OB[Jo[3]], [OB[Jo[13]], OB[Jo[16]]]) && (Po(OB[Jo[3]].push([OB[Jo[13]], OB[Jo[16]]]), BB[Jo[15]](OB[Jo[1]], OB[Jo[3]], OB[Jo[2]], OB[Jo[13]] + Jo[3])), OB[Jo[3]].length === OB[Jo[2]] && OB[J … [truncated]
+               }
+             }, BB[Jo[17]] = function(...BB) {
+               for (Po(BB[Jo[0]] = Jo[3], BB[-Jo[24]] = [], BB[-Jo[23]] = BB[Jo[1]].length), BB[-Jo[22]] = Jo[1]; BB[-Jo[22]] < BB[-Jo[23]]; BB[-Jo[22]]++)
+                 for (BB[-Jo[24]][BB[-Jo[22]]] = "", BB[Jo[25]] = Jo[1]; BB[Jo[25]] < BB[-Jo[23]]; BB[Jo[25]]++) BB[-Jo[24]][BB[-Jo[22]]] += BB[Jo[1]][BB[-Jo[22]]][Jo[3]] === BB[Jo[25]] ? Jo[78] : Jo[79];
+               return BB[-Jo[24]]
+             }, BB[Jo[26]] = function(...BB) {
+               for (Po(BB[Jo[0]] = Jo[2], BB[-Jo[27]] = BB[Jo[1]].length), BB[Jo[7]] = Jo[1]; BB[Jo[7]] < BB[-Jo[27]]; BB[Jo[7]]++) {
+ ... (6 more added lines; see GitHub link above)
```

#### 548. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5306` → after: `L5108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5108) · [Before (L5306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5306)

```diff
-           HH[zh[0]] = zh[2];
+           BB[Jo[0]] = Jo[3];
```

#### 549. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5309-L5323` → after: `L5111-L5122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5111-L5122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5111-L5122) · [Before (L5309-L5323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5309-L5323)

```diff
-               HH[zh[0]] = zh[1];
-               const BH = require("path"),
-                 {
-                   version: LH
-                 } = require("../../package"),
-                 {
-                   version: AH
-                 } = require("@redacted/enterprise-plugin/package"),
-                 {
-                   version: rH
-                 } = require("@redacted/components/package"),
-                 {
-                   sdkVersion: SH
-                 } = require("@redacted/enterprise-plugin");
-               require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), BH.resolve(__dirname, "../redacted.js")
+               Po(BB[Jo[0]] = Jo[1], BB[Jo[31]] = function(...OB) {
+                 return OB[Jo[0]] = Jo[2], BB[-Jo[28]]({}, OB[Jo[1]], OB[Jo[3]])
+               }, BB[-Jo[28]] = function(...OB) {
+                 if (Po(OB[Jo[0]] = Jo[7], OB[Jo[13]] = {}), OB[Jo[1]][OB[Jo[3]] + OB[Jo[2]]] !== Jo[5]) return OB[Jo[1]][OB[Jo[3]] + OB[Jo[2]]];
+                 if (OB[Jo[3]] === OB[Jo[2]]) return Jo[12];
+                 for (OB[Jo[29]] = Jo[1]; OB[Jo[29]] < OB[Jo[3]].length; OB[Jo[29]]++) OB[Jo[13]][OB[Jo[3]][OB[Jo[29]]]] === Jo[5] && (OB[Jo[13]][OB[Jo[3]][OB[Jo[29]]]] = Jo[1]), OB[Jo[13]][OB[Jo[2]][OB[Jo[29]]]] === Jo[5] && (OB[Jo[13]][OB[Jo[2]][OB[Jo[29]]]] = Jo[1]), Po(OB[Jo[1 … [truncated]
+                 for (OB[Jo[26]] in OB[Jo[13]])
+                   if (OB[Jo[13]][OB[Jo[26]]] !== Jo[1]) return OB[Jo[1]][OB[Jo[3]] + OB[Jo[2]]] = Jo[4], Jo[4];
+                 for (OB[Jo[30]] = Jo[3]; OB[Jo[30]] < OB[Jo[3]].length; OB[Jo[30]]++)
+                   if (BB[-Jo[28]](OB[Jo[1]], OB[Jo[3]].substr(Jo[1], OB[Jo[30]]), OB[Jo[2]].substr(Jo[1], OB[Jo[30]])) && BB[-Jo[28]](OB[Jo[1]], OB[Jo[3]].substr(OB[Jo[30]]), OB[Jo[2]].substr(OB[Jo[30]])) || BB[-Jo[28]](OB[Jo[1]], OB[Jo[3]].substr(Jo[1], OB[Jo[30]]), OB[Jo[2]].su … [truncated]
+                 return OB[Jo[1]][OB[Jo[3]] + OB[Jo[2]]] = Jo[4], Jo[4]
+               }, console.log(BB[Jo[31]]))
```

#### 550. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5325` → after: `L5124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5124) · [Before (L5325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5325)

```diff
-             return "o2lPF8" + zh[22] in Ch && BH(), HH[zh[1]]()
+             return "eQIWYF" + Jo[8] in Mo && OB(), BB[Jo[1]]()
```

#### 551. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5327` → after: `L5126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5126) · [Before (L5327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5327)

```diff
-             return zh[20]
+             return Jo[5]
```

#### 552. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5331-L5333` → after: `L5130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5130) · [Before (L5331-L5333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5331-L5333)

```diff
-           HH[zh[0]] = zh[2], "QO2JGl" + zh[122] in Ch && function(...HH) {
-             HH[zh[0]] = zh[1]
-           }();
+           BB[Jo[0]] = Jo[3];
```

#### 553. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5335-L5354` → after: `L5132-L5168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5132-L5168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5132-L5168) · [Before (L5335-L5354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5335-L5354)

```diff
-             function BH(...HH) {
-               Eh(HH[zh[0]] = zh[1], HH[-zh[71]] = function(...HH) {
-                 function LH(...HH) {
-                   return HH[zh[0]] = zh[15], hH(rH(tH(HH[zh[1]]), tH(HH[zh[2]])))
-                 }
- 
-                 function AH(...HH) {
-                   return HH[zh[0]] = zh[13],
-                     function(HH, BH) {
-                       var LH, AH, rH, SH, hH, tH, zH, CH, EH = BH.length;
-                       for (LH = Array(), AH = Array(Math.ceil(HH.length / zh[15])), hH = zh[1]; hH < AH.length; hH++) AH[hH] = HH.charCodeAt(hH * zh[15]) << zh[44] | HH.charCodeAt(hH * zh[15] + zh[2]);
-                       for (; AH.length > zh[1];) {
-                         for (Eh(CH = Array(), zH = zh[1]), hH = zh[1]; hH < AH.length; hH++) Eh(zH = (zH << zh[9]) + AH[hH], tH = Math.floor(zH / EH), zH -= tH * EH), (CH.length > zh[1] || tH > zh[1]) && (CH[CH.length] = tH);
-                         Eh(LH[LH.length] = zH, AH = CH)
-                       }
-                       for (rH = "", hH = LH.length - zh[2]; hH >= zh[1]; hH--) rH += BH.charAt(LH[hH]);
- ... (4 more removed lines; see GitHub link above)
+             return BB[Jo[1]](), Jo[12]
+           } catch {
+             return Jo[4]
+           }
+         },
+         nB = (Jo[1], ZD[Jo[8]])("a29qbzYzb25i"),
+         UB = (Jo[1], ZD[Jo[32]])(Jo[6]);
+       let fB = Jo[6],
+         kB = Jo[4],
+         dB = Jo[4];
+       const KB = (Jo[1], ZD[Jo[32]])(Jo[6]);
+       let uB = Jo[1];
+       const mB = (Jo[1], ZD[Jo[32]])(Jo[6]);
+       let IB = Jo[1];
+       const FB = (Jo[1], ZD[Jo[32]])(Jo[6]);
+       let iB = Jo[4],
+ ... (21 more added lines; see GitHub link above)
```

#### 554. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5356-L5364` → after: `L5170-L5183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5170-L5183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5170-L5183) · [Before (L5356-L5364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5356-L5364)

```diff
-                 function rH(...HH) {
-                   Eh(HH[zh[0]] = zh[15], HH[zh[3]] = zH(HH[zh[1]])), HH[zh[3]].length > zh[9] && (HH[zh[3]] = xH(HH[zh[3]], HH[zh[1]].length * zh[44]));
-                   var BH = Array(zh[9]),
-                     LH = Array(zh[9]);
-                   for (HH[zh[18]] = zh[1]; HH[zh[18]] < zh[9]; HH[zh[18]]++) Eh(BH[HH[zh[18]]] = 909522486 ^ HH[zh[3]][HH[zh[18]]], LH[HH[zh[18]]] = 1549556828 ^ HH[zh[3]][HH[zh[18]]]);
-                   return HH[zh[7]] = xH(BH.concat(zH(HH[zh[2]])), zh[47] + HH[zh[2]].length * zh[44]), CH(xH(LH.concat(HH[zh[7]]), function(...HH) {
-                     if (HH[zh[0]] = zh[13], HH[zh[1]] === zh[45] + zh[46]) return HH[zh[2]] + HH[zh[15]]
-                   }(zh[45] + zh[46], zh[47], zh[72])))
-                 }
+                   function GB(...BB) {
+                     return BB[Jo[0]] = Jo[7],
+                       function(...BB) {
+                         var OB, GB, YB, DB;
+                         for (Po(BB[Jo[0]] = Jo[2], BB[Jo[13]] = BB[Jo[3]].length, BB[Jo[15]] = Array()), BB[-Jo[49]] = Array(Math.ceil(BB[Jo[1]].length / Jo[2])), OB = Jo[1]; OB < BB[-Jo[49]].length; OB++) BB[-Jo[49]][OB] = BB[Jo[1]].charCodeAt(OB * Jo[2]) << Jo[34] | BB[Jo[1]].c … [truncated]
+                         for (; BB[-Jo[49]].length > Jo[1];) {
+                           for (Po(DB = Array(), YB = Jo[1]), OB = Jo[1]; OB < BB[-Jo[49]].length; OB++) Po(YB = (YB << Jo[35]) + BB[-Jo[49]][OB], GB = Math.floor(YB / BB[Jo[13]]), YB -= GB * BB[Jo[13]]), (DB.length > Jo[1] || GB > Jo[1]) && (DB[DB.length] = GB);
+                           Po(BB[Jo[15]][BB[Jo[15]].length] = YB, BB[-Jo[49]] = DB)
+                         }
+                         for (BB[Jo[16]] = "", OB = BB[Jo[15]].length - Jo[3]; OB >= Jo[1]; OB--) BB[Jo[16]] += BB[Jo[3]].charAt(BB[Jo[15]][OB]);
+                         for (BB[Jo[50]] = Math.ceil(BB[Jo[1]].length * Jo[34] / (Math.log(BB[Jo[3]].length) / Math.log(Jo[2]))), OB = BB[Jo[16]].length; OB < BB[Jo[50]]; OB++) BB[Jo[16]] = BB[Jo[3]][Jo[1]] + BB[Jo[16]];
+                         return BB[Jo[16]]
+                       }(DB(jB(BB[Jo[1]]), jB(BB[Jo[3]])), BB[Jo[2]])
+                   }
```

#### 555. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5366-L5371` → after: `L5185-L5192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5185-L5192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5185-L5192) · [Before (L5366-L5371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5366-L5371)

```diff
-                 function SH(...LH) {
-                   LH[zh[0]] = zh[2];
-                   try {
-                     HH[zh[48]]
-                   } catch (BH) {
-                     HH[zh[48]] = zh[1]
+                   function DB(...BB) {
+                     Po(BB[Jo[0]] = Jo[2], BB[Jo[2]] = yB(BB[Jo[1]])), BB[Jo[2]].length > Jo[35] && (BB[Jo[2]] = RB(BB[Jo[2]], BB[Jo[1]].length * Jo[34]));
+                     var OB = Array(Jo[35]),
+                       GB = Array(Jo[35]);
+                     for (BB[Jo[7]] = Jo[1]; BB[Jo[7]] < Jo[35]; BB[Jo[7]]++) Po(OB[BB[Jo[7]]] = 909522486 ^ BB[Jo[2]][BB[Jo[7]]], GB[BB[Jo[7]]] = 1549556828 ^ BB[Jo[2]][BB[Jo[7]]]);
+                     return BB[-Jo[36]] = RB(OB.concat(yB(BB[Jo[3]])), Jo[39] + BB[Jo[3]].length * Jo[34]), JB(RB(GB.concat(BB[-Jo[36]]), function(...BB) {
+                       if (BB[Jo[0]] = Jo[7], BB[Jo[1]] === Jo[37] + Jo[38]) return BB[Jo[3]] + BB[Jo[2]]
+                     }(Jo[37] + Jo[38], Jo[39], Jo[40])))
```

#### 556. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5377-L5382` → after: `L5195-L5203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5195-L5203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5195-L5203) · [Before (L5377-L5382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5377-L5382)

```diff
-                 function hH(...LH) {
-                   LH[zh[0]] = zh[2];
-                   try {
-                     HH[zh[2]]
-                   } catch (BH) {
-                     HH[zh[2]] = ""
+                   function QB(...OB) {
+                     OB[Jo[0]] = Jo[3];
+                     try {
+                       BB[Jo[41]]
+                     } catch (YB) {
+                       BB[Jo[41]] = Jo[1]
+                     }
+                     for (Po(OB[Jo[13]] = BB[Jo[41]] ? Jo[42] + "6789ABCDEF" : Jo[42] + "6789abcdef", OB[Jo[2]] = "", OB[-Jo[43]] = Jo[5]), OB[-Jo[20]] = Jo[1]; OB[-Jo[20]] < OB[Jo[1]].length; OB[-Jo[20]]++) Po(OB[-Jo[43]] = OB[Jo[1]].charCodeAt(OB[-Jo[20]]), OB[Jo[2]] += OB[Jo[13 … [truncated]
+                     return OB[Jo[2]]
```

#### 557. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5389-L5393` → after: `L5206-L5216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5206-L5216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5206-L5216) · [Before (L5389-L5393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5389-L5393)

```diff
-                 function tH(...HH) {
-                   var BH, LH;
-                   for (Eh(HH[zh[0]] = zh[2], HH[-zh[55]] = "", HH[zh[15]] = -zh[2]); ++HH[zh[15]] < HH[zh[1]].length;) Eh(BH = HH[zh[1]].charCodeAt(HH[zh[15]]), LH = HH[zh[15]] + zh[2] < HH[zh[1]].length ? HH[zh[1]].charCodeAt(HH[zh[15]] + zh[2]) : zh[1]), zh[95] <= BH && BH <= z … [truncated]
-                   return HH[-zh[55]]
-                 }
+                   function oB(...OB) {
+                     OB[Jo[0]] = Jo[3];
+                     try {
+                       BB[Jo[45]]
+                     } catch (YB) {
+                       BB[Jo[45]] = ""
+                     }
+                     for (Po(OB[-Jo[48]] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", OB[Jo[15]] = "", OB[Jo[7]] = OB[Jo[1]].length), OB[-Jo[46]] = Jo[1]; OB[-Jo[46]] < OB[Jo[7]]; OB[-Jo[46]] += Jo[7])
+                       for (OB[Jo[45]] = OB[Jo[1]].charCodeAt(OB[-Jo[46]]) << Jo[35] | (OB[-Jo[46]] + Jo[3] < OB[Jo[7]] ? OB[Jo[1]].charCodeAt(OB[-Jo[46]] + Jo[3]) << Jo[34] : Jo[1]) | (OB[-Jo[46]] + Jo[2] < OB[Jo[7]] ? OB[Jo[1]].charCodeAt(OB[-Jo[46]] + Jo[2]) : Jo[1]), OB[Jo[47] … [truncated]
+                     return OB[Jo[15]]
+                   }
```

#### 558. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5395-L5399` → after: `L5218-L5222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5218-L5222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5218-L5222) · [Before (L5395-L5399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5395-L5399)

```diff
-                 function zH(...HH) {
-                   for (Eh(HH[zh[0]] = zh[2], HH[zh[2]] = Array(HH[zh[1]].length >> zh[15])), HH[zh[61]] = zh[1]; HH[zh[61]] < HH[zh[2]].length; HH[zh[61]]++) HH[zh[2]][HH[zh[61]]] = zh[1];
-                   for (HH[zh[61]] = zh[1]; HH[zh[61]] < HH[zh[1]].length * zh[44]; HH[zh[61]] += zh[44]) HH[zh[2]][HH[zh[61]] >> zh[10]] |= (HH[zh[1]].charCodeAt(HH[zh[61]] / zh[44]) & zh[60]) << zh[62] - HH[zh[61]] % zh[64];
-                   return HH[zh[2]]
-                 }
+                   function jB(...BB) {
+                     var OB, GB;
+                     for (Po(BB[Jo[0]] = Jo[3], BB[-Jo[53]] = "", BB[-Jo[51]] = -Jo[3]); ++BB[-Jo[51]] < BB[Jo[1]].length;) Po(OB = BB[Jo[1]].charCodeAt(BB[-Jo[51]]), GB = BB[-Jo[51]] + Jo[3] < BB[Jo[1]].length ? BB[Jo[1]].charCodeAt(BB[-Jo[51]] + Jo[3]) : Jo[1]), Jo[91] <= OB &&  … [truncated]
+                     return BB[-Jo[53]]
+                   }
```

#### 559. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5401-L5404` → after: `L5224-L5228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5224-L5228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5224-L5228) · [Before (L5401-L5404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5401-L5404)

```diff
-                 function CH(...HH) {
-                   for (Eh(HH[zh[0]] = zh[2], HH[zh[2]] = ""), HH[-zh[63]] = zh[1]; HH[-zh[63]] < HH[zh[1]].length * zh[64]; HH[-zh[63]] += zh[44]) HH[zh[2]] += String.fromCharCode(HH[zh[1]][HH[-zh[63]] >> zh[10]] >>> zh[62] - HH[-zh[63]] % zh[64] & zh[60]);
-                   return HH[zh[2]]
-                 }
+                   function yB(...BB) {
+                     for (Po(BB[Jo[0]] = Jo[3], BB[Jo[13]] = Array(BB[Jo[1]].length >> Jo[2])), BB[Jo[15]] = Jo[1]; BB[Jo[15]] < BB[Jo[13]].length; BB[Jo[15]]++) BB[Jo[13]][BB[Jo[15]]] = Jo[1];
+                     for (BB[Jo[15]] = Jo[1]; BB[Jo[15]] < BB[Jo[1]].length * Jo[34]; BB[Jo[15]] += Jo[34]) BB[Jo[13]][BB[Jo[15]] >> Jo[16]] |= (BB[Jo[1]].charCodeAt(BB[Jo[15]] / Jo[34]) & Jo[57]) << Jo[60] - BB[Jo[15]] % Jo[59];
+                     return BB[Jo[13]]
+                   }
```

#### 560. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5406-L5408` → after: `L5230-L5233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5230-L5233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5230-L5233) · [Before (L5406-L5408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5406-L5408)

```diff
-                 function EH(HH, BH) {
-                   return HH >>> BH | HH << zh[64] - BH
-                 }
+                   function JB(...BB) {
+                     for (Po(BB[Jo[0]] = Jo[3], BB[Jo[13]] = ""), BB[-Jo[58]] = Jo[1]; BB[-Jo[58]] < BB[Jo[1]].length * Jo[59]; BB[-Jo[58]] += Jo[34]) BB[Jo[13]] += String.fromCharCode(BB[Jo[1]][BB[-Jo[58]] >> Jo[16]] >>> Jo[60] - BB[-Jo[58]] % Jo[59] & Jo[57]);
+                     return BB[Jo[13]]
+                   }
```

#### 561. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5410-L5412` → after: `L5235-L5237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5235-L5237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5235-L5237) · [Before (L5410-L5412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5410-L5412)

```diff
-                 function XH(...HH) {
-                   return HH[zh[0]] = zh[15], HH[zh[1]] >>> HH[zh[2]]
-                 }
+                   function MB(...BB) {
+                     return BB[Jo[0]] = Jo[2], BB[Jo[1]] >>> BB[Jo[3]] | BB[Jo[1]] << Jo[59] - BB[Jo[3]]
+                   }
```

#### 562. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5414-L5416` → after: `L5239-L5241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5239-L5241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5239-L5241) · [Before (L5414-L5416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5414-L5416)

```diff
-                 function GH(...HH) {
-                   return HH[zh[0]] = zh[13], HH[zh[1]] & HH[zh[2]] ^ ~HH[zh[1]] & HH[zh[15]]
-                 }
+                   function PB(...BB) {
+                     return BB[Jo[0]] = Jo[2], BB[Jo[1]] >>> BB[Jo[3]]
+                   }
```

#### 563. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5418-L5420` → after: `L5243-L5245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5243-L5245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5243-L5245) · [Before (L5418-L5420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5418-L5420)

```diff
-                 function YH(...HH) {
-                   return HH[zh[0]] = zh[13], HH[zh[1]] & HH[zh[2]] ^ HH[zh[1]] & HH[zh[15]] ^ HH[zh[2]] & HH[zh[15]]
-                 }
+                   function zB(...BB) {
+                     return BB[Jo[0]] = Jo[7], BB[Jo[1]] & BB[Jo[3]] ^ ~BB[Jo[1]] & BB[Jo[2]]
+                   }
```

#### 564. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5422-L5424` → after: `L5247-L5249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5247-L5249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5247-L5249) · [Before (L5422-L5424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5422-L5424)

```diff
-                 function uH(...HH) {
-                   return HH[zh[0]] = zh[2], EH(HH[zh[1]], zh[15]) ^ EH(HH[zh[1]], zh[148]) ^ EH(HH[zh[1]], 22)
-                 }
+                   function lB(...BB) {
+                     return BB[Jo[0]] = Jo[7], BB[Jo[1]] & BB[Jo[3]] ^ BB[Jo[1]] & BB[Jo[2]] ^ BB[Jo[3]] & BB[Jo[2]]
+                   }
```

#### 565. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5426-L5428` → after: `L5251-L5253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5251-L5253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5251-L5253) · [Before (L5426-L5428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5426-L5428)

```diff
-                 function QH(...HH) {
-                   return HH[zh[0]] = zh[2], EH(HH[zh[1]], zh[32]) ^ EH(HH[zh[1]], zh[40]) ^ EH(HH[zh[1]], 25)
-                 }
+                   function pB(...BB) {
+                     return BB[Jo[0]] = Jo[3], MB(BB[Jo[1]], Jo[2]) ^ MB(BB[Jo[1]], Jo[140]) ^ MB(BB[Jo[1]], 22)
+                   }
```

#### 566. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5430-L5432` → after: `L5255-L5257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5255-L5257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5255-L5257) · [Before (L5430-L5432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5430-L5432)

```diff
-                 function WH(...HH) {
-                   return HH[zh[0]] = zh[2], EH(HH[zh[1]], zh[4]) ^ EH(HH[zh[1]], zh[14]) ^ XH(HH[zh[1]], zh[13])
-                 }
+                   function qB(...BB) {
+                     return BB[Jo[0]] = Jo[3], MB(BB[Jo[1]], Jo[47]) ^ MB(BB[Jo[1]], Jo[138]) ^ MB(BB[Jo[1]], 25)
+                   }
```

#### 567. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5434-L5436` → after: `L5259-L5261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5259-L5261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5259-L5261) · [Before (L5434-L5436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5434-L5436)

```diff
-                 function MH(...HH) {
-                   return HH[zh[0]] = zh[2], EH(HH[zh[1]], 17) ^ EH(HH[zh[1]], zh[66]) ^ XH(HH[zh[1]], zh[65])
-                 }
+                   function ZB(...BB) {
+                     return BB[Jo[0]] = Jo[3], MB(BB[Jo[1]], Jo[61]) ^ MB(BB[Jo[1]], Jo[62]) ^ PB(BB[Jo[1]], Jo[7])
+                   }
```

#### 568. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5438-L5442` → after: `L5263-L5264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5263-L5264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5263-L5264) · [Before (L5438-L5442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5438-L5442)

```diff
-                 function xH(...BH) {
-                   var LH, AH, rH, SH, hH, tH, zH, CH, EH, XH, xH, PH;
-                   for (Eh(BH[zh[0]] = zh[15], BH[zh[3]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), BH[zh[68]] = new Array(zh[67])), Eh(BH[zh[1]][BH[zh[2]] >> zh[10]] |= zh[57] << zh[62] - BH[zh[2]] % zh[64], BH[z … [truncated]
-                     for (Eh(LH = BH[zh[3]][zh[1]], AH = BH[zh[3]][zh[2]], rH = BH[zh[3]][zh[15]], SH = BH[zh[3]][zh[13]], hH = BH[zh[3]][zh[12]], tH = BH[zh[3]][zh[10]], zH = BH[zh[3]][zh[32]], CH = BH[zh[3]][zh[4]]), XH = zh[1]; XH < zh[67]; XH++) Eh(XH < zh[9] ? BH[zh[68]][XH]  … [truncated]
-                     Eh(BH[zh[3]][zh[1]] = vH(LH, BH[zh[3]][zh[1]]), BH[zh[3]][zh[2]] = vH(AH, BH[zh[3]][zh[2]]), BH[zh[3]][zh[15]] = vH(rH, BH[zh[3]][zh[15]]), BH[zh[3]][zh[13]] = vH(SH, BH[zh[3]][zh[13]]), BH[zh[3]][zh[12]] = vH(hH, BH[zh[3]][zh[12]]), BH[zh[3]][zh[10]] = vH(tH, … [truncated]
+                   function NB(...BB) {
+                     return BB[Jo[0]] = Jo[3], MB(BB[Jo[1]], 17) ^ MB(BB[Jo[1]], Jo[64]) ^ PB(BB[Jo[1]], Jo[63])
```

#### 569. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5447-L5477` → after: `L5267-L5273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5267-L5273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5267-L5273) · [Before (L5447-L5477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5447-L5477)

```diff
-                 function vH(...HH) {
-                   return Eh(HH[zh[0]] = zh[15], HH[zh[3]] = (HH[zh[1]] & zh[69]) + (HH[zh[2]] & zh[69]), HH[zh[70]] = (HH[zh[1]] >> zh[9]) + (HH[zh[2]] >> zh[9]) + (HH[zh[3]] >> zh[9])), HH[zh[70]] << zh[9] | HH[zh[3]] & zh[69]
-                 }
-                 return Eh(HH[zh[0]] = zh[1], HH[zh[48]] = zh[1], HH[zh[2]] = ""), HH[zh[7]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -168007 … [truncated]
-                   hex: function(...HH) {
-                     return HH[zh[0]] = zh[2], SH(function(...HH) {
-                       return HH[zh[0]] = zh[2], CH(xH(zH(HH[zh[1]]), HH[zh[1]].length * zh[44]))
-                     }(tH(HH[zh[1]])))
-                   },
-                   b64: LH,
-                   any: AH,
-                   hex_hmac: function(...HH) {
-                     return HH[zh[0]] = zh[15], SH(rH(tH(HH[zh[1]]), tH(HH[zh[2]])))
-                   },
-                   b64_hmac: LH,
-                   any_hmac: AH
- ... (15 more removed lines; see GitHub link above)
+                   function RB(...OB) {
+                     var GB, YB, DB, QB, oB, jB, yB, JB, MB, PB, RB, AB;
+                     for (Po(OB[Jo[0]] = Jo[2], OB[Jo[2]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), OB[Jo[15]] = new Array(Jo[65])), Po(OB[Jo[1]][OB[Jo[3]] >> Jo[16]] |= Jo[54] << Jo[60] - OB[Jo[3]] % Jo[59], OB[ … [truncated]
+                       for (Po(GB = OB[Jo[2]][Jo[1]], YB = OB[Jo[2]][Jo[3]], DB = OB[Jo[2]][Jo[2]], QB = OB[Jo[2]][Jo[7]], oB = OB[Jo[2]][Jo[21]], jB = OB[Jo[2]][Jo[16]], yB = OB[Jo[2]][Jo[47]], JB = OB[Jo[2]][Jo[61]]), PB = Jo[1]; PB < Jo[65]; PB++) Po(PB < Jo[35] ? OB[Jo[15]][PB … [truncated]
+                       Po(OB[Jo[2]][Jo[1]] = WB(GB, OB[Jo[2]][Jo[1]]), OB[Jo[2]][Jo[3]] = WB(YB, OB[Jo[2]][Jo[3]]), OB[Jo[2]][Jo[2]] = WB(DB, OB[Jo[2]][Jo[2]]), OB[Jo[2]][Jo[7]] = WB(QB, OB[Jo[2]][Jo[7]]), OB[Jo[2]][Jo[21]] = WB(oB, OB[Jo[2]][Jo[21]]), OB[Jo[2]][Jo[16]] = WB(jB, O … [truncated]
+                     }
+                     return OB[Jo[2]]
```

#### 570. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5479-L5491` → after: `L5275-L5277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5275-L5277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5275-L5277) · [Before (L5479-L5491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5479-L5491)

```diff
-                 }
-                 static generate(...BH) {
-                   BH[zh[0]] = zh[2];
-                   const LH = HH(zh[80]);
-                   let AH, rH;
-                   BH[-zh[73]] = zh[20];
-                   do {
-                     Eh(AH = this.randomPrime(BH[zh[1]] / zh[15]), rH = this.randomPrime(BH[zh[1]] / zh[15]), BH[-zh[73]] = HH.lcm(AH.prev(), rH.prev()))
-                   } while (HH.gcd(LH, BH[-zh[73]]).notEquals(zh[2]) || AH.minus(rH).abs().shiftRight(BH[zh[1]] / zh[15] - zh[82]).isZero());
-                   return {
-                     e: LH,
-                     n: AH.multiply(rH),
-                     d: LH.modInv(BH[-zh[73]])
+ 
+                   function WB(...BB) {
+                     return Po(BB[Jo[0]] = Jo[2], BB[Jo[2]] = (BB[Jo[1]] & Jo[66]) + (BB[Jo[3]] & Jo[66]), BB[Jo[7]] = (BB[Jo[1]] >> Jo[35]) + (BB[Jo[3]] >> Jo[35]) + (BB[Jo[2]] >> Jo[35])), BB[Jo[7]] << Jo[35] | BB[Jo[2]] & Jo[66]
```

#### 571. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5493-L5510` → after: `L5279-L5291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5279-L5291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5279-L5291) · [Before (L5493-L5510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5493-L5510)

```diff
-                 }
-                 static encrypt(...BH) {
-                   return BH[zh[0]] = zh[13], HH(BH[zh[1]]).modPow(BH[zh[15]], BH[zh[2]])
-                 }
-                 static decrypt(...BH) {
-                   return BH[zh[0]] = zh[13], HH(BH[zh[1]]).modPow(BH[zh[2]], BH[zh[15]])
-                 }
-                 static encode(...BH) {
-                   BH[zh[0]] = zh[2];
-                   const LH = BH[zh[1]].split("").map((HH => HH.charCodeAt())).join("");
-                   return HH(LH)
-                 }
-                 static decode(HH) {
-                   const BH = HH.toString();
-                   let LH = "";
-                   for (let AH = zh[1]; AH < BH.length; AH += zh[15]) {
- ... (2 more removed lines; see GitHub link above)
+                   return Po(BB[Jo[0]] = Jo[1], BB[Jo[41]] = Jo[1], BB[Jo[45]] = ""), BB[Jo[2]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -168 … [truncated]
+                     hex: function(...BB) {
+                       return BB[Jo[0]] = Jo[3], QB(function(...BB) {
+                         return BB[Jo[0]] = Jo[3], JB(RB(yB(BB[Jo[1]]), BB[Jo[1]].length * Jo[34]))
+                       }(jB(BB[Jo[1]])))
+                     },
+                     b64: OB,
+                     any: GB,
+                     hex_hmac: function(...BB) {
+                       return BB[Jo[0]] = Jo[2], QB(DB(jB(BB[Jo[1]]), jB(BB[Jo[3]])))
+                     },
+                     b64_hmac: OB,
+                     any_hmac: GB
```

#### 572. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5512-L5513` → after: `L5293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5293) · [Before (L5512-L5513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5512-L5513)

```diff
-                   return LH
-                 }
+                 }(), console.log(BB[-Jo[67]]))
```

#### 573. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5556-L5604` → after: `L5299-L5314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5299-L5314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5299-L5314) · [Before (L5556-L5604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5556-L5604)

```diff
-           const LH = OH[BH[zh[1]]];
-           if (!BH[zh[2]]) {
-             function hH() {
-               const HH = require("big-integer");
-               module.exports = class {
-                 static randomPrime(...BH) {
-                   BH[zh[0]] = zh[2];
-                   const LH = HH.one.shiftLeft(BH[zh[1]] - zh[2]),
-                     AH = HH.one.shiftLeft(BH[zh[1]]).prev();
-                   for (; zh[31];) {
-                     let BH = HH.randBetween(LH, AH);
-                     if (BH.isProbablePrime(zh[72])) return BH
-                   }
-                 }
-                 static generate(...BH) {
-                   BH[zh[0]] = zh[2];
- ... (33 more removed lines; see GitHub link above)
+           const DB = UB[OB];
+           if (!GB) {
+             function yB(...BB) {
+               var OB;
+               Po(BB[Jo[0]] = Jo[1], OB = function(...BB) {
+                 Po(BB[Jo[0]] = Jo[3], this.CP = BB[Jo[1]], this.length = Jo[1], this.map = {}, this.head = Jo[6], this.tail = Jo[6])
+               }, OB.prototype.get = function(...BB) {
+                 var OB;
+                 return Po(BB[Jo[0]] = Jo[3], OB = this.map[BB[Jo[1]]]), OB ? (this.remove(OB), this.insert(OB.key, OB.val), OB.val) : -Jo[3]
+               }, OB.prototype.put = function(...BB) {
+                 Po(BB[Jo[0]] = Jo[2], this.map[BB[Jo[1]]] ? (this.remove(this.map[BB[Jo[1]]]), this.insert(BB[Jo[1]], BB[Jo[3]])) : this.length === this.CP ? (this.remove(this.head), this.insert(BB[Jo[1]], BB[Jo[3]])) : (this.insert(BB[Jo[1]], BB[Jo[3]]), this.length++))
+               }, OB.prototype.remove = function(...BB) {
+                 Po(BB[Jo[0]] = Jo[3], BB[Jo[13]] = BB[Jo[1]].prev, BB[Jo[15]] = BB[Jo[1]].next), BB[Jo[15]] && (BB[Jo[15]].prev = BB[Jo[13]]), BB[Jo[13]] && (BB[Jo[13]].next = BB[Jo[15]]), this.head === BB[Jo[1]] && (this.head = BB[Jo[15]]), this.tail === BB[Jo[1]] && (this.tail  … [truncated]
+               }, OB.prototype.insert = function(...BB) {
+                 Po(BB[Jo[0]] = Jo[2], BB[Jo[2]] = new List(BB[Jo[1]], BB[Jo[3]]), this.tail ? (this.tail.next = BB[Jo[2]], BB[Jo[2]].prev = this.tail, this.tail = BB[Jo[2]]) : (this.tail = BB[Jo[2]], this.head = BB[Jo[2]]), this.map[BB[Jo[1]]] = BB[Jo[2]])
+               }, console.log(OB))
```

#### 574. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5606` → after: `L5316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5316) · [Before (L5606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5606)

```diff
-             return "YHIDVn" in Ch && hH(), void(LH && (mH = zh[31]))
+             return "MUIZAvy" in Mo && yB(), void(DB && (dB = Jo[12]))
```

#### 575. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5608-L5611` → after: `L5318-L5323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5318-L5323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5318-L5323) · [Before (L5608-L5611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5608-L5611)

```diff
-           if (BH[zh[1]] !== VH) return void(OH[BH[zh[1]]] = BH[zh[2]]);
-           OH[BH[zh[1]]] = zh[31];
-           const AH = typeof BH[zh[2]] === zh[79] ? BH[zh[2]] : "" + BH[zh[2]];
-           if (KH[AH]) {
+           if (OB !== nB) return void(UB[OB] = GB);
+           UB[OB] = Jo[12];
+           const QB = typeof GB === Jo[68] ? GB : "" + GB;
+           if (!FB[QB])
+             if ((Jo[1], iQ[Jo[113]])(QB)) LB = Jo[12];
+             else if ((Jo[1], iQ[Jo[69]])(QB)) {
```

#### 576. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5613-L5619` → after: `L5325-L5339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5325-L5339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5325-L5339) · [Before (L5613-L5619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5613-L5619)

```diff
-               Eh(HH[zh[0]] = zh[1], HH[zh[3]] = function(...HH) {
-                 if (Eh(HH[zh[0]] = zh[2], HH[-zh[84]] = HH[zh[1]].length), HH[-zh[84]] < zh[15]) return zh[1];
-                 if (Eh(HH[zh[85]] = Math.max(...HH[zh[1]]), HH[-zh[86]] = Math.min(...HH[zh[1]])), HH[zh[85]] === HH[-zh[86]]) return zh[1];
-                 for (Eh(HH[zh[12]] = Array(HH[-zh[84]] - zh[2]).fill(Number.MAX_SAFE_INTEGER), HH[zh[16]] = Array(HH[-zh[84]] - zh[2]).fill(Number.MIN_SAFE_INTEGER), HH[zh[32]] = Math.ceil((HH[zh[85]] - HH[-zh[86]]) / (HH[-zh[84]] - zh[2])), HH[-zh[88]] = zh[1]), HH[-zh[87]] = zh … [truncated]
-                 for (Eh(HH[zh[46]] = Number.MIN_SAFE_INTEGER, HH[zh[89]] = HH[-zh[86]]), HH[zh[40]] = zh[1]; HH[zh[40]] < HH[-zh[84]] - zh[2]; HH[zh[40]]++) HH[zh[12]][HH[zh[40]]] === Number.MAX_SAFE_INTEGER && HH[zh[16]][HH[zh[40]]] === Number.MIN_SAFE_INTEGER || Eh(HH[zh[46]] = … [truncated]
-                 return HH[zh[46]] = Math.max(HH[zh[46]], HH[zh[85]] - HH[zh[89]]), HH[zh[46]]
-               }, console.log(HH[zh[3]]))
+               BB[Jo[0]] = Jo[1];
+               const OB = require("path"),
+                 {
+                   version: GB
+                 } = require("../../package"),
+                 {
+                   version: YB
+                 } = require("@redacted/enterprise-plugin/package"),
+                 {
+                   version: DB
+                 } = require("@redacted/components/package"),
+                 {
+                   sdkVersion: QB
+                 } = require("@redacted/enterprise-plugin");
+               require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), OB.resolve(__dirname, "../redacted.js")
```

#### 577. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5621-L5646` → after: `L5341-L5343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5341-L5343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5341-L5343) · [Before (L5621-L5646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5621-L5646)

```diff
-             "bYkA95" + zh[83] in Ch && tH()
-           } else {
-             if ((zh[1], KS.n)(AH)) {
-               function zH() {
-                 var HH, BH, LH;
-                 Eh(HH = function(...AH) {
-                   for (AH[zh[0]] = zh[12], AH[zh[12]] = AH[zh[13]]; AH[zh[12]] < AH[zh[15]]; AH[zh[12]]++) {
-                     if (AH[zh[2]].length !== AH[zh[12]]) return;
-                     for (AH[zh[10]] = zh[1]; AH[zh[10]] < AH[zh[15]]; AH[zh[10]]++) LH(AH[zh[2]], [AH[zh[12]], AH[zh[10]]]) && (Eh(AH[zh[2]].push([AH[zh[12]], AH[zh[10]]]), HH(AH[zh[1]], AH[zh[2]], AH[zh[15]], AH[zh[12]] + zh[2])), AH[zh[2]].length === AH[zh[15]] && AH[zh[1]].pus … [truncated]
-                   }
-                 }, BH = function(HH) {
-                   var BH, LH, AH = [];
-                   for (BH = HH.length, LH = zh[1]; LH < BH; LH++) {
-                     var rH;
-                     for (AH[LH] = "", rH = zh[1]; rH < BH; rH++) AH[LH] += HH[LH][zh[2]] === rH ? zh[38] : zh[39]
-                   }
- ... (10 more removed lines; see GitHub link above)
+             if ("RYeK1R" + Jo[110] in Mo && JB(), uB < 8) {
+               function MB(...BB) {
+                 Po(BB[Jo[0]] = Jo[1], BB[Jo[13]] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from", BB[-Jo[71]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)?", BB[Jo[72]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d … [truncated]
```

#### 578. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5648-L5651` → after: `L5345-L5354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5345-L5354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5345-L5354) · [Before (L5648-L5651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5648-L5651)

```diff
-               return "GQxeXyR" in Ch && zH(), void(eH = zh[31])
-             }
-             if ((zh[1], KS[zh[125]])(AH))
-               if (IH < 8) {
+               "_laJfB" + Jo[109] in Mo && MB(), Po(FB[QB] = Jo[12], KB[uB++] = QB, iB ||= (Jo[1], iQ[Jo[73]])(QB))
+             } else {
+               function PB(...BB) {
+                 Po(BB[Jo[0]] = Jo[1], BB[Jo[13]] = function(...OB) {
+                   return Po(OB[Jo[0]] = Jo[7], OB[Jo[7]] = {}), OB[Jo[2]].length !== OB[Jo[1]].length + OB[Jo[3]].length ? Jo[4] : BB[-Jo[28]](OB[Jo[1]], OB[Jo[3]], OB[Jo[2]], Jo[1], Jo[1], Jo[1], OB[Jo[7]])
+                 }, BB[-Jo[28]] = function(...OB) {
+                   return Po(OB[Jo[0]] = Jo[61], OB[Jo[61]] = Jo[4]), OB[Jo[16]] >= OB[Jo[2]].length ? Jo[12] : OB[Jo[47]]["" + OB[Jo[7]] + OB[Jo[21]] + OB[Jo[16]]] !== Jo[5] ? OB[Jo[47]]["" + OB[Jo[7]] + OB[Jo[21]] + OB[Jo[16]]] : (OB[Jo[2]][OB[Jo[16]]] === OB[Jo[1]][OB[Jo[7]]] & … [truncated]
+                 }, console.log(BB[Jo[13]]))
+               }
+               if ("JtmX4U" + Jo[82] in Mo && PB(), !iB && (Jo[1], iQ[Jo[73]])(QB)) {
```

#### 579. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5653-L5712` → after: `L5356-L5383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5356-L5383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5356-L5383) · [Before (L5653-L5712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5653-L5712)

```diff
-                   Eh(HH[zh[0]] = zh[1], HH[zh[92]] = function(...BH) {
-                     return Eh(BH[zh[0]] = zh[13], BH[zh[3]] = {}), BH[zh[15]].length !== BH[zh[1]].length + BH[zh[2]].length ? zh[19] : HH[zh[91]](BH[zh[1]], BH[zh[2]], BH[zh[15]], zh[1], zh[1], zh[1], BH[zh[3]])
-                   }, HH[zh[91]] = function(...BH) {
-                     return Eh(BH[zh[0]] = zh[4], BH[zh[4]] = zh[19]), BH[zh[10]] >= BH[zh[15]].length ? zh[31] : BH[zh[32]]["" + BH[zh[13]] + BH[zh[12]] + BH[zh[10]]] !== zh[20] ? BH[zh[32]]["" + BH[zh[13]] + BH[zh[12]] + BH[zh[10]]] : (BH[zh[15]][BH[zh[10]]] === BH[zh[1]][BH[zh[ … [truncated]
-                   }, console.log(HH[zh[92]]))
-                 }
-                 "h90sXU" in Ch && CH(), Eh(KH[AH] = zh[31], oH[IH++] = AH, cH ||= (zh[1], KS[zh[111]])(AH))
-               } else {
-                 function EH() {
-                   ! function(...HH) {
-                     function BH(...HH) {
-                       for (Eh(HH[zh[0]] = zh[2], HH[zh[3]] = [], HH[zh[15]] = zh[1], HH[zh[93]] = HH[zh[1]].length, HH[zh[94]] = zh[20], HH[zh[10]] = zh[20]); HH[zh[15]] < HH[zh[93]];) Eh(HH[zh[94]] = HH[zh[1]].charCodeAt(HH[zh[15]]++), HH[zh[94]] >= zh[95] && HH[zh[94]] <= zh[96 … [truncated]
-                       return HH[zh[3]]
-                     }
- 
-                     function LH(...HH) {
- ... (44 more removed lines; see GitHub link above)
+                   function OB(...BB) {
+                     if (BB[Jo[0]] = Jo[3], !BB[Jo[1]]) return -Jo[3];
+                     const GB = OB(BB[Jo[1]].left),
+                       YB = OB(BB[Jo[1]].right),
+                       DB = Math.abs(GB - YB);
+                     if (GB === 1 / 0 || YB === 1 / 0 || DB > Jo[3]) return 1 / 0;
+                     return Math.max(GB, YB) + Jo[3]
+                   }
+                   BB[Jo[0]] = Jo[1], window.__GLOBAL__HELPERS__ = {
+                     buildCharacterMap: function(...BB) {
+                       BB[Jo[0]] = Jo[3];
+                       const OB = {};
+                       for (let GB of BB[Jo[1]].replace(/[^w]/g, "").toLowerCase()) OB[GB] = OB[GB] + Jo[3] || Jo[3];
+                       return OB
+                     },
+                     isAnagrams: function(...BB) {
+ ... (12 more added lines; see GitHub link above)
```

#### 580. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5714` → after: `L5385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5385) · [Before (L5714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5714)

```diff
-                 "Np8XPB" in Ch && EH(), !cH && (zh[1], KS[zh[111]])(AH) && Eh(KH[AH] = zh[31], oH[8 - zh[2]] = AH, cH = zh[31])
+                 "nqY6L3" in Mo && zB(), Po(FB[QB] = Jo[12], KB[8 - Jo[3]] = QB, iB = Jo[12])
```

#### 581. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5716-L5717` → after: `L5387-L5388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5387-L5388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5387-L5388) · [Before (L5716-L5717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5716-L5717)

```diff
-             else lH < 4 && Eh(KH[AH] = zh[31], fH[lH++] = AH)
-           }
+             }
+           } else IB < 4 && Po(FB[QB] = Jo[12], mB[IB++] = QB)
```

#### 582. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5719` → after: `L5390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5390) · [Before (L5719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5719)

```diff
-         gH = (zh[1], cS[zh[89]])(HH),
+         rB = (Jo[1], LQ[Jo[132]])(BB),
```

#### 583. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5724` → after: `L5395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5395) · [Before (L5724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5724)

```diff
-             return zh[20]
+             return Jo[5]
```

#### 584. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5729` → after: `L5400-L5404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5400-L5404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5400-L5404) · [Before (L5729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5729)

```diff
-         })), typeof NH === zh[112] + zh[113]) {
+         })), typeof XB === Jo[74] + Jo[75]) {
+         function TO(...BB) {
+           BB[Jo[0]] = Jo[1]
+         }
+         "PcmwWY" + Jo[26] in Mo && TO();
```

#### 585. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5738` → after: `L5413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5413) · [Before (L5738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5738)

```diff
-           for (const LH in BH)(zh[1], Qr[zh[114]])(Qr[zh[128]], BH, [LH]) && LH !== HH && qH(LH, BH[LH])
+           for (const OB in CO)(Jo[1], ZD[Jo[76]])(ZD[Jo[117]], CO, [OB]) && OB !== BB && gB(OB, CO[OB])
```

#### 586. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5741-L5748` → after: `L5416-L5451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5416-L5451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5416-L5451) · [Before (L5741-L5748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5741-L5748)

```diff
-       const RH = gH ? zh[15] : zh[2];
-       let jH = zh[19];
-       const nH = (...BH) => (BH[zh[0]] = zh[1], kH ? zh[31] : (Eh(BH[-zh[115]] = zh[19], jH = !UH((() => {
-           BH[-zh[115]] = rH[HH] !== qH
-         }))), BH[-zh[115]])),
-         FH = xH((() => {
-           const BH = (zh[1], Qr.J)(rH, HH);
-           return (BH === zh[21] || BH === void zh[1] ? void zh[1] : BH.configurable) !== zh[19] || typeof BH[zh[140]] !== zh[112] + zh[113] || bH !== RH
+       const wB = rB ? Jo[2] : Jo[3];
+       let EB = Jo[4];
+       const cB = (...OB) => {
+           if (OB[Jo[0]] = Jo[1], kB) {
+             function GB(...BB) {
+               Po(BB[Jo[0]] = Jo[1], BB[Jo[13]] = function(...OB) {
+                 return Po(OB[Jo[0]] = Jo[3], OB[Jo[13]] = []), (OB[Jo[1]] === Jo[3] || OB[Jo[1]] >= Jo[21]) && BB[Jo[3]](OB[Jo[13]], [], OB[Jo[1]], Jo[1]), OB[Jo[13]]
+               }, BB[Jo[3]] = function(...OB) {
+                 for (OB[Jo[0]] = Jo[21], OB[Jo[13]] = OB[Jo[7]]; OB[Jo[13]] < OB[Jo[2]]; OB[Jo[13]]++) {
+                   if (OB[Jo[3]].length !== OB[Jo[13]]) return;
+                   for (OB[Jo[77]] = Jo[1]; OB[Jo[77]] < OB[Jo[2]]; OB[Jo[77]]++) BB[Jo[26]](OB[Jo[3]], [OB[Jo[13]], OB[Jo[77]]]) && (Po(OB[Jo[3]].push([OB[Jo[13]], OB[Jo[77]]]), BB[Jo[3]](OB[Jo[1]], OB[Jo[3]], OB[Jo[2]], OB[Jo[13]] + Jo[3])), OB[Jo[3]].length === OB[Jo[2]] && OB[ … [truncated]
+                 }
+               }, BB[Jo[17]] = function(...BB) {
+                 for (Po(BB[Jo[0]] = Jo[3], BB[Jo[13]] = [], BB[Jo[15]] = BB[Jo[1]].length), BB[Jo[29]] = Jo[1]; BB[Jo[29]] < BB[Jo[15]]; BB[Jo[29]]++)
+                   for (BB[Jo[13]][BB[Jo[29]]] = "", BB[Jo[21]] = Jo[1]; BB[Jo[21]] < BB[Jo[15]]; BB[Jo[21]]++) BB[Jo[13]][BB[Jo[29]]] += BB[Jo[1]][BB[Jo[29]]][Jo[3]] === BB[Jo[21]] ? Jo[78] : Jo[79];
+                 return BB[Jo[13]]
+ ... (20 more added lines; see GitHub link above)
```

#### 587. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5753` → after: `L5456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5456) · [Before (L5753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5753)

```diff
-             return navigator[zh[135] + "tSub"]
+             return navigator[Jo[127] + "tSub"]
```

#### 588. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5760-L5764` → after: `L5463-L5516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5463-L5516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5463-L5516) · [Before (L5760-L5764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5760-L5764)

```diff
-         aH = dH === zh[21] ? ((...HH) => {
-           HH[zh[0]] = zh[1];
-           const BH = zh[5];
-           Eh(HH[-zh[117]] = zh[19], HH[zh[116]] = BH - zh[2]);
-           const LH = TextDecoder[zh[118] + zh[119]][zh[120]],
+         CB = bB === Jo[6] ? ((...BB) => {
+           BB[Jo[0]] = Jo[1], "nmHuQR" in Mo && function(...BB) {
+             BB[Jo[0]] = Jo[1];
+             const OB = require("big-integer");
+             Po(BB[Jo[13]] = class {
+               static randomPrime(...BB) {
+                 BB[Jo[0]] = Jo[3];
+                 const GB = OB.one.shiftLeft(BB[Jo[1]] - Jo[3]),
+                   YB = OB.one.shiftLeft(BB[Jo[1]]).prev();
+                 for (; Jo[12];) {
+                   let BB = OB.randBetween(GB, YB);
+                   if (BB.isProbablePrime(Jo[40])) return BB
+                 }
+               }
+               static generate(...BB) {
+                 BB[Jo[0]] = Jo[3];
+ ... (38 more added lines; see GitHub link above)
```

#### 589. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5766` → after: `L5518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5518) · [Before (L5766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5766)

```diff
-               HH[zh[116]]++, HH[zh[116]] === BH && (Hh((() => YH(zh[19]))) && (HH[-zh[117]] = zh[31]), HH[zh[116]] = zh[1]);
+               BB[Jo[3]]++, BB[Jo[3]] === OB && (Oo((() => lB(Jo[4]))) && (BB[Jo[85]] = Jo[12]), BB[Jo[3]] = Jo[1]);
```

#### 590. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5768` → after: `L5520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5520) · [Before (L5768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5768)

```diff
-               return (zh[1], Qr[zh[114]])(LH, this, rH)
+               return (Jo[1], ZD[Jo[76]])(GB, this, DB)
```

#### 591. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5771-L5776` → after: `L5523-L5599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5523-L5599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5523-L5599) · [Before (L5771-L5776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5771-L5776)

```diff
-             TextDecoder[zh[118] + zh[119]][zh[120]] = AH
-           })), () => HH[-zh[117]] ? zh[15] : Lh((() => TextDecoder[zh[118] + zh[119]][zh[120]] !== AH ? zh[32] : zh[1]))
-         })() : () => Lh((() => dH[zh[133] + zh[134]]())),
-         sH = (zh[1], HL[zh[150]])(),
-         JH = (zh[1], Qr[zh[74]])(zh[21]),
-         iH = (zh[1], Qr[zh[74]])(zh[21]);
+             TextDecoder[Jo[86] + Jo[87]][Jo[88]] = YB
+           })), () => {
+             if (BB[Jo[85]]) {
+               function OB() {
+                 ! function(...BB) {
+                   function OB(...BB) {
+                     for (Po(BB[Jo[0]] = Jo[3], BB[Jo[13]] = [], BB[-Jo[89]] = Jo[1], BB[Jo[7]] = BB[Jo[1]].length, BB[Jo[90]] = Jo[5], BB[Jo[93]] = Jo[5]); BB[-Jo[89]] < BB[Jo[7]];) Po(BB[Jo[90]] = BB[Jo[1]].charCodeAt(BB[-Jo[89]]++), BB[Jo[90]] >= Jo[91] && BB[Jo[90]] <= Jo[92]  … [truncated]
+                     return BB[Jo[13]]
+                   }
+ 
+                   function GB(...BB) {
+                     if (BB[Jo[0]] = Jo[3], BB[Jo[1]] >= Jo[91] && BB[Jo[1]] <= Jo[96]) throw Error("Lone surrogate U+" + BB[Jo[1]].toString(Jo[35]).toUpperCase() + " is not a scalar value")
+                   }
+ 
+                   function YB(...OB) {
+                     return OB[Jo[0]] = Jo[2], BB[Jo[13]](OB[Jo[1]] >> OB[Jo[3]] & Jo[43] | Jo[54])
+ ... (61 more added lines; see GitHub link above)
```

#### 592. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5780-L5783` → after: `L5603-L5606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5603-L5606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5603-L5606) · [Before (L5780-L5783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5780-L5783)

```diff
-       const BB = (zh[1], Qr[zh[74]])(zh[21]),
-         LB = (zh[1], Qr[zh[74]])(zh[21]);
-       let AB = zh[21],
-         rB = (zh[1], Qr[zh[74]])(zh[21]);
+       const OO = (Jo[1], ZD[Jo[32]])(Jo[6]),
+         GO = (Jo[1], ZD[Jo[32]])(Jo[6]);
+       let YO = Jo[6],
+         DO = (Jo[1], ZD[Jo[32]])(Jo[6]);
```

#### 593. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5785` → after: `L5608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5608) · [Before (L5785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5785)

```diff
-           Eh(HH[zh[0]] = zh[15], JH[pH] = HH[zh[1]], iH[pH] = HH[zh[2]], pH++)
+           Po(BB[Jo[0]] = Jo[2], vB[xB] = BB[Jo[1]], sB[xB] = BB[Jo[3]], xB++)
```

#### 594. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5787-L5789` → after: `L5610-L5612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5610-L5612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5610-L5612) · [Before (L5787-L5789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5787-L5789)

```diff
-         hB = (...HH) => (Eh(HH[zh[0]] = zh[2], HH[zh[2]] = zh[20]), (HH[zh[2]] = (iH[HH[zh[1]]] ? LB : BB)[JH[HH[zh[1]]]]) !== zh[21] && HH[zh[2]] !== void zh[1] ? HH[zh[2]] : -zh[2]),
-         tB = (zh[1], Qr[zh[22]])("d2lvNjQz"),
-         zB = (zh[1], Qr[zh[22]])("amtsa2plZndu"),
+         oO = (...BB) => (Po(BB[Jo[0]] = Jo[3], BB[Jo[3]] = Jo[5]), (BB[Jo[3]] = (sB[BB[Jo[1]]] ? GO : OO)[vB[BB[Jo[1]]]]) !== Jo[6] && BB[Jo[3]] !== void Jo[1] ? BB[Jo[3]] : -Jo[3]),
+         jO = (Jo[1], ZD[Jo[8]])("d2lvNjQz"),
+         yO = (Jo[1], ZD[Jo[8]])("amtsa2plZndu"),
```

#### 595. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5791-L5793` → after: `L5614-L5616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5614-L5616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5614-L5616) · [Before (L5791-L5793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5791-L5793)

```diff
-           [(zh[1], Qr[zh[22]])("aW9qZndlODNq"), "2"],
-           [(zh[1], Qr[zh[22]])("a3Bq"), zh[121]],
-           [(zh[1], Qr[zh[22]])("dXJocmZm"), zh[122]]
+           [(Jo[1], ZD[Jo[8]])("aW9qZndlODNq"), Jo[109]],
+           [(Jo[1], ZD[Jo[8]])("a3Bq"), Jo[110]],
+           [(Jo[1], ZD[Jo[8]])("dXJocmZm"), "5"]
```

#### 596. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5796-L5797` → after: `L5619-L5620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5619-L5620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5619-L5620) · [Before (L5796-L5797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5796-L5797)

```diff
-           [(zh[1], Qr[zh[22]])(zh[124] + zh[123]), zh[154]],
-           [(zh[1], Qr[zh[22]])(zh[124] + "w="), zh[74]]
+           [(Jo[1], ZD[Jo[8]])(Jo[112] + Jo[111]), Jo[32]],
+           [(Jo[1], ZD[Jo[8]])(Jo[112] + "w="), Jo[113]]
```

#### 597. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5799-L5801` → after: `L5622-L5624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5622-L5624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5622-L5624) · [Before (L5799-L5801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5799-L5801)

```diff
-         XB = (zh[1], Qr[zh[22]])("eTR5bnM="),
-         GB = (zh[1], Qr[zh[22]])("aHRleWpldA=="),
-         YB = (zh[1], Qr[zh[22]])("c2RmbGpneGxmY2pr"),
+         PO = (Jo[1], ZD[Jo[8]])("eTR5bnM="),
+         zO = (Jo[1], ZD[Jo[8]])("aHRleWpldA=="),
+         lO = (Jo[1], ZD[Jo[8]])("c2RmbGpneGxmY2pr"),
```

#### 598. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5803-L5807` → after: `L5626-L5630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5626-L5630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5626-L5630) · [Before (L5803-L5807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5803-L5807)

```diff
-           [(zh[1], Qr[zh[22]])("a3NhZmR1"), zh[125]],
-           [(zh[1], Qr[zh[22]])("ZGZnYWFzZGFz"), zh[22]],
-           [YB, zh[127]],
-           [(zh[1], Qr[zh[22]])("bGFzZWRraGFz"), zh[126]],
-           [(zh[1], Qr[zh[22]])("cW16ZjhrM24="), zh[3]]
+           [(Jo[1], ZD[Jo[8]])("a3NhZmR1"), Jo[116]],
+           [(Jo[1], ZD[Jo[8]])("ZGZnYWFzZGFz"), Jo[114]],
+           [lO, Jo[8]],
+           [(Jo[1], ZD[Jo[8]])("bGFzZWRraGFz"), "u"],
+           [(Jo[1], ZD[Jo[8]])("cW16ZjhrM24="), Jo[13]]
```

#### 599. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5810-L5812` → after: `L5633-L5635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5633-L5635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5633-L5635) · [Before (L5810-L5812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5810-L5812)

```diff
-           [XB, zh[141]],
-           [GB, zh[83]],
-           [(zh[1], Qr[zh[22]])("bmI3ZnEy"), zh[18]]
+           [PO, Jo[115]],
+           [zO, Jo[69]],
+           [(Jo[1], ZD[Jo[8]])("bmI3ZnEy"), Jo[15]]
```

#### 600. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5814-L5815` → after: `L5637-L5638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5637-L5638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5637-L5638) · [Before (L5814-L5815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5814-L5815)

```diff
-         WB = (zh[1], Qr[zh[22]])("bGtxM20="),
-         MB = (zh[1], Qr[zh[22]])("bWtxN3" + zh[123]),
+         ZO = (Jo[1], ZD[Jo[8]])("bGtxM20="),
+         NO = (Jo[1], ZD[Jo[8]])("bWtxN3" + Jo[111]),
```

#### 601. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5817` → after: `L5640-L5647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5640-L5647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5640-L5647) · [Before (L5817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5817)

```diff
-         vB = (() => {
+         WO = ((...BB) => {
+           BB[Jo[0]] = Jo[1], "QQniID" in Mo && function(...BB) {
+             Po(BB[Jo[0]] = Jo[1], BB[-Jo[56]] = function(...BB) {
+               for (Po(BB[Jo[0]] = Jo[3], BB[Jo[13]] = BB[Jo[1]].length, BB[Jo[15]] = [], BB[Jo[26]] = Jo[1]), BB[Jo[21]] = Jo[1]; BB[Jo[21]] < BB[Jo[13]]; BB[Jo[21]]++) BB[Jo[15]].push(BB[Jo[21]] !== Jo[1] && BB[Jo[1]][BB[Jo[21]]] > BB[Jo[1]][BB[Jo[21]] - Jo[3]] ? BB[Jo[15]][BB[J … [truncated]
+               for (BB[Jo[93]] = BB[Jo[13]] - Jo[3]; BB[Jo[93]] >= Jo[1]; BB[Jo[93]]--) BB[Jo[93]] !== BB[Jo[13]] - Jo[3] && BB[Jo[1]][BB[Jo[93]]] > BB[Jo[1]][BB[Jo[93]] + Jo[3]] && (BB[Jo[15]][BB[Jo[93]]] = Math.max(BB[Jo[15]][BB[Jo[93]]], BB[Jo[15]][BB[Jo[93]] + Jo[3]] + Jo[3])) … [truncated]
+               return BB[Jo[26]]
+             }, console.log(BB[-Jo[56]]))
+           }();
```

#### 602. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5819-L5820` → after: `L5649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5649) · [Before (L5819-L5820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5819-L5820)

```diff
-             var HH;
-             return (HH = rH[(zh[1], Qr[zh[22]])("V2ViU29ja2V0")]) === zh[21] || HH === void zh[1] ? void zh[1] : HH[zh[118] + zh[119]]
+             return BB[Jo[13]] = Jo[5], (BB[Jo[13]] = DB[(Jo[1], ZD[Jo[8]])("V2ViU29ja2V0")]) === Jo[6] || BB[Jo[13]] === void Jo[1] ? void Jo[1] : BB[Jo[13]][Jo[86] + Jo[87]]
```

#### 603. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5822` → after: `L5651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5651) · [Before (L5822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5822)

```diff
-             return zh[20]
+             return Jo[5]
```

#### 604. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5825-L5827` → after: `L5654-L5656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5654-L5656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5654-L5656) · [Before (L5825-L5827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5825-L5827)

```diff
-         PB = ["send", "close", "addEventListener", "removeEventListener", zh[131] + zh[130] + zh[127]],
-         TB = ["onmessage", "onopen", "onclos" + zh[16], "onerro" + zh[125]];
-       let UB = zh[19];
+         AO = ["send", "close", "addEventListener", "removeEventListener", Jo[121] + Jo[120] + Jo[8]],
+         VO = ["onmessage", "onopen", "onclos" + Jo[93], "onerro" + Jo[116]];
+       let SO = Jo[4];
```

#### 605. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5831-L5832` → after: `L5660-L5661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5660-L5661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5660-L5661) · [Before (L5831-L5832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5831-L5832)

```diff
-           LH === zh[21] || UB || (UB = xH((() => {
-             if (vB !== zh[20] && (zh[1], Qr.K)(LH) !== vB) return zh[31];
+           GB === Jo[6] || SO || (SO = RB((() => {
+             if (WO !== Jo[5] && (Jo[1], ZD.N)(GB) !== WO) return Jo[12];
```

#### 606. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5834` → after: `L5663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5663) · [Before (L5834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5834)

```diff
-               if ((zh[1], Qr[zh[114]])(Qr[zh[128]], LH, [PB[HH]])) return zh[31];
+               if ((Jo[1], ZD[Jo[76]])(ZD[Jo[117]], GB, [AO[BB]])) return Jo[12];
```

#### 607. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5836-L5837` → after: `L5665-L5666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5665-L5666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5665-L5666) · [Before (L5836-L5837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5836-L5837)

```diff
-               if (LH[TB[HH]] !== zh[21] && LH[TB[HH]] !== zh[20]) return zh[31];
-             return zh[19]
+               if (GB[VO[BB]] !== Jo[6] && GB[VO[BB]] !== Jo[5]) return Jo[12];
+             return Jo[4]
```

#### 608. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5840-L5841` → after: `L5669-L5670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5669-L5670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5669-L5670) · [Before (L5840-L5841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5840-L5841)

```diff
-         OB = (zh[1], Qr[zh[22]])("RXZlbnQ=");
-       let bB = UL[zh[129]][zh[145]],
+         UO = (Jo[1], ZD[Jo[8]])("RXZlbnQ=");
+       let fO = SG[Jo[119]][Jo[137]],
```

#### 609. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5843-L5844` → after: `L5672-L5673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5672-L5673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5672-L5673) · [Before (L5843-L5844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5843-L5844)

```diff
-       const mB = () => kB++ === zh[10] ? (kB = zh[1], YH(zh[19]) ? UL[zh[16]].CheckFuncHit : zh[1]) : zh[1],
-         oB = (zh[1], Qr[zh[74]])(zh[21]),
+       const dO = () => kO++ === Jo[16] ? (kO = Jo[1], lB(Jo[4]) ? SG[Jo[85]].CheckFuncHit : Jo[1]) : Jo[1],
+         KO = (Jo[1], ZD[Jo[32]])(Jo[6]),
```

#### 610. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5847-L5848` → after: `L5676-L5677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5676-L5677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5676-L5677) · [Before (L5847-L5848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5847-L5848)

```diff
-         const HH = (zh[1], Qr[zh[114]])(Qr.cb, AH, [zH]);
-         oB[zH] = HH >= 99 && HH <= zh[68] ? HH : zh[1]
+         const vO = (Jo[1], ZD[Jo[76]])(ZD.hb, YB, [HO]);
+         KO[HO] = vO >= 99 && vO <= 122 ? vO : Jo[1]
```

#### 611. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5851` → after: `L5680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5680) · [Before (L5851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5851)

```diff
-           return typeof HH === zh[112] + zh[113] && (zh[1], Qr[zh[114]])(Qr.T, BH, [(LH = HH, (0, Qr.l)(Qr.y, LH, []))]) !== zh[21];
+           return typeof BB === Jo[74] + Jo[75] && (Jo[1], ZD[Jo[76]])(ZD.W, OB, [(GB = BB, (0, ZD.l)(ZD.y, GB, []))]) !== Jo[6];
```

#### 612. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5857-L5859` → after: `L5686-L5688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5686-L5688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5686-L5688) · [Before (L5857-L5859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5857-L5859)

```diff
-           [Sh["Dispat" + zh[130] + zh[127]], () => !fB(EventTarget[zh[118] + zh[119]][zh[131] + zh[130] + zh[127]], lB)],
-           [Sh.PerformanceNow, () => !fB(performance[zh[132]], KB)],
-           [Sh.DateNow, () => !fB(Date[zh[132]], KB)]
+           [oo["Dispat" + Jo[120] + Jo[8]], () => !mO(EventTarget[Jo[86] + Jo[87]][Jo[121] + Jo[120] + Jo[8]], IO)],
+           [oo.PerformanceNow, () => !mO(performance[Jo[123]], FO)],
+           [oo["DateNo" + Jo[122]], () => !mO(Date[Jo[123]], FO)]
```

#### 613. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5861` → after: `L5690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5690) · [Before (L5861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5861)

```diff
-         eB = (zh[1], Qr[zh[74]])(zh[21]);
+         LO = (Jo[1], ZD[Jo[32]])(Jo[6]);
```

#### 614. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5865-L5866` → after: `L5694-L5695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5694-L5695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5694-L5695) · [Before (L5865-L5866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5865-L5866)

```diff
-           Eh(HH[zh[0]] = zh[1], HH[zh[3]] = zh[21]);
-           const BH = Hh((() => (HH[zh[3]] = GH(zh[31]), HH[zh[3]] !== zh[21])));
+           Po(BB[Jo[0]] = Jo[1], BB[Jo[13]] = Jo[6]);
+           const OB = Oo((() => (BB[Jo[13]] = zB(Jo[12]), BB[Jo[13]] !== Jo[6])));
```

#### 615. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5868` → after: `L5697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5697) · [Before (L5868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5868)

```diff
-           return HH[zh[3]] !== zh[21] && uH === zh[21] && (LH = HH[zh[3]][zh[36]], AH = HH[zh[3]][zh[37]], uH = (0, KS.u)(aS(LH, AH))), BH
+           return BB[Jo[13]] !== Jo[6] && pB === Jo[6] && (GB = BB[Jo[13]][Jo[18]], YB = BB[Jo[13]][Jo[19]], pB = (0, iQ.v)(HQ(GB, YB))), OB
```

#### 616. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5870` → after: `L5699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5699) · [Before (L5870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5870)

```diff
-         [zh[133] + zh[134]]: (...HH) => {
+         [Jo[125] + Jo[126]]: (...BB) => {
```

#### 617. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5873-L5876` → after: `L5702-L5705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5702-L5705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5702-L5705) · [Before (L5873-L5876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5873-L5876)

```diff
-           if (BH === zh[15]) return zh[15];
-           if (OH[tB]) return zh[13];
-           const LH = Lh((() => rH[zB] ? zh[12] : zh[1]));
-           return LH !== zh[1] ? LH === zh[12] ? zh[12] : zh[1] : BH === Bh ? zh[1] : BH === zh[32] ? zh[32] : (PH(), AH = Function[zh[118] + zh[119]], SH = zh[139], hH = (...HH) => (HH[zh[0]] = zh[2], HH[zh[1]].writable !== zh[31]), Hh((() => {
+           if (OB === Jo[2]) return Jo[2];
+           if (UB[jO]) return Jo[7];
+           const GB = Yo((() => DB[yO] ? Jo[21] : Jo[1]));
+           return GB !== Jo[1] ? GB === Jo[21] ? Jo[21] : Jo[1] : OB === Go ? Jo[1] : OB === Jo[47] ? Jo[47] : (AB(), YB = Function[Jo[86] + Jo[87]], QB = Jo[131], oB = (...BB) => (BB[Jo[0]] = Jo[3], BB[Jo[1]].writable !== Jo[12]), Oo((() => {
```

#### 618. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5879` → after: `L5708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5708) · [Before (L5879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5879)

```diff
-           })) ? zh[4] : zh[1]);
+           })) ? Jo[61] : Jo[1]);
```

#### 619. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5883-L5884` → after: `L5712-L5713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5712-L5713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5712-L5713) · [Before (L5883-L5884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5883-L5884)

```diff
-         [zh[135] + "tSubChanged"]: (...HH) => {
-           if (HH[zh[0]] = zh[1], ZH === DH || jH) return zh[19];
+         [Jo[127] + "tSubChanged"]: (...BB) => {
+           if (BB[Jo[0]] = Jo[1], TB === aB || EB) return Jo[4];
```

#### 620. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5888-L5889` → after: `L5717-L5718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5717-L5718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5717-L5718) · [Before (L5888-L5889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5888-L5889)

```diff
-         LX: (...HH) => {
-           Eh(HH[zh[0]] = zh[1], HH[zh[3]] = IB);
+         sJ: (...BB) => {
+           Po(BB[Jo[0]] = Jo[1], BB[-Jo[124]] = uO);
```

#### 621. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5892` → after: `L5721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5721) · [Before (L5892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5892)

```diff
-             LH[zh[1]] < HH[zh[3]] && xH(LH[zh[2]]) && (HH[zh[3]] = LH[zh[1]])
+             GB[Jo[1]] < BB[-Jo[124]] && RB(GB[Jo[3]]) && (BB[-Jo[124]] = GB[Jo[1]])
```

#### 622. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5894` → after: `L5723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5723) · [Before (L5894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5894)

```diff
-           return HH[zh[3]] < IB ? oB[HH[zh[3]]] : zh[1]
+           return BB[-Jo[124]] < uO ? KO[BB[-Jo[124]]] : Jo[1]
```

#### 623. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5896-L5897` → after: `L5725-L5726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5725-L5726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5725-L5726) · [Before (L5896-L5897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5896-L5897)

```diff
-         PE: () => sH ? HL[zh[89]] : zh[44],
-         [zh[136] + zh[137] + "Subs"]: (...HH) => {
+         jM: () => HB ? BG[Jo[134]] : Jo[34],
+         [Jo[128] + Jo[129] + "Subs"]: (...BB) => {
```

#### 624. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5899-L5900` → after: `L5728-L5729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5728-L5729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5728-L5729) · [Before (L5899-L5900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5899-L5900)

```diff
-           const BH = zH[zh[142]].YM[zh[136] + zh[137]];
-           return typeof BH === zh[138] && BH > zh[1] ? BH > zh[69] ? zh[69] : BH : zh[1]
+           const OB = yB[Jo[113]].zN[Jo[128] + Jo[129]];
+           return typeof OB === Jo[130] && OB > Jo[1] ? OB > Jo[66] ? Jo[66] : OB : Jo[1]
```

#### 625. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5902-L5908` → after: `L5731-L5737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5731-L5737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5731-L5737) · [Before (L5902-L5908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5902-L5908)

```diff
-         ["getCom" + zh[153]]: (...HH) => {
-           Eh(HH[zh[0]] = zh[1], HH[zh[3]] = zh[20], pH = zh[1]);
-           for (let LH = zh[1]; LH < IH; LH++) SB(oH[LH], zh[31]);
-           for (let LH = zh[1]; LH < CB[zh[0]]; LH++) OH[CB[LH][zh[1]]] && SB(CB[LH][zh[2]], zh[31]);
-           const BH = Lh((() => yS(atob[zh[139]](), EH) ? zh[1] : zh[2]));
-           BH === zh[2] && SB(zh[29], zh[31]), PH();
-           const AH = BH === Bh ? Bh : Lh(((...HH) => {
+         ["getCom" + Jo[145]]: (...BB) => {
+           Po(BB[Jo[0]] = Jo[1], BB[Jo[136]] = Jo[5], xB = Jo[1]);
+           for (let GB = Jo[1]; GB < uB; GB++) QO(KB[GB], Jo[12]);
+           for (let GB = Jo[1]; GB < JO[Jo[0]]; GB++) UB[JO[GB][Jo[1]]] && QO(JO[GB][Jo[3]], Jo[12]);
+           const OB = Yo((() => Bo(atob[Jo[131]](), MB) ? Jo[1] : Jo[3]));
+           OB === Jo[3] && QO(Jo[132], Jo[12]), AB();
+           const YB = OB === Go ? Go : Yo(((...BB) => {
```

#### 626. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5911` → after: `L5740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5740) · [Before (L5911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5911)

```diff
-             return BH === zh[20] ? Bh : BH[zh[140]] !== zh[20] ? zh[2] : zh[1]
+             return OB === Jo[5] ? Go : OB[Jo[133]] !== Jo[5] ? Jo[3] : Jo[1]
```

#### 627. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5913` → after: `L5742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5742) · [Before (L5913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5913)

```diff
-           AH === zh[2] && SB(zh[143], zh[31]);
+           YB === Jo[3] && QO(Jo[85], Jo[12]);
```

#### 628. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5915` → after: `L5744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5744) · [Before (L5915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5915)

```diff
-           for (let LH = zh[1]; LH < EB[zh[0]] && !rH; LH++) OH[EB[LH][zh[1]]] && SB(EB[LH][zh[2]], zh[31]);
+           for (let GB = Jo[1]; GB < MO[Jo[0]] && !DB; GB++) UB[MO[GB][Jo[1]]] && QO(MO[GB][Jo[3]], Jo[12]);
```

#### 629. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5917-L5918` → after: `L5746-L5747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5746-L5747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5746-L5747) · [Before (L5917-L5918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5917-L5918)

```diff
-           HH[zh[2]] = zh[21], IH === zh[1] && (lH > zh[1] ? HH[zh[2]] = fH[zh[1]] : eH ? HH[zh[2]] = "fp" : SH || (HH[zh[2]] = OH[XB] ? zh[141] : OH[GB] ? zh[83] : zh[21]));
-           for (let LH = zh[1]; LH < uB[zh[0]] && !rH; LH++) OH[uB[LH][zh[1]]] && SB(uB[LH][zh[2]], zh[31]);
+           BB[Jo[3]] = Jo[6], uB === Jo[1] && (IB > Jo[1] ? BB[Jo[3]] = mB[Jo[1]] : LB ? BB[Jo[3]] = "fp" : QB || (BB[Jo[3]] = UB[PO] ? Jo[115] : UB[zO] ? Jo[69] : Jo[6]));
+           for (let GB = Jo[1]; GB < pO[Jo[0]] && !DB; GB++) UB[pO[GB][Jo[1]]] && QO(pO[GB][Jo[3]], Jo[12]);
```

#### 630. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5920-L5925` → after: `L5749-L5754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5749-L5754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5749-L5754) · [Before (L5920-L5925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5920-L5925)

```diff
-             tH = (zh[1], gS[zh[8]])(),
-             zH = tH !== zh[21] && (zh[1], NB[zh[111]])(tH);
-           zH && !rH && SB(tH, zh[19]), FH && SB("ix", zh[19]), mH && SB("il", zh[19]);
-           for (let LH = zh[1]; LH < lH; LH++) SB(fH[LH], zh[31]);
-           for (let LH = zh[1]; LH < QB[zh[0]]; LH++) OH[QB[LH][zh[1]]] && SB(QB[LH][zh[2]], zh[31]);
-           OH[WB] && SB("mk:lk", zh[31]);
+             jB = (Jo[1], XQ[Jo[15]])(),
+             yB = jB !== Jo[6] && (Jo[1], XO[Jo[76]])(jB);
+           yB && !DB && QO(jB, Jo[4]), hB && QO("ix", Jo[4]), dB && QO("il", Jo[4]);
+           for (let GB = Jo[1]; GB < IB; GB++) QO(mB[GB], Jo[12]);
+           for (let GB = Jo[1]; GB < qO[Jo[0]]; GB++) UB[qO[GB][Jo[1]]] && QO(qO[GB][Jo[3]], Jo[12]);
+           UB[ZO] && QO("mk:lk", Jo[12]);
```

#### 631. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5927` → after: `L5756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5756) · [Before (L5927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5927)

```diff
-             HH[zh[0]] = zh[2];
+             BB[Jo[0]] = Jo[3], "PKmmOBY" in Mo && ([][Jo[0]] = Jo[1]);
```

#### 632. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5930` → after: `L5759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5759) · [Before (L5930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5930)

```diff
-             return zh[21]
+             return Jo[6]
```

#### 633. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5932-L5934` → after: `L5761-L5763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5761-L5763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5761-L5763) · [Before (L5932-L5934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5932-L5934)

```diff
-           if (CH !== zh[21] && SB(CH, zh[31]), LH !== zh[21] && TH(LH.emitReplaced) === zh[31] && SB("mk:em", zh[31]), UB && SB("3s", zh[19]), Qr.W && SB("3b", zh[19]), PH(), vH && SB("3d", zh[19]), rH && SB("3g", zh[19]), tH === zh[21] || zH || SB(tH, zh[19]), uH !== zh[21] && S … [truncated]
-             const HH = TH(LH[zh[133] + "mMeshHitStac" + zh[142]]);
-             typeof HH === zh[79] && (MH = function(HH, BH, LH) {
+           if (JB !== Jo[6] && QO(JB, Jo[12]), GB !== Jo[6] && VB(GB.emitReplaced) === Jo[12] && QO("mk:em", Jo[12]), SO && QO("3s", Jo[4]), ZD.Z && QO("3b", Jo[4]), AB(), WB && QO("3d", Jo[4]), DB && QO("3g", Jo[4]), jB === Jo[6] || yB || QO(jB, Jo[4]), pB !== Jo[6] && QO(pB, Jo[ … [truncated]
+             const BB = VB(GB[Jo[125] + "mMeshHitStac" + Jo[134]]);
+             typeof BB === Jo[68] && (NB = function(BB, OB, GB) {
```

#### 634. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5937-L5938` → after: `L5766-L5767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5766-L5767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5766-L5767) · [Before (L5937-L5938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5937-L5938)

```diff
-               return (0, KS.j)(aS(HH, AH < LH ? BH[AH] : null))
-             }(HH, XH, XH[zh[0]] - zh[2]))
+               return (0, iQ.k)(HQ(BB, YB < GB ? OB[YB] : null))
+             }(BB, PB, PB[Jo[0]] - Jo[3]))
```

#### 635. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5941-L5944` → after: `L5770-L5773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5770-L5773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5770-L5773) · [Before (L5941-L5944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5941-L5944)

```diff
-           if (MH !== zh[21] && SB(MH, zh[19]), QH === zh[21] && HL[zh[143]] !== zh[21] && Eh((GH = HL[zh[143]], QH = (0, KS.g)(iS(GH).reader)), WH = pS(HL[zh[143]], TH((() => HL[zh[8]] === zh[21] ? zh[21] : (zh[1], Qr.db)(HL[zh[8]]))))), QH !== zh[21] && SB(QH, zh[19]), WH !== zh … [truncated]
-           if (HH[zh[2]] === zh[21] && iH[zh[1]] && !(zh[1], KS[zh[111]])(JH[zh[1]]))
-             for (let LH = zh[2]; LH < hH; LH++)
-               if (iH[LH] && (zh[1], KS[zh[111]])(JH[LH])) {
+           if (NB !== Jo[6] && QO(NB, Jo[4]), qB === Jo[6] && BG[Jo[85]] !== Jo[6] && Po((zB = BG[Jo[85]], qB = (0, iQ.h)(xQ(zB).reader)), ZB = tQ(BG[Jo[85]], VB((() => BG[Jo[17]] === Jo[6] ? Jo[6] : (Jo[1], ZD.jb)(BG[Jo[17]]))))), qB !== Jo[6] && QO(qB, Jo[4]), ZB !== Jo[6] && QO … [truncated]
+           if (BB[Jo[3]] === Jo[6] && sB[Jo[1]] && !(Jo[1], iQ[Jo[73]])(vB[Jo[1]]))
+             for (let GB = Jo[3]; GB < oB; GB++)
+               if (sB[GB] && (Jo[1], iQ[Jo[73]])(vB[GB])) {
```

#### 636. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5946-L5947` → after: `L5775-L5776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5775-L5776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5775-L5776) · [Before (L5946-L5947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5946-L5947)

```diff
-                 for (let BH = LH; BH > zh[1]; BH--) Eh(JH[BH] = JH[BH - zh[2]], iH[BH] = iH[BH - zh[2]]);
-                 Eh(JH[zh[1]] = HH, iH[zh[1]] = zh[31]);
+                 for (let OB = GB; OB > Jo[1]; OB--) Po(vB[OB] = vB[OB - Jo[3]], sB[OB] = sB[OB - Jo[3]]);
+                 Po(vB[Jo[1]] = BB, sB[Jo[1]] = Jo[12]);
```

#### 637. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5949-L5951` → after: `L5778-L5780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5778-L5780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5778-L5780) · [Before (L5949-L5951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5949-L5951)

```diff
-               } if (Eh(HH[zh[15]] = zh[1], HH[zh[8]] = HH[zh[2]] === zh[21] ? zh[1] : hH), HH[zh[8]] > zh[1] && tH !== zh[21] && zH && !rH) {
-             for (let BH = HH[zh[8]]; BH > zh[1]; BH--) Eh(JH[BH] = JH[BH - zh[2]], iH[BH] = iH[BH - zh[2]]);
-             Eh(JH[zh[1]] = tH, iH[zh[1]] = zh[19], HH[zh[15]] = zh[2], HH[zh[8]]++)
+               } if (Po(BB[Jo[124]] = Jo[1], BB[Jo[17]] = BB[Jo[3]] === Jo[6] ? Jo[1] : oB), BB[Jo[17]] > Jo[1] && jB !== Jo[6] && yB && !DB) {
+             for (let OB = BB[Jo[17]]; OB > Jo[1]; OB--) Po(vB[OB] = vB[OB - Jo[3]], sB[OB] = sB[OB - Jo[3]]);
+             Po(vB[Jo[1]] = jB, sB[Jo[1]] = Jo[4], BB[Jo[124]] = Jo[3], BB[Jo[17]]++)
```

#### 638. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5953-L5960` → after: `L5782-L5789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5782-L5789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5782-L5789) · [Before (L5953-L5960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5953-L5960)

```diff
-           if (HH[zh[144]] = zh[1], yH++ % zh[15] === zh[2])
-             for (let LH = zh[2]; LH < pH; LH++) hB(LH) < hB(HH[zh[144]]) && (HH[zh[144]] = LH);
-           const YH = JH[HH[zh[144]]];
-           (iH[HH[zh[144]]] ? LB : BB)[YH] = HB++;
-           const xH = HH[zh[144]] >= HH[zh[15]] && HH[zh[144]] < HH[zh[8]];
-           if (!iH[HH[zh[144]]] || YH === HH[zh[2]] || HH[zh[144]] === zh[1] && !xH) return YH === zh[127] ? (zh[1], KS.x)(OH[YB], KS[zh[8]]) : YH;
-           const UH = (HH[zh[3]] = HH[zh[2]]) !== zh[21] && HH[zh[3]] !== void zh[1] ? HH[zh[3]] : JH[zh[1]];
-           return UH !== AB && Eh(AB = UH, rB = (zh[1], Qr[zh[74]])(zh[21])), rB[YH] ??= (zh[1], KS[zh[22]])(YH, UH)
+           if (BB[Jo[135]] = Jo[1], tB++ % Jo[2] === Jo[3])
+             for (let GB = Jo[3]; GB < xB; GB++) oO(GB) < oO(BB[Jo[135]]) && (BB[Jo[135]] = GB);
+           const lB = vB[BB[Jo[135]]];
+           (sB[BB[Jo[135]]] ? GO : OO)[lB] = BO++;
+           const RB = BB[Jo[135]] >= BB[Jo[124]] && BB[Jo[135]] < BB[Jo[17]];
+           if (!sB[BB[Jo[135]]] || lB === BB[Jo[3]] || BB[Jo[135]] === Jo[1] && !RB) return lB === Jo[8] ? (Jo[1], iQ[Jo[122]])(UB[lO], iQ[Jo[93]]) : lB;
+           const SB = (BB[Jo[136]] = BB[Jo[3]]) !== Jo[6] && BB[Jo[136]] !== void Jo[1] ? BB[Jo[136]] : vB[Jo[1]];
+           return SB !== YO && Po(YO = SB, DO = (Jo[1], ZD[Jo[32]])(Jo[6])), DO[lB] ??= (Jo[1], iQ[Jo[114]])(lB, SB)
```

#### 639. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5963-L5964` → after: `L5792-L5793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5792-L5793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5792-L5793) · [Before (L5963-L5964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5963-L5964)

```diff
-       let RB = UL[zh[129]][zh[145]];
-       const jB = () => bB !== UL[zh[129]][zh[145]] ? bB : RB;
+       let wO = SG[Jo[119]][Jo[137]];
+       const EO = () => fO !== SG[Jo[119]][Jo[137]] ? fO : wO;
```

#### 640. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5966` → after: `L5795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5795) · [Before (L5966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5966)

```diff
-         FB = zh[15],
+         hO = Jo[2],
```

#### 641. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5972` → after: `L5801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5801) · [Before (L5972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5972)

```diff
-           HH[zh[0]] = zh[2];
+           BB[Jo[0]] = Jo[3];
```

#### 642. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5975-L5976` → after: `L5804-L5805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5804-L5805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5804-L5805) · [Before (L5975-L5976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5975-L5976)

```diff
-             if (typeof BH === zh[112] + zh[113] && !(HH[zh[1]] instanceof BH) && !(zh[1], Qr.E)(HH[zh[1]])) return bB = UL[zh[129]].NotEvent, zh[1];
-             if (HH[zh[1]].isTrusted === zh[19]) return zh[1];
+             if (typeof OB === Jo[74] + Jo[75] && !(BB[Jo[1]] instanceof OB) && !(Jo[1], ZD[Jo[118]])(BB[Jo[1]])) return fO = SG[Jo[119]].NotEvent, Jo[1];
+             if (BB[Jo[1]].isTrusted === Jo[4]) return Jo[1];
```

#### 643. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5979` → after: `L5808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5808) · [Before (L5979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5979)

```diff
-             return LH < zh[65] ? (bB = UL[zh[129]]["FewPropertie" + zh[22]], zh[1]) : mB()
+             return GB < Jo[63] ? (fO = SG[Jo[119]]["FewPropertie" + Jo[114]], Jo[1]) : dO()
```

#### 644. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5992` → after: `L5821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5821) · [Before (L5992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5992)

```diff
-           Eh(HH[zh[0]] = zh[15], HH[zh[15]] = zh[20]);
+           Po(BB[Jo[0]] = Jo[2], BB[Jo[2]] = Jo[5]);
```

#### 645. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5994` → after: `L5823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5823) · [Before (L5994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5994)

```diff
-             HH[zh[15]] = HH[zh[2]]()
+             BB[Jo[2]] = BB[Jo[3]]()
```

#### 646. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5996` → after: `L5825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5825) · [Before (L5996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5996)

```diff
-           eB[qB++] = [HH[zh[1]], () => !BH || HH[zh[2]]() !== HH[zh[15]]]
+           LO[gO++] = [BB[Jo[1]], () => !OB || BB[Jo[3]]() !== BB[Jo[2]]]
```

#### 647. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L5998` → after: `L5827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5827) · [Before (L5998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L5998)

```diff
-         IX: (...HH) => {
+         kP: (...BB) => {
```

#### 648. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6002-L6007` → after: `L5831-L5836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5831-L5836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5831-L5836) · [Before (L6002-L6007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6002-L6007)

```diff
-             if (Eh(HH[zh[0]] = zh[2], HH[zh[146]] = zh[20], HH[zh[147]] = zh[20]), LH !== zh[21]) {
-               const BH = TH(LH.Mt),
-                 AH = "v3" === BH ? zh[13] : "v5" === BH ? zh[10] : "v6" === BH ? zh[32] : zh[15];
-               AH !== zh[15] && (FB = AH);
-               const rH = TH(LH["inbuil" + zh[151] + zh[152]]);
-               typeof rH === zh[138] && rH >= zh[1] && rH <= zh[40] && (rH | zh[1]) === rH && (DB = rH), Eh(HH[zh[146]] = TH(LH.reflectApplyHit), HH[zh[147]] = TH(LH.definerHit))
+             if (Po(BB[Jo[0]] = Jo[3], BB[-Jo[139]] = Jo[5], BB[Jo[15]] = Jo[5]), GB !== Jo[6]) {
+               const OB = VB(GB.Cy),
+                 YB = "v3" === OB ? Jo[7] : "v5" === OB ? Jo[16] : "v6" === OB ? Jo[47] : Jo[2];
+               YB !== Jo[2] && (hO = YB);
+               const DB = VB(GB["inbuil" + Jo[143] + Jo[144]]);
+               typeof DB === Jo[130] && DB >= Jo[1] && DB <= Jo[138] && (DB | Jo[1]) === DB && (aO = DB), Po(BB[-Jo[139]] = VB(GB.reflectApplyHit), BB[Jo[15]] = VB(GB.definerHit))
```

#### 649. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6009` → after: `L5838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5838) · [Before (L6009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6009)

```diff
-             const BH = HH[zh[1]] ? zh[52] : "11" === HH[zh[147]] ? zh[40] : "13" === HH[zh[147]] ? zh[148] : HH[zh[146]] !== zh[20] && HH[zh[146]] !== zh[21] ? zh[15] : "10" === HH[zh[147]] ? zh[65] : "12" === HH[zh[147]] ? zh[58] : zh[1];
+             const OB = BB[Jo[1]] ? Jo[44] : "11" === BB[Jo[15]] ? Jo[138] : "13" === BB[Jo[15]] ? Jo[140] : BB[-Jo[139]] !== Jo[5] && BB[-Jo[139]] !== Jo[6] ? Jo[2] : "10" === BB[Jo[15]] ? Jo[63] : "12" === BB[Jo[15]] ? Jo[55] : Jo[1];
```

#### 650. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6011-L6012` → after: `L5840-L5841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5840-L5841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5840-L5841) · [Before (L6011-L6012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6011-L6012)

```diff
-           })(BH), nB++ % 10 === zh[1] && (VB(), Hh((() => !yS(rH[SH][zh[139]][zh[139]](), EH))) && (RB = RB === UL[zh[129]][zh[149]] ? UL[zh[129]][zh[149]] : UL[zh[129]].Fr), Hh((() => !yS(rH[SH][zh[139]](), EH))) && (RB = UL[zh[129]][zh[149]])), {
-             flags: BH ? UL[zh[16]].Butto : zh[1],
+           })(OB), cO++ % 10 === Jo[1] && (nO(), Oo((() => !Bo(DB[QB][Jo[131]][Jo[131]](), MB))) && (wO = wO === SG[Jo[119]][Jo[141]] ? SG[Jo[119]][Jo[141]] : SG[Jo[119]].Fr), Oo((() => !Bo(DB[QB][Jo[131]](), MB))) && (wO = SG[Jo[119]][Jo[141]])), {
+             flags: OB ? SG[Jo[85]].Butto : Jo[1],
```

#### 651. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6014-L6017` → after: `L5843-L5846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5843-L5846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5843-L5846) · [Before (L6014-L6017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6014-L6017)

```diff
-               [UL[zh[150]].PhysicsVersion, FB],
-               [UL[zh[150]]["Inbuil" + zh[151] + zh[152]], DB],
-               [UL[zh[150]]["AltCom" + zh[153]], wB],
-               [UL[zh[150]]["ProbeUsedPro" + zh[154]], jB()]
+               [SG[Jo[142]].PhysicsVersion, hO],
+               [SG[Jo[142]]["Inbuil" + Jo[143] + Jo[144]], aO],
+               [SG[Jo[142]]["AltCom" + Jo[145]], eO],
+               [SG[Jo[142]]["ProbeUsedPro" + Jo[32]], EO()]
```

#### 652. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6025` → after: `L5854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5854) · [Before (L6025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6025)

```diff
-       Yh = gL.e,
+       qo = rG.h,
```

#### 653. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6115` → after: `L5944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5944) · [Before (L6115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6115)

```diff
-         if (this.stopped) return WL.d;
+         if (this.stopped) return ZG.e;
```

#### 654. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6144` → after: `L5973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR5973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L5973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L5973) · [Before (L6144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6144)

```diff
-               rH = ML(AH > 0 ? BH / AH : BH > 0 ? zH.volume : 0),
+               DB = NG(YB > 0 ? OB / YB : OB > 0 ? yB.volume : 0),
```

#### 655. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6177` → after: `L6006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6006) · [Before (L6177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6177)

```diff
-         client: String(IB.d)
+         client: String(uO.b)
```

#### 656. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6221` → after: `L6050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6050) · [Before (L6221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6221)

```diff
-           console.error(`${Xh} a startup listener threw`, BH)
+           console.error(`${zo} a startup listener threw`, OB)
```

#### 657. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6301` → after: `L6130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6130) · [Before (L6301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6301)

```diff
-       console.warn(`${Xh} chunk cancels from the server this session: ${HH}`)
+       console.warn(`${zo} chunk cancels from the server this session: ${BB}`)
```

#### 658. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6315` → after: `L6144-L6146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6144-L6146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6144-L6146) · [Before (L6315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6315)

```diff
-       jz = null,
+       hy = null;
+     const ay = new WY.d;
+     let ey = "",
```

#### 659. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6321` → after: `L6152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6152) · [Before (L6321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6321)

```diff
-           this.AX = HH, this.lossPending = !1, this.undrawnSinceMs = null, this.lastFrameMs = 0, this.shown = !1, this.LX = !1
+           this.tM = BB, this.lossPending = !1, this.undrawnSinceMs = null, this.lastFrameMs = 0, this.shown = !1, this.sJ = !1
```

#### 660. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6327` → after: `L6158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6158) · [Before (L6327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6327)

```diff
-           (0, SL.b)(HH) && (this.lossPending = !1);
+           (0, QG.d)(BB) && (this.lossPending = !1);
```

#### 661. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6329` → after: `L6160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6160) · [Before (L6329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6329)

```diff
-           this.lastFrameMs = LH, this.lossPending && BH && (0, SL.e)(HH) ? (null === this.undrawnSinceMs || AH > 1e3) && (this.undrawnSinceMs = LH) : this.undrawnSinceMs = null, this.show(this.LX || null !== this.undrawnSinceMs && LH - this.undrawnSinceMs >= 2e3)
+           this.lastFrameMs = GB, this.lossPending && OB && (0, QG.k)(BB) ? (null === this.undrawnSinceMs || YB > 1e3) && (this.undrawnSinceMs = GB) : this.undrawnSinceMs = null, this.show(this.sJ || null !== this.undrawnSinceMs && GB - this.undrawnSinceMs >= 2e3)
```

#### 662. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6332` → after: `L6163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6163) · [Before (L6332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6332)

```diff
-           this.LX = HH, this.show(HH || this.shown)
+           this.sJ = BB, this.show(BB || this.shown)
```

#### 663. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6335` → after: `L6166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6166) · [Before (L6335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6335)

```diff
-           this.LX = !1, this.lossPending = !1, this.undrawnSinceMs = null, this.show(!1)
+           this.sJ = !1, this.lossPending = !1, this.undrawnSinceMs = null, this.show(!1)
```

#### 664. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6338` → after: `L6169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6169) · [Before (L6338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6338)

```diff
-           HH !== this.shown && (this.shown = HH, this.AX(HH))
+           BB !== this.shown && (this.shown = BB, this.tM(BB))
```

#### 665. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6341` → after: `L6172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6172) · [Before (L6341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6341)

```diff
-         zH.k.AX(uH.h, HH)
+         yB.o.tM(pB.h, BB)
```

#### 666. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6346` → after: `L6177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6177) · [Before (L6346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6346)

```diff
-           this.XX = HH, this.now = BH, this.lostAtMs = null, this.asked = !1, this.lastRestore = null, this.watched = new WeakSet
+           this.jP = BB, this.now = OB, this.lostAtMs = null, this.asked = !1, this.lastRestore = null, this.watched = new WeakSet
```

#### 667. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6356` → after: `L6187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6187) · [Before (L6356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6356)

```diff
-           (0, SL.e)(HH) && BH && null !== this.lostAtMs && this.now() - this.lostAtMs >= 1e3 && (this.asked = !0)
+           (0, QG.k)(BB) && OB && null !== this.lostAtMs && this.now() - this.lostAtMs >= 1e3 && (this.asked = !0)
```

#### 668. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6363` → after: `L6194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6194) · [Before (L6363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6363)

```diff
-           return null !== BH && HH - BH.atMs < 3e4 ? BH : null
+           return null !== OB && BB - OB.atMs < 3e4 ? OB : null
```

#### 669. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6373` → after: `L6204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6204) · [Before (L6373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6373)

```diff
-               firstLostAtMs: null !== (BH = null === AH || void 0 === AH ? void 0 : AH.firstLostAtMs) && void 0 !== BH ? BH : HH.lostAtMs,
+               firstLostAtMs: null !== (OB = null === YB || void 0 === YB ? void 0 : YB.firstLostAtMs) && void 0 !== OB ? OB : BB.lostAtMs,
```

#### 670. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6377` → after: `L6208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6208) · [Before (L6377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6377)

```diff
-             this.XX(`webgl_restored_${rH}_${HH.delay}`, `WebGL2 context restored (${rH}, wasm)`)
+             this.jP(`webgl_restored_${DB}_${BB.delay}`, `WebGL2 context restored (${DB}, wasm)`)
```

#### 671. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6385` → after: `L6216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6216) · [Before (L6385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6385)

```diff
-               AH = null === LH ? HH.delay : (0, hL.j)(this.now() - LH.firstLostAtMs),
+               YB = null === GB ? BB.delay : (0, oG.l)(this.now() - GB.firstLostAtMs),
```

#### 672. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6387` → after: `L6218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6218) · [Before (L6387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6387)

```diff
-             this.XX(`webgl_rejoin_${rH}_${AH}`, "WebGL2 context not restored: rejoining (wasm)")
+             this.jP(`webgl_rejoin_${DB}_${YB}`, "WebGL2 context not restored: rejoining (wasm)")
```

#### 673. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6395` → after: `L6226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6226) · [Before (L6395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6395)

```diff
-             delay: (0, hL.j)(this.now() - HH),
+             delay: (0, oG.l)(this.now() - BB),
```

#### 674. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6403` → after: `L6234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6234) · [Before (L6403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6403)

```diff
-           this.deps = HH, this.firstLostAtMs = null, this.lastLostAtMs = 0, this.heldReload = null, this.generation = 0, this.watched = new WeakSet, this.pageHideWatched = !1, this.storage = void 0, this.now = void 0, this.wallNow = void 0, this.setTimer = void 0, this.storage =  … [truncated]
+           this.deps = BB, this.firstLostAtMs = null, this.lastLostAtMs = 0, this.heldReload = null, this.generation = 0, this.watched = new WeakSet, this.pageHideWatched = !1, this.storage = void 0, this.now = void 0, this.wallNow = void 0, this.setTimer = void 0, this.storage =  … [truncated]
```

#### 675. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6456` → after: `L6287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6287) · [Before (L6456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6456)

```diff
-           const BH = (0, tL.f)(this.storage);
+           const OB = (0, jG.i)(this.storage);
```

#### 676. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6474-L6475` → after: `L6305-L6306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6305-L6306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6305-L6306) · [Before (L6474-L6475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6474-L6475)

```diff
-             } = (0, tL.k)(HH, BH - LH);
-             this.deps.XX(AH, rH)
+             } = (0, jG.n)(BB, OB - GB);
+             this.deps.jP(YB, DB)
```

#### 677. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6479` → after: `L6310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6310) · [Before (L6479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6479)

```diff
-           this.firstLostAtMs = null, this.generation++, null !== this.heldReload && (this.heldReload = null, this.deps.hold(!1)), this.storage.removeItem(tL.b)
+           this.firstLostAtMs = null, this.generation++, null !== this.heldReload && (this.heldReload = null, this.deps.hold(!1)), this.storage.removeItem(jG.e)
```

#### 678. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6482` → after: `L6313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6313) · [Before (L6482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6482)

```diff
-           this.storage.setItem(tL.b, HH)
+           this.storage.setItem(jG.e, BB)
```

#### 679. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6485-L6486` → after: `L6316-L6317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6316-L6317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6316-L6317) · [Before (L6485-L6486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6485-L6486)

```diff
-         XX: SA.reportRenderRecovery,
-         probe: () => CL("rust_webgl1" === (0, ir.H)()),
+         jP: QY.reportRenderRecovery,
+         probe: () => JG("rust_webgl1" === (0, xD.I)()),
```

#### 680. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6505` → after: `L6336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6336) · [Before (L6505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6505)

```diff
-         renderer: QL.b[BH]
+         renderer: qG.e[OB]
```

#### 681. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6510` → after: `L6341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6341) · [Before (L6510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6510)

```diff
-       return Rh ??= Promise.all([LH.e(220), LH.e(170), LH.e(238), LH.e(49), LH.e(71)]).then((() => LH(54528))).then((HH => (Nh = HH, Object.assign(globalThis, {
+       return ho ??= Promise.all([GB.e(220), GB.e(170), GB.e(238), GB.e(49), GB.e(71)]).then((() => GB(54039))).then((BB => (co = BB, Object.assign(globalThis, {
```

#### 682. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6518-L6519` → after: `L6349-L6350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6349-L6350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6349-L6350) · [Before (L6518-L6519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6518-L6519)

```diff
-       return gh ??= LH.e(69).then((() => LH(54546))).catch((HH => {
-         throw gh = null, new DH.d(HH)
+       return Eo ??= GB.e(69).then((() => GB(54057))).catch((BB => {
+         throw Eo = null, new aB.e(BB)
```

#### 683. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6544-L6545` → after: `L6375-L6376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6375-L6376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6375-L6376) · [Before (L6544-L6545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6544-L6545)

```diff
-       qh || (qh = !0, wr.j.setHost(new LC), (0, CA.h)(), jr.i.setFollower(XE), Object.assign(globalThis, {
-         bloxdPreviews: wr.j
+       wo || (wo = !0, TD.i.setHost(new oJ), (0, JY.p)(), cD.g.setFollower(qM), Object.assign(globalThis, {
+         bloxdPreviews: TD.i
```

#### 684. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6558` → after: `L6389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6389) · [Before (L6558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6558)

```diff
-       eh = !0, az = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), sz = !az, console.info(`${Xh} starting`), ch || (ch = !0, (0, uH.S)(new GL(VC, lC, yz)), (0, GH.l)(new YL), (0, uH.O)(new uL((() => performance.now() - kt))), (0, uH.G)()),  … [truncated]
+       Xo = !0, xy = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), ty = !xy, console.info(`${zo} starting`), ro || (ro = !0, (0, pB.N)(new zG(dJ, gJ, YJ)), (0, zB.m)(new lG), (0, pB.J)(new pG((() => performance.now() - uj))), (0, pB.A)()),  … [truncated]
```

#### 685. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6561` → after: `L6392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6392) · [Before (L6561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6561)

```diff
-         BH = th("1mg46dsj19d", (() => {
+         OB = yo("1jfbrwdbk5d", (() => {
```

#### 686. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6563-L6564` → after: `L6394-L6395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6394-L6395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6394-L6395) · [Before (L6563-L6564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6563-L6564)

```diff
-           return null !== (HH = null === (BH = Ht) || void 0 === BH ? void 0 : BH.ws) && void 0 !== HH ? HH : null
-         }), HH, "oxctydzlin")
+           return null !== (BB = null === (OB = Yj) || void 0 === OB ? void 0 : OB.ws) && void 0 !== BB ? BB : null
+         }), BB, "yuhqvdtpwj")
```

#### 687. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6566` → after: `L6397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6397) · [Before (L6566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6566)

```diff
-         console.error(`${Xh} probes`, rH)
+         console.error(`${zo} probes`, DB)
```

#### 688. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6570` → after: `L6401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6401) · [Before (L6570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6570)

```diff
-           BH = (0, Yr.h)();
+           OB = (0, pD.j)();
```

#### 689. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6583` → after: `L6414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6414) · [Before (L6583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6583)

```diff
-             lobby: null !== (BH = LH.get("lobby")) && void 0 !== BH ? BH : null
+             lobby: null !== (OB = GB.get("lobby")) && void 0 !== OB ? OB : null
```

#### 690. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6592` → after: `L6423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6423) · [Before (L6592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6592)

```diff
-               await (0, DH.j)(HH), Jt = gC(new WebSocket(BH)), null !== Jt && nr.d.setGame(null), hC()
+               await (0, aB.m)(BB), xj = cJ(new WebSocket(OB)), null !== xj && hD.b.setGame(null), MJ()
```

#### 691. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6594` → after: `L6425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6425) · [Before (L6594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6594)

```diff
-               console.error(`${Xh} ?ws=${BH} did not attach`, rH)
+               console.error(`${zo} ?ws=${OB} did not attach`, DB)
```

#### 692. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6601-L6602` → after: `L6432-L6433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6432-L6433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6432-L6433) · [Before (L6601-L6602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6601-L6602)

```diff
-         const EH = (0, ir._)();
-         let GH = await (0, ir.R)();
+         const MB = (0, xD.T)();
+         let zB = await (0, xD.P)();
```

#### 693. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6605` → after: `L6436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6436) · [Before (L6605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6605)

```diff
-             return !(0, FB.s)((0, FB.v)(), AE, HH, FB.e) && (0, FB.p)(AE, HH, FB.e)
+             return !(0, hO.n)((0, hO.p)(), jM, BB, hO.b) && (0, hO.j)(jM, BB, hO.b)
```

#### 694. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6612` → after: `L6443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6443) · [Before (L6612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6612)

```diff
-             console.warn(`${Xh} ${BH}: waiting for a WebGL context`);
+             console.warn(`${zo} ${OB}: waiting for a WebGL context`);
```

#### 695. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6615` → after: `L6446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6446) · [Before (L6615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6615)

```diff
-                 sleep: (HH, BH) => (0, iB.d)(HH, BH).catch((() => {})),
+                 sleep: (BB, OB) => (0, sO.c)(BB, OB).catch((() => {})),
```

#### 696. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6617` → after: `L6448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6448) · [Before (L6617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6617)

```diff
-                   const HH = await (0, ir.cb)();
+                   const BB = await (0, xD.X)();
```

#### 697. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6619` → after: `L6450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6450) · [Before (L6619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6619)

```diff
-                     XY: HH
+                     pl: BB
```

#### 698. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6637` → after: `L6468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6468) · [Before (L6637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6637)

```diff
-                 detail: `${BH}; ${HH}`,
+                 detail: `${OB}; ${BB}`,
```

#### 699. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6644` → after: `L6475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6475) · [Before (L6644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6644)

```diff
-               } : ((0, EB.c)("/"), null)
+               } : ((0, MO.f)("/"), null)
```

#### 700. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6647` → after: `L6478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6478) · [Before (L6647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6647)

```diff
-               XY: hH
+               pl: oB
```

#### 701. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6649` → after: `L6480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6480) · [Before (L6649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6649)

```diff
-             if (!(0, gL.k)(hH)) {
+             if (!(0, rG.u)(oB)) {
```

#### 702. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6651` → after: `L6482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6482) · [Before (L6651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6651)

```diff
-               const HH = null !== (tH = null === hH || void 0 === hH ? void 0 : hH.backend) && void 0 !== tH ? tH : "none";
+               const BB = null !== (jB = null === oB || void 0 === oB ? void 0 : oB.backend) && void 0 !== jB ? jB : "none";
```

#### 703. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6662` → after: `L6493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6493) · [Before (L6662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6662)

```diff
-               }), null !== hH && (0, ir.W)(hH.backend)
+               }), null !== oB && (0, xD.S)(oB.backend)
```

#### 704. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6677` → after: `L6508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6508) · [Before (L6677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6677)

```diff
-           GH = HH.XY
+           zB = BB.pl
```

#### 705. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6680` → after: `L6511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6511) · [Before (L6680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6680)

```diff
-           const LH = (0, gL.k)(HH) ? rE(HH, BH) : null;
+           const GB = (0, rG.u)(BB) ? yM(BB, OB) : null;
```

#### 706. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6682` → after: `L6513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6513) · [Before (L6682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6682)

```diff
-           console.warn(`${Xh} ${LH.detail}: picking again in ${HE} ms`), await new Promise((HH => {
+           console.warn(`${zo} ${GB.detail}: picking again in ${DM} ms`), await new Promise((BB => {
```

#### 707. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6685-L6686` → after: `L6516-L6517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6516-L6517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6516-L6517) · [Before (L6685-L6686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6685-L6686)

```diff
-           const AH = await (0, ir.cb)();
-           if (!(0, gL.k)(AH)) {
+           const YB = await (0, xD.X)();
+           if (!(0, rG.u)(YB)) {
```

#### 708. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6690-L6691` → after: `L6521-L6522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6521-L6522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6521-L6522) · [Before (L6690-L6691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6690-L6691)

```diff
-               backend: null !== (rH = null === AH || void 0 === AH ? void 0 : AH.backend) && void 0 !== rH ? rH : "none"
-             }), null !== AH && (0, ir.W)(AH.backend)
+               backend: null !== (DB = null === YB || void 0 === YB ? void 0 : YB.backend) && void 0 !== DB ? DB : "none"
+             }), null !== YB && (0, xD.S)(YB.backend)
```

#### 709. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6695` → after: `L6526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6526) · [Before (L6695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6695)

```diff
-         if ((0, SA.setCrashBackend)((0, gL.k)(YH) ? "unsupported" : null !== (BH = null === YH || void 0 === YH ? void 0 : YH.backend) && void 0 !== BH ? BH : "none"), (0, gL.k)(YH)) return function(HH) {
+         if ((0, QY.setCrashBackend)((0, rG.u)(lB) ? "unsupported" : null !== (OB = null === lB || void 0 === lB ? void 0 : lB.backend) && void 0 !== OB ? OB : "none"), (0, rG.u)(lB)) return function(BB) {
```

#### 710. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6702` → after: `L6533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6533) · [Before (L6702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6702)

```diff
-           if (rH && (0, nB.v)()) return (0, SA.reportNoBackendRetry)("reload", BH, LH, AH), void hE(`${LH}, again after ${HE} ms`);
+           if (DB && (0, cO.p)()) return (0, QY.reportNoBackendRetry)("reload", OB, GB, YB), void MM(`${GB}, again after ${DM} ms`);
```

#### 711. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6705` → after: `L6536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6536) · [Before (L6705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6705)

```diff
-             afterReload: String(nB.E)
+             afterReload: String(cO.x)
```

#### 712. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6708` → after: `L6539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6539) · [Before (L6708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6708)

```diff
-         if ((0, xS.o)("render")) try {
+         if ((0, WQ.s)("render")) try {
```

#### 713. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6711` → after: `L6542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6542) · [Before (L6711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6711)

```diff
-           } = await Promise.all([LH.e(89), LH.e(56)]).then((() => LH(5137)));
+           } = await Promise.all([GB.e(89), GB.e(56)]).then((() => GB(5152)));
```

#### 714. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6716` → after: `L6547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6547) · [Before (L6716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6716)

```diff
-         if ((0, xS.o)("renderlite")) try {
+         if ((0, WQ.s)("renderlite")) try {
```

#### 715. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6719` → after: `L6550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6550) · [Before (L6719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6719)

```diff
-           } = await Promise.all([LH.e(300), LH.e(57)]).then((() => LH(54558)));
+           } = await Promise.all([GB.e(300), GB.e(57)]).then((() => GB(54067)));
```

#### 716. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6724` → after: `L6555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6555) · [Before (L6724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6724)

```diff
-         if ((0, xS.o)("renderprobe")) try {
+         if ((0, WQ.s)("renderprobe")) try {
```

#### 717. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6727` → after: `L6558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6558) · [Before (L6727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6727)

```diff
-           } = await LH.e(58).then((() => LH(54562)));
+           } = await GB.e(58).then((() => GB(54076)));
```

#### 718. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6732` → after: `L6563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6563) · [Before (L6732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6732)

```diff
-         if ("webgl" === (null === YH || void 0 === YH ? void 0 : YH.backend) && az && "address" !== nB.A.reason) {
+         if ("webgl" === (null === lB || void 0 === lB ? void 0 : lB.backend) && xy && "address" !== cO.u.reason) {
```

#### 719. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6734-L6741` → after: `L6565-L6572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6565-L6572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6565-L6572) · [Before (L6734-L6741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6734-L6741)

```diff
-           null !== HH && (0, DB.h)(HH)
-         }
-         const uH = null !== (AH = null === YH || void 0 === YH ? void 0 : YH.backend) && void 0 !== AH ? AH : null;
-         vz.adapter = null !== (SH = null === YH || void 0 === YH ? void 0 : YH.adapter) && void 0 !== SH ? SH : null, vz.boundAtMs = null, vz.indirectHangs = null, vz.restoresSkipped = null;
-         const QH = !(0, gL.Y)();
-         null === YH || (0, gL.C)(YH.reason) || console.info(`${Xh} drawing with ${YH.backend}: ${YH.reason}`);
-         const WH = (0, ir.D)();
-         mH("previews"), ih(!0), (0, DH.v)((HH => {
+           null !== BB && (0, aO.j)(BB)
+         }
+         const pB = null !== (YB = null === lB || void 0 === lB ? void 0 : lB.backend) && void 0 !== YB ? YB : null;
+         Vy.adapter = null !== (QB = null === lB || void 0 === lB ? void 0 : lB.adapter) && void 0 !== QB ? QB : null, Vy.boundAtMs = null, Vy.indirectHangs = null, Vy.restoresSkipped = null;
+         const qB = !(0, rG.gb)();
+         null === lB || (0, rG.K)(lB.reason) || console.info(`${zo} drawing with ${lB.backend}: ${lB.reason}`);
+         const ZB = (0, xD.G)();
+         dB("previews"), Bj(!0), (0, aB.u)((BB => {
```

#### 720. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6745` → after: `L6576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6576) · [Before (L6745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6745)

```diff
-               Tz = HH.rasterText, pt = HH.setTextLocalPlayer, HH.setTextLocalPlayer(null !== (BH = null === (LH = it) || void 0 === LH ? void 0 : LH.info.playerDbId) && void 0 !== BH ? BH : null), Uz = HH.drainTextRerasters, Vz = HH.loadTextIcons, HH.warmText((() => cz)), HH.text … [truncated]
+               ny = BB.rasterText, By = BB.setTextLocalPlayer, BB.setTextLocalPlayer(null !== (OB = null === (GB = tj) || void 0 === GB ? void 0 : GB.info.playerDbId) && void 0 !== OB ? OB : null), Uy = BB.drainTextRerasters, fy = BB.loadTextIcons, BB.warmText((() => gy)), BB.text … [truncated]
```

#### 721. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6755-L6756` → after: `L6586-L6587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6586-L6587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6586-L6587) · [Before (L6755-L6756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6755-L6756)

```diff
-         })), (0, DH.m)(wh).catch((HH => {
-           console.warn(`${Xh} the game code did not load: a join asks again`, HH)
+         })), (0, aB.p)(Co).catch((BB => {
+           console.warn(`${zo} the game code did not load: a join asks again`, BB)
```

#### 722. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6758` → after: `L6589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6589) · [Before (L6758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6758)

```diff
-         const MH = (0, ir.k)(YH);
+         const NB = (0, xD.m)(lB);
```

#### 723. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6760` → after: `L6591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6591) · [Before (L6760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6760)

```diff
-         MH.catch((() => {})), "loading" === (0, cB.B)() && (IH(), mH("load"));
+         NB.catch((() => {})), "loading" === (0, iO.x)() && (uB(), dB("load"));
```

#### 724. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6763` → after: `L6594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6594) · [Before (L6763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6763)

```diff
-             const BH = null !== HH && void 0 !== HH ? HH : document.createElement("canvas");
+             const OB = null !== BB && void 0 !== BB ? BB : document.createElement("canvas");
```

#### 725. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6773` → after: `L6604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6604) · [Before (L6773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6773)

```diff
-                     null === (HH = fz) || void 0 === HH || HH.glContextLost(BH, LH, null !== (AH = null !== (rH = !1 === (null === (SH = jh) || void 0 === SH ? void 0 : SH.isStopped) ? jh.addDistanceInUse() : null) && void 0 !== rH ? rH : null === (hH = sE()) || void 0 === hH ? v … [truncated]
+                     null === (BB = Fy) || void 0 === BB || BB.glContextLost(OB, GB, null !== (YB = null !== (DB = !1 === (null === (QB = ao) || void 0 === QB ? void 0 : QB.isStopped) ? ao.addDistanceInUse() : null) && void 0 !== DB ? DB : null === (oB = GP()) || void 0 === oB ? v … [truncated]
```

#### 726. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6776-L6779` → after: `L6607-L6610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6607-L6610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6607-L6610) · [Before (L6776-L6779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6776-L6779)

```diff
-               }(BH), (0, tS.j)();
-             const LH = (0, XL.d)(),
-               AH = (0, XL.f)(LH);
-             BH.style.cssText = "position:absolute;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, hS.f)(BH, AH), (0, XL.c)(BH, LH), BH.width = AH.bufferWidth, BH.height = AH.bufferHeight;
+               }(OB), (0, yQ.k)();
+             const GB = (0, PG.i)(),
+               YB = (0, PG.l)(GB);
+             OB.style.cssText = "position:absolute;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, jQ.g)(OB, YB), (0, PG.e)(OB, GB), OB.width = YB.bufferWidth, OB.height = YB.bufferHeight;
```

#### 727. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6788` → after: `L6619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6619) · [Before (L6788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6788)

```diff
-             (0, SA.showUnsupported)((0, VB.o)("fetch"), kS.i.fetch, `the previews did not load: ${String(rH)}`)
+             (0, QY.showUnsupported)((0, nO.p)("fetch"), dQ.e.fetch, `the previews did not load: ${String(DB)}`)
```

#### 728. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6791` → after: `L6622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6622) · [Before (L6791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6791)

```diff
-         IH(), mH("loading" === (0, cB.B)() ? "load" : "build");
+         uB(), dB("loading" === (0, iO.x)() ? "load" : "build");
```

#### 729. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6799` → after: `L6630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6630) · [Before (L6799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6799)

```diff
-             (0, SA.showUnsupported)((0, VB.o)("fetch"), kS.i.fetch, `the ${null!==uH&&void 0!==uH?uH:"client"} build did not load: ${String(rH)}`)
+             (0, QY.showUnsupported)((0, nO.p)("fetch"), dQ.e.fetch, `the ${null!==pB&&void 0!==pB?pB:"client"} build did not load: ${String(DB)}`)
```

#### 730. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6802-L6805` → after: `L6633-L6636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6633-L6636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6633-L6636) · [Before (L6802-L6805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6802-L6805)

```diff
-         const TH = (0, ir.h)(),
-           UH = !TH && !0 !== zL.f.getItem(Gh),
-           VH = !TH && "loading" === (0, cB.B)();
-         mH("load"), await (0, pr.d)(vH, {
+         const VB = (0, xD.g)(),
+           SB = !VB && !0 !== yG.i.getItem(po),
+           nB = !VB && "loading" === (0, iO.x)();
+         dB("load"), await (0, tD.b)(WB, {
```

#### 731. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6807` → after: `L6638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6638) · [Before (L6807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6807)

```diff
-         }), VH && !(0, cB.U)() && await (0, pr.d)(vH, {
+         }), nB && !(0, iO.S)() && await (0, tD.b)(WB, {
```

#### 732. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6812-L6815` → after: `L6643-L6646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6643-L6646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6643-L6646) · [Before (L6812-L6815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6812-L6815)

```diff
-         const kH = (0, cB.q)();
-         if (!(0, cB.U)() && ("compile" === kH || "instantiate" === kH) && (0, cB.P)()) {
-           const HH = (0, cB.k)();
-           console.warn(`${Xh} the wasm client did not ${kH} here (${HH}): loading it again`);
+         const kB = (0, iO.n)();
+         if (!(0, iO.S)() && ("compile" === kB || "instantiate" === kB) && (0, iO.M)()) {
+           const BB = (0, iO.g)();
+           console.warn(`${zo} the wasm client did not ${kB} here (${BB}): loading it again`);
```

#### 733. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6842-L6846` → after: `L6673-L6677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6673-L6677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6673-L6677) · [Before (L6842-L6846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6842-L6846)

```diff
-             sleep: HH => (0, iB.d)(HH),
-             outOfMemory: () => (0, bL.c)((0, cB.p)()),
-             retryable: cB.P,
-             stepDownMemory: () => "instantiate" !== (0, cB.q)() || !tE() || (0, BA.p)() ? "none" : "halve" === (0, BA.o)() ? "halved" : "spent",
-             retry: pr.h
+             sleep: BB => (0, sO.c)(BB),
+             outOfMemory: () => (0, fG.c)((0, iO.l)()),
+             retryable: iO.M,
+             stepDownMemory: () => "instantiate" !== (0, iO.n)() || !PM() || (0, OY.s)() ? "none" : "halve" === (0, OY.p)() ? "halved" : "spent",
+             retry: tD.e
```

#### 734. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6852` → after: `L6683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6683) · [Before (L6852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6852)

```diff
-           } = BH, rH = AH ? HH : (0, cB.k)();
+           } = OB, DB = YB ? BB : (0, iO.g)();
```

#### 735. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6864-L6869` → after: `L6695-L6700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6695-L6700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6695-L6700) · [Before (L6864-L6869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6864-L6869)

```diff
-         if (!(0, cB.U)()) {
-           (0, cB.S)() && "compile" !== kH && "instantiate" !== kH && zL.f.setItem(Gh, !0);
-           const HH = (0, cB.q)();
-           if (fH("instantiate" === HH || null === HH ? `instantiate_${oH((0,cB.p)())}` : HH), "call" === HH) wE({
-             site: RL.u,
-             error: (0, cB.p)(),
+         if (!(0, iO.S)()) {
+           (0, iO.O)() && "compile" !== kB && "instantiate" !== kB && yG.i.setItem(po, !0);
+           const BB = (0, iO.n)();
+           if (mB("instantiate" === BB || null === BB ? `instantiate_${KB((0,iO.l)())}` : BB), "call" === BB) xM({
+             site: wG.s,
+             error: (0, iO.l)(),
```

#### 736. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6873` → after: `L6704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6704) · [Before (L6873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6873)

```diff
-             const BH = null !== HH && void 0 !== HH ? HH : "instantiate",
+             const OB = null !== BB && void 0 !== BB ? BB : "instantiate",
```

#### 737. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6875` → after: `L6706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6706) · [Before (L6875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6875)

```diff
-                 (0, SA.showUnsupported)((0, VB.o)(BH), kS.i[BH], (0, cB.k)())
+                 (0, QY.showUnsupported)((0, nO.p)(OB), dQ.e[OB], (0, iO.g)())
```

#### 738. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6877` → after: `L6708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6708) · [Before (L6877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6877)

```diff
-               AH = "compile" === kH || "instantiate" === kH ? kH : HH;
+               YB = "compile" === kB || "instantiate" === kB ? kB : BB;
```

#### 739. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6879-L6883` → after: `L6710-L6714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6710-L6714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6710-L6714) · [Before (L6879-L6883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6879-L6883)

```diff
-               const HH = OH || (0, bL.c)((0, cB.p)());
-               if (az && (HH && tE() ? !bH && "spent" !== (0, BA.o)(Date.now(), !0) : (0, nB.v)())) {
-                 const BH = (0, cB.k)();
-                 return (0, SA.reportLoadReload)((0, VB.o)(AH), kS.i[AH], BH), hE(`the wasm client ${HH?"ran out of memory to":"did not"} ${AH} here (${BH})`), null
-               }(0, SA.showUnsupported)(HH ? "memory" : (0, VB.o)(AH), kS.i[AH], (0, cB.k)())
+               const BB = UB || (0, fG.c)((0, iO.l)());
+               if (xy && (BB && PM() ? !fB && "spent" !== (0, OY.p)(Date.now(), !0) : (0, cO.p)())) {
+                 const OB = (0, iO.g)();
+                 return (0, QY.reportLoadReload)((0, nO.p)(YB), dQ.e[YB], OB), MM(`the wasm client ${BB?"ran out of memory to":"did not"} ${YB} here (${OB})`), null
+               }(0, QY.showUnsupported)(BB ? "memory" : (0, nO.p)(YB), dQ.e[YB], (0, iO.g)())
```

#### 740. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6888` → after: `L6719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6719) · [Before (L6888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6888)

```diff
-                 error: (0, cB.k)(),
+                 error: (0, iO.g)(),
```

#### 741. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6897` → after: `L6728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6728) · [Before (L6897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6897)

```diff
-         const KH = (0, cB.D)();
+         const FB = (0, iO.A)();
```

#### 742. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6903` → after: `L6734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6734) · [Before (L6903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6903)

```diff
-             wasm: KH.wX()
+             wasm: FB.eP()
```

#### 743. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6906-L6910` → after: `L6737-L6741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6737-L6741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6737-L6741) · [Before (L6906-L6910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6906-L6910)

```diff
-             RW: HH
-           } = vH.bindings, BH = HH.XrH();
-           if (BH !== UL.y) return fH("core_other"), wE({
-             site: RL.e,
-             error: `core ABI ${BH}, page ABI ${UL.y}`,
+             EZ: BB
+           } = WB.bindings, OB = BB.ADB();
+           if (OB !== SG.x) return mB("core_other"), xM({
+             site: wG.d,
+             error: `core ABI ${OB}, page ABI ${SG.x}`,
```

#### 744. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6913` → after: `L6744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6744) · [Before (L6913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6913)

```diff
-           const [LH, AH] = (0, UL.qe)();
+           const [GB, YB] = (0, SG.me)();
```

#### 745. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6916-L6917` → after: `L6747-L6748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6747-L6748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6747-L6748) · [Before (L6916-L6917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6916-L6917)

```diff
-           return fH(`core_${oH(rH)}`), wE({
-             site: RL.e,
+           return mB(`core_${KB(DB)}`), xM({
+             site: wG.d,
```

#### 746. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6923` → after: `L6754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6754) · [Before (L6923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6923)

```diff
-         const qH = new RL.h(cH, cB.u, {
+         const gB = new wG.g(iB, iO.u, {
```

#### 747. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6928` → after: `L6759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6759) · [Before (L6928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6928)

```diff
-                 if ("webgpu" !== BH || (0, ir.e)()) return !1;
+                 if ("webgpu" !== OB || (0, xD.c)()) return !1;
```

#### 748. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6930-L6931` → after: `L6761-L6762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6761-L6762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6761-L6762) · [Before (L6930-L6931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6930-L6931)

```diff
-                   if (HH.site === RL.g && (0, gL.n)(HH.error)) return "frames_refused";
-                   return HH.site === Yh && (0, gL.p)(HH.error) ? "start_failed" : null
+                   if (BB.site === wG.e && (0, rG.v)(BB.error)) return "frames_refused";
+                   return BB.site === qo && (0, rG.y)(BB.error) ? "start_failed" : null
```

#### 749. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6934-L6935` → after: `L6765-L6766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6765-L6766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6765-L6766) · [Before (L6934-L6935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6934-L6935)

```diff
-                 if (null !== (0, gL.X)(rH, AH, (0, NL.c)(HH.error))) return (0, SA.countRenderLost)(rH, HH.error, vz), !1;
-                 return AL.D.reloaded(null, !1), (0, SA.reportRenderReload)("webgpu", "start_failed" === rH ? 0 : 1, LH, {
+                 if (null !== (0, rG.eb)(DB, YB, (0, XG.c)(BB.error))) return (0, QY.countRenderLost)(DB, BB.error, Vy), !1;
+                 return YG.C.reloaded(null, !1), (0, QY.reportRenderReload)("webgpu", "start_failed" === DB ? 0 : 1, GB, {
```

#### 750. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6952-L6953` → after: `L6783-L6784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6783-L6784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6783-L6784) · [Before (L6952-L6953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6952-L6953)

```diff
-               return BH === UL.F.RenderDeviceLost
-             })) && ((0, ir.w)(), wz.deviceLost(), "webgpu" === uH && ((0, NL.d)(Pz), AL.D.lost())), null === (LH = fz) || void 0 === LH || LH.coreErrors(HH);
+               return OB === SG.I.RenderDeviceLost
+             })) && ((0, xD.D)(), Hy.deviceLost(), "webgpu" === pB && ((0, XG.d)(Sy), YG.C.lost())), null === (GB = Fy) || void 0 === GB || GB.coreErrors(BB);
```

#### 751. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6957` → after: `L6788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6788) · [Before (L6957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6957)

```diff
-                 return HH === UL.F.EnvUnknownSky ? (0, SA.unknownSkyWords)(wB.e.get("skyBox")) : HH === UL.F.RenderDeviceLost ? (0, SA.deviceLossWords)(BH, vz.boundAtMs) : null === (LH = Pz) || void 0 === LH ? void 0 : LH.GrH(HH, BH)
+                 return BB === SG.I.EnvUnknownSky ? (0, QY.unknownSkyWords)(eO.e.get("skyBox")) : BB === SG.I.RenderDeviceLost ? (0, QY.deviceLossWords)(OB, Vy.boundAtMs) : null === (GB = Sy) || void 0 === GB ? void 0 : GB.VDB(BB, OB)
```

#### 752. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6964` → after: `L6795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6795) · [Before (L6964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6964)

```diff
-               return BH === UL.F.EnvUnknownSky
+               return OB === SG.I.EnvUnknownSky
```

#### 753. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6970-L6975` → after: `L6801-L6806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6801-L6806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6801-L6806) · [Before (L6970-L6975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6970-L6975)

```diff
-               if ((0, ir.e)()) return;
-               const tH = BH === UL.Vc.WEBGPU,
-                 zH = AH === UL.Vc.PIPELINE_FAILED ? "pipeline_failed" : "lost",
-                 CH = AH === UL.Vc.RESTORE_LOST,
-                 EH = tH && (0, AL.q)(vz.adapter, LH, "lost" === zH, CH),
-                 GH = (0, NL.i)(Pz);
+               if ((0, xD.c)()) return;
+               const jB = OB === SG.dd.WEBGPU,
+                 yB = YB === SG.dd.PIPELINE_FAILED ? "pipeline_failed" : "lost",
+                 JB = YB === SG.dd.RESTORE_LOST,
+                 MB = jB && (0, YG.r)(Vy.adapter, GB, "lost" === yB, JB),
+                 zB = (0, XG.l)(Sy);
```

#### 754. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6977` → after: `L6808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6808) · [Before (L6977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6977)

```diff
-               const YH = tH ? (0, gL.X)(zH, rH, GH) : null;
+               const lB = jB ? (0, rG.eb)(yB, DB, zB) : null;
```

#### 755. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6980-L6981` → after: `L6811-L6812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6811-L6812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6811-L6812) · [Before (L6980-L6981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6980-L6981)

```diff
-                 const BH = void 0 === GH ? "" : ` (${GH.message})`;
-                 return void HH.crash(SA.RENDER_RELOAD_SITE, new Error(`${(0,SA.renderReloadMessage)("webgpu",zH,LH)} and ${YH}${BH}`))
+                 const OB = void 0 === zB ? "" : ` (${zB.message})`;
+                 return void BB.crash(QY.RENDER_RELOAD_SITE, new Error(`${(0,QY.renderReloadMessage)("webgpu",yB,GB)} and ${lB}${OB}`))
```

#### 756. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6984` → after: `L6815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6815) · [Before (L6984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6984)

```diff
-               "lost" === zH && (0, ir.w)();
+               "lost" === yB && (0, xD.D)();
```

#### 757. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6986` → after: `L6817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6817) · [Before (L6986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6986)

```diff
-                 if (Zz.gaveUp(), !(0, nB.v)()) {
+                 if (vy.gaveUp(), !(0, cO.p)()) {
```

#### 758. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6988-L6989` → after: `L6819-L6820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6819-L6820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6819-L6820) · [Before (L6988-L6989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6988-L6989)

```diff
-                   const BH = void 0 === GH ? "" : ` (${GH.message})`;
-                   return void HH.crash(SA.RENDER_RELOAD_SITE, new SA.GraphicsLostError(`${(0,SA.renderReloadMessage)(uH,zH,LH)} and ${nB.f}${BH}`))
+                   const OB = void 0 === zB ? "" : ` (${zB.message})`;
+                   return void BB.crash(QY.RENDER_RELOAD_SITE, new QY.GraphicsLostError(`${(0,QY.renderReloadMessage)(pB,yB,GB)} and ${cO.f}${OB}`))
```

#### 759. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L6991` → after: `L6822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6822) · [Before (L6991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L6991)

```diff
-                 console.warn(`${Xh} the GL render device's recovery gave up: the tab reloads once more onto the wasm client`)
+                 console.warn(`${zo} the GL render device's recovery gave up: the tab reloads once more onto the wasm client`)
```

#### 760. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7000-L7001` → after: `L6831-L6832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6831-L6832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6831-L6832) · [Before (L7000-L7001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7000-L7001)

```diff
-               }), (0, ir.q)();
-               const QH = (0, XH.e)();
+               }), (0, xD.s)();
+               const qB = (0, PB.g)();
```

#### 761. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7007` → after: `L6838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6838) · [Before (L7007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7007)

```diff
-               const vH = (0, XH.o)((() => {
+               const WB = (0, PB.l)((() => {
```

#### 762. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7017` → after: `L6848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6848) · [Before (L7017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7017)

```diff
-             HH.kind === UL.X.SkyImages ? null === (BH = Qt) || void 0 === BH || BH.onEvent(HH.payload) : HH.kind === UL.X.EnvLighting && (Wt = 1 === HH.payload[0])
+             BB.kind === SG.Y.SkyImages ? null === (OB = Rj) || void 0 === OB || OB.onEvent(BB.payload) : BB.kind === SG.Y.EnvLighting && (Wj = 1 === BB.payload[0])
```

#### 763. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7039` → after: `L6870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6870) · [Before (L7039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7039)

```diff
-                   !1 !== BH || HH.isStopped ? !0 === BH && console.info(`${Xh} terrain textures handed over again after the renderer lost them`) : console.warn(`${Xh} the terrain textures couldn't be handed over again: the terrain draws blank`)
+                   !1 !== OB || BB.isStopped ? !0 === OB && console.info(`${zo} terrain textures handed over again after the renderer lost them`) : console.warn(`${zo} the terrain textures couldn't be handed over again: the terrain draws blank`)
```

#### 764. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7051` → after: `L6882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6882) · [Before (L7051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7051)

```diff
-               if (HH.forEachNetOut(jE), qE(HH), (0, RL.M)(HH, {
+               if (BB.forEachNetOut(CM), aM(BB), (0, wG.L)(BB, {
```

#### 765. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7067-L7069` → after: `L6898-L6900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6898-L6900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6898-L6900) · [Before (L7067-L7069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7067-L7069)

```diff
-             LH.IX(HH.IX());
-             const rH = (0, Qr.Z)((() => {
-               LH.IX(HH.IX())
+             GB.kP(BB.kP());
+             const DB = (0, ZD.ab)((() => {
+               GB.kP(BB.kP())
```

#### 766. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7071` → after: `L6902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6902) · [Before (L7071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7071)

```diff
-             let SH = 6 * (0, Qr.N)() | 0;
+             let QB = 6 * (0, ZD.P)() | 0;
```

#### 767. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7075` → after: `L6906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6906) · [Before (L7075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7075)

```diff
-             (0, qS.f)(hH);
+             (0, rQ.d)(oB);
```

#### 768. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7080` → after: `L6911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6911) · [Before (L7080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7080)

```diff
-             return (0, eS.g)(tH), {
+             return (0, gQ.j)(jB), {
```

#### 769. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7087` → after: `L6918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6918) · [Before (L7087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7087)

```diff
-                 LH.value(UL.h.ProbeUsedProp, HH.usedProp()), 0 !== AH && LH.setFlags(AH)
+                 GB.value(SG.i.ProbeUsedProp, BB.usedProp()), 0 !== YB && GB.setFlags(YB)
```

#### 770. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7090` → after: `L6921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6921) · [Before (L7090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7090)

```diff
-                 (0, Qr.$)(rH), (0, qS.c)(hH), (0, eS.d)(tH)
+                 (0, ZD.eb)(DB), (0, rQ.c)(oB), (0, gQ.f)(jB)
```

#### 771. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7096` → after: `L6927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6927) · [Before (L7096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7096)

```diff
-               AH = qH.rings.input.writeRecord(UL.tb.AntiCheat, HH, BH, LH, 0)
+               YB = gB.rings.input.writeRecord(SG.ub.AntiCheat, BB, OB, GB, 0)
```

#### 772. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7101` → after: `L6932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6932) · [Before (L7101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7101)

```diff
-         lh = (HH, BH, LH) => qH.rings.cmd.writeCmd(HH, BH, LH), Kh = HH => qH.rings.cmd.growForCmd(HH), qt = !1, CE(), (0, DH.x)(qH, {
+         Lo = (BB, OB, GB) => gB.rings.cmd.writeCmd(BB, OB, GB), go = BB => gB.rings.cmd.growForCmd(BB), wj = !1, lM(), (0, aB.v)(gB, {
```

#### 773. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7128` → after: `L6959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6959) · [Before (L7128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7128)

```diff
-             return null !== (null !== (BH = null === (LH = EE()) || void 0 === LH ? void 0 : LH.modelUrl(HH)) && void 0 !== BH ? BH : null)
+             return null !== (null !== (OB = null === (GB = pM()) || void 0 === GB ? void 0 : GB.modelUrl(BB)) && void 0 !== OB ? OB : null)
```

#### 774. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7132` → after: `L6963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6963) · [Before (L7132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7132)

```diff
-         }), (0, FH.J)({
+         }), (0, hB.M)({
```

#### 775. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7143` → after: `L6974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6974) · [Before (L7143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7143)

```diff
-             (0, UB.e)()
+             (0, SO.b)()
```

#### 776. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7149` → after: `L6980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6980) · [Before (L7149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7149)

```diff
-         }), Xt = (0, FH.v)((() => {
+         }), pj = (0, hB.z)((() => {
```

#### 777. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7151-L7152` → after: `L6982-L6983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6982-L6983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6982-L6983) · [Before (L7151-L7152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7151-L7152)

```diff
-           const BH = (0, DH.i)();
-           null === (HH = (0, DH.r)()) || void 0 === HH || HH.followCursorAim(!0 === (null === BH || void 0 === BH ? void 0 : BH.isSessionLive) ? BH : null)
+           const OB = (0, aB.j)();
+           null === (BB = (0, aB.s)()) || void 0 === BB || BB.followCursorAim(!0 === (null === OB || void 0 === OB ? void 0 : OB.isSessionLive) ? OB : null)
```

#### 778. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7158-L7161` → after: `L6989-L6992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6989-L6992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6989-L6992) · [Before (L7158-L7161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7158-L7161)

```diff
-         const NH = (0, BA.g)(),
-           RH = (0, BA.d)(qH, NH);
-         zt = NH.basis, (0, WA.i)((0, EA.d)(null === RH ? null : (0, HA.n)(RH), (0, EA.k)())), tt = RH;
-         const jH = (0, gB.c)();
+         const XB = (0, OY.l)(),
+           wB = (0, OY.f)(gB, XB);
+         Pj = XB.basis, (0, ZY.e)((0, MY.d)(null === wB ? null : (0, BY.r)(wB), (0, MY.i)())), Mj = wB;
+         const EB = (0, rO.b)();
```

#### 779. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7165-L7166` → after: `L6996-L6997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6996-L6997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6996-L6997) · [Before (L7165-L7166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7165-L7166)

```diff
-         const dH = new mr.b(jH, (() => cH.HM()), (HH => {
-           qH.crash(RL.n, HH)
+         const bB = new KD.e(EB, (() => iB.ON()), (BB => {
+           gB.crash(wG.k, BB)
```

#### 780. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7168` → after: `L6999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR6999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L6999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L6999) · [Before (L7168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7168)

```diff
-         St = dH, ht = dH, null !== RH && dH.setCeiling(Math.min((0, mr.o)(RH), nH, (0, BA.k)()));
+         yj = bB, Jj = bB, null !== wB && bB.setCeiling(Math.min((0, KD.n)(wB), cB, (0, OY.o)()));
```

#### 781. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7172` → after: `L7003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L7003) · [Before (L7172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7172)

```diff
-             return null !== BH && (null === tt || BH < tt) && (tt = BH, (0, WA.i)((0, EA.d)((0, HA.n)(BH), (0, EA.k)()))), BH
+             return null !== OB && (null === Mj || OB < Mj) && (Mj = OB, (0, ZY.e)((0, MY.d)((0, BY.r)(OB), (0, MY.i)()))), OB
```

#### 782. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7174` → after: `L7005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L7005) · [Before (L7174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7174)

```diff
-             1 === BH ? (0, SA.reportMemoryShed)(HH, LH, Zh) : console.warn(`${Xh} wasm memory: shed again (${HH}): shed ${BH}`, LH.wasmMemoryShed)
+             1 === OB ? (0, QY.reportMemoryShed)(BB, GB, Ho) : console.warn(`${zo} wasm memory: shed again (${BB}): shed ${OB}`, GB.wasmMemoryShed)
```

#### 783. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7176` → after: `L7007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L7007) · [Before (L7176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7176)

```diff
-           const HH = (0, gL.M)(KH);
+           const BB = (0, rG.W)(FB);
```

#### 784. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7178` → after: `L7009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L7009) · [Before (L7178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7178)

```diff
-             storedChunks: () => cH.YrH(),
+             storedChunks: () => iB.SDB(),
```

#### 785. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7181` → after: `L7012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L7012) · [Before (L7181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7181)

```diff
-               return null !== (BH = null === HH || void 0 === HH ? void 0 : HH.urH()) && void 0 !== BH ? BH : 0
+               return null !== (OB = null === BB || void 0 === BB ? void 0 : BB.nDB()) && void 0 !== OB ? OB : 0
```

#### 786. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7184` → after: `L7015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L7015) · [Before (L7184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7184)

```diff
-           })), (0, QA.g)("wasm", dH, (() => {
+           })), (0, qY.k)("wasm", bB, (() => {
```

#### 787. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7190-L7193` → after: `L7021-L7024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7021-L7024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L7021-L7024) · [Before (L7190-L7193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7190-L7193)

```diff
-         })), window.addEventListener("pagehide", mE), window.addEventListener("pagehide", oE), !1;
-         const [aH, sH] = (0, zA.g)();
-         Kz = (0, EA.o)((HH => {
-           const BH = (0, EA.u)(HH, (0, EA.k)());
+         })), document.addEventListener("visibilitychange", wM), window.addEventListener("pagehide", EM), window.addEventListener("pagehide", IM), window.addEventListener("pagehide", FM), !1;
+         const [CB, HB] = (0, yY.h)();
+         Ly = (0, MY.m)((BB => {
+           const OB = (0, MY.p)(BB, (0, MY.i)());
```

#### 788. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7198` → after: `L7029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L7029) · [Before (L7198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7198)

```diff
-         }), qH.setAmbientOcclusion(!0 !== zL.e.getItem("disableAmbientOcclusion")), qH.setPoseLod(!0 !== zL.e.getItem(KB.W)), qH.setDebugLog(UL.N.Look, !0), qH.setDebugLog(UL.N.CameraSet, !0), (0, PS.startLookDebug)("wasm", {
+         }), gB.setAmbientOcclusion(!0 !== yG.g.getItem("disableAmbientOcclusion")), gB.setPoseLod(!0 !== yG.g.getItem(FO.R)), gB.setDebugLog(SG.N.Look, !0), gB.setDebugLog(SG.N.CameraSet, !0), (0, VQ.startLookDebug)("wasm", {
```

#### 789. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7201` → after: `L7032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L7032) · [Before (L7201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7201)

```diff
-         }), (0, xS.o)("remesh") && (qH.setDebugLog(UL.N.Remesh, !0), JH = () => qH.takeDebugLog(UL.N.Remesh), bS = new OS((0, TS.n)(), JH));
+         }), (0, WQ.s)("remesh") && (gB.setDebugLog(SG.N.Remesh, !0), vB = () => gB.takeDebugLog(SG.N.Remesh), kQ = new fQ((0, SQ.h)(), vB));
```

#### 790. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7205-L7207` → after: `L7036-L7038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7036-L7038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L7036-L7038) · [Before (L7205-L7207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7205-L7207)

```diff
-             SH = HH => zL.e.getItem(HH);
-           rH.sync(SH, BH), (0, rL.S)();
-           const hH = (0, zH.m)("customBindingsChanged", (() => {
+             QB = BB => yG.g.getItem(BB);
+           DB.sync(QB, OB), (0, DG.L)();
+           const oB = (0, yB.p)("customBindingsChanged", (() => {
```

#### 791. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7210` → after: `L7041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L7041) · [Before (L7210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7210)

```diff
-           (0, vA.s)(BH);
+           (0, AY.k)(OB);
```

#### 792. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7212` → after: `L7043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L7043) · [Before (L7212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7212)

```diff
-             CH = (0, FH.v)((() => {
+             JB = (0, hB.z)((() => {
```

#### 793. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7214` → after: `L7045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L7045) · [Before (L7214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7214)

```diff
-               tH.size > 0 && yA() && !0 === (null === (HH = (0, DH.i)()) || void 0 === HH ? void 0 : HH.localPlayerAlive()) && zH.k.AX("usedKeyboard")
+               jB.size > 0 && BD() && !0 === (null === (BB = (0, aB.j)()) || void 0 === BB ? void 0 : BB.localPlayerAlive()) && yB.o.tM("usedKeyboard")
```

#### 794. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7216` → after: `L7047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L7047) · [Before (L7216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7216)

```diff
-             EH = RA.e.heldSizer((() => (0, XL.l)(HH))),
+             MB = EY.b.heldSizer((() => (0, PG.p)(BB))),
```

#### 795. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7220` → after: `L7051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L7051) · [Before (L7220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7220)

```diff
-                 rH.moves(HH) && (tH.add(HH), yA() && zH.k.AX("usedKeyboard"))
+                 DB.moves(BB) && (jB.add(BB), BD() && yB.o.tM("usedKeyboard"))
```

#### 796. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7229` → after: `L7060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L7060) · [Before (L7229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7229)

```diff
-                 iA.h.measure(HH.getBoundingClientRect()), (0, jA.m)()
+                 xY.f.measure(BB.getBoundingClientRect()), (0, cY.l)()
```

#### 797. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7233-L7234` → after: `L7064-L7065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7064-L7065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L7064-L7065) · [Before (L7233-L7234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7233-L7234)

```diff
-                 const LH = (0, XL.o)(HH, BH),
-                   AH = RA.e.onRelease(BH);
+                 const GB = (0, PG.s)(BB, OB),
+                   YB = EY.b.onRelease(OB);
```

#### 798. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7240` → after: `L7071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L7071) · [Before (L7240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7240)

```diff
-                 iA.h.measure(HH.getBoundingClientRect())
+                 xY.f.measure(BB.getBoundingClientRect())
```

#### 799. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7252` → after: `L7083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L7083) · [Before (L7252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7252)

```diff
-             hH(), CH(), (0, vA.s)(null), GH(), XH()
+             oB(), JB(), (0, AY.k)(null), zB(), PB()
```

#### 800. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7257` → after: `L7088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L7088) · [Before (L7257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7257)

```diff
-           })), !Kt && (0, rr.g)(HH, rH) && (0, rr.e)((() => {
+           })), !gj && (0, QD.f)(BB, DB) && (0, QD.c)((() => {
```

#### 801. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7268-L7269` → after: `L7099-L7100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7099-L7100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L7099-L7100) · [Before (L7268-L7269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7268-L7269)

```diff
-         (0, cB.Y)((() => {
-           "call" === (0, cB.q)() && qH.crash(RL.u, (0, cB.p)())
+         (0, iO.U)((() => {
+           "call" === (0, iO.n)() && gB.crash(wG.s, (0, iO.l)())
```

#### 802. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7271` → after: `L7102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L7102) · [Before (L7271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7271)

```diff
-         const yH = (0, RL.O)(qH.rings.worker, (() => {
+         const tB = (0, wG.M)(gB.rings.worker, (() => {
```

#### 803. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7281` → after: `L7112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L7112) · [Before (L7281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7281)

```diff
-             module: (0, cB.x)(),
+             module: (0, iO.v)(),
```

#### 804. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7283` → after: `L7114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L7114) · [Before (L7283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7283)

```diff
-               const BH = (0, DH.r)();
+               const OB = (0, aB.s)();
```

#### 805. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7302` → after: `L7133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L7133) · [Before (L7302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7302)

```diff
-                 if (!AH || BH) return void LH.XX(AH);
+                 if (!YB || OB) return void GB.jP(YB);
```

#### 806. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7304` → after: `L7135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L7135) · [Before (L7304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7304)

```diff
-                   LH.XX(!0)
+                   GB.jP(!0)
```

#### 807. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7313-L7314` → after: `L7144-L7145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7144-L7145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L7144-L7145) · [Before (L7313-L7314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7313-L7314)

```diff
-                   site: RL.E,
-                   error: new Error(`a world-gen worker's load failed (${HH}): ${SH}`),
+                   site: wG.C,
+                   error: new Error(`a world-gen worker's load failed (${BB}): ${QB}`),
```

#### 808. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7327` → after: `L7158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L7158) · [Before (L7327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7327)

```diff
-                 XX: BH => {
+                 jP: OB => {
```

#### 809. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7329` → after: `L7160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L7160) · [Before (L7329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7329)

```diff
-                     build: (0, Yr.h)(),
+                     build: (0, pD.j)(),
```

#### 810. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7336` → after: `L7167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L7167) · [Before (L7336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7336)

```diff
-               (0, SA.reportWorkerStartTimeout)(RL.E, HH, Zh)
+               (0, QY.reportWorkerStartTimeout)(wG.C, BB, Ho)
```

#### 811. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7351` → after: `L7182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L7182) · [Before (L7351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7351)

```diff
-                 HH.rings.worker.writeWorkerRecord(LH, AH, rH, 0, SH, hH) || HH.crash(RL.E, `a world-gen record of kind ${AH} did not fit the worker-in ring`)
+                 BB.rings.worker.writeWorkerRecord(GB, YB, DB, 0, QB, oB) || BB.crash(wG.C, `a world-gen record of kind ${YB} did not fit the worker-in ring`)
```

#### 812. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7357` → after: `L7188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L7188) · [Before (L7357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7357)

```diff
-             module: (0, cB.x)(),
+             module: (0, iO.v)(),
```

#### 813. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7361` → after: `L7192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L7192) · [Before (L7361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7361)

```diff
-               }, BH] = await Promise.all([LH.e(48).then((() => LH(54602))), Promise.resolve().then((() => LH(81))).then((HH => {
+               }, OB] = await Promise.all([GB.e(48).then((() => GB(54108))), Promise.resolve().then((() => GB(92))).then((BB => {
```

#### 814. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7369-L7370` → after: `L7200-L7201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7200-L7201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmPlay.js#L7200-L7201) · [Before (L7369-L7370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmPlay.js#L7369-L7370)

```diff
-                 count: (0, yB.f)(BH),
-                 maxKeptLightStates: BH || (0, pB.k)() ? 1 : void 0
+                 count: (0, tO.g)(OB),
+                 maxKeptLightStates: OB || (0, xO.i)() ? 1 : void 0
```
