# Changed — Bundle Modifications Report (Part 093 / 137)

- **Updated at**: `2026-11-25T07:51 JST`
- **Part**: `93 / 137` (**384** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 092](part-092.md) · [Part 094 →](part-094.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/91.js` (7zvlu.7df130a9 → c6gaap.4d6587ec · continued)

- **File**: `bundles/bloxd.io/chunks/js/91.js` (58 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619)

#### 10. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L81` → after: `L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/91.js#L81) · [Before (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/91.js#L81)

```diff
-         this.steps = new IB(NB, pB), this.events = new IB(sB.length, pB), this.frames = new IB(JB.length, pB), this.cameraSets = new IB(dB.e, 256), this.changes = new IB(yB.length, 256)
+         this.steps = new GB(vB, hB), this.events = new GB(FB.length, hB), this.frames = new GB(NB.length, hB), this.cameraSets = new GB(oB.f, 256), this.changes = new GB(qB.length, 256)
```

#### 11. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L102` → after: `L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/91.js#L102) · [Before (L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/91.js#L102)

```diff
-         BB[jB + 6] !== uB.Dy && (null === (zB = this.rings) || void 0 === zB || zB.steps.push(BB, jB))
+         BB[IB + 6] !== kB.Fq && (null === (ZB = this.rings) || void 0 === ZB || ZB.steps.push(BB, IB))
```

#### 12. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L133` → after: `L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/91.js#L133) · [Before (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/91.js#L133)

```diff
-         return [`look records (${this.startedClient}): ${rB.join(",")}`, ...null !== (BB = null === zB || void 0 === zB ? void 0 : zB.steps.lines()) && void 0 !== BB ? BB : [], `mousemove events: ${sB.join(",")}`, ...null !== (jB = null === zB || void 0 === zB ? void 0 : zB.event … [truncated]
+         return [`look records (${this.startedClient}): ${zB.join(",")}`, ...null !== (BB = null === ZB || void 0 === ZB ? void 0 : ZB.steps.lines()) && void 0 !== BB ? BB : [], `mousemove events: ${FB.join(",")}`, ...null !== (IB = null === ZB || void 0 === ZB ? void 0 : ZB.event … [truncated]
```

#### 13. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L142` → after: `L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/91.js#L142) · [Before (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/91.js#L142)

```diff
-             const dB = null !== (zB = null === BB || void 0 === BB ? void 0 : BB.rows(QB, nB)) && void 0 !== zB ? zB : [];
+             const oB = null !== (ZB = null === BB || void 0 === BB ? void 0 : BB.rows(TB, JB)) && void 0 !== ZB ? ZB : [];
```

#### 14. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L151` → after: `L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/91.js#L151) · [Before (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/91.js#L151)

```diff
-           client: null !== (zB = this.startedClient) && void 0 !== zB ? zB : "not started",
+           client: null !== (ZB = this.startedClient) && void 0 !== ZB ? ZB : "not started",
```

#### 15. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L162` → after: `L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/91.js#L162) · [Before (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/91.js#L162)

```diff
-           Ky: null !== document.pointerLockElement,
+           mq: null !== document.pointerLockElement,
```

#### 16. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L177` → after: `L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/91.js#L177) · [Before (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/91.js#L177)

```diff
-         (0, nB.e)(new Blob([jB], {
+         (0, JB.d)(new Blob([IB], {
```

#### 17. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L183` → after: `L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/91.js#L183) · [Before (L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/91.js#L183)

```diff
-   36451: (BB, jB, zB) => {
+   36396: (BB, IB, ZB) => {
```

#### 18. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L191-L194` → after: `L191-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L191-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/91.js#L191-L194) · [Before (L191-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/91.js#L191-L194)

```diff
-     var QB = zB(4893),
-       nB = zB(2912),
-       dB = zB(1948);
-     const IB = new Map(Object.entries(QB.l).map((BB => {
+     var TB = ZB(4975),
+       JB = ZB(2973),
+       oB = ZB(1956);
+     const GB = new Map(Object.entries(TB.m).map((BB => {
```

#### 19. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L200` → after: `L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/91.js#L200) · [Before (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/91.js#L200)

```diff
-       return (0, dB.G)(BB).toFixed(1)
+       return (0, oB.K)(BB).toFixed(1)
```

#### 20. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L204` → after: `L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/91.js#L204) · [Before (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/91.js#L204)

```diff
-       return `camera set by ${IB.get(BB[jB+1])}: heading ${`${NB(BB[jB+2])} -> ${NB(BB[jB+4])}`} deg, pitch ${`${NB(BB[jB+3])} -> ${NB(BB[jB+5])}`} deg, at ${BB[jB].toFixed(1)} ms`
+       return `camera set by ${GB.get(BB[IB+1])}: heading ${`${vB(BB[IB+2])} -> ${vB(BB[IB+4])}`} deg, pitch ${`${vB(BB[IB+3])} -> ${vB(BB[IB+5])}`} deg, at ${BB[IB].toFixed(1)} ms`
```

#### 21. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L206` → after: `L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/91.js#L206) · [Before (L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/91.js#L206)

```diff
-     var UB = zB(36453);
+     var cB = ZB(36398);
```

#### 22. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L218` → after: `L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/91.js#L218) · [Before (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/91.js#L218)

```diff
-         this.frames = 0, this.looked = 0, this.idle = 0, this.SF = 0, this.pastLimit = 0, this.lockSkips = 0, this.Dy = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakR … [truncated]
+         this.frames = 0, this.looked = 0, this.idle = 0, this.gM = 0, this.pastLimit = 0, this.lockSkips = 0, this.Fq = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakR … [truncated]
```

#### 23. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L221` → after: `L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/91.js#L221) · [Before (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/91.js#L221)

```diff
-         return this.events > 0 || 0 !== this.raw[0] || 0 !== this.raw[1] || this.lockSkips > 0 || this.SF > 0 || this.dropped > 0 || this.cameraSets > 0
+         return this.events > 0 || 0 !== this.raw[0] || 0 !== this.raw[1] || this.lockSkips > 0 || this.gM > 0 || this.dropped > 0 || this.cameraSets > 0
```

#### 24. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L224` → after: `L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/91.js#L224) · [Before (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/91.js#L224)

```diff
-         return this.SF > 0 || this.pastLimit > 0 || this.bigEvents > 0 || this.dropped > 0 || this.cameraSets > 0
+         return this.gM > 0 || this.pastLimit > 0 || this.bigEvents > 0 || this.dropped > 0 || this.cameraSets > 0
```

#### 25. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L230` → after: `L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/91.js#L230) · [Before (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/91.js#L230)

```diff
-         this.topicOn = (0, nB.q)("look"), this.remote = (0, nB.t)(), this.tally = new sB, this.takes = null, this.started = !1, this.record = function(jB) {
+         this.topicOn = (0, JB.t)("look"), this.remote = (0, JB.u)(), this.tally = new FB, this.takes = null, this.started = !1, this.record = function(IB) {
```

#### 26. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L232` → after: `L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/91.js#L232) · [Before (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/91.js#L232)

```diff
-           if (UB.m.step(jB, zB), !BB.topicOn) return;
+           if (cB.o.step(IB, ZB), !BB.topicOn) return;
```

#### 27. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L245` → after: `L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/91.js#L245) · [Before (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/91.js#L245)

```diff
-             case UB.l.idle:
+             case cB.k.idle:
```

#### 28. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L247-L250` → after: `L247-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L247-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/91.js#L247-L250) · [Before (L247-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/91.js#L247-L250)

```diff
-             case UB.l.Dy:
-               return void yB.Dy++;
-             case UB.l.YF:
-               return yB.lockSkips++, void(0 === dB && 0 === IB || BB.outlier(`lock skip dropped raw (${pB(dB)}, ${pB(IB)}) at ${rB(QB)} ms`))
+             case cB.k.Fq:
+               return void qB.Fq++;
+             case cB.k.YM:
+               return qB.lockSkips++, void(0 === oB && 0 === GB || BB.outlier(`lock skip dropped raw (${hB(oB)}, ${hB(GB)}) at ${zB(TB)} ms`))
```

#### 29. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L254-L255` → after: `L254-L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L254-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/91.js#L254-L255) · [Before (L254-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/91.js#L254-L255)

```diff
-             GB = `raw (${pB(dB)}, ${pB(IB)}) over ${rB(nB)} ms, limit ${pB(mB)}, filter v (${sB.toFixed(3)}, ${JB.toFixed(3)}) px/ms, at ${rB(QB)} ms`;
-           aB === UB.l.SF ? (yB.SF++, BB.outlier(`spike put right: ${GB} -> turned (${pB(NB)}, ${pB(uB)})`)) : kB ? (yB.pastLimit++, BB.outlier(`kept past limit: ${GB}`)) : nB > 50 && (yB.longFrames++, BB.remote || BB.outlier(`long frame: ${GB}, turned in full`))
+             UB = `raw (${hB(oB)}, ${hB(GB)}) over ${zB(JB)} ms, limit ${hB(gB)}, filter v (${FB.toFixed(3)}, ${NB.toFixed(3)}) px/ms, at ${zB(TB)} ms`;
+           nB === cB.k.gM ? (qB.gM++, BB.outlier(`spike put right: ${UB} -> turned (${hB(vB)}, ${hB(kB)})`)) : yB ? (qB.pastLimit++, BB.outlier(`kept past limit: ${UB}`)) : JB > 50 && (qB.longFrames++, BB.remote || BB.outlier(`long frame: ${UB}, turned in full`))
```

#### 30. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L258` → after: `L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/91.js#L258) · [Before (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/91.js#L258)

```diff
-           if (UB.m.mouseMove(BB, jB), !this.topicOn) return;
+           if (cB.o.mouseMove(BB, IB), !this.topicOn) return;
```

#### 31. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L266` → after: `L266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/91.js#L266) · [Before (L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/91.js#L266)

```diff
-           zB.eventMax = Math.max(zB.eventMax, dB), dB >= 200 && (zB.bigEvents++, this.eventOutlier(`big mousemove (${QB}, ${nB}) at ${rB(BB.timeStamp)} ms, lock ${jB?"DN":"free"}`))
+           ZB.eventMax = Math.max(ZB.eventMax, oB), oB >= 200 && (ZB.bigEvents++, this.eventOutlier(`big mousemove (${TB}, ${JB}) at ${zB(BB.timeStamp)} ms, lock ${IB?"sv":"free"}`))
```

#### 32. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L269` → after: `L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/91.js#L269) · [Before (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/91.js#L269)

```diff
-           BB ? UB.m.lockGained() : UB.m.change(UB.e.lockLost), this.topicOn && (0, nB.n)("look", `pointer lock ${BB?`gained (${BB.tagName.toLowerCase()})`:"lost"} at ${rB(performance.now())} ms`)
+           BB ? cB.o.lockGained() : cB.o.change(cB.d.lockLost), this.topicOn && (0, JB.o)("look", `pointer lock ${BB?`gained (${BB.tagName.toLowerCase()})`:"lost"} at ${zB(performance.now())} ms`)
```

#### 33. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L271` → after: `L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/91.js#L271) · [Before (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/91.js#L271)

```diff
-           UB.m.change(UB.e.lockError), this.topicOn && (0, nB.n)("look", `pointer lock request failed at ${rB(performance.now())} ms`)
+           cB.o.change(cB.d.lockError), this.topicOn && (0, JB.o)("look", `pointer lock request failed at ${zB(performance.now())} ms`)
```

#### 34. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L273` → after: `L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/91.js#L273) · [Before (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/91.js#L273)

```diff
-           UB.m.change("hidden" === document.visibilityState ? UB.e.hidden : UB.e.visible), this.topicOn && (0, nB.n)("look", `page ${document.visibilityState} at ${rB(performance.now())} ms`)
+           cB.o.change("hidden" === document.visibilityState ? cB.d.hidden : cB.d.visible), this.topicOn && (0, JB.o)("look", `page ${document.visibilityState} at ${zB(performance.now())} ms`)
```

#### 35. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L275` → after: `L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/91.js#L275) · [Before (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/91.js#L275)

```diff
-           UB.m.change(UB.e.focus)
+           cB.o.change(cB.d.focus)
```

#### 36. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L277` → after: `L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/91.js#L277) · [Before (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/91.js#L277)

```diff
-           UB.m.change(UB.e.blur)
+           cB.o.change(cB.d.blur)
```

#### 37. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L283-L284` → after: `L283-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L283-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/91.js#L283-L284) · [Before (L283-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/91.js#L283-L284)

```diff
-             zB = [`${BB.frames} frames (${BB.looked} looked, ${BB.idle} idle${"wasm"===UB.m.client?`, ${BB.Dy} carried`:""})`, `dt avg ${rB(jB)} min ${rB(BB.dtMin)} max ${rB(BB.dtMax)}, ${BB.longFrames} long`, `${BB.events} mousemoves (max ${pB(BB.eventMax)} px, ${BB.bigEvents} b … [truncated]
-           BB.dropped > 0 && zB.push(`${BB.dropped} doubled spike copies dropped`), BB.cameraSets > 0 && zB.push(`${BB.cameraSets} camera sets`), BB.cameraSetsLost > 0 && zB.push(`${BB.cameraSetsLost} camera set records lost`), BB.lost > 0 && zB.push(`${BB.lost} records lost`), BB … [truncated]
+             ZB = [`${BB.frames} frames (${BB.looked} looked, ${BB.idle} idle${"wasm"===cB.o.client?`, ${BB.Fq} carried`:""})`, `dt avg ${zB(IB)} min ${zB(BB.dtMin)} max ${zB(BB.dtMax)}, ${BB.longFrames} long`, `${BB.events} mousemoves (max ${hB(BB.eventMax)} px, ${BB.bigEvents} b … [truncated]
+           BB.dropped > 0 && ZB.push(`${BB.dropped} doubled spike copies dropped`), BB.cameraSets > 0 && ZB.push(`${BB.cameraSets} camera sets`), BB.cameraSetsLost > 0 && ZB.push(`${BB.cameraSetsLost} camera set records lost`), BB.lost > 0 && ZB.push(`${BB.lost} records lost`), BB … [truncated]
```

#### 38. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L288` → after: `L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/91.js#L288) · [Before (L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/91.js#L288)

```diff
-         if (UB.m.start(BB, null !== document.pointerLockElement), this.takes = jB, this.topicOn) {
+         if (cB.o.start(BB, null !== document.pointerLockElement), this.takes = IB, this.topicOn) {
```

#### 39. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L292` → after: `L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/91.js#L292) · [Before (L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/91.js#L292)

```diff
-           (0, nB.n)("look", `start: ${BB} client, dpr ${window.devicePixelRatio}, screen ${jB.width}x${jB.height}, pointer lock ${document.pointerLockElement?"DN":"free"}`)
+           (0, JB.o)("look", `start: ${BB} client, dpr ${window.devicePixelRatio}, screen ${IB.width}x${IB.height}, pointer lock ${document.pointerLockElement?"sv":"free"}`)
```

#### 40. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L297` → after: `L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/91.js#L297) · [Before (L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/91.js#L297)

```diff
-         }), window.addEventListener("focus", this.onFocus), window.addEventListener("blur", this.onBlur), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychang … [truncated]
+         }), window.addEventListener("focus", this.onFocus), window.addEventListener("blur", this.onBlur), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychang … [truncated]
```

#### 41. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L301` → after: `L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/91.js#L301) · [Before (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/91.js#L301)

```diff
-         jB.outliers >= 20 ? jB.suppressed++ : (jB.outliers++, (0, nB.n)("look", BB))
+         IB.outliers >= 20 ? IB.suppressed++ : (IB.outliers++, (0, JB.o)("look", BB))
```

#### 42. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L305` → after: `L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/91.js#L305) · [Before (L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/91.js#L305)

```diff
-         jB.eventLines >= 10 ? jB.suppressed++ : (jB.eventLines++, (0, nB.n)("look", BB))
+         IB.eventLines >= 10 ? IB.suppressed++ : (IB.eventLines++, (0, JB.o)("look", BB))
```

#### 43. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L311-L312` → after: `L311-L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L311-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/91.js#L311-L312) · [Before (L311-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/91.js#L311-L312)

```diff
-           this.counted(UB.e.stepsLost, BB[0]), this.counted(UB.e.droppedCopies, BB[1]);
-           for (let jB = aB; jB + UB.g <= BB.length; jB += UB.g) this.record(BB, jB)
+           this.counted(cB.d.stepsLost, BB[0]), this.counted(cB.d.droppedCopies, BB[1]);
+           for (let IB = nB; IB + cB.h <= BB.length; IB += cB.h) this.record(BB, IB)
```

#### 44. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L315-L317` → after: `L315-L317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L315-L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/91.js#L315-L317) · [Before (L315-L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/91.js#L315-L317)

```diff
-         if (jB.length >= QB.d) {
-           this.counted(UB.e.cameraSetsLost, jB[0]);
-           for (let BB = QB.d; BB + QB.e <= jB.length; BB += QB.e) UB.m.cameraSet(jB, BB), this.topicOn && (this.tally.cameraSets++, this.outlier(uB(jB, BB)))
+         if (IB.length >= TB.c) {
+           this.counted(cB.d.cameraSetsLost, IB[0]);
+           for (let BB = TB.c; BB + TB.f <= IB.length; BB += TB.f) cB.o.cameraSet(IB, BB), this.topicOn && (this.tally.cameraSets++, this.outlier(kB(IB, BB)))
```

#### 45. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L321` → after: `L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/91.js#L321) · [Before (L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/91.js#L321)

```diff
-         this.counted(UB.e.droppedCopies, 1)
+         this.counted(cB.d.droppedCopies, 1)
```

#### 46. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L325` → after: `L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/91.js#L325) · [Before (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/91.js#L325)

```diff
-         if (UB.m.change(BB, jB), !this.topicOn) return;
+         if (cB.o.change(BB, IB), !this.topicOn) return;
```

#### 47. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L327` → after: `L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/91.js#L327) · [Before (L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/91.js#L327)

```diff
-         BB === UB.e.droppedCopies ? zB.dropped += jB : BB === UB.e.stepsLost ? zB.lost += jB : zB.cameraSetsLost += jB
+         BB === cB.d.droppedCopies ? ZB.dropped += IB : BB === cB.d.stepsLost ? ZB.lost += IB : ZB.cameraSetsLost += IB
```

#### 48. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L355-L356` → after: `L355-L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L355-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/91.js#L355-L356) · [Before (L355-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/91.js#L355-L356)

```diff
-       } = await zB.e(29).then((() => zB(34114)));
-       await QB, UB.m.save({
+       } = await ZB.e(29).then((() => ZB(34050)));
+       await TB, cB.o.save({
```

#### 49. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L362` → after: `L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/91.js#L362) · [Before (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/91.js#L362)

```diff
-   4893: (BB, jB, zB) => {
+   4975: (BB, IB, ZB) => {
```

#### 50. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L368` → after: `L366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/91.js#L366) · [Before (L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/91.js#L368)

```diff
-       C: () => dB,
+       Bb: () => XB,
```

#### 51. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L375-L378` → after: `L373-L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L373-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/91.js#L373-L376) · [Before (L375-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/91.js#L375-L378)

```diff
-       Jb: () => iB,
-       K: () => aB,
-       M: () => UB,
-       Mb: () => qB,
+       L: () => dB,
+       Lb: () => pB,
+       N: () => VB,
+       P: () => hB,
```

#### 52. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L382-L384` → after: `L379-L381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L379-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/91.js#L379-L381) · [Before (L382-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/91.js#L382-L384)

```diff
-       Sb: () => nB,
-       T: () => mB,
-       U: () => JB,
+       Tb: () => mB,
+       V: () => nB,
+       Vb: () => AB,
```

#### 53. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L386-L387` → after: `L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/91.js#L383) · [Before (L386-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/91.js#L386-L387)

```diff
-       Wb: () => vB,
-       Y: () => FB,
+       Yb: () => LB,
```

#### 54. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L391-L392` → after: `L389-L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L389-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/91.js#L389-L391) · [Before (L391-L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/91.js#L391-L392)

```diff
-       d: () => GB,
-       e: () => kB,
+       bc: () => fB,
+       c: () => UB,
+       cc: () => OB,
```

#### 55. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L394-L395` → after: `L393-L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L393-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/91.js#L393-L395) · [Before (L394-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/91.js#L394-L395)

```diff
-       gb: () => PB,
-       h: () => bB,
+       f: () => yB,
+       fc: () => YB,
+       gc: () => bB,
```

#### 56. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L397-L398` → after: `L397-L400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L397-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/91.js#L397-L400) · [Before (L397-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/91.js#L397-L398)

```diff
-       ib: () => AB,
-       l: () => LB,
+       i: () => DB,
+       kb: () => HB,
+       kc: () => JB,
+       lb: () => PB,
```

#### 57. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L400-L403` → after: `L402-L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L402-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/91.js#L402-L405) · [Before (L400-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/91.js#L400-L403)

```diff
-       mb: () => XB,
-       ob: () => yB,
-       p: () => sB,
-       q: () => EB,
+       n: () => EB,
+       nc: () => KB,
+       pb: () => tB,
+       qb: () => lB,
```

#### 58. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L405-L409` → after: `L407-L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L407-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/91.js#L407-L409) · [Before (L405-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/91.js#L405-L409)

```diff
-       rb: () => oB,
-       sb: () => fB,
-       u: () => MB,
-       v: () => SB,
-       vb: () => ZB,
+       t: () => wB,
+       tb: () => eB,
+       w: () => xB,
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/92.js` (7zvlu.7df130a9 → c6gaap.4d6587ec)

- **File**: `bundles/bloxd.io/chunks/js/92.js` (910 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca)

#### 1. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L4)

```diff
-   41577: (BB, jB, zB) => {
+   41505: (BB, IB, ZB) => {
```

#### 2. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L12) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L12)

```diff
-       }] = await Promise.all([Promise.resolve().then((() => zB(1244))), Promise.resolve().then((() => zB(1173))), Promise.resolve().then((() => zB(1982)))]), IB = dB.latest("connectedGame").websocketUrl;
+       }] = await Promise.all([Promise.resolve().then((() => ZB(1258))), Promise.resolve().then((() => ZB(1186))), Promise.resolve().then((() => ZB(1995)))]), GB = oB.latest("connectedGame").websocketUrl;
```

#### 3. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L14) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L14)

```diff
-       const NB = `${QB.getHttpUrlFromWebSocketUrl(IB)}${BB}`;
+       const vB = `${TB.getHttpUrlFromWebSocketUrl(GB)}${BB}`;
```

#### 4. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L23) · [Before (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L23)

```diff
-   6479: (BB, jB, zB) => {
+   6694: (BB, IB, ZB) => {
```

#### 5. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L25` → after: `L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L25) · [Before (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L25)

```diff
-       c: () => nB
+       e: () => JB
```

#### 6. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L27` → after: `L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L27) · [Before (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L27)

```diff
-     var QB = zB(1148);
+     var TB = ZB(1153);
```

#### 7. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L46` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L46) · [Before (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L46)

```diff
-   41575: (BB, jB, zB) => {
+   41500: (BB, IB, ZB) => {
```

#### 8. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L51` → after: `L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L51) · [Before (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L51)

```diff
-     var QB = zB(62),
+     var TB = ZB(63),
```

#### 9. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L54` → after: `L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L54) · [Before (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L54)

```diff
-       IB = zB(1148);
+       GB = ZB(1153);
```

#### 10. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L67` → after: `L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L67) · [Before (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L67)

```diff
-       const [rB, sB] = (0, QB.useState)(uB), JB = null !== UB && void 0 !== UB ? UB : rB;
+       const [zB, FB] = (0, TB.useState)(kB), NB = null !== cB && void 0 !== cB ? cB : zB;
```

#### 11. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L87-L98` → after: `L87-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L87-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L87-L98) · [Before (L87-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L87-L98)

```diff
-     var uB = zB(1982),
-       UB = zB(6444),
-       aB = zB(1478),
-       pB = zB(36958),
-       rB = zB(1108),
-       sB = zB(4829),
-       JB = zB(36944),
-       mB = zB(36977),
-       yB = zB(1615),
-       kB = zB(4918),
-       GB = zB(6433);
-     const LB = new URL(yB.e).host;
+     var kB = ZB(1995),
+       cB = ZB(6655),
+       nB = ZB(1516),
+       hB = ZB(36918),
+       zB = ZB(1102),
+       FB = ZB(4922),
+       NB = ZB(36900),
+       gB = ZB(36935),
+       qB = ZB(1651),
+       yB = ZB(4995),
+       UB = ZB(6648);
+     const WB = new URL(qB.b).host;
```

#### 12. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L104-L106` → after: `L104-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L104-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L104-L106) · [Before (L104-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L104-L106)

```diff
-         const BB = /^docs\//i.test(jB) ? `${yB.e}/` : `${yB.e}/docs/`,
-           QB = jB.toLowerCase().replace(/^www\./, "").startsWith(`${LB}/`);
-         zB = new URL(QB ? `https://${jB}` : jB, BB)
+         const BB = /^docs\//i.test(IB) ? `${qB.b}/` : `${qB.b}/docs/`,
+           TB = IB.toLowerCase().replace(/^www\./, "").startsWith(`${WB}/`);
+         ZB = new URL(TB ? `https://${IB}` : IB, BB)
```

#### 13. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L110` → after: `L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L110) · [Before (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L110)

```diff
-       if ("https:" !== zB.protocol && "http:" !== zB.protocol || zB.host !== LB && zB.host !== `www.${LB}`) return null;
+       if ("https:" !== ZB.protocol && "http:" !== ZB.protocol || ZB.host !== WB && ZB.host !== `www.${WB}`) return null;
```

#### 14. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L112` → after: `L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L112) · [Before (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L112)

```diff
-       return tB(QB) || null !== (0, kB.r)(QB) ? QB : (0, kB.o)(QB)
+       return CB(TB) || null !== (0, yB.v)(TB) ? TB : (0, yB.u)(TB)
```

#### 15. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L116` → after: `L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L116) · [Before (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L116)

```diff
-       return BB === kB.g || BB === kB.i
+       return BB === yB.h || BB === yB.k
```

#### 16. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L121` → after: `L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L121) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L121)

```diff
-       return null === jB ? BB : `${yB.e}${jB}`
+       return null === IB ? BB : `${qB.b}${IB}`
```

#### 17. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L123-L124` → after: `L123-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L123-L124) · [Before (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L123-L124)

```diff
-     var MB = zB(225),
-       EB = zB(41506),
+     var sB = ZB(212),
+       wB = ZB(41435),
```

#### 18. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L191` → after: `L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L191) · [Before (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L191)

```diff
-         const zB = /\w/.test(jB[0]) && /\w/.test(null !== (uB = BB[NB - 1]) && void 0 !== uB ? uB : "") || /\w/.test(null !== (UB = jB.at(-1)) && void 0 !== UB ? UB : "") && /\w/.test(null !== (aB = BB[NB + jB.length]) && void 0 !== aB ? aB : "");
+         const ZB = /\w/.test(IB[0]) && /\w/.test(null !== (kB = BB[vB - 1]) && void 0 !== kB ? kB : "") || /\w/.test(null !== (cB = IB.at(-1)) && void 0 !== cB ? cB : "") && /\w/.test(null !== (nB = BB[vB + IB.length]) && void 0 !== nB ? nB : "");
```

#### 19. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L209` → after: `L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L209) · [Before (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L209)

```diff
-       return null !== (jB = null === (zB = /^[ \t]*/.exec(BB)) || void 0 === zB ? void 0 : zB[0]) && void 0 !== jB ? jB : ""
+       return null !== (IB = null === (ZB = /^[ \t]*/.exec(BB)) || void 0 === ZB ? void 0 : ZB[0]) && void 0 !== IB ? IB : ""
```

#### 20. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L228` → after: `L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L228) · [Before (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L228)

```diff
-         return (null !== (zB = null === (QB = BB.replace(/\\`/g, "").match(/`/g)) || void 0 === QB ? void 0 : QB.length) && void 0 !== zB ? zB : 0) % 2 === 1 && (pB = !pB), nB || uB && jB !== aB ? BB : function(BB, jB, zB) {
+         return (null !== (ZB = null === (TB = BB.replace(/\\`/g, "").match(/`/g)) || void 0 === TB ? void 0 : TB.length) && void 0 !== ZB ? ZB : 0) % 2 === 1 && (hB = !hB), JB || kB && IB !== nB ? BB : function(BB, IB, ZB) {
```

#### 21. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L249` → after: `L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L249) · [Before (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L249)

```diff
-         (null !== (IB = null === (NB = BB.replace(/\\`/g, "").match(/`/g)) || void 0 === NB ? void 0 : NB.length) && void 0 !== IB ? IB : 0) % 2 === 1 && (dB = !dB);
+         (null !== (GB = null === (vB = BB.replace(/\\`/g, "").match(/`/g)) || void 0 === vB ? void 0 : vB.length) && void 0 !== GB ? GB : 0) % 2 === 1 && (oB = !oB);
```

#### 22. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L253` → after: `L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L253) · [Before (L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L253)

```diff
-         const rB = null !== (uB = nB.slice(jB + 1).find((BB => "" !== BB.trim()))) && void 0 !== uB ? uB : zB;
+         const zB = null !== (kB = JB.slice(IB + 1).find((BB => "" !== BB.trim()))) && void 0 !== kB ? kB : ZB;
```

#### 23. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L256` → after: `L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L256) · [Before (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L256)

```diff
-       return IB.trim() === BB.trim() && jB.trim() !== BB.trim() ? jB : IB
+       return GB.trim() === BB.trim() && IB.trim() !== BB.trim() ? IB : GB
```

#### 24. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L261` → after: `L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L261) · [Before (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L261)

```diff
-       return null !== (jB = BB.split("\n").find((BB => "" !== BB.trim()))) && void 0 !== jB ? jB : ""
+       return null !== (IB = BB.split("\n").find((BB => "" !== BB.trim()))) && void 0 !== IB ? IB : ""
```

#### 25. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L268` → after: `L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L268) · [Before (L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L268)

```diff
-         zB.set(IB, (null !== (QB = zB.get(IB)) && void 0 !== QB ? QB : 0) + 1)
+         ZB.set(GB, (null !== (TB = ZB.get(GB)) && void 0 !== TB ? TB : 0) + 1)
```

#### 26. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L273` → after: `L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L273) · [Before (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L273)

```diff
-         const BB = null !== (dB = zB.get(IB)) && void 0 !== dB ? dB : 0;
+         const BB = null !== (oB = ZB.get(GB)) && void 0 !== oB ? oB : 0;
```

#### 27. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L326` → after: `L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L326) · [Before (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L326)

```diff
-       for (const dB of (null !== (nB = iB().getLeadingCommentRanges(BB, jB.getFullStart())) && void 0 !== nB ? nB : []).reverse()) {
+       for (const oB of (null !== (JB = OB().getLeadingCommentRanges(BB, IB.getFullStart())) && void 0 !== JB ? JB : []).reverse()) {
```

#### 28. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L339` → after: `L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L339) · [Before (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L339)

```diff
-       return (null !== (jB = null === zB || void 0 === zB ? void 0 : zB.length) && void 0 !== jB ? jB : 0) > 0
+       return (null !== (IB = null === ZB || void 0 === ZB ? void 0 : ZB.length) && void 0 !== IB ? IB : 0) > 0
```

#### 29. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L348` → after: `L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L348) · [Before (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L348)

```diff
-             if (iB().isFunctionDeclaration(BB)) return null !== (jB = null === (zB = BB.name) || void 0 === zB ? void 0 : zB.text) && void 0 !== jB ? jB : null;
+             if (OB().isFunctionDeclaration(BB)) return null !== (IB = null === (ZB = BB.name) || void 0 === ZB ? void 0 : ZB.text) && void 0 !== IB ? IB : null;
```

#### 30. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L393-L394` → after: `L393-L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L393-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L393-L394) · [Before (L393-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L393-L394)

```diff
-         dB = nB.length > 0 ? nB : QB;
-       return null !== (zB = dB.find((BB => BB.topLevel))) && void 0 !== zB ? zB : dB[0]
+         oB = JB.length > 0 ? JB : TB;
+       return null !== (ZB = oB.find((BB => BB.topLevel))) && void 0 !== ZB ? ZB : oB[0]
```

#### 31. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L398` → after: `L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L398) · [Before (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L398)

```diff
-       return "" === BB.trim() ? `${jB.trim()}\n` : `${BB.replace(/\s*$/,"")}\n\n${jB.trim()}\n`
+       return "" === BB.trim() ? `${IB.trim()}\n` : `${BB.replace(/\s*$/,"")}\n\n${IB.trim()}\n`
```

#### 32. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L414` → after: `L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L414) · [Before (L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L414)

```diff
-       const dB = null !== (QB = zB.find((BB => BB.topLevel && !BB.isProperty))) && void 0 !== QB ? QB : zB.find((BB => BB.topLevel)),
+       const oB = null !== (TB = ZB.find((BB => BB.topLevel && !BB.isProperty))) && void 0 !== TB ? TB : ZB.find((BB => BB.topLevel)),
```

#### 33. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L417` → after: `L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L417) · [Before (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L417)

```diff
-       return null !== (nB = void 0 !== NB && !zB.some((BB => BB.topLevel && BB.name === IB)) ? NB : xB(BB, IB)) && void 0 !== nB ? nB : NB
+       return null !== (JB = void 0 !== vB && !ZB.some((BB => BB.topLevel && BB.name === GB)) ? vB : tB(BB, GB)) && void 0 !== JB ? JB : vB
```

#### 34. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L441` → after: `L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L441) · [Before (L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L441)

```diff
-       return NB && aB ? vB(BB, IB, null !== rB && void 0 !== rB ? rB : NB, uB.functions, nB) : function(BB, jB, zB, QB, nB) {
+       return vB && nB ? KB(BB, GB, null !== zB && void 0 !== zB ? zB : vB, kB.functions, JB) : function(BB, IB, ZB, TB, JB) {
```

#### 35. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L458` → after: `L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L458) · [Before (L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L458)

```diff
-       return 0 === zB || "\n" === BB[zB - 1] ? zB : jB
+       return 0 === ZB || "\n" === BB[ZB - 1] ? ZB : IB
```

#### 36. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L463` → after: `L463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L463) · [Before (L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L463)

```diff
-       if ("" !== BB.trim() && ("top" === QB || "start" === QB)) return `${zB.trim()}\n\n${BB.replace(/^\s+/,"")}`;
+       if ("" !== BB.trim() && ("top" === TB || "start" === TB)) return `${ZB.trim()}\n\n${BB.replace(/^\s+/,"")}`;
```

#### 37. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L465` → after: `L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L465) · [Before (L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L465)

```diff
-       return nB ? `${BB.slice(0,nB.to)}\n\n${zB.trim()}${BB.slice(nB.to)}` : KB(BB, zB)
+       return JB ? `${BB.slice(0,JB.to)}\n\n${ZB.trim()}${BB.slice(JB.to)}` : bB(BB, ZB)
```

#### 38. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L575-L576` → after: `L575-L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L575-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L575-L576) · [Before (L575-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L575-L576)

```diff
-         nB = new Set((null !== (jB = BB.match(pj)) && void 0 !== jB ? jB : []).map((BB => BB.toLowerCase().replace(/s$/, "")))).size,
-         dB = (null !== (zB = BB.match(rj)) && void 0 !== zB ? zB : []).length;
+         JB = new Set((null !== (IB = BB.match(hI)) && void 0 !== IB ? IB : []).map((BB => BB.toLowerCase().replace(/s$/, "")))).size,
+         oB = (null !== (ZB = BB.match(zI)) && void 0 !== ZB ? ZB : []).length;
```

#### 39. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L582` → after: `L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L582) · [Before (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L582)

```diff
-       return jB.length >= 2 ? jB : []
+       return IB.length >= 2 ? IB : []
```

#### 40. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L584` → after: `L584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L584) · [Before (L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L584)

```diff
-     var mj = zB(4965);
+     var gI = ZB(5036);
```

#### 41. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L604` → after: `L604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L604) · [Before (L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L604)

```diff
-         nB.set(BB, [...null !== (dB = nB.get(BB)) && void 0 !== dB ? dB : [], pB])
+         JB.set(BB, [...null !== (oB = JB.get(BB)) && void 0 !== oB ? oB : [], hB])
```

#### 42. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L613-L614` → after: `L613-L614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L613-L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L613-L614) · [Before (L613-L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L613-L614)

```diff
-         const BB = null !== (aB = nB.get(yj(pB))) && void 0 !== aB ? aB : [];
-         1 !== BB.length || IB.includes(BB[0]) || (UB = (0, mj.u)(UB, new RegExp(`${pB}(?![\\w$])`, "g"), mj.m, (() => BB[0])), uB.push({
+         const BB = null !== (nB = JB.get(qI(hB))) && void 0 !== nB ? nB : [];
+         1 !== BB.length || GB.includes(BB[0]) || (cB = (0, gI.s)(cB, new RegExp(`${hB}(?![\\w$])`, "g"), gI.o, (() => BB[0])), kB.push({
```

#### 43. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L997` → after: `L997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L997) · [Before (L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L997)

```diff
-         description: `Reads a page of Bloxd's docs as Markdown. ${kB.h} lists every page with its link; then read the page, or the part of a long page, you need`,
+         description: `Reads a page of Bloxd's docs as Markdown. ${yB.i} lists every page with its link; then read the page, or the part of a long page, you need`,
```

#### 44. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1003` → after: `L1003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L1003) · [Before (L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L1003)

```diff
-               description: `${kB.h}, or a page it links to`
+               description: `${yB.i}, or a page it links to`
```

#### 45. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1021` → after: `L1021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L1021) · [Before (L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L1021)

```diff
-               description: `${gj}, to list every one of them`
+               description: `${dI}, to list every one of them`
```

#### 46. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1114-L1115` → after: `L1114-L1115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1114-L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L1114-L1115) · [Before (L1114-L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L1114-L1115)

```diff
-       fj = new RegExp(String.raw`^(?:\s*(?:We(?:'ll|'d| will| need to| should| must| can(?!'t))|Will use|Need to|Simpler:)(?:[^\n.]*\.(?=[A-Z])|[^\n]*(?:\n+|$))|\s*(?:Now,? )?(?:I'll |I will |[Ll]et's |[Ll]et me )?(?:[Ww]rite|[Mm]ake|[Ss]end|[Oo]utput|[Pp]roduce|[Uu]se|[Dd]o|[Cc] … [truncated]
-       oj = [new RegExp(String.raw`(?:^|[^\w"</=.])(?:${qj})\b(?!\s*\()`), /\btool calls?\b|^(?:so,? )?(?:(?:we(?:'ll| will)?|I'll|let's) (?:produce|output|generate)|now (?:produce|output))\b|^The user (?:wants?|wanted|asks?|asked|requests?|requested|says|said)\b/i, /^We (?:need|h … [truncated]
+       iI = new RegExp(String.raw`^(?:\s*(?:We(?:'ll|'d| will| need to| should| must| can(?!'t))|Will use|Need to|Simpler:)(?:[^\n.]*\.(?=[A-Z])|[^\n]*(?:\n+|$))|\s*(?:Now,? )?(?:I'll |I will |[Ll]et's |[Ll]et me )?(?:[Ww]rite|[Mm]ake|[Ss]end|[Oo]utput|[Pp]roduce|[Uu]se|[Dd]o|[Cc] … [truncated]
+       pI = [new RegExp(String.raw`(?:^|[^\w"</=.])(?:${YI})\b(?!\s*\()`), /\btool calls?\b|^(?:so,? )?(?:(?:we(?:'ll| will)?|I'll|let's) (?:produce|output|generate)|now (?:produce|output))\b|^The user (?:wants?|wanted|asks?|asked|requests?|requested|says|said)\b/i, /^We (?:need|h … [truncated]
```

#### 47. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1133` → after: `L1133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L1133) · [Before (L1133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L1133)

```diff
-           Dj(zB.slice(dB, BB)) && (QB = -1 === QB ? dB : QB, nB = BB), dB = BB
+           HI(ZB.slice(oB, BB)) && (TB = -1 === TB ? oB : TB, JB = BB), oB = BB
```

#### 48. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1135-L1136` → after: `L1135-L1136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1135-L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L1135-L1136) · [Before (L1135-L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L1135-L1136)

```diff
-         return -1 === nB ? BB : "" !== zB.slice(nB).trim() ? BB.slice(nB).trimStart() : `${BB.slice(0,QB).trimEnd()}\n${BB.slice(zB.length)}`.trim()
-       }(zB) : "" !== zB.trim() ? zB : BB
+         return -1 === JB ? BB : "" !== ZB.slice(JB).trim() ? BB.slice(JB).trimStart() : `${BB.slice(0,TB).trimEnd()}\n${BB.slice(ZB.length)}`.trim()
+       }(ZB) : "" !== ZB.trim() ? ZB : BB
```

#### 49. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1145` → after: `L1145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L1145) · [Before (L1145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L1145)

```diff
-       }(jB) ? jB : null
+       }(IB) ? IB : null
```

#### 50. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1159` → after: `L1159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L1159) · [Before (L1159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L1159)

```diff
-             UB[null !== (IB = zB[1]) && void 0 !== IB ? IB : zB[2]] = null !== (NB = zB[3]) && void 0 !== NB ? NB : zB[4]
+             cB[null !== (GB = ZB[1]) && void 0 !== GB ? GB : ZB[2]] = null !== (vB = ZB[3]) && void 0 !== vB ? vB : ZB[4]
```

#### 51. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1193` → after: `L1193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L1193) · [Before (L1193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L1193)

```diff
-       for (const [QB, nB] of Object.entries(jB)) "string" === typeof nB ? zB[QB] = Vj.has(QB) && Yj.test(nB) && !nB.includes("\n") ? Zj(nB) : nB : "boolean" === typeof nB || "number" === typeof nB ? zB[QB] = String(nB) : "object" !== typeof nB || null === nB || Array.isArray(nB)  … [truncated]
+       for (const [TB, JB] of Object.entries(IB)) "string" === typeof JB ? ZB[TB] = PI.has(TB) && jI.test(JB) && !JB.includes("\n") ? mI(JB) : JB : "boolean" === typeof JB || "number" === typeof JB ? ZB[TB] = String(JB) : "object" !== typeof JB || null === JB || Array.isArray(JB)  … [truncated]
```

#### 52. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1219` → after: `L1219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L1219) · [Before (L1219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L1219)

```diff
-     const Wj = new RegExp(`\\b(${Mj.map((BB=>BB.name)).join("|")})\\s*\\(\\s*(?=\\{)`, "g");
+     const uI = new RegExp(`\\b(${sI.map((BB=>BB.name)).join("|")})\\s*\\(\\s*(?=\\{)`, "g");
```

#### 53. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1226` → after: `L1226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L1226) · [Before (L1226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L1226)

```diff
-           return `${BB}(${JSON.stringify(zB)})`
+           return `${BB}(${JSON.stringify(ZB)})`
```

#### 54. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1230-L1232` → after: `L1230-L1232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1230-L1232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L1230-L1232) · [Before (L1230-L1232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L1230-L1232)

```diff
-         fileResult: (BB, jB, zB) => `<file path="${BB}"${zB?' open_in_editor="true"':""}>\n${jB}\n</file>`,
-         editFailure: (BB, jB) => `${BB} failed: ${jB}`,
-         lookupResult: (BB, jB, zB) => `${BB} ${jB}:\n${zB}`
+         fileResult: (BB, IB, ZB) => `<file path="${BB}"${ZB?' open_in_editor="true"':""}>\n${IB}\n</file>`,
+         editFailure: (BB, IB) => `${BB} failed: ${IB}`,
+         lookupResult: (BB, IB, ZB) => `${BB} ${IB}:\n${ZB}`
```

#### 55. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1245` → after: `L1245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L1245) · [Before (L1245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L1245)

```diff
-           const IB = null !== (zB = null === (QB = BB.slice(NB).match(/^\s*<\|call\|>/)) || void 0 === QB ? void 0 : QB[0]) && void 0 !== zB ? zB : "";
+           const GB = null !== (ZB = null === (TB = BB.slice(vB).match(/^\s*<\|call\|>/)) || void 0 === TB ? void 0 : TB[0]) && void 0 !== ZB ? ZB : "";
```

#### 56. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1267` → after: `L1267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L1267) · [Before (L1267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L1267)

```diff
-       const NB = null !== (jB = null !== (zB = null !== (QB = null !== (nB = IB.arguments) && void 0 !== nB ? nB : IB.params) && void 0 !== QB ? QB : IB.param) && void 0 !== zB ? zB : IB.args) && void 0 !== jB ? jB : IB.input,
+       const vB = null !== (IB = null !== (ZB = null !== (TB = null !== (JB = GB.arguments) && void 0 !== JB ? JB : GB.params) && void 0 !== TB ? TB : GB.param) && void 0 !== ZB ? ZB : GB.args) && void 0 !== IB ? IB : GB.input,
```

#### 57. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1273` → after: `L1273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L1273) · [Before (L1273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L1273)

```diff
-         } = IB, zB = Aj(null !== NB && void 0 !== NB ? NB : jB);
+         } = GB, ZB = XI(null !== vB && void 0 !== vB ? vB : IB);
```

#### 58. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1312` → after: `L1312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L1312) · [Before (L1312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L1312)

```diff
-       if (Array.isArray(BB)) return `[${BB.map(Cj).join(", ")}]`;
+       if (Array.isArray(BB)) return `[${BB.map(xI).join(", ")}]`;
```

#### 59. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1314` → after: `L1314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L1314) · [Before (L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L1314)

```diff
-         return `{${Object.entries(BB).map((BB=>{let[jB,zB]=BB;return`${JSON.stringify(jB)}: ${Cj(zB)}`})).join(", ")}}`
+         return `{${Object.entries(BB).map((BB=>{let[IB,ZB]=BB;return`${JSON.stringify(IB)}: ${xI(ZB)}`})).join(", ")}}`
```

#### 60. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1319-L1320` → after: `L1319-L1320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1319-L1320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L1319-L1320) · [Before (L1319-L1320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L1319-L1320)

```diff
-         formatCall: (BB, jB) => `<tool_call>\n<function=${BB}>\n${Object.entries(jB).flatMap((BB=>{let[jB,zB]=BB;return void 0===zB?[]:[`<parameter=${jB}>\n${zB}\n</parameter>\n`]})).join("")}</function>\n</tool_call>`,
-         declareTools: (BB, jB, zB) => zB || 0 === jB.length ? BB : `${function(BB){return`# Tools\n\nYou have access to the following functions:\n\n<tools>${BB.map((BB=>`\n${Cj({type:"function",function:{name:BB.name,description:BB.description,parameters:BB.inputSchema}})}`)).joi … [truncated]
+         formatCall: (BB, IB) => `<tool_call>\n<function=${BB}>\n${Object.entries(IB).flatMap((BB=>{let[IB,ZB]=BB;return void 0===ZB?[]:[`<parameter=${IB}>\n${ZB}\n</parameter>\n`]})).join("")}</function>\n</tool_call>`,
+         declareTools: (BB, IB, ZB) => ZB || 0 === IB.length ? BB : `${function(BB){return`# Tools\n\nYou have access to the following functions:\n\n<tools>${BB.map((BB=>`\n${xI({type:"function",function:{name:BB.name,description:BB.description,parameters:BB.inputSchema}})}`)).joi … [truncated]
```

#### 61. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1322-L1324` → after: `L1322-L1324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1322-L1324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L1322-L1324) · [Before (L1322-L1324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L1322-L1324)

```diff
-         fileResult: (BB, jB, zB) => `<tool_response>\nview_file ${BB}${zB?" (open in the editor)":""}:\n${jB}\n</tool_response>`,
-         editFailure: (BB, jB) => `<tool_response>\nError: ${jB}\n</tool_response>`,
-         lookupResult: (BB, jB, zB) => `<tool_response>\n${BB} ${jB}:\n${zB}\n</tool_response>`
+         fileResult: (BB, IB, ZB) => `<tool_response>\nview_file ${BB}${ZB?" (open in the editor)":""}:\n${IB}\n</tool_response>`,
+         editFailure: (BB, IB) => `<tool_response>\nError: ${IB}\n</tool_response>`,
+         lookupResult: (BB, IB, ZB) => `<tool_response>\n${BB} ${IB}:\n${ZB}\n</tool_response>`
```

#### 62. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1329` → after: `L1329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L1329) · [Before (L1329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L1329)

```diff
-         formatCall: (BB, jB) => `<tool_call name="${BB}">\n${Object.entries(jB).flatMap((BB=>{let[jB,zB]=BB;return void 0===zB?[]:[`<param name="${jB}">${vj.has(jB)?zB:`\n${zB}\n`}</param>\n`]})).join("")}</tool_call>`,
+         formatCall: (BB, IB) => `<tool_call name="${BB}">\n${Object.entries(IB).flatMap((BB=>{let[IB,ZB]=BB;return void 0===ZB?[]:[`<param name="${IB}">${KI.has(IB)?ZB:`\n${ZB}\n`}</param>\n`]})).join("")}</tool_call>`,
```

#### 63. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1332-L1334` → after: `L1332-L1334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1332-L1334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L1332-L1334) · [Before (L1332-L1334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L1332-L1334)

```diff
-         fileResult: (BB, jB, zB) => `<tool_result name="view_file" path="${BB}"${zB?' open_in_editor="true"':""}>\n${jB}\n</tool_result>`,
-         editFailure: (BB, jB) => `<tool_result name="${BB}" is_error="true">\n${jB}\n</tool_result>`,
-         lookupResult: (BB, jB, zB) => `<tool_result name="${BB}" about="${jB.replace(/"/g,"'")}">\n${zB}\n</tool_result>`
+         fileResult: (BB, IB, ZB) => `<tool_result name="view_file" path="${BB}"${ZB?' open_in_editor="true"':""}>\n${IB}\n</tool_result>`,
+         editFailure: (BB, IB) => `<tool_result name="${BB}" is_error="true">\n${IB}\n</tool_result>`,
+         lookupResult: (BB, IB, ZB) => `<tool_result name="${BB}" about="${IB.replace(/"/g,"'")}">\n${ZB}\n</tool_result>`
```

#### 64. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1352` → after: `L1352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L1352) · [Before (L1352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L1352)

```diff
-             if (null === uB || null === aB || (null !== (zB = null === (QB = jB.at(-1)) || void 0 === QB ? void 0 : QB.index) && void 0 !== zB ? zB : -1) + (null !== (nB = null === (dB = jB.at(-1)) || void 0 === dB ? void 0 : dB.call.source.length) && void 0 !== nB ? nB : 0) > NB … [truncated]
+             if (null === kB || null === nB || (null !== (ZB = null === (TB = IB.at(-1)) || void 0 === TB ? void 0 : TB.index) && void 0 !== ZB ? ZB : -1) + (null !== (JB = null === (oB = IB.at(-1)) || void 0 === oB ? void 0 : oB.call.source.length) && void 0 !== JB ? JB : 0) > vB … [truncated]
```

#### 65. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1356` → after: `L1356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L1356) · [Before (L1356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L1356)

```diff
-               sB = BB.slice(NB.index, aB + (null !== (IB = null === rB || void 0 === rB ? void 0 : rB[0].length) && void 0 !== IB ? IB : 0));
+               FB = BB.slice(vB.index, nB + (null !== (GB = null === zB || void 0 === zB ? void 0 : zB[0].length) && void 0 !== GB ? GB : 0));
```

#### 66. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1490` → after: `L1490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L1490) · [Before (L1490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L1490)

```diff
-         hasErrors: (null !== (jB = null === QB || void 0 === QB ? void 0 : QB.length) && void 0 !== jB ? jB : 0) > 0
+         hasErrors: (null !== (IB = null === TB || void 0 === TB ? void 0 : TB.length) && void 0 !== IB ? IB : 0) > 0
```

#### 67. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1500` → after: `L1500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L1500) · [Before (L1500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L1500)

```diff
-         kJ: BB,
+         vN: BB,
```

#### 68. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1507` → after: `L1507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L1507) · [Before (L1507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L1507)

```diff
-           kJ: zB,
+           vN: ZB,
```

#### 69. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1514` → after: `L1514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L1514) · [Before (L1514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L1514)

```diff
-         kJ: zB,
+         vN: ZB,
```

#### 70. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1545` → after: `L1545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L1545) · [Before (L1545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L1545)

```diff
-             for (const dB of (null !== (nB = iB().getLeadingCommentRanges(BB, zB.getFullStart())) && void 0 !== nB ? nB : []).reverse()) {
+             for (const oB of (null !== (JB = OB().getLeadingCommentRanges(BB, ZB.getFullStart())) && void 0 !== JB ? JB : []).reverse()) {
```

#### 71. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1611` → after: `L1611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L1611) · [Before (L1611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L1611)

```diff
-       return /^\s*$/.test(nB) ? nB : `${null!==(zB=null===(QB=/^\s*/.exec(nB))||void 0===QB?void 0:QB[0])&&void 0!==zB?zB:""}\t`
+       return /^\s*$/.test(JB) ? JB : `${null!==(ZB=null===(TB=/^\s*/.exec(JB))||void 0===TB?void 0:TB[0])&&void 0!==ZB?ZB:""}\t`
```

#### 72. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1620-L1621` → after: `L1620-L1621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1620-L1621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L1620-L1621) · [Before (L1620-L1621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L1620-L1621)

```diff
-         dB = /^[\w$"']+\s*:/.test(nB) && "" === BB.slice(oz(BB, jB.getStart(zB)), jB.getStart(zB)).trim() ? QB.replace(/^\s*/, "\t") : `\t${jB.getText(zB)},`;
-       return /,\s*(?:\/\/.*)?$/.test(dB) ? dB : dB.replace(/(\s*(?:\/\/.*)?)$/, ",$1")
+         oB = /^[\w$"']+\s*:/.test(JB) && "" === BB.slice(pZ(BB, IB.getStart(ZB)), IB.getStart(ZB)).trim() ? TB.replace(/^\s*/, "\t") : `\t${IB.getText(ZB)},`;
+       return /,\s*(?:\/\/.*)?$/.test(oB) ? oB : oB.replace(/(\s*(?:\/\/.*)?)$/, ",$1")
```

#### 73. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1644` → after: `L1644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L1644) · [Before (L1644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L1644)

```diff
-         IB = null !== (zB = dB[dB.length - 1]) && void 0 !== zB ? zB : nB[nB.length - 1];
+         GB = null !== (ZB = oB[oB.length - 1]) && void 0 !== ZB ? ZB : JB[JB.length - 1];
```

#### 74. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1655` → after: `L1655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L1655) · [Before (L1655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L1655)

```diff
-       return 1 === uB.length ? aB : null
+       return 1 === kB.length ? nB : null
```

#### 75. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1666` → after: `L1666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L1666) · [Before (L1666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L1666)

```diff
-         kJ: UB
+         vN: cB
```

#### 76. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1675` → after: `L1675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L1675) · [Before (L1675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L1675)

```diff
-           for (let QB = jB; JB.has(zB); QB++) zB = `${BB}${QB}`;
+           for (let TB = IB; NB.has(ZB); TB++) ZB = `${BB}${TB}`;
```

#### 77. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1702` → after: `L1702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L1702) · [Before (L1702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L1702)

```diff
-             text: `(${[BB.getText(jB),...yB].join(", ")})`
+             text: `(${[BB.getText(IB),...qB].join(", ")})`
```

#### 78. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1709` → after: `L1709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L1709) · [Before (L1709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L1709)

```diff
-             text: `${BB}${yB.join(", ")}`
+             text: `${BB}${qB.join(", ")}`
```

#### 79. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1713-L1714` → after: `L1713-L1714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1713-L1714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L1713-L1714) · [Before (L1713-L1714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L1713-L1714)

```diff
-       const GB = `${nB}(${sB.join(", ")})`,
-         LB = mB(`${Vz(IB)}Result`, 2),
+       const UB = `${JB}(${FB.join(", ")})`,
+         WB = gB(`${PZ(GB)}Result`, 2),
```

#### 80. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1716` → after: `L1716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L1716) · [Before (L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L1716)

```diff
-         tB = kz.has(QB) ? [GB] : gB ? [`const ${LB} = ${GB}`, `if (${gB.stopsWhen(LB)}) return ${LB}`] : [`const ${LB} = ${GB}`],
+         CB = yZ.has(TB) ? [UB] : dB ? [`const ${WB} = ${UB}`, `if (${dB.stopsWhen(WB)}) return ${WB}`] : [`const ${WB} = ${UB}`],
```

#### 81. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1731` → after: `L1731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L1731) · [Before (L1731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L1731)

```diff
-                 return iB().isIdentifier(QB) && jB.has(QB.text) && BB.expression.getText(zB).startsWith(`${QB.text} `)
+                 return OB().isIdentifier(TB) && IB.has(TB.text) && BB.expression.getText(ZB).startsWith(`${TB.text} `)
```

#### 82. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1736` → after: `L1736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L1736) · [Before (L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L1736)

```diff
-                 text: `return ${LB}`
+                 text: `return ${WB}`
```

#### 83. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1743` → after: `L1743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L1743) · [Before (L1743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L1743)

```diff
-                   text: `${QB.text} !== undefined ? ${QB.text} : ${LB}`
+                   text: `${TB.text} !== undefined ? ${TB.text} : ${WB}`
```

#### 84. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1753` → after: `L1753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L1753) · [Before (L1753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L1753)

```diff
-             QB = dB ? Hz(BB, dB.getStart(jB)) : `${BB.slice(oz(BB,UB.getStart(jB)),UB.getStart(jB)).replace(/\S.*$/,"")}\t`,
+             TB = oB ? aZ(BB, oB.getStart(IB)) : `${BB.slice(pZ(BB,cB.getStart(IB)),cB.getStart(IB)).replace(/\S.*$/,"")}\t`,
```

#### 85. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1755` → after: `L1755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L1755) · [Before (L1755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L1755)

```diff
-             IB = /^\s*$/.test(nB) ? `${QB}return ${LB}\n${nB}` : `\n${QB}return ${LB}\n`;
+             GB = /^\s*$/.test(JB) ? `${TB}return ${WB}\n${JB}` : `\n${TB}return ${WB}\n`;
```

#### 86. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1771` → after: `L1771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L1771) · [Before (L1771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L1771)

```diff
-         text: `\n${Hz(BB,qB.getStart(jB))}${GB}`
+         text: `\n${aZ(BB,YB.getStart(IB))}${UB}`
```

#### 87. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1775` → after: `L1775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L1775) · [Before (L1775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L1775)

```diff
-           QB = zB ? Hz(BB, zB.getStart(jB)) : `${BB.slice(oz(BB,UB.getStart(jB)),UB.getStart(jB)).replace(/\S.*$/,"")}\t`,
+           TB = ZB ? aZ(BB, ZB.getStart(IB)) : `${BB.slice(pZ(BB,cB.getStart(IB)),cB.getStart(IB)).replace(/\S.*$/,"")}\t`,
```

#### 88. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1781` → after: `L1781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L1781) · [Before (L1781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L1781)

```diff
-           text: `\n${tB.map((BB=>`${QB}${BB}`)).join("\n")}${zB?dB?`\n${QB}`:"":"\n"}`
+           text: `\n${CB.map((BB=>`${TB}${BB}`)).join("\n")}${ZB?oB?`\n${TB}`:"":"\n"}`
```

#### 89. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1786` → after: `L1786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L1786) · [Before (L1786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L1786)

```diff
-           nB = SB ? [`const ${QB} = ${aB.getText(jB)}`, `return ${QB} !== undefined ? ${QB} : ${LB}`] : [`return ${aB.getText(jB)}`];
+           JB = QB ? [`const ${TB} = ${nB.getText(IB)}`, `return ${TB} !== undefined ? ${TB} : ${WB}`] : [`return ${nB.getText(IB)}`];
```

#### 90. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1790` → after: `L1790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L1790) · [Before (L1790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L1790)

```diff
-           text: `{\n${[...tB,...nB].map((BB=>`${zB}\t${BB}`)).join("\n")}\n${zB}}`
+           text: `{\n${[...CB,...JB].map((BB=>`${ZB}\t${BB}`)).join("\n")}\n${ZB}}`
```

#### 91. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1814` → after: `L1814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L1814) · [Before (L1814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L1814)

```diff
-       return (0, mj.h)(null !== (QB = null === (nB = BB.body) || void 0 === nB ? void 0 : nB.getText(jB)) && void 0 !== QB ? QB : "", new RegExp(`${zB}\\s*\\(`), mj.m).length > 0
+       return (0, gI.f)(null !== (TB = null === (JB = BB.body) || void 0 === JB ? void 0 : JB.getText(IB)) && void 0 !== TB ? TB : "", new RegExp(`${ZB}\\s*\\(`), gI.o).length > 0
```

#### 92. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1822` → after: `L1822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L1822) · [Before (L1822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L1822)

```diff
-       } = zB, IB = null !== (QB = zB.overrides) && void 0 !== QB ? QB : new Set;
+       } = ZB, GB = null !== (TB = ZB.overrides) && void 0 !== TB ? TB : new Set;
```

#### 93. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1824` → after: `L1824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L1824) · [Before (L1824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L1824)

```diff
-         const BB = `${dB?`${dB}\n`:""}${jB.trim()}\n`,
+         const BB = `${oB?`${oB}\n`:""}${IB.trim()}\n`,
```

#### 94. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1838` → after: `L1838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L1838) · [Before (L1838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L1838)

```diff
-             return (null !== (jB = null === zB || void 0 === zB ? void 0 : zB.properties) && void 0 !== jB ? jB : []).flatMap((BB => {
+             return (null !== (IB = null === ZB || void 0 === ZB ? void 0 : ZB.properties) && void 0 !== IB ? IB : []).flatMap((BB => {
```

#### 95. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1897` → after: `L1897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L1897) · [Before (L1897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L1897)

```diff
-                 return iB().isPropertyAssignment(BB) && void 0 !== zB ? `\t${BB.name.getText(jB)}: ${zB},` : `\t${BB.getText(jB)},`
+                 return OB().isPropertyAssignment(BB) && void 0 !== ZB ? `\t${BB.name.getText(IB)}: ${ZB},` : `\t${BB.getText(IB)},`
```

#### 96. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1903` → after: `L1903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L1903) · [Before (L1903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L1903)

```diff
-                   text: `{\n${[...BB,...aB].join("\n")}\n}`
+                   text: `{\n${[...BB,...nB].join("\n")}\n}`
```

#### 97. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1918` → after: `L1918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L1918) · [Before (L1918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L1918)

```diff
-               text: `${aB.join("\n")}\n`
+               text: `${nB.join("\n")}\n`
```

#### 98. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1932` → after: `L1932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L1932) · [Before (L1932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L1932)

```diff
-               text: `${GB?",":""}\n${aB.join("\n")}\n`
+               text: `${UB?",":""}\n${nB.join("\n")}\n`
```

#### 99. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1949` → after: `L1949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L1949) · [Before (L1949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L1949)

```diff
-             text: `${nB}${jB.slice(GB.from,GB.to)}\n\n`
+             text: `${JB}${IB.slice(UB.from,UB.to)}\n\n`
```

#### 100. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1960` → after: `L1960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L1960) · [Before (L1960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L1960)

```diff
-           JB.push(0 === JB.length ? BB : `${nB}${BB}`), gB.push(zB)
+           NB.push(0 === NB.length ? BB : `${JB}${BB}`), dB.push(ZB)
```

#### 101. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1976` → after: `L1976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L1976) · [Before (L1976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L1976)

```diff
-           const IB = `${Vz(nB)}${Yz(jB)}`,
+           const GB = `${PZ(JB)}${jZ(IB)}`,
```

#### 102. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1984` → after: `L1984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L1984) · [Before (L1984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L1984)

```diff
-           const JB = Xz(aB.kJ).map(((BB, jB) => null !== BB && void 0 !== BB ? BB : `arg${jB}`));
+           const NB = rZ(nB.vN).map(((BB, IB) => null !== BB && void 0 !== BB ? BB : `arg${IB}`));
```

#### 103. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1986-L1988` → after: `L1986-L1988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1986-L1988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L1986-L1988) · [Before (L1986-L1988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L1986-L1988)

```diff
-             const BB = `${IB}(${JB.join(", ")})`,
-               zB = `${Vz(nB)}Result`;
-             tB(`function ${jB}(${JB.join(", ")}) {\n\t${kz.has(jB)?BB:`const ${zB} = ${BB}\n\treturn ${zB}`}\n}`, -1), mB.push(jB), rB.add(jB);
+             const BB = `${GB}(${NB.join(", ")})`,
+               ZB = `${PZ(JB)}Result`;
+             CB(`function ${IB}(${NB.join(", ")}) {\n\t${yZ.has(IB)?BB:`const ${ZB} = ${BB}\n\treturn ${ZB}`}\n}`, -1), gB.push(IB), zB.add(IB);
```

#### 104. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1991` → after: `L1991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L1991) · [Before (L1991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L1991)

```diff
-           Wz(dB.kJ, NB.file, IB) || (sB.push(...Zz(BB, NB.file, dB, jB, IB, JB, nB, !0 === zB.runsLast)), yB.push(jB));
+           uZ(oB.vN, vB.file, GB) || (FB.push(...mZ(BB, vB.file, oB, IB, GB, NB, JB, !0 === ZB.runsLast)), qB.push(IB));
```

#### 105. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2003` → after: `L2003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L2003) · [Before (L2003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L2003)

```diff
-         SB = `${""===BB?"":`${BB}\n\n`}${dB?`${dB}\n`:""}${JB.join("")}\n`
+         QB = `${""===BB?"":`${BB}\n\n`}${oB?`${oB}\n`:""}${NB.join("")}\n`
```

#### 106. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2040` → after: `L2040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L2040) · [Before (L2040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L2040)

```diff
-         nB = null !== (zB = QB.find((BB => "color" === BB.name))) && void 0 !== zB ? zB : QB[0];
+         JB = null !== (ZB = TB.find((BB => "color" === BB.name))) && void 0 !== ZB ? ZB : TB[0];
```

#### 107. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2044` → after: `L2044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L2044) · [Before (L2044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L2044)

```diff
-       return `{ ${nB.name}: ${IB} }`
+       return `{ ${JB.name}: ${GB} }`
```

#### 108. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2056` → after: `L2056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L2056) · [Before (L2056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L2056)

```diff
-         return jB.length > 7 ? `${jB.slice(0,7).join(" or ")} or ...` : jB.join(" or ")
+         return IB.length > 7 ? `${IB.slice(0,7).join(" or ")} or ...` : IB.join(" or ")
```

#### 109. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2058-L2059` → after: `L2058-L2059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2058-L2059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L2058-L2059) · [Before (L2058-L2059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L2058-L2059)

```diff
-       if (QB.isStringLiteral()) return `"${QB.value}"`;
-       if (QB.isNumberLiteral()) return `${QB.value}`;
+       if (TB.isStringLiteral()) return `"${TB.value}"`;
+       if (TB.isNumberLiteral()) return `${TB.value}`;
```

#### 110. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2064` → after: `L2064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L2064) · [Before (L2064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L2064)

```diff
-         return `[${BB.getTypeArguments(QB).map((jB=>bz(BB,jB,zB+1))).join(", ")}]`
+         return `[${BB.getTypeArguments(TB).map((IB=>DZ(BB,IB,ZB+1))).join(", ")}]`
```

#### 111. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2069` → after: `L2069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L2069) · [Before (L2069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L2069)

```diff
-         return `a list of ${jB.includes(" or ")?`(${jB})`:jB}`
+         return `a list of ${IB.includes(" or ")?`(${IB})`:IB}`
```

#### 112. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2074` → after: `L2074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L2074) · [Before (L2074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L2074)

```diff
-       return `{ ${nB.slice(0,10).map((BB=>`${BB.name}${BB.flags&iB().SymbolFlags.Optional?"?":""}`)).join(", ")}${nB.length>10?", ...":""} }`
+       return `{ ${JB.slice(0,10).map((BB=>`${BB.name}${BB.flags&OB().SymbolFlags.Optional?"?":""}`)).join(", ")}${JB.length>10?", ...":""} }`
```

#### 113. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2102-L2103` → after: `L2102-L2103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2102-L2103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L2102-L2103) · [Before (L2102-L2103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L2102-L2103)

```diff
-               uB = null !== (dB = null === QB || void 0 === QB ? void 0 : QB.getParameters()) && void 0 !== dB ? dB : [],
-               UB = new Set((null !== (IB = null === QB || void 0 === QB || null === (NB = QB.getDeclaration()) || void 0 === NB ? void 0 : NB.typeParameters) && void 0 !== IB ? IB : []).map((BB => BB.name.text)));
+               kB = null !== (oB = null === TB || void 0 === TB ? void 0 : TB.getParameters()) && void 0 !== oB ? oB : [],
+               cB = new Set((null !== (GB = null === TB || void 0 === TB || null === (vB = TB.getDeclaration()) || void 0 === vB ? void 0 : vB.typeParameters) && void 0 !== GB ? GB : []).map((BB => BB.name.text)));
```

#### 114. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2107` → after: `L2107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L2107) · [Before (L2107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L2107)

```diff
-                 NB = IB && iB().isParameter(IB) ? IB : void 0;
+                 vB = GB && OB().isParameter(GB) ? GB : void 0;
```

#### 115. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2112` → after: `L2112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L2112) · [Before (L2112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L2112)

```diff
-                 zB.add(`${nB.expression.getText(BB)} can't take null as ${uB[QB].name} (value ${QB+1}): ${IB}, or it throws when that line runs.`)
+                 ZB.add(`${JB.expression.getText(BB)} can't take null as ${kB[TB].name} (value ${TB+1}): ${GB}, or it throws when that line runs.`)
```

#### 116. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2150` → after: `L2150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L2150) · [Before (L2150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L2150)

```diff
-             const QB = null !== (dB = null === (IB = jB.getResolvedSignature(nB)) || void 0 === IB ? void 0 : IB.getParameters()) && void 0 !== dB ? dB : [];
+             const TB = null !== (oB = null === (GB = IB.getResolvedSignature(JB)) || void 0 === GB ? void 0 : GB.getParameters()) && void 0 !== oB ? oB : [];
```

#### 117. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2153` → after: `L2153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L2153) · [Before (L2153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L2153)

```diff
-               NB && zQ(dB, jB.getTypeOfSymbol(NB), BB, jB) && zB.add(`${nB.expression.getText(BB)} can't take api.createEnchantmentAttributesForItem(...) as ${NB.name} (value ${IB+1}): put it in { customAttributes: ... }, or it throws when that line runs.`)
+               vB && ZT(oB, IB.getTypeOfSymbol(vB), BB, IB) && ZB.add(`${JB.expression.getText(BB)} can't take api.createEnchantmentAttributesForItem(...) as ${vB.name} (value ${GB+1}): put it in { customAttributes: ... }, or it throws when that line runs.`)
```

#### 118. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2191` → after: `L2191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L2191) · [Before (L2191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L2191)

```diff
-           return iB().isPropertyAccessExpression(BB) && iB().isIdentifier(BB.expression) && "CONFIG" === BB.expression.text && null !== (jB = zB.get(BB.name.text)) && void 0 !== jB ? jB : BB.getText()
+           return OB().isPropertyAccessExpression(BB) && OB().isIdentifier(BB.expression) && "CONFIG" === BB.expression.text && null !== (IB = ZB.get(BB.name.text)) && void 0 !== IB ? IB : BB.getText()
```

#### 119. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2193` → after: `L2193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L2193) · [Before (L2193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L2193)

```diff
-         IB = BB => BB && (iB().isStringLiteral(BB) || iB().isNoSubstitutionTemplateLiteral(BB)) ? BB.text : BB && iB().isObjectLiteralExpression(BB) ? BB.properties.flatMap((BB => iB().isPropertyAssignment(BB) && (iB().isIdentifier(BB.name) || iB().isStringLiteral(BB.name)) ? [`$ … [truncated]
+         GB = BB => BB && (OB().isStringLiteral(BB) || OB().isNoSubstitutionTemplateLiteral(BB)) ? BB.text : BB && OB().isObjectLiteralExpression(BB) ? BB.properties.flatMap((BB => OB().isPropertyAssignment(BB) && (OB().isIdentifier(BB.name) || OB().isStringLiteral(BB.name)) ? [`$ … [truncated]
```

#### 120. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5136` → after: `L5136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L5136) · [Before (L5136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L5136)

```diff
-       }(jB.startsWith("{") ? jB : `{${jB}}`);
+       }(IB.startsWith("{") ? IB : `{${IB}}`);
```

#### 121. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5147` → after: `L5147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L5147) · [Before (L5147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L5147)

```diff
-         if (nB && dB > 0) nB[1] += `\n${jB}`;
+         if (JB && oB > 0) JB[1] += `\n${IB}`;
```

#### 122. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5154` → after: `L5154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L5154) · [Before (L5154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L5154)

```diff
-         dB = Math.max(0, dB + (null !== (NB = null === (uB = zB.match(/[[{(]/g)) || void 0 === uB ? void 0 : uB.length) && void 0 !== NB ? NB : 0) - (null !== (UB = null === (aB = zB.match(/[\]})]/g)) || void 0 === aB ? void 0 : aB.length) && void 0 !== UB ? UB : 0))
+         oB = Math.max(0, oB + (null !== (vB = null === (kB = ZB.match(/[[{(]/g)) || void 0 === kB ? void 0 : kB.length) && void 0 !== vB ? vB : 0) - (null !== (cB = null === (nB = ZB.match(/[\]})]/g)) || void 0 === nB ? void 0 : nB.length) && void 0 !== cB ? cB : 0))
```

#### 123. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5168` → after: `L5168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L5168) · [Before (L5168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L5168)

```diff
-         problem: `${BB.key} must be a plain value like ${BB.value}, not ${jB}`
+         problem: `${BB.key} must be a plain value like ${BB.value}, not ${IB}`
```

#### 124. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5210` → after: `L5210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L5210) · [Before (L5210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L5210)

```diff
-               IB = dB ? pB.get(null !== (jB = JQ(dB.initializer)) && void 0 !== jB ? jB : "") : void 0;
+               GB = oB ? hB.get(null !== (IB = NT(oB.initializer)) && void 0 !== IB ? IB : "") : void 0;
```

#### 125. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5219` → after: `L5219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L5219) · [Before (L5219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L5219)

```diff
-           const BB = null !== (sB = JQ(JB)) && void 0 !== sB ? sB : "",
+           const BB = null !== (FB = NT(NB)) && void 0 !== FB ? FB : "",
```

#### 126. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5223-L5225` → after: `L5223-L5225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5223-L5225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L5223-L5225) · [Before (L5223-L5225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L5223-L5225)

```diff
-             const jB = nB.named ? `item: ${JSON.stringify(nB.item)}` : `item: ${JSON.stringify(nB.item)}, name: ${JSON.stringify(BB)}`;
-             UB.unshift(`"${BB}" isn't an item, so it is a ${nB.item}${nB.named?"":` named "${BB}"`}`), uB = `${uB.slice(0,nB.property.getStart()-NB)}${jB}${uB.slice(nB.property.getEnd()-NB)}`
-           } else null === jB ? aB.unshift(`"${BB}"`) : jB !== BB && (UB.unshift(`"${BB}" is "${jB}"`), uB = `${uB.slice(0,JB.getStart()-NB)}${JSON.stringify(jB)}${uB.slice(JB.getEnd()-NB)}`)
+             const IB = JB.named ? `item: ${JSON.stringify(JB.item)}` : `item: ${JSON.stringify(JB.item)}, name: ${JSON.stringify(BB)}`;
+             cB.unshift(`"${BB}" isn't an item, so it is a ${JB.item}${JB.named?"":` named "${BB}"`}`), kB = `${kB.slice(0,JB.property.getStart()-vB)}${IB}${kB.slice(JB.property.getEnd()-vB)}`
+           } else null === IB ? nB.unshift(`"${BB}"`) : IB !== BB && (cB.unshift(`"${BB}" is "${IB}"`), kB = `${kB.slice(0,NB.getStart()-vB)}${JSON.stringify(IB)}${kB.slice(NB.getEnd()-vB)}`)
```

#### 127. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5228` → after: `L5228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L5228) · [Before (L5228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L5228)

```diff
-           problem: `${aB.join(", ")} ${1===aB.length?"item"===zB?"isn't an":"isn't a":"aren't"} ${zB} name${1===aB.length?"":"s"}, so ${BB.key} kept ${BB.value}`
+           problem: `${nB.join(", ")} ${1===nB.length?"item"===ZB?"isn't an":"isn't a":"aren't"} ${ZB} name${1===nB.length?"":"s"}, so ${BB.key} kept ${BB.value}`
```

#### 128. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5245` → after: `L5245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L5245) · [Before (L5245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L5245)

```diff
-             problem: `"${jB}" isn't ${"item"===BB.kind?"an":"a"} ${BB.kind} name, so ${BB.key} kept ${BB.value}`
+             problem: `"${IB}" isn't ${"item"===BB.kind?"an":"a"} ${BB.kind} name, so ${BB.key} kept ${BB.value}`
```

#### 129. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5249` → after: `L5249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L5249) · [Before (L5249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L5249)

```diff
-             fixed: `"${jB}" is "${QB}"`
+             fixed: `"${IB}" is "${TB}"`
```

#### 130. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5279` → after: `L5279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L5279) · [Before (L5279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L5279)

```diff
-       return null !== (jB = GQ.find((BB => gQ(BB.name) === zB || gQ(BB.title) === zB))) && void 0 !== jB ? jB : null
+       return null !== (IB = UT.find((BB => dT(BB.name) === ZB || dT(BB.title) === ZB))) && void 0 !== IB ? IB : null
```

#### 131. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5284` → after: `L5284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L5284) · [Before (L5284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L5284)

```diff
-       return null !== (jB = aQ.find((jB => jB.name === BB))) && void 0 !== jB ? jB : null
+       return null !== (IB = nT.find((IB => IB.name === BB))) && void 0 !== IB ? IB : null
```

#### 132. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5291` → after: `L5291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L5291) · [Before (L5291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L5291)

```diff
-         return 0 === BB.length ? "" : `const CONFIG = {\n${BB.map((BB=>{var zB;return`\t${BB.key}: ${null!==(zB=jB.get(BB.key))&&void 0!==zB?zB:BB.value}, // ${BB.about}`})).join("\n")}\n}`
+         return 0 === BB.length ? "" : `const CONFIG = {\n${BB.map((BB=>{var ZB;return`\t${BB.key}: ${null!==(ZB=IB.get(BB.key))&&void 0!==ZB?ZB:BB.value}, // ${BB.about}`})).join("\n")}\n}`
```

#### 133. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5293` → after: `L5293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L5293) · [Before (L5293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L5293)

```diff
-       return `${""===zB?"":`${zB}\n\n`}${BB.code.trim()}\n`
+       return `${""===ZB?"":`${ZB}\n\n`}${BB.code.trim()}\n`
```

#### 134. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5303` → after: `L5303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L5303) · [Before (L5303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L5303)

```diff
-             for (const BB of null !== (dB = nB.uses) && void 0 !== dB ? dB : []) {
+             for (const BB of null !== (oB = JB.uses) && void 0 !== oB ? oB : []) {
```

#### 135. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5316` → after: `L5316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L5316) · [Before (L5316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L5316)

```diff
-         QB = new RegExp(`function ${jB.name}\\s*\\([^)]*\\)\\s*\\{`).exec(BB);
+         TB = new RegExp(`function ${IB.name}\\s*\\([^)]*\\)\\s*\\{`).exec(BB);
```

#### 136. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5390` → after: `L5390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L5390) · [Before (L5390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L5390)

```diff
-               nB.push(`${BB.name} has no setting ${NB}`);
+               JB.push(`${BB.name} has no setting ${vB}`);
```

#### 137. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5413` → after: `L5413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L5413) · [Before (L5413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L5413)

```diff
-           heading: "" === BB.trim() ? void 0 : `// ---- ${jB.title} (ready-made) ----`
+           heading: "" === BB.trim() ? void 0 : `// ---- ${IB.title} (ready-made) ----`
```

#### 138. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5435` → after: `L5435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L5435) · [Before (L5435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L5435)

```diff
-       const zB = null !== (jB = null === BB || void 0 === BB ? void 0 : BB.trim().toLowerCase()) && void 0 !== jB ? jB : "",
+       const ZB = null !== (IB = null === BB || void 0 === BB ? void 0 : BB.trim().toLowerCase()) && void 0 !== IB ? IB : "",
```

#### 139. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5439` → after: `L5439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L5439) · [Before (L5439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L5439)

```diff
-       return `${QB?`Prefabs for ${LQ.get(QB)}:`:""===zB||"all"===zB?"Every prefab:":`There is no category ${BB}. Every prefab:`}\n${nB.length>0?nB.map(FQ).join("\n"):"(none yet)"}${dB.length>0?`\nReady-made functions for it (call them; their code is added by itself):\n${dB.map((B … [truncated]
+       return `${TB?`Prefabs for ${WT.get(TB)}:`:""===ZB||"all"===ZB?"Every prefab:":`There is no category ${BB}. Every prefab:`}\n${JB.length>0?JB.map(MT).join("\n"):"(none yet)"}${oB.length>0?`\nReady-made functions for it (call them; their code is added by itself):\n${oB.map((B … [truncated]
```

#### 140. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5446-L5447` → after: `L5446-L5447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5446-L5447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L5446-L5447) · [Before (L5446-L5447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L5446-L5447)

```diff
-         dB = jB ? `\nIts code, as it goes in with the default settings:\n${MQ(BB)}` : "";
-       return `${BB.name} (${BB.title}): ${BB.summary}.\nHow it plays: ${BB.howItPlays}\nSettings:\n${QB}${nB}${BB.setup?`\nThe creator sets up: ${BB.setup}`:""}${dB}`
+         oB = IB ? `\nIts code, as it goes in with the default settings:\n${sT(BB)}` : "";
+       return `${BB.name} (${BB.title}): ${BB.summary}.\nHow it plays: ${BB.howItPlays}\nSettings:\n${TB}${JB}${BB.setup?`\nThe creator sets up: ${BB.setup}`:""}${oB}`
```

#### 141. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5508` → after: `L5508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L5508) · [Before (L5508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L5508)

```diff
-             return QB.startsWith("[") ? nB : BB
+             return TB.startsWith("[") ? JB : BB
```

#### 142. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5511-L5512` → after: `L5511-L5512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5511-L5512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L5511-L5512) · [Before (L5511-L5512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L5511-L5512)

```diff
-         uB = null !== (jB = null === (zB = NB.question) || void 0 === zB ? void 0 : zB.replace(/\s+/g, " ").trim()) && void 0 !== jB ? jB : "",
-         UB = (null !== (QB = NB.choices) && void 0 !== QB ? QB : "").includes("\n") ? (null !== (nB = NB.choices) && void 0 !== nB ? nB : "").split("\n") : (null !== (dB = NB.choices) && void 0 !== dB ? dB : "").split("|"),
+         kB = null !== (IB = null === (ZB = vB.question) || void 0 === ZB ? void 0 : ZB.replace(/\s+/g, " ").trim()) && void 0 !== IB ? IB : "",
+         cB = (null !== (TB = vB.choices) && void 0 !== TB ? TB : "").includes("\n") ? (null !== (JB = vB.choices) && void 0 !== JB ? JB : "").split("\n") : (null !== (oB = vB.choices) && void 0 !== oB ? oB : "").split("|"),
```

#### 143. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5535-L5538` → after: `L5535-L5538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5535-L5538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L5535-L5538) · [Before (L5535-L5538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L5535-L5538)

```diff
-       wQ = new RegExp(String.raw`^(?:(?:async\s+)?function\s+(?:${lQ})\s*\(|(?:${lQ})\s*=\s*(?:async\s+)?(?:function\b|\())`, "m"),
-       xQ = new RegExp(`^(?:${lQ})$`),
-       KQ = new RegExp(String.raw`^(${lQ})(\s*\([^()\n]*\)\s*\{)`, "gm"),
-       CQ = new RegExp(String.raw`\bapi\.|\bfunction\s+(?:${lQ})\b|\buse_?prefab\s*\(`, "i");
+       AT = new RegExp(String.raw`^(?:(?:async\s+)?function\s+(?:${lT})\s*\(|(?:${lT})\s*=\s*(?:async\s+)?(?:function\b|\())`, "m"),
+       tT = new RegExp(`^(?:${lT})$`),
+       bT = new RegExp(String.raw`^(${lT})(\s*\([^()\n]*\)\s*\{)`, "gm"),
+       xT = new RegExp(String.raw`\bapi\.|\bfunction\s+(?:${lT})\b|\buse_?prefab\s*\(`, "i");
```

#### 144. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5551` → after: `L5551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L5551) · [Before (L5551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L5551)

```diff
-           return void 0 === jB.path ? jB : {
+           return void 0 === IB.path ? IB : {
```

#### 145. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5555` → after: `L5555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L5555) · [Before (L5555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L5555)

```diff
-           return void 0 === jB.url ? jB : {
+           return void 0 === IB.url ? IB : {
```

#### 146. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5601-L5603` → after: `L5601-L5603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5601-L5603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L5601-L5603) · [Before (L5601-L5603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L5601-L5603)

```diff
-       const yB = Object.keys(zB).some(mB.f),
-         kB = BB => null !== BB && yB && (0, mB.f)(BB),
-         GB = BB => kB(BB) ? `${mB.l}${(0,mB.i)(BB)}` : null !== dB && void 0 !== dB ? dB : RQ(BB),
+       const qB = Object.keys(ZB).some(gB.c),
+         yB = BB => null !== BB && qB && (0, gB.c)(BB),
+         UB = BB => yB(BB) ? `${gB.i}${(0,gB.g)(BB)}` : null !== oB && void 0 !== oB ? oB : VT(BB),
```

#### 147. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5643-L5645` → after: `L5643-L5645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5643-L5645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L5643-L5645) · [Before (L5643-L5645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L5643-L5645)

```diff
-               return `${zB.slice(0,Math.max(zB.lastIndexOf(" "),40)).replace(/[\s,.;:]+$/,"")}\u2026`
-             }(null !== jB && void 0 !== jB ? jB : ""),
-             dB = null !== (QB = DB.get(BB)) && void 0 !== QB ? QB : [];
+               return `${ZB.slice(0,Math.max(ZB.lastIndexOf(" "),40)).replace(/[\s,.;:]+$/,"")}\u2026`
+             }(null !== IB && void 0 !== IB ? IB : ""),
+             oB = null !== (TB = HB.get(BB)) && void 0 !== TB ? TB : [];
```

#### 148. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5647` → after: `L5647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L5647) · [Before (L5647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L5647)

```diff
-           ("" === nB || dB.includes(nB) || DB.set(BB, [...dB, nB]), "" !== nB) && XB.set(BB, [...null !== (IB = XB.get(BB)) && void 0 !== IB ? IB : [], {
+           ("" === JB || oB.includes(JB) || HB.set(BB, [...oB, JB]), "" !== JB) && rB.set(BB, [...null !== (GB = rB.get(BB)) && void 0 !== GB ? GB : [], {
```

#### 149. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5665` → after: `L5665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L5665) · [Before (L5665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L5665)

```diff
-               error: `There is no prefab called ${jB}. The prefabs are: ${GQ.map((BB=>BB.name)).join(", ")}.`
+               error: `There is no prefab called ${IB}. The prefabs are: ${UT.map((BB=>BB.name)).join(", ")}.`
```

#### 150. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5667` → after: `L5667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L5667) · [Before (L5667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L5667)

```diff
-           }(null !== (nB = UB[BB]) && void 0 !== nB ? nB : "", jB, zB, uB);
+           }(null !== (JB = cB[BB]) && void 0 !== JB ? JB : "", IB, ZB, kB);
```

#### 151. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5673` → after: `L5673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L5673) · [Before (L5673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L5673)

```diff
-           }), AB(BB, null !== QB && void 0 !== QB ? QB : IB.prefab.title, IB.text), PB.push({
+           }), XB(BB, null !== TB && void 0 !== TB ? TB : GB.prefab.title, GB.text), eB.push({
```

#### 152. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5679` → after: `L5679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L5679) · [Before (L5679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L5679)

```diff
-             setup: null !== (dB = IB.prefab.setup) && void 0 !== dB ? dB : null
+             setup: null !== (oB = GB.prefab.setup) && void 0 !== oB ? oB : null
```

#### 153. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5697` → after: `L5697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L5697) · [Before (L5697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L5697)

```diff
-         const BB = null !== (Ij = dj.get(mB.name)) && void 0 !== Ij ? Ij : 0;
+         const BB = null !== (GI = oI.get(gB.name)) && void 0 !== GI ? GI : 0;
```

#### 154. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5707` → after: `L5707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L5707) · [Before (L5707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L5707)

```diff
-               path: null !== (Nj = null !== (uj = null !== (Uj = mB.args.path) && void 0 !== Uj ? Uj : dB) && void 0 !== uj ? uj : QB) && void 0 !== Nj ? Nj : void 0
+               path: null !== (vI = null !== (kI = null !== (cI = gB.args.path) && void 0 !== cI ? cI : oB) && void 0 !== kI ? kI : TB) && void 0 !== vI ? vI : void 0
```

#### 155. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5718` → after: `L5718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L5718) · [Before (L5718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L5718)

```diff
-           tB = `${jB.name}\n${JSON.stringify({...jB.args,why:void 0})}`,
+           CB = `${IB.name}\n${JSON.stringify({...IB.args,why:void 0})}`,
```

#### 156. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5738` → after: `L5738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L5738) · [Before (L5738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L5738)

```diff
-             const BB = void 0 !== nB && "" !== nB.trim() ? GB(nB) : void 0 === dB ? null !== QB && void 0 !== QB ? QB : "index.js" : null;
+             const BB = void 0 !== JB && "" !== JB.trim() ? UB(JB) : void 0 === oB ? null !== TB && void 0 !== TB ? TB : "index.js" : null;
```

#### 157. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5742` → after: `L5742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L5742) · [Before (L5742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L5742)

```diff
-               vB(BB, jB.args.name, null !== (aj = jB.args.settings) && void 0 !== aj ? aj : "", jB.args.why)
+               KB(BB, IB.args.name, null !== (nI = IB.args.settings) && void 0 !== nI ? nI : "", IB.args.why)
```

#### 158. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5749` → after: `L5749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L5749) · [Before (L5749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L5749)

```diff
-             if (0 === KB.length) KB = Jj(null !== (pj = jB.args.steps) && void 0 !== pj ? pj : "")
+             if (0 === bB.length) bB = NI(null !== (hI = IB.args.steps) && void 0 !== hI ? hI : "")
```

#### 159. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5752` → after: `L5752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L5752) · [Before (L5752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L5752)

```diff
-             const BB = nj(null !== (rj = jB.args.note) && void 0 !== rj ? rj : "");
+             const BB = JI(null !== (zI = IB.args.note) && void 0 !== zI ? zI : "");
```

#### 160. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5767` → after: `L5767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L5767) · [Before (L5767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L5767)

```diff
-               if (void 0 === IB || "" !== IB.trim() && !PQ(cQ(IB), void 0 === nB ? "" : null !== (mj = UB[GB(nB)]) && void 0 !== mj ? mj : "")) {
+               if (void 0 === GB || "" !== GB.trim() && !eT(ET(GB), void 0 === JB ? "" : null !== (gI = cB[UB(JB)]) && void 0 !== gI ? gI : "")) {
```

#### 161. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5769` → after: `L5769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L5769) · [Before (L5769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L5769)

```diff
-                 else if (void 0 !== nB && gB(GB(nB)) && "" !== (null !== (yj = zB[GB(nB)]) && void 0 !== yj ? yj : "").trim()) sB(jB.name, GB(nB), "unread", void 0 === IB ? void 0 : {
+                 else if (void 0 !== JB && dB(UB(JB)) && "" !== (null !== (qI = ZB[UB(JB)]) && void 0 !== qI ? qI : "").trim()) FB(IB.name, UB(JB), "unread", void 0 === GB ? void 0 : {
```

#### 162. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5788` → after: `L5788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L5788) · [Before (L5788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L5788)

```diff
-               dB = null === BB ? "" : null !== (kj = UB[BB]) && void 0 !== kj ? kj : "",
+               oB = null === BB ? "" : null !== (yI = cB[BB]) && void 0 !== yI ? yI : "",
```

#### 163. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5795-L5796` → after: `L5795-L5796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5795-L5796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L5795-L5796) · [Before (L5795-L5796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L5795-L5796)

```diff
-               })) || void 0 === gj ? void 0 : gj.text) && void 0 !== Lj ? Lj : null : "replace_function" === jB.name ? CB(dB, zB, IB) : Bj(dB, zB, IB);
-             null === BB || null === pB ? sB(jB.name, BB, pz(jB) ? "brokenCode" : "missingArgs") : PQ(IB, dB) ? sB(jB.name, BB, "placeholder") : "replace_function" === jB.name && gB(BB) && cB(dB, null !== zB && void 0 !== zB ? zB : "", IB) ? (sB(jB.name, BB, "unread", {
+               })) || void 0 === dI ? void 0 : dI.text) && void 0 !== WI ? WI : null : "replace_function" === IB.name ? xB(oB, ZB, GB) : BI(oB, ZB, GB);
+             null === BB || null === hB ? FB(IB.name, BB, hZ(IB) ? "brokenCode" : "missingArgs") : eT(GB, oB) ? FB(IB.name, BB, "placeholder") : "replace_function" === IB.name && dB(BB) && EB(oB, null !== ZB && void 0 !== ZB ? ZB : "", GB) ? (FB(IB.name, BB, "unread", {
```

#### 164. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5801-L5802` → after: `L5801-L5802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5801-L5802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L5801-L5802) · [Before (L5801-L5802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L5801-L5802)

```diff
-             const BB = !0 === (null === (tj = kB._meta) || void 0 === tj ? void 0 : tj.appliesAtOnce) ? null !== dB && void 0 !== dB ? dB : QB : void 0 === nB ? null : GB(nB),
-               zB = null === BB ? "" : null !== (Sj = UB[BB]) && void 0 !== Sj ? Sj : "",
+             const BB = !0 === (null === (CI = yB._meta) || void 0 === CI ? void 0 : CI.appliesAtOnce) ? null !== oB && void 0 !== oB ? oB : TB : void 0 === JB ? null : UB(JB),
+               ZB = null === BB ? "" : null !== (QI = cB[BB]) && void 0 !== QI ? QI : "",
```

#### 165. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5806-L5808` → after: `L5806-L5808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5806-L5808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L5806-L5808) · [Before (L5806-L5808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L5806-L5808)

```diff
-               JB = null !== uB && void 0 !== uB ? uB : rB,
-               mB = null !== rB ? Zj(null !== pB && void 0 !== pB ? pB : "") : null !== pB && void 0 !== pB ? pB : "",
-               yB = null === JB || void 0 === NB ? mB : YB(zB.slice(JB.from, JB.to), FB(zB, JB, null !== rB ? Zj(NB) : NB, mB), VB(zB.slice(JB.to)));
+               NB = null !== kB && void 0 !== kB ? kB : zB,
+               gB = null !== zB ? mI(null !== hB && void 0 !== hB ? hB : "") : null !== hB && void 0 !== hB ? hB : "",
+               qB = null === NB || void 0 === vB ? gB : jB(ZB.slice(NB.from, NB.to), MB(ZB, NB, null !== zB ? mI(vB) : vB, gB), PB(ZB.slice(NB.to)));
```

#### 166. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5815-L5816` → after: `L5815-L5816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5815-L5816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L5815-L5816) · [Before (L5815-L5816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L5815-L5816)

```diff
-               const QB = LB(BB) ? RB(zB, JB.from, JB.to, null !== NB && void 0 !== NB ? NB : "", mB) : null;
-               UB[BB] = null !== QB && void 0 !== QB ? QB : zB.slice(0, JB.from) + yB + zB.slice(JB.to), aB.add(BB), AB(BB, jB.args.why, yB)
+               const TB = WB(BB) ? VB(ZB, NB.from, NB.to, null !== vB && void 0 !== vB ? vB : "", gB) : null;
+               cB[BB] = null !== TB && void 0 !== TB ? TB : ZB.slice(0, NB.from) + qB + ZB.slice(NB.to), nB.add(BB), XB(BB, IB.args.why, qB)
```

#### 167. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5826-L5827` → after: `L5826-L5827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5826-L5827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L5826-L5827) · [Before (L5826-L5827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L5826-L5827)

```diff
-           nB = null !== (Mj = null !== dB && void 0 !== dB ? dB : QB) && void 0 !== Mj ? Mj : "index.js",
-           IB = null !== (qj = UB[nB]) && void 0 !== qj ? qj : "";
+           JB = null !== (sI = null !== oB && void 0 !== oB ? oB : TB) && void 0 !== sI ? sI : "index.js",
+           GB = null !== (YI = cB[JB]) && void 0 !== YI ? YI : "";
```

#### 168. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5842` → after: `L5842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L5842) · [Before (L5842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L5842)

```diff
-           UB[mB] = uQ(NQ(BB ? UB[mB] : UB[mB].replace(/^module\.exports\s*=\s*(?:\{[\s\w$,:]*\}|[\w$]+)\s*;?[ \t]*(?:\n|$)/gm, "")), null !== (oj = zB[mB]) && void 0 !== oj ? oj : "");
+           cB[gB] = kT(vT(BB ? cB[gB] : cB[gB].replace(/^module\.exports\s*=\s*(?:\{[\s\w$,:]*\}|[\w$]+)\s*;?[ \t]*(?:\n|$)/gm, "")), null !== (pI = ZB[gB]) && void 0 !== pI ? pI : "");
```

#### 169. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5847` → after: `L5847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L5847) · [Before (L5847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L5847)

```diff
-         const BB = Gj(Bn(OQ(UB[mB])), LB(mB) ? nB : [], null !== (fj = zB[mB]) && void 0 !== fj ? fj : "");
+         const BB = UI(BJ(ST(cB[gB])), WB(gB) ? JB : [], null !== (iI = ZB[gB]) && void 0 !== iI ? iI : "");
```

#### 170. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5851-L5853` → after: `L5851-L5853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5851-L5853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L5851-L5853) · [Before (L5851-L5853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L5851-L5853)

```diff
-         const BB = mB.problems.length > 0 ? ` Kept as it was: ${mB.problems.join("; ")}.` : "",
-           jB = mB.fixed.length > 0 ? ` Names changed to real ones: ${mB.fixed.join(", ")}.` : "";
-         JB += `\n\nThis uses the ready-made ${mB.title}.${jB}${BB}${mB.setup?` ${mB.setup}`:""}`
+         const BB = gB.problems.length > 0 ? ` Kept as it was: ${gB.problems.join("; ")}.` : "",
+           IB = gB.fixed.length > 0 ? ` Names changed to real ones: ${gB.fixed.join(", ")}.` : "";
+         NB += `\n\nThis uses the ready-made ${gB.title}.${IB}${BB}${gB.setup?` ${gB.setup}`:""}`
```

#### 171. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5859` → after: `L5859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L5859) · [Before (L5859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L5859)

```diff
-         of oB) JB += `\n\nI renamed \`${mB}\` to \`${HB}\`, the name World Code calls.`;
+         of pB) NB += `\n\nI renamed \`${gB}\` to \`${aB}\`, the name World Code calls.`;
```

#### 172. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5863` → after: `L5863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L5863) · [Before (L5863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L5863)

```diff
-         const BB = null !== (Dj = zB[mB]) && void 0 !== Dj ? Dj : "";
+         const BB = null !== (HI = ZB[gB]) && void 0 !== HI ? HI : "";
```

#### 173. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5960-L5965` → after: `L5960-L5965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5960-L5965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L5960-L5965) · [Before (L5960-L5965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L5960-L5965)

```diff
-       if ("prefab" === BB.reason) return `${jB}: ${null!==(zB=BB.detail)&&void 0!==zB?zB:"the prefab couldn't go in."} Nothing changed.`;
-       if ("missingArgs" === BB.reason) return `${jB}: the call was missing an argument it needs, so nothing changed.`;
-       if ("placeholder" === BB.reason) return "write_file" === BB.tool ? `${jB}: the content was only "..." or had a line standing in for the rest, so nothing changed. Send the whole file, every line of it.` : `${jB}: the code had a line standing in for code left out ("// ... exi … [truncated]
-       if ("unread" === BB.reason) return `${jB}: you hadn't seen this code, so writing it whole could have lost what it has, and nothing changed. Make the change from its code, which ${null!==BB.path&&(0,mB.f)(BB.path)?"view_world_code":"view_file"} shows.`;
-       if ("brokenCode" === BB.reason) return `${jB}: the code around that function doesn't parse (a bracket is likely missing), so where it ends isn't clear and nothing changed. Send the whole fixed file with write_file instead.`;
-       return `${jB}: search matched nothing in the file, so nothing changed. ${BB.closest?`The closest lines (${BB.closest.line}-${BB.closest.lastLine}) are:\n${BB.closest.text}`:"No lines in the file are like it."}\nCopy the lines exactly${BB.functions.length>0?`, or use replace … [truncated]
+       if ("prefab" === BB.reason) return `${IB}: ${null!==(ZB=BB.detail)&&void 0!==ZB?ZB:"the prefab couldn't go in."} Nothing changed.`;
+       if ("missingArgs" === BB.reason) return `${IB}: the call was missing an argument it needs, so nothing changed.`;
+       if ("placeholder" === BB.reason) return "write_file" === BB.tool ? `${IB}: the content was only "..." or had a line standing in for the rest, so nothing changed. Send the whole file, every line of it.` : `${IB}: the code had a line standing in for code left out ("// ... exi … [truncated]
+       if ("unread" === BB.reason) return `${IB}: you hadn't seen this code, so writing it whole could have lost what it has, and nothing changed. Make the change from its code, which ${null!==BB.path&&(0,gB.c)(BB.path)?"view_world_code":"view_file"} shows.`;
+       if ("brokenCode" === BB.reason) return `${IB}: the code around that function doesn't parse (a bracket is likely missing), so where it ends isn't clear and nothing changed. Send the whole fixed file with write_file instead.`;
+       return `${IB}: search matched nothing in the file, so nothing changed. ${BB.closest?`The closest lines (${BB.closest.line}-${BB.closest.lastLine}) are:\n${BB.closest.text}`:"No lines in the file are like it."}\nCopy the lines exactly${BB.functions.length>0?`, or use replace … [truncated]
```

#### 174. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5984` → after: `L5984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L5984) · [Before (L5984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L5984)

```diff
-       yn = BB => `You are the coding helper inside Bloxd's code block editor. Bloxd is a voxel game; a code block is a block in the world holding JavaScript that runs on the game server when a player clicks it. The person asking is a young creator (13 or older) who is new to codi … [truncated]
+       qJ = BB => `You are the coding helper inside Bloxd's code block editor. Bloxd is a voxel game; a code block is a block in the world holding JavaScript that runs on the game server when a player clicks it. The person asking is a young creator (13 or older) who is new to codi … [truncated]
```

#### 175. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5994` → after: `L5994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L5994) · [Before (L5994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L5994)

```diff
-     const Ln = `You looked at World Code: its files are below, their paths starting ${mB.l}. Put the part of the request that needs World Code (a callback, or something that happens without a click) straight into World Code with the same calls, its path exactly as shown, e.g. ${m … [truncated]
+     const WJ = `You looked at World Code: its files are below, their paths starting ${gB.i}. Put the part of the request that needs World Code (a callback, or something that happens without a click) straight into World Code with the same calls, its path exactly as shown, e.g. ${g … [truncated]
```

#### 176. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6008-L6009` → after: `L6008-L6009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6008-L6009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6008-L6009) · [Before (L6008-L6009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6008-L6009)

```diff
-       const GB = jB ? mB.d : yB,
-         LB = jB ? `${mB.l}index.js` : GB,
+       const UB = IB ? gB.b : qB,
+         WB = IB ? `${gB.i}index.js` : UB,
```

#### 177. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6013-L6028` → after: `L6013-L6028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6013-L6028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6013-L6028) · [Before (L6013-L6028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6013-L6028)

```diff
-         MB = tB("edit_code_in_place") ? `\nFor a fix of one to a few lines in the code open in the editor, use edit_code_in_place instead: it changes their code straight away, as if they pressed Apply, and they can undo it. search is copied exactly from the open code:\n${gB("edit … [truncated]
-         EB = tB("export_game") ? `\nWhen the creator asks to export, save or publish their world or game, your answer must contain the export_game call; without it nothing is exported. For example, if the creator writes "export the world", your whole answer is:\nSaving your world … [truncated]
-         iB = tB("replace_function") ? `\nWhen you change only one or two functions or callbacks of a file that already has code, you can send just those instead of the whole file. replace_function finds a function by its name and puts your whole new function in its place; with a  … [truncated]
-         qB = tB("edit_file") ? `\nFor a file longer than 6000 characters, don't send it whole: change only the parts that need it, with replace_function where you can, and an edit_file call for each other part, where search is copied exactly from the current file:\n${gB("edit_fil … [truncated]
-         fB = jB ? `2. Then give the whole new code with a write_file call, exactly like this:\n${gB("write_file",{path:GB,why:"what the change does",content:kn.codeBlock})}` : `2. Then give every file you change, in full, with a write_file call, exactly like this:\n${gB("write_fi … [truncated]
-         oB = jB ? "" : ` If there is no code yet, write it in ${GB}.`,
-         HB = gB("switch_to_world_code", {}),
-         DB = jB ? uB ? `\n${Ln}` : `\nIf part of the request needs World Code (a callback, or something that happens without a click), give that part as World Code with an add_world_code call, with its callbacks written as functions (in World Code the player is playerId; there is … [truncated]
-         FB = rB && tB("use_prefab") && pB.length >= 2,
-         YB = FB ? pB.slice(0, 3).map((BB => BB.title)).join("\n") : "A parkour race\nZombie survival\nCapture the flag",
-         VB = FB ? " When you ask what kind of game they want, the choices are the 2 to 4 listed prefabs that fit the request best, by their titles: the one they pick is put in with use_prefab next." : "",
-         hB = tB("ask_creator") ? `\nOnly if the request is too unclear to build anything sensible, ask instead of writing code: call ask_creator with one short question and 2 to 4 short choices, one per line. That is: no idea what kind of thing they want ("make a game"), or askin … [truncated]
-         XB = tB("plan") ? `\n${"deepseek"===zB?"When a request is big, instead of writing it all at once, you may":"This request is big. Instead of writing it all at once, you may"} call plan with 2 to 5 short steps, one per line, each small enough to build and try on its own, th … [truncated]
-         ZB = null !== (nB = pB[0]) && void 0 !== nB ? nB : tQ("parkour"),
-         AB = (null !== (dB = null === ZB || void 0 === ZB ? void 0 : ZB.settings) && void 0 !== dB ? dB : []).slice(0, 2).map((BB => `${BB.key}: ${BB.value}`)).join("\n");
-       return `How to answer:\n1. Start with one or two short, friendly sentences in simple words saying what the change does, in the present tense as they read it before it goes in ("This adds...", "This changes..."; or what was wrong), and anything you had to do differently from … [truncated]
+         sB = CB("edit_code_in_place") ? `\nFor a fix of one to a few lines in the code open in the editor, use edit_code_in_place instead: it changes their code straight away, as if they pressed Apply, and they can undo it. search is copied exactly from the open code:\n${dB("edit … [truncated]
+         wB = CB("export_game") ? `\nWhen the creator asks to export, save or publish their world or game, your answer must contain the export_game call; without it nothing is exported. For example, if the creator writes "export the world", your whole answer is:\nSaving your world … [truncated]
+         OB = CB("replace_function") ? `\nWhen you change only one or two functions or callbacks of a file that already has code, you can send just those instead of the whole file. replace_function finds a function by its name and puts your whole new function in its place; with a  … [truncated]
+         YB = CB("edit_file") ? `\nFor a file longer than 6000 characters, don't send it whole: change only the parts that need it, with replace_function where you can, and an edit_file call for each other part, where search is copied exactly from the current file:\n${dB("edit_fil … [truncated]
+         iB = IB ? `2. Then give the whole new code with a write_file call, exactly like this:\n${dB("write_file",{path:UB,why:"what the change does",content:yJ.codeBlock})}` : `2. Then give every file you change, in full, with a write_file call, exactly like this:\n${dB("write_fi … [truncated]
+         pB = IB ? "" : ` If there is no code yet, write it in ${UB}.`,
+         aB = dB("switch_to_world_code", {}),
+         HB = IB ? kB ? `\n${WJ}` : `\nIf part of the request needs World Code (a callback, or something that happens without a click), give that part as World Code with an add_world_code call, with its callbacks written as functions (in World Code the player is playerId; there is … [truncated]
+         MB = zB && CB("use_prefab") && hB.length >= 2,
+         jB = MB ? hB.slice(0, 3).map((BB => BB.title)).join("\n") : "A parkour race\nZombie survival\nCapture the flag",
+         PB = MB ? " When you ask what kind of game they want, the choices are the 2 to 4 listed prefabs that fit the request best, by their titles: the one they pick is put in with use_prefab next." : "",
+         RB = CB("ask_creator") ? `\nOnly if the request is too unclear to build anything sensible, ask instead of writing code: call ask_creator with one short question and 2 to 4 short choices, one per line. That is: no idea what kind of thing they want ("make a game"), or askin … [truncated]
+         rB = CB("plan") ? `\n${"deepseek"===ZB?"When a request is big, instead of writing it all at once, you may":"This request is big. Instead of writing it all at once, you may"} call plan with 2 to 5 short steps, one per line, each small enough to build and try on its own, th … [truncated]
+         mB = null !== (JB = hB[0]) && void 0 !== JB ? JB : CT("parkour"),
+         XB = (null !== (oB = null === mB || void 0 === mB ? void 0 : mB.settings) && void 0 !== oB ? oB : []).slice(0, 2).map((BB => `${BB.key}: ${BB.value}`)).join("\n");
+       return `How to answer:\n1. Start with one or two short, friendly sentences in simple words saying what the change does, in the present tense as they read it before it goes in ("This adds...", "This changes..."; or what was wrong), and anything you had to do differently from … [truncated]
```

#### 178. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6030` → after: `L6030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6030) · [Before (L6030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6030)

```diff
-         QB ? "The docs aren't in this message: before you use an api method, callback or client option, look up any you aren't sure of, with llms.txt where you can. Make every look-up you need in one answer where you can, up to 4." : "Most requests need no look-up: only look when … [truncated]
+         TB ? "The docs aren't in this message: before you use an api method, callback or client option, look up any you aren't sure of, with llms.txt where you can. Make every look-up you need in one answer where you can, up to 4." : "Most requests need no look-up: only look when … [truncated]
```

#### 179. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6033` → after: `L6033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6033) · [Before (L6033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6033)

```diff
-         dB.join("\n")
+         oB.join("\n")
```

#### 180. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6035` → after: `L6035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6035) · [Before (L6035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6035)

```diff
-       `}(BB,gB,UB)}\nGive each call that changes code a why: a few plain words the creator sees beside that change, e.g. "gives everyone a sword when they join".\n3. Keep everything that already works; change only what the request needs. Don't add commands or features they didn't … [truncated]
+       `}(BB,dB,cB)}\nGive each call that changes code a why: a few plain words the creator sees beside that change, e.g. "gives everyone a sword when they join".\n3. Keep everything that already works; change only what the request needs. Don't add commands or features they didn't … [truncated]
```

#### 181. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6038-L6039` → after: `L6038-L6039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6038-L6039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6038-L6039) · [Before (L6038-L6039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6038-L6039)

```diff
-     function tn(BB, jB, zB) {
-       return Object.keys(BB).filter((BB => !zB || !(0, mB.f)(BB))).sort(((BB, zB) => (zB === jB ? 1 : 0) - (BB === jB ? 1 : 0) || BB.localeCompare(zB)))
+     function CJ(BB, IB, ZB) {
+       return Object.keys(BB).filter((BB => !ZB || !(0, gB.c)(BB))).sort(((BB, ZB) => (ZB === IB ? 1 : 0) - (BB === IB ? 1 : 0) || BB.localeCompare(ZB)))
```

#### 182. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6042-L6045` → after: `L6042-L6045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6042-L6045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6042-L6045) · [Before (L6042-L6045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6042-L6045)

```diff
-     function Sn(BB, jB, zB) {
-       var QB;
-       const nB = tn(BB, jB, zB);
-       return null !== jB && nB.includes(jB) ? jB : null !== (QB = nB[0]) && void 0 !== QB ? QB : null
+     function QJ(BB, IB, ZB) {
+       var TB;
+       const JB = CJ(BB, IB, ZB);
+       return null !== IB && JB.includes(IB) ? IB : null !== (TB = JB[0]) && void 0 !== TB ? TB : null
```

#### 183. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6048` → after: `L6048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6048) · [Before (L6048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6048)

```diff
-     function Mn(BB) {
+     function sJ(BB) {
```

#### 184. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6052-L6054` → after: `L6052-L6054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6052-L6054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6052-L6054) · [Before (L6052-L6054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6052-L6054)

```diff
-     function En(BB) {
-       const jB = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:""}${Mn(BB)}`;
-       return `Only ${jB} runs by itself: another file runs when ${jB} imports or requires it, so keep the import, require and export lines their files have (no import/export is for one file), and put callbacks in ${jB}.\n`
+     function wJ(BB) {
+       const IB = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:""}${sJ(BB)}`;
+       return `Only ${IB} runs by itself: another file runs when ${IB} imports or requires it, so keep the import, require and export lines their files have (no import/export is for one file), and put callbacks in ${IB}.\n`
```

#### 185. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6057-L6058` → after: `L6057-L6058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6057-L6058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6057-L6058) · [Before (L6057-L6058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6057-L6058)

```diff
-     function qn(BB, jB) {
-       var zB;
+     function OJ(BB, IB) {
+       var ZB;
```

#### 186. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6060-L6065` → after: `L6060-L6065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6060-L6065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6060-L6065) · [Before (L6060-L6065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6060-L6065)

```diff
-         files: QB,
-         activePath: nB
-       } = BB, dB = !0 === BB.codeBlock, IB = tn(QB, nB, dB);
-       if (0 === IB.length || IB.every((BB => "" === QB[BB].trim()))) return dB ? "There is no code yet: the code block is empty." : IB.includes("index.ts") ? "There is no code yet: index.ts is empty. Write it in index.ts." : "There is no code yet: index.js is empty.";
-       const NB = null !== (zB = Sn(QB, nB, dB)) && void 0 !== zB ? zB : IB[0];
-       return `${IB.length>1?`Their files:\n${IB.map((BB=>{const jB=""===(zB=QB[BB])?0:zB.replace(/\n$/,"").split("\n").length;var zB;return`- ${BB}: ${1===jB?"1 line":`${jB} lines`}${BB===NB?" (open in the editor, its code below)":""}`})).join("\n")}\n${dB?"":En(IB)}\n`:""}${func … [truncated]
+         files: TB,
+         activePath: JB
+       } = BB, oB = !0 === BB.codeBlock, GB = CJ(TB, JB, oB);
+       if (0 === GB.length || GB.every((BB => "" === TB[BB].trim()))) return oB ? "There is no code yet: the code block is empty." : GB.includes("index.ts") ? "There is no code yet: index.ts is empty. Write it in index.ts." : "There is no code yet: index.js is empty.";
+       const vB = null !== (ZB = QJ(TB, JB, oB)) && void 0 !== ZB ? ZB : GB[0];
+       return `${GB.length>1?`Their files:\n${GB.map((BB=>{const IB=""===(ZB=TB[BB])?0:ZB.replace(/\n$/,"").split("\n").length;var ZB;return`- ${BB}: ${1===IB?"1 line":`${IB} lines`}${BB===vB?" (open in the editor, its code below)":""}`})).join("\n")}\n${oB?"":wJ(GB)}\n`:""}${func … [truncated]
```

#### 187. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6068-L6069` → after: `L6068-L6069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6068-L6069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6068-L6069) · [Before (L6068-L6069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6068-L6069)

```diff
-     function fn(BB) {
-       var jB, zB, QB, nB, dB, IB;
+     function YJ(BB) {
+       var IB, ZB, TB, JB, oB, GB;
```

#### 188. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6072` → after: `L6072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6072) · [Before (L6072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6072)

```diff
-         hasCode: "" !== (null !== (jB = BB.files[null !== (zB = BB.activePath) && void 0 !== zB ? zB : ""]) && void 0 !== jB ? jB : "").trim(),
+         hasCode: "" !== (null !== (IB = BB.files[null !== (ZB = BB.activePath) && void 0 !== ZB ? ZB : ""]) && void 0 !== IB ? IB : "").trim(),
```

#### 189. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6074` → after: `L6074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6074) · [Before (L6074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6074)

```diff
-         wantsExport: nn(BB.request),
+         wantsExport: JJ(BB.request),
```

#### 190. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6076-L6077` → after: `L6076-L6077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6076-L6077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6076-L6077) · [Before (L6076-L6077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6076-L6077)

```diff
-         canRemember: !0 === (null === (QB = BB.about) || void 0 === QB ? void 0 : QB.canRemember),
-         isBigRequest: sj(BB.request),
+         canRemember: !0 === (null === (TB = BB.about) || void 0 === TB ? void 0 : TB.canRemember),
+         isBigRequest: FI(BB.request),
```

#### 191. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6082` → after: `L6082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6082) · [Before (L6082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6082)

```diff
-         hasWorldCodeFiles: Object.keys(BB.files).some(mB.f),
+         hasWorldCodeFiles: Object.keys(BB.files).some(gB.c),
```

#### 192. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6084-L6085` → after: `L6084-L6085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6084-L6085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6084-L6085) · [Before (L6084-L6085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6084-L6085)

```diff
-         offersPrefabs: (nB = BB.request, dB = BB.files, IB = Hn(BB), "never" !== IB.offer && ("always" === IB.offer || hQ(nB, 1).length > 0 || sj(nB) || !rn(dB) && pn.test(nB))),
-         listsPrefabs: Hn(BB).categories,
+         offersPrefabs: (JB = BB.request, oB = BB.files, GB = iJ(BB), "never" !== GB.offer && ("always" === GB.offer || RT(JB, 1).length > 0 || FI(JB) || !zJ(oB) && hJ.test(JB))),
+         listsPrefabs: iJ(BB).categories,
```

#### 193. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6090-L6092` → after: `L6090-L6092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6090-L6092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6090-L6092) · [Before (L6090-L6092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6090-L6092)

```diff
-     function Hn(BB) {
-       var jB;
-       return null !== (jB = BB.prefabs) && void 0 !== jB ? jB : an
+     function iJ(BB) {
+       var IB;
+       return null !== (IB = BB.prefabs) && void 0 !== IB ? IB : nJ
```

#### 194. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6095-L6098` → after: `L6095-L6098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6095-L6098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6095-L6098) · [Before (L6095-L6098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6095-L6098)

```diff
-     function Dn(BB, jB) {
-       return "deepseek" === jB ? function(BB) {
-         const jB = dn[BB ? "codeBlock" : "worldCode"];
-         return Mj.filter((BB => jB.has(BB.name)))
+     function pJ(BB, IB) {
+       return "deepseek" === IB ? function(BB) {
+         const IB = oJ[BB ? "codeBlock" : "worldCode"];
+         return sI.filter((BB => IB.has(BB.name)))
```

#### 195. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6100-L6103` → after: `L6100-L6103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6100-L6103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6100-L6103) · [Before (L6100-L6103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6100-L6103)

```diff
-         const jB = (BB.hasCode || BB.hasBigFile) && !BB.codeBlock || !0 === BB.hasWorldCodeFiles || !0 === BB.addsToEntryFile,
-           zB = !0 === BB.canLookUp,
-           QB = BB.codeBlock && !0 === BB.canChangeWorldCode && !0 !== BB.hasWorldCodeFiles && zB,
-           nB = {
+         const IB = (BB.hasCode || BB.hasBigFile) && !BB.codeBlock || !0 === BB.hasWorldCodeFiles || !0 === BB.addsToEntryFile,
+           ZB = !0 === BB.canLookUp,
+           TB = BB.codeBlock && !0 === BB.canChangeWorldCode && !0 !== BB.hasWorldCodeFiles && ZB,
+           JB = {
```

#### 196. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6106` → after: `L6106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6106) · [Before (L6106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6106)

```diff
-             replace_function: jB,
+             replace_function: IB,
```

#### 197. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6115-L6122` → after: `L6115-L6122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6115-L6122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6115-L6122) · [Before (L6115-L6122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6115-L6122)

```diff
-             view_file: zB && !0 === BB.hasOtherFiles && !BB.codeBlock,
-             view_world_code: QB,
-             view_chunk: zB,
-             view_game_state: zB,
-             get_docs: zB,
-             fetch_url: zB && !0 === BB.looksUpDocs,
-             find_names: zB,
-             view_errors: zB && !0 === BB.hasErrors,
+             view_file: ZB && !0 === BB.hasOtherFiles && !BB.codeBlock,
+             view_world_code: TB,
+             view_chunk: ZB,
+             view_game_state: ZB,
+             get_docs: ZB,
+             fetch_url: ZB && !0 === BB.looksUpDocs,
+             find_names: ZB,
+             view_errors: ZB && !0 === BB.hasErrors,
```

#### 198. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6124-L6125` → after: `L6124-L6125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6124-L6125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6124-L6125) · [Before (L6124-L6125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6124-L6125)

```diff
-             list_prefabs: zB && !0 === BB.listsPrefabs && !BB.codeBlock,
-             view_prefab: zB && !0 === BB.offersPrefabs && !BB.codeBlock
+             list_prefabs: ZB && !0 === BB.listsPrefabs && !BB.codeBlock,
+             view_prefab: ZB && !0 === BB.offersPrefabs && !BB.codeBlock
```

#### 199. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6127-L6130` → after: `L6127-L6130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6127-L6130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6127-L6130) · [Before (L6127-L6130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6127-L6130)

```diff
-         let dB = Mj.filter((BB => nB[BB.name]));
-         for (const IB of ["remember", "plan"]) dB.filter((BB => !Ej(BB.name))).length > 7 && (dB = dB.filter((BB => BB.name !== IB)));
-         return dB
-       }(fn(BB))
+         let oB = sI.filter((BB => JB[BB.name]));
+         for (const GB of ["remember", "plan"]) oB.filter((BB => !wI(BB.name))).length > 7 && (oB = oB.filter((BB => BB.name !== GB)));
+         return oB
+       }(YJ(BB))
```

#### 200. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6133-L6140` → after: `L6133-L6140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6133-L6140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6133-L6140) · [Before (L6133-L6140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6133-L6140)

```diff
-     function Fn(BB, jB) {
-       var zB, QB;
-       const nB = fn(BB),
-         dB = !0 === nB.canLookUp,
-         IB = (null !== (zB = null === (QB = BB.lookups) || void 0 === QB ? void 0 : QB.length) && void 0 !== zB ? zB : 0) > 0,
-         NB = !0 === nB.hasWorldCodeFiles,
-         uB = [nB.hasCode ? "" : "No open file has code, so don't call edit_code_in_place.", nB.hasBigFile ? "" : "Every file is short, so change them with write_file or replace_function, not edit_file.", dB ? "" : IB ? "You have looked things up as many times as you can: answer n … [truncated]
-       return uB.length > 0 ? `\n\nFor this request: ${uB.join(" ")}` : ""
+     function aJ(BB, IB) {
+       var ZB, TB;
+       const JB = YJ(BB),
+         oB = !0 === JB.canLookUp,
+         GB = (null !== (ZB = null === (TB = BB.lookups) || void 0 === TB ? void 0 : TB.length) && void 0 !== ZB ? ZB : 0) > 0,
+         vB = !0 === JB.hasWorldCodeFiles,
+         kB = [JB.hasCode ? "" : "No open file has code, so don't call edit_code_in_place.", JB.hasBigFile ? "" : "Every file is short, so change them with write_file or replace_function, not edit_file.", oB ? "" : GB ? "You have looked things up as many times as you can: answer n … [truncated]
+       return kB.length > 0 ? `\n\nFor this request: ${kB.join(" ")}` : ""
```

#### 201. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6143-L6145` → after: `L6143-L6145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6143-L6145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6143-L6145) · [Before (L6143-L6145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6143-L6145)

```diff
-     function Yn(BB, jB) {
-       var zB, QB, nB, dB, IB, NB;
-       let uB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : sn,
+     function HJ(BB, IB) {
+       var ZB, TB, JB, oB, GB, vB;
+       let kB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : FJ,
```

#### 202. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6147-L6148` → after: `L6147-L6148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6147-L6148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6147-L6148) · [Before (L6147-L6148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6147-L6148)

```diff
-           docsInTurn: UB = !1,
-           Dy: aB = !1
+           docsInTurn: cB = !1,
+           Fq: nB = !1
```

#### 203. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6150-L6182` → after: `L6150-L6182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6150-L6182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6150-L6182) · [Before (L6150-L6182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6150-L6182)

```diff
-       const pB = "deepseek" === uB.format,
-         rB = Object.values(jB.files).join("\n"),
-         sB = jB.history.slice(-2).map((BB => BB.text)).join("\n"),
-         JB = `${jB.request}\n${sB}\n${jB.errors.join("\n")}`,
-         mB = !0 === jB.looksUpDocs,
-         yB = mB && !0 === jB.canLookUp ? [] : BB.find(JB, rB, 12),
-         kB = BB.matchItemAndBlockNames(JB, 12),
-         GB = !0 === jB.codeBlock,
-         LB = GB ? "myId" : "playerId",
-         gB = Dn(jB, uB.format),
-         tB = gB.some((BB => "use_prefab" === BB.name)),
-         SB = !tB || pB && !0 !== fn(jB).offersPrefabs ? [] : function(BB, jB, zB) {
-           if ("never" === zB.offer || "none" === zB.list) return [];
-           if ("all" === zB.list) return [...GQ];
-           const QB = hQ(BB, 4);
-           if (rn(jB) || !pn.test(BB) && !sj(BB)) return QB;
- ... (17 more removed lines; see GitHub link above)
+       const hB = "deepseek" === kB.format,
+         zB = Object.values(IB.files).join("\n"),
+         FB = IB.history.slice(-2).map((BB => BB.text)).join("\n"),
+         NB = `${IB.request}\n${FB}\n${IB.errors.join("\n")}`,
+         gB = !0 === IB.looksUpDocs,
+         qB = gB && !0 === IB.canLookUp ? [] : BB.find(NB, zB, 12),
+         yB = BB.matchItemAndBlockNames(NB, 12),
+         UB = !0 === IB.codeBlock,
+         WB = UB ? "myId" : "playerId",
+         dB = pJ(IB, kB.format),
+         CB = dB.some((BB => "use_prefab" === BB.name)),
+         QB = !CB || hB && !0 !== YJ(IB).offersPrefabs ? [] : function(BB, IB, ZB) {
+           if ("never" === ZB.offer || "none" === ZB.list) return [];
+           if ("all" === ZB.list) return [...UT];
+           const TB = RT(BB, 4);
+           if (zJ(IB) || !hJ.test(BB) && !FI(BB)) return TB;
+ ... (17 more added lines; see GitHub link above)
```

#### 204. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6184` → after: `L6184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6184) · [Before (L6184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6184)

```diff
-           content: Nn([GB ? yn(mB) : Jn(mB), ...mB ? [] : [GB ? `## World Code callbacks (all of them; only for World Code, never in the code block)\n${BB.index("callback")}` : `## Callbacks (all of them)\n${BB.index("callback")}`, `## API methods (all of them, call as api.name(. … [truncated]
+           content: vJ([UB ? qJ(gB) : NJ(gB), ...gB ? [] : [UB ? `## World Code callbacks (all of them; only for World Code, never in the code block)\n${BB.index("callback")}` : `## Callbacks (all of them)\n${BB.index("callback")}`, `## API methods (all of them, call as api.name(. … [truncated]
```

#### 205. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6191-L6196` → after: `L6191-L6196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6191-L6196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6191-L6196) · [Before (L6191-L6196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6191-L6196)

```diff
-             hasWorldCodeFiles: !0 === fn(jB).hasWorldCodeFiles,
-             hasLookedUp: (null !== (zB = null === (QB = jB.lookups) || void 0 === QB ? void 0 : QB.length) && void 0 !== zB ? zB : 0) > 0,
-             movesToWorldCode: !0 === jB.canChangeWorldCode,
-             listedPrefabs: SB,
-             guidesToPrefabs: !0 === Hn(jB).guide
-           })].filter((BB => "" !== BB)).join("\n\n"), gB, uB.format, uB.nativeTools)
+             hasWorldCodeFiles: !0 === YJ(IB).hasWorldCodeFiles,
+             hasLookedUp: (null !== (ZB = null === (TB = IB.lookups) || void 0 === TB ? void 0 : TB.length) && void 0 !== ZB ? ZB : 0) > 0,
+             movesToWorldCode: !0 === IB.canChangeWorldCode,
+             listedPrefabs: QB,
+             guidesToPrefabs: !0 === iJ(IB).guide
+           })].filter((BB => "" !== BB)).join("\n\n"), dB, kB.format, kB.nativeTools)
```

#### 206. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6198-L6201` → after: `L6198-L6201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6198-L6201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6198-L6201) · [Before (L6198-L6201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6198-L6201)

```diff
-       if (!pB)
-         for (const ZB of jB.history) qB.push({
-           role: ZB.role,
-           content: ZB.text
+       if (!hB)
+         for (const mB of IB.history) YB.push({
+           role: mB.role,
+           content: mB.text
```

#### 207. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6203-L6211` → after: `L6203-L6211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6203-L6211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6203-L6211) · [Before (L6203-L6211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6203-L6211)

```diff
-       const fB = pB && !aB && jB.history.length > 0 ? `Earlier in this chat:\n${jB.history.map((BB=>`${"user"===BB.role?"They asked":"You answered"}: ${BB.text}`)).join("\n")}\n\n` : "",
-         oB = null !== (nB = jB.about) && void 0 !== nB && nB.notes.length ? `AI notes (notes they kept):\n${jB.about.notes.map((BB=>`- ${BB}`)).join("\n")}\n\n` : "",
-         HB = null !== (dB = jB.about) && void 0 !== dB && dB.outline ? `Outline of their code:\n${jB.about.outline}\n\n` : "",
-         DB = jB.errors.length > 0 ? `\n\nErrors their world showed recently:\n${jB.errors.slice(-5).join("\n")}` : "",
-         FB = null === (IB = jB.failedEdits) || void 0 === IB || !IB.length || pB && aB ? "" : `\n\nWhat happened to your last answer's changes:\n${function(BB,jB){return BB.map((BB=>Bz[jB].editFailure(BB.tool,Un(BB)))).join("\n\n")}(jB.failedEdits,uB.format)}`,
-         YB = [...UB ? iB : [], ...pB ? [MB, EB] : []].filter((BB => "" !== BB)).map((BB => `${BB}\n\n`)).join(""),
-         VB = null === (NB = jB.lookups) || void 0 === NB || !NB.length || pB && aB ? "" : `\n\nWhat you looked up for this request:\n${hB=jB.lookups,XB=uB.format,hB.map((BB=>Bz[XB].lookupResult(BB.tool,BB.about,BB.text))).join("\n\n")}`;
-       var hB, XB;
-       return qB.push({
+       const iB = hB && !nB && IB.history.length > 0 ? `Earlier in this chat:\n${IB.history.map((BB=>`${"user"===BB.role?"They asked":"You answered"}: ${BB.text}`)).join("\n")}\n\n` : "",
+         pB = null !== (JB = IB.about) && void 0 !== JB && JB.notes.length ? `AI notes (notes they kept):\n${IB.about.notes.map((BB=>`- ${BB}`)).join("\n")}\n\n` : "",
+         aB = null !== (oB = IB.about) && void 0 !== oB && oB.outline ? `Outline of their code:\n${IB.about.outline}\n\n` : "",
+         HB = IB.errors.length > 0 ? `\n\nErrors their world showed recently:\n${IB.errors.slice(-5).join("\n")}` : "",
+         MB = null === (GB = IB.failedEdits) || void 0 === GB || !GB.length || hB && nB ? "" : `\n\nWhat happened to your last answer's changes:\n${function(BB,IB){return BB.map((BB=>BZ[IB].editFailure(BB.tool,cJ(BB)))).join("\n\n")}(IB.failedEdits,kB.format)}`,
+         jB = [...cB ? OB : [], ...hB ? [sB, wB] : []].filter((BB => "" !== BB)).map((BB => `${BB}\n\n`)).join(""),
+         PB = null === (vB = IB.lookups) || void 0 === vB || !vB.length || hB && nB ? "" : `\n\nWhat you looked up for this request:\n${RB=IB.lookups,rB=kB.format,RB.map((BB=>BZ[rB].lookupResult(BB.tool,BB.about,BB.text))).join("\n\n")}`;
+       var RB, rB;
+       return YB.push({
```

#### 208. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6214` → after: `L6214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6214) · [Before (L6214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6214)

```diff
-       }), qB
+       }), YB
```

#### 209. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6216` → after: `L6216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6216) · [Before (L6216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6216)

```diff
-     var Vn = zB(39708);
+     var MJ = ZB(39693);
```

#### 210. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6218-L6219` → after: `L6218-L6219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6218-L6219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6218-L6219) · [Before (L6218-L6219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6218-L6219)

```diff
-     function hn(BB) {
-       var jB, zB, QB, nB, dB, IB;
+     function jJ(BB) {
+       var IB, ZB, TB, JB, oB, GB;
```

#### 211. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6221` → after: `L6221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6221) · [Before (L6221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6221)

```diff
-         args: NB
+         args: vB
```

#### 212. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6225` → after: `L6225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6225) · [Before (L6225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6225)

```diff
-           return null !== (jB = NB.path) && void 0 !== jB ? jB : "a file";
+           return null !== (IB = vB.path) && void 0 !== IB ? IB : "a file";
```

#### 213. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6229` → after: `L6229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6229) · [Before (L6229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6229)

```diff
-           return NB.position ? `the blocks near ${null!==(zB=null===(QB=(0,Vn.f)(NB.position))||void 0===QB?void 0:QB.map(Math.floor).join(", "))&&void 0!==zB?zB:NB.position}` : "the blocks around you";
+           return vB.position ? `the blocks near ${null!==(ZB=null===(TB=(0,MJ.c)(vB.position))||void 0===TB?void 0:TB.map(Math.floor).join(", "))&&void 0!==ZB?ZB:vB.position}` : "the blocks around you";
```

#### 214. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6233` → after: `L6233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6233) · [Before (L6233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6233)

```diff
-           return NB.name ? `the docs for ${NB.name}` : `the list of ${Zn(null!==(nB=NB.list)&&void 0!==nB?nB:Xn)}`;
+           return vB.name ? `the docs for ${vB.name}` : `the list of ${RJ(null!==(JB=vB.list)&&void 0!==JB?JB:PJ)}`;
```

#### 215. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6236-L6239` → after: `L6236-L6239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6236-L6239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6236-L6239) · [Before (L6236-L6239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6236-L6239)

```diff
-             const jB = void 0 === BB ? null : gB(BB);
-             if (null === jB) return null !== BB && void 0 !== BB ? BB : "a docs page";
-             return tB(jB) ? "the list of docs pages" : `the docs page ${function(BB){const jB=(0,kB.r)(BB);return null===jB?BB:`${jB.name}${null===jB.part?"":`/${jB.part}`}`}(jB)}`
-           }(NB.url);
+             const IB = void 0 === BB ? null : dB(BB);
+             if (null === IB) return null !== BB && void 0 !== BB ? BB : "a docs page";
+             return CB(IB) ? "the list of docs pages" : `the docs page ${function(BB){const IB=(0,yB.v)(BB);return null===IB?BB:`${IB.name}${null===IB.part?"":`/${IB.part}`}`}(IB)}`
+           }(vB.url);
```

#### 216. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6241` → after: `L6241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6241) · [Before (L6241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6241)

```diff
-           return `names for "${null!==(dB=NB.words)&&void 0!==dB?dB:""}"`;
+           return `names for "${null!==(oB=vB.words)&&void 0!==oB?oB:""}"`;
```

#### 217. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6245` → after: `L6245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6245) · [Before (L6245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6245)

```diff
-           return NB.category ? `the ready-made ${NB.category} games` : "the ready-made games";
+           return vB.category ? `the ready-made ${vB.category} games` : "the ready-made games";
```

#### 218. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6247` → after: `L6247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6247) · [Before (L6247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6247)

```diff
-           return `the ready-made ${null!==(IB=NB.name)&&void 0!==IB?IB:"game"}`
+           return `the ready-made ${null!==(GB=vB.name)&&void 0!==GB?GB:"game"}`
```

#### 219. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6250` → after: `L6250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6250) · [Before (L6250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6250)

```diff
-     const Xn = "functions";
+     const PJ = "functions";
```

#### 220. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6252` → after: `L6252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6252) · [Before (L6252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6252)

```diff
-     function Zn(BB) {
+     function RJ(BB) {
```

#### 221. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6256` → after: `L6256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6256) · [Before (L6256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6256)

```diff
-     function An(BB) {
+     function rJ(BB) {
```

#### 222. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6259-L6262` → after: `L6259-L6262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6259-L6262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6259-L6262) · [Before (L6259-L6262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6259-L6262)

```diff
-     async function Tn(BB, jB) {
-       var zB;
-       const QB = hn(BB),
-         nB = jB => ({
+     async function mJ(BB, IB) {
+       var ZB;
+       const TB = jJ(BB),
+         JB = IB => ({
```

#### 223. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6265-L6266` → after: `L6265-L6266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6265-L6266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6265-L6266) · [Before (L6265-L6266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6265-L6266)

```diff
-             about: QB,
-             text: jB
+             about: TB,
+             text: IB
```

#### 224. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6271` → after: `L6271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6271) · [Before (L6271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6271)

```diff
-           return nB((NB = BB.args.path, uB = jB.files, void 0 === NB ? "No path was given: give the path of a file from the list." : Object.hasOwn(uB, NB) ? "" === uB[NB] ? `${NB} is empty.` : uB[NB] : `There is no file called ${NB}. Their files are: ${Object.keys(uB).join(", ")} … [truncated]
+           return JB((vB = BB.args.path, kB = IB.files, void 0 === vB ? "No path was given: give the path of a file from the list." : Object.hasOwn(kB, vB) ? "" === kB[vB] ? `${vB} is empty.` : kB[vB] : `There is no file called ${vB}. Their files are: ${Object.keys(kB).join(", ")} … [truncated]
```

#### 225. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6273-L6278` → after: `L6273-L6278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6273-L6278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6273-L6278) · [Before (L6273-L6278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6273-L6278)

```diff
-           const BB = jB.readWorldCode ? await jB.readWorldCode() : null;
-           if (null === BB) return nB("World Code couldn't be read, so it can't be changed from here. Give its part with add_world_code instead.");
-           const zB = Object.keys(BB).sort(),
-             QB = Object.fromEntries(zB.map((jB => [`${mB.l}${jB}`, BB[jB]]))),
-             dB = zB.map((jB => `${mB.l}${jB}:\n${""===BB[jB]?"(empty)":BB[jB]}`)).join("\n\n"),
-             IB = zB.length > 1 ? `\n\n${En(zB,mB.l)}` : "";
+           const BB = IB.readWorldCode ? await IB.readWorldCode() : null;
+           if (null === BB) return JB("World Code couldn't be read, so it can't be changed from here. Give its part with add_world_code instead.");
+           const ZB = Object.keys(BB).sort(),
+             TB = Object.fromEntries(ZB.map((IB => [`${gB.i}${IB}`, BB[IB]]))),
+             oB = ZB.map((IB => `${gB.i}${IB}:\n${""===BB[IB]?"(empty)":BB[IB]}`)).join("\n\n"),
+             GB = ZB.length > 1 ? `\n\n${wJ(ZB,gB.i)}` : "";
```

#### 226. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6280-L6281` → after: `L6280-L6281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6280-L6281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6280-L6281) · [Before (L6280-L6281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6280-L6281)

```diff
-             ...nB("" === dB ? `World Code has no code yet: ${mB.l}index.js is empty.` : `${dB}${IB}`),
-             worldCodeFiles: QB
+             ...JB("" === oB ? `World Code has no code yet: ${gB.i}index.js is empty.` : `${oB}${GB}`),
+             worldCodeFiles: TB
```

#### 227. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6285` → after: `L6285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6285) · [Before (L6285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6285)

```diff
-           return nB(await jB.viewChunk((0, Vn.f)(BB.args.position)));
+           return JB(await IB.viewChunk((0, MJ.c)(BB.args.position)));
```

#### 228. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6287` → after: `L6287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6287) · [Before (L6287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6287)

```diff
-           return nB(await jB.viewGameState());
+           return JB(await IB.viewGameState());
```

#### 229. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6289` → after: `L6289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6289) · [Before (L6289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6289)

```diff
-           return nB(function(BB, jB, zB) {
+           return JB(function(BB, IB, ZB) {
```

#### 230. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6291-L6292` → after: `L6291-L6292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6291-L6292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6291-L6292) · [Before (L6291-L6292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6291-L6292)

```diff
-               const BB = (0, MB.b)(Lj, Zn(null !== jB && void 0 !== jB ? jB : Xn));
-               return void 0 === BB ? `There is no list called ${jB}: ask for ${gj}.` : zB.index(BB)
+               const BB = (0, sB.e)(WI, RJ(null !== IB && void 0 !== IB ? IB : PJ));
+               return void 0 === BB ? `There is no list called ${IB}: ask for ${dI}.` : ZB.index(BB)
```

#### 231. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6294-L6298` → after: `L6294-L6298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6294-L6298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6294-L6298) · [Before (L6294-L6298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6294-L6298)

```diff
-             const QB = zB.section(BB);
-             if (QB) return QB.text;
-             const nB = zB.find(BB, "", 3).map((BB => BB.name)).join(", ");
-             return `Nothing is called ${BB}.${""===nB?"":` The closest names are: ${nB}.`}`
-           }(BB.args.name, BB.args.list, jB.docs));
+             const TB = ZB.section(BB);
+             if (TB) return TB.text;
+             const JB = ZB.find(BB, "", 3).map((BB => BB.name)).join(", ");
+             return `Nothing is called ${BB}.${""===JB?"":` The closest names are: ${JB}.`}`
+           }(BB.args.name, BB.args.list, IB.docs));
```

#### 232. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6300` → after: `L6300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6300) · [Before (L6300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6300)

```diff
-           return nB(await jB.fetchDocsPage(null !== (zB = BB.args.url) && void 0 !== zB ? zB : ""));
+           return JB(await IB.fetchDocsPage(null !== (ZB = BB.args.url) && void 0 !== ZB ? ZB : ""));
```

#### 233. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6302-L6304` → after: `L6302-L6304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6302-L6304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6302-L6304) · [Before (L6302-L6304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6302-L6304)

```diff
-           var dB, IB;
-           const zB = jB.docs.searchNames(null !== (dB = BB.args.words) && void 0 !== dB ? dB : "", 20);
-           return nB(zB.length > 0 ? zB.join(", ") : `No block, item or mob name has any of the words "${null!==(IB=BB.args.words)&&void 0!==IB?IB:""}".`)
+           var oB, GB;
+           const ZB = IB.docs.searchNames(null !== (oB = BB.args.words) && void 0 !== oB ? oB : "", 20);
+           return JB(ZB.length > 0 ? ZB.join(", ") : `No block, item or mob name has any of the words "${null!==(GB=BB.args.words)&&void 0!==GB?GB:""}".`)
```

#### 234. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6307` → after: `L6307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6307) · [Before (L6307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6307)

```diff
-           return nB(jB.errors.length > 0 ? jB.errors.slice(-30).join("\n") : "Their world showed no errors recently.");
+           return JB(IB.errors.length > 0 ? IB.errors.slice(-30).join("\n") : "Their world showed no errors recently.");
```

#### 235. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6309` → after: `L6309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6309) · [Before (L6309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6309)

```diff
-           return nB(YQ(BB.args.category));
+           return JB(jT(BB.args.category));
```

#### 236. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6311-L6314` → after: `L6311-L6314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6311-L6314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6311-L6314) · [Before (L6311-L6314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6311-L6314)

```diff
-           return nB(function(BB, jB) {
-             const zB = void 0 === BB ? null : tQ(BB);
-             return zB ? VQ(zB, jB) : `There is no prefab called ${null!==BB&&void 0!==BB?BB:"that"}.\n${YQ()}`
-           }(BB.args.name, !0 === jB.showPrefabCode))
+           return JB(function(BB, IB) {
+             const ZB = void 0 === BB ? null : CT(BB);
+             return ZB ? PT(ZB, IB) : `There is no prefab called ${null!==BB&&void 0!==BB?BB:"that"}.\n${jT()}`
+           }(BB.args.name, !0 === IB.showPrefabCode))
```

#### 237. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6316` → after: `L6316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6316) · [Before (L6316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6316)

```diff
-       var NB, uB
+       var vB, kB
```

#### 238. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6318` → after: `L6318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6318) · [Before (L6318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6318)

```diff
-     const Pn = [
+     const XJ = [
```

#### 239. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6344-L6401` → after: `L6344-L6401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6344-L6401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6344-L6401) · [Before (L6344-L6401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6344-L6401)

```diff
-     function Wn(BB) {
-       let jB = BB;
-       for (const [zB, QB] of Pn) jB = jB.replace(zB, (BB => BB.length > 1 && BB[0] !== BB[0].toLowerCase() && BB.slice(1) === BB.slice(1).toLowerCase() ? QB[0].toUpperCase() + QB.slice(1) : QB));
-       return jB
-     }
-     const en = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
-       wn = ["Qwen3Guard-Gen-0.6B", "Qwen3Guard-Gen-8B"],
-       xn = ["Qwen3Guard-Gen-8B", "Qwen3Guard-Gen-0.6B"],
-       Kn = 12e3,
-       Cn = new Set(["Violent", "Non-violent Illegal Acts", "Unethical Acts"]);
- 
-     function cn(BB) {
-       var jB, zB, QB;
-       const nB = null === (jB = /Safety:\s*(\w+)/.exec(BB)) || void 0 === jB ? void 0 : jB[1],
-         dB = null !== (zB = null === (QB = /Categories:\s*(.+)/.exec(BB)) || void 0 === QB ? void 0 : QB[1]) && void 0 !== zB ? zB : "";
-       return /PII/.test(dB) ? "personalInfo" : "Unsafe" === nB || /Jailbreak|Sexual|Suicide|Self-Harm/i.test(dB) ? "unsafe" : "ok"
- ... (42 more removed lines; see GitHub link above)
+     function LJ(BB) {
+       let IB = BB;
+       for (const [ZB, TB] of XJ) IB = IB.replace(ZB, (BB => BB.length > 1 && BB[0] !== BB[0].toLowerCase() && BB.slice(1) === BB.slice(1).toLowerCase() ? TB[0].toUpperCase() + TB.slice(1) : TB));
+       return IB
+     }
+     const eJ = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
+       uJ = ["Qwen3Guard-Gen-0.6B", "Qwen3Guard-Gen-8B"],
+       fJ = ["Qwen3Guard-Gen-8B", "Qwen3Guard-Gen-0.6B"],
+       lJ = 12e3,
+       AJ = new Set(["Violent", "Non-violent Illegal Acts", "Unethical Acts"]);
+ 
+     function tJ(BB) {
+       var IB, ZB, TB;
+       const JB = null === (IB = /Safety:\s*(\w+)/.exec(BB)) || void 0 === IB ? void 0 : IB[1],
+         oB = null !== (ZB = null === (TB = /Categories:\s*(.+)/.exec(BB)) || void 0 === TB ? void 0 : TB[1]) && void 0 !== ZB ? ZB : "";
+       return /PII/.test(oB) ? "personalInfo" : "Unsafe" === JB || /Jailbreak|Sexual|Suicide|Self-Harm/i.test(oB) ? "unsafe" : "ok"
+ ... (42 more added lines; see GitHub link above)
```

#### 240. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6403-L6406` → after: `L6403-L6406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6403-L6406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6403-L6406) · [Before (L6403-L6406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6403-L6406)

```diff
-           if ("\n" === jB) break;
-           if (zB) zB = "]" !== jB;
-           else if ("[" === jB) zB = !0;
-           else if ("/" === jB) return QB + 1
+           if ("\n" === IB) break;
+           if (ZB) ZB = "]" !== IB;
+           else if ("[" === IB) ZB = !0;
+           else if ("/" === IB) return TB + 1
```

#### 241. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6409-L6430` → after: `L6409-L6430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6409-L6430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6409-L6430) · [Before (L6409-L6430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6409-L6430)

```diff
-       return jB + 1
-     }
- 
-     function zd(BB, jB, zB, QB) {
-       let nB = jB,
-         dB = 0;
-       for (; nB < BB.length;) {
-         const jB = BB[nB],
-           IB = BB[nB + 1];
-         if ("/" === jB && "/" === IB) {
-           const jB = BB.indexOf("\n", nB);
-           QB.push(BB.slice(nB + 2, -1 === jB ? BB.length : jB)), nB = -1 === jB ? BB.length : jB
-         } else if ("/" === jB && "*" === IB) {
-           const jB = BB.indexOf("*/", nB + 2);
-           QB.push(BB.slice(nB + 2, -1 === jB ? BB.length : jB)), nB = -1 === jB ? BB.length : jB + 2
-         } else if ("/" === jB && Bd(BB, nB)) nB = jd(BB, nB);
- ... (6 more removed lines; see GitHub link above)
+       return IB + 1
+     }
+ 
+     function SJ(BB, IB, ZB, TB) {
+       let JB = IB,
+         oB = 0;
+       for (; JB < BB.length;) {
+         const IB = BB[JB],
+           GB = BB[JB + 1];
+         if ("/" === IB && "/" === GB) {
+           const IB = BB.indexOf("\n", JB);
+           TB.push(BB.slice(JB + 2, -1 === IB ? BB.length : IB)), JB = -1 === IB ? BB.length : IB
+         } else if ("/" === IB && "*" === GB) {
+           const IB = BB.indexOf("*/", JB + 2);
+           TB.push(BB.slice(JB + 2, -1 === IB ? BB.length : IB)), JB = -1 === IB ? BB.length : IB + 2
+         } else if ("/" === IB && KJ(BB, JB)) JB = VJ(BB, JB);
+ ... (6 more added lines; see GitHub link above)
```

#### 242. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6432-L6435` → after: `L6432-L6435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6432-L6435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6432-L6435) · [Before (L6432-L6435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6432-L6435)

```diff
-           if (zB && "{" === jB) dB++;
-           else if (zB && "}" === jB) {
-             if (0 === dB) return nB + 1;
-             dB--
+           if (ZB && "{" === IB) oB++;
+           else if (ZB && "}" === IB) {
+             if (0 === oB) return JB + 1;
+             oB--
```

#### 243. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6437` → after: `L6437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6437) · [Before (L6437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6437)

```diff
-           nB++
+           JB++
```

#### 244. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6440` → after: `L6440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6440) · [Before (L6440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6440)

```diff
-       return nB
+       return JB
```

#### 245. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6442-L6446` → after: `L6442-L6446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6442-L6446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6442-L6446) · [Before (L6442-L6446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6442-L6446)

```diff
-     const Qd = 4e5;
-     var nd = zB(41577);
-     let dd = [],
-       Id = 0,
-       Nd = null;
+     const Bo = 4e5;
+     var Io = ZB(41505);
+     let Zo = [],
+       To = 0,
+       Jo = null;
```

#### 246. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6448` → after: `L6448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6448) · [Before (L6448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6448)

```diff
-     function ud(BB) {
+     function oo(BB) {
```

#### 247. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6452` → after: `L6452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6452) · [Before (L6452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6452)

```diff
-     function Ud(BB) {
+     function Go(BB) {
```

#### 248. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6456-L6458` → after: `L6456-L6458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6456-L6458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6456-L6458) · [Before (L6456-L6458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6456-L6458)

```diff
-     function pd(BB, jB, zB) {
-       var QB;
-       let nB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+     function vo(BB, IB, ZB) {
+       var TB;
+       let JB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
```

#### 249. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6461-L6463` → after: `L6461-L6463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6461-L6463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6461-L6463) · [Before (L6461-L6463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6461-L6463)

```diff
-         if (dd.push(BB), dd.length >= 40) return void sd();
-         rd()
-       }(null !== (QB = function(BB) {
+         if (Zo.push(BB), Zo.length >= 40) return void co();
+         ko()
+       }(null !== (TB = function(BB) {
```

#### 250. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6466-L6468` → after: `L6466-L6468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6466-L6468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6466-L6468) · [Before (L6466-L6468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6466-L6468)

```diff
-           prompt_tokens: jB,
-           completion_tokens: zB,
-           prompt_tokens_details: QB
+           prompt_tokens: IB,
+           completion_tokens: ZB,
+           prompt_tokens_details: TB
```

#### 251. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6470-L6471` → after: `L6470-L6471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6470-L6471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6470-L6471) · [Before (L6470-L6471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6470-L6471)

```diff
-         if (!Ud(jB) || !Ud(zB)) return null;
-         const nB = null !== QB && "object" === typeof QB ? QB.cached_tokens : void 0;
+         if (!Go(IB) || !Go(ZB)) return null;
+         const JB = null !== TB && "object" === typeof TB ? TB.cached_tokens : void 0;
```

#### 252. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6473-L6475` → after: `L6473-L6475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6473-L6475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6473-L6475) · [Before (L6473-L6475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6473-L6475)

```diff
-           sent: jB,
-           cached: Ud(nB) ? nB : 0,
-           received: zB
+           sent: IB,
+           cached: Go(JB) ? JB : 0,
+           received: ZB
```

#### 253. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6477-L6478` → after: `L6477-L6478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6477-L6478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6477-L6478) · [Before (L6477-L6478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6477-L6478)

```diff
-       }(BB)) && void 0 !== QB ? QB : {
-         sent: ud(JSON.stringify(jB)),
+       }(BB)) && void 0 !== TB ? TB : {
+         sent: oo(JSON.stringify(IB)),
```

#### 254. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6480` → after: `L6480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6480) · [Before (L6480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6480)

```diff
-         received: ud(zB) + nB
+         received: oo(ZB) + JB
```

#### 255. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6484-L6486` → after: `L6484-L6486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6484-L6486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6484-L6486) · [Before (L6484-L6486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6484-L6486)

```diff
-     function rd() {
-       Nd ??= setTimeout((() => {
-         sd()
+     function ko() {
+       Jo ??= setTimeout((() => {
+         co()
```

#### 256. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6489-L6493` → after: `L6489-L6493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6489-L6493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6489-L6493) · [Before (L6489-L6493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6489-L6493)

```diff
-     async function sd() {
-       null !== Nd && (clearTimeout(Nd), Nd = null);
-       const BB = dd.slice(0, 40);
-       dd = dd.slice(40), dd.length > 0 && (Nd = setTimeout((() => {
-         sd()
+     async function co() {
+       null !== Jo && (clearTimeout(Jo), Jo = null);
+       const BB = Zo.slice(0, 40);
+       Zo = Zo.slice(40), Zo.length > 0 && (Jo = setTimeout((() => {
+         co()
```

#### 257. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6495-L6497` → after: `L6495-L6497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6495-L6497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6495-L6497) · [Before (L6495-L6497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6495-L6497)

```diff
-       const jB = Id;
-       if (Id = 0, 0 !== BB.length || 0 !== jB) try {
-         await (0, nd.postToGameServer)("/ai-helper/usage", {
+       const IB = To;
+       if (To = 0, 0 !== BB.length || 0 !== IB) try {
+         await (0, Io.postToGameServer)("/ai-helper/usage", {
```

#### 258. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6499` → after: `L6499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6499) · [Before (L6499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6499)

```diff
-           pastes: jB
+           pastes: IB
```

#### 259. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6503-L6504` → after: `L6503-L6504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6503-L6504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6503-L6504) · [Before (L6503-L6504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6503-L6504)

```diff
-     const Jd = 6e4;
-     const md = new class {
+     const no = 6e4;
+     const ho = new class {
```

#### 260. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6509-L6510` → after: `L6509-L6510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6509-L6510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6509-L6510) · [Before (L6509-L6510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6509-L6510)

```diff
-         let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
-         this.calls.set(BB, [...this.recent(BB, jB), jB])
+         let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+         this.calls.set(BB, [...this.recent(BB, IB), IB])
```

#### 261. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6513-L6516` → after: `L6513-L6516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6513-L6516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6513-L6516) · [Before (L6513-L6516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6513-L6516)

```diff
-         var jB;
-         let zB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now(),
-           QB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-         this.fullUntil.set(BB, Math.max(null !== (jB = this.fullUntil.get(BB)) && void 0 !== jB ? jB : 0, zB + Math.max(QB, Jd)))
+         var IB;
+         let ZB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now(),
+           TB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         this.fullUntil.set(BB, Math.max(null !== (IB = this.fullUntil.get(BB)) && void 0 !== IB ? IB : 0, ZB + Math.max(TB, no)))
```

#### 262. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6519-L6520` → after: `L6519-L6520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6519-L6520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6519-L6520) · [Before (L6519-L6520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6519-L6520)

```diff
-         let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
-         return this.recent(BB, jB).length
+         let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+         return this.recent(BB, IB).length
```

#### 263. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6523-L6527` → after: `L6523-L6527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6523-L6527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6523-L6527) · [Before (L6523-L6527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6523-L6527)

```diff
-         var jB;
-         let zB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
-         const QB = this.recent(BB, zB),
-           nB = QB.length < 2 ? zB : QB[QB.length - 2] + Jd;
-         return Math.max(nB, null !== (jB = this.fullUntil.get(BB)) && void 0 !== jB ? jB : 0, zB)
+         var IB;
+         let ZB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+         const TB = this.recent(BB, ZB),
+           JB = TB.length < 2 ? ZB : TB[TB.length - 2] + no;
+         return Math.max(JB, null !== (IB = this.fullUntil.get(BB)) && void 0 !== IB ? IB : 0, ZB)
```

#### 264. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6530-L6531` → after: `L6530-L6531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6530-L6531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6530-L6531) · [Before (L6530-L6531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6530-L6531)

```diff
-         let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
-         return Math.min(...BB.map((BB => this.freeAt(BB, jB))))
+         let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+         return Math.min(...BB.map((BB => this.freeAt(BB, IB))))
```

#### 265. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6536-L6538` → after: `L6536-L6538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6536-L6538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6536-L6538) · [Before (L6536-L6538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6536-L6538)

```diff
-       recent(BB, jB) {
-         var zB;
-         return (null !== (zB = this.calls.get(BB)) && void 0 !== zB ? zB : []).filter((BB => jB - BB < Jd))
+       recent(BB, IB) {
+         var ZB;
+         return (null !== (ZB = this.calls.get(BB)) && void 0 !== ZB ? ZB : []).filter((BB => IB - BB < no))
```

#### 266. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6542` → after: `L6542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6542) · [Before (L6542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6542)

```diff
-     function yd(BB) {
+     function zo(BB) {
```

#### 267. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6546-L6549` → after: `L6546-L6549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6546-L6549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6546-L6549) · [Before (L6546-L6549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6546-L6549)

```diff
-     function kd(BB, jB) {
-       var zB;
-       const QB = null === (zB = BB.headers.get(jB)) || void 0 === zB ? void 0 : zB.trim();
-       return void 0 !== QB && /^\d+$/.test(QB) ? Number(QB) : null
+     function Fo(BB, IB) {
+       var ZB;
+       const TB = null === (ZB = BB.headers.get(IB)) || void 0 === ZB ? void 0 : ZB.trim();
+       return void 0 !== TB && /^\d+$/.test(TB) ? Number(TB) : null
```

#### 268. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6552-L6555` → after: `L6552-L6555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6552-L6555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6552-L6555) · [Before (L6552-L6555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6552-L6555)

```diff
-     function Gd(BB) {
-       var jB;
-       const zB = null !== (jB = kd(BB, "retry-after")) && void 0 !== jB ? jB : kd(BB, "ratelimit-reset");
-       return null === zB ? null : 1e3 * zB
+     function No(BB) {
+       var IB;
+       const ZB = null !== (IB = Fo(BB, "retry-after")) && void 0 !== IB ? IB : Fo(BB, "ratelimit-reset");
+       return null === ZB ? null : 1e3 * ZB
```

#### 269. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6558-L6561` → after: `L6558-L6561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6558-L6561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6558-L6561) · [Before (L6558-L6561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6558-L6561)

```diff
-     function Ld(BB, jB) {
-       var zB;
-       const QB = null !== (zB = Gd(jB)) && void 0 !== zB ? zB : 0;
-       (429 === jB.status || yd(QB) && 0 === kd(jB, "ratelimit-remaining")) && md.markFull(BB, Date.now(), QB)
+     function go(BB, IB) {
+       var ZB;
+       const TB = null !== (ZB = No(IB)) && void 0 !== ZB ? ZB : 0;
+       (429 === IB.status || zo(TB) && 0 === Fo(IB, "ratelimit-remaining")) && ho.markFull(BB, Date.now(), TB)
```

#### 270. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6564-L6567` → after: `L6564-L6567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6564-L6567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6564-L6567) · [Before (L6564-L6567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6564-L6567)

```diff
-     function gd(BB) {
-       const jB = Date.now(),
-         zB = md.freeAt(BB, jB) - jB;
-       return zB <= 0 ? null : yd(zB) ? "unavailable" : "busy"
+     function qo(BB) {
+       const IB = Date.now(),
+         ZB = ho.freeAt(BB, IB) - IB;
+       return ZB <= 0 ? null : zo(ZB) ? "unavailable" : "busy"
```

#### 271. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6570-L6571` → after: `L6570-L6571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6570-L6571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6570-L6571) · [Before (L6570-L6571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6570-L6571)

```diff
-     function td(BB, jB) {
-       return `${function(BB){var jB;if("string"===typeof BB)return BB;if(429!==BB.status)return`http-${BB.status}`;if(yd(null!==(jB=Gd(BB))&&void 0!==jB?jB:0))return"yearly-limit";const zB=kd(BB,"retry-after");return null===zB?"busy":`busy-ra${zB}`}(jB)}__${BB.replace(/[^A-Za-z0- … [truncated]
+     function yo(BB, IB) {
+       return `${function(BB){var IB;if("string"===typeof BB)return BB;if(429!==BB.status)return`http-${BB.status}`;if(zo(null!==(IB=No(BB))&&void 0!==IB?IB:0))return"yearly-limit";const ZB=Fo(BB,"retry-after");return null===ZB?"busy":`busy-ra${ZB}`}(IB)}__${BB.replace(/[^A-Za-z0- … [truncated]
```

#### 272. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6573` → after: `L6573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6573) · [Before (L6573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6573)

```diff
-     const Sd = new class {
+     const Uo = new class {
```

#### 273. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6577-L6579` → after: `L6577-L6579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6577-L6579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6577-L6579) · [Before (L6577-L6579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6577-L6579)

```diff
-         JJ(BB, jB) {
-           const zB = td(BB, jB);
-           "undefined" === typeof window || this.reportedCodes.has(zB) || this.reportedCodes.size >= 2 || (this.reportedCodes.add(zB), this.loadReporter().then((jB => {
+         JN(BB, IB) {
+           const ZB = yo(BB, IB);
+           "undefined" === typeof window || this.reportedCodes.has(ZB) || this.reportedCodes.size >= 2 || (this.reportedCodes.add(ZB), this.loadReporter().then((IB => {
```

#### 274. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6581-L6583` → after: `L6581-L6583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6581-L6583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6581-L6583) · [Before (L6581-L6583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6581-L6583)

```diff
-               reportCappedWasmFailure: QB
-             } = jB;
-             QB("ai_helper_failed", `World Code AI: ${BB} failed`, zB)
+               reportCappedWasmFailure: TB
+             } = IB;
+             TB("ai_helper_failed", `World Code AI: ${BB} failed`, ZB)
```

#### 275. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6588-L6600` → after: `L6588-L6600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6588-L6600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6588-L6600) · [Before (L6588-L6600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6588-L6600)

```diff
-       }((() => zB.e(213).then((() => zB(36337))))),
-       Md = /\n{3,}/,
-       Ed = /<tool_call\b|<function=/;
- 
-     function qd(BB) {
-       const jB = BB.trimStart(),
-         zB = Md.exec(jB),
-         QB = Ed.exec(jB);
-       if (null === zB || null !== QB && QB.index < zB.index) return null;
-       const nB = jB.slice(zB.index + zB[0].length);
-       return "" === nB.trim() ? null : nB
-     }
-     const fd = [{
+       }((() => ZB.e(213).then((() => ZB(36283))))),
+       Wo = /\n{3,}/,
+       Co = /<tool_call\b|<function=/;
+ 
+     function Qo(BB) {
+       const IB = BB.trimStart(),
+         ZB = Wo.exec(IB),
+         TB = Co.exec(IB);
+       if (null === ZB || null !== TB && TB.index < ZB.index) return null;
+       const JB = IB.slice(ZB.index + ZB[0].length);
+       return "" === JB.trim() ? null : JB
+     }
+     const so = [{
```

#### 276. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6619` → after: `L6619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6619) · [Before (L6619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6619)

```diff
-     const od = {
+     const wo = {
```

#### 277. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6626-L6627` → after: `L6626-L6627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6626-L6627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6626-L6627) · [Before (L6626-L6627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6626-L6627)

```diff
-     function Hd(BB) {
-       return [...fd, od].find((jB => jB.name === BB))
+     function Oo(BB) {
+       return [...so, wo].find((IB => IB.name === BB))
```

#### 278. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6630-L6632` → after: `L6630-L6632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6630-L6632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6630-L6632) · [Before (L6630-L6632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6630-L6632)

```diff
-     function Dd(BB) {
-       var jB, zB;
-       return null !== (jB = null === (zB = Hd(BB)) || void 0 === zB ? void 0 : zB.callFormat) && void 0 !== jB ? jB : "simple"
+     function Yo(BB) {
+       var IB, ZB;
+       return null !== (IB = null === (ZB = Oo(BB)) || void 0 === ZB ? void 0 : ZB.callFormat) && void 0 !== IB ? IB : "simple"
```

#### 279. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6635-L6636` → after: `L6635-L6636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6635-L6636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6635-L6636) · [Before (L6635-L6636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6635-L6636)

```diff
-     function Fd(BB) {
-       var jB;
+     function io(BB) {
+       var IB;
```

#### 280. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6638` → after: `L6638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6638) · [Before (L6638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6638)

```diff
-         format: null !== (jB = BB.callFormat) && void 0 !== jB ? jB : "simple",
+         format: null !== (IB = BB.callFormat) && void 0 !== IB ? IB : "simple",
```

#### 281. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6643-L6644` → after: `L6643-L6644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6643-L6644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6643-L6644) · [Before (L6643-L6644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6643-L6644)

```diff
-     function Yd(BB, jB) {
-       return "function" === typeof BB ? BB(jB) : BB
+     function po(BB, IB) {
+       return "function" === typeof BB ? BB(IB) : BB
```

#### 282. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6646-L6650` → after: `L6646-L6650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6646-L6650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6646-L6650) · [Before (L6646-L6650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6646-L6650)

```diff
-     const Vd = "TOO_COMPLEX",
-       hd = `\n\nYou are the quick helper: answer only small requests yourself, and pass everything else to a bigger model by replying with exactly ${Vd} and nothing else.\nAnswer yourself only when the whole change is a few lines doing one or two simple things, such as giving an  … [truncated]
-       Xd = 24e4,
-       Zd = ["tooLarge", "busy", "timeout", "turnedAway", "failed", "unavailable"];
-     class Ad extends Error {
+     const ao = "TOO_COMPLEX",
+       Ho = `\n\nYou are the quick helper: answer only small requests yourself, and pass everything else to a bigger model by replying with exactly ${ao} and nothing else.\nAnswer yourself only when the whole change is a few lines doing one or two simple things, such as giving an  … [truncated]
+       Mo = 24e4,
+       jo = ["tooLarge", "busy", "timeout", "turnedAway", "failed", "unavailable"];
+     class Po extends Error {
```

#### 283. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6656-L6658` → after: `L6656-L6658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6656-L6658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6656-L6658) · [Before (L6656-L6658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6656-L6658)

```diff
-     function Td(BB, jB) {
-       var zB, QB, nB, dB, IB;
-       const NB = BB[null !== (zB = jB.index) && void 0 !== zB ? zB : 0] ??= {
+     function Ro(BB, IB) {
+       var ZB, TB, JB, oB, GB;
+       const vB = BB[null !== (ZB = IB.index) && void 0 !== ZB ? ZB : 0] ??= {
```

#### 284. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6662` → after: `L6662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6662) · [Before (L6662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6662)

```diff
-       NB.name += null !== (QB = null === (nB = jB.function) || void 0 === nB ? void 0 : nB.name) && void 0 !== QB ? QB : "", NB.args += null !== (dB = null === (IB = jB.function) || void 0 === IB ? void 0 : IB.arguments) && void 0 !== dB ? dB : ""
+       vB.name += null !== (TB = null === (JB = IB.function) || void 0 === JB ? void 0 : JB.name) && void 0 !== TB ? TB : "", vB.args += null !== (oB = null === (GB = IB.function) || void 0 === GB ? void 0 : GB.arguments) && void 0 !== oB ? oB : ""
```

#### 285. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6665` → after: `L6665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6665) · [Before (L6665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6665)

```diff
-     function Pd(BB) {
+     function ro(BB) {
```

#### 286. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6669-L6671` → after: `L6669-L6671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6669-L6671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6669-L6671) · [Before (L6669-L6671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6669-L6671)

```diff
-     function Wd(BB, jB, zB, QB) {
-       let nB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-       return ed(BB, jB, zB, Pd(QB), nB).answer
+     function mo(BB, IB, ZB, TB) {
+       let JB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+       return Xo(BB, IB, ZB, ro(TB), JB).answer
```

#### 287. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6674-L6677` → after: `L6674-L6677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6674-L6677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6674-L6677) · [Before (L6674-L6677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6674-L6677)

```diff
-     function ed(BB, jB, zB, QB, nB) {
-       const dB = zB.flatMap((BB => {
-         const jB = rz(BB.name, BB.args);
-         return null === jB ? [] : [In(Qz(QB), jB.name, jB.args)]
+     function Xo(BB, IB, ZB, TB, JB) {
+       const oB = ZB.flatMap((BB => {
+         const IB = zZ(BB.name, BB.args);
+         return null === IB ? [] : [GJ(TZ(TB), IB.name, IB.args)]
```

#### 288. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6679-L6686` → after: `L6679-L6686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6679-L6686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6679-L6686) · [Before (L6679-L6686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6679-L6686)

```diff
-       let IB = !1;
-       return 0 !== dB.length || 0 !== Jz(BB, QB).length || BB.includes("```") || (dB.push(...nB ? [] : function(BB, jB) {
-         let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
-         const QB = new Map;
-         for (const NB of sz(BB, jB)) {
-           const BB = Object.values(NB.args).some((BB => void 0 !== BB && zB.includes(BB.trim())));
-           var nB, dB, IB;
-           "export_game" === NB.name || "switch_to_world_code" === NB.name || Ej(NB.name) || BB || QB.set(`${NB.name} ${null!==(nB=NB.args.path)&&void 0!==nB?nB:""} ${null!==(dB=NB.args.search)&&void 0!==dB?dB:""} ${null!==(IB=NB.args.name)&&void 0!==IB?IB:""}`, NB.source)
+       let GB = !1;
+       return 0 !== oB.length || 0 !== NZ(BB, TB).length || BB.includes("```") || (oB.push(...JB ? [] : function(BB, IB) {
+         let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
+         const TB = new Map;
+         for (const vB of FZ(BB, IB)) {
+           const BB = Object.values(vB.args).some((BB => void 0 !== BB && ZB.includes(BB.trim())));
+           var JB, oB, GB;
+           "export_game" === vB.name || "switch_to_world_code" === vB.name || wI(vB.name) || BB || TB.set(`${vB.name} ${null!==(JB=vB.args.path)&&void 0!==JB?JB:""} ${null!==(oB=vB.args.search)&&void 0!==oB?oB:""} ${null!==(GB=vB.args.name)&&void 0!==GB?GB:""}`, vB.source)
```

#### 289. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6688-L6691` → after: `L6688-L6691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6688-L6691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6688-L6691) · [Before (L6688-L6691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6688-L6691)

```diff
-         return [...new Set(QB.values())]
-       }(jB, QB, Gn)), IB = dB.length > 0), {
-         answer: [BB, ...dB].join("\n\n").trim(),
-         hasCallsFromReasoning: IB
+         return [...new Set(TB.values())]
+       }(IB, TB, UJ)), GB = oB.length > 0), {
+         answer: [BB, ...oB].join("\n\n").trim(),
+         hasCallsFromReasoning: GB
```

#### 290. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6694-L6697` → after: `L6694-L6697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6694-L6697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6694-L6697) · [Before (L6694-L6697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6694-L6697)

```diff
-     async function ld(BB, jB) {
-       const zB = BB.getReader(),
-         QB = new TextDecoder;
-       let nB = "";
+     async function Lo(BB, IB) {
+       const ZB = BB.getReader(),
+         TB = new TextDecoder;
+       let JB = "";
```

#### 291. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6701-L6702` → after: `L6701-L6702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6701-L6702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6701-L6702) · [Before (L6701-L6702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6701-L6702)

```diff
-           value: dB
-         } = await zB.read();
+           value: oB
+         } = await ZB.read();
```

#### 292. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6704` → after: `L6704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6704) · [Before (L6704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6704)

```diff
-         nB += QB.decode(dB, {
+         JB += TB.decode(oB, {
```

#### 293. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6707-L6713` → after: `L6707-L6713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6707-L6713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6707-L6713) · [Before (L6707-L6713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6707-L6713)

```diff
-         let IB = nB.indexOf("\n");
-         for (; - 1 !== IB;) {
-           const BB = nB.slice(0, IB).trim();
-           if (nB = nB.slice(IB + 1), IB = nB.indexOf("\n"), !BB.startsWith("data:")) continue;
-           const zB = BB.slice(5).trim();
-           if ("[DONE]" === zB) return;
-           let QB;
+         let GB = JB.indexOf("\n");
+         for (; - 1 !== GB;) {
+           const BB = JB.slice(0, GB).trim();
+           if (JB = JB.slice(GB + 1), GB = JB.indexOf("\n"), !BB.startsWith("data:")) continue;
+           const ZB = BB.slice(5).trim();
+           if ("[DONE]" === ZB) return;
+           let TB;
```

#### 294. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6715` → after: `L6715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6715) · [Before (L6715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6715)

```diff
-             QB = JSON.parse(zB)
+             TB = JSON.parse(ZB)
```

#### 295. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6719` → after: `L6719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6719) · [Before (L6719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6719)

```diff
-           jB(QB)
+           IB(TB)
```

#### 296. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6724` → after: `L6724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6724) · [Before (L6724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6724)

```diff
-     function wd(BB) {
+     function eo(BB) {
```

#### 297. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6735` → after: `L6735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6735) · [Before (L6735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6735)

```diff
-     function xd(BB) {
+     function uo(BB) {
```

#### 298. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6738-L6743` → after: `L6738-L6743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6738-L6743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6738-L6743) · [Before (L6738-L6743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6738-L6743)

```diff
-     async function Kd(BB, jB, zB, QB) {
-       let nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [];
-       const dB = gd(BB.name);
-       if (null !== dB) return dB;
-       md.record(BB.name);
-       const IB = await fetch(en, {
+     async function fo(BB, IB, ZB, TB) {
+       let JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [];
+       const oB = qo(BB.name);
+       if (null !== oB) return oB;
+       ho.record(BB.name);
+       const GB = await fetch(eJ, {
```

#### 299. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6750` → after: `L6750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6750) · [Before (L6750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6750)

```diff
-           messages: jB,
+           messages: IB,
```

#### 300. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6758-L6759` → after: `L6758-L6759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6758-L6759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6758-L6759) · [Before (L6758-L6759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6758-L6759)

```diff
-           ...BB.nativeTools && nB.length > 0 ? {
-             tools: wd(nB)
+           ...BB.nativeTools && JB.length > 0 ? {
+             tools: eo(JB)
```

#### 301. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6764` → after: `L6764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6764) · [Before (L6764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6764)

```diff
-         signal: zB
+         signal: ZB
```

#### 302. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6766-L6774` → after: `L6766-L6774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6766-L6774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6766-L6774) · [Before (L6766-L6774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6766-L6774)

```diff
-       if (Ld(BB.name, IB), 429 === IB.status) return Sd.JJ(BB.name, IB), "unavailable" === gd(BB.name) ? "unavailable" : "busy";
-       if (!IB.ok || !IB.body) return console.warn(`World Code AI: ${BB.name} answered ${IB.status}`), Sd.JJ(BB.name, IB.ok ? "empty" : IB), IB.ok ? "failed" : 429 === (NB = IB.status) ? "busy" : 400 === NB || 413 === NB ? "tooLarge" : 401 === NB || 403 === NB ? "turnedAway" : "fa … [truncated]
-       var NB;
-       let uB = "",
-         UB = "";
-       const aB = [];
-       let pB = !1,
-         rB = !1,
-         sB = null;
+       if (go(BB.name, GB), 429 === GB.status) return Uo.JN(BB.name, GB), "unavailable" === qo(BB.name) ? "unavailable" : "busy";
+       if (!GB.ok || !GB.body) return console.warn(`World Code AI: ${BB.name} answered ${GB.status}`), Uo.JN(BB.name, GB.ok ? "empty" : GB), GB.ok ? "failed" : 429 === (vB = GB.status) ? "busy" : 400 === vB || 413 === vB ? "tooLarge" : 401 === vB || 403 === vB ? "turnedAway" : "fa … [truncated]
+       var vB;
+       let kB = "",
+         cB = "";
+       const nB = [];
+       let hB = !1,
+         zB = !1,
+         FB = null;
```

#### 303. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6776-L6782` → after: `L6776-L6782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6776-L6782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6776-L6782) · [Before (L6776-L6782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6776-L6782)

```diff
-         await async function(BB, jB, zB) {
-           await ld(BB, (BB => {
-             var QB;
-             const nB = BB,
-               dB = null === (QB = nB.choices) || void 0 === QB ? void 0 : QB[0];
-             var IB, NB;
-             dB && jB(null !== (IB = dB.delta) && void 0 !== IB ? IB : {}, null !== (NB = dB.finish_reason) && void 0 !== NB ? NB : null), nB.usage && (null === zB || void 0 === zB || zB(nB.usage))
+         await async function(BB, IB, ZB) {
+           await Lo(BB, (BB => {
+             var TB;
+             const JB = BB,
+               oB = null === (TB = JB.choices) || void 0 === TB ? void 0 : TB[0];
+             var GB, vB;
+             oB && IB(null !== (GB = oB.delta) && void 0 !== GB ? GB : {}, null !== (vB = oB.finish_reason) && void 0 !== vB ? vB : null), JB.usage && (null === ZB || void 0 === ZB || ZB(JB.usage))
```

#### 304. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6784-L6789` → after: `L6784-L6789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6784-L6789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6784-L6789) · [Before (L6784-L6789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6784-L6789)

```diff
-         }(IB.body, ((jB, zB) => {
-           var nB, dB, IB, NB;
-           pB ||= "length" === zB, UB += null !== (nB = null !== (dB = jB.reasoning) && void 0 !== dB ? dB : jB.reasoning_content) && void 0 !== nB ? nB : "", uB += null !== (IB = jB.content) && void 0 !== IB ? IB : "";
-           for (const BB of null !== (sB = jB.tool_calls) && void 0 !== sB ? sB : []) {
-             var sB;
-             rB ||= "" !== UB && "" === uB.trim(), Td(aB, BB)
+         }(GB.body, ((IB, ZB) => {
+           var JB, oB, GB, vB;
+           hB ||= "length" === ZB, cB += null !== (JB = null !== (oB = IB.reasoning) && void 0 !== oB ? oB : IB.reasoning_content) && void 0 !== JB ? JB : "", kB += null !== (GB = IB.content) && void 0 !== GB ? GB : "";
+           for (const BB of null !== (FB = IB.tool_calls) && void 0 !== FB ? FB : []) {
+             var FB;
+             zB ||= "" !== cB && "" === kB.trim(), Ro(nB, BB)
```

#### 305. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6791-L6792` → after: `L6791-L6792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6791-L6792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6791-L6792) · [Before (L6791-L6792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6791-L6792)

```diff
-           const JB = BB.nativeTools && rB ? null !== (NB = qd(uB)) && void 0 !== NB ? NB : "" : uB;
-           null === QB || void 0 === QB || QB({
+           const NB = BB.nativeTools && zB ? null !== (vB = Qo(kB)) && void 0 !== vB ? vB : "" : kB;
+           null === TB || void 0 === TB || TB({
```

#### 306. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6794-L6796` → after: `L6794-L6796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6794-L6796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6794-L6796) · [Before (L6794-L6796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6794-L6796)

```diff
-             reasoningChars: UB.length,
-             answer: JB,
-             isCalling: aB.length > 0
+             reasoningChars: cB.length,
+             answer: NB,
+             isCalling: nB.length > 0
```

#### 307. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6799` → after: `L6799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6799) · [Before (L6799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6799)

```diff
-           sB = BB
+           FB = BB
```

#### 308. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6802` → after: `L6802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6802) · [Before (L6802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6802)

```diff
-         pd(sB, jB, uB + UB, 20 * aB.length)
+         vo(FB, IB, kB + cB, 20 * nB.length)
```

#### 309. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6804-L6816` → after: `L6804-L6816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6804-L6816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6804-L6816) · [Before (L6804-L6816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6804-L6816)

```diff
-       const JB = Cd(BB, uB, UB, aB, pB, rB);
-       return null === JB ? (Sd.JJ(BB.name, "empty"), "failed") : JB
-     }
- 
-     function Cd(BB, jB, zB, QB, nB) {
-       var dB;
-       let IB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         NB = jB;
-       var uB;
-       BB.nativeTools && IB && (NB = null !== (uB = qd(NB)) && void 0 !== uB ? uB : NB);
-       NB = NB.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
-       const UB = ed(NB, zB, QB, null !== (dB = BB.callFormat) && void 0 !== dB ? dB : "simple", nB);
-       return "" === UB.answer ? null : {
+       const NB = Ao(BB, kB, cB, nB, hB, zB);
+       return null === NB ? (Uo.JN(BB.name, "empty"), "failed") : NB
+     }
+ 
+     function Ao(BB, IB, ZB, TB, JB) {
+       var oB;
+       let GB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         vB = IB;
+       var kB;
+       BB.nativeTools && GB && (vB = null !== (kB = Qo(vB)) && void 0 !== kB ? kB : vB);
+       vB = vB.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
+       const cB = Xo(vB, ZB, TB, null !== (oB = BB.callFormat) && void 0 !== oB ? oB : "simple", JB);
+       return "" === cB.answer ? null : {
```

#### 310. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6818-L6821` → after: `L6818-L6821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6818-L6821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6818-L6821) · [Before (L6818-L6821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6818-L6821)

```diff
-         answer: UB.answer,
-         reasoning: zB,
-         isCutShort: nB,
-         hasCallsFromReasoning: UB.hasCallsFromReasoning
+         answer: cB.answer,
+         reasoning: ZB,
+         isCutShort: JB,
+         hasCallsFromReasoning: cB.hasCallsFromReasoning
```

#### 311. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6825` → after: `L6825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6825) · [Before (L6825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6825)

```diff
-     function cd(BB) {
+     function to(BB) {
```

#### 312. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6829-L6830` → after: `L6829-L6830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6829-L6830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6829-L6830) · [Before (L6829-L6830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6829-L6830)

```diff
-     function bd(BB) {
-       return xd(BB) && !BB.isCutShort
+     function bo(BB) {
+       return uo(BB) && !BB.isCutShort
```

#### 313. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6832-L6835` → after: `L6832-L6835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6832-L6835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6832-L6835) · [Before (L6832-L6835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6832-L6835)

```diff
-     async function vd(BB, jB, zB, QB, nB) {
-       const dB = BB.map((() => new AbortController)),
-         IB = () => {
-           for (const BB of dB) BB.abort()
+     async function xo(BB, IB, ZB, TB, JB) {
+       const oB = BB.map((() => new AbortController)),
+         GB = () => {
+           for (const BB of oB) BB.abort()
```

#### 314. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6837` → after: `L6837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6837) · [Before (L6837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6837)

```diff
-       null !== zB && void 0 !== zB && zB.aborted && IB(), null === zB || void 0 === zB || zB.addEventListener("abort", IB, {
+       null !== ZB && void 0 !== ZB && ZB.aborted && GB(), null === ZB || void 0 === ZB || ZB.addEventListener("abort", GB, {
```

#### 315. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6840-L6852` → after: `L6840-L6852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6840-L6852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6840-L6852) · [Before (L6840-L6852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6840-L6852)

```diff
-       const NB = BB.map((() => {})),
-         uB = BB.map((() => {}));
-       let UB = null;
-       const aB = BB => void 0 !== BB && ("" !== cd(BB.answer).trim() || !0 === BB.isCalling);
-       let pB = () => {};
-       BB.forEach(((BB, zB) => {
-         const IB = (0, GB.b)(Xd, dB[zB].signal);
-         Kd(BB, Yd(jB, BB), IB.signal, (BB => {
-           uB[zB] = BB, null === UB && aB(BB) && (UB = zB), UB === zB && (null === QB || void 0 === QB || QB(BB))
-         }), nB).catch((jB => {
-           if (dB[zB].signal.aborted) return "failed";
-           const QB = IB.signal.aborted;
-           return console.warn(`World Code AI: ${BB.name} ${QB?"took longer than 240 s":"couldn't be reached"}`, jB), Sd.JJ(BB.name, QB ? "timeout" : "network"), QB ? "timeout" : "failed"
+       const vB = BB.map((() => {})),
+         kB = BB.map((() => {}));
+       let cB = null;
+       const nB = BB => void 0 !== BB && ("" !== to(BB.answer).trim() || !0 === BB.isCalling);
+       let hB = () => {};
+       BB.forEach(((BB, ZB) => {
+         const GB = (0, UB.c)(Mo, oB[ZB].signal);
+         fo(BB, po(IB, BB), GB.signal, (BB => {
+           kB[ZB] = BB, null === cB && nB(BB) && (cB = ZB), cB === ZB && (null === TB || void 0 === TB || TB(BB))
+         }), JB).catch((IB => {
+           if (oB[ZB].signal.aborted) return "failed";
+           const TB = GB.signal.aborted;
+           return console.warn(`World Code AI: ${BB.name} ${TB?"took longer than 240 s":"couldn't be reached"}`, IB), Uo.JN(BB.name, TB ? "timeout" : "network"), TB ? "timeout" : "failed"
```

#### 316. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6854` → after: `L6854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6854) · [Before (L6854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6854)

```diff
-           IB.clear(), NB[zB] = BB, UB !== zB || bd(BB) || (UB = null), pB()
+           GB.clear(), vB[ZB] = BB, cB !== ZB || bo(BB) || (cB = null), hB()
```

#### 317. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6857` → after: `L6857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6857) · [Before (L6857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6857)

```diff
-       const rB = () => {
+       const zB = () => {
```

#### 318. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6859-L6861` → after: `L6859-L6861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6859-L6861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6859-L6861) · [Before (L6859-L6861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6859-L6861)

```diff
-         if (null !== UB) {
-           const BB = NB[UB];
-           return bd(BB) ? {
+         if (null !== cB) {
+           const BB = vB[cB];
+           return bo(BB) ? {
```

#### 319. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6865-L6867` → after: `L6865-L6867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6865-L6867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6865-L6867) · [Before (L6865-L6867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6865-L6867)

```diff
-         const jB = NB.find(bd);
-         if (jB) return {
-           reply: jB
+         const IB = vB.find(bo);
+         if (IB) return {
+           reply: IB
```

#### 320. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6869-L6870` → after: `L6869-L6870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6869-L6870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6869-L6870) · [Before (L6869-L6870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6869-L6870)

```diff
-         if (!NB.includes(void 0)) return {
-           reply: null !== (BB = NB.find(xd)) && void 0 !== BB ? BB : null
+         if (!vB.includes(void 0)) return {
+           reply: null !== (BB = vB.find(uo)) && void 0 !== BB ? BB : null
```

#### 321. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6873` → after: `L6873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6873) · [Before (L6873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6873)

```diff
-           const BB = NB.findIndex(((BB, jB) => void 0 === BB && aB(uB[jB])));
+           const BB = vB.findIndex(((BB, IB) => void 0 === BB && nB(kB[IB])));
```

#### 322. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6875-L6877` → after: `L6875-L6877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6875-L6877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6875-L6877) · [Before (L6875-L6877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6875-L6877)

```diff
-             UB = BB;
-             const jB = uB[BB];
-             jB && (null === QB || void 0 === QB || QB(jB))
+             cB = BB;
+             const IB = kB[BB];
+             IB && (null === TB || void 0 === TB || TB(IB))
```

#### 323. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6883-L6884` → after: `L6883-L6884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6883-L6884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6883-L6884) · [Before (L6883-L6884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6883-L6884)

```diff
-           if (null !== zB && void 0 !== zB && zB.aborted) throw new DOMException("The World Code AI request was stopped", "AbortError");
-           const BB = rB();
+           if (null !== ZB && void 0 !== ZB && ZB.aborted) throw new DOMException("The World Code AI request was stopped", "AbortError");
+           const BB = zB();
```

#### 324. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6886` → after: `L6886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6886) · [Before (L6886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6886)

```diff
-             const jB = NB.filter((BB => "string" === typeof BB));
+             const IB = vB.filter((BB => "string" === typeof BB));
```

#### 325. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6889` → after: `L6889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6889) · [Before (L6889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6889)

```diff
-               failures: jB
+               failures: IB
```

#### 326. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6893` → after: `L6893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6893) · [Before (L6893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6893)

```diff
-             pB = BB
+             hB = BB
```

#### 327. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6897` → after: `L6897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6897) · [Before (L6897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6897)

```diff
-         null === zB || void 0 === zB || zB.removeEventListener("abort", IB), IB()
+         null === ZB || void 0 === ZB || ZB.removeEventListener("abort", GB), GB()
```

#### 328. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6901` → after: `L6901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6901) · [Before (L6901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6901)

```diff
-     function Rd() {
+     function Eo() {
```

#### 329. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6903-L6913` → after: `L6903-L6913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6903-L6913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6903-L6913) · [Before (L6903-L6913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6903-L6913)

```diff
-       const jB = md.firstFreeAt(fd.map((BB => BB.name)), BB);
-       return yd(jB - BB) ? BB : jB
-     }
-     async function Od(BB) {
-       var jB;
-       let zB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-       const QB = Date.now(),
-         nB = null !== (jB = zB.models) && void 0 !== jB ? jB : fd,
-         dB = void 0 === zB.models ? function(BB, jB) {
-           let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
-           const QB = BB.map((BB => ({
+       const IB = ho.firstFreeAt(so.map((BB => BB.name)), BB);
+       return zo(IB - BB) ? BB : IB
+     }
+     async function Do(BB) {
+       var IB;
+       let ZB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+       const TB = Date.now(),
+         JB = null !== (IB = ZB.models) && void 0 !== IB ? IB : so,
+         oB = void 0 === ZB.models ? function(BB, IB) {
+           let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
+           const TB = BB.map((BB => ({
```

#### 330. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6915-L6916` → after: `L6915-L6916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6915-L6916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6915-L6916) · [Before (L6915-L6916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6915-L6916)

```diff
-               key: zB()
-             }))).sort(((BB, jB) => BB.key - jB.key)).map((BB => {
+               key: ZB()
+             }))).sort(((BB, IB) => BB.key - IB.key)).map((BB => {
```

#### 331. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6918` → after: `L6918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6918) · [Before (L6918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6918)

```diff
-                 model: jB
+                 model: IB
```

#### 332. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6920` → after: `L6920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6920) · [Before (L6920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6920)

```diff
-               return jB
+               return IB
```

#### 333. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6922-L6933` → after: `L6922-L6933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6922-L6933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6922-L6933) · [Before (L6922-L6933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6922-L6933)

```diff
-             nB = [...QB.filter((BB => jB(BB))), ...QB.filter((BB => !jB(BB)))],
-             dB = [];
-           for (let IB = 0; IB < nB.length; IB += 2) dB.push(nB.slice(IB, IB + 2));
-           return dB
-         }(nB, (BB => md.freeAt(BB.name) <= QB)) : nB.map((BB => [BB])),
-         IB = [];
-       for (const uB of dB) {
-         const jB = await vd(uB, BB, zB.signal, zB.onProgress, zB.tools);
-         if (null !== jB.reply) {
-           const nB = uB.find((BB => {
-             var zB;
-             return BB.name === (null === (zB = jB.reply) || void 0 === zB ? void 0 : zB.model)
+             JB = [...TB.filter((BB => IB(BB))), ...TB.filter((BB => !IB(BB)))],
+             oB = [];
+           for (let GB = 0; GB < JB.length; GB += 2) oB.push(JB.slice(GB, GB + 2));
+           return oB
+         }(JB, (BB => ho.freeAt(BB.name) <= TB)) : JB.map((BB => [BB])),
+         GB = [];
+       for (const kB of oB) {
+         const IB = await xo(kB, BB, ZB.signal, ZB.onProgress, ZB.tools);
+         if (null !== IB.reply) {
+           const JB = kB.find((BB => {
+             var ZB;
+             return BB.name === (null === (ZB = IB.reply) || void 0 === ZB ? void 0 : ZB.model)
```

#### 334. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6936-L6937` → after: `L6936-L6937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6936-L6937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6936-L6937) · [Before (L6936-L6937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6936-L6937)

```diff
-             ...nB && !1 !== zB.canNudge ? await zI(nB, Yd(BB, nB), jB.reply, zB.signal, zB.onProgress, zB.tools) : jB.reply,
-             ms: Date.now() - QB
+             ...JB && !1 !== ZB.canNudge ? await So(JB, po(BB, JB), IB.reply, ZB.signal, ZB.onProgress, ZB.tools) : IB.reply,
+             ms: Date.now() - TB
```

#### 335. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6940` → after: `L6940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L6940) · [Before (L6940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/92.js#L6940)

```diff
-         IB.push(...jB.failures)
+         GB.push(...IB.failures)
```
