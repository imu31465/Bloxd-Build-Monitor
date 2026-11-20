# Changed — Bundle Modifications Report (Part 045 / 132)

- **Updated at**: `2026-11-21T04:21 JST`
- **Part**: `45 / 132` (**439** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 044](part-044.md) · [Part 046 →](part-046.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/237.js` (bbb6l5.0244a119 → halsg.2bd74967 · continued)

- **File**: `bundles/bloxd.io/chunks/js/237.js` (1230 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3)

#### 709. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10362-L10363` → after: `L10362-L10363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10362-L10363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10362-L10363) · [Before (L10362-L10363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10362-L10363)

```diff
-       if (Nq && qq.baf2RxWaterIn <= 0 && (null !== (Eq = qq.baf2RxCryoIn) && void 0 !== Eq ? Eq : 0) <= 0) return QW("rxFix_noWater", "warn");
-       const aq = lq.fix === `${BW}rxFix_scramCool` ? oA(qq) : null;
+       if (Zb && bb.baf2RxWaterIn <= 0 && (null !== (ub = bb.baf2RxCryoIn) && void 0 !== ub ? ub : 0) <= 0) return Ww("rxFix_noWater", "warn");
+       const Xb = Ob.fix === `${aw}rxFix_scramCool` ? lY(bb) : null;
```

#### 710. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10378` → after: `L10378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10378) · [Before (L10378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10378)

```diff
-         key: null !== (Vq = lq.fix) && void 0 !== Vq ? Vq : `${BW}rxFix_idle`,
+         key: null !== (pb = Ob.fix) && void 0 !== pb ? pb : `${aw}rxFix_idle`,
```

#### 711. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10383-L10384` → after: `L10383-L10384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10383-L10384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10383-L10384) · [Before (L10383-L10384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10383-L10384)

```diff
-       if ("cryo" === Wq.wW && dq && Wq.needPerS > 0 && Wq.usePerS < WW * Wq.needPerS) return QW("noWater" === dq ? "rxFix_cryoLowWater" : "rxFix_cryoLow", "warn");
-       const jq = "cryo" === Wq.wW,
+       if ("cryo" === wb.Pw && ob && wb.needPerS > 0 && wb.usePerS < Hw * wb.needPerS) return Ww("noWater" === ob ? "rxFix_cryoLowWater" : "rxFix_cryoLow", "warn");
+       const Ab = "cryo" === wb.Pw,
```

#### 712. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10389` → after: `L10389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10389) · [Before (L10389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10389)

```diff
-           return QW(`${jq?"rxCryoShortLine":"rxWaterShortLine"}${1===Wq.makersShort?"One":""}${!jq&&qq.baf2RxCryoOpen?"OrCryo":""}`, "warn", {
+           return Ww(`${Ab?"rxCryoShortLine":"rxWaterShortLine"}${1===wb.makersShort?"One":""}${!Ab&&bb.baf2RxCryoOpen?"OrCryo":""}`, "warn", {
```

#### 713. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10403-L10404` → after: `L10403-L10404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10403-L10404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10403-L10404) · [Before (L10403-L10404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10403-L10404)

```diff
-         }, "cryo" === lq.wW ? eq.h : 1, !0);
-         return Math.max(0, Oq * aW(lq.wW) - lq.inPerS)
+         }, "cryo" === Ob.Pw ? Qb.f : 1, !0);
+         return Math.max(0, Gb * Zw(Ob.Pw) - Ob.inPerS)
```

#### 714. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10406` → after: `L10406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10406) · [Before (L10406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10406)

```diff
-       if (gq && oq > 0) return QW("cryo" === Wq.wW ? "rxOdShortCryo" : "rxOdShortWater", "warn", {
+       if (hb && Kb > 0) return Ww("cryo" === wb.Pw ? "rxOdShortCryo" : "rxOdShortWater", "warn", {
```

#### 715. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10415` → after: `L10415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10415) · [Before (L10415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10415)

```diff
-         safe: null !== (Qq = Pq.hotAbove) && void 0 !== Qq ? Qq : 100
+         safe: null !== (Cb = Wb.hotAbove) && void 0 !== Cb ? Cb : 100
```

#### 716. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10432` → after: `L10432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10432) · [Before (L10432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10432)

```diff
-         return null !== Eq && ("running" !== Eq || arguments.length > 2 && void 0 !== arguments[2] && !arguments[2] || arguments.length > 3 && void 0 !== arguments[3] && arguments[3]) ? null : 0 === qq.rods ? `${aA}rxLimitNoRods` : `${aA}rxLimit_${xA(qq)}`
+         return null !== ub && ("running" !== ub || arguments.length > 2 && void 0 !== arguments[2] && !arguments[2] || arguments.length > 3 && void 0 !== arguments[3] && arguments[3]) ? null : 0 === bb.rods ? `${ZY}rxLimitNoRods` : `${ZY}rxLimit_${UY(bb)}`
```

#### 717. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10437` → after: `L10437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10437) · [Before (L10437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10437)

```diff
-       if (tq === `${BW}rxLimit_size`) {
+       if (rb === `${aw}rxLimit_size`) {
```

#### 718. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10463` → after: `L10463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10463) · [Before (L10463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10463)

```diff
-         return QW(qq.canFill ? `rxPlanLeft${Eq}` : `rxPlanLeftNoFill${Eq}`, "info", {
+         return Ww(bb.canFill ? `rxPlanLeft${ub}` : `rxPlanLeftNoFill${ub}`, "info", {
```

#### 719. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10468` → after: `L10468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10468) · [Before (L10468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10468)

```diff
-       const gq = null !== (Eq = qq.idle) && void 0 !== Eq ? Eq : 0;
+       const hb = null !== (ub = bb.idle) && void 0 !== ub ? ub : 0;
```

#### 720. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10482` → after: `L10482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10482) · [Before (L10482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10482)

```diff
-           key: 0 === Eq ? `${BW}rxWhy_rodAlone` : 1 === Eq ? `${BW}rxWhy_rodOne` : `${BW}rxWhy_rod`,
+           key: 0 === ub ? `${aw}rxWhy_rodAlone` : 1 === ub ? `${aw}rxWhy_rodOne` : `${aw}rxWhy_rod`,
```

#### 721. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10490` → after: `L10490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10490) · [Before (L10490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10490)

```diff
-         key: `${BW}rxWhy_channel`,
+         key: `${aw}rxWhy_channel`,
```

#### 722. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10495` → after: `L10495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10495) · [Before (L10495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10495)

```diff
-         key: `${BW}rxWhy_deadChannel`,
+         key: `${aw}rxWhy_deadChannel`,
```

#### 723. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10498` → after: `L10498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10498) · [Before (L10498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10498)

```diff
-         key: `${BW}rxWhy_graphite`,
+         key: `${aw}rxWhy_graphite`,
```

#### 724. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10501` → after: `L10501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10501) · [Before (L10501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10501)

```diff
-         key: `${BW}rxWhy_core`,
+         key: `${aw}rxWhy_core`,
```

#### 725. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10520` → after: `L10520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10520) · [Before (L10520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10520)

```diff
-       } = (0, hl.v)(), mq = nW(Eq, WE), xq = Eq.baf2RxTarget, Aq = Eq.baf2RxThrottle, cq = function(qq) {
+       } = (0, DO.K)(), Ub = Dw(ub, wu), Lb = ub.baf2RxTarget, Yb = ub.baf2RxThrottle, Sb = function(bb) {
```

#### 726. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10545` → after: `L10545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10545) · [Before (L10545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10545)

```diff
-           mq && lq(`${hW}rxWhy_startFirst`)
+           Ub && Ob(`${nw}rxWhy_startFirst`)
```

#### 727. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10549` → after: `L10549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10549) · [Before (L10549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10549)

```diff
-           children: Oq(`${hW}rxThrottle`)
+           children: Gb(`${nw}rxThrottle`)
```

#### 728. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10562` → after: `L10562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10562) · [Before (L10562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10562)

```diff
-             "aria-label": Oq(`${hW}rxThrottle`),
+             "aria-label": Gb(`${nw}rxThrottle`),
```

#### 729. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10577` → after: `L10577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10577) · [Before (L10577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10577)

```diff
-               background: `linear-gradient(90deg, #4cc46a 0 ${uq.amber}%, #ffb020 ${uq.amber}% ${uq.red}%, #ff3b30 ${uq.red}%)`
+               background: `linear-gradient(90deg, #4cc46a 0 ${ab.amber}%, #ffb020 ${ab.amber}% ${ab.red}%, #ff3b30 ${ab.red}%)`
```

#### 730. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10583` → after: `L10583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10583) · [Before (L10583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10583)

```diff
-               left: `calc(${Aq}% + ${8*(1-Aq/50)}px)`
+               left: `calc(${Yb}% + ${8*(1-Yb/50)}px)`
```

#### 731. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10588` → after: `L10588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10588) · [Before (L10588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10588)

```diff
-           children: [`${xq}%`, (0, rO.jsx)("i", {
+           children: [`${Lb}%`, (0, jG.jsx)("i", {
```

#### 732. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10604` → after: `L10604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10604) · [Before (L10604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10604)

```diff
-       } = (0, hl.v)(), Yq = jW(Eq, Eq.baf2RxTarget), lq = VW(Eq).wW, Oq = gq("cryo" === lq ? `${hW}rxRateCryo` : `${hW}rxRateWater`, {
+       } = (0, DO.K)(), Bb = ow(ub, ub.baf2RxTarget), Ob = Xw(ub).Pw, Gb = hb("cryo" === Ob ? `${nw}rxRateCryo` : `${nw}rxRateWater`, {
```

#### 733. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10606` → after: `L10606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10606) · [Before (L10606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10606)

```diff
-       }), mq = gq(`${hW}rxChain`, {
+       }), Ub = hb(`${nw}rxChain`, {
```

#### 734. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10611` → after: `L10611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10611) · [Before (L10611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10611)

```diff
-       }), xq = null !== Yq.coolantSecs ? Yq.coolantSecs >= 1 ? gq("cryo" === lq ? `${hW}rxThrottleCryoOut` : `${hW}rxThrottleWaterOut`, {
+       }), Lb = null !== Bb.coolantSecs ? Bb.coolantSecs >= 1 ? hb("cryo" === Ob ? `${nw}rxThrottleCryoOut` : `${nw}rxThrottleWaterOut`, {
```

#### 735. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10613` → after: `L10613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10613) · [Before (L10613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10613)

```diff
-       }) : gq("cryo" === lq ? `${hW}rxThrottleCryoDry` : `${hW}rxThrottleWaterDry`) : null;
+       }) : hb("cryo" === Ob ? `${nw}rxThrottleCryoDry` : `${nw}rxThrottleWaterDry`) : null;
```

#### 736. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10620` → after: `L10620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10620) · [Before (L10620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10620)

```diff
-           children: [" \xb7 ", gq(`${hW}rxChainPellets`, {
+           children: [" \xb7 ", hb(`${nw}rxChainPellets`, {
```

#### 737. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10636` → after: `L10636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10636) · [Before (L10636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10636)

```diff
-       } = (0, hl.v)(), {
+       } = (0, DO.K)(), {
```

#### 738. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10649` → after: `L10649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10649) · [Before (L10649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10649)

```diff
-             label: Wq ? mq(`${hW}rxOdLeft`, {
+             label: wb ? Ub(`${nw}rxOdLeft`, {
```

#### 739. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10651` → after: `L10651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10651) · [Before (L10651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10651)

```diff
-             }) : mq(`${hW}rxOverdrive`),
+             }) : Ub(`${nw}rxOverdrive`),
```

#### 740. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10655` → after: `L10655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10655) · [Before (L10655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10655)

```diff
-               Nq ? lq(`${hW}rxOverdriveTier`, {
+               Zb ? Ob(`${nw}rxOverdriveTier`, {
```

#### 741. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10659` → after: `L10659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10659) · [Before (L10659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10659)

```diff
-           }), uq || Eq.startGuard ? (0, rO.jsx)(Qm.v, {
+           }), ab || ub.startGuard ? (0, jG.jsx)(CU.q, {
```

#### 742. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10666` → after: `L10666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10666) · [Before (L10666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10666)

```diff
-             children: mq(Eq.startGuard ? `${hW}rxStarting` : `${hW}rxStart`)
+             children: Ub(ub.startGuard ? `${nw}rxStarting` : `${nw}rxStart`)
```

#### 743. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10671` → after: `L10671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10671) · [Before (L10671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10671)

```diff
-             children: (0, rO.jsx)(Qm.K, {
+             children: (0, jG.jsx)(CU.H, {
```

#### 744. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10675` → after: `L10675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10675) · [Before (L10675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10675)

```diff
-               children: mq(`${hW}rxScram`)
+               children: Ub(`${nw}rxScram`)
```

#### 745. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10682-L10684` → after: `L10682-L10684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10682-L10684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10682-L10684) · [Before (L10682-L10684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10682-L10684)

```diff
-           title: `${hW}rxOdConfirmTitle`,
-           body: `${hW}rxOdConfirmBody`,
-           yes: `${hW}rxOdConfirm`,
+           title: `${nw}rxOdConfirmTitle`,
+           body: `${nw}rxOdConfirmBody`,
+           yes: `${nw}rxOdConfirm`,
```

#### 746. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10691` → after: `L10691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10691) · [Before (L10691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10691)

```diff
-             })), Oq(`${hW}rxWhy_overdrive`)
+             })), Gb(`${nw}rxWhy_overdrive`)
```

#### 747. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10705` → after: `L10705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10705) · [Before (L10705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10705)

```diff
-       } = (0, hl.v)(), {
+       } = (0, DO.K)(), {
```

#### 748. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10719` → after: `L10719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10719) · [Before (L10719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10719)

```diff
-         }), Yq ? (0, rO.jsx)(Qm.i, {
+         }), Bb ? (0, jG.jsx)(CU.g, {
```

#### 749. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10721` → after: `L10721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10721) · [Before (L10721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10721)

```diff
-           children: lq(`${hW}rxKeepSize`)
+           children: Ob(`${nw}rxKeepSize`)
```

#### 750. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10725` → after: `L10725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10725) · [Before (L10725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10725)

```diff
-             label: lq(`${hW}rxGuide`),
+             label: Ob(`${nw}rxGuide`),
```

#### 751. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10731` → after: `L10731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10731) · [Before (L10731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10731)

```diff
-             label: lq(`${hW}rxStarter`),
+             label: Ob(`${nw}rxStarter`),
```

#### 752. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10752` → after: `L10752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10752) · [Before (L10752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10752)

```diff
-       } = (0, hl.v)(), Oq = Eq.length <= 3, mq = Eq.reduce(((qq, Eq) => {
+       } = (0, DO.K)(), Gb = ub.length <= 3, Ub = ub.reduce(((bb, ub) => {
```

#### 753. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10761` → after: `L10761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10761) · [Before (L10761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10761)

```diff
-           Yq("battery" === gq ? `${hW}batWhy_store` : `${hW}rxShellHint`)
+           Bb("battery" === hb ? `${nw}batWhy_store` : `${nw}rxShellHint`)
```

#### 754. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10765` → after: `L10765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10765) · [Before (L10765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10765)

```diff
-           children: 1 === mq ? lq(`${hW}rxBlocksOne`) : lq(`${hW}rxBlocks`, {
+           children: 1 === Ub ? Ob(`${nw}rxBlocksOne`) : Ob(`${nw}rxBlocks`, {
```

#### 755. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10770` → after: `L10770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10770) · [Before (L10770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10770)

```diff
-           children: lq("battery" === gq ? `${hW}batPartsDone` : `${hW}rxShellDone`)
+           children: Ob("battery" === hb ? `${nw}batPartsDone` : `${nw}rxShellDone`)
```

#### 756. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10777` → after: `L10777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10777) · [Before (L10777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10777)

```diff
-             return `rgb(${gq}, ${Yq}, ${lq})`
+             return `rgb(${hb}, ${Bb}, ${Ob})`
```

#### 757. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10789` → after: `L10789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10789) · [Before (L10789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10789)

```diff
-               title: lq(`${hW}rxShopGhost`)
+               title: Ob(`${nw}rxShopGhost`)
```

#### 758. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10792` → after: `L10792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10792) · [Before (L10792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10792)

```diff
-               children: (0, rO.jsx)(bl.e, {
+               children: (0, jG.jsx)(zO.d, {
```

#### 759. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10798` → after: `L10798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10798) · [Before (L10798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10798)

```diff
-               children: Oq ? `${gq} ${xq=YO(lq,Eq),xq.replace(/^(Reactor|Battery) (?=\S)/,"")}` : gq
+               children: Gb ? `${hb} ${Lb=BG(Ob,ub),Lb.replace(/^(Reactor|Battery) (?=\S)/,"")}` : hb
```

#### 760. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10804` → after: `L10804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10804) · [Before (L10804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10804)

```diff
-               children: Oq ? lq(`${hW}rxShopShort`, {
+               children: Gb ? Ob(`${nw}rxShopShort`, {
```

#### 761. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10823` → after: `L10823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10823) · [Before (L10823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10823)

```diff
-       } = (0, hl.v)(), Wq = km(), Nq = OW(cq), {
+       } = (0, DO.K)(), wb = IU(), Zb = Ow(Sb), {
```

#### 762. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10830` → after: `L10830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10830) · [Before (L10830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10830)

```diff
-       }, [Pq, Qq, yq] = null !== (Eq = null === Nq || void 0 === Nq ? void 0 : Nq.dims) && void 0 !== Eq ? Eq : [0, 0, 0], tq = iA(null !== (gq = null === Nq || void 0 === Nq ? void 0 : Nq.WB) && void 0 !== gq ? gq : 0), rq = !0 === (null === jq || void 0 === jq ? void 0 : jq.baf … [truncated]
+       }, [Wb, Cb, db] = null !== (ub = null === Zb || void 0 === Zb ? void 0 : Zb.dims) && void 0 !== ub ? ub : [0, 0, 0], rb = zY(null !== (hb = null === Zb || void 0 === Zb ? void 0 : Zb.LH) && void 0 !== hb ? hb : 0), jb = !0 === (null === Ab || void 0 === Ab ? void 0 : Ab.baf … [truncated]
```

#### 763. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10832` → after: `L10832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10832) · [Before (L10832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10832)

```diff
-       }(bq, vq, null !== (mq = null === jq || void 0 === jq ? void 0 : jq.baf2BatIslandCap) && void 0 !== mq ? mq : 0), Zq = null !== (xq = null === jq || void 0 === jq ? void 0 : jq.baf2BatMadePerS) && void 0 !== xq ? xq : 0, fq = null !== (Aq = null === jq || void 0 === jq ? vo … [truncated]
+       }(zb, nb, null !== (Ub = null === Ab || void 0 === Ab ? void 0 : Ab.baf2BatIslandCap) && void 0 !== Ub ? Ub : 0), ib = null !== (Lb = null === Ab || void 0 === Ab ? void 0 : Ab.baf2BatMadePerS) && void 0 !== Lb ? Lb : 0, vb = null !== (Yb = null === Ab || void 0 === Ab ? vo … [truncated]
```

#### 764. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10836-L10840` → after: `L10836-L10840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10836-L10840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10836-L10840) · [Before (L10836-L10840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10836-L10840)

```diff
-         if (rq) "charging" === iq ? (Mq = `${TW}batLine_charging`, Tq = {
-           time: PO(Bq, (hq - vq) / Math.max(.05, null !== bq && void 0 !== bq ? bq : 0))
-         }, zq = "ok") : "draining" === iq ? (Mq = `${TW}batLine_draining`, Tq = {
-           time: PO(Bq, vq / Math.max(.05, -(null !== bq && void 0 !== bq ? bq : 0)))
-         }, zq = "warn") : Mq = "full" === iq ? `${TW}batLine_full` : vq <= 0 && fq > 0 ? `${TW}batLine_empty` : `${TW}batLine_steady`;
+         if (jb) "charging" === gb ? (tb = `${tw}batLine_charging`, Jb = {
+           time: WG(Hb, (Db - nb) / Math.max(.05, null !== zb && void 0 !== zb ? zb : 0))
+         }, eb = "ok") : "draining" === gb ? (tb = `${tw}batLine_draining`, Jb = {
+           time: WG(Hb, nb / Math.max(.05, -(null !== zb && void 0 !== zb ? zb : 0)))
+         }, eb = "warn") : tb = "full" === gb ? `${tw}batLine_full` : nb <= 0 && vb > 0 ? `${tw}batLine_empty` : `${tw}batLine_steady`;
```

#### 765. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10854` → after: `L10854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10854) · [Before (L10854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10854)

```diff
-             count: String(null !== (Sq = qq.params.count) && void 0 !== Sq ? Sq : 0)
+             count: String(null !== (Nb = bb.params.count) && void 0 !== Nb ? Nb : 0)
```

#### 766. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10857` → after: `L10857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10857) · [Before (L10857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10857)

```diff
-       else Mq = `${TW}batLine_steady`;
+       else tb = `${tw}batLine_steady`;
```

#### 767. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10859` → after: `L10859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10859) · [Before (L10859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10859)

```diff
-       return (0, rO.jsx)(Pm.c, {
+       return (0, jG.jsx)(WU.b, {
```

#### 768. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10874` → after: `L10874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10874) · [Before (L10874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10874)

```diff
-                 children: (0, rO.jsx)(bl.e, {
+                 children: (0, jG.jsx)(zO.d, {
```

#### 769. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10881` → after: `L10881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10881) · [Before (L10881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10881)

```diff
-                   children: Bq(`${TW}batTitle`)
+                   children: Hb(`${tw}batTitle`)
```

#### 770. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10887` → after: `L10887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10887) · [Before (L10887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10887)

```diff
-                   children: [Pq, "\xd7", Qq, "\xd7", yq, " \xb7 ", Bq(rq ? `${TW}batState_${iq}` : `${TW}rxSubPlanShort`)]
+                   children: [Wb, "\xd7", Cb, "\xd7", db, " \xb7 ", Hb(jb ? `${tw}batState_${gb}` : `${tw}rxSubPlanShort`)]
```

#### 771. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10894` → after: `L10894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10894) · [Before (L10894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10894)

```diff
-                 cap: rq ? tq : void 0,
+                 cap: jb ? rb : void 0,
```

#### 772. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10901` → after: `L10901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10901) · [Before (L10901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10901)

```diff
-               }), (0, rO.jsx)(Qm.m, {
+               }), (0, jG.jsx)(CU.i, {
```

#### 773. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10913-L10916` → after: `L10913-L10916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10913-L10916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10913-L10916) · [Before (L10913-L10916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10913-L10916)

```diff
-                 label: Bq(`${TW}batMade`),
-                 number: rq ? `\u26a1 ${iA(Zq)}/s` : "\u2014",
-                 note: Bq(`${TW}batMadeNote`),
-                 share: rq ? Zq / pq : void 0,
+                 label: Hb(`${tw}batMade`),
+                 number: jb ? `\u26a1 ${zY(ib)}/s` : "\u2014",
+                 note: Hb(`${tw}batMadeNote`),
+                 share: jb ? ib / sb : void 0,
```

#### 774. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10918` → after: `L10918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10918) · [Before (L10918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10918)

```diff
-                   dq(`${TW}batWhy_made`)
+                   ob(`${tw}batWhy_made`)
```

#### 775. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10927` → after: `L10927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10927) · [Before (L10927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10927)

```diff
-                   dq(`${TW}batWhy_store`)
+                   ob(`${tw}batWhy_store`)
```

#### 776. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10932` → after: `L10932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10932) · [Before (L10932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10932)

```diff
-                     upTo: rq ? nq : 0,
+                     upTo: jb ? xb : 0,
```

#### 777. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10944` → after: `L10944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10944) · [Before (L10944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10944)

```diff
-                     children: rq ? Bq(`${TW}batStoredOf`, {
+                     children: jb ? Hb(`${tw}batStoredOf`, {
```

#### 778. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10947` → after: `L10947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10947) · [Before (L10947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10947)

```diff
-                     }) : Bq(`${TW}batWillHold`, {
+                     }) : Hb(`${tw}batWillHold`, {
```

#### 779. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10951` → after: `L10951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10951) · [Before (L10951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10951)

```diff
-                     children: Bq(`${TW}batAdds`, {
+                     children: Hb(`${tw}batAdds`, {
```

#### 780. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10955` → after: `L10955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10955) · [Before (L10955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10955)

```diff
-                     children: Bq(`${TW}batBreakNote`, {
+                     children: Hb(`${tw}batBreakNote`, {
```

#### 781. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10966-L10969` → after: `L10966-L10969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10966-L10969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10966-L10969) · [Before (L10966-L10969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10966-L10969)

```diff
-                 label: Bq(`${TW}batUsed`),
-                 number: rq ? `\u26a1 ${iA(fq)}/s` : "\u2014",
-                 note: Bq(`${TW}batUsedNote`),
-                 share: rq ? fq / pq : void 0,
+                 label: Hb(`${tw}batUsed`),
+                 number: jb ? `\u26a1 ${zY(vb)}/s` : "\u2014",
+                 note: Hb(`${tw}batUsedNote`),
+                 share: jb ? vb / sb : void 0,
```

#### 782. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10971` → after: `L10971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10971) · [Before (L10971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10971)

```diff
-                   dq(`${TW}batWhy_used`)
+                   ob(`${tw}batWhy_used`)
```

#### 783. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10980` → after: `L10980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10980) · [Before (L10980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10980)

```diff
-               children: Bq(`${TW}rxNotYours`)
+               children: Hb(`${tw}rxNotYours`)
```

#### 784. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10995` → after: `L10995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10995) · [Before (L10995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10995)

```diff
-                   label: Bq(`${TW}rxGuide`),
+                   label: Hb(`${tw}rxGuide`),
```

#### 785. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L10999` → after: `L10999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R10999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L10999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L10999) · [Before (L10999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L10999)

```diff
-                 }), jq.baf2BatCanFill && (0, rO.jsx)(Qm.p, {
+                 }), Ab.baf2BatCanFill && (0, jG.jsx)(CU.m, {
```

#### 786. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11006` → after: `L11006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11006) · [Before (L11006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11006)

```diff
-                   children: Bq(`${TW}rxFill`)
+                   children: Hb(`${tw}rxFill`)
```

#### 787. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11037` → after: `L11037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11037) · [Before (L11037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11037)

```diff
-       } = (0, hl.v)(), [cq, uq, Bq] = Eq, Wq = Math.max(0, Math.min(uq - 1, Yq)), Nq = [];
+       } = (0, DO.K)(), [Sb, ab, Hb] = ub, wb = Math.max(0, Math.min(ab - 1, Bb)), Zb = [];
```

#### 788. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11041` → after: `L11041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11041) · [Before (L11041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11041)

```diff
-           const Eq = null !== (aq = gq[(Wq * Bq + Vq) * cq + qq]) && void 0 !== aq ? aq : EA,
+           const ub = null !== (Xb = hb[(wb * Hb + pb) * Sb + bb]) && void 0 !== Xb ? Xb : bY,
```

#### 789. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11049` → after: `L11049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11049) · [Before (L11049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11049)

```diff
-           }, `${qq},${Vq}`) : (0, rO.jsx)("rect", {
+           }, `${bb},${pb}`) : (0, jG.jsx)("rect", {
```

#### 790. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11055` → after: `L11055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11055) · [Before (L11055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11055)

```diff
-             opacity: lq && !mq ? .5 + .5 * Oq : 1,
+             opacity: Ob && !Ub ? .5 + .5 * Gb : 1,
```

#### 791. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11061` → after: `L11061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11061) · [Before (L11061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11061)

```diff
-           }, `${qq},${Vq}`))
+           }, `${bb},${pb}`))
```

#### 792. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11069` → after: `L11069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11069) · [Before (L11069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11069)

```diff
-           viewBox: `0 0 ${Math.max(1,cq)} ${Math.max(1,Bq)}`,
+           viewBox: `0 0 ${Math.max(1,Sb)} ${Math.max(1,Hb)}`,
```

#### 793. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11072` → after: `L11072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11072) · [Before (L11072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11072)

```diff
-           "aria-label": Aq(`${SW}rxWhy_core`),
+           "aria-label": Yb(`${ew}rxWhy_core`),
```

#### 794. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11074` → after: `L11074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11074) · [Before (L11074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11074)

```diff
-             xq(`${SW}rxWhy_core`, {})
+             Lb(`${ew}rxWhy_core`, {})
```

#### 795. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11081` → after: `L11081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11081) · [Before (L11081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11081)

```diff
-             "aria-label": Aq(`${SW}rxLayerDown`),
+             "aria-label": Yb(`${ew}rxLayerDown`),
```

#### 796. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11090` → after: `L11090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11090) · [Before (L11090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11090)

```diff
-               children: Aq(`${SW}rxLayer`, {
+               children: Yb(`${ew}rxLayer`, {
```

#### 797. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11096` → after: `L11096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11096) · [Before (L11096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11096)

```diff
-               children: Aq(`${SW}rxLayerShort`, {
+               children: Yb(`${ew}rxLayerShort`, {
```

#### 798. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11103` → after: `L11103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11103) · [Before (L11103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11103)

```diff
-             "aria-label": Aq(`${SW}rxLayerUp`),
+             "aria-label": Yb(`${ew}rxLayerUp`),
```

#### 799. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11138-L11140` → after: `L11138-L11140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11138-L11140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11138-L11140) · [Before (L11138-L11140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11138-L11140)

```diff
-           ["fuel", `${JW}rxBarRods`, Eq.fuelHeat],
-           ["cooling", `${JW}rxBarCooling`, Eq.cooling],
-           ["size", `${JW}rxBarSize`, Eq.size]
+           ["fuel", `${mw}rxBarRods`, ub.fuelHeat],
+           ["cooling", `${mw}rxBarCooling`, ub.cooling],
+           ["size", `${mw}rxBarSize`, ub.size]
```

#### 800. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11146` → after: `L11146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11146) · [Before (L11146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11146)

```diff
-           Yq(`${JW}rxWhy_bars`)
+           Bb(`${mw}rxWhy_bars`)
```

#### 801. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11150` → after: `L11150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11150) · [Before (L11150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11150)

```diff
-           children: gq(`${JW}rxMost`, {
+           children: hb(`${mw}rxMost`, {
```

#### 802. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11188` → after: `L11188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11188) · [Before (L11188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11188)

```diff
-       } = (0, hl.v)(), {
+       } = (0, DO.K)(), {
```

#### 803. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11194` → after: `L11194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11194) · [Before (L11194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11194)

```diff
-       const aq = null !== (Eq = gq.plan) && void 0 !== Eq ? Eq : HA(uq),
+       const Xb = null !== (ub = hb.plan) && void 0 !== ub ? ub : AY(ab),
```

#### 804. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11204` → after: `L11204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11204) · [Before (L11204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11204)

```diff
-         className: yl()("Baf2RxCore", null !== dq && void 0 !== dq ? dq : "plan"),
+         className: dO()("Baf2RxCore", null !== ob && void 0 !== ob ? ob : "plan"),
```

#### 805. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11219` → after: `L11219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11219) · [Before (L11219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11219)

```diff
-               Aq(`${JW}rxWhy_heat`)
+               Yb(`${mw}rxWhy_heat`)
```

#### 806. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11223` → after: `L11223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11223) · [Before (L11223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11223)

```diff
-                 children: cq(`${JW}rxHeatPct`, {
+                 children: Sb(`${mw}rxHeatPct`, {
```

#### 807. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11228` → after: `L11228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11228) · [Before (L11228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11228)

```diff
-                 children: cq(`${JW}rxBand_${dq}`)
+                 children: Sb(`${mw}rxBand_${ob}`)
```

#### 808. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11231` → after: `L11231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11231) · [Before (L11231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11231)

```diff
-               children: cq(`${JW}rxHeat`)
+               children: Sb(`${mw}rxHeat`)
```

#### 809. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11239` → after: `L11239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11239) · [Before (L11239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11239)

```diff
-               children: [cq(`${JW}rxDamageLine`, {
+               children: [Sb(`${mw}rxDamageLine`, {
```

#### 810. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11241` → after: `L11241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11241) · [Before (L11241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11241)

```diff
-               }), " \xb7 ", cq(`${JW}rxDamage_${Pq}`), (0, rO.jsx)("i", {
+               }), " \xb7 ", Sb(`${mw}rxDamage_${Wb}`), (0, jG.jsx)("i", {
```

#### 811. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11244` → after: `L11244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11244) · [Before (L11244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11244)

```diff
-                     width: `${Math.min(100,oq)}%`
+                     width: `${Math.min(100,Kb)}%`
```

#### 812. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11257` → after: `L11257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11257) · [Before (L11257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11257)

```diff
-               Aq(`${JW}rxWhy_heat`)
+               Yb(`${mw}rxWhy_heat`)
```

#### 813. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11268` → after: `L11268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11268) · [Before (L11268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11268)

```diff
-             Aq(`${JW}rxWhy_perPellet`)
+             Yb(`${mw}rxWhy_perPellet`)
```

#### 814. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11270` → after: `L11270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11270) · [Before (L11270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11270)

```diff
-           children: cq(`${JW}rxPerPellet`, {
+           children: Sb(`${mw}rxPerPellet`, {
```

#### 815. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11280` → after: `L11280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11280) · [Before (L11280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11280)

```diff
-         note: Eq(`${JW}rxUpTo`, {
+         note: ub(`${mw}rxUpTo`, {
```

#### 816. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11285` → after: `L11285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11285) · [Before (L11285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11285)

```diff
-       const [Yq, lq] = qq.baf2RxStore, Oq = lq > 0 ? Yq / lq : 0, mq = String(Math.floor(100 * Oq)), xq = null !== (gq = qq.baf2RxStoreNetPerS) && void 0 !== gq ? gq : 0, Aq = function(qq) {
+       const [Bb, Ob] = bb.baf2RxStore, Gb = Ob > 0 ? Bb / Ob : 0, Ub = String(Math.floor(100 * Gb)), Lb = null !== (hb = bb.baf2RxStoreNetPerS) && void 0 !== hb ? hb : 0, Yb = function(bb) {
```

#### 817. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11287-L11288` → after: `L11287-L11288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11287-L11288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11287-L11288) · [Before (L11287-L11288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11287-L11288)

```diff
-         const [Yq, lq] = null !== (Eq = qq.baf2RxStore) && void 0 !== Eq ? Eq : [0, 0], Oq = null !== (gq = qq.baf2RxStoreNetPerS) && void 0 !== gq ? gq : 0;
-         return lq > 0 && Yq >= lq - 1 ? "running" === qq.baf2RxState ? `${BW}rxStoreFull` : `${BW}rxStoreFullOnly` : Oq > .05 ? `${BW}rxStoreLine` : Oq < -.05 ? "running" === qq.baf2RxState ? `${BW}rxStoreUsesMore` : `${BW}rxStoreDraining` : `${BW}rxStorePct`
+         const [Bb, Ob] = null !== (ub = bb.baf2RxStore) && void 0 !== ub ? ub : [0, 0], Gb = null !== (hb = bb.baf2RxStoreNetPerS) && void 0 !== hb ? hb : 0;
+         return Ob > 0 && Bb >= Ob - 1 ? "running" === bb.baf2RxState ? `${aw}rxStoreFull` : `${aw}rxStoreFullOnly` : Gb > .05 ? `${aw}rxStoreLine` : Gb < -.05 ? "running" === bb.baf2RxState ? `${aw}rxStoreUsesMore` : `${aw}rxStoreDraining` : `${aw}rxStorePct`
```

#### 818. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11291` → after: `L11291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11291) · [Before (L11291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11291)

```diff
-         note: Eq(Aq, Aq === `${JW}rxStoreLine` ? {
+         note: ub(Yb, Yb === `${mw}rxStoreLine` ? {
```

#### 819. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11309` → after: `L11309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11309) · [Before (L11309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11309)

```diff
-       } = (0, hl.v)(), {
+       } = (0, DO.K)(), {
```

#### 820. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11313` → after: `L11313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11313) · [Before (L11313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11313)

```diff
-           lq = "cryo" === Yq.wW,
+           Ob = "cryo" === Bb.Pw,
```

#### 821. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11319` → after: `L11319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11319) · [Before (L11319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11319)

```diff
-           mq = Yq.makersShort > 0 ? Eq(lq ? `${JW}rxCryoAddMixer${gq?"":"s"}` : `${JW}rxWaterAddCondenser${gq?"":"s"}${Oq}`, {
+           Ub = Bb.makersShort > 0 ? ub(Ob ? `${mw}rxCryoAddMixer${hb?"":"s"}` : `${mw}rxWaterAddCondenser${hb?"":"s"}${Gb}`, {
```

#### 822. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11321` → after: `L11321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11321) · [Before (L11321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11321)

```diff
-           }) : Eq(`${JW}rxWaterNeeds`, {
+           }) : ub(`${mw}rxWaterNeeds`, {
```

#### 823. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11324` → after: `L11324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11324) · [Before (L11324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11324)

```diff
-         } else if (null !== Oq) mq = Eq(`${JW}rxWaterRunsOut`, {
+         } else if (null !== Gb) Ub = ub(`${mw}rxWaterRunsOut`, {
```

#### 824. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11327` → after: `L11327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11327) · [Before (L11327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11327)

```diff
-         else if (Yq.waterBeside > 0) mq = Eq(`${JW}rxCryoPlusWater`, {
+         else if (Bb.waterBeside > 0) Ub = ub(`${mw}rxCryoPlusWater`, {
```

#### 825. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11334` → after: `L11334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11334) · [Before (L11334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11334)

```diff
-           xq = "rxWaterNoSupply" === qq, mq = Eq(`${JW}${qq}`, {
+           Lb = "rxWaterNoSupply" === bb, Ub = ub(`${mw}${bb}`, {
```

#### 826. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11340-L11342` → after: `L11340-L11342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11340-L11342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11340-L11342) · [Before (L11340-L11342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11340-L11342)

```diff
-           label: Eq(lq ? `${JW}rxCryo` : `${JW}rxWater`),
-           number: `${AW(Yq.usePerS)}/s`,
-           preview: gq ? `${AW(gq.coolPerS)}/s` : null,
+           label: ub(Ob ? `${mw}rxCryo` : `${mw}rxWater`),
+           number: `${Lw(Bb.usePerS)}/s`,
+           preview: hb ? `${Lw(hb.coolPerS)}/s` : null,
```

#### 827. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11346` → after: `L11346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11346) · [Before (L11346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11346)

```diff
-           why: lq ? `${JW}rxWhy_cryo` : `${JW}rxWhy_water`,
+           why: Ob ? `${mw}rxWhy_cryo` : `${mw}rxWhy_water`,
```

#### 828. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11357` → after: `L11357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11357) · [Before (L11357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11357)

```diff
-             label: lq(`${JW}rxFuel`),
+             label: Ob(`${mw}rxFuel`),
```

#### 829. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11360` → after: `L11360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11360) · [Before (L11360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11360)

```diff
-             note: Oq.baf2RxFuel <= 0 ? lq(`${JW}rxFuelEmpty`) : xq > 0 ? lq(`${JW}rxFuelLeft`, {
+             note: Gb.baf2RxFuel <= 0 ? Ob(`${mw}rxFuelEmpty`) : Lb > 0 ? Ob(`${mw}rxFuelLeft`, {
```

#### 830. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11362` → after: `L11362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11362) · [Before (L11362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11362)

```diff
-             }) : lq(1 === Aq ? `${JW}rxFuelPellet` : `${JW}rxFuelPellets`),
+             }) : Ob(1 === Yb ? `${mw}rxFuelPellet` : `${mw}rxFuelPellets`),
```

#### 831. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11366` → after: `L11366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11366) · [Before (L11366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11366)

```diff
-               gq(`${JW}rxWhy_fuel`)
+               hb(`${mw}rxWhy_fuel`)
```

#### 832. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11395` → after: `L11395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11395) · [Before (L11395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11395)

```diff
-           settleLine: Vq ? lq(`${JW}rxHeatSettles`, {
+           settleLine: pb ? Ob(`${mw}rxHeatSettles`, {
```

#### 833. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11408` → after: `L11408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11408) · [Before (L11408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11408)

```diff
-             step: cq && Oq.baf2RxFuel - Oq.baf2RxPu > 0 ? uq : 0,
+             step: Sb && Gb.baf2RxFuel - Gb.baf2RxPu > 0 ? ab : 0,
```

#### 834. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11415-L11416` → after: `L11415-L11416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11415-L11416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11415-L11416) · [Before (L11415-L11416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11415-L11416)

```diff
-             label: lq(`${JW}rxPowerOut`),
-             number: `\u26a1 ${iA(Oq.baf2RxOut)}/s`,
+             label: Ob(`${mw}rxPowerOut`),
+             number: `\u26a1 ${zY(Gb.baf2RxOut)}/s`,
```

#### 835. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11421` → after: `L11421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11421) · [Before (L11421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11421)

```diff
-               gq(`${JW}rxWhy_power`)
+               hb(`${mw}rxWhy_power`)
```

#### 836. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11425-L11427` → after: `L11425-L11427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11425-L11427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11425-L11427) · [Before (L11425-L11427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11425-L11427)

```diff
-             label: lq(`${JW}rxWaste`),
-             number: `${Math.floor(Oq.baf2RxWaste)}/${mq.waste}`,
-             note: Wq.full ? lq(`${JW}rxWasteFull`) : null !== Wq.fullInS ? lq(`${JW}rxWasteFullIn`, {
+             label: Ob(`${mw}rxWaste`),
+             number: `${Math.floor(Gb.baf2RxWaste)}/${Ub.waste}`,
+             note: wb.full ? Ob(`${mw}rxWasteFull`) : null !== wb.fullInS ? Ob(`${mw}rxWasteFullIn`, {
```

#### 837. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11429` → after: `L11429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11429) · [Before (L11429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11429)

```diff
-             }) : lq(`${JW}rxWasteSpent`),
+             }) : Ob(`${mw}rxWasteSpent`),
```

#### 838. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11433` → after: `L11433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11433) · [Before (L11433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11433)

```diff
-               gq(`${JW}rxWhy_waste`)
+               hb(`${mw}rxWhy_waste`)
```

#### 839. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11447` → after: `L11447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11447) · [Before (L11447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11447)

```diff
-       } = (0, hl.v)(), lq = Eq.plan;
+       } = (0, DO.K)(), Ob = ub.plan;
```

#### 840. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11450` → after: `L11450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11450) · [Before (L11450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11450)

```diff
-         mq = Yq(`${JW}rxPlanAtFull`);
+         Ub = Bb(`${mw}rxPlanAtFull`);
```

#### 841. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11457-L11458` → after: `L11457-L11458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11457-L11458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11457-L11458) · [Before (L11457-L11458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11457-L11458)

```diff
-             label: Yq(`${JW}rxFuel`),
-             number: Yq(`${JW}rxPlanPerMin`, {
+             label: Bb(`${mw}rxFuel`),
+             number: Bb(`${mw}rxPlanPerMin`, {
```

#### 842. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11461` → after: `L11461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11461) · [Before (L11461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11461)

```diff
-             note: Yq(`${JW}rxPlanPellets`),
+             note: Bb(`${mw}rxPlanPellets`),
```

#### 843. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11463` → after: `L11463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11463) · [Before (L11463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11463)

```diff
-               gq(`${JW}rxWhy_fuel`)
+               hb(`${mw}rxWhy_fuel`)
```

#### 844. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11467-L11470` → after: `L11467-L11470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11467-L11470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11467-L11470) · [Before (L11467-L11470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11467-L11470)

```diff
-             label: Yq(`${JW}rxWater`),
-             number: `${AW(lq.waterPerS)}/s`,
-             note: Eq.status.baf2RxCryoOpen && lq.waterPerS > 0 ? Yq(`${JW}rxPlanOrCryo`, {
-               rate: AW(WA(lq, eq.h) * eq.q)
+             label: Bb(`${mw}rxWater`),
+             number: `${Lw(Ob.waterPerS)}/s`,
+             note: ub.status.baf2RxCryoOpen && Ob.waterPerS > 0 ? Bb(`${mw}rxPlanOrCryo`, {
+               rate: Lw(HY(Ob, Qb.f) * Qb.k)
```

#### 845. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11473` → after: `L11473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11473) · [Before (L11473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11473)

```diff
-               gq(`${JW}rxWhy_water`)
+               hb(`${mw}rxWhy_water`)
```

#### 846. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11491` → after: `L11491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11491) · [Before (L11491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11491)

```diff
-           settleLine: null === Oq ? null : Yq(`${JW}rxPlanHeat`, {
+           settleLine: null === Gb ? null : Bb(`${mw}rxPlanHeat`, {
```

#### 847. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11511-L11512` → after: `L11511-L11512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11511-L11512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11511-L11512) · [Before (L11511-L11512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11511-L11512)

```diff
-             label: Yq(`${JW}rxPowerOut`),
-             number: `\u26a1 ${iA(lq.max)}/s`,
+             label: Bb(`${mw}rxPowerOut`),
+             number: `\u26a1 ${zY(Ob.max)}/s`,
```

#### 848. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11515` → after: `L11515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11515) · [Before (L11515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11515)

```diff
-               gq(`${JW}rxWhy_power`)
+               hb(`${mw}rxWhy_power`)
```

#### 849. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11519-L11520` → after: `L11519-L11520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11519-L11520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11519-L11520) · [Before (L11519-L11520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11519-L11520)

```diff
-             label: Yq(`${JW}rxWaste`),
-             number: Yq(`${JW}rxPlanPerMin`, {
+             label: Bb(`${mw}rxWaste`),
+             number: Bb(`${mw}rxPlanPerMin`, {
```

#### 850. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11523` → after: `L11523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11523) · [Before (L11523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11523)

```diff
-             note: Yq(`${JW}rxWasteSpent`),
+             note: Bb(`${mw}rxWasteSpent`),
```

#### 851. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11525` → after: `L11525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11525) · [Before (L11525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11525)

```diff
-               gq(`${JW}rxWhy_waste`)
+               hb(`${mw}rxWhy_waste`)
```

#### 852. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11533` → after: `L11533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11533) · [Before (L11533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11533)

```diff
-         key: `${KW}rxWaiting`,
+         key: `${fw}rxWaiting`,
```

#### 853. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11550` → after: `L11550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11550) · [Before (L11550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11550)

```diff
-       } = (0, hl.v)(), xq = OW(lq), {
+       } = (0, DO.K)(), Lb = Ow(Ob), {
```

#### 854. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11573` → after: `L11573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11573) · [Before (L11573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11573)

```diff
-         rq = xq ? xq.waiting ? CW : Pq ? yW(xq.status) : function(qq) {
+         jb = Lb ? Lb.waiting ? kw : Wb ? Cw(Lb.status) : function(bb) {
```

#### 855. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11584` → after: `L11584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11584) · [Before (L11584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11584)

```diff
-             rods: null !== (Eq = null === (gq = qq.plan) || void 0 === gq ? void 0 : gq.rods) && void 0 !== Eq ? Eq : 0,
+             rods: null !== (ub = null === (hb = bb.plan) || void 0 === hb ? void 0 : hb.rods) && void 0 !== ub ? ub : 0,
```

#### 856. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11595` → after: `L11595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11595) · [Before (L11595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11595)

```diff
-             key: `${aA}rxApartScram`,
+             key: `${ZY}rxApartScram`,
```

#### 857. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11598` → after: `L11598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11598) · [Before (L11598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11598)

```diff
-             key: `${aA}rxApartCooling`,
+             key: `${ZY}rxApartCooling`,
```

#### 858. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11604-L11606` → after: `L11604-L11606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11604-L11606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11604-L11606) · [Before (L11604-L11606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11604-L11606)

```diff
-         [nq, bq, iq] = null !== (Eq = null === xq || void 0 === xq ? void 0 : xq.dims) && void 0 !== Eq ? Eq : [0, 0, 0],
-         Zq = `${nq}\xd7${bq}\xd7${iq}`;
-       return (0, rO.jsx)(Pm.c, {
+         [xb, zb, gb] = null !== (ub = null === Lb || void 0 === Lb ? void 0 : Lb.dims) && void 0 !== ub ? ub : [0, 0, 0],
+         ib = `${xb}\xd7${zb}\xd7${gb}`;
+       return (0, jG.jsx)(WU.b, {
```

#### 859. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11624` → after: `L11624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11624) · [Before (L11624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11624)

```diff
-                   children: mq(`${KW}rxTitle`)
+                   children: Ub(`${fw}rxTitle`)
```

#### 860. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11630` → after: `L11630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11630) · [Before (L11630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11630)

```diff
-                     "aria-label": mq(`${KW}rxChangeSize`),
+                     "aria-label": Ub(`${fw}rxChangeSize`),
```

#### 861. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11638` → after: `L11638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11638) · [Before (L11638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11638)

```diff
-                       }).scram && Eq.heat < wx ? Vq(!0) : Wq(qq ? `${KW}rxResizeCooling` : `${KW}rxResizeHot`, {
+                       }).scram && ub.heat < FL ? pb(!0) : wb(bb ? `${fw}rxResizeCooling` : `${fw}rxResizeHot`, {
```

#### 862. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11643` → after: `L11643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11643) · [Before (L11643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11643)

```diff
-                   }) : Zq, " \xb7 ", mq(Pq ? null !== (gq = null === tq || void 0 === tq ? void 0 : tq.label) && void 0 !== gq ? gq : `${KW}rxState_running` : `${KW}rxSubPlanShort`)]
+                   }) : ib, " \xb7 ", Ub(Wb ? null !== (hb = null === rb || void 0 === rb ? void 0 : rb.label) && void 0 !== hb ? hb : `${fw}rxState_running` : `${fw}rxSubPlanShort`)]
```

#### 863. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11659` → after: `L11659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11659) · [Before (L11659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11659)

```diff
-               }), (0, rO.jsx)(Qm.m, {
+               }), (0, jG.jsx)(CU.i, {
```

#### 864. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11673` → after: `L11673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11673) · [Before (L11673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11673)

```diff
-               text: vq ? `${PW(mq,rq)} ${mq(`${KW}rxTapHint`)}` : PW(mq, rq),
+               text: nb ? `${Kw(Ub,jb)} ${Ub(`${fw}rxTapHint`)}` : Kw(Ub, jb),
```

#### 865. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11679` → after: `L11679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11679) · [Before (L11679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11679)

```diff
-                 children: mq(`${KW}rxNotYours`)
+                 children: Ub(`${fw}rxNotYours`)
```

#### 866. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11721-L11723` → after: `L11721-L11723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11721-L11723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11721-L11723) · [Before (L11721-L11723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11721-L11723)

```diff
-               title: `${KW}rxResizeConfirmTitle`,
-               body: `${KW}rxResizeConfirmBody`,
-               yes: `${KW}rxChangeSize`,
+               title: `${fw}rxResizeConfirmTitle`,
+               body: `${fw}rxResizeConfirmBody`,
+               yes: `${fw}rxChangeSize`,
```

#### 867. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11772` → after: `L11772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11772) · [Before (L11772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11772)

```diff
-       } = (0, Tx.c)(), jq = Mx.featureFlags.useSocialFeatures && dq.isLoggedIn(), [Hq, oq] = (0, Yq.useState)((() => gq.get()));
+       } = (0, tL.d)(), Ab = vL.featureFlags.useSocialFeatures && ob.isLoggedIn(), [lb, Kb] = (0, Bb.useState)((() => hb.get()));
```

#### 868. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11795` → after: `L11795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11795) · [Before (L11795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11795)

```diff
-           openSocial: jq ? Vq : null
+           openSocial: Ab ? pb : null
```

#### 869. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11828` → after: `L11828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11828) · [Before (L11828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11828)

```diff
-     var EN = gq(38471);
+     var uZ = hb(38120);
```

#### 870. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11861` → after: `L11861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11861) · [Before (L11861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11861)

```diff
-         })), this.remPx = 16, this.jN = [], this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100, this.EQ = () => {
+         })), this.remPx = 16, this.HZ = [], this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100, this.lK = () => {
```

#### 871. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11863` → after: `L11863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11863) · [Before (L11863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11863)

```diff
-         }, window.addEventListener("resize", this.EQ)
+         }, window.addEventListener("resize", this.lK)
```

#### 872. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11876` → after: `L11876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11876) · [Before (L11876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11876)

```diff
-         this.jN.length = 0, this.hud && this.jN.push(...this.hud.boxes(performance.now()));
+         this.HZ.length = 0, this.hud && this.HZ.push(...this.hud.boxes(performance.now()));
```

#### 873. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11885` → after: `L11885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11885) · [Before (L11885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11885)

```diff
-           }(null !== (lq = Oq.element.dataset.crowded) && void 0 !== lq ? lq : "no") !== Eq && ("no" === Eq ? delete Oq.element.dataset.crowded : Oq.element.dataset.crowded = Eq), "hidden" !== Eq && (0, EN.d)(Oq.element, Oq.x, Oq.y)
+           }(null !== (Ob = Gb.element.dataset.crowded) && void 0 !== Ob ? Ob : "no") !== ub && ("no" === ub ? delete Gb.element.dataset.crowded : Gb.element.dataset.crowded = ub), "hidden" !== ub && (0, uZ.b)(Gb.element, Gb.x, Gb.y)
```

#### 874. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11893` → after: `L11893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11893) · [Before (L11893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11893)

```diff
-           xq = this.jN;
+           Lb = this.HZ;
```

#### 875. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11899` → after: `L11899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11899) · [Before (L11899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11899)

```diff
-         this.observer.disconnect(), window.removeEventListener("resize", this.EQ)
+         this.observer.disconnect(), window.removeEventListener("resize", this.lK)
```

#### 876. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11913` → after: `L11913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11913) · [Before (L11913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11913)

```diff
-           const qq = null !== (Eq = this.cards[gq][0]) && void 0 !== Eq ? Eq : null;
+           const bb = null !== (ub = this.cards[hb][0]) && void 0 !== ub ? ub : null;
```

#### 877. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11940` → after: `L11940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11940) · [Before (L11940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11940)

```diff
-         (gq && this.sizes.unobserve(gq), this.watched[qq] = Eq, this.stale = !0, Eq && this.sizes.observe(Eq), 0 === qq) && (null === (Yq = this.hud) || void 0 === Yq || Yq.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.hud = null !== (lq = null == … [truncated]
+         (hb && this.sizes.unobserve(hb), this.watched[bb] = ub, this.stale = !0, ub && this.sizes.observe(ub), 0 === bb) && (null === (Bb = this.hud) || void 0 === Bb || Bb.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.hud = null !== (Ob = null == … [truncated]
```

#### 878. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L11961` → after: `L11961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R11961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L11961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L11961) · [Before (L11961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L11961)

```diff
-       return (0, EN.e)(qq, !Bq), Bq ? (AN.x = uq.x, AN.y = uq.y, AN.distSq = cq, AN) : null
+       return (0, uZ.d)(bb, !Hb), Hb ? (YZ.x = ab.x, YZ.y = ab.y, YZ.distSq = Sb, YZ) : null
```

#### 879. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12036` → after: `L12036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12036) · [Before (L12036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12036)

```diff
-         } = (0, hl.v)(), Oq = function(qq, Eq) {
+         } = (0, DO.K)(), Gb = function(bb, ub) {
```

#### 880. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12041` → after: `L12041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12041) · [Before (L12041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12041)

```diff
-             return null !== qq && void 0 !== qq ? qq : BN.noFuel
+             return null !== bb && void 0 !== bb ? bb : HZ.noFuel
```

#### 881. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12051` → after: `L12051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12051) · [Before (L12051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12051)

```diff
-             children: (0, rO.jsx)(bl.e, {
+             children: (0, jG.jsx)(zO.d, {
```

#### 882. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12060` → after: `L12060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12060) · [Before (L12060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12060)

```diff
-             children: lq(`buildAFactory2Game:stallTag_${Eq}`)
+             children: Ob(`buildAFactory2Game:stallTag_${ub}`)
```

#### 883. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12080` → after: `L12080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12080) · [Before (L12080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12080)

```diff
-       aN = Vg.k + 150;
+       XZ = ph.l + 150;
```

#### 884. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12087` → after: `L12087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12087) · [Before (L12087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12087)

```diff
-         null === this.offset || gq < this.offset ? this.offset = gq : this.offset = Math.min(gq, this.offset + .02 * (Eq - this.sampledAt)), this.sampledAt = Eq
+         null === this.offset || hb < this.offset ? this.offset = hb : this.offset = Math.min(hb, this.offset + .02 * (ub - this.sampledAt)), this.sampledAt = ub
```

#### 885. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12091` → after: `L12091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12091) · [Before (L12091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12091)

```diff
-         return qq + (null !== (Eq = this.offset) && void 0 !== Eq ? Eq : 0) + aN
+         return bb + (null !== (ub = this.offset) && void 0 !== ub ? ub : 0) + XZ
```

#### 886. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12094` → after: `L12094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12094) · [Before (L12094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12094)

```diff
-     var dN = gq(38473);
+     var oZ = hb(38123);
```

#### 887. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12148` → after: `L12148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12148) · [Before (L12148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12148)

```diff
-       const Aq = Vg.e * (null !== mq && void 0 !== mq ? mq : 1),
+       const Yb = ph.g * (null !== Ub && void 0 !== Ub ? Ub : 1),
```

#### 888. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12158` → after: `L12158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12158) · [Before (L12158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12158)

```diff
-       for (const Nq of null !== xq && void 0 !== xq ? xq : []) Wq[Nq >> 1] |= 1 & Nq ? 2 : 1;
+       for (const Zb of null !== Lb && void 0 !== Lb ? Lb : []) wb[Zb >> 1] |= 1 & Zb ? 2 : 1;
```

#### 889. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12165` → after: `L12165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12165) · [Before (L12165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12165)

```diff
-         bu: Bq,
+         nZ: Hb,
```

#### 890. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12172` → after: `L12172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12172) · [Before (L12172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12172)

```diff
-           return yN(Eq, (0, Vg.G)(Eq, Yq, gq, Aq).at)
+           return dZ(ub, (0, ph.A)(ub, Bb, hb, Yb).at)
```

#### 891. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12198-L12200` → after: `L12198-L12200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12198-L12200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12198-L12200) · [Before (L12198-L12200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12198-L12200)

```diff
-         Oq = lq ? qq.edges[gq] : qq.bu[gq],
-         mq = lq ? qq.bu[gq] : qq.edges[gq + 1],
-         xq = lq ? 2 * Yq : 2 * Yq - 1;
+         Gb = Ob ? bb.edges[hb] : bb.nZ[hb],
+         Ub = Ob ? bb.nZ[hb] : bb.edges[hb + 1],
+         Lb = Ob ? 2 * Bb : 2 * Bb - 1;
```

#### 892. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12217` → after: `L12217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12217) · [Before (L12217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12217)

```diff
-         }, this.frame = 0, this.lastRenderAt = 0, this.frameMs = 1e3 / 60, this.pool = null, this.cameraDir = [NaN, NaN, NaN], this.lastDir = [NaN, NaN, NaN], this.width = 0, this.height = 0, this.EQ = () => {
+         }, this.frame = 0, this.lastRenderAt = 0, this.frameMs = 1e3 / 60, this.pool = null, this.cameraDir = [NaN, NaN, NaN], this.lastDir = [NaN, NaN, NaN], this.width = 0, this.height = 0, this.lK = () => {
```

#### 893. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12229` → after: `L12229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12229) · [Before (L12229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12229)

```diff
-         for (const [Yq, lq, Oq, mq] of qq.baf2BeltMoveList) null === lq ? this.queue(gq - Oq, null, Yq, null, null, null !== mq && void 0 !== mq ? mq : 0) : this.queue(gq - Oq, null, Yq, lq, null !== mq && void 0 !== mq ? mq : null, 0);
+         for (const [Bb, Ob, Gb, Ub] of bb.baf2BeltMoveList) null === Ob ? this.queue(hb - Gb, null, Bb, null, null, null !== Ub && void 0 !== Ub ? Ub : 0) : this.queue(hb - Gb, null, Bb, Ob, null !== Ub && void 0 !== Ub ? Ub : null, 0);
```

#### 894. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12236` → after: `L12236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12236) · [Before (L12236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12236)

```diff
-         }, 64), this.EQ(), window.addEventListener("resize", this.EQ)
+         }, 64), this.lK(), window.addEventListener("resize", this.lK)
```

#### 895. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12257` → after: `L12257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12257) · [Before (L12257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12257)

```diff
-           qq.changed = !1, qq.loop && (vN(qq, lq), (0, Vg.z)(qq.items, qq.length, lq, qq.cellsPerMs));
+           bb.changed = !1, bb.loop && (nZ(bb, Ob), (0, ph.v)(bb.items, bb.length, Ob, bb.cellsPerMs));
```

#### 896. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12261-L12262` → after: `L12261-L12262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12261-L12262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12261-L12262) · [Before (L12261-L12262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12261-L12262)

```diff
-               Yq = (0, Vg.J)(gq.at, Oq, lq, qq.cellsPerMs);
-             if (Oq = Yq - Vg.q, hN(qq, Yq)) {
+               Bb = (0, ph.D)(hb.at, Gb, Ob, bb.cellsPerMs);
+             if (Gb = Bb - ph.p, DZ(bb, Bb)) {
```

#### 897. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12278` → after: `L12278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12278) · [Before (L12278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12278)

```diff
-         window.removeEventListener("resize", this.EQ), this.lines.clear(), this.shown = [], this.pending.length = 0, this.pendingHead = 0, null === (qq = this.pool) || void 0 === qq || qq.dispose(), this.pool = null
+         window.removeEventListener("resize", this.lK), this.lines.clear(), this.shown = [], this.pending.length = 0, this.pendingHead = 0, null === (bb = this.pool) || void 0 === bb || bb.dispose(), this.pool = null
```

#### 898. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12336` → after: `L12336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12336) · [Before (L12336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12336)

```diff
-         qq.changed = !0, qq.loop && (vN(qq, gq), (0, Vg.z)(qq.items, qq.length, gq, qq.cellsPerMs)), null !== Yq && null !== lq ? (0, Vg.D)(qq.items, qq.length, yN(Yq, gq), lq, gq, qq.cellsPerMs) : null !== Yq ? qq.items.push(yN(Yq, gq)) : qq.items.length > Oq && this.release((0, … [truncated]
+         bb.changed = !0, bb.loop && (nZ(bb, hb), (0, ph.v)(bb.items, bb.length, hb, bb.cellsPerMs)), null !== Bb && null !== Ob ? (0, ph.y)(bb.items, bb.length, dZ(Bb, hb), Ob, hb, bb.cellsPerMs) : null !== Bb ? bb.items.push(dZ(Bb, hb)) : bb.items.length > Gb && this.release((0, … [truncated]
```

#### 899. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12349-L12350` → after: `L12349-L12350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12349-L12350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12349-L12350) · [Before (L12349-L12350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12349-L12350)

```diff
-     var ZN = gq(36648),
-       fN = gq(38479);
+     var iZ = hb(36208),
+       vZ = hb(38134);
```

#### 900. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12360` → after: `L12360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12360) · [Before (L12360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12360)

```diff
-         return (0, Yu.f)(Sl, gq), (0, Yq.useEffect)((() => {
+         return (0, ha.h)(NO, hb), (0, Bb.useEffect)((() => {
```

#### 901. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12365` → after: `L12365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12365) · [Before (L12365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12365)

```diff
-       const [mq, xq] = Eq, Aq = Oq > mq ? mq : null !== xq && Oq < xq ? xq : null, cq = {
+       const [Ub, Lb] = ub, Yb = Gb > Ub ? Ub : null !== Lb && Gb < Lb ? Lb : null, Sb = {
```

#### 902. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12373` → after: `L12373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12373) · [Before (L12373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12373)

```diff
-         children: lq(`${xu}${null===Aq?"questDepthReached":"questDepth"}`, cq)
+         children: Ob(`${Ua}${null===Yb?"questDepthReached":"questDepth"}`, Sb)
```

#### 903. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12392` → after: `L12392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12392) · [Before (L12392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12392)

```diff
-             children: Yq(`${xu}questAlsoDownHere`)
+             children: Bb(`${Ua}questAlsoDownHere`)
```

#### 904. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12399` → after: `L12399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12399) · [Before (L12399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12399)

```diff
-                 "aria-label": Yq(`${xu}questAlsoItem`, {
+                 "aria-label": Bb(`${Ua}questAlsoItem`, {
```

#### 905. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12408` → after: `L12408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12408) · [Before (L12408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12408)

```diff
-                   children: `${lq}/${Oq}`
+                   children: `${Ob}/${Gb}`
```

#### 906. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12411` → after: `L12411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12411) · [Before (L12411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12411)

```diff
-                   children: Yq(`${xu}questAlsoDepth`, {
+                   children: Bb(`${Ua}questAlsoDepth`, {
```

#### 907. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12421` → after: `L12421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12421) · [Before (L12421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12421)

```diff
-     var zN = gq(3273);
+     var eZ = hb(3183);
```

#### 908. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12435` → after: `L12435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12435) · [Before (L12435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12435)

```diff
-         return (0, fN.b)(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner, .TopRightElements, .TouchComponentsButtons .TouchKeyHit, .InventoryWrapper .Inventory", [Eq, Yq], (() => {
+         return (0, vZ.c)(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner, .TopRightElements, .TouchComponentsButtons .TouchKeyHit, .InventoryWrapper .Inventory", [ub, Bb], (() => {
```

#### 909. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12444` → after: `L12444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12444) · [Before (L12444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12444)

```diff
-             qq.style.setProperty("--baf2-quest-room", `${gq}px`), qq.classList.toggle("NoRoom", gq < 150)
+             bb.style.setProperty("--baf2-quest-room", `${hb}px`), bb.classList.toggle("NoRoom", hb < 150)
```

#### 910. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12450` → after: `L12450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12450) · [Before (L12450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12450)

```diff
-                 Oq = (0, zN.g)(lq.left, lq.right, Yq.top + gq);
+                 Gb = (0, eZ.h)(Ob.left, Ob.right, Bb.top + hb);
```

#### 911. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12460` → after: `L12460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12460) · [Before (L12460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12460)

```diff
-                 mq = lq ? qq : Math.max(qq, Math.min(Yq - Oq / 2, Eq - Oq));
+                 Ub = Ob ? bb : Math.max(bb, Math.min(Bb - Gb / 2, ub - Gb));
```

#### 912. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12470` → after: `L12470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12470) · [Before (L12470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12470)

```diff
-           qq.style.top = `${Bq}px`, qq.style.maxHeight = `${Wq}px`
+           bb.style.top = `${Hb}px`, bb.style.maxHeight = `${wb}px`
```

#### 913. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12494` → after: `L12494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12494) · [Before (L12494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12494)

```diff
-           children: gq(`${xu}questStepsDone`, {
+           children: hb(`${Ua}questStepsDone`, {
```

#### 914. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12516` → after: `L12516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12516) · [Before (L12516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12516)

```diff
-       const lq = (0, Yu.h)(zl, gq.get()),
+       const Ob = (0, ha.k)(eO, hb.get()),
```

#### 915. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12520` → after: `L12520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12520) · [Before (L12520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12520)

```diff
-         } = (0, hl.v)(),
+         } = (0, DO.K)(),
```

#### 916. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12541` → after: `L12541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12541) · [Before (L12541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12541)

```diff
-         dq = Aq ? Vq : function(qq, Eq) {
+         ob = Yb ? pb : function(bb, ub) {
```

#### 917. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12559` → after: `L12559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12559) · [Before (L12559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12559)

```diff
-         Qq = Pq ? xq(`${xu}questLineComplete`) : lq.tier ? Vu(xq, lq.tier) : xq(`${xu}currentQuest`),
+         Cb = Wb ? Lb(`${Ua}questLineComplete`) : Ob.tier ? Xa(Lb, Ob.tier) : Lb(`${Ua}currentQuest`),
```

#### 918. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12573` → after: `L12573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12573) · [Before (L12573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12573)

```diff
-             Aq = xq >= 0 ? xq : mq(!1);
+             Yb = Lb >= 0 ? Lb : Ub(!1);
```

#### 919. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12578` → after: `L12578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12578) · [Before (L12578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12578)

```diff
-       return (0, rO.jsx)(ZN.g, {
+       return (0, jG.jsx)(iZ.e, {
```

#### 920. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12597` → after: `L12597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12597) · [Before (L12597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12597)

```diff
-                     "aria-label": xq(`${xu}questPlaceLabel`, {
+                     "aria-label": Lb(`${Ua}questPlaceLabel`, {
```

#### 921. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12601` → after: `L12601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12601) · [Before (L12601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12601)

```diff
-                     children: xq(`${xu}questPlace`, {
+                     children: Lb(`${Ua}questPlace`, {
```

#### 922. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12612` → after: `L12612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12612) · [Before (L12612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12612)

```diff
-                 children: xq(`${xu}${lq.name[0]}`, uu(lq.name[1]))
+                 children: Lb(`${Ua}${Ob.name[0]}`, Sa(Ob.name[1]))
```

#### 923. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12627` → after: `L12627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12627) · [Before (L12627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12627)

```diff
-                     children: xq(`${xu}questStepsToggle`, {
+                     children: Lb(`${Ua}questStepsToggle`, {
```

#### 924. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12643` → after: `L12643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12643) · [Before (L12643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12643)

```diff
-                     children: [(null !== (Oq = Hq[Eq]) && void 0 !== Oq ? Oq : 0) > 0 && (0, rO.jsx)(pN, {
+                     children: [(null !== (Gb = lb[ub]) && void 0 !== Gb ? Gb : 0) > 0 && (0, jG.jsx)(sZ, {
```

#### 925. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12657` → after: `L12657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12657) · [Before (L12657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12657)

```diff
-                 })), (null !== (Eq = Hq[jq.length]) && void 0 !== Eq ? Eq : 0) > 0 && (0, rO.jsx)(pN, {
+                 })), (null !== (ub = lb[Ab.length]) && void 0 !== ub ? ub : 0) > 0 && (0, jG.jsx)(sZ, {
```

#### 926. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12667` → after: `L12667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12667) · [Before (L12667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12667)

```diff
-                 children: [xq(`${xu}questReward`), (0, rO.jsx)(Wu, {
+                 children: [Lb(`${Ua}questReward`), (0, jG.jsx)(Ha, {
```

#### 927. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12677` → after: `L12677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12677) · [Before (L12677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12677)

```diff
-                 children: xq(`${xu}questSide`)
+                 children: Lb(`${Ua}questSide`)
```

#### 928. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12680` → after: `L12680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12680) · [Before (L12680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12680)

```diff
-                 children: xq(`${xu}${lq.side.name[0]}`, uu(lq.side.name[1]))
+                 children: Lb(`${Ua}${Ob.side.name[0]}`, Sa(Ob.side.name[1]))
```

#### 929. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12738` → after: `L12738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12738) · [Before (L12738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12738)

```diff
-         }, this.holdUntil = Date.now() + ("baf2ToastCelebrate" === qq.baf2ToastStyle ? 1500 : Eq), this.TV();
+         }, this.holdUntil = Date.now() + ("baf2ToastCelebrate" === bb.baf2ToastStyle ? 1500 : ub), this.vp();
```

#### 930. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12748-L12749` → after: `L12748-L12749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12748-L12749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12748-L12749) · [Before (L12748-L12749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12748-L12749)

```diff
-         }, this.TV(), this.timer = setTimeout((() => {
-           this.timer = null, this.view = null, this.TV()
+         }, this.vp(), this.timer = setTimeout((() => {
+           this.timer = null, this.view = null, this.vp()
```

#### 931. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12761` → after: `L12761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12761) · [Before (L12761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12761)

```diff
-         Ml.i.TV(JN, this.view, !0)
+         tO.i.vp(IZ, this.view, !0)
```

#### 932. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12764` → after: `L12764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12764) · [Before (L12764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12764)

```diff
-     var RN = gq(71);
+     var qZ = hb(65);
```

#### 933. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12776` → after: `L12776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12776) · [Before (L12776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12776)

```diff
-       const gq = (0, Yu.h)(JN, Eq.get()),
+       const hb = (0, ha.k)(IZ, ub.get()),
```

#### 934. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12801` → after: `L12801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12801) · [Before (L12801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12801)

```diff
-       }), document.body) : (0, rO.jsx)(ZN.g, {
+       }), document.body) : (0, jG.jsx)(iZ.e, {
```

#### 935. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12808` → after: `L12808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12808) · [Before (L12808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12808)

```diff
-         this.view = null, this.nextId = 1, this.timer = null, this.Fc = null
+         this.view = null, this.nextId = 1, this.timer = null, this.MS = null
```

#### 936. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12814` → after: `L12814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12814) · [Before (L12814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12814)

```diff
-         this.Fc = null
+         this.MS = null
```

#### 937. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12819` → after: `L12819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12819) · [Before (L12819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12819)

```diff
-         }(qq) ? this.Fc = qq : this.show(qq)
+         }(bb) ? this.MS = bb : this.show(bb)
```

#### 938. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12822` → after: `L12822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12822) · [Before (L12822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12822)

```diff
-         const qq = this.Fc;
+         const bb = this.MS;
```

#### 939. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12826` → after: `L12826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12826) · [Before (L12826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12826)

```diff
-         this.clearTimer(), this.Fc = null;
+         this.clearTimer(), this.MS = null;
```

#### 940. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12832-L12833` → after: `L12832-L12833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12832-L12833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12832-L12833) · [Before (L12832-L12833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12832-L12833)

```diff
-         }, this.TV(), this.timer = setTimeout((() => {
-           this.timer = null, this.view = null, this.TV()
+         }, this.vp(), this.timer = setTimeout((() => {
+           this.timer = null, this.view = null, this.vp()
```

#### 941. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12837` → after: `L12837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12837) · [Before (L12837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12837)

```diff
-         this.clearTimer(), this.Fc = null, this.view = null
+         this.clearTimer(), this.MS = null, this.view = null
```

#### 942. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12843` → after: `L12843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12843) · [Before (L12843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12843)

```diff
-         Ml.i.TV(sN, this.view, !0)
+         tO.i.vp(VZ, this.view, !0)
```

#### 943. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12854` → after: `L12854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12854) · [Before (L12854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12854)

```diff
-       } = (0, hl.v)(), lq = (0, Yu.h)(sN, gq.get());
+       } = (0, DO.K)(), Ob = (0, ha.k)(VZ, hb.get());
```

#### 944. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12863` → after: `L12863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12863) · [Before (L12863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12863)

```diff
-           "--baf2-area-ms": `${lq.ms}ms`
+           "--baf2-area-ms": `${Ob.ms}ms`
```

#### 945. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12875` → after: `L12875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12875) · [Before (L12875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12875)

```diff
-           children: null !== (Eq = Oq.baf2AreaNameText) && void 0 !== Eq ? Eq : Yq(Oq.baf2AreaName)
+           children: null !== (ub = Gb.baf2AreaNameText) && void 0 !== ub ? ub : Bb(Gb.baf2AreaName)
```

#### 946. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12916` → after: `L12916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12916) · [Before (L12916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12916)

```diff
-         this.view = qq, Ml.i.TV(KN, qq, !0)
+         this.view = bb, tO.i.vp(kZ, bb, !0)
```

#### 947. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12933` → after: `L12933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12933) · [Before (L12933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12933)

```diff
-       const gq = (0, Yu.h)(KN, Eq.get());
+       const hb = (0, ha.k)(kZ, ub.get());
```

#### 948. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12947` → after: `L12947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12947) · [Before (L12947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12947)

```diff
-       } = (0, hl.v)(), {
+       } = (0, DO.K)(), {
```

#### 949. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L12987` → after: `L12987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R12987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L12987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L12987) · [Before (L12987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L12987)

```diff
-       } = (0, hl.v)(), Yq = function(qq, Eq) {
+       } = (0, DO.K)(), Bb = function(bb, ub) {
```

#### 950. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L13010` → after: `L13010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R13010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L13010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L13010) · [Before (L13010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L13010)

```diff
-       return null === Yq ? null : (0, rO.jsx)(ZN.g, {
+       return null === Bb ? null : (0, jG.jsx)(iZ.e, {
```

#### 951. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L13023` → after: `L13023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R13023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L13023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L13023) · [Before (L13023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L13023)

```diff
-         return `${(40*Math.cos(Eq)).toFixed(2)} ${(40*Math.sin(Eq)).toFixed(2)}`
+         return `${(40*Math.cos(ub)).toFixed(2)} ${(40*Math.sin(ub)).toFixed(2)}`
```

#### 952. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L13025` → after: `L13025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R13025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L13025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L13025) · [Before (L13025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L13025)

```diff
-       return `M ${qq(160)} A 40 40 0 1 1 ${qq(380)}`
+       return `M ${bb(160)} A 40 40 0 1 1 ${bb(380)}`
```

#### 953. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L13035` → after: `L13035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R13035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L13035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L13035) · [Before (L13035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L13035)

```diff
-           const qq = `${gq},${Yq},${lq}`,
+           const bb = `${hb},${Bb},${Ob}`,
```

#### 954. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L13037` → after: `L13037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R13037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L13037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L13037) · [Before (L13037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L13037)

```diff
-           null === Oq ? Eq = this.labels.delete(qq) || Eq : xq && xq.item === Oq && (xq.count === mq || xq.count >= 0 && mq >= 0) ? xq.count !== mq && (xq.count = mq, this.writeCount(qq, mq)) : (this.labels.set(qq, {
+           null === Gb ? ub = this.labels.delete(bb) || ub : Lb && Lb.item === Gb && (Lb.count === Ub || Lb.count >= 0 && Ub >= 0) ? Lb.count !== Ub && (Lb.count = Ub, this.writeCount(bb, Ub)) : (this.labels.set(bb, {
```

#### 955. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L13050` → after: `L13050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R13050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L13050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L13050) · [Before (L13050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L13050)

```diff
-         const Eq = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bare"}|${qq}`;
+         const ub = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bare"}|${bb}`;
```

#### 956. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L13054` → after: `L13054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R13054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L13054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L13054) · [Before (L13054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L13054)

```diff
-           gq ? (this.countElements.set(Eq, gq), this.writeCount(qq, null !== (Yq = null === (lq = this.labels.get(qq)) || void 0 === lq ? void 0 : lq.count) && void 0 !== Yq ? Yq : -1)) : (this.countElements.delete(Eq), this.countRefs.delete(Eq))
+           hb ? (this.countElements.set(ub, hb), this.writeCount(bb, null !== (Bb = null === (Ob = this.labels.get(bb)) || void 0 === Ob ? void 0 : Ob.count) && void 0 !== Bb ? Bb : -1)) : (this.countElements.delete(ub), this.countRefs.delete(ub))
```

#### 957. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L13059` → after: `L13059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R13059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L13059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L13059) · [Before (L13059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L13059)

```diff
-         for (const [Eq, gq] of this.labels) this.writePart(`words|${Eq}`, qq(gq.count), gq.count)
+         for (const [ub, hb] of this.labels) this.writePart(`words|${ub}`, bb(hb.count), hb.count)
```

#### 958. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L13062` → after: `L13062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R13062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L13062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L13062) · [Before (L13062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L13062)

```diff
-         this.writePart(`bare|${qq}`, HO(Eq), Eq), this.countElements.has(`words|${qq}`) && this.writePart(`words|${qq}`, this.countWords(Eq), Eq)
+         this.writePart(`bare|${bb}`, lG(ub), ub), this.countElements.has(`words|${bb}`) && this.writePart(`words|${bb}`, this.countWords(ub), ub)
```

#### 959. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L13074` → after: `L13074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R13074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L13074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L13074) · [Before (L13074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L13074)

```diff
-         return this.labels.get(`${qq[0]},${qq[1]},${qq[2]}`)
+         return this.labels.get(`${bb[0]},${bb[1]},${bb[2]}`)
```

#### 960. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L13098` → after: `L13098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R13098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L13098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L13098) · [Before (L13098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L13098)

```diff
-             (0, EN.e)(Oq, !0);
+             (0, uZ.d)(Gb, !0);
```

#### 961. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L13112` → after: `L13112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R13112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L13112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L13112) · [Before (L13112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L13112)

```diff
-           children: (0, rO.jsx)(bl.e, {
+           children: (0, jG.jsx)(zO.d, {
```

#### 962. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L13149` → after: `L13149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R13149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L13149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L13149) · [Before (L13149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L13149)

```diff
-         } = (0, hl.v)(), [lq, Oq] = (0, Yq.useState)((() => Eq.list()));
+         } = (0, DO.K)(), [Ob, Gb] = (0, Bb.useState)((() => ub.list()));
```

#### 963. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L13172` → after: `L13172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R13172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L13172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L13172) · [Before (L13172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L13172)

```diff
-       return `${qq[0]},${qq[1]},${qq[2]}`
+       return `${bb[0]},${bb[1]},${bb[2]}`
```

#### 964. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L13199` → after: `L13199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R13199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L13199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L13199) · [Before (L13199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L13199)

```diff
-         this.plans = gq, this.layouts = new Map((null !== (Eq = qq.baf2RxLayouts) && void 0 !== Eq ? Eq : []).map((qq => {
+         this.plans = hb, this.layouts = new Map((null !== (ub = bb.baf2RxLayouts) && void 0 !== ub ? ub : []).map((bb => {
```

#### 965. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L13230` → after: `L13230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R13230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L13230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L13230) · [Before (L13230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L13230)

```diff
-         return this.predicted.has(gq) ? null : null !== (Eq = this.layouts.get(gq)) && void 0 !== Eq ? Eq : null
+         return this.predicted.has(hb) ? null : null !== (ub = this.layouts.get(hb)) && void 0 !== ub ? ub : null
```

#### 966. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L13270` → after: `L13270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R13270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L13270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L13270) · [Before (L13270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L13270)

```diff
-     var ua = gq(190);
+     var aX = hb(191);
```

#### 967. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L13324` → after: `L13324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R13324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L13324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L13324) · [Before (L13324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L13324)

```diff
-           return gq && null !== (cq = vA(gq)) && void 0 !== cq ? cq : null
+           return hb && null !== (Sb = jY(hb)) && void 0 !== Sb ? Sb : null
```

#### 968. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L13330` → after: `L13330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R13330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L13330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L13330) · [Before (L13330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L13330)

```diff
-       return null === uq ? null : null !== (Oq = vA(uq)) && void 0 !== Oq ? Oq : null
+       return null === ab ? null : null !== (Gb = jY(ab)) && void 0 !== Gb ? Gb : null
```

#### 969. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L13449` → after: `L13449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R13449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L13449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L13449) · [Before (L13449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L13449)

```diff
-           this.setGoal(null !== (Eq = null === qq || void 0 === qq ? void 0 : qq.goal) && void 0 !== Eq ? Eq : null, null !== (gq = null === qq || void 0 === qq ? void 0 : qq.startsBattery) && void 0 !== gq && gq)
+           this.setGoal(null !== (ub = null === bb || void 0 === bb ? void 0 : bb.goal) && void 0 !== ub ? ub : null, null !== (hb = null === bb || void 0 === bb ? void 0 : bb.startsBattery) && void 0 !== hb && hb)
```

#### 970. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L13458` → after: `L13458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R13458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L13458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L13458) · [Before (L13458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L13458)

```diff
-             startsBattery: JSON.stringify(null !== Yq && void 0 !== Yq ? Yq : null).includes("arrowStartBattery")
+             startsBattery: JSON.stringify(null !== Bb && void 0 !== Bb ? Bb : null).includes("arrowStartBattery")
```

#### 971. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L13484` → after: `L13484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R13484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L13484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L13484) · [Before (L13484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L13484)

```diff
-             const gq = ua.c.Oa,
+             const hb = aX.e.bX,
```

#### 972. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L13495` → after: `L13495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R13495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L13495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L13495) · [Before (L13495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L13495)

```diff
-                     Yq.set(`${gq},${Eq},${Oq}`, null !== (lq = qq.getChunkVersion(gq, Eq, Oq)) && void 0 !== lq ? lq : -1)
+                     Bb.set(`${hb},${ub},${Gb}`, null !== (Ob = bb.getChunkVersion(hb, ub, Gb)) && void 0 !== Ob ? Ob : -1)
```

#### 973. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L13531` → after: `L13531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R13531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L13531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L13531) · [Before (L13531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L13531)

```diff
-                 Eq = qq ? `${uq}Dim` : uq;
+                 ub = bb ? `${ab}Dim` : ab;
```

#### 974. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L13551` → after: `L13551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R13551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L13551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L13551) · [Before (L13551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L13551)

```diff
-             const qq = null !== (mq = Yq.get("cell")) && void 0 !== mq ? mq : {
+             const bb = null !== (Ub = Bb.get("cell")) && void 0 !== Ub ? Ub : {
```

#### 975. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L13562` → after: `L13562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R13562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L13562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L13562) · [Before (L13562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L13562)

```diff
-           Aq = [...xq.map((qq => `${qq}:${Yq.get(qq).list.join(";")}`)), `cue:${lq.join(";")}`].join("|");
+           Yb = [...Lb.map((bb => `${bb}:${Bb.get(bb).list.join(";")}`)), `cue:${Ob.join(";")}`].join("|");
```

#### 976. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L13611` → after: `L13611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R13611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L13611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L13611) · [Before (L13611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L13611)

```diff
-           mq = null === (Yq = qq.Ngq(Eq)) || void 0 === Yq ? void 0 : Yq.name,
+           Ub = null === (Bb = bb.cub(ub)) || void 0 === Bb ? void 0 : Bb.name,
```

#### 977. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L13613` → after: `L13613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R13613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L13613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L13613) · [Before (L13613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L13613)

```diff
-           Aq = xq ? [xq.MV[0], xq.MV[1], xq.MV[2]] : null,
+           Yb = Lb ? [Lb.gp[0], Lb.gp[1], Lb.gp[2]] : null,
```

#### 978. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L13615` → after: `L13615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R13615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L13615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L13615) · [Before (L13615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L13615)

```diff
-           uq = cq ? `${cq.box.ctrl.join()}|${cq.box.rot}|${cq.fits}` : "";
+           ab = Sb ? `${Sb.box.ctrl.join()}|${Sb.box.rot}|${Sb.fits}` : "";
```

#### 979. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L13629` → after: `L13629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R13629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L13629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L13629) · [Before (L13629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L13629)

```diff
-         } = gq, Oq = lq ? pa : Ga, {
+         } = hb, Gb = Ob ? sX : MX, {
```

#### 980. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L13670` → after: `L13670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R13670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L13670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L13670) · [Before (L13670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L13670)

```diff
-         } = qq.box, mq = "reactor" === qq.kind ? `${Ja}rxTitle` : `${Ja}batTitle`;
+         } = bb.box, Ub = "reactor" === bb.kind ? `${IX}rxTitle` : `${IX}batTitle`;
```

#### 981. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L13672` → after: `L13672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R13672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L13672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L13672) · [Before (L13672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L13672)

```diff
-           key: `${Ja}lookPlanFormed`,
+           key: `${IX}lookPlanFormed`,
```

#### 982. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L13690` → after: `L13690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R13690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L13690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L13690) · [Before (L13690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L13690)

```diff
-           return "blocked" === lq ? `${Ja}lookWhy_blocked` : "wrong" === lq ? "ctrl" === Yq ? `${Ja}lookWhy_ctrl` : `${Ja}lookWhy_reactor_${Yq}` : void 0
+           return "blocked" === Ob ? `${IX}lookWhy_blocked` : "wrong" === Ob ? "ctrl" === Bb ? `${IX}lookWhy_ctrl` : `${IX}lookWhy_reactor_${Bb}` : void 0
```

#### 983. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L13693` → after: `L13693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R13693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L13693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L13693) · [Before (L13693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L13693)

```diff
-           key: `${Ja}lookPlanToBuild`,
+           key: `${IX}lookPlanToBuild`,
```

#### 984. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L13702` → after: `L13702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R13702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L13702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L13702) · [Before (L13702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L13702)

```diff
-           key: `${Ja}lookPlanTakeOut`,
+           key: `${IX}lookPlanTakeOut`,
```

#### 985. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L13711` → after: `L13711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R13711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L13711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L13711) · [Before (L13711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L13711)

```diff
-           key: "reactor" === qq.kind ? `${Ja}lookPlanNoRods` : `${Ja}lookPlanDone`,
+           key: "reactor" === bb.kind ? `${IX}lookPlanNoRods` : `${IX}lookPlanDone`,
```

#### 986. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L13762` → after: `L13762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R13762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L13762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L13762) · [Before (L13762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L13762)

```diff
-         return null !== (qq = null === (Eq = this.echoes.at(-1)) || void 0 === Eq ? void 0 : Eq.age()) && void 0 !== qq ? qq : null
+         return null !== (bb = null === (ub = this.echoes.at(-1)) || void 0 === ub ? void 0 : ub.age()) && void 0 !== bb ? bb : null
```

#### 987. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L13773` → after: `L13773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R13773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L13773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L13773) · [Before (L13773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L13773)

```diff
-         return null === this.value ? qq : this.down || this.value !== this.sent ? this.value : qq === this.sent && this.echoes.agreeCounts() || this.echoes.answered() ? (this.value = null, this.sent = null, this.echoes.clear(), qq) : this.value
+         return null === this.value ? bb : this.down || this.value !== this.sent ? this.value : bb === this.sent && this.echoes.agreeCounts() || this.echoes.answered() ? (this.value = null, this.sent = null, this.echoes.clear(), bb) : this.value
```

#### 988. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L13811` → after: `L13811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R13811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L13811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L13811) · [Before (L13811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L13811)

```diff
-         const lq = null !== (Yq = this.pending.get(qq)) && void 0 !== Yq ? Yq : {
+         const Ob = null !== (Bb = this.pending.get(bb)) && void 0 !== Bb ? Bb : {
```

#### 989. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L13822` → after: `L13822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R13822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L13822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L13822) · [Before (L13822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L13822)

```diff
-           }] of this.pending) 0 !== (qq & gq) === Yq && lq.agreeCounts() || lq.answered() ? this.pending.delete(gq) : Eq = Yq ? Eq | gq : Eq & ~gq;
+           }] of this.pending) 0 !== (bb & hb) === Bb && Ob.agreeCounts() || Ob.answered() ? this.pending.delete(hb) : ub = Bb ? ub | hb : ub & ~hb;
```

#### 990. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L13839` → after: `L13839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R13839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L13839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L13839) · [Before (L13839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L13839)

```diff
-           if (null !== mq) Eq = Math.max(null !== (gq = Eq) && void 0 !== gq ? gq : 0, mq)
+           if (null !== Ub) ub = Math.max(null !== (hb = ub) && void 0 !== hb ? hb : 0, Ub)
```

#### 991. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L13853` → after: `L13853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R13853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L13853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L13853) · [Before (L13853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L13853)

```diff
-         return this.dims && (Ca(this.dims, qq) && this.echoes.agreeCounts() || this.echoes.answered()) && (Ca(this.dims, qq) || (this.unmet = this.dims), this.dims = null, this.echoes.clear()), null !== (Eq = this.dims) && void 0 !== Eq ? Eq : qq
+         return this.dims && (TX(this.dims, bb) && this.echoes.agreeCounts() || this.echoes.answered()) && (TX(this.dims, bb) || (this.unmet = this.dims), this.dims = null, this.echoes.clear()), null !== (ub = this.dims) && void 0 !== ub ? ub : bb
```

#### 992. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L14005` → after: `L14005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R14005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L14005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L14005) · [Before (L14005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L14005)

```diff
-         !qq.baf2RxOpen && this.raw && YV(this.raw.baf2RxAt) === YV(qq.baf2RxAt) || (this.size.clear(), this.flags.clear(), this.throttle.clear(), this.oneShots.clear(), this.startedAt = null), this.oneShots.settle(qq), this.TV(qq)
+         !bb.baf2RxOpen && this.raw && Op(this.raw.baf2RxAt) === Op(bb.baf2RxAt) || (this.size.clear(), this.flags.clear(), this.throttle.clear(), this.oneShots.clear(), this.startedAt = null), this.oneShots.settle(bb), this.vp(bb)
```

#### 993. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L14014` → after: `L14014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R14014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L14014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L14014) · [Before (L14014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L14014)

```diff
-         this.raw && (this.size.zW(this.plans, this.raw.baf2RxAt, qq), this.TV(this.raw))
+         this.raw && (this.size.xw(this.plans, this.raw.baf2RxAt, bb), this.vp(this.raw))
```

#### 994. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L14019` → after: `L14019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R14019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L14019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L14019) · [Before (L14019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L14019)

```diff
-         this.plans.setStarter(qq, !this.plans.showsStarter(qq)), this.TV(this.raw)
+         this.plans.setStarter(bb, !this.plans.showsStarter(bb)), this.vp(this.raw)
```

#### 995. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L14022` → after: `L14022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R14022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L14022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L14022) · [Before (L14022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L14022)

```diff
-         this.plans.setGuide(!this.plans.guideOn()), this.raw && this.TV(this.raw)
+         this.plans.setGuide(!this.plans.guideOn()), this.raw && this.vp(this.raw)
```

#### 996. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L14025` → after: `L14025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R14025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L14025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L14025) · [Before (L14025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L14025)

```diff
-         this.odConfirmed = !0, this.raw && this.TV(this.raw)
+         this.odConfirmed = !0, this.raw && this.vp(this.raw)
```

#### 997. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L14039` → after: `L14039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R14039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L14039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L14039) · [Before (L14039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L14039)

```diff
-         }(qq, this.raw), Eq) && ("start" === qq && (this.startedAt = this.now()), this.TV(this.raw))
+         }(bb, this.raw), ub) && ("start" === bb && (this.startedAt = this.now()), this.vp(this.raw))
```

#### 998. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L14051` → after: `L14051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R14051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L14051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L14051) · [Before (L14051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L14051)

```diff
-           lq = `${uE} ${this.raw.baf2RxAt.join(" ")} `,
+           Ob = `${au} ${this.raw.baf2RxAt.join(" ")} `,
```

#### 999. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L14056` → after: `L14056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R14056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L14056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L14056) · [Before (L14056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L14056)

```diff
-         this.flags.set(qq, Eq, Oq), Yq && this.throttle.assume(0, Oq), this.TV(this.raw)
+         this.flags.set(bb, ub, Gb), Bb && this.throttle.assume(0, Gb), this.vp(this.raw)
```

#### 1000. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L14062` → after: `L14062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R14062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L14062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L14062) · [Before (L14062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L14062)

```diff
-         this.throttle.drag(qq), this.raw && this.TV(this.raw)
+         this.throttle.drag(bb), this.raw && this.vp(this.raw)
```

#### 1001. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L14065` → after: `L14065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R14065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L14065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L14065) · [Before (L14065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L14065)

```diff
-         this.throttle.release(), this.raw && this.TV(this.raw)
+         this.throttle.release(), this.raw && this.vp(this.raw)
```

#### 1002. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L14107` → after: `L14107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R14107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L14107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L14107) · [Before (L14107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L14107)

```diff
-           Nq = [Math.max(0, qq - 2), Math.max(0, Eq - 2), Math.max(0, gq - 2)], uq = Array.from(Yq.baf2RxCells, Number), Bq = `${Nq.join(",")}:${Yq.baf2RxCells}`
+           Zb = [Math.max(0, bb - 2), Math.max(0, ub - 2), Math.max(0, hb - 2)], ab = Array.from(Bb.baf2RxCells, Number), Hb = `${Zb.join(",")}:${Bb.baf2RxCells}`
```

#### 1003. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L14113` → after: `L14113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R14113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L14113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L14113) · [Before (L14113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L14113)

```diff
-           Wq = qA(Nq, gq), uq = gq, Bq = `${Nq.join(",")}:${gq.join("")}`
+           wb = RL(Zb, hb), ab = hb, Hb = `${Zb.join(",")}:${hb.join("")}`
```

#### 1004. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L14132` → after: `L14132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R14132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L14132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L14132) · [Before (L14132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L14132)

```diff
-           this.redraw = null, this.raw && this.TV(this.raw)
+           this.redraw = null, this.raw && this.vp(this.raw)
```

#### 1005. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L14142` → after: `L14142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R14142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L14142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L14142) · [Before (L14142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L14142)

```diff
-         !qq.baf2BatOpen && this.view && YV(this.view.status.baf2BatAt) === YV(qq.baf2BatAt) || (this.size.clear(), this.oneShots.clear()), this.oneShots.settle(qq), this.TV(qq)
+         !bb.baf2BatOpen && this.view && Op(this.view.status.baf2BatAt) === Op(bb.baf2BatAt) || (this.size.clear(), this.oneShots.clear()), this.oneShots.settle(bb), this.vp(bb)
```

#### 1006. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L14147` → after: `L14147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R14147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L14147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L14147) · [Before (L14147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L14147)

```diff
-         this.oneShots.tap(qq, (qq => gV(qq) !== gq), Eq) && this.TV(this.view.status)
+         this.oneShots.tap(bb, (bb => Bp(bb) !== hb), ub) && this.vp(this.view.status)
```

#### 1007. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L14156` → after: `L14156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R14156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L14156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L14156) · [Before (L14156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L14156)

```diff
-         this.view && (this.size.zW(this.plans, this.view.status.baf2BatAt, qq), this.TV(this.view.status))
+         this.view && (this.size.xw(this.plans, this.view.status.baf2BatAt, bb), this.vp(this.view.status))
```

#### 1008. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L14159` → after: `L14159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R14159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L14159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L14159) · [Before (L14159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L14159)

```diff
-         this.plans.setGuide(!this.plans.guideOn()), this.view && this.TV(this.view.status)
+         this.plans.setGuide(!this.plans.guideOn()), this.view && this.vp(this.view.status)
```

#### 1009. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L14173` → after: `L14173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R14173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L14173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L14173) · [Before (L14173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L14173)

```diff
-           WB: PA(Eq, qq.baf2BatDims) ? qq.baf2BatCapacity : cA(...Eq),
+           LH: KY(ub, bb.baf2BatDims) ? bb.baf2BatCapacity : YY(...ub),
```

#### 1010. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L14177` → after: `L14177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R14177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L14177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L14177) · [Before (L14177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L14177)

```diff
-           this.redraw = null, this.view && this.TV(this.view.status)
+           this.redraw = null, this.view && this.vp(this.view.status)
```

#### 1011. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L14196` → after: `L14196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R14196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L14196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L14196) · [Before (L14196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L14196)

```diff
-       }(Eq.getBoundingClientRect(), null !== (qq = null === gq || void 0 === gq ? void 0 : gq.getBoundingClientRect()) && void 0 !== qq ? qq : null)
+       }(ub.getBoundingClientRect(), null !== (bb = null === hb || void 0 === hb ? void 0 : hb.getBoundingClientRect()) && void 0 !== bb ? bb : null)
```

#### 1012. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L14204` → after: `L14204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R14204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L14204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L14204) · [Before (L14204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L14204)

```diff
-       } = (0, hl.v)(), [lq, Oq] = (0, Yq.useState)((() => Eq.get())), [mq, xq] = (0, Yq.useState)((() => performance.now()));
+       } = (0, DO.K)(), [Ob, Gb] = (0, Bb.useState)((() => ub.get())), [Ub, Lb] = (0, Bb.useState)((() => performance.now()));
```

#### 1013. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L14236` → after: `L14236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R14236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L14236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L14236) · [Before (L14236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L14236)

```diff
-           children: gq(Aq.hot ? `${cV}rxAlarmSiren` : `${cV}rxAlarmDamaged`, {
+           children: hb(Yb.hot ? `${ap}rxAlarmSiren` : `${ap}rxAlarmDamaged`, {
```

#### 1014. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L14241` → after: `L14241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R14241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L14241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L14241) · [Before (L14241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L14241)

```diff
-           style: null !== Bq && void 0 !== Bq ? Bq : void 0,
+           style: null !== Hb && void 0 !== Hb ? Hb : void 0,
```

#### 1015. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L14243` → after: `L14243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R14243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L14243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L14243) · [Before (L14243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L14243)

```diff
-           children: gq(`${cV}rxAlarmCountdown`, {
+           children: hb(`${ap}rxAlarmCountdown`, {
```

#### 1016. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L14269` → after: `L14269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R14269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L14269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L14269) · [Before (L14269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L14269)

```diff
-             secs: null !== (lq = qq.baf2RxAlarmSecs) && void 0 !== lq ? lq : null,
+             secs: null !== (Ob = bb.baf2RxAlarmSecs) && void 0 !== Ob ? Ob : null,
```

#### 1017. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L14274` → after: `L14274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R14274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L14274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L14274) · [Before (L14274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L14274)

```diff
-         this.TV(Yq)
+         this.vp(Bb)
```

#### 1018. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L14279` → after: `L14279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R14279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L14279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L14279) · [Before (L14279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L14279)

```diff
-         Eq && this.TV(this.snapshot.boomAt)
+         ub && this.vp(this.snapshot.boomAt)
```

#### 1019. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L14323` → after: `L14323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R14323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L14323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L14323) · [Before (L14323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L14323)

```diff
-       return `${qq[0]},${qq[1]},${qq[2]}`
+       return `${bb[0]},${bb[1]},${bb[2]}`
```

#### 1020. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L14336` → after: `L14336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R14336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L14336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L14336) · [Before (L14336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L14336)

```diff
-               log: [...null !== (qq = this.devLog) && void 0 !== qq ? qq : []]
+               log: [...null !== (bb = this.devLog) && void 0 !== bb ? bb : []]
```

#### 1021. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L14344` → after: `L14344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R14344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L14344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L14344) · [Before (L14344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L14344)

```diff
-         return null !== (qq = this.devLog) && void 0 !== qq ? qq : []
+         return null !== (bb = this.devLog) && void 0 !== bb ? bb : []
```

#### 1022. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L14365` → after: `L14365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R14365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L14365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L14365) · [Before (L14365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L14365)

```diff
-           return null !== (gq = Eq.find((qq => xa(qq.box.ctrl) === Yq))) && void 0 !== gq ? gq : null
+           return null !== (hb = ub.find((bb => LX(bb.box.ctrl) === Bb))) && void 0 !== hb ? hb : null
```

#### 1023. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L14379` → after: `L14379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R14379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L14379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L14379) · [Before (L14379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L14379)

```diff
-             visibility: "formed" === lq ? 1 - xq : Math.sin(Math.PI * xq)
+             visibility: "formed" === Ob ? 1 - Lb : Math.sin(Math.PI * Lb)
```

#### 1024. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L14435` → after: `L14435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R14435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L14435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L14435) · [Before (L14435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L14435)

```diff
-         blendMode: zx.h.Standard,
+         blendMode: JL.f.Standard,
```

#### 1025. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L14454` → after: `L14454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R14454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L14454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L14454) · [Before (L14454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L14454)

```diff
-         blendMode: zx.h.Add,
+         blendMode: JL.f.Add,
```

#### 1026. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L14464` → after: `L14464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R14464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L14464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L14464) · [Before (L14464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L14464)

```diff
-       return null === Eq.fuelSlot || lg(Eq) ? tV.includes(qq) ? yV : QV : HV
+       return null === ub.fuelSlot || Oh(ub) ? jp.includes(bb) ? rp : dp : Kp
```

#### 1027. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L14477-L14478` → after: `L14477-L14478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R14477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L14477-L14478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L14477-L14478) · [Before (L14477-L14478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L14477-L14478)

```diff
-         texture: qq.soft ? vV : "square_particle",
-         WB: Eq,
+         texture: bb.soft ? Dp : "square_particle",
+         LH: ub,
```

#### 1028. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L14511` → after: `L14511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R14511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L14511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L14511) · [Before (L14511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L14511)

```diff
-         const Oq = null !== (Yq = this.fixed) && void 0 !== Yq ? Yq : xq() ? oV : HV;
+         const Gb = null !== (Bb = this.fixed) && void 0 !== Bb ? Bb : Lb() ? Wp : Kp;
```

#### 1029. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L14534` → after: `L14534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R14534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L14534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L14534) · [Before (L14534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L14534)

```diff
-             const lq = qq.blockNameToBlockId(`${Eq}|meta|rot${Yq}|Running`, !0);
+             const Ob = bb.blockNameToBlockId(`${ub}|meta|rot${Bb}|Running`, !0);
```

#### 1030. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L14566` → after: `L14566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R14566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L14566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L14566) · [Before (L14566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L14566)

```diff
-             lc: qq,
+             bS: bb,
```

#### 1031. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L14578` → after: `L14578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R14578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L14578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L14578) · [Before (L14578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L14578)

```diff
-             this.cursor = (this.cursor + 1) % gq, qq.getBlockId(Eq.pos[0], Eq.pos[1], Eq.pos[2]) === Eq.lc && (Eq.puffer.puff(qq, Eq.pos, this.frame) && this.budget--)
+             this.cursor = (this.cursor + 1) % hb, bb.getBlockId(ub.pos[0], ub.pos[1], ub.pos[2]) === ub.bS && (ub.puffer.puff(bb, ub.pos, this.frame) && this.budget--)
```

#### 1032. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L14608` → after: `L14608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R14608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L14608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L14608) · [Before (L14608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L14608)

```diff
-       return `${qq.ctrl.join(",")}:${qq.rot}:${qq.cu},${qq.cv}:${qq.w},${qq.h},${qq.d}`
+       return `${bb.ctrl.join(",")}:${bb.rot}:${bb.cu},${bb.cv}:${bb.w},${bb.h},${bb.d}`
```

#### 1033. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L14688-L14690` → after: `L14688-L14690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R14688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L14688-L14690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L14688-L14690) · [Before (L14688-L14690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L14688-L14690)

```diff
-             budget: null !== (mq = null === Wq || void 0 === Wq ? void 0 : Wq.budget) && void 0 !== mq ? mq : 0,
-             cursor: null !== (xq = null === Wq || void 0 === Wq ? void 0 : Wq.cursor) && void 0 !== xq ? xq : 0,
-             glassBudget: null !== (Aq = null === Wq || void 0 === Wq ? void 0 : Wq.glassBudget) && void 0 !== Aq ? Aq : 0
+             budget: null !== (Ub = null === wb || void 0 === wb ? void 0 : wb.budget) && void 0 !== Ub ? Ub : 0,
+             cursor: null !== (Lb = null === wb || void 0 === wb ? void 0 : wb.cursor) && void 0 !== Lb ? Lb : 0,
+             glassBudget: null !== (Yb = null === wb || void 0 === wb ? void 0 : wb.glassBudget) && void 0 !== Yb ? Yb : 0
```

#### 1034. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L14703-L14704` → after: `L14703-L14704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R14703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L14703-L14704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L14703-L14704) · [Before (L14703-L14704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L14703-L14704)

```diff
-         const mq = lq > 8 ? 8 / lq : 1,
-           xq = Oq > 6 ? 6 / Oq : 1;
+         const Ub = Ob > 8 ? 8 / Ob : 1,
+           Lb = Gb > 6 ? 6 / Gb : 1;
```

#### 1035. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L14713` → after: `L14713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R14713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L14713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L14713) · [Before (L14713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L14713)

```diff
-         const [Bq, Wq] = Aq, Nq = null !== (Yq = this.emitter) && void 0 !== Yq ? Yq : this.create(qq, Bq, Wq);
+         const [Hb, wb] = Yb, Zb = null !== (Bb = this.emitter) && void 0 !== Bb ? Bb : this.create(bb, Hb, wb);
```

#### 1036. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L14733` → after: `L14733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R14733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L14733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L14733) · [Before (L14733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L14733)

```diff
-         WB: Math.ceil(18 * kV[1]) + 4,
+         LH: Math.ceil(18 * qp[1]) + 4,
```

#### 1037. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L14753` → after: `L14753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R14753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L14753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L14753) · [Before (L14753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L14753)

```diff
-         blendMode: zx.h.Standard
+         blendMode: JL.f.Standard
```

#### 1038. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L14779` → after: `L14779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R14779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L14779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L14779) · [Before (L14779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L14779)

```diff
-           DE: [lq.box.ctrl[0] + .5, lq.box.ctrl[1], lq.box.ctrl[2] + .5],
+           Oh: [Ob.box.ctrl[0] + .5, Ob.box.ctrl[1], Ob.box.ctrl[2] + .5],
```

#### 1039. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L14817` → after: `L14817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R14817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L14817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L14817) · [Before (L14817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L14817)

```diff
-         for (const mq of gq) "reactor" === mq.kind && mq.level > 0 && XV(mq.box.ctrl, Yq) <= 576 && lq.set(`${Oq=mq.box.ctrl,`${Oq[0]},${Oq[1]},${Oq[2]}`}:${mq.level}`, mq);
+         for (const Ub of hb) "reactor" === Ub.kind && Ub.level > 0 && fp(Ub.box.ctrl, Bb) <= 576 && Ob.set(`${Gb=Ub.box.ctrl,`${Gb[0]},${Gb[1]},${Gb[2]}`}:${Ub.level}`, Ub);
```

#### 1040. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L14826` → after: `L14826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R14826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L14826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L14826) · [Before (L14826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L14826)

```diff
-             DE: lq,
+             Oh: Ob,
```

#### 1041. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L14851` → after: `L14851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R14851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L14851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L14851) · [Before (L14851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L14851)

```diff
-           this.TV({
+           this.vp({
```

#### 1042. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L14861` → after: `L14861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R14861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L14861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L14861) · [Before (L14861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L14861)

```diff
-         } else this.TV({
+         } else this.vp({
```

#### 1043. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L14896` → after: `L14896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R14896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L14896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L14896) · [Before (L14896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L14896)

```diff
-       } = (0, hl.v)(), [Oq, mq] = (0, Yq.useState)((() => gq.get())), [xq, Aq] = (0, Yq.useState)((() => performance.now()));
+       } = (0, DO.K)(), [Gb, Ub] = (0, Bb.useState)((() => hb.get())), [Lb, Yb] = (0, Bb.useState)((() => performance.now()));
```

#### 1044. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L14933` → after: `L14933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R14933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L14933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L14933) · [Before (L14933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L14933)

```diff
-             radius: String(null !== (Eq = null === cq || void 0 === cq ? void 0 : cq.r) && void 0 !== Eq ? Eq : 0)
+             radius: String(null !== (ub = null === Sb || void 0 === Sb ? void 0 : Sb.r) && void 0 !== ub ? ub : 0)
```

#### 1045. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L14953` → after: `L14953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R14953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L14953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L14953) · [Before (L14953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L14953)

```diff
-         this.Fc = !1
+         this.MS = !1
```

#### 1046. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L14956` → after: `L14956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R14956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L14956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L14956) · [Before (L14956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L14956)

```diff
-         qq.getCameraFar() < 1e3 && (qq.setCameraFar(1e3), this.Fc = !0)
+         bb.getCameraFar() < 1e3 && (bb.setCameraFar(1e3), this.MS = !0)
```

#### 1047. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L14959` → after: `L14959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R14959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L14959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L14959) · [Before (L14959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L14959)

```diff
-         this.Fc && (this.Fc = !1, qq.setCameraFar(null))
+         this.MS && (this.MS = !1, bb.setCameraFar(null))
```

#### 1048. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L14974` → after: `L14974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R14974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L14974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L14974) · [Before (L14974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L14974)

```diff
-         blend: zx.h.Standard,
+         blend: JL.f.Standard,
```

#### 1049. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L14991` → after: `L14991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R14991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L14991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L14991) · [Before (L14991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L14991)

```diff
-         blend: zx.h.Standard,
+         blend: JL.f.Standard,
```

#### 1050. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L15008` → after: `L15008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R15008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L15008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L15008) · [Before (L15008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L15008)

```diff
-         blend: zx.h.Standard,
+         blend: JL.f.Standard,
```

#### 1051. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L15021` → after: `L15021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R15021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L15021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L15021) · [Before (L15021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L15021)

```diff
-         WB: Math.ceil(120) + 4,
+         LH: Math.ceil(120) + 4,
```

#### 1052. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L15038` → after: `L15038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R15038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L15038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L15038) · [Before (L15038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L15038)

```diff
-         blendMode: zx.h.Add
+         blendMode: JL.f.Add
```

#### 1053. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L15140` → after: `L15140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R15140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L15140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L15140) · [Before (L15140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L15140)

```diff
-           WB: Eq.count + 4,
+           LH: ub.count + 4,
```

#### 1054. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L15193` → after: `L15193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R15193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L15193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L15193) · [Before (L15193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L15193)

```diff
-         WB: 720,
+         LH: 720,
```

#### 1055. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L15197` → after: `L15197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R15197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L15197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L15197) · [Before (L15197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L15197)

```diff
-         WB: 320,
+         LH: 320,
```

#### 1056. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L15249` → after: `L15249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R15249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L15249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L15249) · [Before (L15249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L15249)

```diff
-           return qq ? cd : Ad
+           return bb ? ao : So
```

#### 1057. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L15259` → after: `L15259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R15259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L15259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L15259) · [Before (L15259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L15259)

```diff
-         this.state.vy(qq, performance.now())
+         this.state.sK(bb, performance.now())
```

#### 1058. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L15274` → after: `L15274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R15274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L15274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L15274) · [Before (L15274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L15274)

```diff
-         const Aq = null !== (gq = this.systems) && void 0 !== gq ? gq : this.create(qq, xq),
+         const Yb = null !== (hb = this.systems) && void 0 !== hb ? hb : this.create(bb, Lb),
```

#### 1059. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L15281` → after: `L15281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R15281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L15281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L15281) · [Before (L15281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L15281)

```diff
-         for (const Eq of null !== (qq = this.systems) && void 0 !== qq ? qq : []) {
+         for (const ub of null !== (bb = this.systems) && void 0 !== bb ? bb : []) {
```

#### 1060. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L15295` → after: `L15295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R15295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L15295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L15295) · [Before (L15295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L15295)

```diff
-             WB: Math.ceil(this.tier.WB * xq),
+             LH: Math.ceil(this.tier.LH * Lb),
```

#### 1061. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L15319` → after: `L15319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R15319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L15319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L15319) · [Before (L15319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L15319)

```diff
-             blendMode: zx.h.Standard
+             blendMode: JL.f.Standard
```

#### 1062. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L15339-L15341` → after: `L15339-L15341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R15339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L15339-L15341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L15339-L15341) · [Before (L15339-L15341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L15339-L15341)

```diff
-     var od = gq(590),
-       Pd = gq(38455);
-     const Qd = new Set(od.j);
+     var Co = hb(580),
+       ro = hb(38095);
+     const jo = new Set(Co.k);
```

#### 1063. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L15346` → after: `L15346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R15346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L15346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L15346) · [Before (L15346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L15346)

```diff
-       return null !== Eq && Qd.has(Eq) ? Eq : null
+       return null !== ub && jo.has(ub) ? ub : null
```

#### 1064. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L15353` → after: `L15353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R15353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L15353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L15353) · [Before (L15353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L15353)

```diff
-       } = (0, Pd.c)(qq).hitBoxDimensions;
+       } = (0, ro.e)(bb).hitBoxDimensions;
```

#### 1065. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L15562` → after: `L15562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R15562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L15562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L15562) · [Before (L15562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L15562)

```diff
-             const [Oq, mq, xq] = lq[Math.floor(Math.random() * lq.length)], Aq = .04, cq = (qq, Eq, gq) => qq > 0 ? Eq + gq + Aq : qq < 0 ? Eq - Aq : Eq + .1, uq = (qq, Eq, gq) => qq > 0 ? Eq + gq + Aq : qq < 0 ? Eq - Aq : Eq + gq - .1, Bq = [cq(Oq, qq, 1), cq(mq, Eq, Yq), cq(xq, … [truncated]
+             const [Gb, Ub, Lb] = Ob[Math.floor(Math.random() * Ob.length)], Yb = .04, Sb = (bb, ub, hb) => bb > 0 ? ub + hb + Yb : bb < 0 ? ub - Yb : ub + .1, ab = (bb, ub, hb) => bb > 0 ? ub + hb + Yb : bb < 0 ? ub - Yb : ub + hb - .1, Hb = [Sb(Gb, bb, 1), Sb(Ub, ub, Bb), Sb(Lb, … [truncated]
```

#### 1066. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L15621` → after: `L15621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R15621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L15621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L15621) · [Before (L15621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L15621)

```diff
-         this.green.SB(qq, gq, Yq), this.pink.SB(qq, gq, Yq)
+         this.green.gH(bb, hb, Bb), this.pink.gH(bb, hb, Bb)
```

#### 1067. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L15640` → after: `L15640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R15640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L15640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L15640) · [Before (L15640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L15640)

```diff
-             scale: [gq.alongX ? 1 : Yq, Yq, gq.alongX ? Yq : 1]
+             scale: [hb.alongX ? 1 : Bb, Bb, hb.alongX ? Bb : 1]
```

#### 1068. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L15665` → after: `L15665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R15665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L15665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L15665) · [Before (L15665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L15665)

```diff
-           fd(Bq, 0, 0, 0, uq ? Oq : .2, .2, uq ? .2 : Oq);
+           Jo(Hb, 0, 0, 0, ab ? Gb : .2, .2, ab ? .2 : Gb);
```

#### 1069. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L15716` → after: `L15716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R15716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L15716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L15716) · [Before (L15716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L15716)

```diff
-         return `${Eq.join(";")}|${gq.join(";")}|${Yq.join(";")}|${lq.join(";")}`
+         return `${ub.join(";")}|${hb.join(";")}|${Bb.join(";")}|${Ob.join(";")}`
```

#### 1070. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L15737` → after: `L15737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R15737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L15737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L15737) · [Before (L15737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L15737)

```diff
-         const lq = null === (Yq = qq.Ngq(Eq)) || void 0 === Yq ? void 0 : Yq.name;
+         const Ob = null === (Bb = bb.cub(ub)) || void 0 === Bb ? void 0 : Bb.name;
```

#### 1071. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L15765` → after: `L15765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R15765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L15765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L15765) · [Before (L15765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L15765)

```diff
-           Yq = gq ? [gq.MV[0], gq.MV[1], gq.MV[2]] : null,
+           Bb = hb ? [hb.gp[0], hb.gp[1], hb.gp[2]] : null,
```

#### 1072. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L15787` → after: `L15787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R15787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L15787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L15787) · [Before (L15787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L15787)

```diff
-           Aq = mq ? `preview ${Yq.join(",")}|${mq.fits}|${Kd(xq)}` : "";
+           Yb = Ub ? `preview ${Bb.join(",")}|${Ub.fits}|${co(Lb)}` : "";
```

#### 1073. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L15789` → after: `L15789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R15789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L15789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L15789) · [Before (L15789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L15789)

```diff
-         Aq !== this.shownKey && this.show(qq, Aq, xq, null !== (cq = null === mq || void 0 === mq ? void 0 : mq.column) && void 0 !== cq ? cq : [], null === (uq = null === mq || void 0 === mq ? void 0 : mq.fits) || void 0 === uq || uq)
+         Yb !== this.shownKey && this.show(bb, Yb, Lb, null !== (Sb = null === Ub || void 0 === Ub ? void 0 : Ub.column) && void 0 !== Sb ? Sb : [], null === (ab = null === Ub || void 0 === Ub ? void 0 : Ub.fits) || void 0 === ab || ab)
```

#### 1074. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L15794` → after: `L15794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R15794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L15794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L15794) · [Before (L15794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L15794)

```diff
-         this.clear(qq), this.shownKey = Eq, Yq.length > 0 && this.meshes.push(Cd(qq, Yq, Md(lq ? Fd : Ud)));
+         this.clear(bb), this.shownKey = ub, Bb.length > 0 && this.meshes.push(Qo(bb, Bb, eo(Ob ? Fo : Vo)));
```

#### 1075. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L15821` → after: `L15821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R15821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L15821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L15821) · [Before (L15821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L15821)

```diff
-         this.stored = new Map, this.Fc = new Map, this.pending = [], this.order = [], this.recents = [], this.seq = 0, this.silos = 0, this.readOnly = !0, this.pocket = !1, this.listeners = new Set, this.version = 0
+         this.stored = new Map, this.MS = new Map, this.pending = [], this.order = [], this.recents = [], this.seq = 0, this.silos = 0, this.readOnly = !0, this.pocket = !1, this.listeners = new Set, this.version = 0
```

#### 1076. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L15827` → after: `L15827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R15827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L15827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L15827) · [Before (L15827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L15827)

```diff
-         if (qq.baf2TermHeld && (this.Fc = new Map(qq.baf2TermHeld)), this.pending = this.pending.filter((Eq => Eq.seq > qq.baf2TermAcked)), this.silos = qq.baf2TermSilos, this.readOnly = qq.baf2TermReadOnly, this.pocket = !0 === qq.baf2TermPocket, qq.baf2TermReset) this.resort();
+         if (bb.baf2TermHeld && (this.MS = new Map(bb.baf2TermHeld)), this.pending = this.pending.filter((ub => ub.seq > bb.baf2TermAcked)), this.silos = bb.baf2TermSilos, this.readOnly = bb.baf2TermReadOnly, this.pocket = !0 === bb.baf2TermPocket, bb.baf2TermReset) this.resort();
```

#### 1077. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L15866` → after: `L15866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R15866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L15866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L15866) · [Before (L15866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L15866)

```diff
-         let gq = null !== (Eq = this.stored.get(qq)) && void 0 !== Eq ? Eq : 0;
+         let hb = null !== (ub = this.stored.get(bb)) && void 0 !== ub ? ub : 0;
```

#### 1078. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L15872` → after: `L15872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R15872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L15872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L15872) · [Before (L15872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L15872)

```diff
-         let gq = null !== (Eq = this.Fc.get(qq)) && void 0 !== Eq ? Eq : 0;
+         let hb = null !== (ub = this.MS.get(bb)) && void 0 !== ub ? ub : 0;
```

#### 1079. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L15905` → after: `L15905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R15905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L15905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L15905) · [Before (L15905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L15905)

```diff
-     var Dd = gq(38408);
+     var uA = hb(38048);
```

#### 1080. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L15922` → after: `L15922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R15922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L15922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L15922) · [Before (L15922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L15922)

```diff
-         return null === (Eq = Dm.m[qq]) || void 0 === Eq ? void 0 : Eq.displayName
+         return null === (ub = QU.j[bb]) || void 0 === ub ? void 0 : ub.displayName
```

#### 1081. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L15926` → after: `L15926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R15926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L15926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L15926) · [Before (L15926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L15926)

```diff
-         return null === (Eq = Dm.m[qq]) || void 0 === Eq ? void 0 : Eq.description
+         return null === (ub = QU.j[bb]) || void 0 === ub ? void 0 : ub.description
```

#### 1082. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L15930` → after: `L15930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R15930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L15930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L15930) · [Before (L15930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L15930)

```diff
-         return null === (Eq = Dm.m[qq]) || void 0 === Eq ? void 0 : Eq.harvests
+         return null === (ub = QU.j[bb]) || void 0 === ub ? void 0 : ub.harvests
```

#### 1083. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L15934` → after: `L15934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R15934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L15934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L15934) · [Before (L15934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L15934)

```diff
-         return null === (Eq = Dm.m[qq]) || void 0 === Eq ? void 0 : Eq.level
+         return null === (ub = QU.j[bb]) || void 0 === ub ? void 0 : ub.level
```

#### 1084. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L15942` → after: `L15942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R15942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L15942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L15942) · [Before (L15942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L15942)

```diff
-           xq = qq.isBlock(Eq) ? Eq : qq.isBlock(mq) ? mq : null;
+           Lb = bb.isBlock(ub) ? ub : bb.isBlock(Ub) ? Ub : null;
```

#### 1085. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L15944-L15946` → after: `L15944-L15946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R15944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L15944-L15946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L15944-L15946) · [Before (L15944-L15946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L15944-L15946)

```diff
-         const Aq = gq && "rock" === qq.harvests(gq) ? null !== (lq = qq.level(gq)) && void 0 !== lq ? lq : 0 : null,
-           cq = null !== (Oq = null !== Yq && void 0 !== Yq ? Yq : qq.harvestLevel(xq)) && void 0 !== Oq ? Oq : 0;
-         return (null !== Aq ? cq <= Aq : 0 === qq.harvestLevel(xq)) ? null : hY(qq, cq)
+         const Yb = hb && "rock" === bb.harvests(hb) ? null !== (Ob = bb.level(hb)) && void 0 !== Ob ? Ob : 0 : null,
+           Sb = null !== (Gb = null !== Bb && void 0 !== Bb ? Bb : bb.harvestLevel(Lb)) && void 0 !== Gb ? Gb : 0;
+         return (null !== Yb ? Sb <= Yb : 0 === bb.harvestLevel(Lb)) ? null : DB(bb, Sb)
```

#### 1086. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L15952` → after: `L15952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R15952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L15952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L15952) · [Before (L15952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L15952)

```diff
-         if (Eq === vY[0]) return [(0, Tq.Yd)({
+         if (ub === nB[0]) return [(0, Jb.Qd)({
```

#### 1087. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L15954` → after: `L15954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R15954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L15954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L15954) · [Before (L15954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L15954)

```diff
-         }, Tq.M.whiteUiText)];
+         }, Jb.I.whiteUiText)];
```

#### 1088. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L15957-L15958` → after: `L15957-L15958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R15957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L15957-L15958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L15957-L15958) · [Before (L15957-L15958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L15957-L15958)

```diff
-           Oq = "string" === typeof lq ? lq : lq && "translationKey" in lq ? `$t(${lq.translationKey})` : Yq;
-         return [(0, Tq.Yd)({
+           Gb = "string" === typeof Ob ? Ob : Ob && "translationKey" in Ob ? `$t(${Ob.translationKey})` : Bb;
+         return [(0, Jb.Qd)({
```

#### 1089. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L15963-L15965` → after: `L15963-L15965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R15963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L15963-L15965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L15963-L15965) · [Before (L15963-L15965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L15963-L15965)

```diff
-         }, Tq.M.whiteUiText), (0, Tq.Yd)({
-           translationKey: `item:${(0,Tq.ue)(Eq)}`
-         }, Tq.M.yellowUiText)]
+         }, Jb.I.whiteUiText), (0, Jb.Qd)({
+           translationKey: `item:${(0,Jb.oe)(ub)}`
+         }, Jb.I.yellowUiText)]
```

#### 1090. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16010` → after: `L16010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L16010) · [Before (L16010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L16010)

```diff
-         this.live = qq, this.planAt = Eq, this.tierOf = gq, this.lc = 0, this.missesMaker = !1, this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.afloatByRoot = new Map, this.besideMakerById = new Map, this.Fc = null, this.express = !1, this.crouching = !1, this … [truncated]
+         this.live = bb, this.planAt = ub, this.tierOf = hb, this.bS = 0, this.missesMaker = !1, this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.afloatByRoot = new Map, this.besideMakerById = new Map, this.MS = null, this.express = !1, this.crouching = !1, this … [truncated]
```

#### 1091. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16015` → after: `L16015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L16015) · [Before (L16015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L16015)

```diff
-         const xq = null !== (Yq = null === (lq = qq.Ngq(Eq)) || void 0 === lq ? void 0 : lq.name) && void 0 !== Yq ? Yq : null,
+         const Lb = null !== (Bb = null === (Ob = bb.cub(ub)) || void 0 === Ob ? void 0 : Ob.name) && void 0 !== Bb ? Bb : null,
```

#### 1092. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16027-L16028` → after: `L16027-L16028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16027-L16028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L16027-L16028) · [Before (L16027-L16028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L16027-L16028)

```diff
-           Nq = null === mq ? null : (0, Dd.d)(gq),
-           aq = null !== Nq && null !== mq && (0, Dd.e)(function(qq) {
+           Zb = null === Ub ? null : (0, uA.e)(hb),
+           Xb = null !== Zb && null !== Ub && (0, uA.h)(function(bb) {
```

#### 1093. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16032-L16033` → after: `L16032-L16033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16032-L16033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L16032-L16033) · [Before (L16032-L16033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L16032-L16033)

```diff
-         if (gq === this.lc && aq === this.missesMaker && Vq === this.afloat && xq === this.Fc && Aq === this.crouching && uq === this.express && Wq === this.tier && !Bq && (!this.targetsLive || !this.liveMoved(mq))) return;
-         this.lc = gq, this.missesMaker = aq, this.afloat = Vq, this.Fc = xq, this.crouching = Aq, this.express = uq;
+         if (hb === this.bS && Xb === this.missesMaker && pb === this.afloat && Lb === this.MS && Yb === this.crouching && ab === this.express && wb === this.tier && !Hb && (!this.targetsLive || !this.liveMoved(Ub))) return;
+         this.bS = hb, this.missesMaker = Xb, this.afloat = pb, this.MS = Lb, this.crouching = Yb, this.express = ab;
```

#### 1094. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16038` → after: `L16038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L16038) · [Before (L16038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L16038)

```diff
-             detail: `${cj}lookKeepsUpExpress`,
+             detail: `${HA}lookKeepsUpExpress`,
```

#### 1095. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16041` → after: `L16041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L16041) · [Before (L16041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L16041)

```diff
-         }(cq) : null !== cq && aq && null !== Nq ? this.besideMaker(cq, gq, Nq) : null !== cq && Vq ? this.hanging(cq) : null !== (Oq = null === cq || void 0 === cq ? void 0 : cq.info) && void 0 !== Oq ? Oq : null;
+         }(Sb) : null !== Sb && Xb && null !== Zb ? this.besideMaker(Sb, hb, Zb) : null !== Sb && pb ? this.hanging(Sb) : null !== (Gb = null === Sb || void 0 === Sb ? void 0 : Sb.info) && void 0 !== Gb ? Gb : null;
```

#### 1096. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16047-L16049` → after: `L16047-L16049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16047-L16049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L16047-L16049) · [Before (L16047-L16049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L16047-L16049)

```diff
-           const Oq = null !== (gq = lq.harvestLevel) && void 0 !== gq ? gq : 0,
-             mq = Eq ? Dm.m[Eq] : void 0;
-           if ("rock" === (null === mq || void 0 === mq ? void 0 : mq.harvests) && (null !== (Yq = mq.level) && void 0 !== Yq ? Yq : 0) >= Oq) return null;
+           const Gb = null !== (hb = Ob.harvestLevel) && void 0 !== hb ? hb : 0,
+             Ub = ub ? QU.j[ub] : void 0;
+           if ("rock" === (null === Ub || void 0 === Ub ? void 0 : Ub.harvests) && (null !== (Bb = Ub.level) && void 0 !== Bb ? Bb : 0) >= Gb) return null;
```

#### 1097. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16056-L16057` → after: `L16056-L16057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16056-L16057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L16056-L16057) · [Before (L16056-L16057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L16056-L16057)

```diff
-             key: `${cj}lookToolTooWeak${uq}`,
-             Fc: gO(Eq),
+             key: `${HA}lookToolTooWeak${ab}`,
+             MS: hG(ub),
```

#### 1098. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16061-L16062` → after: `L16061-L16062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16061-L16062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L16061-L16062) · [Before (L16061-L16062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L16061-L16062)

```diff
-             key: xq === vY[0] ? `${cj}lookNeedAnyPickaxe` : `${cj}lookNeedPickaxe${uq}`,
-             Fc: null,
+             key: Lb === nB[0] ? `${HA}lookNeedAnyPickaxe` : `${HA}lookNeedPickaxe${ab}`,
+             MS: null,
```

#### 1099. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16069` → after: `L16069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L16069) · [Before (L16069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L16069)

```diff
-         const oq = null === dq ? mj : function(qq, Eq, gq) {
+         const Kb = null === ob ? YA : function(bb, ub, hb) {
```

#### 1100. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16073` → after: `L16073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L16073) · [Before (L16073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L16073)

```diff
-               const lq = `${Yj}lookPortMode_${Yq}`,
+               const Ob = `${GA}lookPortMode_${Bb}`,
```

#### 1101. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16078` → after: `L16078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L16078) · [Before (L16078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L16078)

```diff
-                 next: `${Yj}lookWrenchPickUp`,
+                 next: `${GA}lookWrenchPickUp`,
```

#### 1102. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16091-L16092` → after: `L16091-L16092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16091-L16092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L16091-L16092) · [Before (L16091-L16092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L16091-L16092)

```diff
-                 next: Oq ? `${Yj}lookWrenchNext` : `${Yj}lookPortWrench`,
-                 nextState: `${Yj}lookPortState_${xq}`
+                 next: Gb ? `${GA}lookWrenchNext` : `${GA}lookPortWrench`,
+                 nextState: `${GA}lookPortState_${Lb}`
```

#### 1103. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16097` → after: `L16097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L16097) · [Before (L16097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L16097)

```diff
-             return null === lq.mode && null === lq.next ? mj : lq
+             return null === Ob.mode && null === Ob.next ? YA : Ob
```

#### 1104. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16102` → after: `L16102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L16102) · [Before (L16102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L16102)

```diff
-         if (!(null === dq ? !yq.visible : yq.visible && dq === yq.info && (tq = jq, rq = yq.tool, tq === rq || null !== tq && null !== rq && tq.key === rq.key && tq.Fc === rq.Fc && tq.needed === rq.needed) && function(qq, Eq) {
+         if (!(null === ob ? !db.visible : db.visible && ob === db.info && (rb = Ab, jb = db.tool, rb === jb || null !== rb && null !== jb && rb.key === jb.key && rb.MS === jb.MS && rb.needed === jb.needed) && function(bb, ub) {
```

#### 1105. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16132` → after: `L16132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L16132) · [Before (L16132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L16132)

```diff
-         this.listeners.clear(), this.byRootId.clear(), this.besideMakerById.clear(), this.missesMaker = !1, this.afloatByRoot.clear(), this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.rowsByKey.clear(), this.snapshot = Aj, this.lc = 0, this.Fc = null, this.expr … [truncated]
+         this.listeners.clear(), this.byRootId.clear(), this.besideMakerById.clear(), this.missesMaker = !1, this.afloatByRoot.clear(), this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.rowsByKey.clear(), this.snapshot = aA, this.bS = 0, this.MS = null, this.expr … [truncated]
```

#### 1106. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16136` → after: `L16136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L16136) · [Before (L16136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L16136)

```diff
-         const Yq = `${gq[0]},${gq[1]},${gq[2]},${Eq}`,
+         const Bb = `${hb[0]},${hb[1]},${hb[2]},${ub}`,
```

#### 1107. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16176` → after: `L16176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L16176) · [Before (L16176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L16176)

```diff
-             detail: `${cj}${qq}`,
+             detail: `${HA}${bb}`,
```

#### 1108. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16191` → after: `L16191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L16191) · [Before (L16191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L16191)

```diff
-           detail: `${cj}lookOreAfloat`,
+           detail: `${HA}lookOreAfloat`,
```

#### 1109. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16197` → after: `L16197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L16197) · [Before (L16197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L16197)

```diff
-         const gq = `${qq}|${Eq}`;
+         const hb = `${bb}|${ub}`;
```

#### 1110. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16203` → after: `L16203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L16203) · [Before (L16203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L16203)

```diff
-             const Yq = null !== (gq = zE[qq]) && void 0 !== gq ? gq : [],
+             const Bb = null !== (hb = eu[bb]) && void 0 !== hb ? hb : [],
```

#### 1111. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16208` → after: `L16208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L16208) · [Before (L16208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L16208)

```diff
-                 const qq = null !== (Oq = lq.get(mq.output)) && void 0 !== Oq ? Oq : [];
+                 const bb = null !== (Gb = Ob.get(Ub.output)) && void 0 !== Gb ? Gb : [];
```

#### 1112. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16221` → after: `L16221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L16221) · [Before (L16221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L16221)

```diff
-           Yq = lq.length > 0 ? lq : xj, this.rowsByKey.set(gq, Yq)
+           Bb = Ob.length > 0 ? Ob : SA, this.rowsByKey.set(hb, Bb)
```

#### 1113. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16229` → after: `L16229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L16229) · [Before (L16229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L16229)

```diff
-         } = qq.getMetaInfo(Eq), lq = (0, ag.g)(Yq) ? Eq : gq;
+         } = bb.getMetaInfo(ub), Ob = (0, Xh.n)(Bb) ? ub : hb;
```

#### 1114. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16255` → after: `L16255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L16255) · [Before (L16255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L16255)

```diff
-       } = (0, hl.v)(), [mq, xq] = (0, Yq.useState)((() => lq.get()));
+       } = (0, DO.K)(), [Ub, Lb] = (0, Bb.useState)((() => Ob.get()));
```

#### 1115. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16301` → after: `L16301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L16301) · [Before (L16301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L16301)

```diff
-             Fc: null === Wq.Fc ? "" : Oq(Wq.Fc)
+             MS: null === wb.MS ? "" : Gb(wb.MS)
```

#### 1116. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16317-L16318` → after: `L16317-L16318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16317-L16318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L16317-L16318) · [Before (L16317-L16318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L16317-L16318)

```diff
-               const Yq = gq.length > 1 ? ` ${Oq("buildAFactory2Game:recipeMore",{count:String(gq.length-1)})}` : "";
-               return `${Oq(gO(gq[0]))}${Yq} \u2192 ${Oq(gO(Eq))}`
+               const Bb = hb.length > 1 ? ` ${Gb("buildAFactory2Game:recipeMore",{count:String(hb.length-1)})}` : "";
+               return `${Gb(hG(hb[0]))}${Bb} \u2192 ${Gb(hG(ub))}`
```

#### 1117. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16330` → after: `L16330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L16330) · [Before (L16330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L16330)

```diff
-     var Vj = gq(38486);
+     var AA = hb(38142);
```

#### 1118. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16338` → after: `L16338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L16338) · [Before (L16338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L16338)

```diff
-       for (let gq = 1; gq <= 4; gq++) gq > 1 && Eq.push(`${qq}|meta|rot${gq}`), Eq.push(`${qq}|meta|rot${gq}|Running`);
+       for (let hb = 1; hb <= 4; hb++) hb > 1 && ub.push(`${bb}|meta|rot${hb}`), ub.push(`${bb}|meta|rot${hb}|Running`);
```

#### 1119. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16347` → after: `L16347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L16347) · [Before (L16347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L16347)

```diff
-       return `${qq},${Eq},${gq}`
+       return `${bb},${ub},${hb}`
```

#### 1120. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16388` → after: `L16388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L16388) · [Before (L16388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L16388)

```diff
-         const Yq = ua.c.Oa,
+         const Bb = aX.e.bX,
```

#### 1121. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16446` → after: `L16446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L16446) · [Before (L16446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L16446)

```diff
-         const mq = ua.c.Oa,
+         const Ub = aX.e.bX,
```

#### 1122. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16493` → after: `L16493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L16493) · [Before (L16493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L16493)

```diff
-                   uq = `${Oq},${Aq},${cq}`;
+                   ab = `${Gb},${Yb},${Sb}`;
```

#### 1123. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16505` → after: `L16505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L16505) · [Before (L16505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L16505)

```diff
-         for (const [mq, xq, Aq] of Eq)(0, Vj.d)(lq, Oq, [mq - Yq[0] + .5, xq - Yq[1] + .5, Aq - Yq[2] + .5], yj, gq);
+         for (const [Ub, Lb, Yb] of ub)(0, AA.b)(Ob, Gb, [Ub - Bb[0] + .5, Lb - Bb[1] + .5, Yb - Bb[2] + .5], jA, hb);
```

#### 1124. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16510` → after: `L16510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L16510) · [Before (L16510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L16510)

```diff
-           rgb: gq ? rj : tj,
+           rgb: hb ? DA : nA,
```

#### 1125. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16577` → after: `L16577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L16577) · [Before (L16577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L16577)

```diff
-         const Aq = Oq > this.budget ? this.budget / Oq : 1;
+         const Yb = Gb > this.budget ? this.budget / Gb : 1;
```

#### 1126. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16591` → after: `L16591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L16591) · [Before (L16591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L16591)

```diff
-             xq = 0 === Eq && mq > 0 ? Math.min(.5, .1 * mq) / mq : 0;
+             Lb = 0 === ub && Ub > 0 ? Math.min(.5, .1 * Ub) / Ub : 0;
```

#### 1127. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16606` → after: `L16606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L16606) · [Before (L16606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L16606)

```diff
-             WB: 400,
+             LH: 400,
```

#### 1128. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16623` → after: `L16623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L16623) · [Before (L16623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L16623)

```diff
-             blendMode: zx.h.Add
+             blendMode: JL.f.Add
```

#### 1129. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16675` → after: `L16675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L16675) · [Before (L16675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L16675)

```diff
-         WB: Math.ceil(48),
+         LH: Math.ceil(48),
```

#### 1130. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16695` → after: `L16695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L16695) · [Before (L16695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L16695)

```diff
-         blendMode: zx.h.OneOne
+         blendMode: JL.f.OneOne
```

#### 1131. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16707` → after: `L16707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L16707) · [Before (L16707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L16707)

```diff
-         for (const [lq, Oq] of this.flames)(lq === Eq ? Yq : this.lit.has(lq)) || this.setEmitting(Oq, !1), lq === Eq || qq.getPositionView(lq) ? !Oq.emitting && gq - Oq.offAt >= 1300 && (Oq.particles.stop(), this.flames.delete(lq)) : (Oq.particles.dispose(), this.flames.delete(l … [truncated]
+         for (const [Ob, Gb] of this.flames)(Ob === ub ? Bb : this.lit.has(Ob)) || this.setEmitting(Gb, !1), Ob === ub || bb.getPositionView(Ob) ? !Gb.emitting && hb - Gb.offAt >= 1300 && (Gb.particles.stop(), this.flames.delete(Ob)) : (Gb.particles.dispose(), this.flames.delete(O … [truncated]
```

#### 1132. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16719` → after: `L16719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L16719) · [Before (L16719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L16719)

```diff
-           option: null !== (gq = qq.getClientOption(Eq, "jumpHoldThrust")) && void 0 !== gq ? gq : null,
+           option: null !== (hb = bb.getClientOption(ub, "jumpHoldThrust")) && void 0 !== hb ? hb : null,
```

#### 1133. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16735-L16736` → after: `L16735-L16736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16735-L16736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L16735-L16736) · [Before (L16735-L16736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L16735-L16736)

```diff
-         const xq = null !== (Yq = this.flames.get(gq)) && void 0 !== Yq ? Yq : this.create(qq, gq, Oq),
-           Aq = null !== (lq = qq.getDrawnHeading(gq)) && void 0 !== lq ? lq : 0,
+         const Lb = null !== (Bb = this.flames.get(hb)) && void 0 !== Bb ? Bb : this.create(bb, hb, Gb),
+           Yb = null !== (Ob = bb.getDrawnHeading(hb)) && void 0 !== Ob ? Ob : 0,
```

#### 1134. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16809` → after: `L16809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L16809) · [Before (L16809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L16809)

```diff
-         this.arrows = document.getElementsByClassName("DirectionArrow"), this.trackers = document.getElementsByClassName("Baf2QuestTracker"), this.statBars = document.getElementsByClassName("BottomScreenStatBarList"), this.toasts = document.getElementsByClassName("Baf2Toast"), th … [truncated]
+         this.arrows = document.getElementsByClassName("DirectionArrow"), this.trackers = document.getElementsByClassName("Baf2QuestTracker"), this.statBars = document.getElementsByClassName("BottomScreenStatBarList"), this.toasts = document.getElementsByClassName("Baf2Toast"), th … [truncated]
```

#### 1135. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16811` → after: `L16811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L16811) · [Before (L16811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L16811)

```diff
-         }, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.EQ = () => {
+         }, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.lK = () => {
```

#### 1136. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16816-L16817` → after: `L16816-L16817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16816-L16817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L16816-L16817) · [Before (L16816-L16817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L16816-L16817)

```diff
-           this.queued = !1, this.eN || this.clear()
-         }, window.addEventListener("resize", this.EQ)
+           this.queued = !1, this.FZ || this.clear()
+         }, window.addEventListener("resize", this.lK)
```

#### 1137. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16821` → after: `L16821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L16821) · [Before (L16821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L16821)

```diff
-         this.api = qq, this.project = null !== (gq = null === Eq || void 0 === Eq ? void 0 : Eq.projectWorldPosToScreenPos) && void 0 !== gq ? gq : null, this.queued || this.eN || (this.queued = !0, queueMicrotask(this.run))
+         this.api = bb, this.project = null !== (hb = null === ub || void 0 === ub ? void 0 : ub.projectWorldPosToScreenPos) && void 0 !== hb ? hb : null, this.queued || this.FZ || (this.queued = !0, queueMicrotask(this.run))
```

#### 1138. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16824` → after: `L16824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L16824) · [Before (L16824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L16824)

```diff
-         this.eN = !0;
+         this.FZ = !0;
```

#### 1139. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16828` → after: `L16828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L16828) · [Before (L16828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L16828)

```diff
-         this.sideLabels.clear(), this.side.dispose(), this.watch(null), this.sizes.disconnect(), window.removeEventListener("resize", this.EQ)
+         this.sideLabels.clear(), this.side.dispose(), this.watch(null), this.sizes.disconnect(), window.removeEventListener("resize", this.lK)
```

#### 1140. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16848` → after: `L16848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L16848) · [Before (L16848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L16848)

```diff
-             const qq = 0 === xq ? `translateX(${mq}px)` : `translate(${mq}px, ${xq}px)`;
+             const bb = 0 === Lb ? `translateX(${Ub}px)` : `translate(${Ub}px, ${Lb}px)`;
```

#### 1141. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16855` → after: `L16855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L16855) · [Before (L16855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L16855)

```diff
-         const gq = null !== (qq = this.tracker) && void 0 !== qq && qq.isConnected ? this.tracker : null !== (Eq = this.trackers[0]) && void 0 !== Eq ? Eq : null;
+         const hb = null !== (bb = this.tracker) && void 0 !== bb && bb.isConnected ? this.tracker : null !== (ub = this.trackers[0]) && void 0 !== ub ? ub : null;
```

#### 1142. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16861-L16862` → after: `L16861-L16862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16861-L16862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L16861-L16862) · [Before (L16861-L16862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L16861-L16862)

```diff
-             mq = qq && Eq ? Math.max(qq.top, Eq.top) : null !== (lq = null === qq || void 0 === qq ? void 0 : qq.top) && void 0 !== lq ? lq : 0,
-             xq = qq && Eq ? Math.min(qq.bottom, Eq.bottom) : null !== (Oq = null === qq || void 0 === qq ? void 0 : qq.bottom) && void 0 !== Oq ? Oq : 0;
+             Ub = bb && ub ? Math.max(bb.top, ub.top) : null !== (Ob = null === bb || void 0 === bb ? void 0 : bb.top) && void 0 !== Ob ? Ob : 0,
+             Lb = bb && ub ? Math.min(bb.bottom, ub.bottom) : null !== (Gb = null === bb || void 0 === bb ? void 0 : bb.bottom) && void 0 !== Gb ? Gb : 0;
```

#### 1143. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16888` → after: `L16888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L16888) · [Before (L16888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L16888)

```diff
-         const gq = null !== (Eq = this.toasts[0]) && void 0 !== Eq ? Eq : null;
+         const hb = null !== (ub = this.toasts[0]) && void 0 !== ub ? ub : null;
```

#### 1144. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16905` → after: `L16905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L16905) · [Before (L16905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L16905)

```diff
-         const Oq = lq.x + gq + (null !== (Yq = this.labelOffsets.get(qq)) && void 0 !== Yq ? Yq : 0),
+         const Gb = Ob.x + hb + (null !== (Bb = this.labelOffsets.get(bb)) && void 0 !== Bb ? Bb : 0),
```

#### 1145. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16915` → after: `L16915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L16915) · [Before (L16915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L16915)

```diff
-         this.tracker && this.sizes.unobserve(this.tracker), null === (Eq = this.hud) || void 0 === Eq || Eq.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.tracker = qq, this.hud = null !== (gq = null === qq || void 0 === qq ? void 0 : qq.closest(". … [truncated]
+         this.tracker && this.sizes.unobserve(this.tracker), null === (ub = this.hud) || void 0 === ub || ub.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.tracker = bb, this.hud = null !== (hb = null === bb || void 0 === bb ? void 0 : bb.closest(". … [truncated]
```

#### 1146. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16928` → after: `L16928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L16928) · [Before (L16928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L16928)

```diff
-         } = Yq, Oq = Yq.x + (null !== (gq = this.labelOffsets.get(qq)) && void 0 !== gq ? gq : 0), mq = this.em, {
+         } = Bb, Gb = Bb.x + (null !== (hb = this.labelOffsets.get(bb)) && void 0 !== hb ? hb : 0), Ub = this.em, {
```

#### 1147. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16940-L16941` → after: `L16940-L16941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R16940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L16940-L16941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/237.js#L16940-L16941) · [Before (L16940-L16941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/237.js#L16940-L16941)

```diff
-         } = this.extentOf(qq), lq = gq.x + (null !== (Eq = this.labelOffsets.get(qq)) && void 0 !== Eq ? Eq : 0), Oq = lq + Yq - (this.innerWidth - 6);
-         return Oq > 0 ? -Oq : Math.max(0, 6 - (lq - Yq))
+         } = this.extentOf(bb), Ob = hb.x + (null !== (ub = this.labelOffsets.get(bb)) && void 0 !== ub ? ub : 0), Gb = Ob + Bb - (this.innerWidth - 6);
+         return Gb > 0 ? -Gb : Math.max(0, 6 - (Ob - Bb))
```
