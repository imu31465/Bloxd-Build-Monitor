# Changed — Bundle Modifications Report (Part 042 / 082)

- **Updated at**: `2026-11-28T02:07 JST`
- **Part**: `42 / 82` (**460** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 041](part-041.md) · [Part 043 →](part-043.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/controller.js` (u88b9b.1969c480 → 1yqdn.8419f1e1 · continued)

- **File**: `bundles/bloxd.io/chunks/js/controller.js` (978 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2)

#### 706. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8034` → after: `L7471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L7471) · [Before (L8034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8034)

```diff
-         return !(0, ke.h)(ee.id) && ("standard" !== ee.mapping ? (this.warnedNonStandardIds.has(ee.id) || (this.warnedNonStandardIds.add(ee.id), console.warn(`Controller "${ee.id}" has no standard button mapping, so it is ignored.`)), !1) : !this.requireTrustedPads || this.truste … [truncated]
+         return !(0, xW.g)(WW.id) && ("standard" !== WW.mapping ? (this.warnedNonStandardIds.has(WW.id) || (this.warnedNonStandardIds.add(WW.id), console.warn(`Controller "${WW.id}" has no standard button mapping, so it is ignored.`)), !1) : !this.requireTrustedPads || this.truste … [truncated]
```

#### 707. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8052` → after: `L7489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L7489) · [Before (L8052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8052)

```diff
-         this.running && 0 === this.rafId && (this.lastTimestampMs = 0, this.rafId = requestAnimationFrame(this.YR))
+         this.running && 0 === this.rafId && (this.lastTimestampMs = 0, this.rafId = requestAnimationFrame(this.hZ))
```

#### 708. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8057` → after: `L7494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L7494) · [Before (L8057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8057)

```diff
-   9469: (ee, ie, He) => {
+   9968: (WW, iW, OW) => {
```

#### 709. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8059-L8060` → after: `L7496-L7497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7496-L7497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L7496-L7497) · [Before (L8059-L8060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8059-L8060)

```diff
-       d: () => Me,
-       e: () => Ke,
+       c: () => NW,
+       f: () => PW,
```

#### 710. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8064` → after: `L7501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L7501) · [Before (L8064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8064)

```diff
-     var ye = He(9476);
+     var mW = OW(9972);
```

#### 711. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8073` → after: `L7510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L7510) · [Before (L8073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8073)

```diff
-         for (const Me of null !== (He = null === (be = ee.customButtons) || void 0 === be ? void 0 : be.filter(ye.g)) && void 0 !== He ? He : []) {
+         for (const NW of null !== (OW = null === (EW = WW.customButtons) || void 0 === EW ? void 0 : EW.filter(mW.e)) && void 0 !== OW ? OW : []) {
```

#### 712. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8101` → after: `L7538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L7538) · [Before (L8101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8101)

```diff
-   9400: (ee, ie, He) => {
+   9908: (WW, iW, OW) => {
```

#### 713. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8120` → after: `L7557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L7557) · [Before (L8120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8120)

```diff
-   9461: (ee, ie, He) => {
+   9966: (WW, iW, OW) => {
```

#### 714. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8123` → after: `L7560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L7560) · [Before (L8123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8123)

```diff
-       c: () => qe,
+       e: () => lW,
```

#### 715. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8125` → after: `L7562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L7562) · [Before (L8125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8125)

```diff
-       i: () => fe
+       g: () => AW
```

#### 716. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8127` → after: `L7564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L7564) · [Before (L8127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8127)

```diff
-     var ye = He(59),
+     var mW = OW(62),
```

#### 717. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8129-L8131` → after: `L7566-L7568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7566-L7568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L7566-L7568) · [Before (L8129-L8131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8129-L8131)

```diff
-       Me = He(1432),
-       Ke = He(9469),
-       Ue = He(9483);
+       NW = OW(1526),
+       PW = OW(9968),
+       LW = OW(9976);
```

#### 718. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8135` → after: `L7572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L7572) · [Before (L8135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8135)

```diff
-         (0, Ke.i)(Fe, ee) || (Fe = ee, be.h.yR(Ue.g, Fe))
+         (0, PW.i)(cW, WW) || (cW = WW, EW.l.iZ(LW.g, cW))
```

#### 719. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8139` → after: `L7576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L7576) · [Before (L8139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8139)

```diff
-         return (0, Me.f)(Ue.g, ie), ee
+         return (0, NW.e)(LW.g, iW), WW
```

#### 720. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8143` → after: `L7580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L7580) · [Before (L8143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8143)

```diff
-         ee !== ke && (ke = ee, be.h.yR(Ue.h, ee))
+         WW !== xW && (xW = WW, EW.l.iZ(LW.i, WW))
```

#### 721. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8147` → after: `L7584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L7584) · [Before (L8147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8147)

```diff
-         return (0, Me.f)(Ue.h, ie), ee
+         return (0, NW.e)(LW.i, iW), WW
```

#### 722. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8150` → after: `L7587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L7587) · [Before (L8150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8150)

```diff
-   9495: (ee, ie, He) => {
+   9986: (WW, iW, OW) => {
```

#### 723. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8152-L8153` → after: `L7589-L7590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7589-L7590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L7589-L7590) · [Before (L8152-L8153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8152-L8153)

```diff
-       b: () => Ke,
-       e: () => Ue
+       c: () => PW,
+       g: () => LW
```

#### 724. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8156` → after: `L7593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L7593) · [Before (L8156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8156)

```diff
-       be = He(9483);
+       EW = OW(9976);
```

#### 725. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8160` → after: `L7597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L7597) · [Before (L8160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8160)

```diff
-         ee !== Me && (Me = ee, ye.h.yR(be.k, Me))
+         WW !== NW && (NW = WW, mW.l.iZ(EW.j, NW))
```

#### 726. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8163` → after: `L7600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L7600) · [Before (L8163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8163)

```diff
-   9487: (ee, ie, He) => {
+   9980: (WW, iW, OW) => {
```

#### 727. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8165-L8166` → after: `L7602-L7603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7602-L7603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L7602-L7603) · [Before (L8165-L8166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8165-L8166)

```diff
-       d: () => Ue,
-       h: () => Fe
+       c: () => LW,
+       e: () => cW
```

#### 728. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8169` → after: `L7606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L7606) · [Before (L8169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8169)

```diff
-       be = He(9483);
+       EW = OW(9976);
```

#### 729. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8177` → after: `L7614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L7614) · [Before (L8177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8177)

```diff
-         }, ye.h.yR(be.o, Me))
+         }, mW.l.iZ(EW.m, NW))
```

#### 730. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8180` → after: `L7617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L7617) · [Before (L8180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8180)

```diff
-   9483: (ee, ie, He) => {
+   9976: (WW, iW, OW) => {
```

#### 731. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8184-L8188` → after: `L7621-L7625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7621-L7625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L7621-L7625) · [Before (L8184-L8188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8184-L8188)

```diff
-       h: () => be,
-       k: () => Ue,
-       o: () => Fe,
-       q: () => Je,
-       s: () => Ke
+       i: () => EW,
+       j: () => LW,
+       m: () => cW,
+       n: () => wW,
+       r: () => PW
```

#### 732. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8198` → after: `L7635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L7635) · [Before (L8198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8198)

```diff
-   9499: (ee, ie, He) => {
+   9988: (WW, iW, OW) => {
```

#### 733. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8200-L8201` → after: `L7637-L7638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7637-L7638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L7637-L7638) · [Before (L8200-L8201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8200-L8201)

```diff
-       b: () => Ke,
-       e: () => Ue
+       c: () => PW,
+       d: () => LW
```

#### 734. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8204` → after: `L7641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L7641) · [Before (L8204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8204)

```diff
-       be = He(9483);
+       EW = OW(9976);
```

#### 735. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8208` → after: `L7645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L7645) · [Before (L8208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8208)

```diff
-         ee !== Me && (Me = ee, ye.h.yR(be.q, Me))
+         WW !== NW && (NW = WW, mW.l.iZ(EW.n, NW))
```

#### 736. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8211` → after: `L7648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L7648) · [Before (L8211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8211)

```diff
-   9558: (ee, ie, He) => {
+   10053: (WW, iW, OW) => {
```

#### 737. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8214` → after: `L7651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L7651) · [Before (L8214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8214)

```diff
-       f: () => Ue
+       g: () => LW
```

#### 738. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8217` → after: `L7654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L7654) · [Before (L8217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8217)

```diff
-       be = He(9483);
+       EW = OW(9976);
```

#### 739. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8221` → after: `L7658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L7658) · [Before (L8221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8221)

```diff
-         ee !== Me && (Me = ee, ye.h.yR(be.s, Me))
+         WW !== NW && (NW = WW, mW.l.iZ(EW.r, NW))
```

#### 740. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8224` → after: `L7661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L7661) · [Before (L8224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8224)

```diff
-   9440: (ee, ie, He) => {
+   9946: (WW, iW, OW) => {
```

#### 741. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8226` → after: `L7663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L7663) · [Before (L8226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8226)

```diff
-       c: () => ye
+       e: () => mW
```

#### 742. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8243` → after: `L7680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L7680) · [Before (L8243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8243)

```diff
-   8979: (ee, ie, He) => {
+   9425: (WW, iW, OW) => {
```

#### 743. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8246-L8249` → after: `L7684-L7686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7684-L7686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L7684-L7686) · [Before (L8246-L8249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8246-L8249)

```diff
-       g: () => ke,
-       k: () => Ue,
-       m: () => Be,
-       q: () => ze
+       h: () => LW,
+       l: () => sW,
+       n: () => kW
```

#### 744. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8251-L8253` → after: `L7688-L7690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7688-L7690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L7688-L7690) · [Before (L8251-L8253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8251-L8253)

```diff
-     var ye = He(35),
-       be = He(8940),
-       Me = He(8912);
+     var mW = OW(39),
+       EW = OW(9393),
+       NW = OW(9364);
```

#### 745. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8256` → after: `L7693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L7693) · [Before (L8256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8256)

```diff
-           return He(8982)
+           return OW(9433)
```

#### 746. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8261` → after: `L7698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L7698) · [Before (L8261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8261)

```diff
-       Ue = [...Me.W, "LeftStick", "RightStick"],
+       LW = [...NW.Q, "LeftStick", "RightStick"],
```

#### 747. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8283` → after: `L7720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L7720) · [Before (L8283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8283)

```diff
-         return null !== (He = null === (ye = oe[Je[ee]]) || void 0 === ye ? void 0 : ye[ie]) && void 0 !== He ? He : 1
+         return null !== (OW = null === (mW = tW[wW[WW]]) || void 0 === mW ? void 0 : mW[iW]) && void 0 !== OW ? OW : 1
```

#### 748. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8286` → after: `L7723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L7723) · [Before (L8286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8286)

```diff
-         const He = `./${Je[ee]}/${ie}.svg`;
+         const OW = `./${wW[WW]}/${iW}.svg`;
```

#### 749. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8311` → after: `L7748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L7748) · [Before (L8311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8311)

```diff
-         (0, be.f)(ee) && ee !== Xe && (Xe = ee, Te(ee))
+         (0, EW.e)(WW) && WW !== UW && (UW = WW, bW(WW))
```

#### 750. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8314` → after: `L7751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L7751) · [Before (L8314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8314)

```diff
-   9584: (ee, ie, He) => {
+   10079: (WW, iW, OW) => {
```

#### 751. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8319` → after: `L7756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L7756) · [Before (L8319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8319)

```diff
-     var ye = He(59),
+     var mW = OW(62),
```

#### 752. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8321-L8325` → after: `L7758-L7762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7758-L7762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L7758-L7762) · [Before (L8321-L8325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8321-L8325)

```diff
-       Me = He(1432),
-       Ke = He(8926),
-       Ue = He(8907),
-       Fe = He(8954),
-       Je = He(8935);
+       NW = OW(1526),
+       PW = OW(9379),
+       LW = OW(9357),
+       cW = OW(9413),
+       wW = OW(9384);
```

#### 753. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8350` → after: `L7787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L7787) · [Before (L8350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8350)

```diff
-         return 0 === ie ? oe : qe(ee, 1 / ie)
+         return 0 === iW ? tW : lW(WW, 1 / iW)
```

#### 754. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8505-L8506` → after: `L7942-L7943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7942-L7943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L7942-L7943) · [Before (L8505-L8506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8505-L8506)

```diff
-         Ke = null !== (He = ee.beta) && void 0 !== He ? He : 0,
-         Ue = null !== (ye = ee.gamma) && void 0 !== ye ? ye : 0;
+         PW = null !== (OW = WW.beta) && void 0 !== OW ? OW : 0,
+         LW = null !== (mW = WW.gamma) && void 0 !== mW ? mW : 0;
```

#### 755. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8510` → after: `L7947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L7947) · [Before (L8510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8510)

```diff
-         z: null !== (be = ee.alpha) && void 0 !== be ? be : 0
+         z: null !== (EW = WW.alpha) && void 0 !== EW ? EW : 0
```

#### 756. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8513` → after: `L7950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L7950) · [Before (L8513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8513)

```diff
-     var te = He(9588);
+     var TW = OW(10085);
```

#### 757. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8541` → after: `L7978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L7978) · [Before (L8541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8541)

```diff
-           filters: te.g
+           filters: TW.i
```

#### 758. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8550` → after: `L7987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L7987) · [Before (L8550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8550)

```diff
-         return (await this.hid.getDevices()).some((ee => null !== (0, te.c)(ee.vendorId, ee.productId)))
+         return (await this.hid.getDevices()).some((WW => null !== (0, TW.d)(WW.vendorId, WW.productId)))
```

#### 759. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8559` → after: `L7996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L7996) · [Before (L8559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8559)

```diff
-         const ie = (0, te.c)(ee.vendorId, ee.productId);
+         const iW = (0, TW.d)(WW.vendorId, WW.productId);
```

#### 760. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8587` → after: `L8024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8024) · [Before (L8587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8587)

```diff
-           console.warn(`Could not turn on motion for ${ie}`, be), this.controllers.get(ee) === ye && (this.forget(ye), this.onControllersChanged())
+           console.warn(`Could not turn on motion for ${iW}`, EW), this.controllers.get(WW) === mW && (this.forget(mW), this.onControllersChanged())
```

#### 761. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8595-L8597` → after: `L8032-L8034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8032-L8034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8032-L8034) · [Before (L8595-L8597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8595-L8597)

```diff
-         if ((0, te.d)(He))
-           for (const ye of te.q[He]) await ie.receiveFeatureReport(ye).catch((ee => {
-             console.debug(`Motion controller feature report ${ye} unavailable`, ee)
+         if ((0, TW.g)(OW))
+           for (const mW of TW.z[OW]) await iW.receiveFeatureReport(mW).catch((WW => {
+             console.debug(`Motion controller feature report ${mW} unavailable`, WW)
```

#### 762. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8605` → after: `L8042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8042) · [Before (L8605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8605)

```diff
-               of te.t) await ie.sendReport(te.u, (0, te.b)(this.switchPacketCounter++, ee, He)), await new Promise((ee => {
+               of TW.D) await iW.sendReport(TW.F, (0, TW.c)(this.switchPacketCounter++, WW, OW)), await new Promise((WW => {
```

#### 763. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8610` → after: `L8047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8047) · [Before (L8610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8610)

```diff
-         const He = (0, te.j)(ee.kind, ie.reportId, ie.data, ee.device.productId);
+         const OW = (0, TW.u)(WW.kind, iW.reportId, iW.data, WW.device.productId);
```

#### 764. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8615-L8616` → after: `L8052-L8053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8052-L8053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8052-L8053) · [Before (L8615-L8616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8615-L8616)

```diff
-         if (null !== be && ye > 0 && (be = Math.max(.001, Math.min(.017, ye / He.readings.length))), null === be && null !== He.sensorClock && (0, te.d)(ee.kind)) {
-           const ie = (0, te.n)(ee.kind, ee.lastClock, He.sensorClock);
+         if (null !== EW && mW > 0 && (EW = Math.max(.001, Math.min(.017, mW / OW.readings.length))), null === EW && null !== OW.sensorClock && (0, TW.g)(WW.kind)) {
+           const iW = (0, TW.v)(WW.kind, WW.lastClock, OW.sensorClock);
```

#### 765. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8622` → after: `L8059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8059) · [Before (L8622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8622)

```diff
-             this.sink(Ke, null !== (Me = be) && void 0 !== Me ? Me : ye, `hid${ee.openedOrder}`)
+             this.sink(PW, null !== (NW = EW) && void 0 !== NW ? NW : mW, `hid${WW.openedOrder}`)
```

#### 766. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8626` → after: `L8063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8063) · [Before (L8626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8626)

```diff
-         const He = ee => 1e6 * te.i[ee.kind] + ee.openedOrder;
+         const OW = WW => 1e6 * TW.q[WW.kind] + WW.openedOrder;
```

#### 767. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8632` → after: `L8069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8069) · [Before (L8632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8632)

```diff
-     var we = He(97);
+     var hW = OW(100);
```

#### 768. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8638` → after: `L8075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8075) · [Before (L8638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8638)

```diff
-         return "number" === typeof ie ? ie : "number" === typeof window.orientation ? window.orientation : 0
+         return "number" === typeof iW ? iW : "number" === typeof window.orientation ? window.orientation : 0
```

#### 769. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8703-L8704` → after: `L8140-L8141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8140-L8141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8140-L8141) · [Before (L8703-L8704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8703-L8704)

```diff
-         XV: 0,
-         zV: 0
+         jH: 0,
+         UH: 0
```

#### 770. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8713` → after: `L8150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8150) · [Before (L8713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8713)

```diff
-           const ie = ee.gyroAiming && Ue.g.hasConnectedPad();
+           const iW = WW.gyroAiming && LW.d.hasConnectedPad();
```

#### 771. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8725` → after: `L8162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8162) · [Before (L8725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8725)

```diff
-           be.h.yR(Ve, this.getStatus())
+           EW.l.iZ(dW, this.getStatus())
```

#### 772. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8729` → after: `L8166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8166) · [Before (L8729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8729)

```diff
-             return "undefined" !== typeof navigator && window.isSecureContext && null !== (ee = navigator.hid) && void 0 !== ee ? ee : null
+             return "undefined" !== typeof navigator && window.isSecureContext && null !== (WW = navigator.hid) && void 0 !== WW ? WW : null
```

#### 773. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8738-L8740` → after: `L8175-L8177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8175-L8177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8175-L8177) · [Before (L8738-L8740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8738-L8740)

```diff
-         }), this.publishStatus) : null, be.h.subscribe(Je.g, this.syncWithSettings), Ue.g.onConnectedPadsChanged((() => {
-           this.syncWithSettings((0, Je.h)()), this.publishStatus()
-         })), this.syncWithSettings((0, Je.h)())
+         }), this.publishStatus) : null, EW.l.subscribe(wW.i, this.syncWithSettings), LW.d.onConnectedPadsChanged((() => {
+           this.syncWithSettings((0, wW.m)()), this.publishStatus()
+         })), this.syncWithSettings((0, wW.m)())
```

#### 774. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8752-L8754` → after: `L8189-L8191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8189-L8191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8189-L8191) · [Before (L8752-L8754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8752-L8754)

```diff
-           controllers: null !== (ee = null === (ie = this.hid) || void 0 === ie ? void 0 : ie.getConnectedKinds()) && void 0 !== ee ? ee : [],
-           phoneMotion: null !== (He = null === (ye = this.phone) || void 0 === ye ? void 0 : ye.getState()) && void 0 !== He ? He : "off",
-           padConnected: Ue.g.hasConnectedPad()
+           controllers: null !== (WW = null === (iW = this.hid) || void 0 === iW ? void 0 : iW.getConnectedKinds()) && void 0 !== WW ? WW : [],
+           phoneMotion: null !== (OW = null === (mW = this.phone) || void 0 === mW ? void 0 : mW.getState()) && void 0 !== OW ? OW : "off",
+           padConnected: LW.d.hasConnectedPad()
```

#### 775. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8775` → after: `L8212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8212) · [Before (L8775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8775)

```diff
-         const He = (0, Je.h)();
+         const OW = (0, wW.m)();
```

#### 776. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8783` → after: `L8220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8220) · [Before (L8783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8783)

```diff
-           return "always" === ie || He("aiming" === ie ? ye : be)
+           return "always" === iW || OW("aiming" === iW ? mW : EW)
```

#### 777. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8786-L8787` → after: `L8223-L8224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8223-L8224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8223-L8224) · [Before (L8786-L8787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8786-L8787)

```diff
-           isHeld: ee => Fe.d.isButtonHeld(ee),
-           useButton: (0, Ke.j)("use"),
+           isHeld: WW => cW.c.isButtonHeld(WW),
+           useButton: (0, PW.h)("use"),
```

#### 778. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8790-L8791` → after: `L8227-L8228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8227-L8228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8227-L8228) · [Before (L8790-L8791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8790-L8791)

```diff
-           XV: -ee.yawDeg * ie * Re,
-           zV: -ee.pitchDeg * ie * Re
+           jH: -WW.yawDeg * iW * ZW,
+           UH: -WW.pitchDeg * iW * ZW
```

#### 779. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8813` → after: `L8250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8250) · [Before (L8813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8813)

```diff
-         return (0, Me.f)(Ve, ie), (0, ye.useEffect)((() => {
+         return (0, NW.e)(dW, iW), (0, mW.useEffect)((() => {
```

#### 780. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8818` → after: `L8255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8255) · [Before (L8818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8818)

```diff
-   9588: (ee, ie, He) => {
+   10085: (WW, iW, OW) => {
```

#### 781. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8820` → after: `L8257-L8258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8257-L8258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8257-L8258) · [Before (L8820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8820)

```diff
-       b: () => ge,
+       D: () => SW,
+       F: () => sW,
```

#### 782. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8826-L8827` → after: `L8263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8263) · [Before (L8826-L8827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8826-L8827)

```diff
-       j: () => ze,
-       n: () => pe,
+       m: () => wW,
```

#### 783. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8829-L8830` → after: `L8265-L8267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8265-L8267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8265-L8267) · [Before (L8829-L8830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8829-L8830)

```diff
-       t: () => Oe,
-       u: () => Be
+       u: () => kW,
+       v: () => jW,
+       z: () => YW
```

#### 784. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8880` → after: `L8317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8317) · [Before (L8880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8880)

```diff
-         return null !== (He = null === (ye = Ke.find((He => He.vendorId === ee && He.productId === ie))) || void 0 === ye ? void 0 : ye.kind) && void 0 !== He ? He : null
+         return null !== (OW = null === (mW = PW.find((OW => OW.vendorId === WW && OW.productId === iW))) || void 0 === mW ? void 0 : mW.kind) && void 0 !== OW ? OW : null
```

#### 785. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8963` → after: `L8400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8400) · [Before (L8963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8963)

```diff
-   8962: (ee, ie, He) => {
+   9417: (WW, iW, OW) => {
```

#### 786. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8966-L8969` → after: `L8403-L8405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8403-L8405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8403-L8405) · [Before (L8966-L8969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8966-L8969)

```diff
-       h: () => Se,
-       i: () => Oe,
-       l: () => qe.n,
-       m: () => ve,
+       g: () => BW,
+       k: () => SW,
+       l: () => lW.k,
```

#### 787. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8972-L8977` → after: `L8408-L8414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8408-L8414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8408-L8414) · [Before (L8972-L8977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8972-L8977)

```diff
-       s: () => ue,
-       t: () => qe.w,
-       x: () => qe.A,
-       z: () => ne,
-       B: () => qe.F,
-       E: () => Ye
+       t: () => YW,
+       w: () => fW,
+       A: () => lW.r,
+       B: () => lW.x,
+       D: () => qW,
+       H: () => lW.B,
+       I: () => oW
```

#### 788. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8979-L8980` → after: `L8416-L8417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8416-L8417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8416-L8417) · [Before (L8979-L8980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8979-L8980)

```diff
-     var ye = He(59),
-       be = He(18),
+     var mW = OW(62),
+       EW = OW(25),
```

#### 789. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8982-L8993` → after: `L8419-L8430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8419-L8430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8419-L8430) · [Before (L8982-L8993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L8982-L8993)

```diff
-       Ke = He(1432),
-       Ue = He(1246),
-       Fe = He(8935),
-       Je = He(8971),
-       oe = He(8917),
-       Re = He(8907),
-       ke = He(8979),
-       qe = He(1385),
-       fe = He(8912),
-       Te = He(9389),
-       pe = He(4745),
-       Xe = He(107);
+       PW = OW(1526),
+       LW = OW(1294),
+       cW = OW(9384),
+       wW = OW(9421),
+       tW = OW(9373),
+       ZW = OW(9357),
+       xW = OW(9425),
+       lW = OW(1459),
+       AW = OW(9364),
+       bW = OW(9899),
+       jW = OW(5052),
+       UW = OW(117);
```

#### 790. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9004` → after: `L8441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8441) · [Before (L9004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9004)

```diff
-     const Be = ee => ee.values.flatMap(((ee, ie) => ee >= fe.S ? [String(ie)] : [])).join(",") || "none",
+     const sW = WW => WW.values.flatMap(((WW, iW) => WW >= AW.K ? [String(iW)] : [])).join(",") || "none",
```

#### 791. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9006` → after: `L8443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8443) · [Before (L9006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9006)

```diff
-         const Ke = (0, qe.g)(),
+         const PW = (0, lW.h)(),
```

#### 792. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9008-L9009` → after: `L8445-L8447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8445-L8447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8445-L8447) · [Before (L9008-L9009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9008-L9009)

```diff
-           Fe = document.hasFocus();
-         Promise.all([Promise.resolve().then((() => He(3142))), Promise.resolve().then((() => He(1268))), Promise.resolve().then((() => He(125)))]).then((He => {
+           cW = document.hasFocus(),
+           wW = "BL" === WW ? "touch HUD pad held" : "touch HUD pad released";
+         Promise.all([Promise.resolve().then((() => OW(3960))), Promise.resolve().then((() => OW(1303))), Promise.resolve().then((() => OW(136)))]).then((OW => {
```

#### 793. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9017` → after: `L8455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8455) · [Before (L9017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9017)

```diff
-           Je(ee, ie.family, null === Me ? void 0 : Math.round(Me / 1e3)), oe(`touch HUD pad ${ee}`, ge(ie, ye, be, Me, Ke, Ue, Fe, Re))
+           tW(WW, iW.family, null === NW ? void 0 : Math.round(NW / 1e3)), ZW(wW, KW(iW, mW, EW, NW, PW, LW, cW, xW))
```

#### 794. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9025` → after: `L8463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8463) · [Before (L9025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9025)

```diff
-           pad_mapping: null !== (Fe = null === He || void 0 === He ? void 0 : He.mapping) && void 0 !== Fe ? Fe : "unread",
+           pad_mapping: null !== (cW = null === OW || void 0 === OW ? void 0 : OW.mapping) && void 0 !== cW ? cW : "unread",
```

#### 795. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9036` → after: `L8474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8474) · [Before (L9036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9036)

```diff
-     const Oe = ee => !ee.repeat && !(0, Te.d)(ee.key),
+     const SW = WW => !WW.repeat && !(0, bW.e)(WW.key),
```

#### 796. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9050` → after: `L8488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8488) · [Before (L9050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9050)

```diff
-             const be = ee >= (this.buttonsDown[ye] ? fe.U : fe.S);
+             const EW = WW >= (this.buttonsDown[mW] ? AW.L : AW.K);
```

#### 797. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9055` → after: `L8493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8493) · [Before (L9055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9055)

```diff
-             Math.hypot(ee.x, ee.y) < (be ? fe.U : .3) ? this.stickAnchors[ye] = null : (!be || Math.hypot(ee.x - be.x, ee.y - be.y) >= .3) && (this.stickAnchors[ye] = {
+             Math.hypot(WW.x, WW.y) < (EW ? AW.L : .3) ? this.stickAnchors[mW] = null : (!EW || Math.hypot(WW.x - EW.x, WW.y - EW.y) >= .3) && (this.stickAnchors[mW] = {
```

#### 798. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9074-L9076` → after: `L8512-L8514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8512-L8514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8512-L8514) · [Before (L9074-L9076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9074-L9076)

```diff
-       we = (De = () => Re.g.getActiveGamepad(), new ze({
-         touchOnly: "touchOnly" === (0, Xe.b)(),
-         setMayHide: qe.x,
+       hW = (HW = () => ZW.d.getActiveGamepad(), new kW({
+         touchOnly: "touchOnly" === (0, UW.d)(),
+         setMayHide: lW.t,
```

#### 799. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9078` → after: `L8516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8516) · [Before (L9078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9078)

```diff
-           Ee("lJ", ee, ie, De(), null)
+           MW("BL", WW, iW, HW(), null)
```

#### 800. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9095` → after: `L8533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8533) · [Before (L9095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9095)

```diff
-         if (we.observe(ee, ie, Ze.isStickOffRest()), Le && Ze.wasOnlyMoveOn() && !(0, qe.n)()) return !1;
+         if (hW.observe(WW, iW, JW.isStickOffRest()), DW && JW.wasOnlyMoveOn() && !(0, lW.k)()) return !1;
```

#### 801. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9097` → after: `L8535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8535) · [Before (L9097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9097)

```diff
-         const He = !(0, qe.n)();
+         const OW = !(0, lW.k)();
```

#### 802. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9100` → after: `L8538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8538) · [Before (L9100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9100)

```diff
-         } : null), ae = !1, (0, qe.w)("gamepad"), te(!0), (0, ke.q)((0, Fe.k)()), He
+         } : null), eW = !1, (0, lW.r)("gamepad"), TW(!0), (0, xW.n)((0, cW.q)()), OW
```

#### 803. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9102` → after: `L8540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8540) · [Before (L9102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9102)

```diff
-       ve = ee => !(0, qe.n)() || ee === Pe,
+       pW = WW => !(0, lW.k)() || WW === nW,
```

#### 804. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9107-L9108` → after: `L8545-L8546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8545-L8546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8545-L8546) · [Before (L9107-L9108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9107-L9108)

```diff
-         const ee = be.e.get("activeInputDevice"),
-           ie = "gamepad" === ee ? Re.g.getActivePad() : null;
+         const WW = EW.d.get("activeInputDevice"),
+           iW = "gamepad" === WW ? ZW.d.getActivePad() : null;
```

#### 805. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9111-L9112` → after: `L8549-L8550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8549-L8550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8549-L8550) · [Before (L9111-L9112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9111-L9112)

```diff
-           inGame: (0, Ue.x)(),
-           padMovesMouse: null !== ie && (0, oe.e)(ie.id)
+           inGame: (0, LW.z)(),
+           padMovesMouse: null !== iW && (0, tW.d)(iW.id)
```

#### 806. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9122` → after: `L8560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8560) · [Before (L9122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9122)

```diff
-         const ee = new pe.d,
+         const WW = new jW.c,
```

#### 807. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9124` → after: `L8562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8562) · [Before (L9124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9124)

```diff
-             ee.reset(), Le = !1, (0, qe.w)(ie)
+             WW.reset(), DW = !1, (0, lW.r)(iW)
```

#### 808. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9129` → after: `L8567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8567) · [Before (L9129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9129)

```diff
-                 if ((0, qe.t)(ee), !Oe(ee)) return;
+                 if ((0, lW.p)(WW), !SW(WW)) return;
```

#### 809. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9155` → after: `L8593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8593) · [Before (L9155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9155)

```diff
-             if (ae = !0, te(!1), "keyboardMouse" === be.e.get("activeInputDevice")) return;
+             if (eW = !0, TW(!1), "keyboardMouse" === EW.d.get("activeInputDevice")) return;
```

#### 810. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9168` → after: `L8606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8606) · [Before (L9168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9168)

```diff
-                 inGame: Ue.inGame && (0, Je.d)(),
+                 inGame: LW.inGame && (0, wW.f)(),
```

#### 811. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9181-L9183` → after: `L8619-L8621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8619-L8621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8619-L8621) · [Before (L9181-L9183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9181-L9183)

```diff
-         const Re = Me.h.subscribe("appManagerUpdated|activeInputDevice", Fe);
-         return Fe(be.e.get("activeInputDevice")), () => {
-           window.removeEventListener("keydown", He, oe), window.removeEventListener("pointerdown", He, oe), window.removeEventListener("wheel", He, oe), window.removeEventListener("touchstart", ye, oe), window.removeEventListener("pointermove", Ue, oe), window.removeEventListener … [truncated]
+         const ZW = NW.l.subscribe("appManagerUpdated|activeInputDevice", cW);
+         return cW(EW.d.get("activeInputDevice")), () => {
+           window.removeEventListener("keydown", OW, tW), window.removeEventListener("pointerdown", OW, tW), window.removeEventListener("wheel", OW, tW), window.removeEventListener("touchstart", mW, tW), window.removeEventListener("pointermove", LW, tW), window.removeEventListener … [truncated]
```

#### 812. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9187-L9191` → after: `L8625-L8629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8625-L8629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8625-L8629) · [Before (L9187-L9191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9187-L9191)

```diff
-         const [ee, ie] = (0, ye.useState)(Fe.k);
-         return (0, Ke.f)(Fe.c, (() => {
-           ie((0, Fe.k)())
-         })), (0, Ke.f)(Re.c, (() => {
-           ie((0, Fe.k)())
+         const [WW, iW] = (0, mW.useState)(cW.q);
+         return (0, PW.e)(cW.e, (() => {
+           iW((0, cW.q)())
+         })), (0, PW.e)(ZW.c, (() => {
+           iW((0, cW.q)())
```

#### 813. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9195` → after: `L8633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8633) · [Before (L9195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9195)

```diff
-   8940: (ee, ie, He) => {
+   9393: (WW, iW, OW) => {
```

#### 814. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9197-L9198` → after: `L8635-L8636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8635-L8636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8635-L8636) · [Before (L9197-L9198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9197-L9198)

```diff
-       c: () => ye,
-       f: () => be
+       b: () => mW,
+       e: () => EW
```

#### 815. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9203` → after: `L8641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8641) · [Before (L9203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9203)

```diff
-   9428: (ee, ie, He) => {
+   9931: (WW, iW, OW) => {
```

#### 816. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9207-L9208` → after: `L8646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8646) · [Before (L9207-L9208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9207-L9208)

```diff
-       h: () => Fe,
-       j: () => Ue
+       h: () => LW
```

#### 817. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9210-L9211` → after: `L8648-L8649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8648-L8649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8648-L8649) · [Before (L9210-L9211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9210-L9211)

```diff
-     var ye = He(1432),
-       be = He(1403);
+     var mW = OW(1526),
+       EW = OW(1479);
```

#### 818. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9229` → after: `L8667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8667) · [Before (L9229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9229)

```diff
-         return (0, ye.j)(Me, null !== (ee = null === (ie = (0, be.f)()) || void 0 === ie ? void 0 : ie.getInventoryCursorState()) && void 0 !== ee ? ee : Ke)
+         return (0, mW.g)(NW, null !== (WW = null === (iW = (0, EW.h)()) || void 0 === iW ? void 0 : iW.getInventoryCursorState()) && void 0 !== WW ? WW : PW)
```

#### 819. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9233` → after: `L8671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8671) · [Before (L9233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9233)

```diff
-         return null !== (ee = null === (ie = (0, be.f)()) || void 0 === ie ? void 0 : ie.isPadSteppingSlots()) && void 0 !== ee && ee
+         return null !== (WW = null === (iW = (0, EW.h)()) || void 0 === iW ? void 0 : iW.isPadSteppingSlots()) && void 0 !== WW && WW
```

#### 820. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9236` → after: `L8674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8674) · [Before (L9236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9236)

```diff
-   9426: (ee, ie, He) => {
+   9928: (WW, iW, OW) => {
```

#### 821. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9239` → after: `L8678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8678) · [Before (L9239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9239)

```diff
-       e: () => Ue,
+       h: () => cW,
```

#### 822. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9242-L9244` → after: `L8681-L8682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8681-L8682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8681-L8682) · [Before (L9242-L9244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9242-L9244)

```diff
-       o: () => Me,
-       r: () => oe,
-       u: () => Re
+       p: () => tW,
+       s: () => ZW
```

#### 823. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9269` → after: `L8707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8707) · [Before (L9269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9269)

```diff
-         return null !== (He = null !== (ye = ee.find((ee => ee.element === ie))) && void 0 !== ye ? ye : ee.find((ee => ee.element.contains(ie)))) && void 0 !== He ? He : null
+         return null !== (OW = null !== (mW = WW.find((WW => WW.element === iW))) && void 0 !== mW ? mW : WW.find((WW => WW.element.contains(iW)))) && void 0 !== OW ? OW : null
```

#### 824. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9272` → after: `L8710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8710) · [Before (L9272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9272)

```diff
-   9430: (ee, ie, He) => {
+   9939: (WW, iW, OW) => {
```

#### 825. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9274-L9275` → after: `L8712-L8713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8712-L8713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8712-L8713) · [Before (L9274-L9275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9274-L9275)

```diff
-       e: () => Me,
-       g: () => Ke
+       b: () => NW,
+       c: () => PW
```

#### 826. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9277` → after: `L8715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8715) · [Before (L9277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9277)

```diff
-     var ye = He(59);
+     var mW = OW(62);
```

#### 827. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9281` → after: `L8719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8719) · [Before (L9281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9281)

```diff
-         return null !== (ie = null === (He = be.get(ee)) || void 0 === He ? void 0 : He.current) && void 0 !== ie ? ie : null
+         return null !== (iW = null === (OW = EW.get(WW)) || void 0 === OW ? void 0 : OW.current) && void 0 !== iW ? iW : null
```

#### 828. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9297` → after: `L8735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8735) · [Before (L9297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9297)

```diff
-   9555: (ee, ie, He) => {
+   10049: (WW, iW, OW) => {
```

#### 829. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9300-L9301` → after: `L8738-L8739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8738-L8739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8738-L8739) · [Before (L9300-L9301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9300-L9301)

```diff
-       g: () => Je,
-       h: () => Re,
+       e: () => wW,
+       i: () => ZW,
```

#### 830. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9303-L9304` → after: `L8741-L8742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8741-L8742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8741-L8742) · [Before (L9303-L9304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9303-L9304)

```diff
-       m: () => Fe,
-       n: () => qe
+       p: () => cW,
+       q: () => lW
```

#### 831. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9307-L9309` → after: `L8745-L8747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8745-L8747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8745-L8747) · [Before (L9307-L9309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9307-L9309)

```diff
-       be = He(2068),
-       Me = He(1403),
-       Ke = He(1385);
+       EW = OW(2111),
+       NW = OW(1479),
+       PW = OW(1459);
```

#### 832. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9312` → after: `L8750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8750) · [Before (L9312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9312)

```diff
-         return (0, Ke.n)() && null !== (ie = null === (He = (0, Me.f)()) || void 0 === He ? void 0 : He.getGlyphForNoaAction(ee)) && void 0 !== ie ? ie : null
+         return (0, PW.k)() && null !== (iW = null === (OW = (0, NW.h)()) || void 0 === OW ? void 0 : OW.getGlyphForNoaAction(WW)) && void 0 !== iW ? iW : null
```

#### 833. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9317` → after: `L8755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8755) · [Before (L9317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9317)

```diff
-         return null !== (ie = null === (He = (0, Me.f)()) || void 0 === He ? void 0 : He.getPadGlyphIconName(ee)) && void 0 !== ie ? ie : `${Fe}xbox/${ee}`
+         return null !== (iW = null === (OW = (0, NW.h)()) || void 0 === OW ? void 0 : OW.getPadGlyphIconName(WW)) && void 0 !== iW ? iW : `${cW}xbox/${WW}`
```

#### 834. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9322` → after: `L8760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8760) · [Before (L9322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9322)

```diff
-         return oe(ee) && null !== (ie = null === (He = (0, Me.f)()) || void 0 === He ? void 0 : He.getPadGlyphIconUrl(ee)) && void 0 !== ie ? ie : null
+         return tW(WW) && null !== (iW = null === (OW = (0, NW.h)()) || void 0 === OW ? void 0 : OW.getPadGlyphIconUrl(WW)) && void 0 !== iW ? iW : null
```

#### 835. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9324` → after: `L8762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8762) · [Before (L9324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9324)

```diff
-       ke = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", Ke.c, be.f, be.e],
+       xW = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", PW.d, EW.e, EW.b],
```

#### 836. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9326` → after: `L8764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8764) · [Before (L9326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9326)

```diff
-         const ie = ke.map((ie => ye.h.subscribe(ie, ee)));
+         const iW = xW.map((iW => mW.l.subscribe(iW, WW)));
```

#### 837. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9328` → after: `L8766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8766) · [Before (L9328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9328)

```diff
-           for (const ee of ie) ye.h.unsubscribe(ee)
+           for (const WW of iW) mW.l.unsubscribe(WW)
```

#### 838. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9332-L9340` → after: `L8770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8770) · [Before (L9332-L9340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9332-L9340)

```diff
-   9413: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => be,
-       e: () => ye
-     });
-     const ye = "controllerOpenKeyboard",
-       be = "controllerKeyboardVisible"
-   },
-   8971: (ee, ie, He) => {
+   9421: (WW, iW, OW) => {
```

#### 839. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9343-L9345` → after: `L8773-L8775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8773-L8775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8773-L8775) · [Before (L9343-L9345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9343-L9345)

```diff
-       d: () => oe,
-       e: () => Fe,
-       g: () => Ue
+       f: () => tW,
+       j: () => cW,
+       k: () => LW
```

#### 840. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9347-L9349` → after: `L8777-L8779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8777-L8779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8777-L8779) · [Before (L9347-L9349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9347-L9349)

```diff
-     var ye = He(18),
-       be = He(1620),
-       Me = He(1774);
+     var mW = OW(25),
+       EW = OW(1729),
+       NW = OW(1864);
```

#### 841. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9351` → after: `L8781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8781) · [Before (L9351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9351)

```diff
-       Ue = (ee, ie) => (Ke.has(ee) && console.warn(`Gameplay blocker "${ee}" registered twice; the newer one replaces it.`), Ke.set(ee, ie), () => {
+       LW = (WW, iW) => (PW.has(WW) && console.warn(`Gameplay blocker "${WW}" registered twice; the newer one replaces it.`), PW.set(WW, iW), () => {
```

#### 842. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9354` → after: `L8784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8784) · [Before (L9354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9354)

```diff
-       Fe = () => (0, Me.e)(document.activeElement),
+       cW = () => (0, NW.b)(document.activeElement),
```

#### 843. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9363` → after: `L8793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8793) · [Before (L9363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9363)

```diff
-         return "inGame" === ye.e.get("gameState") && (!(0, be.o)() && (!Fe() && null === Je(ee)))
+         return "inGame" === mW.d.get("gameState") && (!(0, EW.l)() && (!cW() && null === wW(WW)))
```

#### 844. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9366` → after: `L8796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8796) · [Before (L9366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9366)

```diff
-   8912: (ee, ie, He) => {
+   9364: (WW, iW, OW) => {
```

#### 845. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9372` → after: `L8806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8806) · [Before (L9372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9372)

```diff
-       N: () => pe,
+       M: () => EW,
```

#### 846. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9374-L9375` → after: `L8808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8808) · [Before (L9374-L9375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9374-L9375)

```diff
-       S: () => ke,
-       U: () => qe,
+       R: () => SW,
```

#### 847. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9379-L9381` → after: `L8811-L8812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8811-L8812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8811-L8812) · [Before (L9379-L9381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9379-L9381)

```diff
-       bb: () => we,
-       cb: () => Ae,
-       e: () => Ye,
+       ab: () => KW,
+       b: () => oW,
```

#### 848. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9383-L9385` → after: `L8814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8814) · [Before (L9383-L9385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9383-L9385)

```diff
-       g: () => oe,
-       gb: () => ge,
-       k: () => Fe,
+       h: () => tW,
```

#### 849. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9387` → after: `L8816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8816) · [Before (L9387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9387)

```diff
-       n: () => We,
+       m: () => LW,
```

#### 850. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9389` → after: `L8818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8818) · [Before (L9389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9389)

```diff
-       s: () => de,
+       t: () => kW,
```

#### 851. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9434` → after: `L8864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8864) · [Before (L9434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9434)

```diff
-           return "linear" === ie ? He : He * He
+           return "linear" === iW ? OW : OW * OW
```

#### 852. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9475` → after: `L8905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8905) · [Before (L9475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9475)

```diff
-         this.readTiming = ee, this.lJ = !1, this.timing = null, this.nextFireMs = 0
+         this.readTiming = WW, this.BL = !1, this.timing = null, this.nextFireMs = 0
```

#### 853. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9478` → after: `L8908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8908) · [Before (L9478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9478)

```diff
-         return ee ? this.lJ ? !!(this.timing && ie >= this.nextFireMs) && (this.nextFireMs = ie + this.timing.intervalMs, !0) : (this.lJ = !0, this.timing = this.readTiming(), this.nextFireMs = ie + (null !== (He = null === (ye = this.timing) || void 0 === ye ? void 0 : ye.initia … [truncated]
+         return WW ? this.BL ? !!(this.timing && iW >= this.nextFireMs) && (this.nextFireMs = iW + this.timing.intervalMs, !0) : (this.BL = !0, this.timing = this.readTiming(), this.nextFireMs = iW + (null !== (OW = null === (mW = this.timing) || void 0 === mW ? void 0 : mW.initia … [truncated]
```

#### 854. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9482` → after: `L8912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8912) · [Before (L9482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9482)

```diff
-         this.lJ = !1
+         this.BL = !1
```

#### 855. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9498` → after: `L8928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8928) · [Before (L9498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9498)

```diff
-         return ee !== this.direction && (this.timer.reset(), this.direction = ee), this.timer.update(null !== ee, ie) ? ee : null
+         return WW !== this.direction && (this.timer.reset(), this.direction = WW), this.timer.update(null !== WW, iW) ? WW : null
```

#### 856. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9505` → after: `L8935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8935) · [Before (L9505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9505)

```diff
-   9434: (ee, ie, He) => {
+   9942: (WW, iW, OW) => {
```

#### 857. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9507-L9508` → after: `L8937-L8938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8937-L8938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8937-L8938) · [Before (L9507-L9508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9507-L9508)

```diff
-       d: () => be,
-       h: () => Me
+       e: () => EW,
+       g: () => NW
```

#### 858. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9516` → after: `L8946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8946) · [Before (L9516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9516)

```diff
-   9392: (ee, ie, He) => {
+   9905: (WW, iW, OW) => {
```

#### 859. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9518-L9519` → after: `L8948-L8949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8948-L8949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8948-L8949) · [Before (L9518-L9519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9518-L9519)

```diff
-       b: () => Ke,
-       d: () => Me
+       c: () => PW,
+       f: () => NW
```

#### 860. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9521-L9523` → after: `L8951-L8953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8951-L8953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8951-L8953) · [Before (L9521-L9523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9521-L9523)

```diff
-     var ye = He(8935),
-       be = He(8912);
-     const Me = ee => (0, be.bb)(ee, (0, ye.h)().buttonRepeat),
+     var mW = OW(9384),
+       EW = OW(9364);
+     const NW = WW => (0, EW.V)(WW, (0, mW.m)().buttonRepeat),
```

#### 861. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9526` → after: `L8956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8956) · [Before (L9526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9526)

```diff
-   8946: (ee, ie, He) => {
+   9407: (WW, iW, OW) => {
```

#### 862. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9528-L9530` → after: `L8958-L8960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8958-L8960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8958-L8960) · [Before (L9528-L9530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9528-L9530)

```diff
-       c: () => Fe,
-       e: () => Me,
-       f: () => Ue
+       b: () => cW,
+       f: () => NW,
+       g: () => LW
```

#### 863. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9533-L9534` → after: `L8963-L8964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8963-L8964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8963-L8964) · [Before (L9533-L9534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9533-L9534)

```diff
-       be = He(8935);
-     const Me = (ee, ie) => "OpenShop" === ee ? "shop" === ie : "OpenLobbyLeaderboard" !== ee || "leaderboard" === ie;
+       EW = OW(9384);
+     const NW = (WW, iW) => "OpenShop" === WW ? "shop" === iW : "OpenLobbyLeaderboard" !== WW || "leaderboard" === iW;
```

#### 864. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9537` → after: `L8967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8967) · [Before (L9537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9537)

```diff
-         ee !== Ke && (Ke = ee, ye.h.yR(be.c, (0, be.h)()))
+         WW !== PW && (PW = WW, mW.l.iZ(EW.e, (0, EW.m)()))
```

#### 865. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9539` → after: `L8969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8969) · [Before (L9539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9539)

```diff
-       Fe = () => ((ee, ie) => "shop" === ee && ie ? "shop" : "leaderboard")((0, be.h)().leaderboardButton, Ke)
+       cW = () => ((WW, iW) => "shop" === WW && iW ? "shop" : "leaderboard")((0, EW.m)().leaderboardButton, PW)
```

#### 866. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9541` → after: `L8971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8971) · [Before (L9541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9541)

```diff
-   8944: (ee, ie, He) => {
+   9400: (WW, iW, OW) => {
```

#### 867. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9545-L9546` → after: `L8976-L8978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8976-L8978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8976-L8978) · [Before (L9545-L9546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9545-L9546)

```diff
-       F: () => Re,
-       I: () => Ee,
+       D: () => ZW,
+       G: () => MW,
+       J: () => wW,
```

#### 868. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9549` → after: `L8981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8981) · [Before (L9549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9549)

```diff
-       R: () => Ze,
+       S: () => sW,
```

#### 869. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9552-L9553` → after: `L8984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8984) · [Before (L9552-L9553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9552-L9553)

```diff
-       bb: () => fe,
-       c: () => ae,
+       Y: () => AW,
```

#### 870. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9555-L9556` → after: `L8986-L8987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8986-L8987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8986-L8987) · [Before (L9555-L9556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9555-L9556)

```diff
-       e: () => we,
-       fb: () => ze,
+       db: () => uW,
+       eb: () => NW,
```

#### 871. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9562-L9565` → after: `L8993-L8995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8993-L8995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8993-L8995) · [Before (L9562-L9565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9562-L9565)

```diff
-       m: () => Ye,
-       n: () => Ve,
-       ob: () => Oe,
-       q: () => oe,
+       mb: () => yW,
+       o: () => TW,
+       p: () => YW,
```

#### 872. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9567-L9569` → after: `L8997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L8997) · [Before (L9567-L9569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9567-L9569)

```diff
-       sb: () => ce,
-       t: () => Ue,
-       tb: () => We,
+       v: () => dW,
```

#### 873. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9573-L9574` → after: `L9003-L9004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9003-L9004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9003-L9004) · [Before (L9573-L9574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9573-L9574)

```diff
-     var ye = He(8932),
-       be = He(8912);
+     var mW = OW(9382),
+       EW = OW(9364);
```

#### 874. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9606` → after: `L9036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9036) · [Before (L9606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9606)

```diff
-       Re = ee => `${Math.round(ee)}%`,
+       ZW = WW => `${Math.round(WW)}%`,
```

#### 875. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9608` → after: `L9038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9038) · [Before (L9608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9608)

```diff
-       qe = ee => `${ee.toFixed(1)}\xd7`,
+       lW = WW => `${WW.toFixed(1)}\xd7`,
```

#### 876. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9787` → after: `L9218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9218) · [Before (L9787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9787)

```diff
-       Ae = ye.e.map((ee => {
+       uW = mW.h.map((WW => {
```

#### 877. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9801` → after: `L9232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9232) · [Before (L9801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9801)

```diff
-       Ye = be.W.filter((ee => "Home" !== ee)),
+       oW = EW.Q.filter((WW => "Home" !== WW)),
```

#### 878. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9812` → after: `L9243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9243) · [Before (L9812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9812)

```diff
-         const ye = ie - (null !== (He = this.startMs) && void 0 !== He ? He : ie) >= 250;
+         const mW = iW - (null !== (OW = this.startMs) && void 0 !== OW ? OW : iW) >= 250;
```

#### 879. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9855` → after: `L9286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9286) · [Before (L9855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9855)

```diff
-           lJ: ye
+           BL: mW
```

#### 880. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9865` → after: `L9296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9296) · [Before (L9865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9865)

```diff
-   9446: (ee, ie, He) => {
+   9954: (WW, iW, OW) => {
```

#### 881. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9867-L9868` → after: `L9298-L9299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9298-L9299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9298-L9299) · [Before (L9867-L9868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9867-L9868)

```diff
-       c: () => Me,
-       g: () => be
+       d: () => NW,
+       e: () => EW
```

#### 882. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9885` → after: `L9316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9316) · [Before (L9885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9885)

```diff
-   5544: (ee, ie, He) => {
+   5940: (WW, iW, OW) => {
```

#### 883. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9890` → after: `L9321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9321) · [Before (L9890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9890)

```diff
-     var ye = He(59);
+     var mW = OW(62);
```

#### 884. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9895` → after: `L9326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9326) · [Before (L9895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9895)

```diff
-         return He && null !== (ie = be.get(He)) && void 0 !== ie ? ie : null
+         return OW && null !== (iW = EW.get(OW)) && void 0 !== iW ? iW : null
```

#### 885. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9916` → after: `L9347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9347) · [Before (L9916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9916)

```diff
-   9539: (ee, ie, He) => {
+   10038: (WW, iW, OW) => {
```

#### 886. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9921` → after: `L9352-L9353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9352-L9353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9352-L9353) · [Before (L9921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9921)

```diff
-       m: () => ye,
+       j: () => mW,
+       l: () => LW,
```

#### 887. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9923-L9924` → after: `L9355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9355) · [Before (L9923-L9924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9923-L9924)

```diff
-       q: () => Je,
-       u: () => oe
+       s: () => tW
```

#### 888. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9937` → after: `L9368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9368) · [Before (L9937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9937)

```diff
-   9531: (ee, ie, He) => {
+   10033: (WW, iW, OW) => {
```

#### 889. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9939-L9940` → after: `L9370-L9371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9370-L9371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9370-L9371) · [Before (L9939-L9940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9939-L9940)

```diff
-       c: () => Me,
-       g: () => be
+       e: () => NW,
+       h: () => EW
```

#### 890. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9948` → after: `L9379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9379) · [Before (L9948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9948)

```diff
-   9443: (ee, ie, He) => {
+   9952: (WW, iW, OW) => {
```

#### 891. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9955` → after: `L9386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9386) · [Before (L9955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9955)

```diff
-       r: () => Je
+       s: () => wW
```

#### 892. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9967` → after: `L9398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9398) · [Before (L9967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9967)

```diff
-   9453: (ee, ie, He) => {
+   9963: (WW, iW, OW) => {
```

#### 893. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9969-L9970` → after: `L9400-L9401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9400-L9401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9400-L9401) · [Before (L9969-L9970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9969-L9970)

```diff
-       d: () => Me,
-       f: () => be
+       b: () => NW,
+       e: () => EW
```

#### 894. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9978` → after: `L9409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9409) · [Before (L9978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9978)

```diff
-           "Air" === Ue && ye.h.yR(be)
+           "Air" === LW && mW.l.iZ(EW)
```

#### 895. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9983-L10058` → after: `L9414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9414) · [Before (L9983-L10058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L9983-L10058)

```diff
-   9609: (ee, ie, He) => {
-     He.d(ie, {
-       d: () => Ue,
-       h: () => Fe
-     });
-     var ye = He(18),
-       be = He(1305),
-       Me = He(97);
-     const Ke = {
-       blockMined: {
-         pattern: [18],
-         priority: 1,
-         minGapMs: 120
-       },
-       hitLanded: {
-         pattern: [20],
- ... (60 more removed lines; see GitHub link above)
+   9957: (WW, iW, OW) => {
```

#### 896. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10060` → after: `L9416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9416) · [Before (L10060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10060)

```diff
-       d: () => be
+       e: () => EW
```

#### 897. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10062` → after: `L9418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9418) · [Before (L10062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10062)

```diff
-     var ye = He(1198);
+     var mW = OW(1250);
```

#### 898. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10067` → after: `L9423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9423) · [Before (L10067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10067)

```diff
-         const He = (0, ye.c)();
+         const OW = (0, mW.e)();
```

#### 899. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10077` → after: `L9433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9433) · [Before (L10077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10077)

```diff
-   9505: (ee, ie, He) => {
+   9997: (WW, iW, OW) => {
```

#### 900. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10081-L10083` → after: `L9437-L9439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9437-L9439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9437-L9439) · [Before (L10081-L10083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10081-L10083)

```diff
-     var ye = He(9509),
-       be = He(610),
-       Me = He(125);
+     var mW = OW(10006),
+       EW = OW(643),
+       NW = OW(136);
```

#### 901. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10087` → after: `L9443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9443) · [Before (L10087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10087)

```diff
-       if ((0, be.P)(ee)) return !0;
+       if ((0, EW.K)(WW)) return !0;
```

#### 902. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10093` → after: `L9449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9449) · [Before (L10093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10093)

```diff
-             if ((0, ye.i)(ie.items[ee], Ke)) return !1
+             if ((0, mW.g)(iW.items[WW], PW)) return !1
```

#### 903. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10098-L10226` → after: `L9454-L9455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9454-L9455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9454-L9455) · [Before (L10098-L10226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10098-L10226)

```diff
-   9509: (ee, ie, He) => {
-     function ye(ee, ie) {
-       return !ee.hidden && (ie || !ee.isRewardedAd)
-     }
- 
-     function be(ee) {
-       return "object" === typeof ee ? ee.option : ee
-     }
- 
-     function Me(ee, ie) {
-       var He;
-       if ("dropdown" === (null === (He = ee.userInput) || void 0 === He ? void 0 : He.type) && "object" === typeof ee.userInput.dropdownOptions[0]) {
-         for (const He of ee.userInput.dropdownOptions)
-           if (be(He) === ie) return "object" === typeof He ? He.cost : ee.cost;
-         console.error("Didn't find matching option for dropdown item. Item:", ee, "input:", ie)
-       }
- ... (113 more removed lines; see GitHub link above)
+   10046: () => {},
+   9442: (WW, iW, OW) => {
```

#### 904. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10229` → after: `L9458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9458) · [Before (L10229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10229)

```diff
-   8996: (ee, ie, He) => {
+   9445: (WW, iW, OW) => {
```

#### 905. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10232` → after: `L9461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9461) · [Before (L10232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10232)

```diff
-   8998: (ee, ie, He) => {
+   9451: (WW, iW, OW) => {
```

#### 906. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10235` → after: `L9464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9464) · [Before (L10235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10235)

```diff
-   9004: (ee, ie, He) => {
+   9456: (WW, iW, OW) => {
```

#### 907. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10238` → after: `L9467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9467) · [Before (L10238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10238)

```diff
-   9011: (ee, ie, He) => {
+   9461: (WW, iW, OW) => {
```

#### 908. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10241` → after: `L9470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9470) · [Before (L10241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10241)

```diff
-   9014: (ee, ie, He) => {
+   9468: (WW, iW, OW) => {
```

#### 909. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10244` → after: `L9473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9473) · [Before (L10244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10244)

```diff
-   9016: (ee, ie, He) => {
+   9476: (WW, iW, OW) => {
```

#### 910. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10247` → after: `L9476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9476) · [Before (L10247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10247)

```diff
-   9020: (ee, ie, He) => {
+   9485: (WW, iW, OW) => {
```

#### 911. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10250` → after: `L9479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9479) · [Before (L10250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10250)

```diff
-   9024: (ee, ie, He) => {
+   9493: (WW, iW, OW) => {
```

#### 912. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10253` → after: `L9482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9482) · [Before (L10253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10253)

```diff
-   9033: (ee, ie, He) => {
+   9496: (WW, iW, OW) => {
```

#### 913. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10256` → after: `L9485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9485) · [Before (L10256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10256)

```diff
-   9037: (ee, ie, He) => {
+   9501: (WW, iW, OW) => {
```

#### 914. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10259` → after: `L9488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9488) · [Before (L10259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10259)

```diff
-   9042: (ee, ie, He) => {
+   9508: (WW, iW, OW) => {
```

#### 915. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10262` → after: `L9491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9491) · [Before (L10262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10262)

```diff
-   9049: (ee, ie, He) => {
+   9517: (WW, iW, OW) => {
```

#### 916. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10265` → after: `L9494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9494) · [Before (L10265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10265)

```diff
-   9058: (ee, ie, He) => {
+   9520: (WW, iW, OW) => {
```

#### 917. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10268` → after: `L9497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9497) · [Before (L10268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10268)

```diff
-   9062: (ee, ie, He) => {
+   9523: (WW, iW, OW) => {
```

#### 918. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10271` → after: `L9500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9500) · [Before (L10271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10271)

```diff
-   9069: (ee, ie, He) => {
+   9526: (WW, iW, OW) => {
```

#### 919. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10274` → after: `L9503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9503) · [Before (L10274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10274)

```diff
-   9072: (ee, ie, He) => {
+   9531: (WW, iW, OW) => {
```

#### 920. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10277` → after: `L9506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9506) · [Before (L10277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10277)

```diff
-   9074: (ee, ie, He) => {
+   9535: (WW, iW, OW) => {
```

#### 921. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10280` → after: `L9509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9509) · [Before (L10280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10280)

```diff
-   9083: (ee, ie, He) => {
+   9544: (WW, iW, OW) => {
```

#### 922. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10283` → after: `L9512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9512) · [Before (L10283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10283)

```diff
-   9085: (ee, ie, He) => {
+   9551: (WW, iW, OW) => {
```

#### 923. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10286` → after: `L9515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9515) · [Before (L10286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10286)

```diff
-   9093: (ee, ie, He) => {
+   9560: (WW, iW, OW) => {
```

#### 924. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10289` → after: `L9518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9518) · [Before (L10289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10289)

```diff
-   9098: (ee, ie, He) => {
+   9564: (WW, iW, OW) => {
```

#### 925. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10292` → after: `L9521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9521) · [Before (L10292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10292)

```diff
-   9106: (ee, ie, He) => {
+   9569: (WW, iW, OW) => {
```

#### 926. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10295` → after: `L9524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9524) · [Before (L10295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10295)

```diff
-   9114: (ee, ie, He) => {
+   9578: (WW, iW, OW) => {
```

#### 927. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10298` → after: `L9527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9527) · [Before (L10298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10298)

```diff
-   9117: (ee, ie, He) => {
+   9584: (WW, iW, OW) => {
```

#### 928. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10301` → after: `L9530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9530) · [Before (L10301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10301)

```diff
-   9124: (ee, ie, He) => {
+   9589: (WW, iW, OW) => {
```

#### 929. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10304` → after: `L9533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9533) · [Before (L10304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10304)

```diff
-   9126: (ee, ie, He) => {
+   9593: (WW, iW, OW) => {
```

#### 930. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10307` → after: `L9536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9536) · [Before (L10307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10307)

```diff
-   9130: (ee, ie, He) => {
+   9602: (WW, iW, OW) => {
```

#### 931. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10310` → after: `L9539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9539) · [Before (L10310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10310)

```diff
-   9134: (ee, ie, He) => {
+   9611: (WW, iW, OW) => {
```

#### 932. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10313` → after: `L9542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9542) · [Before (L10313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10313)

```diff
-   9139: (ee, ie, He) => {
+   9620: (WW, iW, OW) => {
```

#### 933. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10316` → after: `L9545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9545) · [Before (L10316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10316)

```diff
-   9146: (ee, ie, He) => {
+   9626: (WW, iW, OW) => {
```

#### 934. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10319` → after: `L9548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9548) · [Before (L10319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10319)

```diff
-   9152: (ee, ie, He) => {
+   9631: (WW, iW, OW) => {
```

#### 935. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10322` → after: `L9551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9551) · [Before (L10322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10322)

```diff
-   9161: (ee, ie, He) => {
+   9637: (WW, iW, OW) => {
```

#### 936. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10325` → after: `L9554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9554) · [Before (L10325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10325)

```diff
-   9165: (ee, ie, He) => {
+   9644: (WW, iW, OW) => {
```

#### 937. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10328` → after: `L9557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9557) · [Before (L10328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10328)

```diff
-   9173: (ee, ie, He) => {
+   9652: (WW, iW, OW) => {
```

#### 938. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10331` → after: `L9560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9560) · [Before (L10331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10331)

```diff
-   9178: (ee, ie, He) => {
+   9657: (WW, iW, OW) => {
```

#### 939. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10334` → after: `L9563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9563) · [Before (L10334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10334)

```diff
-   9183: (ee, ie, He) => {
+   9666: (WW, iW, OW) => {
```

#### 940. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10337` → after: `L9566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9566) · [Before (L10337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10337)

```diff
-   9186: (ee, ie, He) => {
+   9668: (WW, iW, OW) => {
```

#### 941. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10340` → after: `L9569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9569) · [Before (L10340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10340)

```diff
-   9188: (ee, ie, He) => {
+   9673: (WW, iW, OW) => {
```

#### 942. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10343` → after: `L9572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9572) · [Before (L10343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10343)

```diff
-   9195: (ee, ie, He) => {
+   9677: (WW, iW, OW) => {
```

#### 943. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10346` → after: `L9575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9575) · [Before (L10346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10346)

```diff
-   9204: (ee, ie, He) => {
+   9685: (WW, iW, OW) => {
```

#### 944. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10349` → after: `L9578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9578) · [Before (L10349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10349)

```diff
-   9207: (ee, ie, He) => {
+   9693: (WW, iW, OW) => {
```

#### 945. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10352` → after: `L9581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9581) · [Before (L10352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10352)

```diff
-   9216: (ee, ie, He) => {
+   9695: (WW, iW, OW) => {
```

#### 946. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10355` → after: `L9584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9584) · [Before (L10355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10355)

```diff
-   9219: (ee, ie, He) => {
+   9700: (WW, iW, OW) => {
```

#### 947. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10358` → after: `L9587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9587) · [Before (L10358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10358)

```diff
-   9221: (ee, ie, He) => {
+   9706: (WW, iW, OW) => {
```

#### 948. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10361` → after: `L9590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9590) · [Before (L10361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10361)

```diff
-   9226: (ee, ie, He) => {
+   9712: (WW, iW, OW) => {
```

#### 949. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10364` → after: `L9593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9593) · [Before (L10364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10364)

```diff
-   9230: (ee, ie, He) => {
+   9716: (WW, iW, OW) => {
```

#### 950. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10367` → after: `L9596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9596) · [Before (L10367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10367)

```diff
-   9233: (ee, ie, He) => {
+   9721: (WW, iW, OW) => {
```

#### 951. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10370` → after: `L9599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9599) · [Before (L10370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10370)

```diff
-   9242: (ee, ie, He) => {
+   9729: (WW, iW, OW) => {
```

#### 952. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10373` → after: `L9602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9602) · [Before (L10373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10373)

```diff
-   9249: (ee, ie, He) => {
+   9736: (WW, iW, OW) => {
```

#### 953. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10376` → after: `L9605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9605) · [Before (L10376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10376)

```diff
-   9251: (ee, ie, He) => {
+   9744: (WW, iW, OW) => {
```

#### 954. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10379` → after: `L9608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9608) · [Before (L10379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10379)

```diff
-   9253: (ee, ie, He) => {
+   9751: (WW, iW, OW) => {
```

#### 955. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10382` → after: `L9611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9611) · [Before (L10382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10382)

```diff
-   9256: (ee, ie, He) => {
+   9758: (WW, iW, OW) => {
```

#### 956. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10385` → after: `L9614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9614) · [Before (L10385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10385)

```diff
-   9263: (ee, ie, He) => {
+   9765: (WW, iW, OW) => {
```

#### 957. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10388` → after: `L9617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9617) · [Before (L10388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10388)

```diff
-   9267: (ee, ie, He) => {
+   9770: (WW, iW, OW) => {
```

#### 958. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10391` → after: `L9620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9620) · [Before (L10391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10391)

```diff
-   9269: (ee, ie, He) => {
+   9779: (WW, iW, OW) => {
```

#### 959. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10394` → after: `L9623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9623) · [Before (L10394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10394)

```diff
-   9278: (ee, ie, He) => {
+   9784: (WW, iW, OW) => {
```

#### 960. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10397` → after: `L9626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9626) · [Before (L10397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10397)

```diff
-   9286: (ee, ie, He) => {
+   9791: (WW, iW, OW) => {
```

#### 961. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10400` → after: `L9629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9629) · [Before (L10400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10400)

```diff
-   9292: (ee, ie, He) => {
+   9794: (WW, iW, OW) => {
```

#### 962. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10403` → after: `L9632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9632) · [Before (L10403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10403)

```diff
-   9297: (ee, ie, He) => {
+   9798: (WW, iW, OW) => {
```

#### 963. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10406` → after: `L9635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9635) · [Before (L10406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10406)

```diff
-   9299: (ee, ie, He) => {
+   9804: (WW, iW, OW) => {
```

#### 964. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10409` → after: `L9638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9638) · [Before (L10409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10409)

```diff
-   9305: (ee, ie, He) => {
+   9809: (WW, iW, OW) => {
```

#### 965. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10412` → after: `L9641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9641) · [Before (L10412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10412)

```diff
-   9309: (ee, ie, He) => {
+   9812: (WW, iW, OW) => {
```

#### 966. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10415` → after: `L9644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9644) · [Before (L10415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10415)

```diff
-   9315: (ee, ie, He) => {
+   9818: (WW, iW, OW) => {
```

#### 967. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10418` → after: `L9647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9647) · [Before (L10418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10418)

```diff
-   9322: (ee, ie, He) => {
+   9827: (WW, iW, OW) => {
```

#### 968. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10421` → after: `L9650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9650) · [Before (L10421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10421)

```diff
-   9329: (ee, ie, He) => {
+   9831: (WW, iW, OW) => {
```

#### 969. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10424` → after: `L9653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9653) · [Before (L10424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10424)

```diff
-   9331: (ee, ie, He) => {
+   9836: (WW, iW, OW) => {
```

#### 970. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10427` → after: `L9656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9656) · [Before (L10427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10427)

```diff
-   9335: (ee, ie, He) => {
+   9845: (WW, iW, OW) => {
```

#### 971. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10430` → after: `L9659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9659) · [Before (L10430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10430)

```diff
-   9339: (ee, ie, He) => {
+   9853: (WW, iW, OW) => {
```

#### 972. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10433` → after: `L9662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9662) · [Before (L10433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10433)

```diff
-   9343: (ee, ie, He) => {
+   9858: (WW, iW, OW) => {
```

#### 973. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10436` → after: `L9665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9665) · [Before (L10436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10436)

```diff
-   9345: (ee, ie, He) => {
+   9860: (WW, iW, OW) => {
```

#### 974. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10439` → after: `L9668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9668) · [Before (L10439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10439)

```diff
-   9352: (ee, ie, He) => {
+   9866: (WW, iW, OW) => {
```

#### 975. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10442` → after: `L9671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9671) · [Before (L10442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10442)

```diff
-   9360: (ee, ie, He) => {
+   9870: (WW, iW, OW) => {
```

#### 976. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10445` → after: `L9674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9674) · [Before (L10445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10445)

```diff
-   9365: (ee, ie, He) => {
+   9879: (WW, iW, OW) => {
```

#### 977. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10448` → after: `L9677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9677) · [Before (L10448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10448)

```diff
-   9374: (ee, ie, He) => {
+   9888: (WW, iW, OW) => {
```

#### 978. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L10451` → after: `L9680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/controller.js#L9680) · [Before (L10451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/controller.js#L10451)

```diff
-   9383: (ee, ie, He) => {
+   9891: (WW, iW, OW) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (15 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00)

#### 1. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L1-L2` → after: `L1-L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L1-L2) · [Before (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L1-L2)

```diff
- export const id = 34;
- export const ids = [34];
+ export const id = 35;
+ export const ids = [35];
```

#### 2. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L4)

```diff
-   34738: (ee, ie, He) => {
+   35106: (WW, iW, OW) => {
```

#### 3. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L9-L14` → after: `L9-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L9-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L9-L14) · [Before (L9-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L9-L14)

```diff
-     var ye = He(645),
-       be = He(97),
-       Me = He(125),
-       Ke = He(123),
-       Ue = He(3586),
-       Fe = He(691);
+     var mW = OW(671),
+       EW = OW(100),
+       NW = OW(136),
+       PW = OW(131),
+       LW = OW(4440),
+       cW = OW(713);
```

#### 4. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L19-L21` → after: `L19-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L19-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L19-L21) · [Before (L19-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L19-L21)

```diff
-         if (null !== ee.appIosVersion) return `${ee.appIosVersion} (the iOS app's)`;
-         const ie = (0, Fe.b)(ee.userAgent);
-         if (null !== ie) return `${ie} (the in-app browser's iOS token)`;
+         if (null !== WW.appIosVersion) return `${WW.appIosVersion} (the iOS app's)`;
+         const iW = (0, cW.d)(WW.userAgent);
+         if (null !== iW) return `${iW} (the in-app browser's iOS token)`;
```

#### 5. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L26` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L26) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L26)

```diff
-         if ("Safari" === He.name && He.version) return `${He.version} (Safari's version, which follows iOS)`;
+         if ("Safari" === OW.name && OW.version) return `${OW.version} (Safari's version, which follows iOS)`;
```

#### 6. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L30)

```diff
-         return Me < 18 || 18 === Me && Ke < 6 ? `${be} (user agent)` : `? (the user agent says ${be}, frozen from iOS 26)`
+         return NW < 18 || 18 === NW && PW < 6 ? `${EW} (user agent)` : `? (the user agent says ${EW}, frozen from iOS 26)`
```

#### 7. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L33` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L33) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L33)

```diff
-       if (ie) return "windows" === ee.os ? `${ie} (${function(ee){const ie=parseInt(ee,10);if(ie>=13)return"Windows 11";return ie>=1?"Windows 10":"Windows 8.1 or older"}(ie)}, client hints)` : `${ie} (client hints)`;
+       if (iW) return "windows" === WW.os ? `${iW} (${function(WW){const iW=parseInt(WW,10);if(iW>=13)return"Windows 11";return iW>=1?"Windows 10":"Windows 8.1 or older"}(iW)}, client hints)` : `${iW} (client hints)`;
```

#### 8. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L35` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L35) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L35)

```diff
-       return He ? Je.has(He) ? `${He} (user agent, which may be frozen)` : `${He} (user agent)` : "?"
+       return OW ? wW.has(OW) ? `${OW} (user agent, which may be frozen)` : `${OW} (user agent)` : "?"
```

#### 9. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L40` → after: `L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L40) · [Before (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L40)

```diff
-       const He = (null !== (ie = ee.fullVersionList) && void 0 !== ie ? ie : []).filter((ee => {
+       const OW = (null !== (iW = WW.fullVersionList) && void 0 !== iW ? iW : []).filter((WW => {
```

#### 10. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L50` → after: `L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L50) · [Before (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L50)

```diff
-         return `${ie} ${He}`
+         return `${iW} ${OW}`
```

#### 11. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L52` → after: `L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L52) · [Before (L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L52)

```diff
-       return `${ee.platform} ${ee.platformVersion||"?"}, ${He.join(", ")||"?"}, ${ee.architecture||"?"} ${ee.bitness||"?"}-bit, model ${ee.model||"?"}, mobile ${ee.mobile}`
+       return `${WW.platform} ${WW.platformVersion||"?"}, ${OW.join(", ")||"?"}, ${WW.architecture||"?"} ${WW.bitness||"?"}-bit, model ${WW.model||"?"}, mobile ${WW.mobile}`
```

#### 12. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L60` → after: `L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L60) · [Before (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L60)

```diff
-       ke = `failed (${String(ee)})`
+       xW = `failed (${String(WW)})`
```

#### 13. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L64-L67` → after: `L64-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L64-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L64-L67) · [Before (L64-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L64-L67)

```diff
-       const ee = (0, Ke.D)(),
-         ie = null !== ee && void 0 !== ee ? ee : (0, Ke.p)(),
-         He = (0, Ke.n)();
-       return [ie ? `webgl ${ie.vendor} / ${ie.renderer} (${ee?"the renderer's context":"a probe"})` : "webgl ?", He ? `webgpu adapter ${He.vendor||"?"}/${He.architecture||"?"}` : "webgpu adapter ?"].join("; ")
+       const WW = (0, PW.t)(),
+         iW = null !== WW && void 0 !== WW ? WW : (0, PW.j)(),
+         OW = (0, PW.f)();
+       return [iW ? `webgl ${iW.vendor} / ${iW.renderer} (${WW?"the renderer's context":"a probe"})` : "webgl ?", OW ? `webgpu adapter ${OW.vendor||"?"}/${OW.architecture||"?"}` : "webgpu adapter ?"].join("; ")
```

#### 14. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L78` → after: `L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L78) · [Before (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L78)

```diff
-           appIosVersion: Ue.f,
+           appIosVersion: LW.h,
```

#### 15. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L81-L82` → after: `L81-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L81-L82) · [Before (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L81-L82)

```diff
-         Xe = (0, ye.p)(navigator.platform, navigator.maxTouchPoints, Me.siteUsed, (0, be.getWebGpuSupported)());
-       return [`os ${fe} ${pe}; user agent's ${null!==(ee=qe.os.name)&&void 0!==ee?ee:"?"} ${null!==(ie=qe.os.version)&&void 0!==ie?ie:"?"}, platform ${navigator.platform}, touch points ${navigator.maxTouchPoints}, ${(0,be.getPlatformType)()}`, `browser ${null!==(He=qe.browser.nam … [truncated]
+         UW = (0, mW.q)(navigator.platform, navigator.maxTouchPoints, NW.siteUsed, (0, EW.getWebGpuSupported)());
+       return [`os ${AW} ${jW}; user agent's ${null!==(WW=lW.os.name)&&void 0!==WW?WW:"?"} ${null!==(iW=lW.os.version)&&void 0!==iW?iW:"?"}, platform ${navigator.platform}, touch points ${navigator.maxTouchPoints}, ${(0,EW.getPlatformType)()}`, `browser ${null!==(OW=lW.browser.nam … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (4057 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064)

#### 1. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L1-L2` → after: `L1-L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L1-L2) · [Before (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L1-L2)

```diff
- export const id = 35;
- export const ids = [35];
+ export const id = 36;
+ export const ids = [36];
```

#### 2. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L4` → after: `L4-L4759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L4-L4759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L4-L4759) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L4)

```diff
-   9952: (ee, ie, He) => {
+   29883: (WW, iW, OW) => {
+     var mW = {
+       "./Player_Atlas.png": 28955,
+       "./astro_set_1_attachable.png": 28963,
+       "./astro_set_2_attachable.png": 28968,
+       "./astro_set_3_attachable.png": 28970,
+       "./astro_set_4_attachable.png": 28973,
+       "./beaver_lumberjack.png": 28977,
+       "./bee_set_1_attachable.png": 28983,
+       "./bee_set_2_attachable.png": 28989,
+       "./bee_set_3_attachable_blue.png": 28991,
+       "./bee_set_3_attachable_green.png": 28994,
+       "./bee_set_3_attachable_red.png": 28999,
+       "./bee_set_4_attachable.png": 29003,
+       "./capeTextures/cape_cow_cream.png": 29007,
+       "./capeTextures/cape_cow_normal.png": 29012,
+ ... (4740 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L6` → after: `L4761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R4761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L4761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L4761) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L6)

```diff
-       blockMetadata: () => Ke.i,
+       blockMetadata: () => PW.j,
```

#### 4. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L10` → after: `L4765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R4765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L4765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L4765) · [Before (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L10)

```diff
-       textureNameToIndex: () => Ke.s
+       textureNameToIndex: () => PW.z
```

#### 5. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L12-L16` → after: `L4767-L4771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R4767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L4767-L4771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L4767-L4771) · [Before (L12-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L12-L16)

```diff
-     var ye = He(3488),
-       be = He(34679),
-       Me = He(1141),
-       Ke = He(9961),
-       Ue = He(608);
+     var mW = OW(4356),
+       EW = OW(35056),
+       NW = OW(1185),
+       PW = OW(5725),
+       LW = OW(639);
```

#### 6. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L18-L19` → after: `L4773-L4774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R4773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L4773-L4774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L4773-L4774) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L18-L19)

```diff
-       block: ee => He(10082)(`./${ee}.png`),
-       item: ee => He(17881)(`./${ee}.png`)
+       block: WW => OW(10486)(`./${WW}.png`),
+       item: WW => OW(18177)(`./${WW}.png`)
```

#### 7. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L25-L26` → after: `L4780-L4781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R4780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L4780-L4781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L4780-L4781) · [Before (L25-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L25-L26)

```diff
-         if (ie === ye.f.BLOCK) be = {
-           type: ye.g.BASE64,
+         if (iW === mW.h.BLOCK) EW = {
+           type: mW.i.BASE64,
```

#### 8. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L29-L30` → after: `L4784-L4785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R4784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L4784-L4785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L4784-L4785) · [Before (L29-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L29-L30)

```diff
-         else if (ie === ye.f.ITEM) be = {
-           type: ye.g.BASE64,
+         else if (iW === mW.h.ITEM) EW = {
+           type: mW.i.BASE64,
```

#### 9. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L33-L35` → after: `L4788-L4790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R4788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L4788-L4790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L4788-L4790) · [Before (L33-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L33-L35)

```diff
-         else if (ie === ye.f.ICON) be = {
-           type: ye.g.BASE64,
-           url: He(27277)(`./${ee}.png`)
+         else if (iW === mW.h.ICON) EW = {
+           type: mW.i.BASE64,
+           url: OW(27601)(`./${WW}.png`)
```

#### 10. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L37` → after: `L4792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R4792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L4792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L4792) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L37)

```diff
-         else if (ie === ye.f.LIFEFORM_ATLAS) {
+         else if (iW === mW.h.LIFEFORM_ATLAS) {
```

#### 11. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L44-L45` → after: `L4799-L4800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R4799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L4799-L4800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L4799-L4800) · [Before (L44-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L44-L45)

```diff
-             type: ye.g.BASE64,
-             url: He(27818)(`./${ie}/${ee}.png`)
+             type: mW.i.BASE64,
+             url: OW(28175)(`./${iW}/${WW}.png`)
```

#### 12. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L47-L49` → after: `L4802-L4804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R4802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L4802-L4804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L4802-L4804) · [Before (L47-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L47-L49)

```diff
-         } else ie === ye.f.PLAYER_ASSET && (be = {
-           type: ye.g.BASE64,
-           url: He(29558)(`./${ee}.png`)
+         } else iW === mW.h.PLAYER_ASSET && (EW = {
+           type: mW.i.BASE64,
+           url: OW(29883)(`./${WW}.png`)
```

#### 13. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L52` → after: `L4807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R4807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L4807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L4807) · [Before (L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L52)

```diff
-         throw new Error(`Default texture for ${ee} not found`)
+         throw new Error(`Default texture for ${WW} not found`)
```

#### 14. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L60-L61` → after: `L4815-L4816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R4815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L4815-L4816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L4815-L4816) · [Before (L60-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L60-L61)

```diff
-         if (ie === ye.c.BLOCK) {
-           const ie = He(29564)(`./${ee}.glb`);
+         if (iW === mW.e.BLOCK) {
+           const iW = OW(29891)(`./${WW}.glb`);
```

#### 15. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L63` → after: `L4818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R4818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L4818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L4818) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L63)

```diff
-             type: ye.g.BASE64,
+             type: mW.i.BASE64,
```

#### 16. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L66-L68` → after: `L4821-L4823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R4821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L4821-L4823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L4821-L4823) · [Before (L66-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L66-L68)

```diff
-         } else if (ie === ye.c.ITEM) be = {
-           type: ye.g.HTTP,
-           url: `${Me.clientSideServerUrls.staticUrl}/models/${ee}.glb`
+         } else if (iW === mW.e.ITEM) EW = {
+           type: mW.i.HTTP,
+           url: `${NW.clientSideServerUrls.staticUrl}/models/${WW}.glb`
```

#### 17. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L70-L71` → after: `L4825-L4826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R4825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L4825-L4826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L4825-L4826) · [Before (L70-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L70-L71)

```diff
-         else if (ie === ye.c.LIFEFORM) {
-           const ie = He(33883)(`./${ee}.glb`);
+         else if (iW === mW.e.LIFEFORM) {
+           const iW = OW(34223)(`./${WW}.glb`);
```

#### 18. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L73` → after: `L4828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R4828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L4828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L4828) · [Before (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L73)

```diff
-             type: ye.g.BASE64,
+             type: mW.i.BASE64,
```

#### 19. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L78` → after: `L4833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R4833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L4833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L4833) · [Before (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L78)

```diff
-         throw new Error(`Default model for ${ee} not found`)
+         throw new Error(`Default model for ${WW} not found`)
```

#### 20. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L84` → after: `L4839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R4839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L4839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L4839) · [Before (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L84)

```diff
-       return be.n[ee]
+       return EW.p[WW]
```

#### 21. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L87` → after: `L4842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R4842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L4842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L4842) · [Before (L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L87)

```diff
-   34679: (ee, ie, He) => {
+   35056: (WW, iW, OW) => {
```

#### 22. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L90-L93` → after: `L4846-L4848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R4846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L4846-L4848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L4846-L4848) · [Before (L90-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L90-L93)

```diff
-       g: () => Ue,
-       j: () => Ke,
-       m: () => be,
-       n: () => ye
+       i: () => PW,
+       l: () => EW,
+       p: () => mW
```

#### 23. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L187-L4940` → after: `L4942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R4942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L4942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L4942) · [Before (L187-L4940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L187-L4940)

```diff
-   29558: (ee, ie, He) => {
-     var ye = {
-       "./Player_Atlas.png": 28565,
-       "./astro_set_1_attachable.png": 28571,
-       "./astro_set_2_attachable.png": 28573,
-       "./astro_set_3_attachable.png": 28582,
-       "./astro_set_4_attachable.png": 28591,
-       "./beaver_lumberjack.png": 28594,
-       "./bee_set_1_attachable.png": 28601,
-       "./bee_set_2_attachable.png": 28607,
-       "./bee_set_3_attachable_blue.png": 28614,
-       "./bee_set_3_attachable_green.png": 28622,
-       "./bee_set_3_attachable_red.png": 28624,
-       "./bee_set_4_attachable.png": 28628,
-       "./capeTextures/cape_cow_cream.png": 28632,
-       "./capeTextures/cape_cow_normal.png": 28635,
- ... (4738 more removed lines; see GitHub link above)
+   29898: WW => {
```

#### 24. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L4943` → after: `L4945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R4945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L4945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L4945) · [Before (L4943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L4943)

```diff
-   29575: ee => {
+   29902: WW => {
```

#### 25. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L4946` → after: `L4948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R4948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L4948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L4948) · [Before (L4946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L4946)

```diff
-   29581: ee => {
+   29911: WW => {
```

#### 26. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L4949` → after: `L4951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R4951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L4951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L4951) · [Before (L4949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L4949)

```diff
-   29587: ee => {
+   29916: WW => {
```

#### 27. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L4952` → after: `L4954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R4954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L4954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L4954) · [Before (L4952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L4952)

```diff
-   29594: ee => {
+   29919: WW => {
```

#### 28. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L4955` → after: `L4957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R4957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L4957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L4957) · [Before (L4955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L4955)

```diff
-   29598: ee => {
+   29923: WW => {
```

#### 29. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L4958` → after: `L4960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R4960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L4960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L4960) · [Before (L4958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L4958)

```diff
-   29600: ee => {
+   29925: WW => {
```

#### 30. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L4961` → after: `L4963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R4963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L4963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L4963) · [Before (L4961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L4961)

```diff
-   29608: ee => {
+   29930: WW => {
```

#### 31. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L4964` → after: `L4966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R4966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L4966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L4966) · [Before (L4964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L4964)

```diff
-   29611: ee => {
+   29937: WW => {
```

#### 32. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L4967` → after: `L4969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R4969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L4969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L4969) · [Before (L4967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L4967)

```diff
-   29613: ee => {
+   29943: WW => {
```

#### 33. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L4970` → after: `L4972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R4972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L4972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L4972) · [Before (L4970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L4970)

```diff
-   29619: ee => {
+   29946: WW => {
```

#### 34. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L4973` → after: `L4975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R4975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L4975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L4975) · [Before (L4973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L4973)

```diff
-   29626: ee => {
+   29954: WW => {
```

#### 35. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L4976` → after: `L4978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R4978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L4978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L4978) · [Before (L4976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L4976)

```diff
-   29634: ee => {
+   29956: WW => {
```

#### 36. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L4979` → after: `L4981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R4981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L4981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L4981) · [Before (L4979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L4979)

```diff
-   29636: ee => {
+   29960: WW => {
```

#### 37. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L4982` → after: `L4984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R4984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L4984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L4984) · [Before (L4982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L4982)

```diff
-   29645: ee => {
+   29963: WW => {
```

#### 38. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L4985` → after: `L4987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R4987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L4987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L4987) · [Before (L4985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L4985)

```diff
-   29652: ee => {
+   29967: WW => {
```

#### 39. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L4988` → after: `L4990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R4990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L4990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L4990) · [Before (L4988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L4988)

```diff
-   29655: ee => {
+   29972: WW => {
```

#### 40. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L4991` → after: `L4993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R4993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L4993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L4993) · [Before (L4991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L4991)

```diff
-   29657: ee => {
+   29974: WW => {
```

#### 41. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L4994` → after: `L4996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R4996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L4996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L4996) · [Before (L4994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L4994)

```diff
-   29662: ee => {
+   29977: WW => {
```

#### 42. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L4997` → after: `L4999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R4999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L4999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L4999) · [Before (L4997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L4997)

```diff
-   29664: ee => {
+   29980: WW => {
```

#### 43. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5000` → after: `L5002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5002) · [Before (L5000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5000)

```diff
-   29666: ee => {
+   29986: WW => {
```

#### 44. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5003` → after: `L5005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5005) · [Before (L5003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5003)

```diff
-   29668: ee => {
+   29995: WW => {
```

#### 45. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5006` → after: `L5008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5008) · [Before (L5006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5006)

```diff
-   29676: ee => {
+   3e4: WW => {
```

#### 46. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5009` → after: `L5011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5011) · [Before (L5009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5009)

```diff
-   29685: ee => {
+   30007: WW => {
```

#### 47. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5012` → after: `L5014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5014) · [Before (L5012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5012)

```diff
-   29693: ee => {
+   30015: WW => {
```

#### 48. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5015` → after: `L5017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5017) · [Before (L5015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5015)

```diff
-   29696: ee => {
+   30023: WW => {
```

#### 49. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5018` → after: `L5020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5020) · [Before (L5018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5018)

```diff
-   29704: ee => {
+   30027: WW => {
```

#### 50. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5021` → after: `L5023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5023) · [Before (L5021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5021)

```diff
-   29713: ee => {
+   30032: WW => {
```

#### 51. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5024` → after: `L5026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5026) · [Before (L5024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5024)

```diff
-   29720: ee => {
+   30039: WW => {
```

#### 52. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5027` → after: `L5029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5029) · [Before (L5027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5027)

```diff
-   29724: ee => {
+   30048: WW => {
```

#### 53. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5030` → after: `L5032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5032) · [Before (L5030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5030)

```diff
-   29729: ee => {
+   30057: WW => {
```

#### 54. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5033` → after: `L5035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5035) · [Before (L5033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5033)

```diff
-   29738: ee => {
+   30061: WW => {
```

#### 55. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5036` → after: `L5038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5038) · [Before (L5036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5036)

```diff
-   29745: ee => {
+   30066: WW => {
```

#### 56. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5039` → after: `L5041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5041) · [Before (L5039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5039)

```diff
-   29748: ee => {
+   30071: WW => {
```

#### 57. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5042` → after: `L5044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5044) · [Before (L5042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5042)

```diff
-   29757: ee => {
+   30077: WW => {
```

#### 58. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5045` → after: `L5047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5047) · [Before (L5045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5045)

```diff
-   29760: ee => {
+   30084: WW => {
```

#### 59. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5048` → after: `L5050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5050) · [Before (L5048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5048)

```diff
-   29768: ee => {
+   30093: WW => {
```

#### 60. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5051` → after: `L5053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5053) · [Before (L5051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5051)

```diff
-   29772: ee => {
+   30097: WW => {
```

#### 61. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5054` → after: `L5056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5056) · [Before (L5054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5054)

```diff
-   29776: ee => {
+   30104: WW => {
```

#### 62. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5057` → after: `L5059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5059) · [Before (L5057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5057)

```diff
-   29785: ee => {
+   30113: WW => {
```

#### 63. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5060` → after: `L5062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5062) · [Before (L5060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5060)

```diff
-   29788: ee => {
+   30118: WW => {
```

#### 64. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5063` → after: `L5065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5065) · [Before (L5063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5063)

```diff
-   29795: ee => {
+   30123: WW => {
```

#### 65. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5066` → after: `L5068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5068) · [Before (L5066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5066)

```diff
-   29802: ee => {
+   30126: WW => {
```

#### 66. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5069` → after: `L5071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5071) · [Before (L5069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5069)

```diff
-   29809: ee => {
+   30132: WW => {
```

#### 67. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5072` → after: `L5074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5074) · [Before (L5072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5072)

```diff
-   29813: ee => {
+   30135: WW => {
```

#### 68. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5075` → after: `L5077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5077) · [Before (L5075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5075)

```diff
-   29815: ee => {
+   30139: WW => {
```

#### 69. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5078` → after: `L5080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5080) · [Before (L5078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5078)

```diff
-   29823: ee => {
+   30145: WW => {
```

#### 70. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5081` → after: `L5083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5083) · [Before (L5081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5081)

```diff
-   29830: ee => {
+   30154: WW => {
```

#### 71. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5084` → after: `L5086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5086) · [Before (L5084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5084)

```diff
-   29837: ee => {
+   30161: WW => {
```

#### 72. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5087` → after: `L5089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5089) · [Before (L5087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5087)

```diff
-   29839: ee => {
+   30166: WW => {
```

#### 73. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5090` → after: `L5092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5092) · [Before (L5090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5090)

```diff
-   29845: ee => {
+   30170: WW => {
```

#### 74. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5093` → after: `L5095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5095) · [Before (L5093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5093)

```diff
-   29848: ee => {
+   30179: WW => {
```

#### 75. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5096` → after: `L5098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5098) · [Before (L5096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5096)

```diff
-   29852: ee => {
+   30184: WW => {
```

#### 76. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5099` → after: `L5101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5101) · [Before (L5099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5099)

```diff
-   29859: ee => {
+   30187: WW => {
```

#### 77. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5102` → after: `L5104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5104) · [Before (L5102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5102)

```diff
-   29865: ee => {
+   30189: WW => {
```

#### 78. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5105` → after: `L5107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5107) · [Before (L5105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5105)

```diff
-   29873: ee => {
+   30197: WW => {
```

#### 79. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5108` → after: `L5110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5110) · [Before (L5108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5108)

```diff
-   29882: ee => {
+   30199: WW => {
```

#### 80. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5111` → after: `L5113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5113) · [Before (L5111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5111)

```diff
-   29888: ee => {
+   30202: WW => {
```

#### 81. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5114` → after: `L5116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5116) · [Before (L5114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5114)

```diff
-   29891: ee => {
+   30205: WW => {
```

#### 82. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5117` → after: `L5119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5119) · [Before (L5117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5117)

```diff
-   29897: ee => {
+   30208: WW => {
```

#### 83. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5120` → after: `L5122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5122) · [Before (L5120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5120)

```diff
-   29899: ee => {
+   30212: WW => {
```

#### 84. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5123` → after: `L5125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5125) · [Before (L5123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5123)

```diff
-   29906: ee => {
+   30215: WW => {
```

#### 85. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5126` → after: `L5128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5128) · [Before (L5126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5126)

```diff
-   29910: ee => {
+   30219: WW => {
```

#### 86. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5129` → after: `L5131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5131) · [Before (L5129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5129)

```diff
-   29916: ee => {
+   30225: WW => {
```

#### 87. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5132` → after: `L5134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5134) · [Before (L5132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5132)

```diff
-   29922: ee => {
+   30228: WW => {
```

#### 88. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5135` → after: `L5137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5137) · [Before (L5135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5135)

```diff
-   29928: ee => {
+   30233: WW => {
```

#### 89. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5138` → after: `L5140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5140) · [Before (L5138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5138)

```diff
-   29931: ee => {
+   30241: WW => {
```

#### 90. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5141` → after: `L5143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5143) · [Before (L5141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5141)

```diff
-   29940: ee => {
+   30247: WW => {
```

#### 91. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5144` → after: `L5146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5146) · [Before (L5144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5144)

```diff
-   29944: ee => {
+   30252: WW => {
```

#### 92. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5147` → after: `L5149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5149) · [Before (L5147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5147)

```diff
-   29947: ee => {
+   30256: WW => {
```

#### 93. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5150` → after: `L5152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5152) · [Before (L5150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5150)

```diff
-   29949: ee => {
+   30262: WW => {
```

#### 94. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5153` → after: `L5155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5155) · [Before (L5153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5153)

```diff
-   29951: ee => {
+   30268: WW => {
```

#### 95. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5156` → after: `L5158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5158) · [Before (L5156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5156)

```diff
-   29958: ee => {
+   30273: WW => {
```

#### 96. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5159` → after: `L5161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5161) · [Before (L5159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5159)

```diff
-   29966: ee => {
+   30276: WW => {
```

#### 97. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5162` → after: `L5164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5164) · [Before (L5162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5162)

```diff
-   29970: ee => {
+   30284: WW => {
```

#### 98. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5165` → after: `L5167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5167) · [Before (L5165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5165)

```diff
-   29975: ee => {
+   30289: WW => {
```

#### 99. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5168` → after: `L5170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5170) · [Before (L5168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5168)

```diff
-   29978: ee => {
+   30292: WW => {
```

#### 100. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5171` → after: `L5173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5173) · [Before (L5171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5171)

```diff
-   29987: ee => {
+   30298: WW => {
```

#### 101. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5174` → after: `L5176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5176) · [Before (L5174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5174)

```diff
-   29989: ee => {
+   30304: WW => {
```

#### 102. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5177` → after: `L5179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5179) · [Before (L5177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5177)

```diff
-   29993: ee => {
+   30309: WW => {
```

#### 103. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5180` → after: `L5182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5182) · [Before (L5180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5180)

```diff
-   29995: ee => {
+   30314: WW => {
```

#### 104. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5183` → after: `L5185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5185) · [Before (L5183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5183)

```diff
-   29999: ee => {
+   30316: WW => {
```

#### 105. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5186` → after: `L5188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5188) · [Before (L5186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5186)

```diff
-   30008: ee => {
+   30319: WW => {
```

#### 106. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5189` → after: `L5191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5191) · [Before (L5189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5189)

```diff
-   30016: ee => {
+   30326: WW => {
```

#### 107. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5192` → after: `L5194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5194) · [Before (L5192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5192)

```diff
-   30019: ee => {
+   30330: WW => {
```

#### 108. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5195` → after: `L5197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5197) · [Before (L5195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5195)

```diff
-   30024: ee => {
+   30337: WW => {
```

#### 109. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5198` → after: `L5200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5200) · [Before (L5198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5198)

```diff
-   30031: ee => {
+   30342: WW => {
```

#### 110. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5201` → after: `L5203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5203) · [Before (L5201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5201)

```diff
-   30037: ee => {
+   30348: WW => {
```

#### 111. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5204` → after: `L5206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5206) · [Before (L5204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5204)

```diff
-   30046: ee => {
+   30356: WW => {
```

#### 112. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5207` → after: `L5209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5209) · [Before (L5207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5207)

```diff
-   30048: ee => {
+   30364: WW => {
```

#### 113. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5210` → after: `L5212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5212) · [Before (L5210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5210)

```diff
-   30050: ee => {
+   30370: WW => {
```

#### 114. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5213` → after: `L5215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5215) · [Before (L5213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5213)

```diff
-   30054: ee => {
+   30378: WW => {
```

#### 115. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5216` → after: `L5218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5218) · [Before (L5216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5216)

```diff
-   30058: ee => {
+   30381: WW => {
```

#### 116. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5219` → after: `L5221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5221) · [Before (L5219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5219)

```diff
-   30063: ee => {
+   30384: WW => {
```

#### 117. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5222` → after: `L5224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5224) · [Before (L5222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5222)

```diff
-   30070: ee => {
+   30392: WW => {
```

#### 118. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5225` → after: `L5227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5227) · [Before (L5225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5225)

```diff
-   30072: ee => {
+   30400: WW => {
```

#### 119. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5228` → after: `L5230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5230) · [Before (L5228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5228)

```diff
-   30074: ee => {
+   30405: WW => {
```

#### 120. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5231` → after: `L5233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5233) · [Before (L5231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5231)

```diff
-   30076: ee => {
+   30413: WW => {
```

#### 121. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5234` → after: `L5236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5236) · [Before (L5234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5234)

```diff
-   30082: ee => {
+   30416: WW => {
```

#### 122. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5237` → after: `L5239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5239) · [Before (L5237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5237)

```diff
-   30087: ee => {
+   30424: WW => {
```

#### 123. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5240` → after: `L5242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5242) · [Before (L5240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5240)

```diff
-   30092: ee => {
+   30427: WW => {
```

#### 124. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5243` → after: `L5245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5245) · [Before (L5243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5243)

```diff
-   30101: ee => {
+   30430: WW => {
```

#### 125. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5246` → after: `L5248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5248) · [Before (L5246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5246)

```diff
-   30106: ee => {
+   30434: WW => {
```

#### 126. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5249` → after: `L5251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5251) · [Before (L5249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5249)

```diff
-   30111: ee => {
+   30436: WW => {
```

#### 127. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5252` → after: `L5254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5254) · [Before (L5252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5252)

```diff
-   30113: ee => {
+   30442: WW => {
```

#### 128. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5255` → after: `L5257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5257) · [Before (L5255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5255)

```diff
-   30119: ee => {
+   30446: WW => {
```

#### 129. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5258` → after: `L5260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5260) · [Before (L5258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5258)

```diff
-   30121: ee => {
+   30452: WW => {
```

#### 130. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5261` → after: `L5263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5263) · [Before (L5261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5261)

```diff
-   30130: ee => {
+   30458: WW => {
```

#### 131. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5264` → after: `L5266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5266) · [Before (L5264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5264)

```diff
-   30134: ee => {
+   30461: WW => {
```

#### 132. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5267` → after: `L5269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5269) · [Before (L5267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5267)

```diff
-   30138: ee => {
+   30467: WW => {
```

#### 133. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5270` → after: `L5272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5272) · [Before (L5270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5270)

```diff
-   30142: ee => {
+   30476: WW => {
```

#### 134. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5273` → after: `L5275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5275) · [Before (L5273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5273)

```diff
-   30148: ee => {
+   30480: WW => {
```

#### 135. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5276` → after: `L5278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5278) · [Before (L5276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5276)

```diff
-   30151: ee => {
+   30484: WW => {
```

#### 136. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5279` → after: `L5281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5281) · [Before (L5279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5279)

```diff
-   30158: ee => {
+   30487: WW => {
```

#### 137. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5282` → after: `L5284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5284) · [Before (L5282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5282)

```diff
-   30167: ee => {
+   30489: WW => {
```

#### 138. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5285` → after: `L5287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5287) · [Before (L5285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5285)

```diff
-   30169: ee => {
+   30494: WW => {
```

#### 139. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5288` → after: `L5290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5290) · [Before (L5288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5288)

```diff
-   30172: ee => {
+   30496: WW => {
```

#### 140. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5291` → after: `L5293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5293) · [Before (L5291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5291)

```diff
-   30180: ee => {
+   30504: WW => {
```

#### 141. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5294` → after: `L5296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5296) · [Before (L5294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5294)

```diff
-   30185: ee => {
+   30506: WW => {
```

#### 142. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5297` → after: `L5299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5299) · [Before (L5297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5297)

```diff
-   30188: ee => {
+   30510: WW => {
```

#### 143. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5300` → after: `L5302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5302) · [Before (L5300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5300)

```diff
-   30191: ee => {
+   30516: WW => {
```

#### 144. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5303` → after: `L5305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5305) · [Before (L5303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5303)

```diff
-   30194: ee => {
+   30523: WW => {
```

#### 145. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5306` → after: `L5308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5308) · [Before (L5306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5306)

```diff
-   30200: ee => {
+   30529: WW => {
```

#### 146. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5309` → after: `L5311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5311) · [Before (L5309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5309)

```diff
-   30205: ee => {
+   30532: WW => {
```

#### 147. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5312` → after: `L5314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5314) · [Before (L5312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5312)

```diff
-   30207: ee => {
+   30537: WW => {
```

#### 148. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5315` → after: `L5317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5317) · [Before (L5315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5315)

```diff
-   30216: ee => {
+   30542: WW => {
```

#### 149. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5318` → after: `L5320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5320) · [Before (L5318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5318)

```diff
-   30222: ee => {
+   30547: WW => {
```

#### 150. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5321` → after: `L5323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5323) · [Before (L5321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5321)

```diff
-   30225: ee => {
+   30553: WW => {
```

#### 151. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5324` → after: `L5326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5326) · [Before (L5324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5324)

```diff
-   30227: ee => {
+   30556: WW => {
```

#### 152. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5327` → after: `L5329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5329) · [Before (L5327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5327)

```diff
-   30233: ee => {
+   30563: WW => {
```

#### 153. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5330` → after: `L5332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5332) · [Before (L5330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5330)

```diff
-   30239: ee => {
+   30570: WW => {
```

#### 154. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5333` → after: `L5335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5335) · [Before (L5333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5333)

```diff
-   30242: ee => {
+   30577: WW => {
```

#### 155. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5336` → after: `L5338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5338) · [Before (L5336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5336)

```diff
-   30250: ee => {
+   30580: WW => {
```

#### 156. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5339` → after: `L5341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5341) · [Before (L5339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5339)

```diff
-   30259: ee => {
+   30582: WW => {
```

#### 157. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5342` → after: `L5344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5344) · [Before (L5342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5342)

```diff
-   30262: ee => {
+   30587: WW => {
```

#### 158. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5345` → after: `L5347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5347) · [Before (L5345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5345)

```diff
-   30269: ee => {
+   30593: WW => {
```

#### 159. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5348` → after: `L5350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5350) · [Before (L5348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5348)

```diff
-   30276: ee => {
+   30599: WW => {
```

#### 160. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5351` → after: `L5353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5353) · [Before (L5351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5351)

```diff
-   30281: ee => {
+   30608: WW => {
```

#### 161. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5354` → after: `L5356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5356) · [Before (L5354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5354)

```diff
-   30289: ee => {
+   30616: WW => {
```

#### 162. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5357` → after: `L5359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5359) · [Before (L5357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5357)

```diff
-   30291: ee => {
+   30624: WW => {
```

#### 163. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5360` → after: `L5362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5362) · [Before (L5360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5360)

```diff
-   30296: ee => {
+   30626: WW => {
```

#### 164. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5363` → after: `L5365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5365) · [Before (L5363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5363)

```diff
-   30298: ee => {
+   30628: WW => {
```

#### 165. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5366` → after: `L5368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5368) · [Before (L5366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5366)

```diff
-   30306: ee => {
+   30631: WW => {
```

#### 166. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5369` → after: `L5371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5371) · [Before (L5369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5369)

```diff
-   30313: ee => {
+   30633: WW => {
```

#### 167. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5372` → after: `L5374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5374) · [Before (L5372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5372)

```diff
-   30318: ee => {
+   30638: WW => {
```

#### 168. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5375` → after: `L5377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5377) · [Before (L5375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5375)

```diff
-   30320: ee => {
+   30640: WW => {
```

#### 169. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5378` → after: `L5380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5380) · [Before (L5378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5378)

```diff
-   30324: ee => {
+   30648: WW => {
```

#### 170. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5381` → after: `L5383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5383) · [Before (L5381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5381)

```diff
-   30331: ee => {
+   30654: WW => {
```

#### 171. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5384` → after: `L5386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5386) · [Before (L5384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5384)

```diff
-   30334: ee => {
+   30656: WW => {
```

#### 172. `bundles/bloxd.io/chunks/js/defaultTexturePack.js` (Changed code · before: `L5387` → after: `L5389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064R5389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00eed44a643dcadd5d81460262452d5a94c0429479251b2dd2e9d3bbf36fd064) · [After (L5389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5389) · [Before (L5387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/defaultTexturePack.js#L5387)

```diff
-   30338: ee => {
+   30663: WW => {
```
