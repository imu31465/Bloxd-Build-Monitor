# Changed — Bundle Modifications Report (Part 127 / 154)

- **Updated at**: `2026-11-28T21:24 JST`
- **Part**: `127 / 154` (**448** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 126](part-126.md) · [Part 128 →](part-128.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/errorLogging.js` (yteou.5361c997 → welxxc.ffac0572 · continued)

- **File**: `bundles/bloxd.io/chunks/js/errorLogging.js` (106 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50)

#### 62. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3323-L3326` → after: `L3323-L3326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3323-L3326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/errorLogging.js#L3323-L3326) · [Before (L3323-L3326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/errorLogging.js#L3323-L3326)

```diff
-             maxAttempts: null !== (Xd = null === (Kd = dd.retry) || void 0 === Kd ? void 0 : Kd.maxAttempts) && void 0 !== Xd ? Xd : 3,
-             initialBackoffMs: null !== (hd = null !== (vd = null === (Qd = dd.retry) || void 0 === Qd ? void 0 : Qd.initialBackoffMs) && void 0 !== vd ? vd : dd.defaultRateLimitBackoffMs) && void 0 !== hd ? hd : 1e3,
-             maxBackoffMs: null !== (td = null === (od = dd.retry) || void 0 === od ? void 0 : od.maxBackoffMs) && void 0 !== td ? td : 3e4,
-             backoffMultiplier: null !== (Nd = null === (qd = dd.retry) || void 0 === qd ? void 0 : qd.backoffMultiplier) && void 0 !== Nd ? Nd : 2
+             maxAttempts: null !== (Vb = null === (gb = bb.retry) || void 0 === gb ? void 0 : gb.maxAttempts) && void 0 !== Vb ? Vb : 3,
+             initialBackoffMs: null !== (lb = null !== (Lb = null === (Ib = bb.retry) || void 0 === Ib ? void 0 : Ib.initialBackoffMs) && void 0 !== Lb ? Lb : bb.defaultRateLimitBackoffMs) && void 0 !== lb ? lb : 1e3,
+             maxBackoffMs: null !== (Ob = null === (Ub = bb.retry) || void 0 === Ub ? void 0 : Ub.maxBackoffMs) && void 0 !== Ob ? Ob : 3e4,
+             backoffMultiplier: null !== (tb = null === (Cb = bb.retry) || void 0 === Cb ? void 0 : Cb.backoffMultiplier) && void 0 !== tb ? tb : 2
```

#### 63. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3329` → after: `L3329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/errorLogging.js#L3329) · [Before (L3329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/errorLogging.js#L3329)

```diff
-           getRandom: null !== (Hd = dd.getRandom) && void 0 !== Hd ? Hd : Math.random,
+           getRandom: null !== (Eb = bb.getRandom) && void 0 !== Eb ? Eb : Math.random,
```

#### 64. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3331` → after: `L3331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/errorLogging.js#L3331) · [Before (L3331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/errorLogging.js#L3331)

```diff
-             this.logDebug(`Retrying failed request after ${dd}ms. Attempt ${Od}.`)
+             this.logDebug(`Retrying failed request after ${bb}ms. Attempt ${wb}.`)
```

#### 65. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3334-L3335` → after: `L3334-L3335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3334-L3335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/errorLogging.js#L3334-L3335) · [Before (L3334-L3335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/errorLogging.js#L3334-L3335)

```diff
-           size: null !== (yd = dd.bufferSize) && void 0 !== yd ? yd : 30,
-           concurrency: null !== (bd = dd.concurrency) && void 0 !== bd ? bd : 5
+           size: null !== (Fb = bb.bufferSize) && void 0 !== Fb ? Fb : 30,
+           concurrency: null !== (Bb = bb.concurrency) && void 0 !== Bb ? Bb : 5
```

#### 66. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3410` → after: `L3410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/errorLogging.js#L3410) · [Before (L3410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/errorLogging.js#L3410)

```diff
-         return [this.options.url].concat(null !== (dd = this.config.ignoreUrls) && void 0 !== dd ? dd : [])
+         return [this.options.url].concat(null !== (bb = this.config.ignoreUrls) && void 0 !== bb ? bb : [])
```

#### 67. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3422` → after: `L3422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/errorLogging.js#L3422) · [Before (L3422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/errorLogging.js#L3422)

```diff
-             Kd = null !== (Wd = Od.options.requestOptions) && void 0 !== Wd ? Wd : {},
+             gb = null !== (eb = wb.options.requestOptions) && void 0 !== eb ? eb : {},
```

#### 68. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3566` → after: `L3566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/errorLogging.js#L3566) · [Before (L3566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/errorLogging.js#L3566)

```diff
-           return Number.isFinite(dd) ? dd : Number.POSITIVE_INFINITY
+           return Number.isFinite(bb) ? bb : Number.POSITIVE_INFINITY
```

#### 69. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3623` → after: `L3623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/errorLogging.js#L3623) · [Before (L3623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/errorLogging.js#L3623)

```diff
-               day: Number(null !== vd && void 0 !== vd ? vd : Qd),
+               day: Number(null !== Lb && void 0 !== Lb ? Lb : Ib),
```

#### 70. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3722` → after: `L3722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/errorLogging.js#L3722) · [Before (L3722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/errorLogging.js#L3722)

```diff
-         dd.error(`${md.prefix}\n`, ...Wd)
+         bb.error(`${Mb.prefix}\n`, ...eb)
```

#### 71. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3725` → after: `L3725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/errorLogging.js#L3725) · [Before (L3725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/errorLogging.js#L3725)

```diff
-         dd.warn(`${md.prefix}\n`, ...Wd)
+         bb.warn(`${Mb.prefix}\n`, ...eb)
```

#### 72. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3728` → after: `L3728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/errorLogging.js#L3728) · [Before (L3728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/errorLogging.js#L3728)

```diff
-         dd.info(`${md.prefix}\n`, ...Wd)
+         bb.info(`${Mb.prefix}\n`, ...eb)
```

#### 73. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3731` → after: `L3731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/errorLogging.js#L3731) · [Before (L3731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/errorLogging.js#L3731)

```diff
-         dd.debug(`${md.prefix}\n`, ...Wd)
+         bb.debug(`${Mb.prefix}\n`, ...eb)
```

#### 74. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3766` → after: `L3766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/errorLogging.js#L3766) · [Before (L3766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/errorLogging.js#L3766)

```diff
-         dataAttributeName: dF(null !== (md = null === (Fd = dd.userActionsInstrumentation) || void 0 === Fd ? void 0 : Fd.dataAttributeName) && void 0 !== md ? md : kW),
+         dataAttributeName: Te(null !== (Mb = null === (Hb = bb.userActionsInstrumentation) || void 0 === Hb ? void 0 : Hb.dataAttributeName) && void 0 !== Mb ? Mb : ne),
```

#### 75. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3785` → after: `L3785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/errorLogging.js#L3785) · [Before (L3785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/errorLogging.js#L3785)

```diff
-         ignoreUrls: [...null !== (Kd = dd.ignoreUrls) && void 0 !== Kd ? Kd : [], ...wd ? [wd] : [], /\/collect(?:\/[\w]*)?$/],
+         ignoreUrls: [...null !== (gb = bb.ignoreUrls) && void 0 !== gb ? gb : [], ...Xb ? [Xb] : [], /\/collect(?:\/[\w]*)?$/],
```

#### 76. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3811` → after: `L3811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/errorLogging.js#L3811) · [Before (L3811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/errorLogging.js#L3811)

```diff
-       } = null !== (Od = null === dd || void 0 === dd ? void 0 : dd.pageTracking) && void 0 !== Od ? Od : {}, Xd = [ZF, kF, xR({
+       } = null !== (wb = null === bb || void 0 === bb ? void 0 : bb.pageTracking) && void 0 !== wb ? wb : {}, Vb = [PH, nH, Kp({
```

#### 77. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3814` → after: `L3814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/errorLogging.js#L3814) · [Before (L3814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/errorLogging.js#L3814)

```diff
-       }), ...null !== (md = dd.metas) && void 0 !== md ? md : [], MF];
+       }), ...null !== (Mb = bb.metas) && void 0 !== Mb ? Mb : [], oH];
```

#### 78. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3826` → after: `L3826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/errorLogging.js#L3826) · [Before (L3826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/errorLogging.js#L3826)

```diff
-         session: oO(oO({}, null !== (Wd = null === md || void 0 === md ? void 0 : md.session) && void 0 !== Wd ? Wd : {}), {}, {
+         session: Iw(Iw({}, null !== (eb = null === Mb || void 0 === Mb ? void 0 : Mb.session) && void 0 !== eb ? eb : {}), {}, {
```

#### 79. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3844` → after: `L3844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/errorLogging.js#L3844) · [Before (L3844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/errorLogging.js#L3844)

```diff
-       const Od = `__faroBundleId_${dd}`,
+       const wb = `__faroBundleId_${bb}`,
```

#### 80. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3848` → after: `L3848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/errorLogging.js#L3848) · [Before (L3848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/errorLogging.js#L3848)

```diff
-       return "string" === typeof Wd && "" !== Wd ? Wd : void 0
+       return "string" === typeof eb && "" !== eb ? eb : void 0
```

#### 81. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3855` → after: `L3855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/errorLogging.js#L3855) · [Before (L3855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/errorLogging.js#L3855)

```diff
-           return null === Qd || void 0 === Qd ? void 0 : Qd[`__faroGitHash_${dd}`]
+           return null === Ib || void 0 === Ib ? void 0 : Ib[`__faroGitHash_${bb}`]
```

#### 82. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3869` → after: `L3869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/errorLogging.js#L3869) · [Before (L3869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/errorLogging.js#L3869)

```diff
-       Xd && dd.api.setSession(Xd), dd.config.app && (Rd.app = dm(dm({}, dd.config.app), Rd.app)), dd.config.user && (Rd.user = dd.config.user), dd.config.view && (Rd.view = dd.config.view), dd.metas.add(Rd, ...null !== (md = dd.config.metas) && void 0 !== md ? md : [])
+       Vb && bb.api.setSession(Vb), bb.config.app && (pb.app = kw(kw({}, bb.config.app), pb.app)), bb.config.user && (pb.user = bb.config.user), bb.config.view && (pb.view = bb.config.view), bb.metas.add(pb, ...null !== (Mb = bb.config.metas) && void 0 !== Mb ? Mb : [])
```

#### 83. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3874` → after: `L3874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/errorLogging.js#L3874) · [Before (L3874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/errorLogging.js#L3874)

```diff
-         this.signalBuffer = [], this.itemLimit = null !== (md = null === Od || void 0 === Od ? void 0 : Od.itemLimit) && void 0 !== md ? md : 50, this.sendTimeout = null !== (Wd = null === Od || void 0 === Od ? void 0 : Od.sendTimeout) && void 0 !== Wd ? Wd : 250, this.paused = ( … [truncated]
+         this.signalBuffer = [], this.itemLimit = null !== (Mb = null === wb || void 0 === wb ? void 0 : wb.itemLimit) && void 0 !== Mb ? Mb : 50, this.sendTimeout = null !== (eb = null === wb || void 0 === wb ? void 0 : wb.sendTimeout) && void 0 !== eb ? eb : 250, this.paused = ( … [truncated]
```

#### 84. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3928` → after: `L3928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/errorLogging.js#L3928) · [Before (L3928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/errorLogging.js#L3928)

```diff
-           for (const Wd of Rd) Od.debug(`Transporting item using ${Wd.name}\n`, md), Wd.isBatched() && Wd.send(md)
+           for (const eb of pb) wb.debug(`Transporting item using ${eb.name}\n`, Mb), eb.isBatched() && eb.send(Mb)
```

#### 85. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3939` → after: `L3939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/errorLogging.js#L3939) · [Before (L3939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/errorLogging.js#L3939)

```diff
-             Od.debug(`Adding "${Fd.name}" transport`), Rd.some((dd => dd === Fd)) ? Od.warn(`Transport ${Fd.name} is already added`) : (Fd.unpatchedConsole = dd, Fd.internalLogger = Od, Fd.config = md, Fd.metas = Wd, Rd.push(Fd))
+             wb.debug(`Adding "${Hb.name}" transport`), pb.some((bb => bb === Hb)) ? wb.warn(`Transport ${Hb.name} is already added`) : (Hb.unpatchedConsole = bb, Hb.internalLogger = wb, Hb.config = Mb, Hb.metas = eb, pb.push(Hb))
```

#### 86. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3971` → after: `L3971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/errorLogging.js#L3971) · [Before (L3971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/errorLogging.js#L3971)

```diff
-                   Od.debug(`Transporting item using ${Kd.name}\n`, Fd), Kd.isBatched() ? (null === (Xd = md.batching) || void 0 === Xd ? void 0 : Xd.enabled) || Kd.send([Fd]) : Kd.send(Fd)
+                   wb.debug(`Transporting item using ${gb.name}\n`, Hb), gb.isBatched() ? (null === (Vb = Mb.batching) || void 0 === Vb ? void 0 : Vb.enabled) || gb.send([Hb]) : gb.send(Hb)
```

#### 87. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3984-L3985` → after: `L3984-L3985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3984-L3985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/errorLogging.js#L3984-L3985) · [Before (L3984-L3985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/errorLogging.js#L3984-L3985)

```diff
-             Od.debug(`Removing "${dd.name}" transport`);
-             const md = Rd.indexOf(dd); - 1 !== md ? Rd.splice(md, 1) : Od.warn(`Transport "${dd.name}" is not added`)
+             wb.debug(`Removing "${bb.name}" transport`);
+             const Mb = pb.indexOf(bb); - 1 !== Mb ? pb.splice(Mb, 1) : wb.warn(`Transport "${bb.name}" is not added`)
```

#### 88. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4010` → after: `L4010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/errorLogging.js#L4010) · [Before (L4010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/errorLogging.js#L4010)

```diff
-       return eR = null !== (Od = dd.unpatchedConsole) && void 0 !== Od ? Od : eR, eR
+       return ap = null !== (wb = bb.unpatchedConsole) && void 0 !== wb ? wb : ap, ap
```

#### 89. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4030` → after: `L4030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/errorLogging.js#L4030) · [Before (L4030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/errorLogging.js#L4030)

```diff
-       lR = null !== (Kd = md.parseStacktrace) && void 0 !== Kd ? Kd : lR;
+       dp = null !== (gb = Mb.parseStacktrace) && void 0 !== gb ? gb : dp;
```

#### 90. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4032` → after: `L4032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/errorLogging.js#L4032) · [Before (L4032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/errorLogging.js#L4032)

```diff
-           Od.debug("Changing stacktrace parser"), lR = null !== dd && void 0 !== dd ? dd : lR
+           wb.debug("Changing stacktrace parser"), dp = null !== bb && void 0 !== bb ? bb : dp
```

#### 91. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4061` → after: `L4061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/errorLogging.js#L4061) · [Before (L4061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/errorLogging.js#L4061)

```diff
-             }(Qd, null !== yd && void 0 !== yd ? yd : dd)) try {
+             }(Ib, null !== Fb && void 0 !== Fb ? Fb : bb)) try {
```

#### 92. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4070` → after: `L4070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/errorLogging.js#L4070) · [Before (L4070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/errorLogging.js#L4070)

```diff
-               }(null !== yd && void 0 !== yd ? yd : dd)), null !== Nd && void 0 !== Nd ? Nd : {})),
+               }(null !== Fb && void 0 !== Fb ? Fb : bb)), null !== tb && void 0 !== tb ? tb : {})),
```

#### 93. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4088` → after: `L4088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/errorLogging.js#L4088) · [Before (L4088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/errorLogging.js#L4088)

```diff
-             vd = null !== (pd = vd) && void 0 !== pd ? pd : dd.stack ? null === lR || void 0 === lR ? void 0 : lR(dd).frames : void 0, (null === vd || void 0 === vd ? void 0 : vd.length) && (wd.stacktrace = {
+             Lb = null !== (mb = Lb) && void 0 !== mb ? mb : bb.stack ? null === dp || void 0 === dp ? void 0 : dp(bb).frames : void 0, (null === Lb || void 0 === Lb ? void 0 : Lb.length) && (Xb.stacktrace = {
```

#### 94. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4232` → after: `L4232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/errorLogging.js#L4232) · [Before (L4232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/errorLogging.js#L4232)

```diff
-                     domain: null !== vd && void 0 !== vd ? vd : md.eventDomain,
+                     domain: null !== Lb && void 0 !== Lb ? Lb : Mb.eventDomain,
```

#### 95. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4314` → after: `L4314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/errorLogging.js#L4314) · [Before (L4314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/errorLogging.js#L4314)

```diff
-             const md = wd(dd) ? dm(dm({}, null !== (Od = null === Fd || void 0 === Fd ? void 0 : Fd.page) && void 0 !== Od ? Od : td()), {}, {
+             const Mb = Xb(bb) ? kw(kw({}, null !== (wb = null === Hb || void 0 === Hb ? void 0 : Hb.page) && void 0 !== wb ? wb : Ob()), {}, {
```

#### 96. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4335` → after: `L4335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/errorLogging.js#L4335) · [Before (L4335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/errorLogging.js#L4335)

```diff
-         const vd = null !== (Kd = md.logArgsSerializer) && void 0 !== Kd ? Kd : im;
+         const Lb = null !== (gb = Mb.logArgsSerializer) && void 0 !== gb ? gb : ZM;
```

#### 97. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4350` → after: `L4350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/errorLogging.js#L4350) · [Before (L4350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/errorLogging.js#L4350)

```diff
-                   level: null !== Qd && void 0 !== Qd ? Qd : "log",
+                   level: null !== Ib && void 0 !== Ib ? Ib : "log",
```

#### 98. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4469` → after: `L4469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/errorLogging.js#L4469) · [Before (L4469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/errorLogging.js#L4469)

```diff
-                 Fd = null !== (Od = md) && void 0 !== Od ? Od : Rd;
+                 Hb = null !== (wb = Mb) && void 0 !== wb ? wb : pb;
```

#### 99. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4503` → after: `L4503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/errorLogging.js#L4503) · [Before (L4503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/errorLogging.js#L4503)

```diff
-                 Od.debug(`Adding "${Kd.name}" instrumentation`), Xd.some((dd => dd.name === Kd.name)) ? Od.warn(`Instrumentation ${Kd.name} is already added`) : (Kd.unpatchedConsole = dd, Kd.internalLogger = Od, Kd.config = md, Kd.metas = Wd, Kd.transports = Fd, Kd.api = Rd, Xd.p … [truncated]
+                 wb.debug(`Adding "${gb.name}" instrumentation`), Vb.some((bb => bb.name === gb.name)) ? wb.warn(`Instrumentation ${gb.name} is already added`) : (gb.unpatchedConsole = bb, gb.internalLogger = wb, gb.config = Mb, gb.metas = eb, gb.transports = Hb, gb.api = pb, Vb.p … [truncated]
```

#### 100. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4514-L4516` → after: `L4514-L4516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4514-L4516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/errorLogging.js#L4514-L4516) · [Before (L4514-L4516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/errorLogging.js#L4514-L4516)

```diff
-                 Od.debug(`Removing "${dd.name}" instrumentation`);
-                 const Fd = Xd.reduce(((Od, md, Wd) => null === Od && md.name === dd.name ? Wd : null), null);
-                 null !== Fd ? (null === (md = (Wd = Xd[Fd]).destroy) || void 0 === md || md.call(Wd), Xd.splice(Fd, 1)) : Od.warn(`Instrumentation "${dd.name}" is not added`)
+                 wb.debug(`Removing "${bb.name}" instrumentation`);
+                 const Hb = Vb.reduce(((wb, Mb, eb) => null === wb && Mb.name === bb.name ? eb : null), null);
+                 null !== Hb ? (null === (Mb = (eb = Vb[Hb]).destroy) || void 0 === Mb || Mb.call(eb), Vb.splice(Hb, 1)) : wb.warn(`Instrumentation "${bb.name}" is not added`)
```

#### 101. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4536` → after: `L4536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/errorLogging.js#L4536) · [Before (L4536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/errorLogging.js#L4536)

```diff
-   7629: function(dd, Od, md) {
+   7884: function(bb, wb, Mb) {
```

#### 102. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4593` → after: `L4593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/errorLogging.js#L4593) · [Before (L4593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/errorLogging.js#L4593)

```diff
-           if (typeof dd === vd) return dd = dd.replace(/^\s\s*/, ""), typeof Od === Kd ? dd : dd.substring(0, 500)
+           if (typeof bb === Lb) return bb = bb.replace(/^\s\s*/, ""), typeof wb === gb ? bb : bb.substring(0, 500)
```

#### 103. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4601` → after: `L4601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/errorLogging.js#L4601) · [Before (L4601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/errorLogging.js#L4601)

```diff
-                 for (Fd = 0; Fd < Nd.length; Fd++) Qd = vd[++Wd], typeof(Kd = Nd[Fd]) === hd && Kd.length > 0 ? 2 === Kd.length ? typeof Kd[1] == Xd ? this[Kd[0]] = Kd[1].call(this, Qd) : this[Kd[0]] = Kd[1] : 3 === Kd.length ? typeof Kd[1] !== Xd || Kd[1].exec && Kd[1].test ? th … [truncated]
+                 for (Hb = 0; Hb < tb.length; Hb++) Ib = Lb[++eb], typeof(gb = tb[Hb]) === lb && gb.length > 0 ? 2 === gb.length ? typeof gb[1] == Vb ? this[gb[0]] = gb[1].call(this, Ib) : this[gb[0]] = gb[1] : 3 === gb.length ? typeof gb[1] !== Vb || gb[1].exec && gb[1].test ? th … [truncated]
```

#### 104. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4609-L4610` → after: `L4609-L4610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4609-L4610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/errorLogging.js#L4609-L4610) · [Before (L4609-L4610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/errorLogging.js#L4609-L4610)

```diff
-                 if (dO(Od[md][Wd], dd)) return "?" === md ? Rd : md
-             } else if (dO(Od[md], dd)) return "?" === md ? Rd : md;
+                 if (Tb(wb[Mb][eb], bb)) return "?" === Mb ? pb : Mb
+             } else if (Tb(wb[Mb], bb)) return "?" === Mb ? pb : Mb;
```

#### 105. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L5339` → after: `L5339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R5339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L5339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/errorLogging.js#L5339) · [Before (L5339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/errorLogging.js#L5339)

```diff
-           }, this.Iq = function() {
+           }, this.DC = function() {
```

#### 106. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L5349` → after: `L5349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R5349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L5349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/errorLogging.js#L5349) · [Before (L5349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/errorLogging.js#L5349)

```diff
-               engine: this.Iq(),
+               engine: this.DC(),
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/fa-renderer.js` (yteou.5361c997 → welxxc.ffac0572)

- **File**: `bundles/bloxd.io/chunks/js/fa-renderer.js` (36 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741)

#### 1. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/fa-renderer.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/fa-renderer.js#L1)

```diff
- /*! For license information please see yteou.fa-renderer.30a53f56.chunk.js.LICENSE.txt */
+ /*! For license information please see welxxc.fa-renderer.5c0bc7f4.chunk.js.LICENSE.txt */
```

#### 2. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L5` → after: `L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/fa-renderer.js#L5) · [Before (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/fa-renderer.js#L5)

```diff
-   7706: (dd, Od, md) => {
+   7960: (bb, wb, Mb) => {
```

#### 3. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L9-L10` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/fa-renderer.js#L9-L10) · [Before (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/fa-renderer.js#L9-L10)

```diff
-     var Wd = md(7699),
-       Fd = md(5864),
+     var eb = Mb(7955),
+       Hb = Mb(6022),
```

#### 4. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L12` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/fa-renderer.js#L12) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/fa-renderer.js#L12)

```diff
-       Xd = md(66);
+       Vb = Mb(64);
```

#### 5. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/fa-renderer.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/fa-renderer.js#L32)

```diff
-         return "symbol" == typeof Od ? Od : Od + ""
+         return "symbol" == typeof wb ? wb : wb + ""
```

#### 6. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L122` → after: `L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/fa-renderer.js#L122) · [Before (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/fa-renderer.js#L122)

```diff
-       var yd = md(7708);
+       var Fb = Mb(7962);
```

#### 7. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L193` → after: `L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/fa-renderer.js#L193) · [Before (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/fa-renderer.js#L193)

```diff
-         return xd[dd] ? dd : null
+         return rb[bb] ? bb : null
```

#### 8. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L200` → after: `L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/fa-renderer.js#L200) · [Before (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/fa-renderer.js#L200)

```diff
-       return Od = dd, (Od -= 0) === Od ? dd : (dd = dd.replace(/[\-_\s]+(.)?/g, (function(dd, Od) {
+       return wb = bb, (wb -= 0) === wb ? bb : (bb = bb.replace(/[\-_\s]+(.)?/g, (function(bb, wb) {
```

#### 9. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L212` → after: `L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/fa-renderer.js#L212) · [Before (L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/fa-renderer.js#L212)

```diff
-       return dd && "object" === Nd(dd) && dd.prefix && dd.iconName && dd.icon ? dd : Wd.parse.icon ? Wd.parse.icon(dd) : null === dd ? null : dd && "object" === Nd(dd) && dd.prefix && dd.iconName ? dd : Array.isArray(dd) && 2 === dd.length ? {
+       return bb && "object" === tb(bb) && bb.prefix && bb.iconName && bb.icon ? bb : eb.parse.icon ? eb.parse.icon(bb) : null === bb ? null : bb && "object" === tb(bb) && bb.prefix && bb.iconName ? bb : Array.isArray(bb) && 2 === bb.length ? {
```

#### 10. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L337` → after: `L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/fa-renderer.js#L337) · [Before (L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/fa-renderer.js#L337)

```diff
-                 return Fd.startsWith("webkit") ? dd[(md = Fd, md.charAt(0).toUpperCase() + md.slice(1))] = Rd : dd[Fd] = Rd, dd
+                 return Hb.startsWith("webkit") ? bb[(Mb = Hb, Mb.charAt(0).toUpperCase() + Mb.slice(1))] = pb : bb[Hb] = pb, bb
```

#### 11. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L341` → after: `L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/fa-renderer.js#L341) · [Before (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/fa-renderer.js#L341)

```diff
-               0 === Od.indexOf("aria-") || 0 === Od.indexOf("data-") ? dd.attrs[Od.toLowerCase()] = Wd : dd.attrs[Td(Od)] = Wd
+               0 === wb.indexOf("aria-") || 0 === wb.indexOf("data-") ? bb.attrs[wb.toLowerCase()] = eb : bb.attrs[sb(wb)] = eb
```

#### 12. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L369-L370` → after: `L369-L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L369-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/fa-renderer.js#L369-L370) · [Before (L369-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/fa-renderer.js#L369-L370)

```diff
-   5870: (dd, Od, md) => {
-     var Wd = md(5874);
+   6028: (bb, wb, Mb) => {
+     var eb = Mb(6030);
```

#### 13. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L413-L414` → after: `L413-L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L413-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/fa-renderer.js#L413-L414) · [Before (L413-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/fa-renderer.js#L413-L414)

```diff
-   5864: (dd, Od, md) => {
-     dd.exports = md(5870)()
+   6022: (bb, wb, Mb) => {
+     bb.exports = Mb(6028)()
```

#### 14. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L416` → after: `L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/fa-renderer.js#L416) · [Before (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/fa-renderer.js#L416)

```diff
-   5874: dd => {
+   6030: bb => {
```

#### 15. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L419` → after: `L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/fa-renderer.js#L419) · [Before (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/fa-renderer.js#L419)

```diff
-   7699: (dd, Od, md) => {
+   7955: (bb, wb, Mb) => {
```

#### 16. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L565` → after: `L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/fa-renderer.js#L565) · [Before (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/fa-renderer.js#L565)

```diff
-       return "symbol" == typeof Od ? Od : Od + ""
+       return "symbol" == typeof wb ? wb : wb + ""
```

#### 17. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L1586` → after: `L1586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R1586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L1586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/fa-renderer.js#L1586) · [Before (L1586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/fa-renderer.js#L1586)

```diff
-         md = void 0 === Od ? Vd : Od,
+         Mb = void 0 === wb ? Zb : wb,
```

#### 18. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L1590` → after: `L1590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R1590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L1590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/fa-renderer.js#L1590) · [Before (L1590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/fa-renderer.js#L1590)

```diff
-         Rd = dd in Xm.styles ? dd : null;
+         pb = bb in pM.styles ? bb : null;
```

#### 19. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L1631` → after: `L1631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R1631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/fa-renderer.js#L1631) · [Before (L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/fa-renderer.js#L1631)

```diff
-             Wd ? md = Wd : dd && Od.push(dd)
+             eb ? Mb = eb : bb && wb.push(bb)
```

#### 20. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L1834` → after: `L1834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R1834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L1834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/fa-renderer.js#L1834) · [Before (L1834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/fa-renderer.js#L1834)

```diff
-           Od = void 0 === dd ? Jd : dd;
+           wb = void 0 === bb ? jb : bb;
```

#### 21. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L1871` → after: `L1871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R1871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L1871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/fa-renderer.js#L1871) · [Before (L1871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/fa-renderer.js#L1871)

```diff
-         Nd = Wd.found ? Wd : md,
+         tb = eb.found ? eb : Mb,
```

#### 22. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2056` → after: `L2056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/fa-renderer.js#L2056) · [Before (L2056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/fa-renderer.js#L2056)

```diff
-       vW = DO.measurePerformance && xd && xd.mark && xd.measure ? xd : {
+       ge = aw.measurePerformance && rb && rb.mark && rb.measure ? rb : {
```

#### 23. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2086` → after: `L2086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/fa-renderer.js#L2086) · [Before (L2086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/fa-renderer.js#L2086)

```diff
-         md = void 0 === Od ? "svg" === dd.tag ? HW : yW : Od;
+         Mb = void 0 === wb ? "svg" === bb.tag ? te : Ce : wb;
```

#### 24. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2137` → after: `L2137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/fa-renderer.js#L2137) · [Before (L2137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/fa-renderer.js#L2137)

```diff
-       var md = "function" === typeof Od ? Od : NW;
+       var Mb = "function" === typeof wb ? wb : Oe;
```

#### 25. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2162` → after: `L2162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/fa-renderer.js#L2162) · [Before (L2162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/fa-renderer.js#L2162)

```diff
-           md = void 0 === Od ? NW : Od,
+           Mb = void 0 === wb ? Oe : wb,
```

#### 26. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2164` → after: `L2164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/fa-renderer.js#L2164) · [Before (L2164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/fa-renderer.js#L2164)

```diff
-           Fd = void 0 === Wd ? NW : Wd,
+           Hb = void 0 === eb ? Oe : eb,
```

#### 27. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2166` → after: `L2166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/fa-renderer.js#L2166) · [Before (L2166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/fa-renderer.js#L2166)

```diff
-           Xd = void 0 === Rd ? NW : Rd,
+           Vb = void 0 === pb ? Oe : pb,
```

#### 28. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2168` → after: `L2168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/fa-renderer.js#L2168) · [Before (L2168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/fa-renderer.js#L2168)

```diff
-           hd = void 0 === Kd ? Jd : Kd;
+           lb = void 0 === gb ? jb : gb;
```

#### 29. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2307` → after: `L2307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/fa-renderer.js#L2307) · [Before (L2307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/fa-renderer.js#L2307)

```diff
-           Wd = void 0 === md ? lO : md,
+           eb = void 0 === Mb ? dw : Mb,
```

#### 30. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2359` → after: `L2359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/fa-renderer.js#L2359) · [Before (L2359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/fa-renderer.js#L2359)

```diff
-                 Wd = (Od || {}).icon ? Od : Zm(Od || {}),
+                 eb = (wb || {}).icon ? wb : PM(wb || {}),
```

#### 31. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2361` → after: `L2361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/fa-renderer.js#L2361) · [Before (L2361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/fa-renderer.js#L2361)

```diff
-               return Fd && (Fd = (Fd || {}).icon ? Fd : Zm(Fd || {})), dd(Wd, hd(hd({}, md), {}, {
+               return Hb && (Hb = (Hb || {}).icon ? Hb : PM(Hb || {})), bb(eb, lb(lb({}, Mb), {}, {
```

#### 32. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2378` → after: `L2378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/fa-renderer.js#L2378) · [Before (L2378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/fa-renderer.js#L2378)

```diff
-               md = void 0 === Od ? Jd : Od,
+               Mb = void 0 === wb ? jb : wb,
```

#### 33. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2518` → after: `L2518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/fa-renderer.js#L2518) · [Before (L2518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/fa-renderer.js#L2518)

```diff
-                 Wd = void 0 === md ? lO : md,
+                 eb = void 0 === Mb ? dw : Mb,
```

#### 34. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2821` → after: `L2821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/fa-renderer.js#L2821) · [Before (L2821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/fa-renderer.js#L2821)

```diff
-           return dd.includes("(") ? dd : dd.split(",").map((function(dd) {
+           return bb.includes("(") ? bb : bb.split(",").map((function(bb) {
```

#### 35. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2914` → after: `L2914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/fa-renderer.js#L2914) · [Before (L2914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/fa-renderer.js#L2914)

```diff
-               md = void 0 === Od ? Jd : Od;
+               Mb = void 0 === wb ? jb : wb;
```

#### 36. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L3280` → after: `L3280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R3280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L3280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/fa-renderer.js#L3280) · [Before (L3280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/fa-renderer.js#L3280)

```diff
-   7708: dd => {
+   7962: bb => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/frameDebug.js` (yteou.5361c997 → welxxc.ffac0572)

- **File**: `bundles/bloxd.io/chunks/js/frameDebug.js` (23 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084)

#### 1. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/frameDebug.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/frameDebug.js#L4)

```diff
-   35401: (dd, Od, md) => {
+   35186: (bb, wb, Mb) => {
```

#### 2. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L13` → after: `L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/frameDebug.js#L13) · [Before (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/frameDebug.js#L13)

```diff
-       d: () => Fd,
+       b: () => Hb,
```

#### 3. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/frameDebug.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/frameDebug.js#L17)

```diff
-   35392: (dd, Od, md) => {
+   35181: (bb, wb, Mb) => {
```

#### 4. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L28-L33` → after: `L28-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L28-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/frameDebug.js#L28-L33) · [Before (L28-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/frameDebug.js#L28-L33)

```diff
-     var Wd = md(5571),
-       Fd = md(5565),
-       Rd = md(35401),
-       Xd = md(3903),
-       Kd = md(1382),
-       hd = md(4065);
+     var eb = Mb(5685),
+       Hb = Mb(5675),
+       pb = Mb(35186),
+       Vb = Mb(4060),
+       gb = Mb(1415),
+       lb = Mb(4239);
```

#### 5. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L38` → after: `L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/frameDebug.js#L38) · [Before (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/frameDebug.js#L38)

```diff
-           this.add(Od.startTime, Od.duration, Od.blockingDuration, (0, Kd.s)(Od))
+           this.add(wb.startTime, wb.duration, wb.blockingDuration, (0, gb.r)(wb))
```

#### 6. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L57-L61` → after: `L57-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L57-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/frameDebug.js#L57-L61) · [Before (L57-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/frameDebug.js#L57-L61)

```diff
-         const Xd = "loaf" === this.kind && md > 0 ? ` (blocking ${Fd.toFixed(0)}, script ${Rd.toFixed(0)})` : "";
-         return `${md} ${this.kind} ${Wd.toFixed(0)} ms${Xd}`
-       }
-     }
-     var Qd = md(35404);
+         const Vb = "loaf" === this.kind && Mb > 0 ? ` (blocking ${Hb.toFixed(0)}, script ${pb.toFixed(0)})` : "";
+         return `${Mb} ${this.kind} ${eb.toFixed(0)} ms${Vb}`
+       }
+     }
+     var Ib = Mb(35190);
```

#### 7. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L64` → after: `L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/frameDebug.js#L64) · [Before (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/frameDebug.js#L64)

```diff
-       return Od < 0 || dd < Od ? dd : dd - Od
+       return wb < 0 || bb < wb ? bb : bb - wb
```

#### 8. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L111-L114` → after: `L111-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L111-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/frameDebug.js#L111-L114) · [Before (L111-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/frameDebug.js#L111-L114)

```diff
-             const md = [`chunks +${td(dd.chunksReceived,Od.chunksReceived)} got`, `+${td(dd.chunksCancelled,Od.chunksCancelled)} cancelled`];
-             dd.chunksStored >= 0 && md.push(`${dd.chunksStored} stored`);
-             const Wd = `jobs +${td(dd.jobsSent,Od.jobsSent)} sent, +${td(dd.jobsDone,Od.jobsDone)} done, ${dd.jobsInFlight} in flight`;
-             return `${md.join(", ")}; ${Wd}; workers ${dd.workersLive} live, ${dd.workersRetired} retired`
+             const Mb = [`chunks +${Ob(bb.chunksReceived,wb.chunksReceived)} got`, `+${Ob(bb.chunksCancelled,wb.chunksCancelled)} cancelled`];
+             bb.chunksStored >= 0 && Mb.push(`${bb.chunksStored} stored`);
+             const eb = `jobs +${Ob(bb.jobsSent,wb.jobsSent)} sent, +${Ob(bb.jobsDone,wb.jobsDone)} done, ${bb.jobsInFlight} in flight`;
+             return `${Mb.join(", ")}; ${eb}; workers ${bb.workersLive} live, ${bb.workersRetired} retired`
```

#### 9. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L123` → after: `L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/frameDebug.js#L123) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/frameDebug.js#L123)

```diff
-         if ((Xd > 0 || Kd > 0) && (md.push((0, Qd.g)({
+         if ((Vb > 0 || gb > 0) && (Mb.push((0, Ib.f)({
```

#### 10. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L127` → after: `L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/frameDebug.js#L127) · [Before (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/frameDebug.js#L127)

```diff
-         const hd = `load ${Math.round((dd-this.lastMs)/1e3)}s: ${md.join("; ")}`;
+         const lb = `load ${Math.round((bb-this.lastMs)/1e3)}s: ${Mb.join("; ")}`;
```

#### 11. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L144` → after: `L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/frameDebug.js#L144) · [Before (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/frameDebug.js#L144)

```diff
-         return `${this.count} undrawn: ${this.paced} paced, ${this.skipped} skipped, ${dd} other, longest ${this.longest} in ${(0,Rd.d)(this.longestMs)} ms at ${this.longestAhead} ahead`
+         return `${this.count} undrawn: ${this.paced} paced, ${this.skipped} skipped, ${bb} other, longest ${this.longest} in ${(0,pb.b)(this.longestMs)} ms at ${this.longestAhead} ahead`
```

#### 12. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L182` → after: `L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/frameDebug.js#L182) · [Before (L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/frameDebug.js#L182)

```diff
-           this.ahead = dd.headerWord(Wd.I.Pacing) & Wd.Z.AheadMask, this.frame(Od, md, Fd, Rd, dd.headerWord(Wd.I.RenderUs) / 1e3, dd.headerWord(Wd.I.TicksRun), Xd, dd.headerWord(Wd.I.RenderPending))
+           this.ahead = bb.headerWord(eb.L.Pacing) & eb.hb.AheadMask, this.frame(wb, Mb, Hb, pb, bb.headerWord(eb.L.RenderUs) / 1e3, bb.headerWord(eb.L.TicksRun), Vb, bb.headerWord(eb.L.RenderPending))
```

#### 13. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L199-L200` → after: `L199-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L199-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/frameDebug.js#L199-L200) · [Before (L199-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/frameDebug.js#L199-L200)

```diff
-             const Wd = [`long frame ${(0,Rd.d)(md.intervalMs)} ms ending at ${(0,Rd.d)(md.endMs)} ms: main ${(0,Rd.d)(md.mainMs)} (render ${(0,Rd.d)(md.renderMs)}, ${md.ticks} ticks ${(0,Rd.d)(md.tickMs)}), outside ${(0,Rd.d)(md.intervalMs-md.mainMs)}`, `${md.rafs} rafs`];
-             md.pendingBefore >= 0 && Wd.push(`pending ${md.pendingBefore} -> ${md.pendingAfter} (max ${md.pendingMax})`), Wd.push(this.longTasks.describe(md.endMs - md.intervalMs, md.endMs)), (0, Xd.k)("frame", Wd.join("; "))
+             const eb = [`long frame ${(0,pb.b)(Mb.intervalMs)} ms ending at ${(0,pb.b)(Mb.endMs)} ms: main ${(0,pb.b)(Mb.mainMs)} (render ${(0,pb.b)(Mb.renderMs)}, ${Mb.ticks} ticks ${(0,pb.b)(Mb.tickMs)}), outside ${(0,pb.b)(Mb.intervalMs-Mb.mainMs)}`, `${Mb.rafs} rafs`];
+             Mb.pendingBefore >= 0 && eb.push(`pending ${Mb.pendingBefore} -> ${Mb.pendingAfter} (max ${Mb.pendingMax})`), eb.push(this.longTasks.describe(Mb.endMs - Mb.intervalMs, Mb.endMs)), (0, Vb.j)("frame", eb.join("; "))
```

#### 14. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L210` → after: `L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/frameDebug.js#L210) · [Before (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/frameDebug.js#L210)

```diff
-             null !== Od && (0, Xd.k)("frame", Od)
+             null !== wb && (0, Vb.j)("frame", wb)
```

#### 15. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L217` → after: `L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/frameDebug.js#L217) · [Before (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/frameDebug.js#L217)

```diff
-         this.restart(), this.startedMs = performance.now(), this.lastFlushMs = this.startedMs, this.loadLine.start(this.startedMs), this.scheduleFlush(), (0, Xd.k)("frame", `start: ${dd} client, ${Od}, dpr ${window.devicePixelRatio}, long tasks ${null!==(md=this.longTasks.kind)&& … [truncated]
+         this.restart(), this.startedMs = performance.now(), this.lastFlushMs = this.startedMs, this.loadLine.start(this.startedMs), this.scheduleFlush(), (0, Vb.j)("frame", `start: ${bb} client, ${wb}, dpr ${window.devicePixelRatio}, long tasks ${null!==(Mb=this.longTasks.kind)&& … [truncated]
```

#### 16. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L231` → after: `L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/frameDebug.js#L231) · [Before (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/frameDebug.js#L231)

```diff
-         this.flushTimer = setTimeout(this.flush, dd ? Hd : qd)
+         this.flushTimer = setTimeout(this.flush, bb ? Eb : Cb)
```

#### 17. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L236` → after: `L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/frameDebug.js#L236) · [Before (L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/frameDebug.js#L236)

```diff
-         (0, Fd.d)(md) ? (this.lastDrawnStartMs >= 0 && (vd.pendingAfter = this.lastPending, this.closeInterval(dd - this.lastDrawnStartMs, dd)), this.lastDrawnStartMs = dd, gd(vd).pendingBefore = this.lastPending, this.summary.undrawn.drawn()) : this.lastDrawnStartMs >= 0 && this … [truncated]
+         (0, Hb.b)(Mb) ? (this.lastDrawnStartMs >= 0 && (Lb.pendingAfter = this.lastPending, this.closeInterval(bb - this.lastDrawnStartMs, bb)), this.lastDrawnStartMs = bb, zb(Lb).pendingBefore = this.lastPending, this.summary.undrawn.drawn()) : this.lastDrawnStartMs >= 0 && this … [truncated]
```

#### 18. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L257` → after: `L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/frameDebug.js#L257) · [Before (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/frameDebug.js#L257)

```diff
-         if (0 === Od.frames) return Od.undrawn.count > 0 && (0, Xd.k)("frame", `${dd}s: no frames drawn, ${Od.undrawn.describe()}; pending max ${md.pendingMax}`), Od.undrawn.count > 0;
+         if (0 === wb.frames) return wb.undrawn.count > 0 && (0, Vb.j)("frame", `${bb}s: no frames drawn, ${wb.undrawn.describe()}; pending max ${Mb.pendingMax}`), wb.undrawn.count > 0;
```

#### 19. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L259-L260` → after: `L259-L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L259-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/frameDebug.js#L259-L260) · [Before (L259-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/frameDebug.js#L259-L260)

```diff
-           Fd = [`${Od.frames} frames, median ${(0,Rd.d)((0,Rd.e)(Wd,.5))} p95 ${(0,Rd.d)((0,Rd.e)(Wd,.95))} max ${(0,Rd.d)(Od.maxMs)} ms, ${Od.slow} over 50, ${Od.shown+Od.dropped} over ${bd}`, `${md.rafs} rafs, ${Od.undrawn.describe()}`, `main ${(0,Rd.d)(md.mainMs)} ms (render $ … [truncated]
-         return md.pendingMax >= 0 && Fd.push(`pending max ${md.pendingMax}`), this.ahead >= 0 && Fd.push(`${this.ahead} frames ahead`), Fd.push(`outliers ${Od.shown} logged, ${Od.dropped} dropped`), (0, Xd.k)("frame", `${dd}s: ${Fd.join("; ")}`), !0
+           Hb = [`${wb.frames} frames, median ${(0,pb.b)((0,pb.e)(eb,.5))} p95 ${(0,pb.b)((0,pb.e)(eb,.95))} max ${(0,pb.b)(wb.maxMs)} ms, ${wb.slow} over 50, ${wb.shown+wb.dropped} over ${Bb}`, `${Mb.rafs} rafs, ${wb.undrawn.describe()}`, `main ${(0,pb.b)(Mb.mainMs)} ms (render $ … [truncated]
+         return Mb.pendingMax >= 0 && Hb.push(`pending max ${Mb.pendingMax}`), this.ahead >= 0 && Hb.push(`${this.ahead} frames ahead`), Hb.push(`outliers ${wb.shown} logged, ${wb.dropped} dropped`), (0, Vb.j)("frame", `${bb}s: ${Hb.join("; ")}`), !0
```

#### 20. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L269` → after: `L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/frameDebug.js#L269) · [Before (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/frameDebug.js#L269)

```diff
-   35404: (dd, Od, md) => {
+   35190: (bb, wb, Mb) => {
```

#### 21. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L271` → after: `L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/frameDebug.js#L271) · [Before (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/frameDebug.js#L271)

```diff
-       return `hidden ${dd.changes} changes, ${Math.round(dd.hiddenMs)} ms`
+       return `hidden ${bb.changes} changes, ${Math.round(bb.hiddenMs)} ms`
```

#### 22. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L275` → after: `L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/frameDebug.js#L275) · [Before (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/frameDebug.js#L275)

```diff
-       g: () => Wd
+       f: () => eb
```

#### 23. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L282` → after: `L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/frameDebug.js#L282) · [Before (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/frameDebug.js#L282)

```diff
-         this.changes++, document.hidden ? this.hiddenSinceMs = dd : this.hiddenSinceMs >= 0 && (this.hiddenMs += dd - this.hiddenSinceMs, this.hiddenSinceMs = -1)
+         this.changes++, document.hidden ? this.hiddenSinceMs = bb : this.hiddenSinceMs >= 0 && (this.hiddenMs += bb - this.hiddenSinceMs, this.hiddenSinceMs = -1)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/icons-brands.js` (yteou.5361c997 → welxxc.ffac0572)

- **File**: `bundles/bloxd.io/chunks/js/icons-brands.js` (18 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621)

#### 1. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-brands.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-brands.js#L4)

```diff
-   9221: (dd, Od) => {
+   9441: (bb, wb) => {
```

#### 2. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L9` → after: `L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-brands.js#L9) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-brands.js#L9)

```diff
-     Od.b = {
+     wb.d = {
```

#### 3. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L13` → after: `L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-brands.js#L13) · [Before (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-brands.js#L13)

```diff
-     }, Od.f = Od.b
+     }, wb.e = wb.d
```

#### 4. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L15` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-brands.js#L15) · [Before (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-brands.js#L15)

```diff
-   9225: (dd, Od) => {
+   9446: (bb, wb) => {
```

#### 5. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-brands.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-brands.js#L24)

```diff
-     }, Od.f = Od.c
+     }, wb.g = wb.c
```

#### 6. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L26` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-brands.js#L26) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-brands.js#L26)

```diff
-   9227: (dd, Od) => {
+   9453: (bb, wb) => {
```

#### 7. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L31` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-brands.js#L31) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-brands.js#L31)

```diff
-     Od.b = {
+     wb.c = {
```

#### 8. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L35` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-brands.js#L35) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-brands.js#L35)

```diff
-     }, Od.c = Od.b
+     }, wb.d = wb.c
```

#### 9. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L37` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-brands.js#L37) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-brands.js#L37)

```diff
-   9236: (dd, Od) => {
+   9459: (bb, wb) => {
```

#### 10. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L59` → after: `L48-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L48-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-brands.js#L48-L59) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-brands.js#L59)

```diff
-   9249: (dd, Od) => {
+   9467: (bb, wb) => {
+     var Mb = "instagram",
+       eb = [],
+       Hb = "f16d",
+       pb = "M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-3 … [truncated]
+     wb.e = {
+       prefix: "fab",
+       iconName: Mb,
+       icon: [448, 512, eb, Hb, pb]
+     }, wb.g = wb.e
+   },
+   9472: (bb, wb) => {
```

#### 11. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L64` → after: `L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-brands.js#L64) · [Before (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-brands.js#L64)

```diff
-     Od.b = {
+     wb.c = {
```

#### 12. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L68` → after: `L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-brands.js#L68) · [Before (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-brands.js#L68)

```diff
-     }, Od.f = Od.b
+     }, wb.d = wb.c
```

#### 13. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L70` → after: `L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-brands.js#L70) · [Before (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-brands.js#L70)

```diff
-   9255: (dd, Od) => {
+   9477: (bb, wb) => {
```

#### 14. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L81-L114` → after: `L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-brands.js#L114) · [Before (L81-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-brands.js#L81-L114)

```diff
-   9261: (dd, Od) => {
-     var md = "twitch",
-       Wd = [],
-       Fd = "f1e8",
-       Rd = "M359.4 103.5l-38.6 0 0 109.7 38.6 0 0-109.7zM253.2 103l-38.6 0 0 109.8 38.6 0 0-109.8zM89 0l-96.5 91.4 0 329.2 115.8 0 0 91.4 96.5-91.4 77.3 0 173.8-164.6 0-256-366.9 0zM417.3 237.8l-77.2 73.1-77.2 0-67.6 64 0-64-86.9 0 0-274.3 308.9 0 0 201.2z";
-     Od.e = {
-       prefix: "fab",
-       iconName: md,
-       icon: [448, 512, Wd, Fd, Rd]
-     }, Od.h = Od.e
-   },
-   9263: (dd, Od) => {
-     var md = "windows",
-       Wd = [],
-       Fd = "f17a",
-       Rd = "M0 93.7l183.6-25.3 0 177.4-183.6 0 0-152.1zM0 418.3l183.6 25.3 0-175.2-183.6 0 0 149.9zm203.8 28l244.2 33.7 0-211.6-244.2 0 0 177.9zm0-380.6l0 180.1 244.2 0 0-213.8-244.2 33.7z";
- ... (18 more removed lines; see GitHub link above)
+   9503: (bb, wb) => {
```

#### 15. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L123` → after: `L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-brands.js#L123) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-brands.js#L123)

```diff
-     }, Od.g = Od.e
+     }, wb.i = wb.e
```

#### 16. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L125` → after: `L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-brands.js#L125) · [Before (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-brands.js#L125)

```diff
-   9215: (dd, Od, md) => {
+   9433: (bb, wb, Mb) => {
```

#### 17. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L129-L139` → after: `L129-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L129-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-brands.js#L129-L139) · [Before (L129-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-brands.js#L129-L139)

```diff
-     var Wd = md(9221),
-       Fd = md(9225),
-       Rd = md(9227),
-       Xd = md(9236),
-       Kd = md(9244),
-       hd = md(9249),
-       vd = md(9255),
-       Qd = md(9261),
-       td = md(9263),
-       od = md(9269),
-       Nd = md(9278);
+     var eb = Mb(9441),
+       Hb = Mb(9446),
+       pb = Mb(9453),
+       Vb = Mb(9459),
+       gb = Mb(9467),
+       lb = Mb(9472),
+       Lb = Mb(9477),
+       Ib = Mb(9482),
+       Ob = Mb(9490),
+       Ub = Mb(9497),
+       tb = Mb(9503);
```

#### 18. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L141-L151` → after: `L141-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L141-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-brands.js#L141-L151) · [Before (L141-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-brands.js#L141-L151)

```diff
-       apple: Wd.f,
-       chrome: Fd.f,
-       discord: Rd.c,
-       "google-play": Xd.e,
-       instagram: Kd.h,
-       "reddit-alien": hd.f,
-       tiktok: vd.i,
-       twitch: Qd.h,
-       windows: td.h,
-       "x-twitter": od.g,
-       youtube: Nd.g
+       apple: eb.e,
+       chrome: Hb.g,
+       discord: pb.d,
+       "google-play": Vb.h,
+       instagram: gb.g,
+       "reddit-alien": lb.d,
+       tiktok: Lb.h,
+       twitch: Ib.d,
+       windows: Ob.d,
+       "x-twitter": Ub.i,
+       youtube: tb.i
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/icons-duotone.js` (yteou.5361c997 → welxxc.ffac0572)

- **File**: `bundles/bloxd.io/chunks/js/icons-duotone.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bd)

#### 1. `bundles/bloxd.io/chunks/js/icons-duotone.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bdR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bd) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-duotone.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-duotone.js#L4)

```diff
-   9202: (dd, Od) => {
+   9424: (bb, wb) => {
```

#### 2. `bundles/bloxd.io/chunks/js/icons-duotone.js` (Changed code · before: `L9` → after: `L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bdR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bd) · [After (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-duotone.js#L9) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-duotone.js#L9)

```diff
-     Od.e = {
+     wb.d = {
```

#### 3. `bundles/bloxd.io/chunks/js/icons-duotone.js` (Changed code · before: `L13` → after: `L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bdR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bd) · [After (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-duotone.js#L13) · [Before (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-duotone.js#L13)

```diff
-     }, Od.f = Od.e
+     }, wb.e = wb.d
```

#### 4. `bundles/bloxd.io/chunks/js/icons-duotone.js` (Changed code · before: `L15` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bdR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bd) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-duotone.js#L15) · [Before (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-duotone.js#L15)

```diff
-   9207: (dd, Od) => {
+   9429: (bb, wb) => {
```

#### 5. `bundles/bloxd.io/chunks/js/icons-duotone.js` (Changed code · before: `L20` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bdR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bd) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-duotone.js#L20) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-duotone.js#L20)

```diff
-     Od.e = {
+     wb.d = {
```

#### 6. `bundles/bloxd.io/chunks/js/icons-duotone.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bdR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bd) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-duotone.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-duotone.js#L24)

```diff
-     }, Od.g = Od.e
+     }, wb.e = wb.d
```

#### 7. `bundles/bloxd.io/chunks/js/icons-duotone.js` (Changed code · before: `L26` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bdR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bd) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-duotone.js#L26) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-duotone.js#L26)

```diff
-   9194: (dd, Od, md) => {
+   9419: (bb, wb, Mb) => {
```

#### 8. `bundles/bloxd.io/chunks/js/icons-duotone.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bdR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bd) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-duotone.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-duotone.js#L30-L31)

```diff
-     var Wd = md(9202),
-       Fd = md(9207);
+     var eb = Mb(9424),
+       Hb = Mb(9429);
```

#### 9. `bundles/bloxd.io/chunks/js/icons-duotone.js` (Changed code · before: `L33-L34` → after: `L33-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bdR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bd) · [After (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-duotone.js#L33-L34) · [Before (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-duotone.js#L33-L34)

```diff
-       "hat-santa": Wd.f,
-       "planet-ringed": Fd.g
+       "hat-santa": eb.e,
+       "planet-ringed": Hb.e
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/icons-regular.js` (yteou.5361c997 → welxxc.ffac0572)

- **File**: `bundles/bloxd.io/chunks/js/icons-regular.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8)

#### 1. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-regular.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-regular.js#L4)

```diff
-   9162: (dd, Od) => {
+   9385: (bb, wb) => {
```

#### 2. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L13` → after: `L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-regular.js#L13) · [Before (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-regular.js#L13)

```diff
-     }, Od.h = Od.d
+     }, wb.e = wb.d
```

#### 3. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L15` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-regular.js#L15) · [Before (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-regular.js#L15)

```diff
-   9164: (dd, Od) => {
+   9390: (bb, wb) => {
```

#### 4. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L20` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-regular.js#L20) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-regular.js#L20)

```diff
-     Od.b = {
+     wb.d = {
```

#### 5. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-regular.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-regular.js#L24)

```diff
-     }, Od.e = Od.b
+     }, wb.g = wb.d
```

#### 6. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L26` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-regular.js#L26) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-regular.js#L26)

```diff
-   9173: (dd, Od) => {
+   9399: (bb, wb) => {
```

#### 7. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L31` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-regular.js#L31) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-regular.js#L31)

```diff
-     Od.c = {
+     wb.e = {
```

#### 8. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L35` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-regular.js#L35) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-regular.js#L35)

```diff
-     }, Od.f = Od.c
+     }, wb.g = wb.e
```

#### 9. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L37-L38` → after: `L37-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-regular.js#L37-L38) · [Before (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-regular.js#L37-L38)

```diff
-   9180: (dd, Od, md) => {
-     var Wd = md(9188);
+   9408: (bb, wb, Mb) => {
+     var eb = Mb(9417);
```

#### 10. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-regular.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-regular.js#L43)

```diff
-     }, Od.g = Od.d, Wd.prefix, Wd.iconName, Wd.width, Wd.height, Wd.aliases, Wd.unicode, Wd.svgPathData, Wd.aliases
+     }, wb.h = wb.d, eb.prefix, eb.iconName, eb.width, eb.height, eb.aliases, eb.unicode, eb.svgPathData, eb.aliases
```

#### 11. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-regular.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-regular.js#L45)

```diff
-   9188: (dd, Od) => {
+   9417: (bb, wb) => {
```

#### 12. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L59` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-regular.js#L59) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-regular.js#L59)

```diff
-   9154: (dd, Od, md) => {
+   9383: (bb, wb, Mb) => {
```

#### 13. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L63-L67` → after: `L63-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L63-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-regular.js#L63-L67) · [Before (L63-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-regular.js#L63-L67)

```diff
-     var Wd = md(9162),
-       Fd = md(9164),
-       Rd = md(9173),
-       Xd = md(9180),
-       Kd = md(9188);
+     var eb = Mb(9385),
+       Hb = Mb(9390),
+       pb = Mb(9399),
+       Vb = Mb(9408),
+       gb = Mb(9417);
```

#### 14. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L69-L72` → after: `L69-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L69-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-regular.js#L69-L72) · [Before (L69-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-regular.js#L69-L72)

```diff
-       copy: Wd.h,
-       flag: Fd.e,
-       heart: Rd.f,
-       "user-friends": Xd.g,
+       copy: eb.e,
+       flag: Hb.g,
+       heart: pb.g,
+       "user-friends": Vb.h,
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/icons-solid.js` (yteou.5361c997 → welxxc.ffac0572)

- **File**: `bundles/bloxd.io/chunks/js/icons-solid.js` (78 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6)

#### 1. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L4)

```diff
-   7712: (dd, Od, md) => {
+   7966: (bb, wb, Mb) => {
```

#### 2. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L8-L57` → after: `L8-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L8-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L8-L15) · [Before (L8-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L8-L57)

```diff
-     var Wd = md(7718),
-       Fd = md(7730),
-       Rd = md(7739),
-       Xd = md(7751),
-       Kd = md(7760),
-       hd = md(7744),
-       vd = md(7766),
-       Qd = md(7772),
-       td = md(7780),
-       od = md(7783),
-       Nd = md(7788),
-       qd = md(7795),
-       Hd = md(7798),
-       yd = md(7802),
-       bd = md(7811),
-       Td = md(7820),
- ... (34 more removed lines; see GitHub link above)
+     var eb = Mb(7973),
+       Hb = Mb(7984),
+       pb = Mb(7990),
+       Vb = Mb(7995),
+       gb = Mb(7997),
+       lb = Mb(7992),
+       Lb = Mb(8004),
+       Ib = Mb(8008),
```

#### 3. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L59-L61` → after: `L17-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L17-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L17-L24) · [Before (L59-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L59-L61)

```diff
-       FO = md(8023),
-       RO = md(8031),
-       XO = md(8038),
+       Ub = Mb(8017),
+       tb = Mb(8021),
+       Cb = Mb(8028),
+       Eb = Mb(8035),
+       Fb = Mb(8040),
+       Bb = Mb(8049),
+       sb = Mb(8058),
+       mb = Mb(8064),
```

#### 4. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L63-L72` → after: `L26-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L26-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L26-L32) · [Before (L63-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L63-L72)

```diff
-       hO = md(8044),
-       vO = md(8048),
-       QO = md(8057),
-       tO = md(8060),
-       oO = md(8068),
-       NO = md(8070),
-       qO = md(8072),
-       HO = md(8074),
-       yO = md(8090),
-       bO = md(8097),
+       zb = Mb(8071),
+       Xb = Mb(8076),
+       xb = Mb(8079),
+       jb = Mb(8081),
+       Kb = Mb(8088),
+       rb = Mb(8094),
+       Rb = Mb(8096),
```

#### 5. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L74-L79` → after: `L34-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L34-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L34-L41) · [Before (L74-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L74-L79)

```diff
-       pO = md(8115),
-       YO = md(8117),
-       gO = md(8123),
-       wO = md(8132),
-       aO = md(8141),
-       EO = md(8146),
+       cb = Mb(8107),
+       Yb = Mb(8109),
+       Zb = Mb(8118),
+       fb = Mb(8126),
+       Ab = Mb(8137),
+       Wb = Mb(8140),
+       Jb = Mb(8144),
+       Sb = Mb(8147),
```

#### 6. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L83` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L46) · [Before (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L83)

```diff
-       BO = md(8167),
+       qb = Mb(8170),
```

#### 7. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L85` → after: `L48-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L48-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L48-L50) · [Before (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L85)

```diff
-       sO = md(8176),
+       ib = Mb(8175),
+       ub = Mb(8177),
+       db = Mb(8181),
```

#### 8. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L87-L91` → after: `L52-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L52-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L52-L108) · [Before (L87-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L87-L91)

```diff
-       VO = md(8190),
-       iO = md(8111),
-       AO = md(8194),
-       rO = md(8202),
-       GO = md(8207),
+       nb = Mb(1483),
+       yb = Mb(8193),
+       ob = Mb(8197),
+       Tb = Mb(8200),
+       kb = Mb(8204),
+       bw = Mb(8211),
+       ww = Mb(8222),
+       Mw = Mb(8231),
+       ew = Mb(8235),
+       Hw = Mb(8238),
+       pw = Mb(8242),
+       Vw = Mb(8250),
+       gw = Mb(8257),
+       lw = Mb(8266),
+       Lw = Mb(8271),
+       Iw = Mb(8275),
+ ... (41 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L93-L150` → after: `L110-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L110-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L110-L114) · [Before (L93-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L93-L150)

```diff
-       LO = md(8224),
-       PO = md(8229),
-       zO = md(8244),
-       cO = md(8236),
-       jO = md(8254),
-       DO = md(8263),
-       eO = md(8268),
-       IO = md(8274),
-       lO = md(8286),
-       CO = md(8294),
-       ZO = md(8303),
-       kO = md(8307),
-       fO = md(8312),
-       MO = md(8321),
-       dm = md(8326),
-       Om = md(8331),
- ... (42 more removed lines; see GitHub link above)
+       MM = Mb(8505),
+       eM = Mb(8514),
+       HM = Mb(8523),
+       pM = Mb(8527),
+       VM = Mb(8531),
```

#### 10. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L153-L155` → after: `L117-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L117-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L117-L120) · [Before (L153-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L153-L155)

```diff
-       Cm = md(8543),
-       Zm = md(8548),
-       km = md(8557),
+       LM = Mb(8457),
+       IM = Mb(8542),
+       OM = Mb(8551),
+       UM = Mb(8558),
```

#### 11. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L157-L158` → after: `L122-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L122-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L122-L124) · [Before (L157-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L157-L158)

```diff
-       Mm = md(8563),
-       dW = md(8567),
+       CM = Mb(8564),
+       EM = Mb(8570),
+       FM = Mb(8572),
```

#### 12. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L160-L161` → after: `L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L126) · [Before (L160-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L160-L161)

```diff
-       mW = md(8581),
-       WW = md(8587),
+       sM = Mb(8583),
```

#### 13. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L163-L165` → after: `L128-L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L128-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L128-L130) · [Before (L163-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L163-L165)

```diff
-       RW = md(8595),
-       XW = md(8602),
-       KW = md(8611),
+       hM = Mb(8598),
+       zM = Mb(8604),
+       XM = Mb(8609),
```

#### 14. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L168` → after: `L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L133) · [Before (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L168)

```diff
-       QW = md(8626),
+       KM = Mb(8625),
```

#### 15. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L170` → after: `L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L135) · [Before (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L170)

```diff
-       oW = md(8251),
+       RM = Mb(8593),
```

#### 16. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L172-L176` → after: `L137-L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L137-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L137-L140) · [Before (L172-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L172-L176)

```diff
-       qW = md(8639),
-       HW = md(8647),
-       yW = md(8652),
-       bW = md(8139),
-       TW = md(8554),
+       cM = Mb(8640),
+       YM = Mb(8645),
+       ZM = Mb(8651),
+       fM = Mb(8654),
```

#### 17. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L178-L186` → after: `L142-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L142-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L142-L148) · [Before (L178-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L178-L186)

```diff
-       YW = md(8661),
-       gW = md(8663),
-       wW = md(8672),
-       aW = md(8678),
-       EW = md(8684),
-       JW = md(8686),
-       UW = md(8690),
-       xW = md(7723),
-       BW = md(8699),
+       WM = Mb(8659),
+       JM = Mb(8665),
+       SM = Mb(8671),
+       NM = Mb(8679),
+       vM = Mb(8685),
+       QM = Mb(8694),
+       GM = Mb(8703),
```

#### 18. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L188-L189` → after: `L150-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L150-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L150-L152) · [Before (L188-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L188-L189)

```diff
-       sW = md(8717),
-       uW = md(8726),
+       aM = Mb(8716),
+       iM = Mb(8725),
+       uM = Mb(8727),
```

#### 19. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L191` → after: `L154-L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L154-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L154-L175) · [Before (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L191)

```diff
-       iW = md(8737),
+       PM = Mb(8741),
+       nM = Mb(8752),
+       yM = Mb(8758),
+       oM = Mb(8765),
+       TM = Mb(8772),
+       kM = Mb(8778),
+       be = Mb(8787),
+       we = Mb(8793),
+       Me = Mb(8800),
+       ee = Mb(8808),
+       He = Mb(8816),
+       pe = Mb(8823),
+       Ve = Mb(8829),
+       ge = Mb(8835),
+       le = Mb(8840),
+       Le = Mb(8848),
+ ... (6 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L193-L220` → after: `L177-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L177-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L177-L178) · [Before (L193-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L193-L220)

```diff
-       rW = md(8754),
-       GW = md(8757),
-       nW = md(8766),
-       LW = md(8773),
-       PW = md(8741),
-       zW = md(8777),
-       cW = md(8083),
-       jW = md(8784),
-       DW = md(8787),
-       eW = md(8790),
-       IW = md(8801),
-       lW = md(8799),
-       CW = md(8806),
-       ZW = md(8812),
-       kW = md(8816),
-       fW = md(8821),
- ... (12 more removed lines; see GitHub link above)
+       Be = Mb(8878),
+       se = Mb(8882),
```

#### 21. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L222-L227` → after: `L180-L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L180-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L180-L187) · [Before (L222-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L222-L227)

```diff
-       oF = md(8893),
-       NF = md(8897),
-       qF = md(8903),
-       HF = md(8910),
-       yF = md(8919),
-       bF = md(8927),
+       he = Mb(8894),
+       ze = Mb(8900),
+       Xe = Mb(8905),
+       xe = Mb(8911),
+       je = Mb(8920),
+       Ke = Mb(7982),
+       re = Mb(8922),
+       Re = Mb(8931),
```

#### 22. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L231-L237` → after: `L192-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L192-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L192-L197) · [Before (L231-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L231-L237)

```diff
-       gF = md(8952),
-       wF = md(8161),
-       aF = md(8954),
-       EF = md(8961),
-       JF = md(8966),
-       UF = md(8974),
-       xF = md(8980),
+       fe = Mb(8960),
+       Ae = Mb(8965),
+       We = Mb(8972),
+       Je = Mb(8978),
+       Se = Mb(8985),
+       Ne = Mb(8957),
```

#### 23. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L239-L241` → after: `L199-L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L199-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L199-L202) · [Before (L239-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L239-L241)

```diff
-       SF = md(8994),
-       sF = md(9003),
-       uF = md(9008),
+       Qe = Mb(8295),
+       Ge = Mb(8990),
+       qe = Mb(8992),
+       ae = Mb(9001),
```

#### 24. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L247-L257` → after: `L209-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L209-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L209-L218) · [Before (L247-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L247-L257)

```diff
-       nF = md(9041),
-       LF = md(9050),
-       PF = md(9057),
-       zF = md(9062),
-       cF = md(9066),
-       jF = md(9074),
-       DF = md(9079),
-       eF = md(9081),
-       IF = md(9083),
-       lF = md(9090),
-       CF = md(9092),
+       oe = Mb(9044),
+       Te = Mb(9052),
+       ke = Mb(9056),
+       bH = Mb(9065),
+       wH = Mb(9073),
+       MH = Mb(9076),
+       eH = Mb(9082),
+       HH = Mb(9089),
+       pH = Mb(8789),
+       VH = Mb(9091),
```

#### 25. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L260-L268` → after: `L221-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L221-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L221-L268) · [Before (L260-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L260-L268)

```diff
-       fF = md(9104),
-       MF = md(9107),
-       dR = md(9110),
-       OR = md(9116),
-       mR = md(9122),
-       WR = md(9131),
-       FR = md(9133),
-       RR = md(9141),
-       XR = md(9148);
+       LH = Mb(9106),
+       IH = Mb(9109),
+       OH = Mb(9111),
+       UH = Mb(9120),
+       tH = Mb(9129),
+       CH = Mb(9134),
+       EH = Mb(9142),
+       FH = Mb(9149),
+       BH = Mb(9153),
+       sH = Mb(9158),
+       mH = Mb(9160),
+       hH = Mb(8366),
+       zH = Mb(9164),
+       XH = Mb(9170),
+       xH = Mb(9178),
+       jH = Mb(9181),
+ ... (32 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L270-L274` → after: `L270-L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L270-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L270-L274) · [Before (L270-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L270-L274)

```diff
-       add: Wd.f,
-       "alarm-clock": Fd.e,
-       "angle-double-up": Rd.e,
-       "angle-down": Xd.g,
-       "angle-up": Kd.g,
+       add: eb.g,
+       "alarm-clock": Hb.g,
+       "angle-double-up": pb.g,
+       "angle-down": Vb.f,
+       "angle-up": gb.f,
```

#### 27. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L276-L277` → after: `L276-L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L276-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L276-L277) · [Before (L276-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L276-L277)

```diff
-       archway: vd.e,
-       "arrow-down-to-line": Qd.e,
+       archway: Lb.f,
+       "arrow-down-to-line": Ib.f,
```

#### 28. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L279-L281` → after: `L279-L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L279-L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L279-L281) · [Before (L279-L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L279-L281)

```diff
-       "arrow-right": od.c,
-       "arrow-up": Nd.h,
-       "arrow-up-from-line": qd.d,
+       "arrow-right": Ub.i,
+       "arrow-up": tb.f,
+       "arrow-up-from-line": Cb.c,
```

#### 29. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L283` → after: `L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L283) · [Before (L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L283)

```diff
-       arrows: yd.c,
+       arrows: Fb.g,
```

#### 30. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L288-L290` → after: `L288-L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L288-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L288-L290) · [Before (L288-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L288-L290)

```diff
-       award: gd.h,
-       backpack: wd.h,
-       ban: Ed.e,
+       award: zb.f,
+       backpack: Xb.f,
+       ban: xb.h,
```

#### 31. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L292-L295` → after: `L292-L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L292-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L292-L295) · [Before (L292-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L292-L295)

```diff
-       bee: Ud.f,
-       bell: xd.d,
-       bells: Bd.g,
-       "block-question": Sd.f,
+       bee: Kb.g,
+       bell: rb.f,
+       bells: Rb.f,
+       "block-question": Db.h,
```

#### 32. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L297-L304` → after: `L297-L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L297-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L297-L304) · [Before (L297-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L297-L304)

```diff
-       boot: ud.f,
-       calendar: Vd.h,
-       "camera-alt": Ad.d,
-       "candy-cane": rd.f,
-       "caret-down": Gd.d,
-       "caret-left": nd.d,
-       "caret-right": Ld.f,
-       "caret-up": Pd.e,
+       boot: Yb.e,
+       calendar: Zb.f,
+       "camera-alt": fb.e,
+       "candy-cane": Ab.d,
+       "caret-down": Wb.f,
+       "caret-left": Jb.e,
+       "caret-right": Sb.e,
+       "caret-up": Nb.h,
```

#### 33. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L306-L311` → after: `L306-L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L306-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L306-L311) · [Before (L306-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L306-L311)

```diff
-       check: cd.d,
-       "chess-knight": jd.d,
-       "chess-rook": Dd.g,
-       "child-reaching": ed.d,
-       circle: Id.e,
-       "circle-check": ld.f,
+       check: Qb.e,
+       "chess-knight": Gb.f,
+       "chess-rook": qb.i,
+       "child-reaching": ab.e,
+       circle: ib.c,
+       "circle-check": ub.e,
```

#### 34. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L314-L315` → after: `L314-L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L314-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L314-L315) · [Before (L314-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L314-L315)

```diff
-       "circle-question": kd.h,
-       "circle-xmark": fd.f,
+       "circle-question": nb.d,
+       "circle-xmark": yb.g,
```

#### 35. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L318-L319` → after: `L318-L319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L318-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L318-L319) · [Before (L318-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L318-L319)

```diff
-       code: OO.h,
-       cog: mO.i,
+       code: kb.d,
+       cog: bw.d,
```

#### 36. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L323-L324` → after: `L323-L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L323-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L323-L324) · [Before (L323-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L323-L324)

```diff
-       commenting: XO.f,
-       compress: KO.i,
+       commenting: Hw.d,
+       compress: pw.c,
```

#### 37. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L326-L338` → after: `L326-L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L326-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L326-L338) · [Before (L326-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L326-L338)

```diff
-       cookie: vO.g,
-       copy: QO.e,
-       crosshairs: tO.f,
-       crown: oO.i,
-       cube: NO.f,
-       cubes: qO.d,
-       cut: HO.f,
-       deer: yO.d,
-       dice: bO.d,
-       dizzy: TO.f,
-       "door-closed": pO.g,
-       "door-open": YO.h,
-       download: gO.e,
+       cookie: gw.i,
+       copy: lw.i,
+       crosshairs: Lw.h,
+       crown: Iw.e,
+       cube: Ow.d,
+       cubes: Uw.e,
+       cut: tw.c,
+       deer: Cw.e,
+       dice: Ew.h,
+       dizzy: Fw.i,
+       "door-closed": Bw.e,
+       "door-open": sw.f,
+       download: mw.g,
```

#### 38. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L341` → after: `L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L341) · [Before (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L341)

```diff
-       "ellipsis-h": EO.e,
+       "ellipsis-h": Xw.g,
```

#### 39. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L343-L345` → after: `L343-L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L343-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L343-L345) · [Before (L343-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L343-L345)

```diff
-       "exclamation-triangle": UO.i,
-       expand: xO.g,
-       "external-link": BO.f,
+       "exclamation-triangle": jw.f,
+       expand: Kw.e,
+       "external-link": rw.e,
```

#### 40. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L347` → after: `L347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L347) · [Before (L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L347)

```diff
-       "eye-slash": uO.f,
+       "eye-slash": Yw.e,
```

#### 41. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L349` → after: `L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L349) · [Before (L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L349)

```diff
-       "face-diagonal-mouth": VO.g,
+       "face-diagonal-mouth": Zw.f,
```

#### 42. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L351` → after: `L351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L351) · [Before (L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L351)

```diff
-       "face-raised-eyebrow": AO.h,
+       "face-raised-eyebrow": Aw.f,
```

#### 43. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L353-L354` → after: `L353-L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L353-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L353-L354) · [Before (L353-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L353-L354)

```diff
-       "face-worried": GO.g,
-       "feather-alt": nO.f,
+       "face-worried": Jw.h,
+       "feather-alt": Sw.i,
```

#### 44. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L356-L357` → after: `L356-L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L356-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L356-L357) · [Before (L356-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L356-L357)

```diff
-       "file-alt": PO.e,
-       "file-clipboard": zO.i,
+       "file-alt": vw.h,
+       "file-clipboard": Qw.h,
```

#### 45. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L359-L368` → after: `L359-L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L359-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L359-L368) · [Before (L359-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L359-L368)

```diff
-       "file-text": jO.c,
-       film: DO.g,
-       fire: eO.g,
-       "fist-raised": IO.g,
-       flag: lO.g,
-       folder: CO.f,
-       "folder-image": ZO.e,
-       "folder-open": kO.e,
-       gamepad: fO.d,
-       "gamepad-modern": MO.g,
+       "file-text": qw.h,
+       film: aw.i,
+       fire: iw.f,
+       "fist-raised": uw.d,
+       flag: dw.e,
+       folder: Pw.h,
+       "folder-image": nw.d,
+       "folder-open": yw.g,
+       gamepad: ow.h,
+       "gamepad-modern": Tw.e,
```

#### 46. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L370` → after: `L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L370) · [Before (L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L370)

```diff
-       gavel: Om.f,
+       gavel: bM.d,
```

#### 47. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L372-L377` → after: `L372-L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L372-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L372-L377) · [Before (L372-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L372-L377)

```diff
-       gem: Wm.f,
-       gift: Fm.f,
-       "gingerbread-man": Rm.e,
-       globe: Xm.d,
-       "grid-2": Km.h,
-       hammer: hm.g,
+       gem: MM.e,
+       gift: eM.g,
+       "gingerbread-man": HM.i,
+       globe: pM.g,
+       "grid-2": VM.f,
+       hammer: gM.e,
```

#### 48. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L381-L386` → after: `L381-L386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L381-L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L381-L386) · [Before (L381-L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L381-L386)

```diff
-       "hand-point-left": Nm.e,
-       "hand-wave": qm.i,
-       "hands-clapping": Hm.h,
-       "hat-santa": ym.g,
-       "hat-winter": bm.c,
-       "hat-witch": Tm.c,
+       "hand-point-left": OM.h,
+       "hand-wave": UM.h,
+       "hands-clapping": tM.f,
+       "hat-santa": CM.e,
+       "hat-winter": EM.e,
+       "hat-witch": FM.i,
```

#### 49. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L388-L389` → after: `L388-L389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L388-L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L388-L389) · [Before (L388-L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L388-L389)

```diff
-       heart: Ym.e,
-       "heart-music-camera-bolt": gm.g,
+       heart: sM.g,
+       "heart-music-camera-bolt": mM.d,
```

#### 50. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L391` → after: `L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L391) · [Before (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L391)

```diff
-       "horse-saddle": am.f,
+       "horse-saddle": zM.h,
```

#### 51. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L393` → after: `L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L393) · [Before (L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L393)

```diff
-       "hourglass-clock": Jm.d,
+       "hourglass-clock": xM.f,
```

#### 52. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L395-L397` → after: `L395-L397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L395-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L395-L397) · [Before (L395-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L395-L397)

```diff
-       house: XR.g,
-       "ice-skate": xm.g,
-       icicles: Bm.d,
+       house: Hp.h,
+       "ice-skate": KM.c,
+       icicles: rM.g,
```

#### 53. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L400-L407` → after: `L400-L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L400-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L400-L407) · [Before (L400-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L400-L407)

```diff
-       "image-slash": um.e,
-       "info-circle": Vm.e,
-       joystick: im.f,
-       "lamp-street": Am.e,
-       "layer-group": rm.c,
-       "left-from-bracket": Gm.g,
-       lightbulb: nm.d,
-       link: Lm.h,
+       "image-slash": cM.h,
+       "info-circle": YM.d,
+       joystick: ZM.i,
+       "lamp-street": fM.d,
+       "layer-group": AM.f,
+       "left-from-bracket": WM.d,
+       lightbulb: JM.h,
+       link: SM.e,
```

#### 54. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L409` → after: `L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L409) · [Before (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L409)

```diff
-       "list-squares": zm.h,
+       "list-squares": vM.f,
```

#### 55. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L415-L416` → after: `L415-L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L415-L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L415-L416) · [Before (L415-L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L415-L416)

```diff
-       "magnifying-glass-plus": lm.e,
-       "hand-holding-box": Cm.f,
+       "magnifying-glass-plus": uM.d,
+       "hand-holding-box": dM.e,
```

#### 56. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L419-L420` → after: `L419-L420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L419-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L419-L420) · [Before (L419-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L419-L420)

```diff
-       "map-marker-times": fm.f,
-       "map-marker-xmark": Mm.g,
+       "map-marker-times": yM.h,
+       "map-marker-xmark": oM.f,
```

#### 57. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L423` → after: `L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L423) · [Before (L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L423)

```diff
-       "minus-square": mW.f,
+       "minus-square": be.e,
```

#### 58. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L425-L432` → after: `L425-L432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L425-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L425-L432) · [Before (L425-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L425-L432)

```diff
-       mouse: FW.e,
-       "mug-hot": RW.e,
-       music: XW.e,
-       "music-slash": KW.g,
-       navicon: hW.d,
-       palette: vW.e,
-       pants: QW.c,
-       "party-horn": tW.d,
+       mouse: Me.i,
+       "mug-hot": ee.f,
+       music: He.f,
+       "music-slash": pe.e,
+       navicon: Ve.i,
+       palette: ge.d,
+       pants: le.d,
+       "party-horn": Le.g,
```

#### 59. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L434-L437` → after: `L434-L437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L434-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L434-L437) · [Before (L434-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L434-L437)

```diff
-       pause: NW.g,
-       paw: qW.g,
-       pen: HW.g,
-       "pen-field": yW.g,
+       pause: Oe.d,
+       paw: Ue.i,
+       pen: te.f,
+       "pen-field": Ce.f,
```

#### 60. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L440-L441` → after: `L440-L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L440-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L440-L441) · [Before (L440-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L440-L441)

```diff
-       "person-arrow-down-to-line": pW.i,
-       "person-arrow-up-from-line": YW.i,
+       "person-arrow-down-to-line": Be.d,
+       "person-arrow-up-from-line": se.f,
```

#### 61. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L443-L447` → after: `L443-L447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L443-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L443-L447) · [Before (L443-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L443-L447)

```diff
-       "person-military-pointing": wW.d,
-       "person-skiing": aW.g,
-       "person-running": EW.f,
-       "person-walking": JW.f,
-       play: UW.c,
+       "person-military-pointing": he.f,
+       "person-skiing": ze.h,
+       "person-running": Xe.h,
+       "person-walking": xe.h,
+       play: je.h,
```

#### 62. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L451-L455` → after: `L451-L455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L451-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L451-L455) · [Before (L451-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L451-L455)

```diff
-       rainbow: sW.g,
-       "ranking-star": uW.f,
-       recycle: VW.i,
-       "redo-alt": iW.h,
-       refresh: AW.e,
+       rainbow: De.h,
+       "ranking-star": ce.h,
+       recycle: Ye.g,
+       "redo-alt": Ze.f,
+       refresh: fe.i,
```

#### 63. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L457-L459` → after: `L457-L459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L457-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L457-L459) · [Before (L457-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L457-L459)

```diff
-       "rocket-launch": GW.e,
-       "rotate-forward": nW.c,
-       "rotate-left": LW.e,
+       "rocket-launch": We.f,
+       "rotate-forward": Je.e,
+       "rotate-left": Se.g,
```

#### 64. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L461` → after: `L461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L461) · [Before (L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L461)

```diff
-       scarf: zW.g,
+       scarf: ve.i,
```

#### 65. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L463` → after: `L463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L463) · [Before (L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L463)

```diff
-       search: jW.h,
+       search: Ge.f,
```

#### 66. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L465-L466` → after: `L465-L466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L465-L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L465-L466) · [Before (L465-L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L465-L466)

```diff
-       "shield-alt": eW.f,
-       "shield-blank": IW.h,
+       "shield-alt": ae.e,
+       "shield-blank": ie.f,
```

#### 67. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L468-L478` → after: `L468-L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L468-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L468-L478) · [Before (L468-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L468-L478)

```diff
-       shirt: CW.g,
-       shoe: ZW.e,
-       "shopping-cart": kW.d,
-       "sign-out-alt": fW.i,
-       skull: MW.e,
-       smile: dF.i,
-       snooze: OF.f,
-       snowflake: mF.e,
-       snowman: WF.f,
-       sparkle: FF.c,
-       "square-dashed": XF.h,
+       shirt: de.e,
+       shoe: Pe.d,
+       "shopping-cart": ne.e,
+       "sign-out-alt": ye.c,
+       skull: oe.f,
+       smile: Te.f,
+       snooze: ke.g,
+       snowflake: bH.d,
+       snowman: wH.h,
+       sparkle: MH.f,
+       "square-dashed": HH.f,
```

#### 68. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L480-L481` → after: `L480-L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L480-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L480-L481) · [Before (L480-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L480-L481)

```diff
-       star: hF.c,
-       "star-christmas": RF.h,
+       star: VH.d,
+       "star-christmas": eH.g,
```

#### 69. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L483-L486` → after: `L483-L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L483-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L483-L486) · [Before (L483-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L483-L486)

```diff
-       store: QF.f,
-       subtract: tF.d,
-       "sun-bright": oF.h,
-       swords: NF.d,
+       store: lH.d,
+       subtract: LH.g,
+       "sun-bright": IH.e,
+       swords: OH.e,
```

#### 70. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L488-L493` → after: `L488-L493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L488-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L488-L493) · [Before (L488-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L488-L493)

```diff
-       "t-shirt": RR.b,
-       "tachometer-alt": HF.g,
-       "tachometer-alt-fast": yF.f,
-       "teddy-bear": bF.e,
-       terminal: TF.e,
-       "trash-alt": pF.d,
+       "t-shirt": ep.c,
+       "tachometer-alt": tH.f,
+       "tachometer-alt-fast": CH.g,
+       "teddy-bear": EH.d,
+       terminal: FH.f,
+       "trash-alt": BH.g,
```

#### 71. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L495` → after: `L495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L495) · [Before (L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L495)

```diff
-       "tree-christmas": gF.h,
+       "tree-christmas": mH.g,
```

#### 72. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L497-L502` → after: `L497-L502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L497-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L497-L502) · [Before (L497-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L497-L502)

```diff
-       trophy: aF.d,
-       truck: EF.h,
-       tshirt: RR.e,
-       "up-from-bracket": JF.h,
-       upload: UF.f,
-       user: xF.i,
+       trophy: zH.f,
+       truck: XH.g,
+       tshirt: ep.g,
+       "up-from-bracket": xH.g,
+       upload: jH.g,
+       user: KH.e,
```

#### 73. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L504-L506` → after: `L504-L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L504-L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L504-L506) · [Before (L504-L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L504-L506)

```diff
-       "user-check": SF.e,
-       "user-clock": sF.f,
-       "user-friends": uF.d,
+       "user-check": RH.c,
+       "user-clock": DH.i,
+       "user-friends": cH.g,
```

#### 74. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L509-L516` → after: `L509-L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L509-L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L509-L516) · [Before (L509-L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L509-L516)

```diff
-       "user-magnifying-glass": AF.e,
-       "user-minus": rF.d,
-       "user-plus": GF.h,
-       "user-secret": nF.g,
-       "user-slash": LF.e,
-       "user-unlock": PF.i,
-       "users-crown": zF.e,
-       "users-gear": cF.g,
+       "user-magnifying-glass": fH.c,
+       "user-minus": AH.g,
+       "user-plus": WH.g,
+       "user-secret": JH.f,
+       "user-slash": SH.i,
+       "user-unlock": NH.f,
+       "users-crown": vH.h,
+       "users-gear": QH.f,
```

#### 75. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L518` → after: `L518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L518) · [Before (L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L518)

```diff
-       "video-camera": DF.i,
+       "video-camera": qH.g,
```

#### 76. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L520` → after: `L520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L520) · [Before (L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L520)

```diff
-       "volume-down": IF.d,
+       "volume-down": iH.h,
```

#### 77. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L522-L524` → after: `L522-L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L522-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L522-L524) · [Before (L522-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L522-L524)

```diff
-       "volume-medium": CF.e,
-       "volume-slash": ZF.f,
-       warning: kF.e,
+       "volume-medium": dH.g,
+       "volume-slash": PH.d,
+       warning: nH.f,
```

#### 78. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L526-L531` → after: `L526-L531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L526-L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/icons-solid.js#L526-L531) · [Before (L526-L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/icons-solid.js#L526-L531)

```diff
-       "wifi-3": MF.c,
-       "wifi-strong": dR.h,
-       wrench: OR.h,
-       x: mR.d,
-       xmark: WR.f,
-       zap: FR.f
+       "wifi-3": oH.h,
+       "wifi-strong": TH.d,
+       wrench: kH.g,
+       x: bp.f,
+       xmark: wp.h,
+       zap: Mp.d
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/itemSprites.js` (yteou.5361c997 → welxxc.ffac0572)

- **File**: `bundles/bloxd.io/chunks/js/itemSprites.js` (1734 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c)

#### 1. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L4)

```diff
-   55140: (dd, Od, md) => {
+   54948: (bb, wb, Mb) => {
```

#### 2. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L24)

```diff
-       return null !== (Od = hd.get(dd)) && void 0 !== Od ? Od : ""
+       return null !== (wb = lb.get(bb)) && void 0 !== wb ? wb : ""
```

#### 3. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L29` → after: `L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L29) · [Before (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L29)

```diff
-       return null === Od ? null : "" === Od ? md(53642) : md(55149)(`./${Od}.png`)
+       return null === wb ? null : "" === wb ? Mb(53386) : Mb(54957)(`./${wb}.png`)
```

#### 4. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L32)

```diff
-   55149: (dd, Od, md) => {
+   54957: (bb, wb, Mb) => {
```

#### 5. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L34-L1760` → after: `L34-L1760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L34-L1760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L34-L1760) · [Before (L34-L1760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L34-L1760)

```diff
-       "./67.png": 55157,
-       "./67_projectile_base.png": 55160,
-       "./67_projectile_boosted.png": 55163,
-       "./AK-47.png": 55166,
-       "./AWP.png": 55173,
-       "./Block-19.png": 55179,
-       "./DMR.png": 55183,
-       "./Deagle.png": 55185,
-       "./Double-barreled.png": 55194,
-       "./FMR.png": 55200,
-       "./GPMG.png": 55209,
-       "./M16.png": 55213,
-       "./M1911.png": 55217,
-       "./MP40.png": 55224,
-       "./Mini Izu.png": 55233,
-       "./Minigun.png": 55242,
- ... (1711 more removed lines; see GitHub link above)
+       "./67.png": 54960,
+       "./67_projectile_base.png": 54969,
+       "./67_projectile_boosted.png": 54975,
+       "./AK-47.png": 54978,
+       "./AWP.png": 54986,
+       "./Block-19.png": 54991,
+       "./DMR.png": 54999,
+       "./Deagle.png": 55001,
+       "./Double-barreled.png": 55005,
+       "./FMR.png": 55010,
+       "./GPMG.png": 55019,
+       "./M16.png": 55026,
+       "./M1911.png": 55033,
+       "./MP40.png": 55035,
+       "./Mini Izu.png": 55044,
+       "./Minigun.png": 55051,
+ ... (1711 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1777` → after: `L1777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1777) · [Before (L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1777)

```diff
-     }, Fd.resolve = Rd, dd.exports = Fd, Fd.id = 55149
+     }, Hb.resolve = pb, bb.exports = Hb, Hb.id = 54957
```

#### 7. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1779` → after: `L1779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1779) · [Before (L1779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1779)

```diff
-   55157: (dd, Od, md) => {
+   54960: (bb, wb, Mb) => {
```

#### 8. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1782` → after: `L1782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1782) · [Before (L1782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1782)

```diff
-   55160: (dd, Od, md) => {
+   54969: (bb, wb, Mb) => {
```

#### 9. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1785` → after: `L1785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1785) · [Before (L1785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1785)

```diff
-   55163: (dd, Od, md) => {
+   54975: (bb, wb, Mb) => {
```

#### 10. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1788` → after: `L1788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1788) · [Before (L1788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1788)

```diff
-   55166: (dd, Od, md) => {
+   54978: (bb, wb, Mb) => {
```

#### 11. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1791` → after: `L1791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1791) · [Before (L1791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1791)

```diff
-   55173: (dd, Od, md) => {
+   54986: (bb, wb, Mb) => {
```

#### 12. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1794` → after: `L1794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1794) · [Before (L1794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1794)

```diff
-   55179: (dd, Od, md) => {
+   54991: (bb, wb, Mb) => {
```

#### 13. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1797` → after: `L1797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1797) · [Before (L1797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1797)

```diff
-   55183: (dd, Od, md) => {
+   54999: (bb, wb, Mb) => {
```

#### 14. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1800` → after: `L1800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1800) · [Before (L1800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1800)

```diff
-   55185: (dd, Od, md) => {
+   55001: (bb, wb, Mb) => {
```

#### 15. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1803` → after: `L1803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1803) · [Before (L1803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1803)

```diff
-   55194: (dd, Od, md) => {
+   55005: (bb, wb, Mb) => {
```

#### 16. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1806` → after: `L1806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1806) · [Before (L1806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1806)

```diff
-   55200: (dd, Od, md) => {
+   55010: (bb, wb, Mb) => {
```

#### 17. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1809` → after: `L1809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1809) · [Before (L1809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1809)

```diff
-   55209: (dd, Od, md) => {
+   55019: (bb, wb, Mb) => {
```

#### 18. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1812` → after: `L1812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1812) · [Before (L1812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1812)

```diff
-   55213: (dd, Od, md) => {
+   55026: (bb, wb, Mb) => {
```

#### 19. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1815` → after: `L1815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1815) · [Before (L1815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1815)

```diff
-   55217: (dd, Od, md) => {
+   55033: (bb, wb, Mb) => {
```

#### 20. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1818` → after: `L1818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1818) · [Before (L1818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1818)

```diff
-   55224: (dd, Od, md) => {
+   55035: (bb, wb, Mb) => {
```

#### 21. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1821` → after: `L1821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1821) · [Before (L1821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1821)

```diff
-   55233: (dd, Od, md) => {
+   55044: (bb, wb, Mb) => {
```

#### 22. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1824` → after: `L1824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1824) · [Before (L1824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1824)

```diff
-   55242: (dd, Od, md) => {
+   55051: (bb, wb, Mb) => {
```

#### 23. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1827` → after: `L1827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1827) · [Before (L1827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1827)

```diff
-   55245: (dd, Od, md) => {
+   55060: (bb, wb, Mb) => {
```

#### 24. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1830` → after: `L1830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1830) · [Before (L1830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1830)

```diff
-   55253: (dd, Od, md) => {
+   55068: (bb, wb, Mb) => {
```

#### 25. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1833` → after: `L1833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1833) · [Before (L1833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1833)

```diff
-   55259: (dd, Od, md) => {
+   55075: (bb, wb, Mb) => {
```

#### 26. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1836` → after: `L1836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1836) · [Before (L1836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1836)

```diff
-   55261: (dd, Od, md) => {
+   55077: (bb, wb, Mb) => {
```

#### 27. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1839` → after: `L1839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1839) · [Before (L1839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1839)

```diff
-   55267: (dd, Od, md) => {
+   55080: (bb, wb, Mb) => {
```

#### 28. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1842` → after: `L1842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1842) · [Before (L1842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1842)

```diff
-   55275: (dd, Od, md) => {
+   55082: (bb, wb, Mb) => {
```

#### 29. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1845` → after: `L1845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1845) · [Before (L1845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1845)

```diff
-   55278: (dd, Od, md) => {
+   55089: (bb, wb, Mb) => {
```

#### 30. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1848` → after: `L1848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1848) · [Before (L1848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1848)

```diff
-   55284: (dd, Od, md) => {
+   55091: (bb, wb, Mb) => {
```

#### 31. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1851` → after: `L1851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1851) · [Before (L1851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1851)

```diff
-   55293: (dd, Od, md) => {
+   55095: (bb, wb, Mb) => {
```

#### 32. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1854` → after: `L1854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1854) · [Before (L1854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1854)

```diff
-   55296: (dd, Od, md) => {
+   55102: (bb, wb, Mb) => {
```

#### 33. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1857` → after: `L1857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1857) · [Before (L1857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1857)

```diff
-   55299: (dd, Od, md) => {
+   55108: (bb, wb, Mb) => {
```

#### 34. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1860` → after: `L1860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1860) · [Before (L1860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1860)

```diff
-   55304: (dd, Od, md) => {
+   55115: (bb, wb, Mb) => {
```

#### 35. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1863` → after: `L1863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1863) · [Before (L1863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1863)

```diff
-   55309: (dd, Od, md) => {
+   55118: (bb, wb, Mb) => {
```

#### 36. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1866` → after: `L1866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1866) · [Before (L1866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1866)

```diff
-   55312: (dd, Od, md) => {
+   55123: (bb, wb, Mb) => {
```

#### 37. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1869` → after: `L1869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1869) · [Before (L1869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1869)

```diff
-   55319: (dd, Od, md) => {
+   55128: (bb, wb, Mb) => {
```

#### 38. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1872` → after: `L1872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1872) · [Before (L1872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1872)

```diff
-   55326: (dd, Od, md) => {
+   55136: (bb, wb, Mb) => {
```

#### 39. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1875` → after: `L1875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1875) · [Before (L1875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1875)

```diff
-   55332: (dd, Od, md) => {
+   55143: (bb, wb, Mb) => {
```

#### 40. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1878` → after: `L1878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1878) · [Before (L1878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1878)

```diff
-   55334: (dd, Od, md) => {
+   55145: (bb, wb, Mb) => {
```

#### 41. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1881` → after: `L1881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1881) · [Before (L1881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1881)

```diff
-   55339: (dd, Od, md) => {
+   55150: (bb, wb, Mb) => {
```

#### 42. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1884` → after: `L1884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1884) · [Before (L1884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1884)

```diff
-   55348: (dd, Od, md) => {
+   55154: (bb, wb, Mb) => {
```

#### 43. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1887` → after: `L1887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1887) · [Before (L1887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1887)

```diff
-   55351: (dd, Od, md) => {
+   55156: (bb, wb, Mb) => {
```

#### 44. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1890` → after: `L1890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1890) · [Before (L1890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1890)

```diff
-   55360: (dd, Od, md) => {
+   55161: (bb, wb, Mb) => {
```

#### 45. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1893` → after: `L1893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1893) · [Before (L1893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1893)

```diff
-   55364: (dd, Od, md) => {
+   55167: (bb, wb, Mb) => {
```

#### 46. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1896` → after: `L1896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1896) · [Before (L1896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1896)

```diff
-   55372: (dd, Od, md) => {
+   55176: (bb, wb, Mb) => {
```

#### 47. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1899` → after: `L1899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1899) · [Before (L1899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1899)

```diff
-   55379: (dd, Od, md) => {
+   55184: (bb, wb, Mb) => {
```

#### 48. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1902` → after: `L1902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1902) · [Before (L1902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1902)

```diff
-   55383: (dd, Od, md) => {
+   55188: (bb, wb, Mb) => {
```

#### 49. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1905` → after: `L1905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1905) · [Before (L1905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1905)

```diff
-   55390: (dd, Od, md) => {
+   55193: (bb, wb, Mb) => {
```

#### 50. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1908` → after: `L1908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1908) · [Before (L1908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1908)

```diff
-   55394: (dd, Od, md) => {
+   55195: (bb, wb, Mb) => {
```

#### 51. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1911` → after: `L1911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1911) · [Before (L1911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1911)

```diff
-   55397: (dd, Od, md) => {
+   55197: (bb, wb, Mb) => {
```

#### 52. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1914` → after: `L1914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1914) · [Before (L1914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1914)

```diff
-   55405: (dd, Od, md) => {
+   55202: (bb, wb, Mb) => {
```

#### 53. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1917` → after: `L1917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1917) · [Before (L1917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1917)

```diff
-   55411: (dd, Od, md) => {
+   55205: (bb, wb, Mb) => {
```

#### 54. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1920` → after: `L1920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1920) · [Before (L1920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1920)

```diff
-   55416: (dd, Od, md) => {
+   55207: (bb, wb, Mb) => {
```

#### 55. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1923` → after: `L1923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1923) · [Before (L1923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1923)

```diff
-   55425: (dd, Od, md) => {
+   55211: (bb, wb, Mb) => {
```

#### 56. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1926` → after: `L1926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1926) · [Before (L1926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1926)

```diff
-   55427: (dd, Od, md) => {
+   55215: (bb, wb, Mb) => {
```

#### 57. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1929` → after: `L1929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1929) · [Before (L1929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1929)

```diff
-   55436: (dd, Od, md) => {
+   55224: (bb, wb, Mb) => {
```

#### 58. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1932` → after: `L1932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1932) · [Before (L1932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1932)

```diff
-   55440: (dd, Od, md) => {
+   55231: (bb, wb, Mb) => {
```

#### 59. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1935` → after: `L1935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1935) · [Before (L1935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1935)

```diff
-   55446: (dd, Od, md) => {
+   55236: (bb, wb, Mb) => {
```

#### 60. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1938` → after: `L1938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1938) · [Before (L1938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1938)

```diff
-   55455: (dd, Od, md) => {
+   55245: (bb, wb, Mb) => {
```

#### 61. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1941` → after: `L1941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1941) · [Before (L1941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1941)

```diff
-   55457: (dd, Od, md) => {
+   55252: (bb, wb, Mb) => {
```

#### 62. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1944` → after: `L1944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1944) · [Before (L1944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1944)

```diff
-   55463: (dd, Od, md) => {
+   55258: (bb, wb, Mb) => {
```

#### 63. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1947` → after: `L1947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1947) · [Before (L1947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1947)

```diff
-   55467: (dd, Od, md) => {
+   55260: (bb, wb, Mb) => {
```

#### 64. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1950` → after: `L1950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1950) · [Before (L1950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1950)

```diff
-   55470: (dd, Od, md) => {
+   55268: (bb, wb, Mb) => {
```

#### 65. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1953` → after: `L1953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1953) · [Before (L1953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1953)

```diff
-   55478: (dd, Od, md) => {
+   55273: (bb, wb, Mb) => {
```

#### 66. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1956` → after: `L1956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1956) · [Before (L1956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1956)

```diff
-   55481: (dd, Od, md) => {
+   55276: (bb, wb, Mb) => {
```

#### 67. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1959` → after: `L1959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1959) · [Before (L1959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1959)

```diff
-   55488: (dd, Od, md) => {
+   55280: (bb, wb, Mb) => {
```

#### 68. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1962` → after: `L1962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1962) · [Before (L1962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1962)

```diff
-   55492: (dd, Od, md) => {
+   55286: (bb, wb, Mb) => {
```

#### 69. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1965` → after: `L1965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1965) · [Before (L1965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1965)

```diff
-   55497: (dd, Od, md) => {
+   55289: (bb, wb, Mb) => {
```

#### 70. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1968` → after: `L1968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1968) · [Before (L1968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1968)

```diff
-   55503: (dd, Od, md) => {
+   55298: (bb, wb, Mb) => {
```

#### 71. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1971` → after: `L1971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1971) · [Before (L1971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1971)

```diff
-   55508: (dd, Od, md) => {
+   55302: (bb, wb, Mb) => {
```

#### 72. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1974` → after: `L1974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1974) · [Before (L1974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1974)

```diff
-   55513: (dd, Od, md) => {
+   55309: (bb, wb, Mb) => {
```

#### 73. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1977` → after: `L1977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1977) · [Before (L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1977)

```diff
-   55518: (dd, Od, md) => {
+   55314: (bb, wb, Mb) => {
```

#### 74. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1980` → after: `L1980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1980) · [Before (L1980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1980)

```diff
-   55524: (dd, Od, md) => {
+   55319: (bb, wb, Mb) => {
```

#### 75. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1983` → after: `L1983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1983) · [Before (L1983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1983)

```diff
-   55533: (dd, Od, md) => {
+   55327: (bb, wb, Mb) => {
```

#### 76. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1986` → after: `L1986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1986) · [Before (L1986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1986)

```diff
-   55537: (dd, Od, md) => {
+   55329: (bb, wb, Mb) => {
```

#### 77. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1989` → after: `L1989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1989) · [Before (L1989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1989)

```diff
-   55546: (dd, Od, md) => {
+   55338: (bb, wb, Mb) => {
```

#### 78. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1992` → after: `L1992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1992) · [Before (L1992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1992)

```diff
-   55551: (dd, Od, md) => {
+   55342: (bb, wb, Mb) => {
```

#### 79. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1995` → after: `L1995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1995) · [Before (L1995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1995)

```diff
-   55553: (dd, Od, md) => {
+   55347: (bb, wb, Mb) => {
```

#### 80. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1998` → after: `L1998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L1998) · [Before (L1998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L1998)

```diff
-   55555: (dd, Od, md) => {
+   55352: (bb, wb, Mb) => {
```

#### 81. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2001` → after: `L2001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2001) · [Before (L2001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2001)

```diff
-   55561: (dd, Od, md) => {
+   55354: (bb, wb, Mb) => {
```

#### 82. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2004` → after: `L2004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2004) · [Before (L2004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2004)

```diff
-   55563: (dd, Od, md) => {
+   55361: (bb, wb, Mb) => {
```

#### 83. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2007` → after: `L2007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2007) · [Before (L2007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2007)

```diff
-   55570: (dd, Od, md) => {
+   55366: (bb, wb, Mb) => {
```

#### 84. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2010` → after: `L2010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2010) · [Before (L2010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2010)

```diff
-   55572: (dd, Od, md) => {
+   55370: (bb, wb, Mb) => {
```

#### 85. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2013` → after: `L2013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2013) · [Before (L2013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2013)

```diff
-   55581: (dd, Od, md) => {
+   55374: (bb, wb, Mb) => {
```

#### 86. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2016` → after: `L2016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2016) · [Before (L2016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2016)

```diff
-   55583: (dd, Od, md) => {
+   55377: (bb, wb, Mb) => {
```

#### 87. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2019` → after: `L2019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2019) · [Before (L2019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2019)

```diff
-   55586: (dd, Od, md) => {
+   55381: (bb, wb, Mb) => {
```

#### 88. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2022` → after: `L2022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2022) · [Before (L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2022)

```diff
-   55592: (dd, Od, md) => {
+   55386: (bb, wb, Mb) => {
```

#### 89. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2025` → after: `L2025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2025) · [Before (L2025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2025)

```diff
-   55595: (dd, Od, md) => {
+   55390: (bb, wb, Mb) => {
```

#### 90. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2028` → after: `L2028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2028) · [Before (L2028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2028)

```diff
-   55598: (dd, Od, md) => {
+   55398: (bb, wb, Mb) => {
```

#### 91. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2031` → after: `L2031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2031) · [Before (L2031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2031)

```diff
-   55605: (dd, Od, md) => {
+   55401: (bb, wb, Mb) => {
```

#### 92. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2034` → after: `L2034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2034) · [Before (L2034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2034)

```diff
-   55607: (dd, Od, md) => {
+   55406: (bb, wb, Mb) => {
```

#### 93. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2037` → after: `L2037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2037) · [Before (L2037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2037)

```diff
-   55610: (dd, Od, md) => {
+   55414: (bb, wb, Mb) => {
```

#### 94. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2040` → after: `L2040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2040) · [Before (L2040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2040)

```diff
-   55617: (dd, Od, md) => {
+   55417: (bb, wb, Mb) => {
```

#### 95. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2043` → after: `L2043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2043) · [Before (L2043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2043)

```diff
-   55624: (dd, Od, md) => {
+   55419: (bb, wb, Mb) => {
```

#### 96. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2046` → after: `L2046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2046) · [Before (L2046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2046)

```diff
-   55630: (dd, Od, md) => {
+   55425: (bb, wb, Mb) => {
```

#### 97. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2049` → after: `L2049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2049) · [Before (L2049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2049)

```diff
-   55637: (dd, Od, md) => {
+   55432: (bb, wb, Mb) => {
```

#### 98. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2052` → after: `L2052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2052) · [Before (L2052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2052)

```diff
-   55644: (dd, Od, md) => {
+   55441: (bb, wb, Mb) => {
```

#### 99. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2055` → after: `L2055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2055) · [Before (L2055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2055)

```diff
-   55653: (dd, Od, md) => {
+   55443: (bb, wb, Mb) => {
```

#### 100. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2058` → after: `L2058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2058) · [Before (L2058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2058)

```diff
-   55656: (dd, Od, md) => {
+   55449: (bb, wb, Mb) => {
```

#### 101. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2061` → after: `L2061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2061) · [Before (L2061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2061)

```diff
-   55661: (dd, Od, md) => {
+   55453: (bb, wb, Mb) => {
```

#### 102. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2064` → after: `L2064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2064) · [Before (L2064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2064)

```diff
-   55668: (dd, Od, md) => {
+   55457: (bb, wb, Mb) => {
```

#### 103. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2067` → after: `L2067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2067) · [Before (L2067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2067)

```diff
-   55672: (dd, Od, md) => {
+   55463: (bb, wb, Mb) => {
```

#### 104. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2070` → after: `L2070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2070) · [Before (L2070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2070)

```diff
-   55677: (dd, Od, md) => {
+   55469: (bb, wb, Mb) => {
```

#### 105. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2073` → after: `L2073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2073) · [Before (L2073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2073)

```diff
-   55684: (dd, Od, md) => {
+   55474: (bb, wb, Mb) => {
```

#### 106. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2076` → after: `L2076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2076) · [Before (L2076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2076)

```diff
-   55687: (dd, Od, md) => {
+   55481: (bb, wb, Mb) => {
```

#### 107. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2079` → after: `L2079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2079) · [Before (L2079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2079)

```diff
-   55695: (dd, Od, md) => {
+   55484: (bb, wb, Mb) => {
```

#### 108. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2082` → after: `L2082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2082) · [Before (L2082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2082)

```diff
-   55701: (dd, Od, md) => {
+   55491: (bb, wb, Mb) => {
```

#### 109. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2085` → after: `L2085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2085) · [Before (L2085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2085)

```diff
-   55703: (dd, Od, md) => {
+   55498: (bb, wb, Mb) => {
```

#### 110. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2088` → after: `L2088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2088) · [Before (L2088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2088)

```diff
-   55706: (dd, Od, md) => {
+   55505: (bb, wb, Mb) => {
```

#### 111. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2091` → after: `L2091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2091) · [Before (L2091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2091)

```diff
-   55713: (dd, Od, md) => {
+   55513: (bb, wb, Mb) => {
```

#### 112. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2094` → after: `L2094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2094) · [Before (L2094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2094)

```diff
-   55719: (dd, Od, md) => {
+   55515: (bb, wb, Mb) => {
```

#### 113. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2097` → after: `L2097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2097) · [Before (L2097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2097)

```diff
-   55721: (dd, Od, md) => {
+   55519: (bb, wb, Mb) => {
```

#### 114. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2100` → after: `L2100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2100) · [Before (L2100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2100)

```diff
-   55725: (dd, Od, md) => {
+   55528: (bb, wb, Mb) => {
```

#### 115. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2103` → after: `L2103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2103) · [Before (L2103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2103)

```diff
-   55732: (dd, Od, md) => {
+   55530: (bb, wb, Mb) => {
```

#### 116. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2106` → after: `L2106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2106) · [Before (L2106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2106)

```diff
-   55738: (dd, Od, md) => {
+   55534: (bb, wb, Mb) => {
```

#### 117. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2109` → after: `L2109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2109) · [Before (L2109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2109)

```diff
-   55741: (dd, Od, md) => {
+   55541: (bb, wb, Mb) => {
```

#### 118. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2112` → after: `L2112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2112) · [Before (L2112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2112)

```diff
-   55745: (dd, Od, md) => {
+   55546: (bb, wb, Mb) => {
```

#### 119. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2115` → after: `L2115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2115) · [Before (L2115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2115)

```diff
-   55748: (dd, Od, md) => {
+   55551: (bb, wb, Mb) => {
```

#### 120. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2118` → after: `L2118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2118) · [Before (L2118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2118)

```diff
-   55755: (dd, Od, md) => {
+   55556: (bb, wb, Mb) => {
```

#### 121. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2121` → after: `L2121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2121) · [Before (L2121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2121)

```diff
-   55758: (dd, Od, md) => {
+   55560: (bb, wb, Mb) => {
```

#### 122. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2124` → after: `L2124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2124) · [Before (L2124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2124)

```diff
-   55762: (dd, Od, md) => {
+   55566: (bb, wb, Mb) => {
```

#### 123. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2127` → after: `L2127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2127) · [Before (L2127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2127)

```diff
-   55767: (dd, Od, md) => {
+   55572: (bb, wb, Mb) => {
```

#### 124. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2130` → after: `L2130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2130) · [Before (L2130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2130)

```diff
-   55772: (dd, Od, md) => {
+   55575: (bb, wb, Mb) => {
```

#### 125. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2133` → after: `L2133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2133) · [Before (L2133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2133)

```diff
-   55775: (dd, Od, md) => {
+   55580: (bb, wb, Mb) => {
```

#### 126. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2136` → after: `L2136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2136) · [Before (L2136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2136)

```diff
-   55779: (dd, Od, md) => {
+   55582: (bb, wb, Mb) => {
```

#### 127. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2139` → after: `L2139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2139) · [Before (L2139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2139)

```diff
-   55785: (dd, Od, md) => {
+   55587: (bb, wb, Mb) => {
```

#### 128. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2142` → after: `L2142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2142) · [Before (L2142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2142)

```diff
-   55788: (dd, Od, md) => {
+   55589: (bb, wb, Mb) => {
```

#### 129. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2145` → after: `L2145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2145) · [Before (L2145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2145)

```diff
-   55794: (dd, Od, md) => {
+   55597: (bb, wb, Mb) => {
```

#### 130. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2148` → after: `L2148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2148) · [Before (L2148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2148)

```diff
-   55798: (dd, Od, md) => {
+   55604: (bb, wb, Mb) => {
```

#### 131. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2151` → after: `L2151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2151) · [Before (L2151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2151)

```diff
-   55806: (dd, Od, md) => {
+   55607: (bb, wb, Mb) => {
```

#### 132. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2154` → after: `L2154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2154) · [Before (L2154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2154)

```diff
-   55809: (dd, Od, md) => {
+   55613: (bb, wb, Mb) => {
```

#### 133. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2157` → after: `L2157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2157) · [Before (L2157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2157)

```diff
-   55816: (dd, Od, md) => {
+   55619: (bb, wb, Mb) => {
```

#### 134. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2160` → after: `L2160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2160) · [Before (L2160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2160)

```diff
-   55825: (dd, Od, md) => {
+   55623: (bb, wb, Mb) => {
```

#### 135. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2163` → after: `L2163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2163) · [Before (L2163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2163)

```diff
-   55834: (dd, Od, md) => {
+   55627: (bb, wb, Mb) => {
```

#### 136. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2166` → after: `L2166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2166) · [Before (L2166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2166)

```diff
-   55836: (dd, Od, md) => {
+   55630: (bb, wb, Mb) => {
```

#### 137. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2169` → after: `L2169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2169) · [Before (L2169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2169)

```diff
-   55845: (dd, Od, md) => {
+   55635: (bb, wb, Mb) => {
```

#### 138. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2172` → after: `L2172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2172) · [Before (L2172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2172)

```diff
-   55853: (dd, Od, md) => {
+   55643: (bb, wb, Mb) => {
```

#### 139. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2175` → after: `L2175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2175) · [Before (L2175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2175)

```diff
-   55858: (dd, Od, md) => {
+   55648: (bb, wb, Mb) => {
```

#### 140. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2178` → after: `L2178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2178) · [Before (L2178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2178)

```diff
-   55867: (dd, Od, md) => {
+   55653: (bb, wb, Mb) => {
```

#### 141. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2181` → after: `L2181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2181) · [Before (L2181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2181)

```diff
-   55876: (dd, Od, md) => {
+   55661: (bb, wb, Mb) => {
```

#### 142. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2184` → after: `L2184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2184) · [Before (L2184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2184)

```diff
-   55878: (dd, Od, md) => {
+   55670: (bb, wb, Mb) => {
```

#### 143. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2187` → after: `L2187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2187) · [Before (L2187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2187)

```diff
-   55887: (dd, Od, md) => {
+   55674: (bb, wb, Mb) => {
```

#### 144. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2190` → after: `L2190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2190) · [Before (L2190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2190)

```diff
-   55889: (dd, Od, md) => {
+   55678: (bb, wb, Mb) => {
```

#### 145. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2193` → after: `L2193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2193) · [Before (L2193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2193)

```diff
-   55893: (dd, Od, md) => {
+   55686: (bb, wb, Mb) => {
```

#### 146. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2196` → after: `L2196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2196) · [Before (L2196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2196)

```diff
-   55900: (dd, Od, md) => {
+   55694: (bb, wb, Mb) => {
```

#### 147. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2199` → after: `L2199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2199) · [Before (L2199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2199)

```diff
-   55903: (dd, Od, md) => {
+   55702: (bb, wb, Mb) => {
```

#### 148. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2202` → after: `L2202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2202) · [Before (L2202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2202)

```diff
-   55907: (dd, Od, md) => {
+   55711: (bb, wb, Mb) => {
```

#### 149. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2205` → after: `L2205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2205) · [Before (L2205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2205)

```diff
-   55915: (dd, Od, md) => {
+   55719: (bb, wb, Mb) => {
```

#### 150. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2208` → after: `L2208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2208) · [Before (L2208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2208)

```diff
-   55920: (dd, Od, md) => {
+   55721: (bb, wb, Mb) => {
```

#### 151. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2211` → after: `L2211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2211) · [Before (L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2211)

```diff
-   55928: (dd, Od, md) => {
+   55730: (bb, wb, Mb) => {
```

#### 152. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2214` → after: `L2214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2214) · [Before (L2214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2214)

```diff
-   55935: (dd, Od, md) => {
+   55739: (bb, wb, Mb) => {
```

#### 153. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2217` → after: `L2217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2217) · [Before (L2217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2217)

```diff
-   55938: (dd, Od, md) => {
+   55742: (bb, wb, Mb) => {
```

#### 154. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2220` → after: `L2220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2220) · [Before (L2220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2220)

```diff
-   55946: (dd, Od, md) => {
+   55749: (bb, wb, Mb) => {
```

#### 155. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2223` → after: `L2223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2223) · [Before (L2223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2223)

```diff
-   55951: (dd, Od, md) => {
+   55756: (bb, wb, Mb) => {
```

#### 156. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2226` → after: `L2226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2226) · [Before (L2226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2226)

```diff
-   55955: (dd, Od, md) => {
+   55763: (bb, wb, Mb) => {
```

#### 157. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2229` → after: `L2229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2229) · [Before (L2229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2229)

```diff
-   55963: (dd, Od, md) => {
+   55771: (bb, wb, Mb) => {
```

#### 158. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2232` → after: `L2232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2232) · [Before (L2232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2232)

```diff
-   55972: (dd, Od, md) => {
+   55777: (bb, wb, Mb) => {
```

#### 159. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2235` → after: `L2235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2235) · [Before (L2235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2235)

```diff
-   55977: (dd, Od, md) => {
+   55786: (bb, wb, Mb) => {
```

#### 160. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2238` → after: `L2238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2238) · [Before (L2238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2238)

```diff
-   55980: (dd, Od, md) => {
+   55788: (bb, wb, Mb) => {
```

#### 161. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2241` → after: `L2241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2241) · [Before (L2241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2241)

```diff
-   55986: (dd, Od, md) => {
+   55795: (bb, wb, Mb) => {
```

#### 162. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2244` → after: `L2244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2244) · [Before (L2244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2244)

```diff
-   55988: (dd, Od, md) => {
+   55799: (bb, wb, Mb) => {
```

#### 163. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2247` → after: `L2247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2247) · [Before (L2247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2247)

```diff
-   55991: (dd, Od, md) => {
+   55807: (bb, wb, Mb) => {
```

#### 164. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2250` → after: `L2250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2250) · [Before (L2250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2250)

```diff
-   55998: (dd, Od, md) => {
+   55814: (bb, wb, Mb) => {
```

#### 165. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2253` → after: `L2253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2253) · [Before (L2253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2253)

```diff
-   56004: (dd, Od, md) => {
+   55821: (bb, wb, Mb) => {
```

#### 166. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2256` → after: `L2256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2256) · [Before (L2256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2256)

```diff
-   56006: (dd, Od, md) => {
+   55826: (bb, wb, Mb) => {
```

#### 167. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2259` → after: `L2259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2259) · [Before (L2259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2259)

```diff
-   56008: (dd, Od, md) => {
+   55831: (bb, wb, Mb) => {
```

#### 168. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2262` → after: `L2262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2262) · [Before (L2262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2262)

```diff
-   56011: (dd, Od, md) => {
+   55835: (bb, wb, Mb) => {
```

#### 169. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2265` → after: `L2265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2265) · [Before (L2265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2265)

```diff
-   56020: (dd, Od, md) => {
+   55840: (bb, wb, Mb) => {
```

#### 170. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2268` → after: `L2268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2268) · [Before (L2268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2268)

```diff
-   56026: (dd, Od, md) => {
+   55842: (bb, wb, Mb) => {
```

#### 171. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2271` → after: `L2271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2271) · [Before (L2271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2271)

```diff
-   56028: (dd, Od, md) => {
+   55845: (bb, wb, Mb) => {
```

#### 172. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2274` → after: `L2274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2274) · [Before (L2274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2274)

```diff
-   56030: (dd, Od, md) => {
+   55854: (bb, wb, Mb) => {
```

#### 173. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2277` → after: `L2277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2277) · [Before (L2277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2277)

```diff
-   56033: (dd, Od, md) => {
+   55863: (bb, wb, Mb) => {
```

#### 174. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2280` → after: `L2280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2280) · [Before (L2280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2280)

```diff
-   56035: (dd, Od, md) => {
+   55865: (bb, wb, Mb) => {
```

#### 175. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2283` → after: `L2283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2283) · [Before (L2283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2283)

```diff
-   56043: (dd, Od, md) => {
+   55874: (bb, wb, Mb) => {
```

#### 176. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2286` → after: `L2286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2286) · [Before (L2286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2286)

```diff
-   56049: (dd, Od, md) => {
+   55876: (bb, wb, Mb) => {
```

#### 177. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2289` → after: `L2289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2289) · [Before (L2289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2289)

```diff
-   56054: (dd, Od, md) => {
+   55885: (bb, wb, Mb) => {
```

#### 178. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2292` → after: `L2292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2292) · [Before (L2292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2292)

```diff
-   56062: (dd, Od, md) => {
+   55893: (bb, wb, Mb) => {
```

#### 179. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2295` → after: `L2295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2295) · [Before (L2295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2295)

```diff
-   56067: (dd, Od, md) => {
+   55898: (bb, wb, Mb) => {
```

#### 180. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2298` → after: `L2298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2298) · [Before (L2298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2298)

```diff
-   56076: (dd, Od, md) => {
+   55902: (bb, wb, Mb) => {
```

#### 181. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2301` → after: `L2301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2301) · [Before (L2301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2301)

```diff
-   56082: (dd, Od, md) => {
+   55904: (bb, wb, Mb) => {
```

#### 182. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2304` → after: `L2304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2304) · [Before (L2304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2304)

```diff
-   56088: (dd, Od, md) => {
+   55908: (bb, wb, Mb) => {
```

#### 183. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2307` → after: `L2307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2307) · [Before (L2307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2307)

```diff
-   56092: (dd, Od, md) => {
+   55912: (bb, wb, Mb) => {
```

#### 184. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2310` → after: `L2310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2310) · [Before (L2310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2310)

```diff
-   56100: (dd, Od, md) => {
+   55919: (bb, wb, Mb) => {
```

#### 185. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2313` → after: `L2313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2313) · [Before (L2313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2313)

```diff
-   56107: (dd, Od, md) => {
+   55923: (bb, wb, Mb) => {
```

#### 186. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2316` → after: `L2316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2316) · [Before (L2316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2316)

```diff
-   56109: (dd, Od, md) => {
+   55931: (bb, wb, Mb) => {
```

#### 187. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2319` → after: `L2319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2319) · [Before (L2319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2319)

```diff
-   56113: (dd, Od, md) => {
+   55933: (bb, wb, Mb) => {
```

#### 188. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2322` → after: `L2322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2322) · [Before (L2322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2322)

```diff
-   56118: (dd, Od, md) => {
+   55935: (bb, wb, Mb) => {
```

#### 189. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2325` → after: `L2325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2325) · [Before (L2325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2325)

```diff
-   56123: (dd, Od, md) => {
+   55939: (bb, wb, Mb) => {
```

#### 190. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2328` → after: `L2328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2328) · [Before (L2328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2328)

```diff
-   56130: (dd, Od, md) => {
+   55943: (bb, wb, Mb) => {
```

#### 191. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2331` → after: `L2331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2331) · [Before (L2331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2331)

```diff
-   56139: (dd, Od, md) => {
+   55945: (bb, wb, Mb) => {
```

#### 192. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2334` → after: `L2334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2334) · [Before (L2334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2334)

```diff
-   56147: (dd, Od, md) => {
+   55949: (bb, wb, Mb) => {
```

#### 193. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2337` → after: `L2337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2337) · [Before (L2337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2337)

```diff
-   56154: (dd, Od, md) => {
+   55953: (bb, wb, Mb) => {
```

#### 194. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2340` → after: `L2340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2340) · [Before (L2340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2340)

```diff
-   56156: (dd, Od, md) => {
+   55961: (bb, wb, Mb) => {
```

#### 195. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2343` → after: `L2343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2343) · [Before (L2343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2343)

```diff
-   56164: (dd, Od, md) => {
+   55964: (bb, wb, Mb) => {
```

#### 196. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2346` → after: `L2346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2346) · [Before (L2346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2346)

```diff
-   56170: (dd, Od, md) => {
+   55968: (bb, wb, Mb) => {
```

#### 197. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2349` → after: `L2349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2349) · [Before (L2349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2349)

```diff
-   56179: (dd, Od, md) => {
+   55970: (bb, wb, Mb) => {
```

#### 198. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2352` → after: `L2352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2352) · [Before (L2352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2352)

```diff
-   56187: (dd, Od, md) => {
+   55972: (bb, wb, Mb) => {
```

#### 199. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2355` → after: `L2355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2355) · [Before (L2355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2355)

```diff
-   56192: (dd, Od, md) => {
+   55979: (bb, wb, Mb) => {
```

#### 200. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2358` → after: `L2358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2358) · [Before (L2358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2358)

```diff
-   56198: (dd, Od, md) => {
+   55981: (bb, wb, Mb) => {
```

#### 201. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2361` → after: `L2361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2361) · [Before (L2361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2361)

```diff
-   56205: (dd, Od, md) => {
+   55987: (bb, wb, Mb) => {
```

#### 202. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2364` → after: `L2364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2364) · [Before (L2364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2364)

```diff
-   56207: (dd, Od, md) => {
+   55995: (bb, wb, Mb) => {
```

#### 203. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2367` → after: `L2367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2367) · [Before (L2367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2367)

```diff
-   56209: (dd, Od, md) => {
+   56003: (bb, wb, Mb) => {
```

#### 204. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2370` → after: `L2370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2370) · [Before (L2370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2370)

```diff
-   56218: (dd, Od, md) => {
+   56008: (bb, wb, Mb) => {
```

#### 205. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2373` → after: `L2373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2373) · [Before (L2373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2373)

```diff
-   56221: (dd, Od, md) => {
+   56014: (bb, wb, Mb) => {
```

#### 206. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2376` → after: `L2376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2376) · [Before (L2376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2376)

```diff
-   56230: (dd, Od, md) => {
+   56017: (bb, wb, Mb) => {
```

#### 207. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2379` → after: `L2379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2379) · [Before (L2379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2379)

```diff
-   56239: (dd, Od, md) => {
+   56026: (bb, wb, Mb) => {
```

#### 208. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2382` → after: `L2382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2382) · [Before (L2382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2382)

```diff
-   56245: (dd, Od, md) => {
+   56028: (bb, wb, Mb) => {
```

#### 209. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2385` → after: `L2385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2385) · [Before (L2385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2385)

```diff
-   56251: (dd, Od, md) => {
+   56036: (bb, wb, Mb) => {
```

#### 210. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2388` → after: `L2388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2388) · [Before (L2388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2388)

```diff
-   56257: (dd, Od, md) => {
+   56038: (bb, wb, Mb) => {
```

#### 211. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2391` → after: `L2391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2391) · [Before (L2391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2391)

```diff
-   56261: (dd, Od, md) => {
+   56042: (bb, wb, Mb) => {
```

#### 212. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2394` → after: `L2394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2394) · [Before (L2394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2394)

```diff
-   56265: (dd, Od, md) => {
+   56045: (bb, wb, Mb) => {
```

#### 213. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2397` → after: `L2397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2397) · [Before (L2397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2397)

```diff
-   56273: (dd, Od, md) => {
+   56053: (bb, wb, Mb) => {
```

#### 214. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2400` → after: `L2400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2400) · [Before (L2400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2400)

```diff
-   56279: (dd, Od, md) => {
+   56055: (bb, wb, Mb) => {
```

#### 215. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2403` → after: `L2403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2403) · [Before (L2403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2403)

```diff
-   56283: (dd, Od, md) => {
+   56061: (bb, wb, Mb) => {
```

#### 216. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2406` → after: `L2406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2406) · [Before (L2406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2406)

```diff
-   56285: (dd, Od, md) => {
+   56067: (bb, wb, Mb) => {
```

#### 217. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2409` → after: `L2409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2409) · [Before (L2409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2409)

```diff
-   56294: (dd, Od, md) => {
+   56071: (bb, wb, Mb) => {
```

#### 218. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2412` → after: `L2412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2412) · [Before (L2412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2412)

```diff
-   56299: (dd, Od, md) => {
+   56074: (bb, wb, Mb) => {
```

#### 219. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2415` → after: `L2415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2415) · [Before (L2415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2415)

```diff
-   56304: (dd, Od, md) => {
+   56080: (bb, wb, Mb) => {
```

#### 220. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2418` → after: `L2418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2418) · [Before (L2418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2418)

```diff
-   56310: (dd, Od, md) => {
+   56089: (bb, wb, Mb) => {
```

#### 221. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2421` → after: `L2421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2421) · [Before (L2421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2421)

```diff
-   56317: (dd, Od, md) => {
+   56096: (bb, wb, Mb) => {
```

#### 222. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2424` → after: `L2424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2424) · [Before (L2424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2424)

```diff
-   56325: (dd, Od, md) => {
+   56105: (bb, wb, Mb) => {
```

#### 223. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2427` → after: `L2427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2427) · [Before (L2427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2427)

```diff
-   56330: (dd, Od, md) => {
+   56107: (bb, wb, Mb) => {
```

#### 224. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2430` → after: `L2430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2430) · [Before (L2430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2430)

```diff
-   56337: (dd, Od, md) => {
+   56114: (bb, wb, Mb) => {
```

#### 225. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2433` → after: `L2433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/itemSprites.js#L2433) · [Before (L2433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/itemSprites.js#L2433)

```diff
-   56339: (dd, Od, md) => {
+   56120: (bb, wb, Mb) => {
```
