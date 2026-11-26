# Changed — Bundle Modifications Report (Part 133 / 146)

- **Updated at**: `2026-11-26T17:59 JST`
- **Part**: `133 / 146` (**400** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 132](part-132.md) · [Part 134 →](part-134.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (fo1voe.f743fbcf → pxmq3aq.c63b303d · continued)

- **File**: `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (134 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab)

#### 121. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1442` → after: `L1442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1442) · [Before (L1442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1442)

```diff
-         jM.i.register(MM)
+         UV.g.register(VV)
```

#### 122. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1454` → after: `L1454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1454) · [Before (L1454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1454)

```diff
-         jM.i.register(MM), jM.i.setPersonProperties(MM)
+         UV.g.register(VV), UV.g.setPersonProperties(VV)
```

#### 123. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1473-L1474` → after: `L1473-L1474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1473-L1474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1473-L1474) · [Before (L1473-L1474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1473-L1474)

```diff
-         rM !== this.lastTagsJson && (this.lastTagsJson = rM, jM.i.register(MM), null === this.personUpdateTimer && (this.personUpdateTimer = setTimeout((() => {
-           this.personUpdateTimer = null, jM.i.setPersonProperties(this.tags.toProperties())
+         eV !== this.lastTagsJson && (this.lastTagsJson = eV, UV.g.register(VV), null === this.personUpdateTimer && (this.personUpdateTimer = setTimeout((() => {
+           this.personUpdateTimer = null, UV.g.setPersonProperties(this.tags.toProperties())
```

#### 124. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1478` → after: `L1478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1478) · [Before (L1478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1478)

```diff
-         for (const MM of this.gameContextKeys) jM.i.unregister(MM);
+         for (const VV of this.gameContextKeys) UV.g.unregister(VV);
```

#### 125. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1483` → after: `L1483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1483) · [Before (L1483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1483)

```diff
-   34785: (MM, rM, iM) => {
+   35045: (VV, eV, xV) => {
```

#### 126. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1485` → after: `L1485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1485) · [Before (L1485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1485)

```diff
-       e: () => jM
+       c: () => UV
```

#### 127. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1496` → after: `L1496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1496) · [Before (L1496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1496)

```diff
-   34639: (MM, rM, iM) => {
+   34892: (VV, eV, xV) => {
```

#### 128. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1499-L1500` → after: `L1500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1500) · [Before (L1499-L1500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1499-L1500)

```diff
-       h: () => jM,
-       k: () => SM
+       f: () => YV
```

#### 129. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1532` → after: `L1532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1532) · [Before (L1532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1532)

```diff
-         return (null !== (rM = this.inFlightLabels.get(MM)) && void 0 !== rM ? rM : 0) > 0
+         return (null !== (eV = this.inFlightLabels.get(VV)) && void 0 !== eV ? eV : 0) > 0
```

#### 130. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1545` → after: `L1545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1545) · [Before (L1545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1545)

```diff
-         void 0 !== MM && this.inFlightLabels.set(MM, (null !== (iM = this.inFlightLabels.get(MM)) && void 0 !== iM ? iM : 0) + rM)
+         void 0 !== VV && this.inFlightLabels.set(VV, (null !== (xV = this.inFlightLabels.get(VV)) && void 0 !== xV ? xV : 0) + eV)
```

#### 131. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1554` → after: `L1554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1554) · [Before (L1554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1554)

```diff
-   5479: (MM, rM, iM) => {
+   5589: (VV, eV, xV) => {
```

#### 132. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1556-L1561` → after: `L1556-L1563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1556-L1563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1556-L1563) · [Before (L1556-L1561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1556-L1561)

```diff
-       A: () => LM,
-       E: () => HM,
-       G: () => zM,
-       J: () => aM,
-       c: () => jM,
-       g: () => lM,
+       B: () => pV,
+       D: () => vV,
+       H: () => ZV,
+       I: () => rV,
+       K: () => wV,
+       N: () => yV,
+       b: () => UV,
+       d: () => jV,
```

#### 133. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1563` → after: `L1565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1565) · [Before (L1563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1563)

```diff
-       j: () => dM,
+       i: () => EV,
```

#### 134. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1565-L1570` → after: `L1567-L1570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1567-L1570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1567-L1570) · [Before (L1565-L1570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1565-L1570)

```diff
-       o: () => nM,
-       r: () => yM,
-       s: () => QM,
-       v: () => hM,
-       w: () => PM,
-       x: () => mM
+       p: () => QV,
+       t: () => BV,
+       x: () => nV,
+       y: () => kV
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (fo1voe.f743fbcf → pxmq3aq.c63b303d)

- **File**: `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (140 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db)

#### 1. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4)

```diff
-   34843: () => {
+   35114: () => {
```

#### 2. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L26` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L26) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L26)

```diff
-           return "symbol" == MM(iM) ? iM : iM + ""
+           return "symbol" == VV(xV) ? xV : xV + ""
```

#### 3. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L114` → after: `L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L114) · [Before (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L114)

```diff
-       new RegExp(`^${JM.source}`, "i"), new RegExp(JM.source, "gi"), "0".repeat(32), "0".repeat(16);
+       new RegExp(`^${bV.source}`, "i"), new RegExp(bV.source, "gi"), "0".repeat(32), "0".repeat(16);
```

#### 4. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L179` → after: `L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L179) · [Before (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L179)

```diff
-         const OM = `${MM}.${String(iM)}`;
+         const JV = `${VV}.${String(xV)}`;
```

#### 5. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L213` → after: `L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L213) · [Before (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L213)

```diff
-               return "function" == typeof MM ? null !== (rM = MM.__rrweb_layer__) && void 0 !== rM ? rM : MM.__posthog_layer__ : void 0
+               return "function" == typeof VV ? null !== (eV = VV.__rrweb_layer__) && void 0 !== eV ? eV : VV.__posthog_layer__ : void 0
```

#### 6. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L235` → after: `L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L235) · [Before (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L235)

```diff
-             CM = (null == MM ? void 0 : MM.toString().includes("[native code]")) ? MM : null
+             TV = (null == VV ? void 0 : VV.toString().includes("[native code]")) ? VV : null
```

#### 7. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L306` → after: `L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L306) · [Before (L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L306)

```diff
-         }, AM = [], xM = 0, NM = (rM = MM) && rM > 0 ? rM : null, ZM = uM(), oM = RM)
+         }, lV = [], LV = 0, hV = (eV = VV) && eV > 0 ? eV : null, CV = zV(), aV = GV)
```

#### 8. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L317` → after: `L317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L317) · [Before (L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L317)

```diff
-         } : (kM -= 1) > 0 ? fM : (fM.durationMs = uM() - ZM, fM.deferredStylesheetCount = xM, BM.deferredCount += xM, NM = null, DM(fM.durationMs, oM) ? fM : YM = fM)
+         } : (iV -= 1) > 0 ? oV : (oV.durationMs = zV() - CV, oV.deferredStylesheetCount = LV, KV.deferredCount += LV, hV = null, DV(oV.durationMs, aV) ? oV : cV = oV)
```

#### 9. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L408` → after: `L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L408) · [Before (L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L408)

```diff
-           return "symbol" == Or(rM) ? rM : rM + ""
+           return "symbol" == Je(eV) ? eV : eV + ""
```

#### 10. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L439-L440` → after: `L439-L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L439-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L439-L440) · [Before (L439-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L439-L440)

```diff
-         const iM = ["@import", `url(${JSON.stringify(MM.href)})`];
-         return "" === MM.layerName ? iM.push("layer") : MM.layerName && iM.push(`layer(${MM.layerName})`), MM.supportsText && iM.push(`supports(${MM.supportsText})`), MM.media.length && iM.push(MM.media.mediaText), iM.join(" ") + ";"
+         const xV = ["@import", `url(${JSON.stringify(VV.href)})`];
+         return "" === VV.layerName ? xV.push("layer") : VV.layerName && xV.push(`layer(${VV.layerName})`), VV.supportsText && xV.push(`supports(${VV.supportsText})`), VV.media.length && xV.push(VV.media.mediaText), xV.join(" ") + ";"
```

#### 11. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L499` → after: `L499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L499) · [Before (L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L499)

```diff
-           return MM && null !== (rM = null === (iM = this.getMeta(MM)) || void 0 === iM ? void 0 : iM.id) && void 0 !== rM ? rM : -1
+           return VV && null !== (eV = null === (xV = this.getMeta(VV)) || void 0 === xV ? void 0 : xV.id) && void 0 !== eV ? eV : -1
```

#### 12. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L527` → after: `L527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L527) · [Before (L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L527)

```diff
-           const iM = this.lD(MM);
+           const xV = this.rD(VV);
```

#### 13. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L566` → after: `L566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L566) · [Before (L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L566)

```diff
-         return OM ? SM ? aM && Gr.has(Ur(iM)) ? OM : "*".repeat(OM.length) : jM ? jM(iM, OM, rM) : OM : OM
+         return JV ? YV ? yV && Fe.has(te(xV)) ? JV : "*".repeat(JV.length) : UV ? UV(xV, JV, eV) : JV : JV
```

#### 14. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L588-L590` → after: `L588-L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L588-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L588-L590) · [Before (L588-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L588-L590)

```diff
-           if (tr.test(PM) || gr.test(PM)) return `url(${nM}${PM}${nM})`;
-           if (ur.test(PM)) return `url(${nM}${PM}${nM})`;
-           if ("/" === PM[0]) return `url(${nM}${function(MM){let rM="";return rM=MM.indexOf("//")>-1?MM.split("/").slice(0,3).join("/"):MM.split("/")[0],rM=rM.split("?")[0],rM}(rM)+PM}${nM})`;
+           if (Xe.test(pV) || Me.test(pV)) return `url(${QV}${pV}${QV})`;
+           if (ze.test(pV)) return `url(${QV}${pV}${QV})`;
+           if ("/" === pV[0]) return `url(${QV}${function(VV){let eV="";return eV=VV.indexOf("//")>-1?VV.split("/").slice(0,3).join("/"):VV.split("/")[0],eV=eV.split("?")[0],eV}(eV)+pV}${QV})`;
```

#### 15. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L595` → after: `L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L595) · [Before (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L595)

```diff
-           return `url(${nM}${QM.join("/")}${nM})`
+           return `url(${QV}${nV.join("/")}${QV})`
```

#### 16. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L652-L653` → after: `L652-L653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L652-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L652-L653) · [Before (L652-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L652-L653)

```diff
-                   const aM = SM.toDataURL(iM || "image/webp", null != OM ? OM : .4),
-                     PM = rM.length > aM.length ? aM : rM;
+                   const yV = YV.toDataURL(xV || "image/webp", null != JV ? JV : .4),
+                     pV = eV.length > yV.length ? yV : eV;
```

#### 17. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L712` → after: `L712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L712) · [Before (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L712)

```diff
-         }(MM, OM) : "style" === iM ? Rr(OM, xr(MM)) : "object" === rM && "data" === iM ? Ar(MM, OM) : OM : Ar(MM, OM)
+         }(VV, JV) : "style" === xV ? Ge(JV, Le(VV)) : "object" === eV && "data" === xV ? le(VV, JV) : JV : le(VV, JV)
```

#### 18. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L742` → after: `L742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L742) · [Before (L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L742)

```diff
-               if (SM.closest(`.${rM}`)) return !0
+               if (YV.closest(`.${eV}`)) return !0
```

#### 19. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L805` → after: `L805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L805) · [Before (L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L805)

```diff
-         if (pM >= WM) return ri = !0, Mi || (Mi = !0, console.warn(`[rrweb-snapshot] DOM tree depth exceeded max depth of ${WM}. Children beyond this depth will not be recorded. This may indicate deeply nested DOM structures.`)), null;
+         if (WV >= RV) return ex = !0, Vx || (Vx = !0, console.warn(`[rrweb-snapshot] DOM tree depth exceeded max depth of ${RV}. Children beyond this depth will not be recorded. This may indicate deeply nested DOM structures.`)), null;
```

#### 20. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L967` → after: `L967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L967) · [Before (L967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L967)

```diff
-                         console.warn(`Cannot inline img src=${OM}! Error: ${MM}`)
+                         console.warn(`Cannot inline img src=${JV}! Error: ${VV}`)
```

#### 21. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L987-L990` → after: `L987-L990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L987-L990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L987-L990) · [Before (L987-L990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L987-L990)

```diff
-                     rr_width: `${rM}px`,
-                     rr_height: `${OM}px`,
-                     rr_left: `${Math.floor(SM+((null===(uM=iM.defaultView)||void 0===uM?void 0:uM.scrollX)||0))}px`,
-                     rr_top: `${Math.floor(jM+((null===(RM=iM.defaultView)||void 0===RM?void 0:RM.scrollY)||0))}px`
+                     rr_width: `${eV}px`,
+                     rr_height: `${JV}px`,
+                     rr_left: `${Math.floor(YV+((null===(zV=xV.defaultView)||void 0===zV?void 0:zV.scrollX)||0))}px`,
+                     rr_top: `${Math.floor(UV+((null===(GV=xV.defaultView)||void 0===GV?void 0:GV.scrollY)||0))}px`
```

#### 22. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1054` → after: `L1054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR1054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L1054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1054) · [Before (L1054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1054)

```diff
-                     console.warn(`Cannot get CSS styles from text's parentNode. Error: ${rM}`, MM)
+                     console.warn(`Cannot get CSS styles from text's parentNode. Error: ${eV}`, VV)
```

#### 23. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1114` → after: `L1114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR1114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L1114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1114) · [Before (L1114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1114)

```diff
-                 return null !== (rM = null == OM ? void 0 : OM[1]) && void 0 !== rM ? rM : null
+                 return null !== (eV = null == JV ? void 0 : JV[1]) && void 0 !== eV ? eV : null
```

#### 24. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1413` → after: `L1413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR1413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L1413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1413) · [Before (L1413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1413)

```diff
-           lD: () => (console.warn(Qi), null),
+           rD: () => (console.warn(nx), null),
```

#### 25. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1500` → after: `L1500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR1500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L1500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1500) · [Before (L1500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1500)

```diff
-         return MM ? MM.nodeType === MM.ELEMENT_NODE ? MM : gM.parentElement(MM) : null
+         return VV ? VV.nodeType === VV.ELEMENT_NODE ? VV : MV.parentElement(VV) : null
```

#### 26. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1554` → after: `L1554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR1554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L1554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1554) · [Before (L1554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1554)

```diff
-           return null !== (rM = this.styleIDMap.get(MM)) && void 0 !== rM ? rM : -1
+           return null !== (eV = this.styleIDMap.get(VV)) && void 0 !== eV ? eV : -1
```

#### 27. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1586` → after: `L1586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR1586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L1586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1586) · [Before (L1586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1586)

```diff
-         return "boolean" == typeof iM ? iM : function(MM) {
+         return "boolean" == typeof xV ? xV : function(VV) {
```

#### 28. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1631` → after: `L1631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR1631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1631) · [Before (L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1631)

```diff
-         Di = (MM, rM) => `${MM}@${rM}`,
+         Rx = (VV, eV) => `${VV}@${eV}`,
```

#### 29. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1643` → after: `L1643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR1643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L1643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1643) · [Before (L1643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1643)

```diff
-                 iM = uM() - MM, OM = rM, kM > 0 || DM(iM, null != OM ? OM : RM) || iM > FM.slowestBatchMs && (FM.slowestBatchMs = iM)
+                 xV = zV() - VV, JV = eV, iV > 0 || DV(xV, null != JV ? JV : GV) || xV > mV.slowestBatchMs && (mV.slowestBatchMs = xV)
```

#### 30. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1815` → after: `L1815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR1815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L1815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1815) · [Before (L1815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1815)

```diff
-                     aM = null !== (rM = MM.attributeNamespace) && void 0 !== rM ? rM : null;
+                     yV = null !== (eV = VV.attributeNamespace) && void 0 !== eV ? eV : null;
```

#### 31. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1820-L1822` → after: `L1820-L1822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR1820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L1820-L1822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1820-L1822) · [Before (L1820-L1822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1820-L1822)

```diff
-                       if ("http://www.w3.org/1999/xlink" === iM) return `xlink:${rM}`;
-                       if ("http://www.w3.org/XML/1998/namespace" === iM) return `xml:${rM}`;
-                       if ("http://www.w3.org/2000/xmlns/" === iM) return "xmlns" === rM ? rM : `xmlns:${rM}`;
+                       if ("http://www.w3.org/1999/xlink" === xV) return `xlink:${eV}`;
+                       if ("http://www.w3.org/XML/1998/namespace" === xV) return `xml:${eV}`;
+                       if ("http://www.w3.org/2000/xmlns/" === xV) return "xmlns" === eV ? eV : `xmlns:${eV}`;
```

#### 32. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1824` → after: `L1824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR1824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L1824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1824) · [Before (L1824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1824)

```diff
-                       return SM ? `${SM}:${rM}` : rM
+                       return YV ? `${YV}:${eV}` : eV
```

#### 33. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1864` → after: `L1864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR1864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L1864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1864) · [Before (L1864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1864)

```diff
-                         OM !== rM.style.getPropertyValue(MM) || SM !== rM.style.getPropertyPriority(MM) ? QM.styleDiff[MM] = "" === SM ? OM : [OM, SM] : QM._unchangedStyles[MM] = [OM, SM]
+                         JV !== eV.style.getPropertyValue(VV) || YV !== eV.style.getPropertyPriority(VV) ? nV.styleDiff[VV] = "" === YV ? JV : [JV, YV] : nV._unchangedStyles[VV] = [JV, YV]
```

#### 34. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L2066` → after: `L2066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR2066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L2066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2066) · [Before (L2066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2066)

```diff
-             const LM = `${QM},${zM}`;
+             const ZV = `${nV},${wV}`;
```

#### 35. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L2117` → after: `L2117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR2117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L2117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2117) · [Before (L2117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2117)

```diff
-         aM = iM.getId("#document" === rM.nodeName ? rM : gM.host(rM));
+         yV = xV.getId("#document" === eV.nodeName ? eV : MV.host(eV));
```

#### 36. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L2383` → after: `L2383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR2383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L2383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2383) · [Before (L2383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2383)

```diff
-                 "radio" === dM && yM && JM && iM.querySelectorAll(`input[type="radio"][name="${yM}"]`).forEach((MM => {
+                 "radio" === EV && BV && bV && xV.querySelectorAll(`input[type="radio"][name="${BV}"]`).forEach((VV => {
```

#### 37. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L2552` → after: `L2552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR2552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L2552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2552) · [Before (L2552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2552)

```diff
-                 return jM.CSSStyleSheet.prototype.insertRule.apply(this, [`${MM} { ${rM} }`, iM])
+                 return UV.CSSStyleSheet.prototype.insertRule.apply(this, [`${VV} { ${eV} }`, xV])
```

#### 38. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L2765` → after: `L2765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR2765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L2765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2765) · [Before (L2765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2765)

```diff
-                   fontSource: "string" == typeof rM ? rM : JSON.stringify(Array.from(new Uint8Array(rM)))
+                   fontSource: "string" == typeof eV ? eV : JSON.stringify(Array.from(new Uint8Array(eV)))
```

#### 39. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L2813` → after: `L2813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR2813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L2813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2813) · [Before (L2813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2813)

```diff
-                 Ld: PM
+                 TE: pV
```

#### 40. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L2832` → after: `L2832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR2832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L2832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2832) · [Before (L2832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2832)

```diff
-                   console.warn(`Custom element callback failed for ${rM}`)
+                   console.warn(`Custom element callback failed for ${eV}`)
```

#### 41. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L2838` → after: `L2838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR2838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L2838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2838) · [Before (L2838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2838)

```diff
-           for (const rM of MM.plugins) LM(`plugin:${rM.name}`, (() => rM.observer(rM.callback, iM, rM.options)))
+           for (const eV of VV.plugins) ZV(`plugin:${eV.name}`, (() => eV.observer(eV.callback, xV, eV.options)))
```

#### 42. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L2873` → after: `L2873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR2873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L2873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2873) · [Before (L2873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2873)

```diff
-             return "number" != typeof rM || 0 > rM ? rM : null !== (OM = (iM || this.getLocalIdToRemoteIdMap(MM)).get(rM)) && void 0 !== OM ? OM : -1
+             return "number" != typeof eV || 0 > eV ? eV : null !== (JV = (xV || this.getLocalIdToRemoteIdMap(VV)).get(eV)) && void 0 !== JV ? JV : -1
```

#### 43. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L2906` → after: `L2906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR2906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L2906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2906) · [Before (L2906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2906)

```diff
-             return null !== (rM = null !== (iM = null === (OM = this.attachedIframes.get(MM)) || void 0 === OM ? void 0 : OM.element) && void 0 !== iM ? iM : this.iframeElementsById.get(MM)) && void 0 !== rM ? rM : null
+             return null !== (eV = null !== (xV = null === (JV = this.attachedIframes.get(VV)) || void 0 === JV ? void 0 : JV.element) && void 0 !== xV ? xV : this.iframeElementsById.get(VV)) && void 0 !== eV ? eV : null
```

#### 44. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3058` → after: `L3058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3058) · [Before (L3058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3058)

```diff
-                     return rM.data.Ld.forEach((rM => {
+                     return eV.data.TE.forEach((eV => {
```

#### 45. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3092` → after: `L3092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3092) · [Before (L3092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3092)

```diff
-               iM = (null == rM ? void 0 : rM.element) || this.iframeElementsById.get(MM) || this.mirror.lD(MM);
+               xV = (null == eV ? void 0 : eV.element) || this.iframeElementsById.get(VV) || this.mirror.rD(VV);
```

#### 46. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3159` → after: `L3159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3159) · [Before (L3159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3159)

```diff
-             const jM = null !== (iM = null === (SM = gM.host(MM)) || void 0 === SM ? void 0 : SM.ownerDocument) && void 0 !== iM ? iM : rM,
+             const UV = null !== (xV = null === (YV = MV.host(VV)) || void 0 === YV ? void 0 : YV.ownerDocument) && void 0 !== xV ? xV : eV,
```

#### 47. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3334` → after: `L3334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3334) · [Before (L3334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3334)

```diff
-                     return rM && "object" == typeof rM ? rM : null
+                     return eV && "object" == typeof eV ? eV : null
```

#### 48. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3343` → after: `L3343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3343) · [Before (L3343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3343)

```diff
-                     usage: "number" == typeof jM.usage ? jM.usage | PM : PM
+                     usage: "number" == typeof UV.usage ? UV.usage | pV : pV
```

#### 49. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3440` → after: `L3440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3440) · [Before (L3440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3440)

```diff
-         console.warn(`[replay] canvas capture: ${MM}`, ...iM)
+         console.warn(`[replay] canvas capture: ${VV}`, ...xV)
```

#### 50. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3501` → after: `L3501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3501) · [Before (L3501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3501)

```diff
-               return bO(`disabled because the encode worker did not start. ${eO}`, MM), void nM()
+               return TJ(`disabled because the encode worker did not start. ${FJ}`, VV), void QV()
```

#### 51. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3506` → after: `L3506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3506) · [Before (L3506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3506)

```diff
-               mM = !0, bO(`stopped because the encode worker failed. ${eO}`, MM), cancelAnimationFrame(dM), null === (rM = zM.terminate) || void 0 === rM || rM.call(zM), this.resetFrameDedup = null
+               vV = !0, TJ(`stopped because the encode worker failed. ${FJ}`, VV), cancelAnimationFrame(EV), null === (eV = wV.terminate) || void 0 === eV || eV.call(wV), this.resetFrameDedup = null
```

#### 52. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3812` → after: `L3812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3812) · [Before (L3812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3812)

```diff
-                           if (rM.media && "string" == typeof rM.media.mediaText) return `@media ${rM.media.mediaText} {`;
+                           if (eV.media && "string" == typeof eV.media.mediaText) return `@media ${eV.media.mediaText} {`;
```

#### 53. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3816` → after: `L3816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3816) · [Before (L3816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3816)

```diff
-                             return `${MM.selectorText} {${iM?" "+iM:""}`
+                             return `${VV.selectorText} {${xV?" "+xV:""}`
```

#### 54. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3818` → after: `L3818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3818) · [Before (L3818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3818)

```diff
-                           if ("containerName" in rM) return "string" != typeof rM.containerQuery || rM.containerName && !dr.test(rM.containerName) ? null : `@container ${rM.containerName?`${rM.containerName} `:""}${rM.containerQuery} {`;
+                           if ("containerName" in eV) return "string" != typeof eV.containerQuery || eV.containerName && !Ee.test(eV.containerName) ? null : `@container ${eV.containerName?`${eV.containerName} `:""}${eV.containerQuery} {`;
```

#### 55. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3827` → after: `L3827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3827) · [Before (L3827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3827)

```diff
-                             return "" === OM || "Object" === OM || "CSSSupportsRule" === OM ? `@supports ${rM.conditionText} {` : null
+                             return "" === JV || "Object" === JV || "CSSSupportsRule" === JV ? `@supports ${eV.conditionText} {` : null
```

#### 56. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3829` → after: `L3829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3829) · [Before (L3829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3829)

```diff
-                           return "string" == typeof rM.name ? "keyText" in rM.cssRules[0] ? dr.test(rM.name) ? `@keyframes ${rM.name} {` : null : "" === rM.name ? "@layer {" : yr.test(rM.name) ? `@layer ${rM.name} {` : null : null
+                           return "string" == typeof eV.name ? "keyText" in eV.cssRules[0] ? Ee.test(eV.name) ? `@keyframes ${eV.name} {` : null : "" === eV.name ? "@layer {" : Be.test(eV.name) ? `@layer ${eV.name} {` : null : null
```

#### 57. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3913` → after: `L3913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3913) · [Before (L3913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3913)

```diff
-                     let aM = MM > 0 ? MM : 1;
+                     let yV = VV > 0 ? VV : 1;
```

#### 58. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3942` → after: `L3942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3942) · [Before (L3942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3942)

```diff
-                   text: () => iM ? OM : null,
+                   text: () => xV ? JV : null,
```

#### 59. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3981` → after: `L3981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3981) · [Before (L3981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3981)

```diff
-                   zM && this.pendingDeferredSheets.delete(aM), DM(LM = uM() - nM, null != (mM = QM) ? mM : RM) || (BM.totalMs += LM, LM > BM.slowestSliceMs && (BM.slowestSliceMs = LM))
+                   wV && this.pendingDeferredSheets.delete(yV), DV(ZV = zV() - QV, null != (vV = nV) ? vV : GV) || (KV.totalMs += ZV, ZV > KV.slowestSliceMs && (KV.slowestSliceMs = ZV))
```

#### 60. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4187` → after: `L4187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR4187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L4187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4187) · [Before (L4187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4187)

```diff
-           } : void 0 !== EM ? EM : {
+           } : void 0 !== qV ? qV : {
```

#### 61. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4228` → after: `L4228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR4228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L4228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4228) · [Before (L4228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4228)

```diff
-                   const MM = DO.lD(OM.node.id);
+                   const VV = RJ.rD(JV.node.id);
```

#### 62. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4562` → after: `L4562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR4562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L4562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4562) · [Before (L4562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4562)

```diff
-               const iM = DO.lD(rM);
+               const xV = RJ.rD(eV);
```

#### 63. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4712` → after: `L4712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR4712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L4712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4712) · [Before (L4712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4712)

```diff
-                 jM = null !== (MM = null !== (rM = null !== (iM = null !== (OM = SM.fullscreenElement) && void 0 !== OM ? OM : SM.webkitFullscreenElement) && void 0 !== iM ? iM : SM.mozFullScreenElement) && void 0 !== rM ? rM : SM.msFullscreenElement) && void 0 !== MM ? MM : null … [truncated]
+                 UV = null !== (VV = null !== (eV = null !== (xV = null !== (JV = YV.fullscreenElement) && void 0 !== JV ? JV : YV.webkitFullscreenElement) && void 0 !== xV ? xV : YV.mozFullScreenElement) && void 0 !== eV ? eV : YV.msFullscreenElement) && void 0 !== VV ? VV : null … [truncated]
```

#### 64. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4765` → after: `L4765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR4765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L4765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4765) · [Before (L4765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4765)

```diff
-       new RegExp(`^${fO.source}`, "i"), new RegExp(fO.source, "gi"), "0".repeat(32), "0".repeat(16);
+       new RegExp(`^${CJ.source}`, "i"), new RegExp(CJ.source, "gi"), "0".repeat(32), "0".repeat(16);
```

#### 65. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4788` → after: `L4788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR4788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L4788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4788) · [Before (L4788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4788)

```diff
-           return "symbol" == NO(rM) ? rM : rM + ""
+           return "symbol" == oJ(eV) ? eV : eV + ""
```

#### 66. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4804` → after: `L4804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR4804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L4804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4804) · [Before (L4804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4804)

```diff
-             return this.functionName ? `${this.functionName} (${this.fileName}:${MM}:${rM})` : `${this.fileName}:${MM}:${rM}`
+             return this.functionName ? `${this.functionName} (${this.fileName}:${VV}:${eV})` : `${this.fileName}:${VV}:${eV}`
```

#### 67. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4817` → after: `L4817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR4817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L4817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4817) · [Before (L4817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4817)

```diff
-             if (!rM) throw new Error(`Cannot parse given url: ${MM}`);
+             if (!eV) throw new Error(`Cannot parse given url: ${VV}`);
```

#### 68. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4919` → after: `L4919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR4919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L4919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4919) · [Before (L4919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4919)

```diff
-           SM.length > 1 && (iM += `:eq(${SM.indexOf(MM)})`), rM = iM + (rM ? ">" + rM : ""), MM = OM
+           YV.length > 1 && (xV += `:eq(${YV.indexOf(VV)})`), eV = xV + (eV ? ">" + eV : ""), VV = JV
```

#### 69. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4957` → after: `L4957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR4957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L4957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4957) · [Before (L4957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4957)

```diff
-             return iM.stringLengthLimit && rM.length > iM.stringLengthLimit && (rM = `${rM.slice(0,iM.stringLengthLimit)}...`), rM
+             return xV.stringLengthLimit && eV.length > xV.stringLengthLimit && (eV = `${eV.slice(0,xV.stringLengthLimit)}...`), eV
```

#### 70. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5002` → after: `L5002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5002) · [Before (L5002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5002)

```diff
-             rM.reason instanceof Error ? (iM = rM.reason, SM = [VO(`Uncaught (in promise) ${iM.name}: ${iM.message}`, OM.stringifyOptions)]) : (iM = new Error, SM = [VO("Uncaught (in promise)", OM.stringifyOptions), VO(rM.reason, OM.stringifyOptions)]), MM({
+             eV.reason instanceof Error ? (xV = eV.reason, YV = [SJ(`Uncaught (in promise) ${xV.name}: ${xV.message}`, JV.stringifyOptions)]) : (xV = new Error, YV = [SJ("Uncaught (in promise)", JV.stringifyOptions), SJ(eV.reason, JV.stringifyOptions)]), VV({
```

#### 71. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5064` → after: `L5064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5064) · [Before (L5064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5064)

```diff
-                   return "function" == typeof MM ? null !== (rM = MM.__rrweb_layer__) && void 0 !== rM ? rM : MM.__posthog_layer__ : void 0
+                   return "function" == typeof VV ? null !== (eV = VV.__rrweb_layer__) && void 0 !== eV ? eV : VV.__posthog_layer__ : void 0
```

#### 72. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5086` → after: `L5086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5086) · [Before (L5086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5086)

```diff
-       const aS = null != rS ? rS : {},
+       const YY = null != OJ ? OJ : {},
```

#### 73. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5104` → after: `L5104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5104) · [Before (L5104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5104)

```diff
-         return rM > iM && (OM.warn("min cannot be greater than max."), rM = iM), yS(MM) ? MM > iM ? (OM.warn(" cannot be  greater than max: " + iM + ". Using max value instead."), iM) : rM > MM ? (OM.warn(" cannot be less than min: " + rM + ". Using min value instead."), rM) : MM … [truncated]
+         return eV > xV && (JV.warn("min cannot be greater than max."), eV = xV), bY(VV) ? VV > xV ? (JV.warn(" cannot be  greater than max: " + xV + ". Using max value instead."), xV) : eV > VV ? (JV.warn(" cannot be less than min: " + eV + ". Using min value instead."), eV) : VV … [truncated]
```

#### 74. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5146` → after: `L5146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5146) · [Before (L5146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5146)

```diff
-           }(eS, `Native gzip produced invalid output: ${MM}`)
+           }(FY, `Native gzip produced invalid output: ${VV}`)
```

#### 75. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5245` → after: `L5245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5245) · [Before (L5245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5245)

```diff
-               iM.error(`You must initialize PostHog before calling ${MM}`)
+               xV.error(`You must initialize PostHog before calling ${VV}`)
```

#### 76. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5247` → after: `L5247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5247) · [Before (L5247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5247)

```diff
-             createLogger: (rM, iM) => WS(`${MM} ${rM}`, iM)
+             createLogger: (eV, xV) => GY(`${VV} ${eV}`, xV)
```

#### 77. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5266` → after: `L5266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5266) · [Before (L5266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5266)

```diff
-         } = null != OM ? OM : {};
+         } = null != JV ? JV : {};
```

#### 78. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5280` → after: `L5280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5280) · [Before (L5280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5280)

```diff
-           if (LS(MM)) return null !== (rM = MM.__posthog_layer__) && void 0 !== rM ? rM : MM.__rrweb_layer__
+           if (nY(VV)) return null !== (eV = VV.__posthog_layer__) && void 0 !== eV ? eV : VV.__rrweb_layer__
```

#### 79. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5347` → after: `L5347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5347) · [Before (L5347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5347)

```diff
-             return hS(MM) && MM ? MM : rM
+             return vY(VV) && VV ? VV : eV
```

#### 80. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5374` → after: `L5374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5374) · [Before (L5374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5374)

```diff
-         return Math.min(cS, null !== (rM = MM.payloadSizeLimitBytes) && void 0 !== rM ? rM : cS)
+         return Math.min(IY, null !== (eV = VV.payloadSizeLimitBytes) && void 0 !== eV ? eV : IY)
```

#### 81. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5406` → after: `L5406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5406) · [Before (L5406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5406)

```diff
-         return hS(SM) && (SM = parseInt(SM)), SM > iM ? `[SessionRecording] ${OM} body too large to record (${SM} bytes)` : MM
+         return vY(YV) && (YV = parseInt(YV)), YV > xV ? `[SessionRecording] ${JV} body too large to record (${YV} bytes)` : VV
```

#### 82. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5506` → after: `L5506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5506) · [Before (L5506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5506)

```diff
-         return lS(aM) ? aM : jM(aM)
+         return EY(yV) ? yV : UV(yV)
```

#### 83. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5608` → after: `L5608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5608) · [Before (L5608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5608)

```diff
-         return `${gj}: ${MM}`
+         return `${NU}: ${VV}`
```

#### 84. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5612` → after: `L5612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5612) · [Before (L5612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5612)

```diff
-         return `[SessionReplay] Body too large to record (> ${MM} bytes)`
+         return `[SessionReplay] Body too large to record (> ${VV} bytes)`
```

#### 85. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5739` → after: `L5739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5739) · [Before (L5739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5739)

```diff
-             if (jM && aM) return `Content-Type ${jM} is not supported`;
+             if (UV && yV) return `Content-Type ${UV} is not supported`;
```

#### 86. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6110` → after: `L6110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6110) · [Before (L6110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6110)

```diff
-         return 0 === rM ? Ha : (null == MM ? void 0 : MM.get_property(iM ? OM + iM : SM)) === jM ? La : ma
+         return 0 === eV ? Zy : (null == VV ? void 0 : VV.get_property(xV ? JV + xV : YV)) === UV ? ny : wy
```

#### 87. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6116` → after: `L6116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6116) · [Before (L6116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6116)

```diff
-           return "regex" === rM.matching && (null !== (OM = null == iM ? void 0 : iM.get(rM.url)) && void 0 !== OM ? OM : new RegExp(rM.url)).test(MM)
+           return "regex" === eV.matching && (null !== (JV = null == xV ? void 0 : xV.get(eV.url)) && void 0 !== JV ? JV : new RegExp(eV.url)).test(VV)
```

#### 88. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6121` → after: `L6121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6121) · [Before (L6121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6121)

```diff
-         return MM.includes("trigger_activated") ? La : MM.includes("trigger_pending") ? ma : Ha
+         return VV.includes("trigger_activated") ? ny : VV.includes("trigger_pending") ? wy : Zy
```

#### 89. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6268` → after: `L6268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6268) · [Before (L6268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6268)

```diff
-                   jM = lS(rM) ? !0 === rM : iM ? rM === iM : !!rM
+                   UV = EY(eV) ? !0 === eV : xV ? eV === xV : !!eV
```

#### 90. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6381` → after: `L6381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6381) · [Before (L6381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6381)

```diff
-         return rM ? aa : "trigger_activated" === iM ? Pa : "trigger_pending" === iM ? na : !1 === MM.isSampled ? ja : Pa
+         return eV ? Yy : "trigger_activated" === xV ? Uy : "trigger_pending" === xV ? yy : !1 === VV.isSampled ? Jy : Uy
```

#### 91. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6392` → after: `L6392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6392) · [Before (L6392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6392)

```diff
-         return iM && "trigger_pending" === rM ? na : iM && "trigger_disabled" === rM || OM && !MM.isSampled ? ja : !0 === MM.isSampled ? aa : Pa
+         return xV && "trigger_pending" === eV ? yy : xV && "trigger_disabled" === eV || JV && !VV.isSampled ? Jy : !0 === VV.isSampled ? Yy : Uy
```

#### 92. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6520` → after: `L6520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6520) · [Before (L6520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6520)

```diff
-           var OM = new(MM instanceof Da ? Da : MM instanceof ka ? ka : sa)(iM - rM);
+           var JV = new(VV instanceof Ry ? Ry : VV instanceof gy ? gy : Wy)(xV - eV);
```

#### 93. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6696` → after: `L6696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6696) · [Before (L6696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6696)

```diff
-           }, this.vt = MM => this._rrweb.mirror.lD(MM), this.bt = MM => {
+           }, this.vt = VV => this._rrweb.mirror.rD(VV), this.bt = VV => {
```

#### 94. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6698` → after: `L6698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6698) · [Before (L6698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6698)

```diff
-             return (null !== (rM = null === (iM = MM.removes) || void 0 === iM ? void 0 : iM.length) && void 0 !== rM ? rM : 0) + (null !== (OM = null === (SM = MM.attributes) || void 0 === SM ? void 0 : SM.length) && void 0 !== OM ? OM : 0) + (null !== (jM = null === (aM = MM.te … [truncated]
+             return (null !== (eV = null === (xV = VV.removes) || void 0 === xV ? void 0 : xV.length) && void 0 !== eV ? eV : 0) + (null !== (JV = null === (YV = VV.attributes) || void 0 === YV ? void 0 : YV.length) && void 0 !== JV ? JV : 0) + (null !== (UV = null === (yV = VV.te … [truncated]
```

#### 95. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6728-L6729` → after: `L6728-L6729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6728-L6729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6728-L6729) · [Before (L6728-L6729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6728-L6729)

```diff
-             bucketSize: null !== (iM = this.it.bucketSize) && void 0 !== iM ? iM : 100,
-             refillRate: null !== (OM = this.it.refillRate) && void 0 !== OM ? OM : 10,
+             bucketSize: null !== (xV = this.it.bucketSize) && void 0 !== xV ? xV : 100,
+             refillRate: null !== (JV = this.it.refillRate) && void 0 !== JV ? JV : 10,
```

#### 96. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6733` → after: `L6733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6733) · [Before (L6733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6733)

```diff
-           }), this.dt = null !== (SM = this.it.bytesBucketSize) && void 0 !== SM ? SM : 0, this.ht = null !== (jM = this.it.bytesRefillRate) && void 0 !== jM ? jM : 25600, this.kt = !Number.isFinite(this.dt) || 0 >= this.dt, this.ct = this.dt;
+           }), this.dt = null !== (YV = this.it.bytesBucketSize) && void 0 !== YV ? YV : 0, this.ht = null !== (UV = this.it.bytesRefillRate) && void 0 !== UV ? UV : 25600, this.kt = !Number.isFinite(this.dt) || 0 >= this.dt, this.ct = this.dt;
```

#### 97. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6735` → after: `L6735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6735) · [Before (L6735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6735)

```diff
-           this.xt = yS(aM) && Number.isFinite(aM) && aM > 0 ? aM : 3e5
+           this.xt = bY(yV) && Number.isFinite(yV) && yV > 0 ? yV : 3e5
```

#### 98. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6858` → after: `L6858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6858) · [Before (L6858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6858)

```diff
-           const OM = "person" === MM.type ? iM : rM,
+           const JV = "person" === VV.type ? xV : eV,
```

#### 99. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6869` → after: `L6869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6869) · [Before (L6869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6869)

```diff
-         return rM ? MM : "!" + MM
+         return eV ? VV : "!" + VV
```

#### 100. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6904` → after: `L6904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6904) · [Before (L6904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6904)

```diff
-             return yS(iM) ? iM : null
+             return bY(xV) ? xV : null
```

#### 101. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6930` → after: `L6930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6930) · [Before (L6930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6930)

```diff
-             zM && (LM ? this.qt("sampled") : eP.warn(`Sample rate (${iM}) has determined that this sessionId (${MM}) will not be sent to the server.`)), null === (rM = this._instance.persistence) || void 0 === rM || rM.register({
+             wV && (ZV ? this.qt("sampled") : Fp.warn(`Sample rate (${xV}) has determined that this sessionId (${VV}) will not be sent to the server.`)), null === (eV = this._instance.persistence) || void 0 === eV || eV.register({
```

#### 102. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7008` → after: `L7008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7008) · [Before (L7008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7008)

```diff
-               return SM ? aa : OM ? na : ja
+               return YV ? Yy : JV ? yy : Jy
```

#### 103. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7069` → after: `L7069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7069) · [Before (L7069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7069)

```diff
-                 QM = "string" == typeof rM && rM !== MM, zM = yS(iM) && iM !== jM, nM = rM === MM && yS(iM) && iM === jM && lS(OM) ? OM : null
+                 nV = "string" == typeof eV && eV !== VV, wV = bY(xV) && xV !== UV, QV = eV === VV && bY(xV) && xV === UV && EY(JV) ? JV : null
```

#### 104. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7125` → after: `L7125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7125) · [Before (L7125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7125)

```diff
-             return this.Gt.flatMap((rM => "trigger_pending" !== rM.triggerStatusNoSideEffects(MM) ? [] : rM.getPendingTriggerConditions(MM).map((MM => `trigger group "${rM.group.name}": ${MM}`))))
+             return this.Gt.flatMap((eV => "trigger_pending" !== eV.triggerStatusNoSideEffects(VV) ? [] : eV.getPendingTriggerConditions(VV).map((VV => `trigger group "${eV.group.name}": ${VV}`))))
```

#### 105. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7280` → after: `L7280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7280) · [Before (L7280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7280)

```diff
-           SM = 0 > OM ? iM : iM.slice(OM + 1);
+           YV = 0 > JV ? xV : xV.slice(JV + 1);
```

#### 106. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7282` → after: `L7282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7282) · [Before (L7282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7282)

```diff
-           return rM(SM) ? SM : void 0
+           return eV(YV) ? YV : void 0
```

#### 107. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7306` → after: `L7306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7306) · [Before (L7306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7306)

```diff
-           return SM.length ? SM : void 0
+           return YV.length ? YV : void 0
```

#### 108. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7318` → after: `L7318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7318) · [Before (L7318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7318)

```diff
-               iM = "string" == typeof MM ? [MM] : zS(MM) ? MM : [],
+               xV = "string" == typeof VV ? [VV] : QY(VV) ? VV : [],
```

#### 109. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7330` → after: `L7330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7330) · [Before (L7330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7330)

```diff
-           const OM = "@type" === QM ? jM.length ? "string" == typeof SM ? jM[0] : jM : void 0 : "@id" === QM ? FP(NP(MM, QM), rM) : vP(NP(MM, QM), iM.maskUrl);
+           const JV = "@type" === nV ? UV.length ? "string" == typeof YV ? UV[0] : UV : void 0 : "@id" === nV ? Lp(op(VV, nV), eV) : lp(op(VV, nV), xV.maskUrl);
```

#### 110. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7348` → after: `L7348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7348) · [Before (L7348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7348)

```diff
-         return HS(nM) || XP(PM, "@graph", nM), Object.keys(PM).length ? PM : null
+         return ZY(QV) || mp(pV, "@graph", QV), Object.keys(pV).length ? pV : null
```

#### 111. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7534` → after: `L7534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7534) · [Before (L7534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7534)

```diff
-         return zS(MM) && 0 === MM.length ? (mn = null !== (rM = mn) && void 0 !== rM ? rM : Qn([]), mn) : Qn(MM)
+         return QY(VV) && 0 === VV.length ? (wQ = null !== (eV = wQ) && void 0 !== eV ? eV : pQ([]), wQ) : pQ(VV)
```

#### 112. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7544` → after: `L7544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7544) · [Before (L7544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7544)

```diff
-           return zS(MM) && 0 === MM.length ? mn || (Hn = null !== (rM = Hn) && void 0 !== rM ? rM : zn([]).then((MM => (mn = MM, MM))).catch((MM => {
+           return QY(VV) && 0 === VV.length ? wQ || (ZQ = null !== (eV = ZQ) && void 0 !== eV ? eV : QQ([]).then((VV => (wQ = VV, VV))).catch((VV => {
```

#### 113. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7665` → after: `L7665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7665) · [Before (L7665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7665)

```diff
-           return yS(rM) ? rM : null
+           return bY(eV) ? eV : null
```

#### 114. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7669` → after: `L7669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7669) · [Before (L7669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7669)

```diff
-           return null !== (MM = null === (rM = this.re) || void 0 === rM ? void 0 : rM.getMinimumDuration(this.sessionId)) && void 0 !== MM ? MM : null
+           return null !== (VV = null === (eV = this.re) || void 0 === eV ? void 0 : eV.getMinimumDuration(this.sessionId)) && void 0 !== VV ? VV : null
```

#### 115. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7712` → after: `L7712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7712) · [Before (L7712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7712)

```diff
-             return yS(iM) && yS(OM) ? OM - iM : null
+             return bY(xV) && bY(JV) ? JV - xV : null
```

#### 116. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7757-L7760` → after: `L7757-L7760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7757-L7760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7757-L7760) · [Before (L7757-L7760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7757-L7760)

```diff
-             LM = null !== (jM = null == zM ? void 0 : zM.maskAllInputs) && void 0 !== jM ? jM : null == QM ? void 0 : QM.maskAllInputs,
-             mM = null !== (aM = null == zM ? void 0 : zM.maskTextSelector) && void 0 !== aM ? aM : null == QM ? void 0 : QM.maskTextSelector,
-             HM = null !== (PM = null == zM ? void 0 : zM.blockSelector) && void 0 !== PM ? PM : null == QM ? void 0 : QM.blockSelector,
-             hM = null !== (nM = null == zM ? void 0 : zM.maskAllElementAttributes) && void 0 !== nM ? nM : null == QM ? void 0 : QM.maskAllElementAttributes;
+             ZV = null !== (UV = null == wV ? void 0 : wV.maskAllInputs) && void 0 !== UV ? UV : null == nV ? void 0 : nV.maskAllInputs,
+             vV = null !== (yV = null == wV ? void 0 : wV.maskTextSelector) && void 0 !== yV ? yV : null == nV ? void 0 : nV.maskTextSelector,
+             rV = null !== (pV = null == wV ? void 0 : wV.blockSelector) && void 0 !== pV ? pV : null == nV ? void 0 : nV.blockSelector,
+             kV = null !== (QV = null == wV ? void 0 : wV.maskAllElementAttributes) && void 0 !== QV ? QV : null == nV ? void 0 : nV.maskAllElementAttributes;
```

#### 117. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7797-L7799` → after: `L7797-L7799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7797-L7799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7797-L7799) · [Before (L7797-L7799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7797-L7799)

```diff
-             QM = null !== (rM = null !== (iM = null == PM ? void 0 : PM.recordCanvas) && void 0 !== iM ? iM : null == nM ? void 0 : nM.enabled) && void 0 !== rM && rM,
-             zM = null !== (OM = null !== (SM = null == PM ? void 0 : PM.canvasFps) && void 0 !== SM ? SM : null == nM ? void 0 : nM.fps) && void 0 !== OM ? OM : 4;
-           let LM = null !== (jM = null !== (aM = null == PM ? void 0 : PM.canvasQuality) && void 0 !== aM ? aM : null == nM ? void 0 : nM.quality) && void 0 !== jM ? jM : .4;
+             nV = null !== (eV = null !== (xV = null == pV ? void 0 : pV.recordCanvas) && void 0 !== xV ? xV : null == QV ? void 0 : QV.enabled) && void 0 !== eV && eV,
+             wV = null !== (JV = null !== (YV = null == pV ? void 0 : pV.canvasFps) && void 0 !== YV ? YV : null == QV ? void 0 : QV.fps) && void 0 !== JV ? JV : 4;
+           let ZV = null !== (UV = null !== (yV = null == pV ? void 0 : pV.canvasQuality) && void 0 !== yV ? yV : null == QV ? void 0 : QV.quality) && void 0 !== UV ? UV : .4;
```

#### 118. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7814` → after: `L7814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7814) · [Before (L7814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7814)

```diff
-           return null != iM ? iM : rM
+           return null != xV ? xV : eV
```

#### 119. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7827` → after: `L7827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7827) · [Before (L7827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7827)

```diff
-             QM = !!(lS(PM) ? PM : nM);
+             nV = !!(EY(pV) ? pV : QV);
```

#### 120. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7840` → after: `L7840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7840) · [Before (L7840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7840)

```diff
-           if (this.jL && LS(jM))
+           if (this.bZ && nY(UV))
```

#### 121. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7873` → after: `L7873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7873) · [Before (L7873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7873)

```diff
-                   return !iM && rM.isInitial ? iM : OM(OM({}, rM), {}, {
+                   return !xV && eV.isInitial ? xV : JV(JV({}, eV), {}, {
```

#### 122. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7891` → after: `L7891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7891) · [Before (L7891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7891)

```diff
-                   return dS(aM) && jM ? (Qj.add(jM), jM) : null != aM ? aM : void 0
+                   return kY(yV) && UV ? (pU.add(UV), UV) : null != yV ? yV : void 0
```

#### 123. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7901` → after: `L7901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7901) · [Before (L7901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7901)

```diff
-               })(this._instance.config, this.jL, MM)), {}, {
+               })(this._instance.config, this.bZ, VV)), {}, {
```

#### 124. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7937` → after: `L7937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7937) · [Before (L7937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7937)

```diff
-             return null !== (iM = null == OM ? void 0 : OM.name) && void 0 !== iM ? iM : null == OM ? void 0 : OM.url
+             return null !== (xV = null == JV ? void 0 : JV.name) && void 0 !== xV ? xV : null == JV ? void 0 : JV.url
```

#### 125. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8007` → after: `L8007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR8007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L8007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8007) · [Before (L8007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8007)

```diff
-             return yS(MM) && Number.isFinite(MM) && MM >= 1e3 && 36e5 >= MM ? MM : 6e4
+             return bY(VV) && Number.isFinite(VV) && VV >= 1e3 && 36e5 >= VV ? VV : 6e4
```

#### 126. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8009` → after: `L8009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR8009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L8009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8009) · [Before (L8009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8009)

```diff
-           return null !== (rM = null === (iM = this._instance.config.session_recording) || void 0 === iM ? void 0 : iM.full_snapshot_interval_millis) && void 0 !== rM ? rM : 3e5
+           return null !== (eV = null === (xV = this._instance.config.session_recording) || void 0 === xV ? void 0 : xV.full_snapshot_interval_millis) && void 0 !== eV ? eV : 3e5
```

#### 127. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8039` → after: `L8039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR8039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L8039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8039) · [Before (L8039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8039)

```diff
-               const iM = "url" === MM ? vj : Fj;
+               const xV = "url" === VV ? lU : LU;
```

#### 128. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8058` → after: `L8058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR8058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L8058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8058) · [Before (L8058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8058)

```diff
-             rM = mS(MM) ? MM : JSON.parse(MM)
+             eV = wY(VV) ? VV : JSON.parse(VV)
```

#### 129. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8064` → after: `L8064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR8064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L8064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8064) · [Before (L8064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8064)

```diff
-             const OM = null !== (iM = rM.cache_timestamp) && void 0 !== iM ? iM : Date.now();
+             const JV = null !== (xV = eV.cache_timestamp) && void 0 !== xV ? xV : Date.now();
```

#### 130. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8186-L8187` → after: `L8186-L8187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR8186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L8186-L8187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8186-L8187) · [Before (L8186-L8187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8186-L8187)

```diff
-           const iM = `${this.sessionId}:${MM}`;
-           iM !== this.Vn && (this.Vn = iM, On.info(`holding buffer: ${MM}. nothing is uploaded until the user interacts with the page`))
+           const xV = `${this.sessionId}:${VV}`;
+           xV !== this.Vn && (this.Vn = xV, eQ.info(`holding buffer: ${VV}. nothing is uploaded until the user interacts with the page`))
```

#### 131. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8342-L8343` → after: `L8342-L8343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR8342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L8342-L8343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8342-L8343) · [Before (L8342-L8343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8342-L8343)

```diff
-           const EM = null !== (OM = null !== (SM = null !== (jM = null == dM ? void 0 : dM.currentSessionId) && void 0 !== jM ? jM : null == yM ? void 0 : yM.nextSessionId) && void 0 !== SM ? SM : null == lM ? void 0 : lM.sessionId) && void 0 !== OM ? OM : this.Xt,
-             UM = null !== (aM = null !== (PM = null !== (nM = null == dM ? void 0 : dM.currentWindowId) && void 0 !== nM ? nM : null == yM ? void 0 : yM.nextWindowId) && void 0 !== PM ? PM : null == lM ? void 0 : lM.windowId) && void 0 !== aM ? aM : this.je;
+           const qV = null !== (JV = null !== (YV = null !== (UV = null == EV ? void 0 : EV.currentSessionId) && void 0 !== UV ? UV : null == BV ? void 0 : BV.nextSessionId) && void 0 !== YV ? YV : null == jV ? void 0 : jV.sessionId) && void 0 !== JV ? JV : this.Xt,
+             tV = null !== (yV = null !== (pV = null !== (QV = null == EV ? void 0 : EV.currentWindowId) && void 0 !== QV ? QV : null == BV ? void 0 : BV.nextWindowId) && void 0 !== pV ? pV : null == jV ? void 0 : jV.windowId) && void 0 !== yV ? yV : this.je;
```

#### 132. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8436` → after: `L8436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR8436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L8436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8436) · [Before (L8436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8436)

```diff
-           return null !== (MM = null === (rM = this.re) || void 0 === rM ? void 0 : rM.getPendingTriggerConditions(this.sessionId)) && void 0 !== MM ? MM : []
+           return null !== (VV = null === (eV = this.re) || void 0 === eV ? void 0 : eV.getPendingTriggerConditions(this.sessionId)) && void 0 !== VV ? VV : []
```

#### 133. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8447` → after: `L8447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR8447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L8447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8447) · [Before (L8447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8447)

```diff
-             OM = `${this.sessionId}:${iM}`;
+             JV = `${this.sessionId}:${xV}`;
```

#### 134. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8450` → after: `L8450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR8450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L8450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8450) · [Before (L8450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8450)

```diff
-           }), On.info(`buffering: ${iM}`))
+           }), eQ.info(`buffering: ${xV}`))
```

#### 135. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8649` → after: `L8649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR8649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L8649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8649) · [Before (L8649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8649)

```diff
-             const MM = null != LM ? LM : {},
+             const VV = null != ZV ? ZV : {},
```

#### 136. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8671` → after: `L8671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR8671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L8671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8671) · [Before (L8671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8671)

```diff
-                 return null !== (OM = iM(MM)) && void 0 !== OM ? OM : null
+                 return null !== (JV = xV(VV)) && void 0 !== JV ? JV : null
```

#### 137. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8676` → after: `L8676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR8676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L8676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8676) · [Before (L8676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8676)

```diff
-           }), this.ln && (rM.maskAllInputs = null === (SM = this.ln.maskAllInputs) || void 0 === SM || SM, rM.maskTextSelector = null !== (jM = this.ln.maskTextSelector) && void 0 !== jM ? jM : void 0, rM.blockSelector = null !== (aM = this.ln.blockSelector) && void 0 !== aM ? aM … [truncated]
+           }), this.ln && (eV.maskAllInputs = null === (YV = this.ln.maskAllInputs) || void 0 === YV || YV, eV.maskTextSelector = null !== (UV = this.ln.maskTextSelector) && void 0 !== UV ? UV : void 0, eV.blockSelector = null !== (yV = this.ln.blockSelector) && void 0 !== yV ? yV … [truncated]
```

#### 138. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8679` → after: `L8679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR8679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L8679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8679) · [Before (L8679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8679)

```diff
-           this.Bn = null !== (MM = this.Bn) && void 0 !== MM ? MM : new mP(nM, {
+           this.Bn = null !== (VV = this.Bn) && void 0 !== VV ? VV : new wp(QV, {
```

#### 139. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8683` → after: `L8683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR8683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L8683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8683) · [Before (L8683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8683)

```diff
-               const iM = `Too many mutations on node '${MM}'. Rate limiting. This could be due to SVG animations or something similar`;
+               const xV = `Too many mutations on node '${VV}'. Rate limiting. This could be due to SVG animations or something similar`;
```

#### 140. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8713` → after: `L8713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR8713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L8713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8713) · [Before (L8713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8713)

```diff
-                 return rM.maskAllElementAttributes || rM.maskAttributeFn || (null == iM ? void 0 : iM.length) && !iM.includes("id") ? sP : iM => {
+                 return eV.maskAllElementAttributes || eV.maskAttributeFn || (null == xV ? void 0 : xV.length) && !xV.includes("id") ? Wp : xV => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (fo1voe.f743fbcf → pxmq3aq.c63b303d)

- **File**: `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (140 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af)

#### 1. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L4)

```diff
-   34654: (MM, rM, iM) => {
+   34907: (VV, eV, xV) => {
```

#### 2. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L20-L21` → after: `L20-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L20-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L20-L21) · [Before (L20-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L20-L21)

```diff
-     var PM = iM(34660).d,
-       nM = iM(34663).b,
+     var pV = xV(34913).b,
+       QV = xV(34918).e,
```

#### 3. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L23` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L23) · [Before (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L23)

```diff
-     rM.e = function(MM) {
+     eV.b = function(VV) {
```

#### 4. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L39` → after: `L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L39) · [Before (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L39)

```diff
-   34663: (MM, rM) => {
+   34918: (VV, eV) => {
```

#### 5. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L125` → after: `L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L125) · [Before (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L125)

```diff
-     }, rM.b = zM
+     }, eV.e = wV
```

#### 6. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L127` → after: `L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L127) · [Before (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L127)

```diff
-   34660: (MM, rM) => {
+   34913: (VV, eV) => {
```

#### 7. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L175` → after: `L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L175) · [Before (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L175)

```diff
-     }, rM.d = jM
+     }, eV.b = UV
```

#### 8. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L177` → after: `L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L177) · [Before (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L177)

```diff
-   34810: (MM, rM, iM) => {
+   35078: (VV, eV, xV) => {
```

#### 9. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L181-L183` → after: `L181-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L181-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L181-L183) · [Before (L181-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L181-L183)

```diff
-     var OM = iM(5479),
-       SM = iM(1073),
-       jM = iM(34814),
+     var JV = xV(5589),
+       YV = xV(1099),
+       UV = xV(35081),
```

#### 10. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L187` → after: `L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L187) · [Before (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L187)

```diff
-       return aM()('/*! For license information please see sessionReplayVideo.worker.63062aef.worker.js.LICENSE.txt */\n(()=>{var MM={5:()=>{}},rM={};function iM(OM){var SM=rM[OM];if(void 0!==SM)return SM.exports;var jM=rM[OM]={exports:{}};return MM[OM](jM,jM.exports,iM),jM.export … [truncated]
+       return yV()('/*! For license information please see sessionReplayVideo.worker.d12707b1.worker.js.LICENSE.txt */\n(()=>{var VV={6:()=>{}},eV={};function xV(JV){var YV=eV[JV];if(void 0!==YV)return YV.exports;var UV=eV[JV]={exports:{}};return VV[JV](UV,UV.exports,xV),UV.export … [truncated]
```

#### 11. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L189-L191` → after: `L189-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L189-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L189-L191) · [Before (L189-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L189-L191)

```diff
-     var nM = iM(3057),
-       QM = iM(22),
-       zM = iM(83);
+     var QV = xV(3091),
+       nV = xV(32),
+       wV = xV(99);
```

#### 12. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L263` → after: `L263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L263) · [Before (L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L263)

```diff
-           return void(!(jM instanceof DOMException && "InvalidStateError" === jM.name) && ++this.unrecoverableGrabFailures >= 30 && (this.stop(), this.onUnavailable(`canvas grabs keep failing: ${jM instanceof Error?jM.message:String(jM)}`)))
+           return void(!(UV instanceof DOMException && "InvalidStateError" === UV.name) && ++this.unrecoverableGrabFailures >= 30 && (this.stop(), this.onUnavailable(`canvas grabs keep failing: ${UV instanceof Error?UV.message:String(UV)}`)))
```

#### 13. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L277` → after: `L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L277) · [Before (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L277)

```diff
-     var hM = iM(1327);
+     var kV = xV(1348);
```

#### 14. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L289` → after: `L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L289) · [Before (L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L289)

```diff
-         const MM = (0, hM.M)().gameRender();
+         const VV = (0, kV.K)().gameRender();
```

#### 15. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L355` → after: `L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L355) · [Before (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L355)

```diff
-           return MM.type === OM.g.IncrementalSnapshot ? null === (rM = MM.data) || void 0 === rM ? void 0 : rM.source : void 0
+           return VV.type === JV.d.IncrementalSnapshot ? null === (eV = VV.data) || void 0 === eV ? void 0 : eV.source : void 0
```

#### 16. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L361` → after: `L361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L361) · [Before (L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L361)

```diff
-           if (MM.type === OM.g.Custom && "$json_ld" === (null === iM || void 0 === iM ? void 0 : iM.tag)) return;
+           if (VV.type === JV.d.Custom && "$json_ld" === (null === xV || void 0 === xV ? void 0 : xV.tag)) return;
```

#### 17. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L368` → after: `L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L368) · [Before (L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L368)

```diff
-         if (MM.type === OM.g.Plugin && "rrweb/console@1" === (null === SM || void 0 === SM ? void 0 : SM.plugin)) {
+         if (VV.type === JV.d.Plugin && "rrweb/console@1" === (null === YV || void 0 === YV ? void 0 : YV.plugin)) {
```

#### 18. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L407` → after: `L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L407) · [Before (L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L407)

```diff
-           if (SM = rM ? MM : SM, PM) null !== (jM = OM) && void 0 !== jM && jM.isActive && (iM += Math.max(1, OM.end - OM.start)), OM = {
+           if (YV = eV ? VV : YV, pV) null !== (UV = JV) && void 0 !== UV && UV.isActive && (xV += Math.max(1, JV.end - JV.start)), JV = {
```

#### 19. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L437` → after: `L437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L437) · [Before (L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L437)

```diff
-         const aM = !this.dL && this.chars + iM > this.chunkChars ? this.finish() : null;
+         const yV = !this.XZ && this.chars + xV > this.chunkChars ? this.finish() : null;
```

#### 20. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L443` → after: `L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L443) · [Before (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L443)

```diff
-         if (this.dL) return null;
+         if (this.XZ) return null;
```

#### 21. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L486` → after: `L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L486) · [Before (L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L486)

```diff
-       return jM.byteLength > dM || aM > yM ? (console.warn(`Session replay: dropped a ${aM}-byte page recording chunk, over the size limits`), null) : {
+       return UV.byteLength > EV || yV > BV ? (console.warn(`Session replay: dropped a ${yV}-byte page recording chunk, over the size limits`), null) : {
```

#### 22. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L493` → after: `L493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L493) · [Before (L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L493)

```diff
-     var uM = iM(34647);
+     var zV = xV(34905);
```

#### 23. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L501` → after: `L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L501) · [Before (L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L501)

```diff
-         null === rM || null !== this.tailTimer || this.writer.dL || (this.tailTimer = setTimeout((() => {
+         null === eV || null !== this.tailTimer || this.writer.XZ || (this.tailTimer = setTimeout((() => {
```

#### 24. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L518` → after: `L518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L518) · [Before (L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L518)

```diff
-           for (const MM of this.packing) MM.packed ??= (0, uM.c)(MM.text.text);
+           for (const VV of this.packing) VV.packed ??= (0, zV.e)(VV.text.text);
```

#### 25. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L521` → after: `L521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L521) · [Before (L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L521)

```diff
-             packed: (0, uM.c)(MM.text)
+             packed: (0, zV.e)(VV.text)
```

#### 26. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L551` → after: `L551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L551) · [Before (L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L551)

```diff
-           iM.packed = (0, uM.c)(MM.text), this.queuePacked()
+           xV.packed = (0, zV.e)(VV.text), this.queuePacked()
```

#### 27. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L590` → after: `L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L590) · [Before (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L590)

```diff
-       return aM()('(()=>{var MM={7:(MM,rM,iM)=>{function OM(){return"object"===typeof process&&"object"===typeof process.versions&&"undefined"!==typeof process.versions.node}function SM(MM){return MM instanceof Uint8Array&&(!OM()||!Buffer.isBuffer(MM))}function jM(MM){return MM i … [truncated]
+       return yV()('(()=>{var VV={4:(VV,eV,xV)=>{function JV(){return"object"===typeof process&&"object"===typeof process.versions&&"undefined"!==typeof process.versions.node}function YV(VV){return VV instanceof Uint8Array&&(!JV()||!Buffer.isBuffer(VV))}function UV(VV){return VV i … [truncated]
```

#### 28. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L600` → after: `L600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L600) · [Before (L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L600)

```diff
-           const SM = null !== (OM = this.worker) && void 0 !== OM ? OM : this.start();
+           const YV = null !== (JV = this.worker) && void 0 !== JV ? JV : this.start();
```

#### 29. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L625` → after: `L625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L625) · [Before (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L625)

```diff
-           return this.broke(`didn't start: ${String(MM)}`), null
+           return this.broke(`didn't start: ${String(VV)}`), null
```

#### 30. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L652` → after: `L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L652) · [Before (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L652)

```diff
-         console.warn(`Session replay: page recording worker failed, packing on the main thread: ${MM}`), this.fail(new Error(`page recording worker failed: ${MM}`))
+         console.warn(`Session replay: page recording worker failed, packing on the main thread: ${VV}`), this.fail(new Error(`page recording worker failed: ${VV}`))
```

#### 31. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L664-L668` → after: `L664-L668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L664-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L664-L668) · [Before (L664-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L664-L668)

```diff
-     var sM = iM(34785);
-     var DM = iM(34631),
-       kM = iM(94),
-       ZM = iM(30),
-       oM = iM(2579);
+     var gV = xV(35045);
+     var DV = xV(34886),
+       iV = xV(110),
+       CV = xV(40),
+       aV = xV(2635);
```

#### 32. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L674-L675` → after: `L674-L675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L674-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L674-L675) · [Before (L674-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L674-L675)

```diff
-       const rM = ZM.g.getItem(MM);
-       return "number" === typeof rM && Number.isFinite(rM) ? rM : null
+       const eV = CV.m.getItem(VV);
+       return "number" === typeof eV && Number.isFinite(eV) ? eV : null
```

#### 33. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L754` → after: `L754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L754) · [Before (L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L754)

```diff
-             console.warn(`Session replay part joiner failed on video segment ${rM.sequence}; uploading it straight to storage.`, MM), MM instanceof xM || (this.downUntilMs = this.options.nowMs() + AM), this.handBack(rM, MM instanceof xM ? MM.reason : "unreachable")
+             console.warn(`Session replay part joiner failed on video segment ${eV.sequence}; uploading it straight to storage.`, VV), VV instanceof LV || (this.downUntilMs = this.options.nowMs() + lV), this.handBack(eV, VV instanceof LV ? VV.reason : "unreachable")
```

#### 34. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L779` → after: `L779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L779) · [Before (L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L779)

```diff
-             if (void 0 === iM) throw new xM("missing", `the joiner asked for part ${rM} of ${MM.parts.length}`);
+             if (void 0 === xV) throw new LV("missing", `the joiner asked for part ${eV} of ${VV.parts.length}`);
```

#### 35. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L805` → after: `L805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L805) · [Before (L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L805)

```diff
-           return new xM("refused", `refused: ${MM.reason}`)
+           return new LV("refused", `refused: ${VV.reason}`)
```

#### 36. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L808` → after: `L808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L808) · [Before (L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L808)

```diff
-         return new xM(rM, `answered ${MM.outcome}`)
+         return new LV(eV, `answered ${VV.outcome}`)
```

#### 37. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L826-L829` → after: `L826-L829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L826-L829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L826-L829) · [Before (L826-L829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L826-L829)

```diff
-     var XM = iM(1215),
-       IM = iM(34639),
-       KM = iM(34788),
-       qM = iM(34799);
+     var HV = xV(1241),
+       uV = xV(34892),
+       sV = xV(35048),
+       SV = xV(35063);
```

#### 38. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L832` → after: `L832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L832) · [Before (L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L832)

```diff
-       return `replayJoiner/${MM}`
+       return `replayJoiner/${VV}`
```

#### 39. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L836` → after: `L836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L836) · [Before (L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L836)

```diff
-         let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : IM.h;
+         let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uV.e;
```

#### 40. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L840` → after: `L840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L840) · [Before (L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L840)

```diff
-         const iM = (0, KM.i)(MM, rM),
+         const xV = (0, sV.e)(VV, eV),
```

#### 41. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L846` → after: `L846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L846) · [Before (L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L846)

```diff
-         return this.post("/v1/finish", rM, (0, IM.k)(rM), 3e4, MM.sequence)
+         return this.post("/v1/finish", eV, (0, uV.f)(eV), 3e4, VV.sequence)
```

#### 42. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L849` → after: `L849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L849) · [Before (L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L849)

```diff
-         return !this.keepalive.isInFlight(TM(MM.sequence)) && this.keepalive.sendBeacon(`${this.baseUrl}${FM}`, JSON.stringify(MM))
+         return !this.keepalive.isInFlight(IV(VV.sequence)) && this.keepalive.sendBeacon(`${this.baseUrl}${mV}`, JSON.stringify(VV))
```

#### 43. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L852` → after: `L852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L852) · [Before (L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L852)

```diff
-         const jM = `${this.baseUrl}${MM}`,
+         const UV = `${this.baseUrl}${VV}`,
```

#### 44. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L859` → after: `L859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L859) · [Before (L859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L859)

```diff
-             signal: (0, XM.q)(OM)
+             signal: (0, HV.u)(JV)
```

#### 45. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L861-L862` → after: `L861-L862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L861-L862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L861-L862) · [Before (L861-L862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L861-L862)

```diff
-           PM = iM <= IM.e ? await this.keepalive.fetch(jM, aM, iM, TM(SM)) : await fetch(jM, aM);
-         if (!PM.ok) throw new qM.d(`Part joiner ${MM} failed with ${PM.status}`, PM.status);
+           pV = xV <= uV.b ? await this.keepalive.fetch(UV, yV, xV, IV(YV)) : await fetch(UV, yV);
+         if (!pV.ok) throw new SV.d(`Part joiner ${VV} failed with ${pV.status}`, pV.status);
```

#### 46. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L869` → after: `L869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L869) · [Before (L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L869)

```diff
-         releaseUrl: `${MM.url}${FM}`,
+         releaseUrl: `${VV.url}${mV}`,
```

#### 47. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L872` → after: `L872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L872) · [Before (L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L872)

```diff
-           url: `${MM.url}/v1/relay`,
+           url: `${VV.url}/v1/relay`,
```

#### 48. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L877-L878` → after: `L877-L878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L877-L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L877-L878) · [Before (L877-L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L877-L878)

```diff
-     var Mr = iM(34633),
-       rr = iM(34670);
+     var Ve = xV(34889),
+       ee = xV(34924);
```

#### 49. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L881` → after: `L881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L881) · [Before (L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L881)

```diff
-       return (0, DM.d)().manifestUrl
+       return (0, DV.c)().manifestUrl
```

#### 50. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L896` → after: `L896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L896) · [Before (L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L896)

```diff
-         const SM = Math.round((0, sM.e)());
+         const YV = Math.round((0, gV.c)());
```

#### 51. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L923` → after: `L923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L923) · [Before (L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L923)

```diff
-         MM > (null !== (iM = null === (OM = this.manifest.still) || void 0 === OM ? void 0 : OM.atMs) && void 0 !== iM ? iM : -1 / 0) && (this.manifest.still = {
+         VV > (null !== (xV = null === (JV = this.manifest.still) || void 0 === JV ? void 0 : JV.atMs) && void 0 !== xV ? xV : -1 / 0) && (this.manifest.still = {
```

#### 52. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L946` → after: `L946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L946) · [Before (L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L946)

```diff
-           joinedAtMs: Math.round((0, sM.e)()),
+           joinedAtMs: Math.round((0, gV.c)()),
```

#### 53. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L963` → after: `L963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L963) · [Before (L963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L963)

```diff
-         MM && null === MM.leftAtMs && (MM.leftAtMs = Math.round((0, sM.e)()))
+         VV && null === VV.leftAtMs && (VV.leftAtMs = Math.round((0, gV.c)()))
```

#### 54. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L974` → after: `L974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L974) · [Before (L974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L974)

```diff
-         if (this.sending) return void(this.queuedSend = jr(null !== (rM = this.queuedSend) && void 0 !== rM ? rM : [], MM));
+         if (this.sending) return void(this.queuedSend = Ue(null !== (eV = this.queuedSend) && void 0 !== eV ? eV : [], VV));
```

#### 55. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L987` → after: `L987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L987) · [Before (L987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L987)

```diff
-           of null !== (rM = this.prepareSend(MM)) && void 0 !== rM ? rM : []) {
+           of null !== (eV = this.prepareSend(VV)) && void 0 !== eV ? eV : []) {
```

#### 56. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L989` → after: `L989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L989) · [Before (L989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L989)

```diff
-           IM.h.sendBeacon(ir(), JSON.stringify(iM)) || (0, Mr.b)(ir(), iM)
+           uV.e.sendBeacon(xe(), JSON.stringify(xV)) || (0, Ve.b)(xe(), xV)
```

#### 57. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1018` → after: `L1018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1018) · [Before (L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1018)

```diff
-         this.manifest.endedAtMs = Math.round((0, sM.e)());
+         this.manifest.endedAtMs = Math.round((0, gV.c)());
```

#### 58. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1116` → after: `L1116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1116) · [Before (L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1116)

```diff
-     var ar = iM(2590);
+     var ye = xV(2645);
```

#### 59. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1142` → after: `L1142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1142) · [Before (L1142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1142)

```diff
-         }, null === (jM = navigator.locks) || void 0 === jM || jM.request((0, ar.q)(rM.recordingId), (() => new Promise((() => {})))), this.putRecording()
+         }, null === (UV = navigator.locks) || void 0 === UV || UV.request((0, ye.p)(eV.recordingId), (() => new Promise((() => {})))), this.putRecording()
```

#### 60. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1193` → after: `L1193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1193) · [Before (L1193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1193)

```diff
-         this.record.nextDomSequence = Math.max(null !== (SM = this.record.nextDomSequence) && void 0 !== SM ? SM : 0, MM + 1), this.setMarker(), this.journal.queueDom(this.snapshot(), {
+         this.record.nextDomSequence = Math.max(null !== (YV = this.record.nextDomSequence) && void 0 !== YV ? YV : 0, VV + 1), this.setMarker(), this.journal.queueDom(this.snapshot(), {
```

#### 61. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1221` → after: `L1221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1221) · [Before (L1221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1221)

```diff
-         ZM.g.setItem(ar.m, !0)
+         CV.m.setItem(ye.h, !0)
```

#### 62. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1281` → after: `L1281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1281) · [Before (L1281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1281)

```diff
-     var zr = iM(34793);
+     var we = xV(35055);
```

#### 63. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1284` → after: `L1284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1284) · [Before (L1284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1284)

```diff
-         maxBytes: OM.s
+         maxBytes: JV.x
```

#### 64. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1289` → after: `L1289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1289) · [Before (L1289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1289)

```diff
-         let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : IM.h;
+         let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : uV.e;
```

#### 65. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1303` → after: `L1303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1303) · [Before (L1303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1303)

```diff
-         const jM = iM.byteLength <= Lr.maxBytes ? iM : OM;
+         const UV = xV.byteLength <= Ze.maxBytes ? xV : JV;
```

#### 66. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1313` → after: `L1313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1313) · [Before (L1313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1313)

```diff
-         if (this.stopped || null === iM || iM.atMs <= (null !== (MM = null === (rM = this.queued) || void 0 === rM ? void 0 : rM.atMs) && void 0 !== MM ? MM : -1 / 0)) return;
+         if (this.stopped || null === xV || xV.atMs <= (null !== (VV = null === (eV = this.queued) || void 0 === eV ? void 0 : eV.atMs) && void 0 !== VV ? VV : -1 / 0)) return;
```

#### 67. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1343` → after: `L1343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1343) · [Before (L1343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1343)

```diff
-         if (this.stopped || null === SM || SM.atMs <= (null !== (MM = null === (rM = this.manifest.contents.still) || void 0 === rM ? void 0 : rM.atMs) && void 0 !== MM ? MM : -1 / 0)) return;
+         if (this.stopped || null === YV || YV.atMs <= (null !== (VV = null === (eV = this.manifest.contents.still) || void 0 === eV ? void 0 : eV.atMs) && void 0 !== VV ? VV : -1 / 0)) return;
```

#### 68. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1346` → after: `L1346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1346) · [Before (L1346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1346)

```diff
-         const aM = null !== (OM = null === jM || void 0 === jM ? void 0 : jM.sequence) && void 0 !== OM ? OM : this.nextSequence,
+         const yV = null !== (JV = null === UV || void 0 === UV ? void 0 : UV.sequence) && void 0 !== JV ? JV : this.nextSequence,
```

#### 69. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1358` → after: `L1358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1358) · [Before (L1358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1358)

```diff
-         }, rM, mr, this.keepalive)) && void 0 !== iM ? iM : null;
+         }, eV, ve, this.keepalive)) && void 0 !== xV ? xV : null;
```

#### 70. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1363` → after: `L1363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1363) · [Before (L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1363)

```diff
-         } = (0, zr.f)(MM, rM, mr);
+         } = (0, we.l)(VV, eV, ve);
```

#### 71. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1377-L1378` → after: `L1377-L1378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1377-L1378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1377-L1378) · [Before (L1377-L1378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1377-L1378)

```diff
-     var hr = iM(2595);
-     const Jr = IM.e;
+     var ke = xV(2647);
+     const be = uV.b;
```

#### 72. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1404` → after: `L1404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1404) · [Before (L1404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1404)

```diff
-         if ((null === rM || void 0 === rM ? void 0 : rM.sequence) === MM) return this.telemetry = null, yr(rM.sQ, this.nowMs()) ? rM.sQ.target : void 0
+         if ((null === eV || void 0 === eV ? void 0 : eV.sequence) === VV) return this.telemetry = null, Be(eV.hn, this.nowMs()) ? eV.hn.target : void 0
```

#### 73. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1412` → after: `L1412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1412) · [Before (L1412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1412)

```diff
-           SM = null === OM || void 0 === OM ? void 0 : OM.sQ.get(iM);
+           YV = null === JV || void 0 === JV ? void 0 : JV.hn.get(xV);
```

#### 74. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1414` → after: `L1414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1414) · [Before (L1414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1414)

```diff
-           for (const [jM, aM] of OM.sQ) aM.expiresAtMs <= SM.expiresAtMs && OM.sQ.delete(jM)
+           for (const [UV, yV] of JV.hn) yV.expiresAtMs <= YV.expiresAtMs && JV.hn.delete(UV)
```

#### 75. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1427` → after: `L1427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1427) · [Before (L1427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1427)

```diff
-           sQ: new Map,
+           hn: new Map,
```

#### 76. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1432` → after: `L1432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1432) · [Before (L1432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1432)

```diff
-         const iM = MM.sQ.get(rM);
+         const xV = VV.hn.get(eV);
```

#### 77. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1438` → after: `L1438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1438) · [Before (L1438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1438)

```diff
-         return this.telemetryAsked === MM || null !== rM && rM.sequence === MM && yr(rM.sQ, this.nowMs()) ? null : MM
+         return this.telemetryAsked === VV || null !== eV && eV.sequence === VV && Be(eV.hn, this.nowMs()) ? null : VV
```

#### 78. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1466` → after: `L1466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1466) · [Before (L1466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1466)

```diff
-               MM.sQ.set(rM + OM, {
+               VV.hn.set(eV + JV, {
```

#### 79. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1471` → after: `L1471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1471) · [Before (L1471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1471)

```diff
-             return null !== SM && SM >= this.nextTelemetrySequence() && (null !== (jM = null === (aM = this.telemetry) || void 0 === aM ? void 0 : aM.sequence) && void 0 !== jM ? jM : -1) <= SM && void 0 !== iM.telemetryTarget && (this.telemetry = {
+             return null !== YV && YV >= this.nextTelemetrySequence() && (null !== (UV = null === (yV = this.telemetry) || void 0 === yV ? void 0 : yV.sequence) && void 0 !== UV ? UV : -1) <= YV && void 0 !== xV.telemetryTarget && (this.telemetry = {
```

#### 80. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1473` → after: `L1473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1473) · [Before (L1473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1473)

```diff
-               sQ: {
+               hn: {
```

#### 81. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1497` → after: `L1497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1497) · [Before (L1497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1497)

```diff
-       return `${MM}:${rM}`
+       return `${VV}:${eV}`
```

#### 82. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1517` → after: `L1517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1517) · [Before (L1517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1517)

```diff
-           return null !== (MM = this.nextSequence.get("telemetry")) && void 0 !== MM ? MM : 0
+           return null !== (VV = this.nextSequence.get("telemetry")) && void 0 !== VV ? VV : 0
```

#### 83. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1555` → after: `L1555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1555) · [Before (L1555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1555)

```diff
-         const OM = null !== (rM = null === (iM = MM.part) || void 0 === iM ? void 0 : iM.sequence) && void 0 !== rM ? rM : null;
+         const JV = null !== (eV = null === (xV = VV.part) || void 0 === xV ? void 0 : xV.sequence) && void 0 !== eV ? eV : null;
```

#### 84. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1561` → after: `L1561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1561) · [Before (L1561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1561)

```diff
-             sequence: null !== OM && void 0 !== OM ? OM : this.takeSequence(MM.kind)
+             sequence: null !== JV && void 0 !== JV ? JV : this.takeSequence(VV.kind)
```

#### 85. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1572` → after: `L1572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1572) · [Before (L1572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1572)

```diff
-         const iM = null !== (rM = this.nextSequence.get(MM)) && void 0 !== rM ? rM : 0;
+         const xV = null !== (eV = this.nextSequence.get(VV)) && void 0 !== eV ? eV : 0;
```

#### 86. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1608` → after: `L1608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1608) · [Before (L1608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1608)

```diff
-             this.uploadInFlight = !1, this.queue.shift(), this.queuedBytes -= MM.bytes.byteLength, "uploaded" !== rM.type ? (this.callbacks.onDropped(MM, rM.reason, MM.sequence), this.segmentBroken(MM), "refused" !== rM.type || this.stopped || "telemetry" !== MM.kind || (console. … [truncated]
+             this.uploadInFlight = !1, this.queue.shift(), this.queuedBytes -= VV.bytes.byteLength, "uploaded" !== eV.type ? (this.callbacks.onDropped(VV, eV.reason, VV.sequence), this.segmentBroken(VV), "refused" !== eV.type || this.stopped || "telemetry" !== VV.kind || (console. … [truncated]
```

#### 87. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1625` → after: `L1625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1625) · [Before (L1625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1625)

```diff
-                 throw new Error(`rejected for now: ${iM.reason}`)
+                 throw new Error(`rejected for now: ${xV.reason}`)
```

#### 88. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1632` → after: `L1632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1632) · [Before (L1632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1632)

```diff
-               if (OM instanceof qM.d && null !== OM.status && OM.status < 500 && !br.has(OM.status)) return console.warn(`Session replay ${MM.kind} segment ${MM.sequence} refused by storage:`, OM), {
+               if (JV instanceof SV.d && null !== JV.status && JV.status < 500 && !Ae.has(JV.status)) return console.warn(`Session replay ${VV.kind} segment ${VV.sequence} refused by storage:`, JV), {
```

#### 89. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1643-L1644` → after: `L1643-L1644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1643-L1644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1643-L1644) · [Before (L1643-L1644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1643-L1644)

```diff
-               jM = void 0 === MM.part ? "" : ` part ${MM.part.index}`;
-             if (console.warn(`Session replay ${MM.kind} segment ${MM.sequence}${jM} upload failed:`, OM), OM instanceof qM.d && (403 === OM.status && (rM = null, void 0 !== MM.part && this.targets.expire(MM.kind, MM.sequence, MM.part.index)), ++iM >= this.options.maxAttempts)) re … [truncated]
+               UV = void 0 === VV.part ? "" : ` part ${VV.part.index}`;
+             if (console.warn(`Session replay ${VV.kind} segment ${VV.sequence}${UV} upload failed:`, JV), JV instanceof SV.d && (403 === JV.status && (eV = null, void 0 !== VV.part && this.targets.expire(VV.kind, VV.sequence, VV.part.index)), ++xV >= this.options.maxAttempts)) re … [truncated]
```

#### 90. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1662` → after: `L1662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1662) · [Before (L1662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1662)

```diff
-           return "rejected" in iM ? iM : {
+           return "rejected" in xV ? xV : {
```

#### 91. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1679` → after: `L1679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1679) · [Before (L1679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1679)

```diff
-         return "rejected" in OM ? OM : {
+         return "rejected" in JV ? JV : {
```

#### 92. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1685-L1688` → after: `L1685-L1688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1685-L1688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1685-L1688) · [Before (L1685-L1688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1685-L1688)

```diff
-     var tr = iM(34820),
-       gr = iM(34641),
-       ur = iM(6998),
-       Rr = iM(7006);
+     var Xe = xV(35090),
+       Me = xV(34898),
+       ze = xV(7080),
+       Ge = xV(7083);
```

#### 93. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1691` → after: `L1691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1691) · [Before (L1691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1691)

```diff
-         this.writer = new ur.d((0, sM.e)()), this.framesSinceFpsSample = 0, this.lastFpsSampleMs = performance.now(), this.unsubscribers = [], this.actionBits = 0, this.carriedBytes = 0
+         this.writer = new ze.d((0, gV.c)()), this.framesSinceFpsSample = 0, this.lastFpsSampleMs = performance.now(), this.unsubscribers = [], this.actionBits = 0, this.carriedBytes = 0
```

#### 94. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1694-L1695` → after: `L1694-L1695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1694-L1695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1694-L1695) · [Before (L1694-L1695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1694-L1695)

```diff
-         null !== MM && (this.setActionBits(MM.getActionBits(), (0, sM.e)()), this.unsubscribers.push(MM.onKey(((MM, rM, iM, OM, SM) => {
-           this.writer.writeKey(SM, OM ? (0, Rr.f)(MM) : 0, rM, iM, OM)
+         null !== VV && (this.setActionBits(VV.getActionBits(), (0, gV.c)()), this.unsubscribers.push(VV.onKey(((VV, eV, xV, JV, YV) => {
+           this.writer.writeKey(YV, JV ? (0, Ge.d)(VV) : 0, eV, xV, JV)
```

#### 95. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1700-L1702` → after: `L1700-L1702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1700-L1702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1700-L1702) · [Before (L1700-L1702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1700-L1702)

```diff
-         })))), this.unsubscribers.push((0, hM.x)((() => {
-           const MM = (0, hM.b)();
-           this.writer.writeFrame((0, sM.e)() - MM, MM), this.framesSinceFpsSample++, rM()
+         })))), this.unsubscribers.push((0, kV.y)((() => {
+           const VV = (0, kV.d)();
+           this.writer.writeFrame((0, gV.c)() - VV, VV), this.framesSinceFpsSample++, eV()
```

#### 96. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1706` → after: `L1706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1706) · [Before (L1706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1706)

```diff
-         this.writer.writeState((0, sM.e)(), {
+         this.writer.writeState((0, gV.c)(), {
```

#### 97. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1719` → after: `L1719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1719) · [Before (L1719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1719)

```diff
-         this.writer.writeEvent((0, sM.e)(), MM)
+         this.writer.writeEvent((0, gV.c)(), VV)
```

#### 98. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1735` → after: `L1735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1735) · [Before (L1735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1735)

```diff
-           rM = (0, sM.e)(),
+           eV = (0, gV.c)(),
```

#### 99. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1858` → after: `L1858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1858) · [Before (L1858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1858)

```diff
-           }, null !== (OM = MM.completeUntilIndex) && void 0 !== OM ? OM : 0)
+           }, null !== (JV = VV.completeUntilIndex) && void 0 !== JV ? JV : 0)
```

#### 100. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1886-L1892` → after: `L1886-L1892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1886-L1892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1886-L1892) · [Before (L1886-L1892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1886-L1892)

```diff
-     var sr = iM(2546),
-       Dr = iM(2602),
-       kr = iM(2611),
-       Zr = iM(2571),
-       or = iM(34833),
-       fr = iM(34841);
-     const Yr = 3 * IM.e / 4,
+     var ge = xV(2596),
+       De = xV(2649),
+       ie = xV(2653),
+       Ce = xV(2626),
+       ae = xV(35103),
+       oe = xV(35111);
+     const ce = 3 * uV.b / 4,
```

#### 101. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1913` → after: `L1913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1913) · [Before (L1913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1913)

```diff
-       return iM instanceof Error && (null !== (rM = iM.stack) && void 0 !== rM ? rM : "").includes(window.location.origin)
+       return xV instanceof Error && (null !== (eV = xV.stack) && void 0 !== eV ? eV : "").includes(window.location.origin)
```

#### 102. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1939-L1941` → after: `L1939-L1941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1939-L1941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1939-L1941) · [Before (L1939-L1941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1939-L1941)

```diff
-         }), this.worker = null, this.capture = null, this.qualityLevel = 0, this.statsWindows = 0, this.ownFpsMonitor = void 0, this.lowFpsOpen = !1, this.pageExit = void 0, this.dom = void 0, this.videoStatus = void 0, this.videoStarted = !1, this.joinerAccess = rM.dryRun ? null … [truncated]
-         const SM = null === this.joinerAccess ? null : (0, KM.l)(cM(this.joinerAccess)),
-           jM = rM.dryRun ? new zr.c : new zr.e((0, DM.d)().segmentUploadUrl, {
+         }), this.worker = null, this.capture = null, this.qualityLevel = 0, this.statsWindows = 0, this.ownFpsMonitor = void 0, this.lowFpsOpen = !1, this.pageExit = void 0, this.dom = void 0, this.videoStatus = void 0, this.videoStarted = !1, this.joinerAccess = eV.dryRun ? null … [truncated]
+         const YV = null === this.joinerAccess ? null : (0, sV.i)(OV(this.joinerAccess)),
+           UV = eV.dryRun ? new we.e : new we.i((0, DV.c)().segmentUploadUrl, {
```

#### 103. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1946-L1947` → after: `L1946-L1947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1946-L1947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1946-L1947) · [Before (L1946-L1947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1946-L1947)

```diff
-           const aM = OM.c[MM],
-             PM = ZM.g.getItem("replayEncoder");
+           const yV = JV.b[VV],
+             pV = CV.m.getItem("replayEncoder");
```

#### 104. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1950-L1953` → after: `L1950-L1953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1950-L1953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1950-L1953) · [Before (L1950-L1953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1950-L1953)

```diff
-             maxFps: null !== (rM = YM("replayMaxFps")) && void 0 !== rM ? rM : aM.maxFps,
-             maxMacroblocks: null !== (iM = YM("replayMaxMacroblocks")) && void 0 !== iM ? iM : aM.maxMacroblocks,
-             captureBudgetMsPerSecond: null !== (SM = YM("replayCaptureBudgetMs")) && void 0 !== SM ? SM : aM.captureBudgetMsPerSecond,
-             captureFrameCostFloorMs: null !== (jM = YM("replayCaptureCostFloorMs")) && void 0 !== jM ? jM : aM.captureFrameCostFloorMs,
+             maxFps: null !== (eV = cV("replayMaxFps")) && void 0 !== eV ? eV : yV.maxFps,
+             maxMacroblocks: null !== (xV = cV("replayMaxMacroblocks")) && void 0 !== xV ? xV : yV.maxMacroblocks,
+             captureBudgetMsPerSecond: null !== (YV = cV("replayCaptureBudgetMs")) && void 0 !== YV ? YV : yV.captureBudgetMsPerSecond,
+             captureFrameCostFloorMs: null !== (UV = cV("replayCaptureCostFloorMs")) && void 0 !== UV ? UV : yV.captureFrameCostFloorMs,
```

#### 105. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1956` → after: `L1956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1956) · [Before (L1956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1956)

```diff
-         }(rM.platformType) : MM.videoConfig && (0, OM.J)(MM.videoConfig, rM.platformType), this.platformType = rM.platformType;
+         }(eV.platformType) : VV.videoConfig && (0, JV.N)(VV.videoConfig, eV.platformType), this.platformType = eV.platformType;
```

#### 106. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1958-L1959` → after: `L1958-L1959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1958-L1959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1958-L1959) · [Before (L1958-L1959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1958-L1959)

```diff
-         this.videoStatus = "supported" !== aM ? aM : null === this.videoConfig ? "unsupported" : "recorded", (0, Dr.e)("recorded" === this.videoStatus ? "video" : "dom_only", MM), this.experiment = rM.dryRun ? {
-           logStats: !0 === ZM.g.getItem("replayLogStats")
+         this.videoStatus = "supported" !== yV ? yV : null === this.videoConfig ? "unsupported" : "recorded", (0, De.h)("recorded" === this.videoStatus ? "video" : "dom_only", VV), this.experiment = eV.dryRun ? {
+           logStats: !0 === CV.m.getItem("replayLogStats")
```

#### 107. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1973` → after: `L1973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1973) · [Before (L1973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1973)

```diff
-             "videoSegments" === rM ? null === (OM = this.video) || void 0 === OM || OM.listed(iM.sequence, null !== (SM = iM.parts) && void 0 !== SM ? SM : null) : null === (jM = this.journal) || void 0 === jM || jM.telemetrySettled(iM.sequence)
+             "videoSegments" === eV ? null === (JV = this.video) || void 0 === JV || JV.listed(xV.sequence, null !== (YV = xV.parts) && void 0 !== YV ? YV : null) : null === (UV = this.journal) || void 0 === UV || UV.telemetrySettled(xV.sequence)
```

#### 108. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1975` → after: `L1975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1975) · [Before (L1975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1975)

```diff
-         }), !rM.dryRun && gr.d.supported && (this.journal = new nr(new gr.d, MM, this.manifest.contents, (0, DM.d)())), this.debug = function() {
+         }), !eV.dryRun && Me.c.supported && (this.journal = new Qe(new Me.c, VV, this.manifest.contents, (0, DV.c)())), this.debug = function() {
```

#### 109. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1995` → after: `L1995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1995) · [Before (L1995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1995)

```diff
-             this.debug.uploadedBytesByKind[MM.kind] = (null !== (iM = this.debug.uploadedBytesByKind[MM.kind]) && void 0 !== iM ? iM : 0) + MM.bytes.byteLength, this.debug.uploadBacklogBytes = this.uploader.backlogBytes, this.onSegmentUploaded(MM.meta, rM, MM.bytes), this.pageExi … [truncated]
+             this.debug.uploadedBytesByKind[VV.kind] = (null !== (xV = this.debug.uploadedBytesByKind[VV.kind]) && void 0 !== xV ? xV : 0) + VV.bytes.byteLength, this.debug.uploadBacklogBytes = this.uploader.backlogBytes, this.onSegmentUploaded(VV.meta, eV, VV.bytes), this.pageExi … [truncated]
```

#### 110. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1999` → after: `L1999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1999) · [Before (L1999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1999)

```diff
-             if (console.warn(`Session replay dropped a ${MM.kind} segment: ${rM}`), this.debug.droppedSegments++, this.debug.uploadBacklogBytes = this.uploader.backlogBytes, "video" === MM.meta.type) this.telemetry.writeEvent("videoSegmentDropped"), null === (OM = this.video) ||  … [truncated]
+             if (console.warn(`Session replay dropped a ${VV.kind} segment: ${eV}`), this.debug.droppedSegments++, this.debug.uploadBacklogBytes = this.uploader.backlogBytes, "video" === VV.meta.type) this.telemetry.writeEvent("videoSegmentDropped"), null === (JV = this.video) ||  … [truncated]
```

#### 111. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2010` → after: `L2010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2010) · [Before (L2010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2010)

```diff
-             this.stop(`uploads refused: ${MM}`)
+             this.stop(`uploads refused: ${VV}`)
```

#### 112. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2034` → after: `L2034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2034) · [Before (L2034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2034)

```diff
-           const rM = null !== (MM = (0, oM.d)() ? kM.currentUrl.getSearchParam("replayPostHogHost") : null) && void 0 !== MM ? MM : ZM.g.getItem("replayPostHogHost");
+           const eV = null !== (VV = (0, aV.h)() ? iV.currentUrl.getSearchParam("replayPostHogHost") : null) && void 0 !== VV ? VV : CV.m.getItem("replayPostHogHost");
```

#### 113. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2047` → after: `L2047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2047) · [Before (L2047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2047)

```diff
-           }) : null, QM.i.subscribe("sessionReplayLowFps", (MM => {
+           }) : null, nV.h.subscribe("sessionReplayLowFps", (VV => {
```

#### 114. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2052` → after: `L2052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2052) · [Before (L2052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2052)

```diff
-           })), QM.i.subscribe("sessionReplayGameQuit", (MM => {
+           })), nV.h.subscribe("sessionReplayGameQuit", (VV => {
```

#### 115. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2063` → after: `L2063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2063) · [Before (L2063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2063)

```diff
-           this.dom = iM, (0, Zr.c)({
+           this.dom = xV, (0, Ce.d)({
```

#### 116. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2077` → after: `L2077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2077) · [Before (L2077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2077)

```diff
-         return null !== (MM = null === (rM = this.videoConfig) || void 0 === rM ? void 0 : rM.manifestIntervalMs) && void 0 !== MM ? MM : 3e4
+         return null !== (VV = null === (eV = this.videoConfig) || void 0 === eV ? void 0 : eV.manifestIntervalMs) && void 0 !== VV ? VV : 3e4
```

#### 117. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2100` → after: `L2100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2100) · [Before (L2100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2100)

```diff
-         (0, SM.m)(rM) && (0, fr.f)((0, SM.p)(rM)).then((rM => {
+         (0, YV.l)(eV) && (0, oe.e)((0, YV.p)(eV)).then((eV => {
```

#### 118. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2121` → after: `L2121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2121) · [Before (L2121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2121)

```diff
-         (0, kr.c)((() => {
+         (0, ie.e)((() => {
```

#### 119. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2123` → after: `L2123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2123) · [Before (L2123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2123)

```diff
-         }), rM), null !== this.journal && (0, hr.e)(rM)
+         }), eV), null !== this.journal && (0, ke.b)(eV)
```

#### 120. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2131` → after: `L2131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2131) · [Before (L2131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2131)

```diff
-           console.warn(`Session replay stopped recording: ${MM}`), this.debug.stoppedReason = MM, this.lifetime.abort();
+           console.warn(`Session replay stopped recording: ${VV}`), this.debug.stoppedReason = VV, this.lifetime.abort();
```

#### 121. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2133` → after: `L2133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2133) · [Before (L2133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2133)

```diff
-           this.stills.stop(), this.canvasWatch.stop(), null !== this.dom && (0, Zr.i)(), this.telemetry.stop(), this.flushChunks(), null === (rM = this.dom) || void 0 === rM || rM.close(), this.endVideo(), this.manifest.send(), (0, Dr.e)("events_only", this.recording)
+           this.stills.stop(), this.canvasWatch.stop(), null !== this.dom && (0, Ce.j)(), this.telemetry.stop(), this.flushChunks(), null === (eV = this.dom) || void 0 === eV || eV.close(), this.endVideo(), this.manifest.send(), (0, De.h)("events_only", this.recording)
```

#### 122. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2152` → after: `L2152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2152) · [Before (L2152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2152)

```diff
-         } = this.canvasWatch, OM = nM.b.getLastColyseusPingMs();
+         } = this.canvasWatch, JV = QV.e.getLastColyseusPingMs();
```

#### 123. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2182` → after: `L2182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2182) · [Before (L2182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2182)

```diff
-           console.warn("Session replay couldn't start its video; recording DOM and events without it.", rM), this.videoUnavailable(`video couldn't start: ${rM instanceof Error?rM.message:String(rM)}`)
+           console.warn("Session replay couldn't start its video; recording DOM and events without it.", eV), this.videoUnavailable(`video couldn't start: ${eV instanceof Error?eV.message:String(eV)}`)
```

#### 124. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2188` → after: `L2188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2188) · [Before (L2188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2188)

```diff
-           nM = (0, OM.G)(rM),
+           QV = (0, JV.K)(eV),
```

#### 125. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2199-L2200` → after: `L2199-L2200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2199-L2200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2199-L2200) · [Before (L2199-L2200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2199-L2200)

```diff
-           console.error("Session replay video worker error.", MM.message), this.worker === aM && (this.endVideo(), this.videoStopped("stopped_error", `video worker failed: ${MM.message||"it didn't load"}`))
-         }, this.worker = aM, this.video = mM, this.joiner = LM, this.debug.joiner = null !== (iM = null === LM || void 0 === LM ? void 0 : LM.stats) && void 0 !== iM ? iM : null, this.videoStarted = !0, this.stills.start(), this.postToWorker({
+           console.error("Session replay video worker error.", VV.message), this.worker === yV && (this.endVideo(), this.videoStopped("stopped_error", `video worker failed: ${VV.message||"it didn't load"}`))
+         }, this.worker = yV, this.video = vV, this.joiner = ZV, this.debug.joiner = null !== (xV = null === ZV || void 0 === ZV ? void 0 : ZV.stats) && void 0 !== xV ? xV : null, this.videoStarted = !0, this.stills.start(), this.postToWorker({
```

#### 126. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2210` → after: `L2210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2210) · [Before (L2210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2210)

```diff
-           journalRecordingId: null !== (SM = null === (jM = this.journal) || void 0 === jM ? void 0 : jM.recordingId) && void 0 !== SM ? SM : null
+           journalRecordingId: null !== (YV = null === (UV = this.journal) || void 0 === UV ? void 0 : UV.recordingId) && void 0 !== YV ? YV : null
```

#### 127. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2249` → after: `L2249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2249) · [Before (L2249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2249)

```diff
-               atMs: (0, sM.e)(),
+               atMs: (0, gV.c)(),
```

#### 128. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2253` → after: `L2253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2253) · [Before (L2253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2253)

```diff
-             }), this.experiment.logStats && console.warn(`Session replay stats: quality level ${MM.level} (${MM.reason})`), this.telemetry.writeEvent("qualityChanged");
+             }), this.experiment.logStats && console.warn(`Session replay stats: quality level ${VV.level} (${VV.reason})`), this.telemetry.writeEvent("qualityChanged");
```

#### 129. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2267` → after: `L2267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2267) · [Before (L2267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2267)

```diff
-         this.videoStatus = MM, (0, Dr.e)("dom_only", this.recording), null !== this.dom && (0, Zr.f)(MM, rM)
+         this.videoStatus = VV, (0, De.h)("dom_only", this.recording), null !== this.dom && (0, Ce.f)(VV, eV)
```

#### 130. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2272` → after: `L2272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2272) · [Before (L2272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2272)

```diff
-         console.warn(`Session replay stats: ${rM} fps encoded, ${MM.encodeWidth}x${MM.encodeHeight} ${MM.hardwareAcceleration}`)
+         console.warn(`Session replay stats: ${eV} fps encoded, ${VV.encodeWidth}x${VV.encodeHeight} ${VV.hardwareAcceleration}`)
```

#### 131. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2322` → after: `L2322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2322) · [Before (L2322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2322)

```diff
-   6998: (MM, rM, iM) => {
+   7080: (VV, eV, xV) => {
```

#### 132. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2327` → after: `L2327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2327) · [Before (L2327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2327)

```diff
-     var OM = iM(7006);
+     var JV = xV(7083);
```

#### 133. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2373` → after: `L2373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2373) · [Before (L2373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2373)

```diff
-         iM.setUint8(OM, QM), iM.setUint32(OM + 1, this.timeUnits(MM), !0), iM.setUint16(OM + 5, wM(rM.backingWidth), !0), iM.setUint16(OM + 7, wM(rM.backingHeight), !0), iM.setUint16(OM + 9, wM(rM.cssWidth), !0), iM.setUint16(OM + 11, wM(rM.cssHeight), !0), iM.setUint16(OM + 13,  … [truncated]
+         xV.setUint8(JV, nV), xV.setUint32(JV + 1, this.timeUnits(VV), !0), xV.setUint16(JV + 5, NV(eV.backingWidth), !0), xV.setUint16(JV + 7, NV(eV.backingHeight), !0), xV.setUint16(JV + 9, NV(eV.cssWidth), !0), xV.setUint16(JV + 11, NV(eV.cssHeight), !0), xV.setUint16(JV + 13,  … [truncated]
```

#### 134. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2388` → after: `L2388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2388) · [Before (L2388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2388)

```diff
-         this.view.setUint8(jM, mM), this.view.setUint32(jM + 1, this.timeUnits(MM), !0), this.view.setUint8(jM + 5, rM), this.view.setUint8(jM + 6, (iM ? lM : 0) | (OM ? EM : 0) | (SM ? UM : 0)), this.length += yM
+         this.view.setUint8(UV, vV), this.view.setUint32(UV + 1, this.timeUnits(VV), !0), this.view.setUint8(UV + 5, eV), this.view.setUint8(UV + 6, (xV ? jV : 0) | (JV ? qV : 0) | (YV ? tV : 0)), this.length += BV
```

#### 135. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2410` → after: `L2410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2410) · [Before (L2410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2410)

```diff
-       if (iM < aM || iM > jM || rM.getUint32(0, !0) !== SM) throw new Error(`Not a version ${aM}-${jM} replay telemetry chunk`);
+       if (xV < yV || xV > UV || eV.getUint32(0, !0) !== YV) throw new Error(`Not a version ${yV}-${UV} replay telemetry chunk`);
```

#### 136. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2440` → after: `L2440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2440) · [Before (L2440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2440)

```diff
-             renderer: null !== (RM = eM[rM.getUint8(uM + 15)]) && void 0 !== RM ? RM : "unknown",
+             renderer: null !== (GV = PV[eV.getUint8(zV + 15)]) && void 0 !== GV ? GV : "unknown",
```

#### 137. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2449` → after: `L2449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2449) · [Before (L2449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2449)

```diff
-             event: null !== (pM = bM[rM.getUint8(uM + 5)]) && void 0 !== pM ? pM : "none"
+             event: null !== (WV = AV[eV.getUint8(zV + 5)]) && void 0 !== WV ? WV : "none"
```

#### 138. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2456` → after: `L2456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2456) · [Before (L2456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2456)

```diff
-           if (MM !== mM || !tM.inputRecorded) throw new Error(`Unknown replay telemetry record type ${MM} at byte ${uM}`);
+           if (VV !== vV || !XV.inputRecorded) throw new Error(`Unknown replay telemetry record type ${VV} at byte ${zV}`);
```

#### 139. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2462` → after: `L2462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2462) · [Before (L2462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2462)

```diff
-               code: null !== (WM = OM.e[rM.getUint8(uM + 5)]) && void 0 !== WM ? WM : OM.e[0],
+               code: null !== (RV = JV.b[eV.getUint8(zV + 5)]) && void 0 !== RV ? RV : JV.b[0],
```

#### 140. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2473` → after: `L2473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2473) · [Before (L2473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2473)

```diff
-   34814: MM => {
+   35081: VV => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (fo1voe.f743fbcf → pxmq3aq.c63b303d)

- **File**: `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (35 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a)

#### 1. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L4)

```diff
-   34624: (MM, rM, iM) => {
+   34881: (VV, eV, xV) => {
```

#### 2. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L8-L11)

```diff
-     var OM = iM(5479),
-       SM = iM(30),
-       jM = iM(34631),
-       aM = iM(1215);
+     var JV = xV(5589),
+       YV = xV(40),
+       UV = xV(34886),
+       yV = xV(1241);
```

#### 3. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L18-L19)

```diff
-         SM = (0, aM.q)(PM),
-         jM = void 0 === iM ? SM : (0, aM.m)([iM, SM]);
+         YV = (0, yV.u)(pV),
+         UV = void 0 === xV ? YV : (0, yV.m)([xV, YV]);
```

#### 4. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L36` → after: `L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L36) · [Before (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L36)

```diff
-         if (!rM.ok) throw new Error(`HTTP ${rM.status}`);
+         if (!eV.ok) throw new Error(`HTTP ${eV.status}`);
```

#### 5. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L41-L48` → after: `L41-L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L41-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L41-L48) · [Before (L41-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L41-L48)

```diff
-         return console.warn(`Session replay couldn't ask the part joiner about video segment ${rM}; uploading it from the journal.`, QM), null
-       }
-     }
-     var QM = iM(34633),
-       zM = iM(34641),
-       LM = iM(2590),
-       mM = iM(34647),
-       HM = iM(34670);
+         return console.warn(`Session replay couldn't ask the part joiner about video segment ${eV}; uploading it from the journal.`, nV), null
+       }
+     }
+     var nV = xV(34889),
+       wV = xV(34898),
+       ZV = xV(2645),
+       vV = xV(34905),
+       rV = xV(34924);
```

#### 6. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L60` → after: `L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L60) · [Before (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L60)

```diff
-         return console.warn(`Session replay couldn't mux late ${OM} segment ${SM}; skipping it.`, PM), "refused"
+         return console.warn(`Session replay couldn't mux late ${JV} segment ${YV}; skipping it.`, pV), "refused"
```

#### 7. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L72` → after: `L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L72) · [Before (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L72)

```diff
-         return "rejected" in PM ? (console.warn(`Session replay late ${OM} segment ${SM} refused: ${PM.reason}`), PM.retryable ? "retryLater" : "refused") : (await iM.put(PM.uploadUrl, aM, jM, "dom" === OM), "uploaded")
+         return "rejected" in pV ? (console.warn(`Session replay late ${JV} segment ${YV} refused: ${pV.reason}`), pV.retryable ? "retryLater" : "refused") : (await xV.put(pV.uploadUrl, yV, UV, "dom" === JV), "uploaded")
```

#### 8. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L74` → after: `L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L74) · [Before (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L74)

```diff
-         return console.warn(`Session replay late ${OM} segment ${SM} upload failed; trying again later.`, PM), "retryLater"
+         return console.warn(`Session replay late ${JV} segment ${YV} upload failed; trying again later.`, pV), "retryLater"
```

#### 9. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L78` → after: `L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L78) · [Before (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L78)

```diff
-       for (const SM of [...iM.videoSegments, ...iM.telemetrySegments, ...null !== (OM = iM.domSegments) && void 0 !== OM ? OM : []]) {
+       for (const YV of [...xV.videoSegments, ...xV.telemetrySegments, ...null !== (JV = xV.domSegments) && void 0 !== JV ? JV : []]) {
```

#### 10. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L82` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L82) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L82)

```diff
-       for (const SM of (0, HM.d)({
+       for (const YV of (0, rV.f)({
```

#### 11. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L93-L97` → after: `L93-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L93-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L93-L97) · [Before (L93-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L93-L97)

```diff
-     var dM = iM(34678),
-       yM = iM(34697),
-       lM = iM(34747),
-       EM = iM(34776),
-       UM = iM(34756);
+     var EV = xV(34930),
+       BV = xV(34946),
+       jV = xV(35006),
+       qV = xV(35036),
+       tV = xV(35017);
```

#### 12. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L104` → after: `L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L104) · [Before (L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L104)

```diff
-         this.output = new dM.c({
+         this.output = new EV.d({
```

#### 13. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L115` → after: `L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L115) · [Before (L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L115)

```diff
-           target: new lM.d
+           target: new jV.f
```

#### 14. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L140` → after: `L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L140) · [Before (L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L140)

```diff
-           endUs: null !== (MM = this.addingTimestampUs) && void 0 !== MM ? MM : this.lastTimestampUs + 1e6 * this.frameDurationS
+           endUs: null !== (VV = this.addingTimestampUs) && void 0 !== VV ? VV : this.lastTimestampUs + 1e6 * this.frameDurationS
```

#### 15. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L151` → after: `L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L151) · [Before (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L151)

```diff
-     iM(34785);
+     xV(35045);
```

#### 16. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L192` → after: `L192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L192) · [Before (L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L192)

```diff
-       return void 0 !== SM && (null === iM || SM.partsLanded > iM.partsLanded) ? SM : iM
+       return void 0 !== YV && (null === xV || YV.partsLanded > xV.partsLanded) ? YV : xV
```

#### 17. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L232` → after: `L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L232) · [Before (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L232)

```diff
-                 console.warn(`Session replay's part joiner didn't answer about video segment ${QM} in time; uploading it from the journal.`, PM), rM = null
+                 console.warn(`Session replay's part joiner didn't answer about video segment ${nV} in time; uploading it from the journal.`, pV), eV = null
```

#### 18. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L241` → after: `L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L241) · [Before (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L241)

```diff
-         return console.warn(`Session replay couldn't read what an earlier page load left of ${rM.recordingId}; trying again later.`, lM), {
+         return console.warn(`Session replay couldn't read what an earlier page load left of ${eV.recordingId}; trying again later.`, jV), {
```

#### 19. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L261` → after: `L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L261) · [Before (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L261)

```diff
-             return null === iM ? MM : Math.max(MM, iM + 1)
+             return null === xV ? VV : Math.max(VV, xV + 1)
```

#### 20. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L284` → after: `L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L284) · [Before (L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L284)

```diff
-                 hM = null !== (jM = null !== (aM = null === mM || void 0 === mM ? void 0 : mM.completeUntilUs) && void 0 !== aM ? aM : null === LM || void 0 === LM ? void 0 : LM.completeUntilUs) && void 0 !== jM ? jM : null,
+                 kV = null !== (UV = null !== (yV = null === vV || void 0 === vV ? void 0 : vV.completeUntilUs) && void 0 !== yV ? yV : null === ZV || void 0 === ZV ? void 0 : ZV.completeUntilUs) && void 0 !== UV ? UV : null,
```

#### 21. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L293` → after: `L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L293) · [Before (L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L293)

```diff
-                 }(null === hM ? zM : zM.filter((MM => MM.timestampUs >= hM))),
+                 }(null === kV ? wV : wV.filter((VV => VV.timestampUs >= kV))),
```

#### 22. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L318` → after: `L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L318) · [Before (L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L318)

```diff
-           }), null !== (iM = rM.nextDomSequence) && void 0 !== iM ? iM : 0);
+           }), null !== (xV = eV.nextDomSequence) && void 0 !== xV ? xV : 0);
```

#### 23. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L354` → after: `L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L354) · [Before (L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L354)

```diff
-               OM = null !== (jM = null === iM || void 0 === iM ? void 0 : iM.sequence) && void 0 !== jM ? jM : QM.nextSequence;
+               JV = null !== (UV = null === xV || void 0 === xV ? void 0 : xV.sequence) && void 0 !== UV ? UV : nV.nextSequence;
```

#### 24. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L361` → after: `L361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L361) · [Before (L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L361)

```diff
-             console.warn(`Session replay couldn't drop what it sent of ${rM.recordingId} from its journal.`, lM)
+             console.warn(`Session replay couldn't drop what it sent of ${eV.recordingId} from its journal.`, jV)
```

#### 25. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L446` → after: `L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L446) · [Before (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L446)

```diff
-           bytes: async () => (OM = (0, mM.c)(UM), OM.bytes.buffer)
+           bytes: async () => (JV = (0, vV.e)(tV), JV.bytes.buffer)
```

#### 26. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L480-L481` → after: `L480-L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L480-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L480-L481) · [Before (L480-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L480-L481)

```diff
-     var WM = iM(34788),
-       sM = iM(34793);
+     var RV = xV(35048),
+       gV = xV(35055);
```

#### 27. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L484-L486` → after: `L484-L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L484-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L484-L486) · [Before (L484-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L484-L486)

```diff
-       if (!zM.d.supported || void 0 === MM) return;
-       const rM = new zM.d,
-         iM = new WM.e,
+       if (!wV.c.supported || void 0 === VV) return;
+       const eV = new wV.c,
+         xV = new RV.c,
```

#### 28. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L509` → after: `L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L509) · [Before (L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L509)

```diff
-                     console.warn(`Session replay couldn't recover what an earlier page load left of ${OM.recordingId}; forgetting it.`, iM), SM = {
+                     console.warn(`Session replay couldn't recover what an earlier page load left of ${JV.recordingId}; forgetting it.`, xV), YV = {
```

#### 29. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L521` → after: `L521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L521) · [Before (L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L521)

```diff
-               console.warn(`Session replay couldn't forget ${OM.recordingId}'s journal.`, iM)
+               console.warn(`Session replay couldn't forget ${JV.recordingId}'s journal.`, xV)
```

#### 30. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L530` → after: `L530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L530) · [Before (L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L530)

```diff
-             return new sM.e((null !== (rM = MM.endpoints) && void 0 !== rM ? rM : (0, jM.d)()).segmentUploadUrl, {
+             return new gV.i((null !== (eV = VV.endpoints) && void 0 !== eV ? eV : (0, UV.c)()).segmentUploadUrl, {
```

#### 31. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L536` → after: `L536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L536) · [Before (L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L536)

```diff
-             return (0, QM.b)((null !== (iM = MM.endpoints) && void 0 !== iM ? iM : (0, jM.d)()).manifestUrl, rM)
+             return (0, nV.b)((null !== (xV = VV.endpoints) && void 0 !== xV ? xV : (0, UV.c)()).manifestUrl, eV)
```

#### 32. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L539` → after: `L539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L539) · [Before (L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L539)

```diff
-             await MM.request((0, LM.q)(rM), {
+             await VV.request((0, ZV.p)(eV), {
```

#### 33. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L550` → after: `L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L550) · [Before (L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L550)

```diff
-             return null !== (rM = MM.lateUploadUntilMs) && void 0 !== rM ? rM : MM.expiresAtMs + OM.l
+             return null !== (eV = VV.lateUploadUntilMs) && void 0 !== eV ? eV : VV.expiresAtMs + JV.l
```

#### 34. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L554-L555` → after: `L554-L555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L554-L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L554-L555) · [Before (L554-L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L554-L555)

```diff
-       for (const OM of aM) "live" !== OM.outcome && console.info(`Session replay: ${OM.outcome} what an earlier page load left of ${OM.recordingId} (${OM.videoSegments} video, ${OM.telemetrySegments} telemetry, ${OM.domSegments} page recording).`);
-       0 === (await rM.listRecordings()).length && SM.g.removeItem(LM.m)
+       for (const JV of yV) "live" !== JV.outcome && console.info(`Session replay: ${JV.outcome} what an earlier page load left of ${JV.recordingId} (${JV.videoSegments} video, ${JV.telemetrySegments} telemetry, ${JV.domSegments} page recording).`);
+       0 === (await eV.listRecordings()).length && YV.m.removeItem(ZV.h)
```

#### 35. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L558` → after: `L558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L558) · [Before (L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L558)

```diff
-   34750: () => {}
+   35015: () => {}
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/textureNameTable.js` (fo1voe.f743fbcf → pxmq3aq.c63b303d)

- **File**: `bundles/bloxd.io/chunks/js/textureNameTable.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d38a57138b5a2a0d33a7525a47df22137ae3ffec9b04af4648a7cd7a7c0c9310)

#### 1. `bundles/bloxd.io/chunks/js/textureNameTable.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d38a57138b5a2a0d33a7525a47df22137ae3ffec9b04af4648a7cd7a7c0c9310R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d38a57138b5a2a0d33a7525a47df22137ae3ffec9b04af4648a7cd7a7c0c9310) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/textureNameTable.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/textureNameTable.js#L4)

```diff
-   53809: (MM, rM, iM) => {
+   54013: (VV, eV, xV) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/texturePackFeed.js` (fo1voe.f743fbcf → pxmq3aq.c63b303d)

- **File**: `bundles/bloxd.io/chunks/js/texturePackFeed.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879)

#### 1. `bundles/bloxd.io/chunks/js/texturePackFeed.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/texturePackFeed.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/texturePackFeed.js#L4)

```diff
-   53791: (MM, rM, iM) => {
+   53994: (VV, eV, xV) => {
```

#### 2. `bundles/bloxd.io/chunks/js/texturePackFeed.js` (Changed code · before: `L8-L10` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/texturePackFeed.js#L8-L10) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/texturePackFeed.js#L8-L10)

```diff
-     var OM = iM(1202),
-       SM = iM(30),
-       jM = iM(53778);
+     var JV = xV(1230),
+       YV = xV(40),
+       UV = xV(53983);
```

#### 3. `bundles/bloxd.io/chunks/js/texturePackFeed.js` (Changed code · before: `L13-L14` → after: `L13-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879) · [After (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/texturePackFeed.js#L13-L14) · [Before (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/texturePackFeed.js#L13-L14)

```diff
-       const iM = new jM.e({
-         store: SM.f,
+       const xV = new UV.c({
+         store: YV.i,
```

#### 4. `bundles/bloxd.io/chunks/js/texturePackFeed.js` (Changed code · before: `L18` → after: `L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879) · [After (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/texturePackFeed.js#L18) · [Before (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/texturePackFeed.js#L18)

```diff
-           const rM = await fetch(`${OM.clientSideServerUrls.texturePackUrl}/${MM}.json`, {
+           const eV = await fetch(`${JV.clientSideServerUrls.texturePackUrl}/${VV}.json`, {
```

#### 5. `bundles/bloxd.io/chunks/js/texturePackFeed.js` (Changed code · before: `L21` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/texturePackFeed.js#L21) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/texturePackFeed.js#L21)

```diff
-           if (!rM.ok) throw new Error(`fetching texture pack ${MM} answered HTTP ${rM.status}`);
+           if (!eV.ok) throw new Error(`fetching texture pack ${VV} answered HTTP ${eV.status}`);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/texturePackStorage.js` (fo1voe.f743fbcf → pxmq3aq.c63b303d)

- **File**: `bundles/bloxd.io/chunks/js/texturePackStorage.js` (16 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383)

#### 1. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/texturePackStorage.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/texturePackStorage.js#L4)

```diff
-   35092: (MM, rM, iM) => {
+   35380: (VV, eV, xV) => {
```

#### 2. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L7` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/texturePackStorage.js#L7) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/texturePackStorage.js#L7)

```diff
-       takeOneShotTexturePack: () => OM.g
+       takeOneShotTexturePack: () => JV.f
```

#### 3. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L9-L10` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/texturePackStorage.js#L9-L10) · [Before (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/texturePackStorage.js#L9-L10)

```diff
-     var OM = iM(35100),
-       SM = iM(35103)
+     var JV = xV(35385),
+       YV = xV(35393)
```

#### 4. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L12` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/texturePackStorage.js#L12) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/texturePackStorage.js#L12)

```diff
-   35103: (MM, rM, iM) => {
+   35393: (VV, eV, xV) => {
```

#### 5. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L15` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/texturePackStorage.js#L15) · [Before (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/texturePackStorage.js#L15)

```diff
-       e: () => jM
+       h: () => UV
```

#### 6. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/texturePackStorage.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/texturePackStorage.js#L17)

```diff
-     var OM = iM(3657);
+     var JV = xV(3681);
```

#### 7. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L23` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/texturePackStorage.js#L23) · [Before (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/texturePackStorage.js#L23)

```diff
-         const rM = new BroadcastChannel(OM.i);
+         const eV = new BroadcastChannel(JV.h);
```

#### 8. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L35` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/texturePackStorage.js#L35) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/texturePackStorage.js#L35)

```diff
-       return "string" === typeof rM ? rM : null
+       return "string" === typeof eV ? eV : null
```

#### 9. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L38` → after: `L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/texturePackStorage.js#L38) · [Before (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/texturePackStorage.js#L38)

```diff
-   35100: (MM, rM, iM) => {
+   35385: (VV, eV, xV) => {
```

#### 10. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L41-L42` → after: `L41-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L41-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/texturePackStorage.js#L41-L42) · [Before (L41-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/texturePackStorage.js#L41-L42)

```diff
-       f: () => SM,
-       g: () => jM
+       e: () => YV,
+       f: () => UV
```

#### 11. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L44` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/texturePackStorage.js#L44) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/texturePackStorage.js#L44)

```diff
-     var OM = iM(3657);
+     var JV = xV(3681);
```

#### 12. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L49` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/texturePackStorage.js#L49) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/texturePackStorage.js#L49)

```diff
-       const PM = await MM.getItem(OM.f, rM);
+       const pV = await VV.getItem(JV.g, eV);
```

#### 13. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L51` → after: `L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/texturePackStorage.js#L51) · [Before (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/texturePackStorage.js#L51)

```diff
-         await Promise.all([MM.removeItem(OM.e), MM.removeItem(OM.f)])
+         await Promise.all([VV.removeItem(JV.e), VV.removeItem(JV.g)])
```

#### 14. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L54` → after: `L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/texturePackStorage.js#L54) · [Before (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/texturePackStorage.js#L54)

```diff
-         source: "string" === typeof PM ? PM : null
+         source: "string" === typeof pV ? pV : null
```

#### 15. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L59` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/texturePackStorage.js#L59) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/texturePackStorage.js#L59)

```diff
-       return (0, OM.n)() ? Promise.resolve(null) : SM(MM, !1, (MM => {
+       return (0, JV.m)() ? Promise.resolve(null) : YV(VV, !1, (VV => {
```

#### 16. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L61` → after: `L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/texturePackStorage.js#L61) · [Before (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/texturePackStorage.js#L61)

```diff
-       }), OM.n)
+       }), JV.m)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmClientGame.js` (fo1voe.f743fbcf → pxmq3aq.c63b303d)

- **File**: `bundles/bloxd.io/chunks/js/wasmClientGame.js` (890 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b)

#### 1. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4-L42` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4) · [Before (L4-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4-L42)

```diff
-   53677: (MM, rM, iM) => {
-     var OM = {
-       "./bedwars/bedwarsClient": [40357, 9],
-       "./bridgeBattle/bridgeBattleClient": [40364, 10],
-       "./buildAFactory2/buildAFactory2Client": [39483, 87, 85, 248, 267, 11],
-       "./classic/classicClient": [40373, 12],
-       "./classic/smp2Client": [40376, 13],
-       "./clutch/clutchClient": [40383, 14],
-       "./containmentBreach/containmentBreachClient": [40388, 243, 15],
-       "./cooking/cookingClient": [40502, 16],
-       "./defusal/defusalClient": [40511, 17],
-       "./frontline/frontlineClient": [40513, 87, 85, 18],
-       "./goalRush/goalRushClient": [40528, 19],
-       "./greenville/greenvilleClient": [40534, 172, 273, 20],
-       "./hideseek/hideseekClient": [40557, 21],
-       "./luckyBedwars/luckyBedwarsClient": [40563, 22],
- ... (23 more removed lines; see GitHub link above)
+   37521: (VV, eV, xV) => {
```

#### 2. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L44-L45` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6-L7) · [Before (L44-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L44-L45)

```diff
-       d: () => zM,
-       f: () => PM,
+       e: () => wV,
+       h: () => pV,
```

#### 3. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L48` → after: `L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L10) · [Before (L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L48)

```diff
-       l: () => EM
+       k: () => qV
```

#### 4. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L50-L52` → after: `L12-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L12-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L12-L14) · [Before (L50-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L50-L52)

```diff
-     var OM = iM(632),
-       SM = iM(1845),
-       jM = iM(5200);
+     var JV = xV(660),
+       YV = xV(1846),
+       UV = xV(5301);
```

#### 5. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L55` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L17) · [Before (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L55)

```diff
-         this.width = MM, this.vL = rM, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(MM * rM)
+         this.width = VV, this.Jv = eV, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(VV * eV)
```

#### 6. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L62` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L24) · [Before (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L62)

```diff
-         this.next = (this.next + 1) % this.vL, this.size = Math.min(this.size + 1, this.vL)
+         this.next = (this.next + 1) % this.Jv, this.size = Math.min(this.size + 1, this.Jv)
```

#### 7. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L68` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L30) · [Before (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L68)

```diff
-           OM = (this.next - this.size + this.vL) % this.vL;
+           JV = (this.next - this.size + this.Jv) % this.Jv;
```

#### 8. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L70` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L32) · [Before (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L70)

```diff
-           const jM = (OM + SM) % this.vL * this.width;
+           const UV = (JV + YV) % this.Jv * this.width;
```

#### 9. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L82-L85` → after: `L44-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L44-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L44-L47) · [Before (L82-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L82-L85)

```diff
-         ML: 1,
-         pD: 2,
-         ZD: 3,
-         yd: 4
+         ZZ: 1,
+         ND: 2,
+         zD: 3,
+         zE: 4
```

#### 10. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L119` → after: `L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L81) · [Before (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L119)

```diff
-         this.steps = new aM(PM, LM), this.events = new aM(HM.length, LM), this.frames = new aM(hM.length, LM), this.cameraSets = new aM(jM.g, 256), this.changes = new aM(dM.length, 256)
+         this.steps = new yV(pV, ZV), this.events = new yV(rV.length, ZV), this.frames = new yV(kV.length, ZV), this.cameraSets = new yV(UV.i, 256), this.changes = new yV(EV.length, 256)
```

#### 11. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L140` → after: `L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L102) · [Before (L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L140)

```diff
-         MM[rM + 6] !== nM.yd && (null === (iM = this.rings) || void 0 === iM || iM.steps.push(MM, rM))
+         VV[eV + 6] !== QV.zE && (null === (xV = this.rings) || void 0 === xV || xV.steps.push(VV, eV))
```

#### 12. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L171` → after: `L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L133) · [Before (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L171)

```diff
-         return [`look records (${this.startedClient}): ${mM.join(",")}`, ...null !== (MM = null === iM || void 0 === iM ? void 0 : iM.steps.lines()) && void 0 !== MM ? MM : [], `mousemove events: ${HM.join(",")}`, ...null !== (rM = null === iM || void 0 === iM ? void 0 : iM.event … [truncated]
+         return [`look records (${this.startedClient}): ${vV.join(",")}`, ...null !== (VV = null === xV || void 0 === xV ? void 0 : xV.steps.lines()) && void 0 !== VV ? VV : [], `mousemove events: ${rV.join(",")}`, ...null !== (eV = null === xV || void 0 === xV ? void 0 : xV.event … [truncated]
```

#### 13. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L180` → after: `L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L142) · [Before (L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L180)

```diff
-             const jM = null !== (iM = null === MM || void 0 === MM ? void 0 : MM.rows(OM, SM)) && void 0 !== iM ? iM : [];
+             const UV = null !== (xV = null === VV || void 0 === VV ? void 0 : VV.rows(JV, YV)) && void 0 !== xV ? xV : [];
```

#### 14. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L188-L189` → after: `L150-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L150-L151) · [Before (L188-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L188-L189)

```diff
-           version: OM.c,
-           client: null !== (iM = this.startedClient) && void 0 !== iM ? iM : "not started",
+           version: JV.e,
+           client: null !== (xV = this.startedClient) && void 0 !== xV ? xV : "not started",
```

#### 15. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L200` → after: `L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L162) · [Before (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L200)

```diff
-           Vd: null !== document.pointerLockElement,
+           YB: null !== document.pointerLockElement,
```

#### 16. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L221` → after: `L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L183) · [Before (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L221)

```diff
-   40065: (MM, rM, iM) => {
+   40221: (VV, eV, xV) => {
```

#### 17. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L223-L224` → after: `L185-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L185-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L185-L186) · [Before (L223-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L223-L224)

```diff
-       b: () => jM,
-       d: () => SM
+       e: () => UV,
+       f: () => YV
```

#### 18. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L226` → after: `L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L188) · [Before (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L226)

```diff
-     var OM = iM(22);
+     var JV = xV(32);
```

#### 19. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L233` → after: `L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L195) · [Before (L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L233)

```diff
-       "refetchCode" !== MM ? "Plugin|MobAiPlugin|ShowPetUi" !== MM ? Promise.all([iM.e(121), iM.e(122), iM.e(117), iM.e(119), iM.e(236)]).then((() => iM(44386))).then((iM => {
+       "refetchCode" !== VV ? "Plugin|MobAiPlugin|ShowPetUi" !== VV ? Promise.all([xV.e(121), xV.e(122), xV.e(117), xV.e(119), xV.e(236)]).then((() => xV(44630))).then((xV => {
```

#### 20. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L239-L240` → after: `L201-L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L201-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L201-L202) · [Before (L239-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L239-L240)

```diff
-         console.error(`Game message ${MM} failed`, rM)
-       })) : OM.i.Tz("showPetUi", rM) : OM.i.Tz("refetchCode")
+         console.error(`Game message ${VV} failed`, eV)
+       })) : JV.h.QZ("showPetUi", eV) : JV.h.QZ("refetchCode")
```

#### 21. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L243` → after: `L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L205) · [Before (L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L243)

```diff
-   53658: (MM, rM, iM) => {
+   53866: (VV, eV, xV) => {
```

#### 22. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L245-L246` → after: `L207-L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L207-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L207-L208) · [Before (L245-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L245-L246)

```diff
-       c: () => OM,
-       e: () => SM
+       e: () => JV,
+       g: () => YV
```

#### 23. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L255` → after: `L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L217) · [Before (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L255)

```diff
-   34956: (MM, rM, iM) => {
+   35240: (VV, eV, xV) => {
```

#### 24. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L260` → after: `L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L222) · [Before (L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L260)

```diff
-     var OM = iM(19);
+     var JV = xV(27);
```

#### 25. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L267` → after: `L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L229) · [Before (L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L267)

```diff
-       return null === (MM = OM.d.get("showDistantNametags")) || void 0 === MM || MM
+       return null === (VV = JV.b.get("showDistantNametags")) || void 0 === VV || VV
```

#### 26. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L276` → after: `L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L238) · [Before (L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L276)

```diff
-       }()) && void 0 !== MM ? MM : PM() ? 0 : SM
+       }()) && void 0 !== VV ? VV : pV() ? 0 : YV
```

#### 27. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L279` → after: `L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L241) · [Before (L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L279)

```diff
-   45248: (MM, rM, iM) => {
+   45460: (VV, eV, xV) => {
```

#### 28. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L281` → after: `L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L243) · [Before (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L281)

```diff
-       blockIdOf: () => zQ.e,
+       blockIdOf: () => yn.c,
```

#### 29. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L285` → after: `L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L247) · [Before (L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L285)

```diff
-       drainTextRerasters: () => Mn.b,
+       drainTextRerasters: () => Op.d,
```

#### 30. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L292-L293` → after: `L254-L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L254-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L254-L255) · [Before (L292-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L292-L293)

```diff
-       loadTextIcons: () => Mn.d,
-       rasterText: () => cP.e,
+       loadTextIcons: () => Op.g,
+       rasterText: () => dp.b,
```

#### 31. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L296-L297` → after: `L258-L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L258-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L258-L259) · [Before (L296-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L296-L297)

```diff
-       setTextHost: () => Mn.g,
-       setTextLocalPlayer: () => Mn.j,
+       setTextHost: () => Op.i,
+       setTextLocalPlayer: () => Op.k,
```

#### 32. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L302-L303` → after: `L264-L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L264-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L264-L265) · [Before (L302-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L302-L303)

```diff
-       textChanged: () => Mn.o,
-       warmText: () => cP.h,
+       textChanged: () => Op.r,
+       warmText: () => dp.c,
```

#### 33. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L306-L323` → after: `L268-L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L268-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L268-L285) · [Before (L306-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L306-L323)

```diff
-     iM(37451);
-     var OM = iM(19),
-       SM = iM(37769),
-       jM = iM(40240),
-       aM = iM(22),
-       PM = iM(3809),
-       nM = iM(37767),
-       QM = iM(1313),
-       zM = iM(613),
-       LM = iM(39230),
-       mM = iM(5198),
-       HM = iM(41714),
-       hM = iM(41669);
-     const JM = hM.Fb / 4,
-       dM = hM.o.PlaySound,
-       yM = hM.o.SoundReset,
- ... (2 more removed lines; see GitHub link above)
+     xV(37649);
+     var JV = xV(27),
+       YV = xV(38012),
+       UV = xV(40382),
+       yV = xV(32),
+       pV = xV(3842),
+       QV = xV(38003),
+       nV = xV(1332),
+       wV = xV(648),
+       ZV = xV(39367),
+       vV = xV(5297),
+       rV = xV(41914),
+       kV = xV(41852);
+     const bV = kV.Db / 4,
+       EV = kV.n.PlaySound,
+       BV = kV.n.SoundReset,
+ ... (2 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L327` → after: `L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L289) · [Before (L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L327)

```diff
-         this.core = MM, this.memory = rM, this.audio = iM, this.serverIds = new Int32Array(256).fill(hM.Nc), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.vie … [truncated]
+         this.core = VV, this.memory = eV, this.audio = xV, this.serverIds = new Int32Array(256).fill(kV.Uc), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.vie … [truncated]
```

#### 35. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L332` → after: `L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L294) · [Before (L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L332)

```diff
-         return this.scratchPtr < 0 && (this.scratchPtr = this.core.eSM(), this.ensureViews()), this.scratchPtr
+         return this.scratchPtr < 0 && (this.scratchPtr = this.core.cUV(), this.ensureViews()), this.scratchPtr
```

#### 36. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L345` → after: `L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L307) · [Before (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L345)

```diff
-         return hM.v.localId(this.apiView, 0)
+         return kV.s.localId(this.apiView, 0)
```

#### 37. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L348` → after: `L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L310) · [Before (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L348)

```diff
-         return hM.v.localDeaths(this.apiView, 0)
+         return kV.s.localDeaths(this.apiView, 0)
```

#### 38. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L352-L356` → after: `L314-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L314-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L314-L318) · [Before (L352-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L352-L356)

```diff
-           rM = hM.v.entRenderPtr(MM, 0),
-           iM = hM.v.entVisPtr(MM, 0),
-           OM = hM.v.entCapacity(MM, 0);
-         if (rM !== this.renderPtr || iM !== this.visPtr || OM !== this.vL || this.renderBuffer !== this.buffer) {
-           this.renderPtr = rM, this.visPtr = iM, this.vL = OM, this.renderBuffer = this.buffer;
+           eV = kV.s.entRenderPtr(VV, 0),
+           xV = kV.s.entVisPtr(VV, 0),
+           JV = kV.s.entCapacity(VV, 0);
+         if (eV !== this.renderPtr || xV !== this.visPtr || JV !== this.Jv || this.renderBuffer !== this.buffer) {
+           this.renderPtr = eV, this.visPtr = xV, this.Jv = JV, this.renderBuffer = this.buffer;
```

#### 39. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L359` → after: `L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L321) · [Before (L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L359)

```diff
-           this.renderCapacity = MM && SM ? OM : 0, this.render = MM && SM ? MM : new Float32Array(0), this.vis = MM && SM ? SM : new Uint8Array(0)
+           this.renderCapacity = VV && YV ? JV : 0, this.render = VV && YV ? VV : new Float32Array(0), this.vis = VV && YV ? YV : new Uint8Array(0)
```

#### 40. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L364` → after: `L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L326) · [Before (L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L364)

```diff
-           return (0, HM.l)(MM, this.memory().buffer, rM, iM, OM)
+           return (0, rV.r)(VV, this.memory().buffer, eV, xV, JV)
```

#### 41. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L379` → after: `L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L341) · [Before (L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L379)

```diff
-         return (null === OM || void 0 === OM ? void 0 : OM.buffer) === this.memory().buffer && OM.byteOffset === iM && OM.byteLength >= MM ? OM : (this.scratchView = this.memoryData(iM, MM, 8, rM), this.scratchView)
+         return (null === JV || void 0 === JV ? void 0 : JV.buffer) === this.memory().buffer && JV.byteOffset === xV && JV.byteLength >= VV ? JV : (this.scratchView = this.memoryData(xV, VV, 8, eV), this.scratchView)
```

#### 42. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L403-L404` → after: `L365-L366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L365-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L365-L366) · [Before (L403-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L403-L404)

```diff
-             SM = QM + mM.U;
-           if (iM === hM.o.EntitySpawned) {
+             YV = nV + vV.db;
+           if (xV === kV.n.EntitySpawned) {
```

#### 43. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L406-L410` → after: `L368-L372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L368-L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L368-L372) · [Before (L406-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L406-L410)

```diff
-             if (OM !== hM.Hb.BYTES) throw wM(iM, QM, OM);
-             const MM = hM.Hb.serverId(jM, SM);
-             this.spawned(MM, hM.Hb.index(jM, SM), hM.Hb.kind(jM, SM)), null === (aM = rM.entityAdded) || void 0 === aM || aM.call(rM, MM)
-           } else if ((iM === hM.o.ChunkSlot || iM === hM.o.EntityInfoChanged) && !(0, hM.ge)(iM, jM, SM, OM, rM)) throw wM(iM, QM, OM);
-           QM = SM + (0, mM.oe)(OM)
+             if (JV !== kV.Kb.BYTES) throw NV(xV, nV, JV);
+             const VV = kV.Kb.serverId(UV, YV);
+             this.spawned(VV, kV.Kb.index(UV, YV), kV.Kb.kind(UV, YV)), null === (yV = eV.entityAdded) || void 0 === yV || yV.call(eV, VV)
+           } else if ((xV === kV.n.ChunkSlot || xV === kV.n.EntityInfoChanged) && !(0, kV.se)(xV, UV, YV, JV, eV)) throw NV(xV, nV, JV);
+           nV = YV + (0, vV.ze)(JV)
```

#### 44. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L425-L427` → after: `L387-L389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L387-L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L387-L389) · [Before (L425-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L425-L427)

```diff
-             jM = SM + mM.U;
-           if ((65535 & MM) === hM.o.EntityDespawned && MM >>> 16 === hM.Hb.BYTES) {
-             const MM = hM.Hb.serverId(iM, jM);
+             UV = YV + vV.db;
+           if ((65535 & VV) === kV.n.EntityDespawned && VV >>> 16 === kV.Kb.BYTES) {
+             const VV = kV.Kb.serverId(xV, UV);
```

#### 45. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L429` → after: `L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L391) · [Before (L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L429)

```diff
-             if (this.despawned(MM, hM.Hb.index(iM, jM))) null === (OM = rM.entityRemoved) || void 0 === OM || OM.call(rM, MM)
+             if (this.despawned(VV, kV.Kb.index(xV, UV))) null === (JV = eV.entityRemoved) || void 0 === JV || JV.call(eV, VV)
```

#### 46. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L431` → after: `L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L393) · [Before (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L431)

```diff
-           SM = jM + (0, mM.oe)(MM >>> 16)
+           YV = UV + (0, vV.ze)(VV >>> 16)
```

#### 47. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L447` → after: `L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L409) · [Before (L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L447)

```diff
-             gM = eM + mM.U;
+             MV = PV + vV.db;
```

#### 48. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L450` → after: `L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L412) · [Before (L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L450)

```diff
-           else if (OM === mM.Y.LocalPlayerBound) {
+           else if (JV === vV.hb.LocalPlayerBound) {
```

#### 49. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L452` → after: `L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L414) · [Before (L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L452)

```diff
-             if (tM !== mM.Hb) throw wM(OM, eM, tM);
+             if (XV !== vV.Rb) throw NV(JV, PV, XV);
```
