# Changed — Bundle Modifications Report (Part 112 / 132)

- **Updated at**: `2026-11-21T10:00 JST`
- **Part**: `112 / 132` (**465** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 111](part-111.md) · [Part 113 →](part-113.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/frameDebug.js` (halsg.2bd74967 → x17cru.159bd7ce · continued)

- **File**: `bundles/bloxd.io/chunks/js/frameDebug.js` (52 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084)

#### 17. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L224` → after: `L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/frameDebug.js#L224) · [Before (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/frameDebug.js#L224)

```diff
-         this.flushTimer = setTimeout(this.flush, bb ? Xb : Zb)
+         this.flushTimer = setTimeout(this.flush, dd ? Ld : Qd)
```

#### 18. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L229` → after: `L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/frameDebug.js#L229) · [Before (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/frameDebug.js#L229)

```diff
-         (0, Ob.d)(hb) ? (this.lastDrawnStartMs >= 0 && (Sb.pendingAfter = this.lastPending, this.closeInterval(bb - this.lastDrawnStartMs, bb)), this.lastDrawnStartMs = bb, Wb(Sb).pendingBefore = this.lastPending, this.summary.undrawn.drawn()) : this.lastDrawnStartMs >= 0 && this … [truncated]
+         (0, Nd.b)(kd) ? (this.lastDrawnStartMs >= 0 && (Cd.pendingAfter = this.lastPending, this.closeInterval(dd - this.lastDrawnStartMs, dd)), this.lastDrawnStartMs = dd, vd(Cd).pendingBefore = this.lastPending, this.summary.undrawn.drawn()) : this.lastDrawnStartMs >= 0 && this … [truncated]
```

#### 19. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L250` → after: `L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/frameDebug.js#L250) · [Before (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/frameDebug.js#L250)

```diff
-         if (0 === ub.frames) return ub.undrawn.count > 0 && (0, Ub.l)("frame", `${bb}s: no frames drawn, ${ub.undrawn.describe()}; pending max ${hb.pendingMax}`), ub.undrawn.count > 0;
+         if (0 === Jd.frames) return Jd.undrawn.count > 0 && (0, Pd.h)("frame", `${dd}s: no frames drawn, ${Jd.undrawn.describe()}; pending max ${kd.pendingMax}`), Jd.undrawn.count > 0;
```

#### 20. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L252-L253` → after: `L252-L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L252-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/frameDebug.js#L252-L253) · [Before (L252-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/frameDebug.js#L252-L253)

```diff
-           Ob = [`${ub.frames} frames, median ${(0,Gb.c)((0,Gb.g)(Bb,.5))} p95 ${(0,Gb.c)((0,Gb.g)(Bb,.95))} max ${(0,Gb.c)(ub.maxMs)} ms, ${ub.slow} over 50, ${ub.shown+ub.dropped} over ${ob}`, `${hb.rafs} rafs, ${ub.undrawn.describe()}`, `main ${(0,Gb.c)(hb.mainMs)} ms (render $ … [truncated]
-         return hb.pendingMax >= 0 && Ob.push(`pending max ${hb.pendingMax}`), this.ahead >= 0 && Ob.push(`${this.ahead} frames ahead`), Ob.push(`outliers ${ub.shown} logged, ${ub.dropped} dropped`), (0, Ub.l)("frame", `${bb}s: ${Ob.join("; ")}`), !0
+           Nd = [`${Jd.frames} frames, median ${(0,Wd.c)((0,Wd.e)(pd,.5))} p95 ${(0,Wd.c)((0,Wd.e)(pd,.95))} max ${(0,Wd.c)(Jd.maxMs)} ms, ${Jd.slow} over 50, ${Jd.shown+Jd.dropped} over ${ed}`, `${kd.rafs} rafs, ${Jd.undrawn.describe()}`, `main ${(0,Wd.c)(kd.mainMs)} ms (render $ … [truncated]
+         return kd.pendingMax >= 0 && Nd.push(`pending max ${kd.pendingMax}`), this.ahead >= 0 && Nd.push(`${this.ahead} frames ahead`), Nd.push(`outliers ${Jd.shown} logged, ${Jd.dropped} dropped`), (0, Pd.h)("frame", `${dd}s: ${Nd.join("; ")}`), !0
```

#### 21. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L262` → after: `L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/frameDebug.js#L262) · [Before (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/frameDebug.js#L262)

```diff
-   4564: (bb, ub, hb) => {
+   4688: (dd, Jd, kd) => {
```

#### 22. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L271-L272` → after: `L269-L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L269-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/frameDebug.js#L269-L270) · [Before (L271-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/frameDebug.js#L271-L272)

```diff
-       H: () => ab,
-       Kb: () => tb,
+       Hb: () => Td,
+       I: () => Vd,
```

#### 23. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L275-L277` → after: `L273-L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L273-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/frameDebug.js#L273-L275) · [Before (L275-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/frameDebug.js#L275-L277)

```diff
-       Mb: () => eb,
-       N: () => Sb,
-       Q: () => Ab,
+       M: () => od,
+       Ob: () => Ud,
+       P: () => Cd,
```

#### 24. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L279` → after: `L277-L278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L277-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/frameDebug.js#L277-L278) · [Before (L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/frameDebug.js#L279)

```diff
-       R: () => Yb,
+       Sb: () => xd,
+       T: () => Rd,
```

#### 25. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L283-L285` → after: `L281-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L281-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/frameDebug.js#L281-L283) · [Before (L283-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/frameDebug.js#L283-L285)

```diff
-       Wb: () => db,
-       Y: () => Zb,
-       _b: () => qb,
+       X: () => gd,
+       Yb: () => Nd,
+       Z: () => Ld,
```

#### 26. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L288` → after: `L287-L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L287-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/frameDebug.js#L287-L288) · [Before (L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/frameDebug.js#L288)

```diff
-       cc: () => Ob,
+       bb: () => ad,
+       d: () => rd,
```

#### 27. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L290-L294` → after: `L290-L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L290-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/frameDebug.js#L290-L291) · [Before (L290-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/frameDebug.js#L290-L294)

```diff
-       f: () => yb,
-       fb: () => zb,
-       fc: () => Fb,
-       hb: () => Db,
-       i: () => wb,
+       gb: () => Yd,
+       h: () => ld,
```

#### 28. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L297-L298` → after: `L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/frameDebug.js#L296) · [Before (L297-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/frameDebug.js#L297-L298)

```diff
-       m: () => Eb,
-       mb: () => Pb,
+       o: () => hd,
```

#### 29. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L301-L302` → after: `L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/frameDebug.js#L299) · [Before (L301-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/frameDebug.js#L301-L302)

```diff
-       r: () => lb,
-       s: () => Ub,
+       q: () => Id,
```

#### 30. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L304` → after: `L301-L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L301-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/frameDebug.js#L301-L302) · [Before (L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/frameDebug.js#L304)

```diff
-       v: () => Lb,
+       tb: () => bd,
+       u: () => Pd,
```

#### 31. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L306-L307` → after: `L304-L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L304-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/frameDebug.js#L304-L307) · [Before (L306-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/frameDebug.js#L306-L307)

```diff
-       x: () => Bb,
-       xb: () => Jb
+       w: () => Zd,
+       xb: () => Sd,
+       y: () => pd,
+       zb: () => Od
```

#### 32. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L812` → after: `L812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/frameDebug.js#L812) · [Before (L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/frameDebug.js#L812)

```diff
-   4555: (bb, ub, hb) => {
+   4680: (dd, Jd, kd) => {
```

#### 33. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L814` → after: `L814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/frameDebug.js#L814) · [Before (L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/frameDebug.js#L814)

```diff
-       $c: () => Bb.Vb,
+       $b: () => xd,
```

#### 34. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L816-L825` → after: `L816-L826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L816-L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/frameDebug.js#L816-L826) · [Before (L816-L825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/frameDebug.js#L816-L825)

```diff
-       Ab: () => Bb.L,
-       Bb: () => Ob.e,
-       Cb: () => jb,
-       Cc: () => Bb.vb,
-       Cd: () => qb,
-       D: () => vb,
-       Db: () => sb,
-       E: () => Zu,
-       Fb: () => gb,
-       Fc: () => Bb.xb,
+       Ab: () => JJ,
+       B: () => Sd,
+       Bc: () => pd.ib,
+       Bd: () => pd.Tb,
+       C: () => LJ,
+       Cc: () => pd.jb,
+       Eb: () => pJ,
+       F: () => wd,
+       Fc: () => pd.sb,
+       Fd: () => pd.Yb,
+       G: () => pd.d,
```

#### 35. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L827-L833` → after: `L828-L834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L828-L834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/frameDebug.js#L828-L834) · [Before (L827-L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/frameDebug.js#L827-L833)

```diff
-       H: () => cb,
-       Hc: () => Bb.Ab,
-       I: () => Bb.f,
-       Ib: () => xb,
-       Jc: () => Qb,
-       Jd: () => Vb,
-       Kc: () => Bb.Eb,
+       Hc: () => OJ,
+       Ib: () => pd.M,
+       Id: () => ed,
+       J: () => Cd,
+       Kc: () => oJ,
+       L: () => pd.h,
+       Lb: () => Nd.g,
```

#### 36. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L839-L847` → after: `L837-L842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L837-L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/frameDebug.js#L837-L842) · [Before (L839-L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/frameDebug.js#L839-L847)

```diff
-       N: () => Bb.i,
-       Nd: () => Wb,
-       Oc: () => Bb.Kb,
-       Od: () => fb,
-       Pb: () => ib,
-       Pc: () => Bb.Mb,
-       Q: () => Rb,
-       Qb: () => Cb,
-       Rd: () => eb,
+       Nb: () => sd,
+       Nc: () => WJ,
+       O: () => dJ,
+       Pd: () => Ed,
+       Qc: () => pd.tb,
+       Rb: () => Ud,
```

#### 37. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L849-L850` → after: `L844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/frameDebug.js#L844) · [Before (L849-L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/frameDebug.js#L849-L850)

```diff
-       Tc: () => Bb.Qb,
-       Td: () => Jb,
+       Sd: () => yd,
```

#### 38. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L852-L854` → after: `L846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/frameDebug.js#L846) · [Before (L852-L854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/frameDebug.js#L852-L854)

```diff
-       Ub: () => Uu,
-       Ud: () => tb,
-       V: () => Bb.r,
+       Uc: () => pd.vb,
```

#### 39. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L856-L867` → after: `L848-L859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L848-L859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/frameDebug.js#L848-L859) · [Before (L856-L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/frameDebug.js#L856-L867)

```diff
-       Vd: () => Yb,
-       W: () => Bb.s,
-       Xc: () => Bb.Tb,
-       Xd: () => Nb,
-       Y: () => Bb.v,
-       Yc: () => Db,
-       Zb: () => Hu,
-       _: () => Hb,
-       _d: () => ou,
-       ab: () => lb,
-       bb: () => Bb.x,
-       bc: () => Ob.j,
+       Wc: () => pd.xb,
+       Wd: () => rd,
+       X: () => pd.q,
+       Xb: () => Fd,
+       Zb: () => pd.T,
+       _: () => pd.u,
+       _b: () => bd,
+       _c: () => Ad,
+       ab: () => pd.w,
+       b: () => kJ,
+       bd: () => pd.Db,
+       be: () => cd,
```

#### 40. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L869-L875` → after: `L861-L869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L861-L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/frameDebug.js#L861-L869) · [Before (L869-L875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/frameDebug.js#L869-L875)

```diff
-       ce: () => Zb,
-       d: () => pb,
-       dd: () => Bb.Wb,
-       eb: () => Bb.B,
-       ec: () => Ab,
-       ed: () => Bb.cc,
-       fb: () => Ib,
+       cc: () => ZJ,
+       db: () => od,
+       de: () => td,
+       ed: () => pd.Eb,
+       fe: () => ud,
+       g: () => Ld,
+       gb: () => Id,
+       gc: () => Gd,
+       ge: () => gJ,
```

#### 41. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L877-L889` → after: `L871-L885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L871-L885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/frameDebug.js#L871-L885) · [Before (L877-L889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/frameDebug.js#L877-L889)

```diff
-       hc: () => Bu,
-       hd: () => Gb,
-       jb: () => Gu,
-       k: () => Su,
-       kb: () => ab,
-       lc: () => Bb.ab,
-       ld: () => ob,
-       mb: () => Bb.C,
-       n: () => nb,
-       nc: () => Bb.eb,
-       o: () => rb,
-       oc: () => Bb.fb,
-       od: () => Yu,
+       ib: () => pd.y,
+       ic: () => lJ,
+       id: () => pd.Gb,
+       ie: () => eJ,
+       j: () => ad,
+       jb: () => pd.B,
+       ke: () => vd,
+       lc: () => Nd.l,
+       ld: () => pd.Lb,
+       m: () => Bd,
+       nb: () => Td,
+       ne: () => Vd,
+       oe: () => fd,
+       pc: () => Rd,
+       pd: () => pd.Ob,
```

#### 42. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L891-L894` → after: `L887-L890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L887-L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/frameDebug.js#L887-L890) · [Before (L891-L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/frameDebug.js#L891-L894)

```diff
-       qb: () => Eb,
-       qc: () => Bb.hb,
-       qd: () => mb,
-       s: () => wu,
+       qe: () => Xd,
+       rb: () => PJ,
+       rc: () => NJ,
+       sd: () => pd.Qb,
```

#### 43. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L898-L900` → after: `L893-L898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L893-L898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/frameDebug.js#L893-L898) · [Before (L898-L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/frameDebug.js#L898-L900)

```diff
-       uc: () => Bb.sb,
-       vc: () => Xu,
-       vd: () => Mb,
+       te: () => jd,
+       u: () => QJ,
+       ub: () => pd.F,
+       uc: () => pd.bb,
+       vb: () => hd,
+       ve: () => gd,
```

#### 44. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L902-L907` → after: `L900-L907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L900-L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/frameDebug.js#L900-L907) · [Before (L902-L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/frameDebug.js#L902-L907)

```diff
-       wb: () => Bb.H,
-       wc: () => au,
-       xd: () => yb,
-       yb: () => bu,
-       zb: () => hu,
-       zc: () => Ou
+       xb: () => Hd,
+       xc: () => pd.eb,
+       xd: () => pd.Sb,
+       xe: () => nd,
+       yb: () => pd.L,
+       ye: () => RJ,
+       zc: () => pd.gb,
+       ze: () => Qd
```

#### 45. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L909-L911` → after: `L909-L911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L909-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/frameDebug.js#L909-L911) · [Before (L909-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/frameDebug.js#L909-L911)

```diff
-     var Bb = hb(4564),
-       Ob = hb(2273);
-     const Gb = Math.round(1e3 / Bb.cc),
+     var pd = kd(4688),
+       Nd = kd(2337);
+     const Wd = Math.round(1e3 / pd.Yb),
```

#### 46. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L1133` → after: `L1133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R1133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L1133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/frameDebug.js#L1133) · [Before (L1133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/frameDebug.js#L1133)

```diff
-       for (const [ub, hb] of Object.entries(Bb.f))
+       for (const [Jd, kd] of Object.entries(pd.d))
```

#### 47. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L1135` → after: `L1135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R1135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L1135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/frameDebug.js#L1135) · [Before (L1135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/frameDebug.js#L1135)

```diff
-       return `Unknown${bb}`
+       return `Unknown${dd}`
```

#### 48. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L1152` → after: `L1152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R1152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L1152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/frameDebug.js#L1152) · [Before (L1152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/frameDebug.js#L1152)

```diff
-   4547: (bb, ub, hb) => {
+   4673: (dd, Jd, kd) => {
```

#### 49. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L1154-L1156` → after: `L1154-L1156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R1154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L1154-L1156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/frameDebug.js#L1154-L1156) · [Before (L1154-L1156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/frameDebug.js#L1154-L1156)

```diff
-       d: () => Ub,
-       h: () => Gb,
-       k: () => Ob
+       b: () => Pd,
+       f: () => Wd,
+       h: () => Nd
```

#### 50. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L1158` → after: `L1158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R1158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L1158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/frameDebug.js#L1158) · [Before (L1158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/frameDebug.js#L1158)

```diff
-     var Bb = hb(4555);
+     var pd = kd(4680);
```

#### 51. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L1167` → after: `L1167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R1167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L1167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/frameDebug.js#L1167) · [Before (L1167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/frameDebug.js#L1167)

```diff
-         case Bb.Y.Drawn:
+         case pd.ab.Drawn:
```

#### 52. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L1169` → after: `L1169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R1169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/frameDebug.js#L1169) · [Before (L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/frameDebug.js#L1169)

```diff
-         case Bb.Y.Paced:
+         case pd.ab.Paced:
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/icons-brands.js` (halsg.2bd74967 → x17cru.159bd7ce)

- **File**: `bundles/bloxd.io/chunks/js/icons-brands.js` (30 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621)

#### 1. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-brands.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-brands.js#L4)

```diff
-   7696: (bb, ub) => {
+   7878: (dd, Jd) => {
```

#### 2. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L9` → after: `L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-brands.js#L9) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-brands.js#L9)

```diff
-     ub.e = {
+     Jd.b = {
```

#### 3. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L13` → after: `L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-brands.js#L13) · [Before (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-brands.js#L13)

```diff
-     }, ub.i = ub.e
+     }, Jd.f = Jd.b
```

#### 4. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L15` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-brands.js#L15) · [Before (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-brands.js#L15)

```diff
-   7704: (bb, ub) => {
+   7885: (dd, Jd) => {
```

#### 5. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L20` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-brands.js#L20) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-brands.js#L20)

```diff
-     ub.b = {
+     Jd.e = {
```

#### 6. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-brands.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-brands.js#L24)

```diff
-     }, ub.e = ub.b
+     }, Jd.i = Jd.e
```

#### 7. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L26` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-brands.js#L26) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-brands.js#L26)

```diff
-   7711: (bb, ub) => {
+   7891: (dd, Jd) => {
```

#### 8. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L37` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-brands.js#L37) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-brands.js#L37)

```diff
-   7720: (bb, ub) => {
+   7896: (dd, Jd) => {
```

#### 9. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L42` → after: `L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-brands.js#L42) · [Before (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-brands.js#L42)

```diff
-     ub.e = {
+     Jd.b = {
```

#### 10. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L46` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-brands.js#L46) · [Before (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-brands.js#L46)

```diff
-     }, ub.f = ub.e
+     }, Jd.c = Jd.b
```

#### 11. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L48` → after: `L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-brands.js#L48) · [Before (L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-brands.js#L48)

```diff
-   7726: (bb, ub) => {
+   7905: (dd, Jd) => {
```

#### 12. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L57` → after: `L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-brands.js#L57) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-brands.js#L57)

```diff
-     }, ub.e = ub.b
+     }, Jd.d = Jd.b
```

#### 13. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L59` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-brands.js#L59) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-brands.js#L59)

```diff
-   7730: (bb, ub) => {
+   7908: (dd, Jd) => {
```

#### 14. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L64` → after: `L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-brands.js#L64) · [Before (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-brands.js#L64)

```diff
-     ub.c = {
+     Jd.d = {
```

#### 15. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L68` → after: `L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-brands.js#L68) · [Before (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-brands.js#L68)

```diff
-     }, ub.e = ub.c
+     }, Jd.e = Jd.d
```

#### 16. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L70` → after: `L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-brands.js#L70) · [Before (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-brands.js#L70)

```diff
-   7732: (bb, ub) => {
+   7910: (dd, Jd) => {
```

#### 17. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L75` → after: `L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-brands.js#L75) · [Before (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-brands.js#L75)

```diff
-     ub.c = {
+     Jd.d = {
```

#### 18. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L79` → after: `L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-brands.js#L79) · [Before (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-brands.js#L79)

```diff
-     }, ub.d = ub.c
+     }, Jd.f = Jd.d
```

#### 19. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L81` → after: `L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-brands.js#L81) · [Before (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-brands.js#L81)

```diff
-   7737: (bb, ub) => {
+   7915: (dd, Jd) => {
```

#### 20. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L90` → after: `L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-brands.js#L90) · [Before (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-brands.js#L90)

```diff
-     }, ub.c = ub.b
+     }, Jd.e = Jd.b
```

#### 21. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L92` → after: `L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-brands.js#L92) · [Before (L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-brands.js#L92)

```diff
-   7741: (bb, ub) => {
+   7923: (dd, Jd) => {
```

#### 22. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L101` → after: `L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-brands.js#L112) · [Before (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-brands.js#L101)

```diff
-     }, ub.c = ub.b
+     }, Jd.f = Jd.b
```

#### 23. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L103-L114` → after: `L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-brands.js#L114) · [Before (L103-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-brands.js#L103-L114)

```diff
-   7743: (bb, ub) => {
-     var hb = "x-twitter",
-       Bb = [],
-       Ob = "e61b",
-       Gb = "M357.2 48L427.8 48 273.6 224.2 455 464 313 464 201.7 318.6 74.5 464 3.8 464 168.7 275.5-5.2 48 140.4 48 240.9 180.9 357.2 48zM332.4 421.8l39.1 0-252.4-333.8-42 0 255.3 333.8z";
-     ub.c = {
-       prefix: "fab",
-       iconName: hb,
-       icon: [448, 512, Bb, Ob, Gb]
-     }, ub.e = ub.c
-   },
-   7751: (bb, ub) => {
+   7935: (dd, Jd) => {
```

#### 24. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L119` → after: `L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-brands.js#L119) · [Before (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-brands.js#L119)

```diff
-     ub.e = {
+     Jd.c = {
```

#### 25. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L123` → after: `L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-brands.js#L123) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-brands.js#L123)

```diff
-     }, ub.g = ub.e
+     }, Jd.e = Jd.c
```

#### 26. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L125` → after: `L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-brands.js#L125) · [Before (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-brands.js#L125)

```diff
-   7689: (bb, ub, hb) => {
+   7876: (dd, Jd, kd) => {
```

#### 27. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L129-L139` → after: `L129-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L129-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-brands.js#L129-L139) · [Before (L129-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-brands.js#L129-L139)

```diff
-     var Bb = hb(7696),
-       Ob = hb(7704),
-       Gb = hb(7711),
-       Ub = hb(7720),
-       Lb = hb(7726),
-       Yb = hb(7730),
-       Sb = hb(7732),
-       ab = hb(7737),
-       Hb = hb(7741),
-       wb = hb(7743),
-       Zb = hb(7751);
+     var pd = kd(7878),
+       Nd = kd(7885),
+       Wd = kd(7891),
+       Pd = kd(7896),
+       Zd = kd(7905),
+       gd = kd(7908),
+       Cd = kd(7910),
+       Kd = kd(7915),
+       od = kd(7923),
+       ld = kd(7930),
+       Qd = kd(7935);
```

#### 28. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L141-L142` → after: `L141-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-brands.js#L141-L142) · [Before (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-brands.js#L141-L142)

```diff
-       apple: Bb.i,
-       chrome: Ob.e,
+       apple: pd.f,
+       chrome: Nd.i,
```

#### 29. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L144-L145` → after: `L144-L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L144-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-brands.js#L144-L145) · [Before (L144-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-brands.js#L144-L145)

```diff
-       "google-play": Ub.f,
-       instagram: Lb.e,
+       "google-play": Pd.c,
+       instagram: Zd.d,
```

#### 30. `bundles/bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L147-L151` → after: `L147-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-00ce0ea0f8395dbba5e8d1ea850f792e7b40e5979a3cf8551818dba23759f621) · [After (L147-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-brands.js#L147-L151) · [Before (L147-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-brands.js#L147-L151)

```diff
-       tiktok: Sb.d,
-       twitch: ab.c,
-       windows: Hb.c,
-       "x-twitter": wb.e,
-       youtube: Zb.g
+       tiktok: Cd.f,
+       twitch: Kd.e,
+       windows: od.e,
+       "x-twitter": ld.f,
+       youtube: Qd.e
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/icons-duotone.js` (halsg.2bd74967 → x17cru.159bd7ce)

- **File**: `bundles/bloxd.io/chunks/js/icons-duotone.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bd)

#### 1. `bundles/bloxd.io/chunks/js/icons-duotone.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bdR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bd) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-duotone.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-duotone.js#L4)

```diff
-   7674: (bb, ub) => {
+   7863: (dd, Jd) => {
```

#### 2. `bundles/bloxd.io/chunks/js/icons-duotone.js` (Changed code · before: `L13` → after: `L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bdR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bd) · [After (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-duotone.js#L13) · [Before (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-duotone.js#L13)

```diff
-     }, ub.f = ub.e
+     }, Jd.g = Jd.e
```

#### 3. `bundles/bloxd.io/chunks/js/icons-duotone.js` (Changed code · before: `L15` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bdR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bd) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-duotone.js#L15) · [Before (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-duotone.js#L15)

```diff
-   7683: (bb, ub) => {
+   7872: (dd, Jd) => {
```

#### 4. `bundles/bloxd.io/chunks/js/icons-duotone.js` (Changed code · before: `L20` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bdR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bd) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-duotone.js#L20) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-duotone.js#L20)

```diff
-     ub.d = {
+     Jd.c = {
```

#### 5. `bundles/bloxd.io/chunks/js/icons-duotone.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bdR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bd) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-duotone.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-duotone.js#L24)

```diff
-     }, ub.h = ub.d
+     }, Jd.g = Jd.c
```

#### 6. `bundles/bloxd.io/chunks/js/icons-duotone.js` (Changed code · before: `L26` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bdR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bd) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-duotone.js#L26) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-duotone.js#L26)

```diff
-   7672: (bb, ub, hb) => {
+   7861: (dd, Jd, kd) => {
```

#### 7. `bundles/bloxd.io/chunks/js/icons-duotone.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bdR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bd) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-duotone.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-duotone.js#L30-L31)

```diff
-     var Bb = hb(7674),
-       Ob = hb(7683);
+     var pd = kd(7863),
+       Nd = kd(7872);
```

#### 8. `bundles/bloxd.io/chunks/js/icons-duotone.js` (Changed code · before: `L33-L34` → after: `L33-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bdR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-30673dc02508331beb4aa43b52ab19dc9fbaa8e7863c87c1d5ba24ca014518bd) · [After (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-duotone.js#L33-L34) · [Before (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-duotone.js#L33-L34)

```diff
-       "hat-santa": Bb.f,
-       "planet-ringed": Ob.h
+       "hat-santa": pd.g,
+       "planet-ringed": Nd.g
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/icons-regular.js` (halsg.2bd74967 → x17cru.159bd7ce)

- **File**: `bundles/bloxd.io/chunks/js/icons-regular.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8)

#### 1. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-regular.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-regular.js#L4)

```diff
-   7644: (bb, ub) => {
+   7826: (dd, Jd) => {
```

#### 2. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L13` → after: `L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-regular.js#L13) · [Before (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-regular.js#L13)

```diff
-     }, ub.e = ub.c
+     }, Jd.f = Jd.c
```

#### 3. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L15` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-regular.js#L15) · [Before (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-regular.js#L15)

```diff
-   7649: (bb, ub) => {
+   7831: (dd, Jd) => {
```

#### 4. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L20` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-regular.js#L20) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-regular.js#L20)

```diff
-     ub.e = {
+     Jd.b = {
```

#### 5. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-regular.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-regular.js#L24)

```diff
-     }, ub.g = ub.e
+     }, Jd.e = Jd.b
```

#### 6. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L26` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-regular.js#L26) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-regular.js#L26)

```diff
-   7651: (bb, ub) => {
+   7840: (dd, Jd) => {
```

#### 7. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L31` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-regular.js#L31) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-regular.js#L31)

```diff
-     ub.d = {
+     Jd.e = {
```

#### 8. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L35` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-regular.js#L35) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-regular.js#L35)

```diff
-     }, ub.f = ub.d
+     }, Jd.h = Jd.e
```

#### 9. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L37-L39` → after: `L37-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L37-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-regular.js#L37-L39) · [Before (L37-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-regular.js#L37-L39)

```diff
-   7656: (bb, ub, hb) => {
-     var Bb = hb(7663);
-     ub.c = {
+   7849: (dd, Jd, kd) => {
+     var pd = kd(7857);
+     Jd.d = {
```

#### 10. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-regular.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-regular.js#L43)

```diff
-     }, ub.e = ub.c, Bb.prefix, Bb.iconName, Bb.width, Bb.height, Bb.aliases, Bb.unicode, Bb.svgPathData, Bb.aliases
+     }, Jd.e = Jd.d, pd.prefix, pd.iconName, pd.width, pd.height, pd.aliases, pd.unicode, pd.svgPathData, pd.aliases
```

#### 11. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-regular.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-regular.js#L45)

```diff
-   7663: (bb, ub) => {
+   7857: (dd, Jd) => {
```

#### 12. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L59` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-regular.js#L59) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-regular.js#L59)

```diff
-   7636: (bb, ub, hb) => {
+   7822: (dd, Jd, kd) => {
```

#### 13. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L63-L67` → after: `L63-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L63-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-regular.js#L63-L67) · [Before (L63-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-regular.js#L63-L67)

```diff
-     var Bb = hb(7644),
-       Ob = hb(7649),
-       Gb = hb(7651),
-       Ub = hb(7656),
-       Lb = hb(7663);
+     var pd = kd(7826),
+       Nd = kd(7831),
+       Wd = kd(7840),
+       Pd = kd(7849),
+       Zd = kd(7857);
```

#### 14. `bundles/bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L69-L71` → after: `L69-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-e0b5369e6f50db924b436de1ae9f2184a08f1a9013d1e82a4ff5ffbc8aedcbe8) · [After (L69-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-regular.js#L69-L71) · [Before (L69-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-regular.js#L69-L71)

```diff
-       copy: Bb.e,
-       flag: Ob.g,
-       heart: Gb.f,
+       copy: pd.f,
+       flag: Nd.e,
+       heart: Wd.h,
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/icons-solid.js` (halsg.2bd74967 → x17cru.159bd7ce)

- **File**: `bundles/bloxd.io/chunks/js/icons-solid.js` (81 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6)

#### 1. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L4)

```diff
-   6438: (bb, ub, hb) => {
+   6582: (dd, Jd, kd) => {
```

#### 2. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L8-L36` → after: `L8-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L8-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L8-L13) · [Before (L8-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L8-L36)

```diff
-     var Bb = hb(6445),
-       Ob = hb(6457),
-       Gb = hb(6466),
-       Ub = hb(6470),
-       Lb = hb(6459),
-       Yb = hb(6479),
-       Sb = hb(6482),
-       ab = hb(6490),
-       Hb = hb(6498),
-       wb = hb(6503),
-       Zb = hb(6511),
-       Xb = hb(6517),
-       pb = hb(6524),
-       ob = hb(6530),
-       Ab = hb(6537),
-       lb = hb(6519),
- ... (13 more removed lines; see GitHub link above)
+     var pd = kd(6590),
+       Nd = kd(6594),
+       Wd = kd(6602),
+       Pd = kd(6607),
+       Zd = kd(6596),
+       gd = kd(6612),
```

#### 3. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L38-L47` → after: `L15-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L15-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L15-L23) · [Before (L38-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L38-L47)

```diff
-       Jb = hb(6619),
-       eb = hb(6628),
-       Nb = hb(6633),
-       sb = hb(6642),
-       Mb = hb(6650),
-       mb = hb(6657),
-       Ib = hb(6663),
-       Pb = hb(6669),
-       qb = hb(969),
-       Eb = hb(6672),
+       Kd = kd(6625),
+       od = kd(6631),
+       ld = kd(6634),
+       Qd = kd(6640),
+       Ld = kd(6644),
+       Od = kd(6659),
+       ed = kd(6666),
+       Rd = kd(6671),
+       Id = kd(6651),
```

#### 4. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L49` → after: `L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L25) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L49)

```diff
-       Vb = hb(6679),
+       vd = kd(6678),
```

#### 5. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L52` → after: `L28-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L28-L29) · [Before (L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L52)

```diff
-       kb = hb(6704),
+       Bd = kd(6697),
+       sd = kd(6701),
```

#### 6. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L54-L59` → after: `L31-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L31-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L31-L36) · [Before (L54-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L54-L59)

```diff
-       cb = hb(6713),
-       Qb = hb(6720),
-       Rb = hb(6723),
-       bu = hb(6729),
-       uu = hb(6734),
-       hu = hb(6739),
+       Md = kd(6709),
+       Fd = kd(6718),
+       Yd = kd(6721),
+       md = kd(6726),
+       bd = kd(6730),
+       Sd = kd(6736),
```

#### 7. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L62-L65` → after: `L39-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L39-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L39-L46) · [Before (L62-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L62-L65)

```diff
-       Gu = hb(6761),
-       Uu = hb(6765),
-       Lu = hb(6777),
-       Yu = hb(6786),
+       fd = kd(6751),
+       nd = kd(6759),
+       Ud = kd(6767),
+       yd = kd(6776),
+       Dd = kd(6783),
+       Td = kd(6789),
+       Ed = kd(6791),
+       cd = kd(1066),
```

#### 8. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L67-L71` → after: `L48-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L48-L51) · [Before (L67-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L67-L71)

```diff
-       au = hb(6800),
-       Hu = hb(6810),
-       wu = hb(6812),
-       Zu = hb(6814),
-       Xu = hb(6819),
+       rd = kd(6799),
+       ud = kd(6802),
+       td = kd(6817),
+       Vd = kd(6821),
```

#### 9. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L73` → after: `L53-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L53-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L53-L54) · [Before (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L73)

```diff
-       ou = hb(6837),
+       Hd = kd(6835),
+       wd = kd(6843),
```

#### 10. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L76-L78` → after: `L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L57) · [Before (L76-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L76-L78)

```diff
-       Ku = hb(6851),
-       Wu = hb(6768),
-       Cu = hb(6857),
+       JJ = kd(6858),
```

#### 11. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L80-L83` → after: `L59-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L59-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L59-L62) · [Before (L80-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L80-L83)

```diff
-       ru = hb(6870),
-       ju = hb(6872),
-       nu = hb(6881),
-       Du = hb(6885),
+       pJ = kd(6871),
+       NJ = kd(6876),
+       WJ = kd(6880),
+       PJ = kd(6892),
```

#### 12. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L85-L88` → after: `L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L64) · [Before (L85-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L85-L88)

```diff
-       zu = hb(6888),
-       gu = hb(6903),
-       iu = hb(6909),
-       vu = hb(6917),
+       gJ = kd(6913),
```

#### 13. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L90` → after: `L66-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L66-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L66-L70) · [Before (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L90)

```diff
-       Ju = hb(6937),
+       KJ = kd(6924),
+       oJ = kd(6928),
+       lJ = kd(6933),
+       QJ = kd(6938),
+       LJ = kd(6940),
```

#### 14. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L92-L93` → after: `L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L72) · [Before (L92-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L92-L93)

```diff
-       Nu = hb(6949),
-       su = hb(6953),
+       eJ = kd(6956),
```

#### 15. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L96-L106` → after: `L75-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L75-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L75-L84) · [Before (L96-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L96-L106)

```diff
-       Iu = hb(6970),
-       Pu = hb(6975),
-       qu = hb(6681),
-       Eu = hb(6980),
-       yu = hb(6982),
-       Vu = hb(6988),
-       Fu = hb(6992),
-       fu = hb(6998),
-       ku = hb(6928),
-       Tu = hb(7007),
-       cu = hb(7016),
+       GJ = kd(6973),
+       vJ = kd(6978),
+       xJ = kd(6904),
+       qJ = kd(6985),
+       BJ = kd(6989),
+       sJ = kd(6997),
+       iJ = kd(7e3),
+       aJ = kd(7009),
+       MJ = kd(7017),
+       FJ = kd(7031),
```

#### 16. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L108-L116` → after: `L86-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L86-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L86-L91) · [Before (L108-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L108-L116)

```diff
-       Ru = hb(7031),
-       bh = hb(7035),
-       uh = hb(7040),
-       hh = hb(7043),
-       Bh = hb(7059),
-       Oh = hb(7066),
-       Gh = hb(7070),
-       Uh = hb(7079),
-       Lh = hb(7050),
+       mJ = kd(7041),
+       bJ = kd(7047),
+       SJ = kd(7055),
+       jJ = kd(7060),
+       XJ = kd(7069),
+       fJ = kd(7075),
```

#### 17. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L118-L120` → after: `L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L93) · [Before (L118-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L118-L120)

```diff
-       Sh = hb(7086),
-       ah = hb(7088),
-       Hh = hb(7096),
+       UJ = kd(7093),
```

#### 18. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L122-L123` → after: `L95-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L95-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L95-L98) · [Before (L122-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L122-L123)

```diff
-       Zh = hb(7108),
-       Xh = hb(7112),
+       DJ = kd(7102),
+       TJ = kd(7104),
+       EJ = kd(7110),
+       cJ = kd(6809),
```

#### 19. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L125-L131` → after: `L100-L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L100-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L100-L105) · [Before (L125-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L125-L131)

```diff
-       oh = hb(7124),
-       Ah = hb(7127),
-       lh = hb(7130),
-       Kh = hb(7139),
-       Wh = hb(7141),
-       Ch = hb(7150),
-       dh = hb(7154),
+       rJ = kd(7125),
+       uJ = kd(7134),
+       tJ = kd(7143),
+       VJ = kd(7152),
+       zJ = kd(7062),
+       HJ = kd(7155),
```

#### 20. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L133-L141` → after: `L107-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L107-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L107-L119) · [Before (L133-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L133-L141)

```diff
-       jh = hb(7164),
-       nh = hb(7167),
-       Dh = hb(7175),
-       xh = hb(7178),
-       zh = hb(7186),
-       gh = hb(7203),
-       ih = hb(7211),
-       vh = hb(7215),
-       th = hb(7221),
+       AJ = kd(7162),
+       dk = kd(7166),
+       Jk = kd(7170),
+       kk = kd(7177),
+       pk = kd(7181),
+       Nk = kd(7191),
+       Wk = kd(7196),
+       Pk = kd(7200),
+       Zk = kd(7206),
+       gk = kd(7184),
+       Ck = kd(7210),
+       Kk = kd(7218),
+       lk = kd(7222),
```

#### 21. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L144-L148` → after: `L122-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L122-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L122-L127) · [Before (L144-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L144-L148)

```diff
-       Nh = hb(7234),
-       sh = hb(7239),
-       Mh = hb(6900),
-       mh = hb(7244),
-       Ih = hb(7246),
+       Ok = kd(7233),
+       ek = kd(7238),
+       Rk = kd(7240),
+       Ik = kd(7247),
+       Gk = kd(7250),
+       vk = kd(7253),
```

#### 22. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L155-L161` → after: `L130-L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L130-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L130-L134) · [Before (L155-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L155-L161)

```diff
-       fh = hb(7271),
-       kh = hb(7276),
-       Th = hb(6452),
-       ch = hb(7283),
-       Qh = hb(7290),
-       Rh = hb(7293),
-       bB = hb(7297),
+       Bk = kd(7270),
+       sk = kd(7272),
+       ik = kd(7279),
+       ak = kd(7291),
+       Mk = kd(7295),
```

#### 23. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L163-L170` → after: `L136-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L136-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L136-L138) · [Before (L163-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L163-L170)

```diff
-       hB = hb(7310),
-       BB = hb(7312),
-       OB = hb(7315),
-       GB = hb(7317),
-       UB = hb(7321),
-       LB = hb(7304),
-       YB = hb(6754),
-       SB = hb(7327),
+       Yk = kd(7307),
+       mk = kd(7314),
+       bk = kd(7325),
```

#### 24. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L172-L177` → after: `L140-L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L140-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L140-L146) · [Before (L172-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L172-L177)

```diff
-       HB = hb(7336),
-       wB = hb(7347),
-       ZB = hb(7340),
-       XB = hb(7350),
-       pB = hb(7357),
-       oB = hb(7362),
+       jk = kd(7333),
+       Xk = kd(7339),
+       fk = kd(7344),
+       nk = kd(7351),
+       Uk = kd(7358),
+       yk = kd(7364),
+       Dk = kd(7037),
```

#### 25. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L180-L181` → after: `L149-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L149-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L149-L151) · [Before (L180-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L180-L181)

```diff
-       KB = hb(7377),
-       WB = hb(7379),
+       ck = kd(7374),
+       hk = kd(6931),
+       rk = kd(7282),
```

#### 26. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L183-L193` → after: `L153-L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L153-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L153-L162) · [Before (L183-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L183-L193)

```diff
-       dB = hb(7386),
-       rB = hb(7391),
-       jB = hb(7194),
-       nB = hb(7396),
-       DB = hb(7404),
-       xB = hb(7410),
-       zB = hb(7419),
-       gB = hb(7426),
-       iB = hb(7433),
-       vB = hb(7442),
-       tB = hb(7448),
+       tk = kd(7389),
+       Vk = kd(7398),
+       zk = kd(7403),
+       Hk = kd(7405),
+       wk = kd(6592),
+       Ak = kd(7413),
+       dp = kd(7422),
+       Jp = kd(7427),
+       kp = kd(7434),
+       pp = kd(7439),
```

#### 27. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L196-L211` → after: `L165-L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L165-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L165-L177) · [Before (L196-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L196-L211)

```diff
-       NB = hb(7461),
-       sB = hb(6821),
-       MB = hb(7463),
-       mB = hb(7466),
-       IB = hb(7468),
-       PB = hb(7473),
-       qB = hb(7480),
-       EB = hb(7489),
-       yB = hb(7498),
-       VB = hb(7505),
-       FB = hb(7507),
-       fB = hb(7513),
-       kB = hb(7515),
-       TB = hb(7518),
-       cB = hb(7527),
-       QB = hb(7529),
+       Pp = kd(7462),
+       Zp = kd(7467),
+       gp = kd(7474),
+       Cp = kd(7442),
+       Kp = kd(6887),
+       op = kd(7477),
+       lp = kd(7483),
+       Qp = kd(7492),
+       Lp = kd(7509),
+       Op = kd(7500),
+       ep = kd(7512),
+       Rp = kd(7521),
+       Ip = kd(7528),
```

#### 28. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L213-L230` → after: `L179-L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L179-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L179-L230) · [Before (L213-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L213-L230)

```diff
-       bO = hb(7542),
-       uO = hb(7551),
-       hO = hb(7556),
-       BO = hb(7563),
-       OO = hb(7567),
-       GO = hb(7572),
-       UO = hb(7576),
-       LO = hb(7578),
-       YO = hb(7581),
-       SO = hb(7585),
-       aO = hb(7588),
-       HO = hb(7596),
-       wO = hb(7605),
-       ZO = hb(7614),
-       XO = hb(7617),
-       pO = hb(7619),
- ... (2 more removed lines; see GitHub link above)
+       vp = kd(7535),
+       xp = kd(7543),
+       qp = kd(7550),
+       Bp = kd(7552),
+       sp = kd(7557),
+       ip = kd(7564),
+       ap = kd(7317),
+       Mp = kd(7573),
+       Fp = kd(7579),
+       Yp = kd(7587),
+       mp = kd(7590),
+       bp = kd(7595),
+       Sp = kd(7597),
+       jp = kd(7603),
+       Xp = kd(7610),
+       fp = kd(7613),
+ ... (36 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L233-L235` → after: `L233-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L233-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L233-L235) · [Before (L233-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L233-L235)

```diff
-       "angle-double-up": Ob.g,
-       "angle-down": Gb.f,
-       "angle-up": Ub.e,
+       "angle-double-up": Nd.d,
+       "angle-down": Wd.g,
+       "angle-up": Pd.g,
```

#### 30. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L237-L238` → after: `L237-L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L237-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L237-L238) · [Before (L237-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L237-L238)

```diff
-       "arrow-down-to-line": Yb.f,
-       "arrow-left": Sb.h,
+       "arrow-down-to-line": gd.d,
+       "arrow-left": Cd.e,
```

#### 31. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L240-L241` → after: `L240-L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L240-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L240-L241) · [Before (L240-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L240-L241)

```diff
-       "arrow-up": Hb.h,
-       "arrow-up-from-line": wb.f,
+       "arrow-up": od.f,
+       "arrow-up-from-line": ld.d,
```

#### 32. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L243-L244` → after: `L243-L244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L243-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L243-L244) · [Before (L243-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L243-L244)

```diff
-       arrows: Xb.d,
-       "arrows-h": pb.d,
+       arrows: Ld.f,
+       "arrows-h": Od.h,
```

#### 33. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L248` → after: `L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L248) · [Before (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L248)

```diff
-       award: Kb.g,
+       award: Gd.e,
```

#### 34. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L250` → after: `L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L250) · [Before (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L250)

```diff
-       ban: Cb.f,
+       ban: xd.g,
```

#### 35. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L252-L254` → after: `L252-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L252-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L252-L254) · [Before (L252-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L252-L254)

```diff
-       bee: rb.g,
-       bell: jb.f,
-       "block-question": nb.g,
+       bee: Bd.f,
+       bell: sd.i,
+       "block-question": ad.f,
```

#### 36. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L257-L260` → after: `L257-L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L257-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L257-L260) · [Before (L257-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L257-L260)

```diff
-       calendar: zb.f,
-       "caret-down": gb.e,
-       "caret-left": ib.f,
-       "caret-right": vb.d,
+       calendar: Yd.e,
+       "caret-down": md.h,
+       "caret-left": bd.e,
+       "caret-right": Sd.f,
```

#### 37. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L263-L266` → after: `L263-L266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L263-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L263-L266) · [Before (L263-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L263-L266)

```diff
-       check: eb.e,
-       "chess-knight": Nb.f,
-       "chess-rook": sb.f,
-       "child-reaching": Mb.c,
+       check: fd.d,
+       "chess-knight": nd.d,
+       "chess-rook": Ud.e,
+       "child-reaching": yd.f,
```

#### 38. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L270-L271` → after: `L270-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L270-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L270-L271) · [Before (L270-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L270-L271)

```diff
-       "circle-question": qb.e,
-       "circle-xmark": Eb.f,
+       "circle-question": cd.f,
+       "circle-xmark": hd.e,
```

#### 39. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L273-L274` → after: `L273-L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L273-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L273-L274) · [Before (L273-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L273-L274)

```diff
-       cog: Vb.g,
-       coins: Fb.i,
+       cog: ud.f,
+       coins: td.f,
```

#### 40. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L276-L277` → after: `L276-L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L276-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L276-L277) · [Before (L276-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L276-L277)

```diff
-       commenting: kb.g,
-       compress: Tb.f,
+       commenting: zd.h,
+       compress: Hd.i,
```

#### 41. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L279` → after: `L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L279) · [Before (L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L279)

```diff
-       cookie: Qb.c,
+       cookie: Ad.h,
```

#### 42. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L282` → after: `L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L282) · [Before (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L282)

```diff
-       crown: uu.c,
+       crown: kJ.g,
```

#### 43. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L284-L288` → after: `L284-L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L284-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L284-L288) · [Before (L284-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L284-L288)

```diff
-       cubes: Bu.f,
-       cut: Ou.g,
-       dice: Gu.h,
-       dizzy: Uu.g,
-       "door-closed": Lu.e,
+       cubes: NJ.d,
+       cut: WJ.e,
+       dice: PJ.d,
+       dizzy: ZJ.e,
+       "door-closed": gJ.h,
```

#### 44. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L291` → after: `L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L291) · [Before (L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L291)

```diff
-       edit: au.h,
+       edit: oJ.f,
```

#### 45. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L293-L298` → after: `L293-L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L293-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L293-L298) · [Before (L293-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L293-L298)

```diff
-       "ellipsis-h": wu.g,
-       exclamation: Zu.f,
-       "exclamation-triangle": Xu.f,
-       expand: pu.f,
-       "external-link": ou.h,
-       eye: Au.c,
+       "ellipsis-h": QJ.f,
+       exclamation: LJ.g,
+       "exclamation-triangle": OJ.g,
+       expand: eJ.c,
+       "external-link": RJ.f,
+       eye: IJ.f,
```

#### 46. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L304-L305` → after: `L304-L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L304-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L304-L305) · [Before (L304-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L304-L305)

```diff
-       "face-worried": ru.g,
-       "feather-alt": ju.f,
+       "face-worried": sJ.e,
+       "feather-alt": iJ.e,
```

#### 47. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L307-L308` → after: `L307-L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L307-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L307-L308) · [Before (L307-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L307-L308)

```diff
-       "file-alt": Du.i,
-       "file-clipboard": xu.e,
+       "file-alt": MJ.e,
+       "file-clipboard": FJ.c,
```

#### 48. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L311-L319` → after: `L311-L319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L311-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L311-L319) · [Before (L311-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L311-L319)

```diff
-       film: iu.d,
-       fire: vu.h,
-       "fist-raised": tu.f,
-       flag: Ju.d,
-       folder: eu.g,
-       "folder-image": Nu.h,
-       "folder-open": su.g,
-       gamepad: Mu.h,
-       "gamepad-modern": mu.h,
+       film: bJ.f,
+       fire: SJ.f,
+       "fist-raised": jJ.i,
+       flag: XJ.g,
+       folder: fJ.f,
+       "folder-image": nJ.f,
+       "folder-open": UJ.f,
+       gamepad: yJ.c,
+       "gamepad-modern": DJ.f,
```

#### 49. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L321` → after: `L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L321) · [Before (L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L321)

```diff
-       gavel: Pu.f,
+       gavel: EJ.e,
```

#### 50. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L323-L325` → after: `L323-L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L323-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L323-L325) · [Before (L323-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L323-L325)

```diff
-       gem: Eu.g,
-       globe: yu.d,
-       "grid-2": Vu.g,
+       gem: hJ.d,
+       globe: rJ.g,
+       "grid-2": uJ.d,
```

#### 51. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L327` → after: `L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L327) · [Before (L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L327)

```diff
-       "hand-back-point-up": fu.e,
+       "hand-back-point-up": VJ.f,
```

#### 52. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L329-L336` → after: `L329-L336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L329-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L329-L336) · [Before (L329-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L329-L336)

```diff
-       "hand-holding-medical": Tu.d,
-       "hand-point-left": cu.h,
-       "hand-wave": Qu.f,
-       "hands-clapping": Ru.f,
-       "hat-witch": bh.d,
-       heart: uh.f,
-       "heart-music-camera-bolt": hh.i,
-       history: Bh.h,
+       "hand-holding-medical": HJ.i,
+       "hand-point-left": wJ.f,
+       "hand-wave": AJ.e,
+       "hands-clapping": dk.d,
+       "hat-witch": Jk.e,
+       heart: kk.i,
+       "heart-music-camera-bolt": pk.f,
+       history: Nk.d,
```

#### 53. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L338-L340` → after: `L338-L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L338-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L338-L340) · [Before (L338-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L338-L340)

```diff
-       "hourglass-clock": Gh.f,
-       "hourglass-empty": Uh.h,
-       house: AO.f,
+       "hourglass-clock": Pk.d,
+       "hourglass-empty": Zk.e,
+       house: vN.d,
```

#### 54. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L342-L346` → after: `L342-L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L342-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L342-L346) · [Before (L342-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L342-L346)

```diff
-       image: Yh.g,
-       "image-slash": Sh.h,
-       "info-circle": ah.c,
-       joystick: Hh.c,
-       "layer-group": wh.f,
+       image: Ck.e,
+       "image-slash": Kk.e,
+       "info-circle": lk.h,
+       joystick: Qk.d,
+       "layer-group": Lk.h,
```

#### 55. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L348-L349` → after: `L348-L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L348-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L348-L349) · [Before (L348-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L348-L349)

```diff
-       lightbulb: Xh.e,
-       link: ph.f,
+       lightbulb: ek.g,
+       link: Rk.h,
```

#### 56. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L351` → after: `L351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L351) · [Before (L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L351)

```diff
-       "list-squares": Ah.h,
+       "list-squares": Gk.g,
```

#### 57. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L355` → after: `L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L355) · [Before (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L355)

```diff
-       "lock-open": Ch.c,
+       "lock-open": Bk.f,
```

#### 58. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L357-L360` → after: `L357-L360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L357-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L357-L360) · [Before (L357-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L357-L360)

```diff
-       male: rh.f,
-       "map-marker-check": jh.f,
-       "map-marker-times": nh.e,
-       "map-marker-xmark": Dh.e,
+       male: ik.g,
+       "map-marker-check": ak.g,
+       "map-marker-times": Mk.f,
+       "map-marker-xmark": Fk.h,
```

#### 59. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L362-L366` → after: `L362-L366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L362-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L362-L366) · [Before (L362-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L362-L366)

```diff
-       "minus-square": zh.c,
-       moon: gh.h,
-       mouse: ih.d,
-       music: vh.g,
-       "music-slash": th.c,
+       "minus-square": mk.d,
+       moon: bk.e,
+       mouse: Sk.h,
+       music: jk.e,
+       "music-slash": Xk.f,
```

#### 60. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L369-L370` → after: `L369-L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L369-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L369-L370) · [Before (L369-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L369-L370)

```diff
-       pants: Nh.e,
-       "party-horn": sh.d,
+       pants: Uk.c,
+       "party-horn": yk.f,
```

#### 61. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L372-L374` → after: `L372-L374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L372-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L372-L374) · [Before (L372-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L372-L374)

```diff
-       pause: mh.e,
-       pen: Ih.h,
-       "pen-field": Ph.h,
+       pause: Tk.h,
+       pen: Ek.d,
+       "pen-field": ck.f,
```

#### 62. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L378` → after: `L378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L378) · [Before (L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L378)

```diff
-       "person-arrow-up-from-line": Vh.i,
+       "person-arrow-up-from-line": tk.g,
```

#### 63. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L380-L381` → after: `L380-L381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L380-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L380-L381) · [Before (L380-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L380-L381)

```diff
-       "person-military-pointing": fh.e,
-       play: kh.g,
+       "person-military-pointing": zk.g,
+       play: Hk.d,
```

#### 64. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L383-L388` → after: `L383-L388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L383-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L383-L388) · [Before (L383-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L383-L388)

```diff
-       "plus-circle": ch.e,
-       "power-off": Qh.d,
-       "ranking-star": Rh.f,
-       recycle: bB.c,
-       "redo-alt": uB.g,
-       refresh: hB.e,
+       "plus-circle": Ak.i,
+       "power-off": dp.g,
+       "ranking-star": Jp.g,
+       recycle: kp.e,
+       "redo-alt": pp.h,
+       refresh: Np.g,
```

#### 65. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L390-L392` → after: `L390-L392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L390-L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L390-L392) · [Before (L390-L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L390-L392)

```diff
-       "rocket-launch": OB.f,
-       "rotate-forward": GB.c,
-       "rotate-left": UB.f,
+       "rocket-launch": Pp.d,
+       "rotate-forward": Zp.g,
+       "rotate-left": gp.e,
```

#### 66. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L395` → after: `L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L395) · [Before (L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L395)

```diff
-       search: SB.d,
+       search: op.f,
```

#### 67. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L397` → after: `L397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L397) · [Before (L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L397)

```diff
-       "shield-alt": HB.i,
+       "shield-alt": Qp.d,
```

#### 68. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L400-L405` → after: `L400-L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L400-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L400-L405) · [Before (L400-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L400-L405)

```diff
-       shirt: XB.c,
-       shoe: pB.h,
-       "shopping-cart": oB.i,
-       "sign-out-alt": AB.h,
-       skull: lB.h,
-       smile: KB.f,
+       shirt: ep.g,
+       shoe: Rp.f,
+       "shopping-cart": Ip.e,
+       "sign-out-alt": Gp.f,
+       skull: vp.g,
+       smile: xp.i,
```

#### 69. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L407-L408` → after: `L407-L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L407-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L407-L408) · [Before (L407-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L407-L408)

```diff
-       sparkle: CB.i,
-       "square-dashed": rB.f,
+       sparkle: Bp.f,
+       "square-dashed": ip.g,
```

#### 70. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L410` → after: `L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L410) · [Before (L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L410)

```diff
-       star: nB.h,
+       star: Mp.f,
```

#### 71. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L412-L415` → after: `L412-L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L412-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L412-L415) · [Before (L412-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L412-L415)

```diff
-       store: DB.g,
-       subtract: xB.f,
-       "sun-bright": zB.f,
-       swords: gB.f,
+       store: Fp.f,
+       subtract: Yp.c,
+       "sun-bright": mp.e,
+       swords: bp.d,
```

#### 72. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L417` → after: `L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L417) · [Before (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L417)

```diff
-       "t-shirt": oO.b,
+       "t-shirt": GN.e,
```

#### 73. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L419-L421` → after: `L419-L421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L419-L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L419-L421) · [Before (L419-L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L419-L421)

```diff
-       "tachometer-alt-fast": tB.e,
-       terminal: JB.g,
-       "trash-alt": eB.d,
+       "tachometer-alt-fast": Xp.f,
+       terminal: fp.f,
+       "trash-alt": np.i,
```

#### 74. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L424-L426` → after: `L424-L426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L424-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L424-L426) · [Before (L424-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L424-L426)

```diff
-       trophy: MB.h,
-       tshirt: oO.c,
-       "up-from-bracket": mB.g,
+       trophy: Dp.f,
+       tshirt: GN.g,
+       "up-from-bracket": Tp.i,
```

#### 75. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L428-L430` → after: `L428-L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L428-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L428-L430) · [Before (L428-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L428-L430)

```diff
-       user: PB.c,
-       "user-astronaut": qB.e,
-       "user-check": EB.g,
+       user: cp.g,
+       "user-astronaut": hp.f,
+       "user-check": rp.f,
```

#### 76. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L432` → after: `L432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L432) · [Before (L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L432)

```diff
-       "user-friends": VB.c,
+       "user-friends": Vp.h,
```

#### 77. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L435` → after: `L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L435) · [Before (L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L435)

```diff
-       "user-minus": kB.e,
+       "user-minus": wp.h,
```

#### 78. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L437-L440` → after: `L437-L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L437-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L437-L440) · [Before (L437-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L437-L440)

```diff
-       "user-slash": cB.g,
-       "user-unlock": QB.h,
-       "users-crown": RB.d,
-       "users-gear": bO.e,
+       "user-slash": dN.d,
+       "user-unlock": JN.f,
+       "users-crown": kN.f,
+       "users-gear": pN.f,
```

#### 79. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L442` → after: `L442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L442) · [Before (L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L442)

```diff
-       "video-camera": hO.h,
+       "video-camera": WN.e,
```

#### 80. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L446` → after: `L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L446) · [Before (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L446)

```diff
-       "volume-medium": UO.e,
+       "volume-medium": CN.f,
```

#### 81. `bundles/bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L450-L455` → after: `L450-L455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6R450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-5c02dd3dbc69089e3ce6a977d180dd18b63c8518ccf12666ca65f95608bc3bb6) · [After (L450-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/icons-solid.js#L450-L455) · [Before (L450-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/icons-solid.js#L450-L455)

```diff
-       "wifi-3": aO.g,
-       "wifi-strong": HO.f,
-       wrench: wO.h,
-       x: ZO.h,
-       xmark: XO.g,
-       zap: pO.g
+       "wifi-3": QN.f,
+       "wifi-strong": LN.c,
+       wrench: ON.e,
+       x: eN.e,
+       xmark: RN.f,
+       zap: IN.d
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/itemSprites.js` (halsg.2bd74967 → x17cru.159bd7ce)

- **File**: `bundles/bloxd.io/chunks/js/itemSprites.js` (1732 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c)

#### 1. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L4)

```diff
-   51036: (bb, ub, hb) => {
+   51597: (dd, Jd, kd) => {
```

#### 2. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L24)

```diff
-       return null !== (ub = Yb.get(bb)) && void 0 !== ub ? ub : ""
+       return null !== (Jd = gd.get(dd)) && void 0 !== Jd ? Jd : ""
```

#### 3. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L29` → after: `L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L29) · [Before (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L29)

```diff
-       return null === ub ? null : "" === ub ? hb(50940) : hb(51045)(`./${ub}.png`)
+       return null === Jd ? null : "" === Jd ? kd(51522) : kd(51606)(`./${Jd}.png`)
```

#### 4. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L32)

```diff
-   51045: (bb, ub, hb) => {
+   51606: (dd, Jd, kd) => {
```

#### 5. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L34-L1758` → after: `L34-L1758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L34-L1758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L34-L1758) · [Before (L34-L1758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L34-L1758)

```diff
-       "./67.png": 51053,
-       "./67_projectile_base.png": 51062,
-       "./67_projectile_boosted.png": 51065,
-       "./AK-47.png": 51073,
-       "./AWP.png": 51079,
-       "./Block-19.png": 51081,
-       "./DMR.png": 51088,
-       "./Deagle.png": 51095,
-       "./Double-barreled.png": 51100,
-       "./FMR.png": 51105,
-       "./GPMG.png": 51112,
-       "./M16.png": 51120,
-       "./M1911.png": 51128,
-       "./MP40.png": 51135,
-       "./Mini Izu.png": 51144,
-       "./Minigun.png": 51146,
- ... (1709 more removed lines; see GitHub link above)
+       "./67.png": 51608,
+       "./67_projectile_base.png": 51614,
+       "./67_projectile_boosted.png": 51618,
+       "./AK-47.png": 51620,
+       "./AWP.png": 51626,
+       "./Block-19.png": 51631,
+       "./DMR.png": 51640,
+       "./Deagle.png": 51642,
+       "./Double-barreled.png": 51646,
+       "./FMR.png": 51650,
+       "./GPMG.png": 51659,
+       "./M16.png": 51662,
+       "./M1911.png": 51668,
+       "./MP40.png": 51671,
+       "./Mini Izu.png": 51676,
+       "./Minigun.png": 51681,
+ ... (1709 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1775` → after: `L1775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1775) · [Before (L1775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1775)

```diff
-     }, Ob.resolve = Gb, bb.exports = Ob, Ob.id = 51045
+     }, Nd.resolve = Wd, dd.exports = Nd, Nd.id = 51606
```

#### 7. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1777` → after: `L1777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1777) · [Before (L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1777)

```diff
-   51053: (bb, ub, hb) => {
+   51608: (dd, Jd, kd) => {
```

#### 8. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1780` → after: `L1780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1780) · [Before (L1780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1780)

```diff
-   51062: (bb, ub, hb) => {
+   51614: (dd, Jd, kd) => {
```

#### 9. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1783` → after: `L1783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1783) · [Before (L1783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1783)

```diff
-   51065: (bb, ub, hb) => {
+   51618: (dd, Jd, kd) => {
```

#### 10. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1786` → after: `L1786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1786) · [Before (L1786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1786)

```diff
-   51073: (bb, ub, hb) => {
+   51620: (dd, Jd, kd) => {
```

#### 11. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1789` → after: `L1789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1789) · [Before (L1789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1789)

```diff
-   51079: (bb, ub, hb) => {
+   51626: (dd, Jd, kd) => {
```

#### 12. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1792` → after: `L1792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1792) · [Before (L1792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1792)

```diff
-   51081: (bb, ub, hb) => {
+   51631: (dd, Jd, kd) => {
```

#### 13. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1795` → after: `L1795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1795) · [Before (L1795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1795)

```diff
-   51088: (bb, ub, hb) => {
+   51640: (dd, Jd, kd) => {
```

#### 14. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1798` → after: `L1798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1798) · [Before (L1798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1798)

```diff
-   51095: (bb, ub, hb) => {
+   51642: (dd, Jd, kd) => {
```

#### 15. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1801` → after: `L1801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1801) · [Before (L1801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1801)

```diff
-   51100: (bb, ub, hb) => {
+   51646: (dd, Jd, kd) => {
```

#### 16. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1804` → after: `L1804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1804) · [Before (L1804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1804)

```diff
-   51105: (bb, ub, hb) => {
+   51650: (dd, Jd, kd) => {
```

#### 17. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1807` → after: `L1807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1807) · [Before (L1807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1807)

```diff
-   51112: (bb, ub, hb) => {
+   51659: (dd, Jd, kd) => {
```

#### 18. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1810` → after: `L1810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1810) · [Before (L1810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1810)

```diff
-   51120: (bb, ub, hb) => {
+   51662: (dd, Jd, kd) => {
```

#### 19. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1813` → after: `L1813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1813) · [Before (L1813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1813)

```diff
-   51128: (bb, ub, hb) => {
+   51668: (dd, Jd, kd) => {
```

#### 20. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1816` → after: `L1816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1816) · [Before (L1816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1816)

```diff
-   51135: (bb, ub, hb) => {
+   51671: (dd, Jd, kd) => {
```

#### 21. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1819` → after: `L1819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1819) · [Before (L1819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1819)

```diff
-   51144: (bb, ub, hb) => {
+   51676: (dd, Jd, kd) => {
```

#### 22. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1822` → after: `L1822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1822) · [Before (L1822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1822)

```diff
-   51146: (bb, ub, hb) => {
+   51681: (dd, Jd, kd) => {
```

#### 23. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1825` → after: `L1825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1825) · [Before (L1825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1825)

```diff
-   51150: (bb, ub, hb) => {
+   51688: (dd, Jd, kd) => {
```

#### 24. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1828` → after: `L1828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1828) · [Before (L1828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1828)

```diff
-   51159: (bb, ub, hb) => {
+   51691: (dd, Jd, kd) => {
```

#### 25. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1831` → after: `L1831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1831) · [Before (L1831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1831)

```diff
-   51162: (bb, ub, hb) => {
+   51698: (dd, Jd, kd) => {
```

#### 26. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1834` → after: `L1834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1834) · [Before (L1834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1834)

```diff
-   51171: (bb, ub, hb) => {
+   51705: (dd, Jd, kd) => {
```

#### 27. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1837` → after: `L1837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1837) · [Before (L1837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1837)

```diff
-   51180: (bb, ub, hb) => {
+   51712: (dd, Jd, kd) => {
```

#### 28. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1840` → after: `L1840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1840) · [Before (L1840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1840)

```diff
-   51185: (bb, ub, hb) => {
+   51715: (dd, Jd, kd) => {
```

#### 29. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1843` → after: `L1843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1843) · [Before (L1843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1843)

```diff
-   51187: (bb, ub, hb) => {
+   51718: (dd, Jd, kd) => {
```

#### 30. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1846` → after: `L1846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1846) · [Before (L1846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1846)

```diff
-   51189: (bb, ub, hb) => {
+   51727: (dd, Jd, kd) => {
```

#### 31. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1849` → after: `L1849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1849) · [Before (L1849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1849)

```diff
-   51197: (bb, ub, hb) => {
+   51729: (dd, Jd, kd) => {
```

#### 32. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1852` → after: `L1852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1852) · [Before (L1852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1852)

```diff
-   51199: (bb, ub, hb) => {
+   51732: (dd, Jd, kd) => {
```

#### 33. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1855` → after: `L1855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1855) · [Before (L1855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1855)

```diff
-   51206: (bb, ub, hb) => {
+   51735: (dd, Jd, kd) => {
```

#### 34. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1858` → after: `L1858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1858) · [Before (L1858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1858)

```diff
-   51210: (bb, ub, hb) => {
+   51738: (dd, Jd, kd) => {
```

#### 35. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1861` → after: `L1861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1861) · [Before (L1861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1861)

```diff
-   51214: (bb, ub, hb) => {
+   51744: (dd, Jd, kd) => {
```

#### 36. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1864` → after: `L1864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1864) · [Before (L1864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1864)

```diff
-   51221: (bb, ub, hb) => {
+   51749: (dd, Jd, kd) => {
```

#### 37. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1867` → after: `L1867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1867) · [Before (L1867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1867)

```diff
-   51226: (bb, ub, hb) => {
+   51757: (dd, Jd, kd) => {
```

#### 38. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1870` → after: `L1870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1870) · [Before (L1870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1870)

```diff
-   51235: (bb, ub, hb) => {
+   51759: (dd, Jd, kd) => {
```

#### 39. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1873` → after: `L1873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1873) · [Before (L1873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1873)

```diff
-   51242: (bb, ub, hb) => {
+   51768: (dd, Jd, kd) => {
```

#### 40. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1876` → after: `L1876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1876) · [Before (L1876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1876)

```diff
-   51244: (bb, ub, hb) => {
+   51773: (dd, Jd, kd) => {
```

#### 41. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1879` → after: `L1879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1879) · [Before (L1879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1879)

```diff
-   51250: (bb, ub, hb) => {
+   51779: (dd, Jd, kd) => {
```

#### 42. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1882` → after: `L1882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1882) · [Before (L1882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1882)

```diff
-   51258: (bb, ub, hb) => {
+   51785: (dd, Jd, kd) => {
```

#### 43. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1885` → after: `L1885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1885) · [Before (L1885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1885)

```diff
-   51260: (bb, ub, hb) => {
+   51790: (dd, Jd, kd) => {
```

#### 44. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1888` → after: `L1888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1888) · [Before (L1888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1888)

```diff
-   51262: (bb, ub, hb) => {
+   51793: (dd, Jd, kd) => {
```

#### 45. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1891` → after: `L1891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1891) · [Before (L1891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1891)

```diff
-   51267: (bb, ub, hb) => {
+   51795: (dd, Jd, kd) => {
```

#### 46. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1894` → after: `L1894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1894) · [Before (L1894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1894)

```diff
-   51273: (bb, ub, hb) => {
+   51799: (dd, Jd, kd) => {
```

#### 47. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1897` → after: `L1897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1897) · [Before (L1897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1897)

```diff
-   51279: (bb, ub, hb) => {
+   51805: (dd, Jd, kd) => {
```

#### 48. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1900` → after: `L1900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1900) · [Before (L1900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1900)

```diff
-   51287: (bb, ub, hb) => {
+   51812: (dd, Jd, kd) => {
```

#### 49. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1903` → after: `L1903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1903) · [Before (L1903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1903)

```diff
-   51294: (bb, ub, hb) => {
+   51814: (dd, Jd, kd) => {
```

#### 50. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1906` → after: `L1906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1906) · [Before (L1906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1906)

```diff
-   51299: (bb, ub, hb) => {
+   51823: (dd, Jd, kd) => {
```

#### 51. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1909` → after: `L1909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1909) · [Before (L1909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1909)

```diff
-   51306: (bb, ub, hb) => {
+   51827: (dd, Jd, kd) => {
```

#### 52. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1912` → after: `L1912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1912) · [Before (L1912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1912)

```diff
-   51310: (bb, ub, hb) => {
+   51836: (dd, Jd, kd) => {
```

#### 53. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1915` → after: `L1915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1915) · [Before (L1915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1915)

```diff
-   51317: (bb, ub, hb) => {
+   51844: (dd, Jd, kd) => {
```

#### 54. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1918` → after: `L1918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1918) · [Before (L1918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1918)

```diff
-   51322: (bb, ub, hb) => {
+   51848: (dd, Jd, kd) => {
```

#### 55. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1921` → after: `L1921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1921) · [Before (L1921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1921)

```diff
-   51328: (bb, ub, hb) => {
+   51856: (dd, Jd, kd) => {
```

#### 56. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1924` → after: `L1924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1924) · [Before (L1924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1924)

```diff
-   51336: (bb, ub, hb) => {
+   51859: (dd, Jd, kd) => {
```

#### 57. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1927` → after: `L1927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1927) · [Before (L1927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1927)

```diff
-   51344: (bb, ub, hb) => {
+   51866: (dd, Jd, kd) => {
```

#### 58. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1930` → after: `L1930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1930) · [Before (L1930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1930)

```diff
-   51348: (bb, ub, hb) => {
+   51873: (dd, Jd, kd) => {
```

#### 59. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1933` → after: `L1933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1933) · [Before (L1933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1933)

```diff
-   51353: (bb, ub, hb) => {
+   51876: (dd, Jd, kd) => {
```

#### 60. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1936` → after: `L1936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1936) · [Before (L1936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1936)

```diff
-   51362: (bb, ub, hb) => {
+   51880: (dd, Jd, kd) => {
```

#### 61. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1939` → after: `L1939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1939) · [Before (L1939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1939)

```diff
-   51370: (bb, ub, hb) => {
+   51888: (dd, Jd, kd) => {
```

#### 62. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1942` → after: `L1942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1942) · [Before (L1942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1942)

```diff
-   51374: (bb, ub, hb) => {
+   51893: (dd, Jd, kd) => {
```

#### 63. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1945` → after: `L1945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1945) · [Before (L1945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1945)

```diff
-   51383: (bb, ub, hb) => {
+   51898: (dd, Jd, kd) => {
```

#### 64. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1948` → after: `L1948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1948) · [Before (L1948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1948)

```diff
-   51387: (bb, ub, hb) => {
+   51903: (dd, Jd, kd) => {
```

#### 65. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1951` → after: `L1951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1951) · [Before (L1951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1951)

```diff
-   51396: (bb, ub, hb) => {
+   51908: (dd, Jd, kd) => {
```

#### 66. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1954` → after: `L1954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1954) · [Before (L1954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1954)

```diff
-   51405: (bb, ub, hb) => {
+   51917: (dd, Jd, kd) => {
```

#### 67. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1957` → after: `L1957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1957) · [Before (L1957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1957)

```diff
-   51410: (bb, ub, hb) => {
+   51921: (dd, Jd, kd) => {
```

#### 68. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1960` → after: `L1960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1960) · [Before (L1960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1960)

```diff
-   51419: (bb, ub, hb) => {
+   51923: (dd, Jd, kd) => {
```

#### 69. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1963` → after: `L1963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1963) · [Before (L1963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1963)

```diff
-   51423: (bb, ub, hb) => {
+   51925: (dd, Jd, kd) => {
```

#### 70. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1966` → after: `L1966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1966) · [Before (L1966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1966)

```diff
-   51429: (bb, ub, hb) => {
+   51934: (dd, Jd, kd) => {
```

#### 71. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1969` → after: `L1969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1969) · [Before (L1969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1969)

```diff
-   51436: (bb, ub, hb) => {
+   51938: (dd, Jd, kd) => {
```

#### 72. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1972` → after: `L1972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1972) · [Before (L1972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1972)

```diff
-   51444: (bb, ub, hb) => {
+   51945: (dd, Jd, kd) => {
```

#### 73. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1975` → after: `L1975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1975) · [Before (L1975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1975)

```diff
-   51451: (bb, ub, hb) => {
+   51947: (dd, Jd, kd) => {
```

#### 74. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1978` → after: `L1978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1978) · [Before (L1978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1978)

```diff
-   51457: (bb, ub, hb) => {
+   51952: (dd, Jd, kd) => {
```

#### 75. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1981` → after: `L1981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1981) · [Before (L1981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1981)

```diff
-   51459: (bb, ub, hb) => {
+   51956: (dd, Jd, kd) => {
```

#### 76. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1984` → after: `L1984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1984) · [Before (L1984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1984)

```diff
-   51464: (bb, ub, hb) => {
+   51962: (dd, Jd, kd) => {
```

#### 77. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1987` → after: `L1987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1987) · [Before (L1987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1987)

```diff
-   51469: (bb, ub, hb) => {
+   51971: (dd, Jd, kd) => {
```

#### 78. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1990` → after: `L1990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1990) · [Before (L1990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1990)

```diff
-   51476: (bb, ub, hb) => {
+   51977: (dd, Jd, kd) => {
```

#### 79. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1993` → after: `L1993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1993) · [Before (L1993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1993)

```diff
-   51480: (bb, ub, hb) => {
+   51986: (dd, Jd, kd) => {
```

#### 80. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1996` → after: `L1996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1996) · [Before (L1996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1996)

```diff
-   51485: (bb, ub, hb) => {
+   51990: (dd, Jd, kd) => {
```

#### 81. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1999` → after: `L1999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR1999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L1999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L1999) · [Before (L1999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L1999)

```diff
-   51488: (bb, ub, hb) => {
+   51994: (dd, Jd, kd) => {
```

#### 82. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2002` → after: `L2002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2002) · [Before (L2002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2002)

```diff
-   51494: (bb, ub, hb) => {
+   51996: (dd, Jd, kd) => {
```

#### 83. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2005` → after: `L2005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2005) · [Before (L2005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2005)

```diff
-   51499: (bb, ub, hb) => {
+   51999: (dd, Jd, kd) => {
```

#### 84. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2008` → after: `L2008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2008) · [Before (L2008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2008)

```diff
-   51507: (bb, ub, hb) => {
+   52002: (dd, Jd, kd) => {
```

#### 85. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2011` → after: `L2011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2011) · [Before (L2011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2011)

```diff
-   51511: (bb, ub, hb) => {
+   52007: (dd, Jd, kd) => {
```

#### 86. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2014` → after: `L2014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2014) · [Before (L2014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2014)

```diff
-   51518: (bb, ub, hb) => {
+   52013: (dd, Jd, kd) => {
```

#### 87. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2017` → after: `L2017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2017) · [Before (L2017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2017)

```diff
-   51520: (bb, ub, hb) => {
+   52017: (dd, Jd, kd) => {
```

#### 88. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2020` → after: `L2020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2020) · [Before (L2020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2020)

```diff
-   51528: (bb, ub, hb) => {
+   52019: (dd, Jd, kd) => {
```

#### 89. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2023` → after: `L2023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2023) · [Before (L2023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2023)

```diff
-   51532: (bb, ub, hb) => {
+   52021: (dd, Jd, kd) => {
```

#### 90. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2026` → after: `L2026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2026) · [Before (L2026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2026)

```diff
-   51538: (bb, ub, hb) => {
+   52025: (dd, Jd, kd) => {
```

#### 91. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2029` → after: `L2029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2029) · [Before (L2029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2029)

```diff
-   51542: (bb, ub, hb) => {
+   52029: (dd, Jd, kd) => {
```

#### 92. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2032` → after: `L2032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2032) · [Before (L2032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2032)

```diff
-   51548: (bb, ub, hb) => {
+   52033: (dd, Jd, kd) => {
```

#### 93. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2035` → after: `L2035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2035) · [Before (L2035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2035)

```diff
-   51552: (bb, ub, hb) => {
+   52040: (dd, Jd, kd) => {
```

#### 94. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2038` → after: `L2038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2038) · [Before (L2038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2038)

```diff
-   51560: (bb, ub, hb) => {
+   52042: (dd, Jd, kd) => {
```

#### 95. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2041` → after: `L2041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2041) · [Before (L2041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2041)

```diff
-   51567: (bb, ub, hb) => {
+   52047: (dd, Jd, kd) => {
```

#### 96. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2044` → after: `L2044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2044) · [Before (L2044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2044)

```diff
-   51575: (bb, ub, hb) => {
+   52050: (dd, Jd, kd) => {
```

#### 97. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2047` → after: `L2047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2047) · [Before (L2047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2047)

```diff
-   51583: (bb, ub, hb) => {
+   52053: (dd, Jd, kd) => {
```

#### 98. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2050` → after: `L2050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2050) · [Before (L2050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2050)

```diff
-   51587: (bb, ub, hb) => {
+   52062: (dd, Jd, kd) => {
```

#### 99. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2053` → after: `L2053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2053) · [Before (L2053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2053)

```diff
-   51591: (bb, ub, hb) => {
+   52071: (dd, Jd, kd) => {
```

#### 100. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2056` → after: `L2056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2056) · [Before (L2056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2056)

```diff
-   51597: (bb, ub, hb) => {
+   52074: (dd, Jd, kd) => {
```

#### 101. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2059` → after: `L2059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2059) · [Before (L2059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2059)

```diff
-   51600: (bb, ub, hb) => {
+   52077: (dd, Jd, kd) => {
```

#### 102. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2062` → after: `L2062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2062) · [Before (L2062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2062)

```diff
-   51603: (bb, ub, hb) => {
+   52079: (dd, Jd, kd) => {
```

#### 103. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2065` → after: `L2065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2065) · [Before (L2065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2065)

```diff
-   51605: (bb, ub, hb) => {
+   52085: (dd, Jd, kd) => {
```

#### 104. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2068` → after: `L2068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2068) · [Before (L2068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2068)

```diff
-   51607: (bb, ub, hb) => {
+   52087: (dd, Jd, kd) => {
```

#### 105. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2071` → after: `L2071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2071) · [Before (L2071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2071)

```diff
-   51609: (bb, ub, hb) => {
+   52093: (dd, Jd, kd) => {
```

#### 106. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2074` → after: `L2074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2074) · [Before (L2074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2074)

```diff
-   51612: (bb, ub, hb) => {
+   52101: (dd, Jd, kd) => {
```

#### 107. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2077` → after: `L2077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2077) · [Before (L2077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2077)

```diff
-   51619: (bb, ub, hb) => {
+   52105: (dd, Jd, kd) => {
```

#### 108. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2080` → after: `L2080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2080) · [Before (L2080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2080)

```diff
-   51626: (bb, ub, hb) => {
+   52109: (dd, Jd, kd) => {
```

#### 109. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2083` → after: `L2083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2083) · [Before (L2083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2083)

```diff
-   51632: (bb, ub, hb) => {
+   52113: (dd, Jd, kd) => {
```

#### 110. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2086` → after: `L2086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2086) · [Before (L2086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2086)

```diff
-   51640: (bb, ub, hb) => {
+   52117: (dd, Jd, kd) => {
```

#### 111. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2089` → after: `L2089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2089) · [Before (L2089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2089)

```diff
-   51642: (bb, ub, hb) => {
+   52121: (dd, Jd, kd) => {
```

#### 112. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2092` → after: `L2092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2092) · [Before (L2092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2092)

```diff
-   51645: (bb, ub, hb) => {
+   52126: (dd, Jd, kd) => {
```

#### 113. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2095` → after: `L2095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2095) · [Before (L2095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2095)

```diff
-   51653: (bb, ub, hb) => {
+   52135: (dd, Jd, kd) => {
```

#### 114. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2098` → after: `L2098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2098) · [Before (L2098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2098)

```diff
-   51655: (bb, ub, hb) => {
+   52140: (dd, Jd, kd) => {
```

#### 115. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2101` → after: `L2101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2101) · [Before (L2101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2101)

```diff
-   51663: (bb, ub, hb) => {
+   52149: (dd, Jd, kd) => {
```

#### 116. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2104` → after: `L2104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2104) · [Before (L2104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2104)

```diff
-   51666: (bb, ub, hb) => {
+   52155: (dd, Jd, kd) => {
```

#### 117. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2107` → after: `L2107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2107) · [Before (L2107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2107)

```diff
-   51674: (bb, ub, hb) => {
+   52159: (dd, Jd, kd) => {
```

#### 118. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2110` → after: `L2110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2110) · [Before (L2110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2110)

```diff
-   51683: (bb, ub, hb) => {
+   52162: (dd, Jd, kd) => {
```

#### 119. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2113` → after: `L2113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2113) · [Before (L2113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2113)

```diff
-   51688: (bb, ub, hb) => {
+   52166: (dd, Jd, kd) => {
```

#### 120. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2116` → after: `L2116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2116) · [Before (L2116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2116)

```diff
-   51697: (bb, ub, hb) => {
+   52169: (dd, Jd, kd) => {
```

#### 121. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2119` → after: `L2119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2119) · [Before (L2119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2119)

```diff
-   51705: (bb, ub, hb) => {
+   52178: (dd, Jd, kd) => {
```

#### 122. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2122` → after: `L2122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2122) · [Before (L2122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2122)

```diff
-   51709: (bb, ub, hb) => {
+   52184: (dd, Jd, kd) => {
```

#### 123. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2125` → after: `L2125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2125) · [Before (L2125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2125)

```diff
-   51712: (bb, ub, hb) => {
+   52187: (dd, Jd, kd) => {
```

#### 124. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2128` → after: `L2128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2128) · [Before (L2128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2128)

```diff
-   51716: (bb, ub, hb) => {
+   52194: (dd, Jd, kd) => {
```

#### 125. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2131` → after: `L2131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2131) · [Before (L2131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2131)

```diff
-   51720: (bb, ub, hb) => {
+   52196: (dd, Jd, kd) => {
```

#### 126. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2134` → after: `L2134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2134) · [Before (L2134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2134)

```diff
-   51726: (bb, ub, hb) => {
+   52198: (dd, Jd, kd) => {
```

#### 127. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2137` → after: `L2137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2137) · [Before (L2137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2137)

```diff
-   51728: (bb, ub, hb) => {
+   52205: (dd, Jd, kd) => {
```

#### 128. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2140` → after: `L2140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2140) · [Before (L2140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2140)

```diff
-   51732: (bb, ub, hb) => {
+   52212: (dd, Jd, kd) => {
```

#### 129. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2143` → after: `L2143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2143) · [Before (L2143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2143)

```diff
-   51740: (bb, ub, hb) => {
+   52216: (dd, Jd, kd) => {
```

#### 130. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2146` → after: `L2146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2146) · [Before (L2146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2146)

```diff
-   51743: (bb, ub, hb) => {
+   52219: (dd, Jd, kd) => {
```

#### 131. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2149` → after: `L2149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2149) · [Before (L2149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2149)

```diff
-   51747: (bb, ub, hb) => {
+   52224: (dd, Jd, kd) => {
```

#### 132. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2152` → after: `L2152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2152) · [Before (L2152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2152)

```diff
-   51750: (bb, ub, hb) => {
+   52231: (dd, Jd, kd) => {
```

#### 133. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2155` → after: `L2155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2155) · [Before (L2155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2155)

```diff
-   51753: (bb, ub, hb) => {
+   52238: (dd, Jd, kd) => {
```

#### 134. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2158` → after: `L2158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2158) · [Before (L2158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2158)

```diff
-   51761: (bb, ub, hb) => {
+   52240: (dd, Jd, kd) => {
```

#### 135. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2161` → after: `L2161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2161) · [Before (L2161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2161)

```diff
-   51769: (bb, ub, hb) => {
+   52243: (dd, Jd, kd) => {
```

#### 136. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2164` → after: `L2164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2164) · [Before (L2164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2164)

```diff
-   51772: (bb, ub, hb) => {
+   52246: (dd, Jd, kd) => {
```

#### 137. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2167` → after: `L2167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2167) · [Before (L2167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2167)

```diff
-   51774: (bb, ub, hb) => {
+   52249: (dd, Jd, kd) => {
```

#### 138. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2170` → after: `L2170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2170) · [Before (L2170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2170)

```diff
-   51777: (bb, ub, hb) => {
+   52257: (dd, Jd, kd) => {
```

#### 139. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2173` → after: `L2173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2173) · [Before (L2173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2173)

```diff
-   51781: (bb, ub, hb) => {
+   52261: (dd, Jd, kd) => {
```

#### 140. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2176` → after: `L2176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2176) · [Before (L2176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2176)

```diff
-   51783: (bb, ub, hb) => {
+   52267: (dd, Jd, kd) => {
```

#### 141. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2179` → after: `L2179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2179) · [Before (L2179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2179)

```diff
-   51789: (bb, ub, hb) => {
+   52273: (dd, Jd, kd) => {
```

#### 142. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2182` → after: `L2182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2182) · [Before (L2182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2182)

```diff
-   51795: (bb, ub, hb) => {
+   52275: (dd, Jd, kd) => {
```

#### 143. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2185` → after: `L2185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2185) · [Before (L2185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2185)

```diff
-   51803: (bb, ub, hb) => {
+   52277: (dd, Jd, kd) => {
```

#### 144. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2188` → after: `L2188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2188) · [Before (L2188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2188)

```diff
-   51811: (bb, ub, hb) => {
+   52286: (dd, Jd, kd) => {
```

#### 145. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2191` → after: `L2191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2191) · [Before (L2191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2191)

```diff
-   51819: (bb, ub, hb) => {
+   52294: (dd, Jd, kd) => {
```

#### 146. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2194` → after: `L2194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2194) · [Before (L2194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2194)

```diff
-   51828: (bb, ub, hb) => {
+   52296: (dd, Jd, kd) => {
```

#### 147. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2197` → after: `L2197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2197) · [Before (L2197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2197)

```diff
-   51837: (bb, ub, hb) => {
+   52301: (dd, Jd, kd) => {
```

#### 148. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2200` → after: `L2200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2200) · [Before (L2200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2200)

```diff
-   51840: (bb, ub, hb) => {
+   52309: (dd, Jd, kd) => {
```

#### 149. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2203` → after: `L2203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2203) · [Before (L2203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2203)

```diff
-   51845: (bb, ub, hb) => {
+   52316: (dd, Jd, kd) => {
```

#### 150. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2206` → after: `L2206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2206) · [Before (L2206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2206)

```diff
-   51853: (bb, ub, hb) => {
+   52321: (dd, Jd, kd) => {
```

#### 151. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2209` → after: `L2209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2209) · [Before (L2209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2209)

```diff
-   51861: (bb, ub, hb) => {
+   52325: (dd, Jd, kd) => {
```

#### 152. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2212` → after: `L2212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2212) · [Before (L2212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2212)

```diff
-   51870: (bb, ub, hb) => {
+   52334: (dd, Jd, kd) => {
```

#### 153. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2215` → after: `L2215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2215) · [Before (L2215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2215)

```diff
-   51878: (bb, ub, hb) => {
+   52336: (dd, Jd, kd) => {
```

#### 154. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2218` → after: `L2218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2218) · [Before (L2218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2218)

```diff
-   51882: (bb, ub, hb) => {
+   52342: (dd, Jd, kd) => {
```

#### 155. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2221` → after: `L2221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2221) · [Before (L2221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2221)

```diff
-   51885: (bb, ub, hb) => {
+   52345: (dd, Jd, kd) => {
```

#### 156. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2224` → after: `L2224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2224) · [Before (L2224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2224)

```diff
-   51888: (bb, ub, hb) => {
+   52347: (dd, Jd, kd) => {
```

#### 157. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2227` → after: `L2227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2227) · [Before (L2227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2227)

```diff
-   51893: (bb, ub, hb) => {
+   52353: (dd, Jd, kd) => {
```

#### 158. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2230` → after: `L2230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2230) · [Before (L2230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2230)

```diff
-   51901: (bb, ub, hb) => {
+   52358: (dd, Jd, kd) => {
```

#### 159. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2233` → after: `L2233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2233) · [Before (L2233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2233)

```diff
-   51907: (bb, ub, hb) => {
+   52366: (dd, Jd, kd) => {
```

#### 160. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2236` → after: `L2236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2236) · [Before (L2236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2236)

```diff
-   51916: (bb, ub, hb) => {
+   52368: (dd, Jd, kd) => {
```

#### 161. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2239` → after: `L2239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2239) · [Before (L2239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2239)

```diff
-   51925: (bb, ub, hb) => {
+   52377: (dd, Jd, kd) => {
```

#### 162. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2242` → after: `L2242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2242) · [Before (L2242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2242)

```diff
-   51930: (bb, ub, hb) => {
+   52381: (dd, Jd, kd) => {
```

#### 163. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2245` → after: `L2245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2245) · [Before (L2245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2245)

```diff
-   51933: (bb, ub, hb) => {
+   52386: (dd, Jd, kd) => {
```

#### 164. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2248` → after: `L2248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2248) · [Before (L2248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2248)

```diff
-   51936: (bb, ub, hb) => {
+   52392: (dd, Jd, kd) => {
```

#### 165. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2251` → after: `L2251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2251) · [Before (L2251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2251)

```diff
-   51940: (bb, ub, hb) => {
+   52399: (dd, Jd, kd) => {
```

#### 166. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2254` → after: `L2254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2254) · [Before (L2254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2254)

```diff
-   51943: (bb, ub, hb) => {
+   52405: (dd, Jd, kd) => {
```

#### 167. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2257` → after: `L2257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2257) · [Before (L2257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2257)

```diff
-   51948: (bb, ub, hb) => {
+   52412: (dd, Jd, kd) => {
```

#### 168. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2260` → after: `L2260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2260) · [Before (L2260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2260)

```diff
-   51953: (bb, ub, hb) => {
+   52418: (dd, Jd, kd) => {
```

#### 169. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2263` → after: `L2263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2263) · [Before (L2263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2263)

```diff
-   51960: (bb, ub, hb) => {
+   52420: (dd, Jd, kd) => {
```

#### 170. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2266` → after: `L2266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2266) · [Before (L2266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2266)

```diff
-   51967: (bb, ub, hb) => {
+   52429: (dd, Jd, kd) => {
```

#### 171. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2269` → after: `L2269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2269) · [Before (L2269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2269)

```diff
-   51969: (bb, ub, hb) => {
+   52434: (dd, Jd, kd) => {
```

#### 172. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2272` → after: `L2272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2272) · [Before (L2272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2272)

```diff
-   51977: (bb, ub, hb) => {
+   52440: (dd, Jd, kd) => {
```

#### 173. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2275` → after: `L2275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2275) · [Before (L2275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2275)

```diff
-   51985: (bb, ub, hb) => {
+   52446: (dd, Jd, kd) => {
```

#### 174. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2278` → after: `L2278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2278) · [Before (L2278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2278)

```diff
-   51991: (bb, ub, hb) => {
+   52455: (dd, Jd, kd) => {
```

#### 175. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2281` → after: `L2281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2281) · [Before (L2281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2281)

```diff
-   51994: (bb, ub, hb) => {
+   52457: (dd, Jd, kd) => {
```

#### 176. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2284` → after: `L2284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2284) · [Before (L2284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2284)

```diff
-   52001: (bb, ub, hb) => {
+   52461: (dd, Jd, kd) => {
```

#### 177. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2287` → after: `L2287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2287) · [Before (L2287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2287)

```diff
-   52009: (bb, ub, hb) => {
+   52468: (dd, Jd, kd) => {
```

#### 178. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2290` → after: `L2290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2290) · [Before (L2290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2290)

```diff
-   52018: (bb, ub, hb) => {
+   52477: (dd, Jd, kd) => {
```

#### 179. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2293` → after: `L2293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2293) · [Before (L2293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2293)

```diff
-   52026: (bb, ub, hb) => {
+   52479: (dd, Jd, kd) => {
```

#### 180. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2296` → after: `L2296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2296) · [Before (L2296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2296)

```diff
-   52028: (bb, ub, hb) => {
+   52484: (dd, Jd, kd) => {
```

#### 181. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2299` → after: `L2299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2299) · [Before (L2299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2299)

```diff
-   52034: (bb, ub, hb) => {
+   52490: (dd, Jd, kd) => {
```

#### 182. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2302` → after: `L2302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2302) · [Before (L2302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2302)

```diff
-   52041: (bb, ub, hb) => {
+   52496: (dd, Jd, kd) => {
```

#### 183. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2305` → after: `L2305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2305) · [Before (L2305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2305)

```diff
-   52050: (bb, ub, hb) => {
+   52500: (dd, Jd, kd) => {
```

#### 184. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2308` → after: `L2308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2308) · [Before (L2308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2308)

```diff
-   52052: (bb, ub, hb) => {
+   52505: (dd, Jd, kd) => {
```

#### 185. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2311` → after: `L2311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2311) · [Before (L2311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2311)

```diff
-   52055: (bb, ub, hb) => {
+   52513: (dd, Jd, kd) => {
```

#### 186. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2314` → after: `L2314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2314) · [Before (L2314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2314)

```diff
-   52062: (bb, ub, hb) => {
+   52522: (dd, Jd, kd) => {
```

#### 187. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2317` → after: `L2317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2317) · [Before (L2317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2317)

```diff
-   52066: (bb, ub, hb) => {
+   52525: (dd, Jd, kd) => {
```

#### 188. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2320` → after: `L2320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2320) · [Before (L2320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2320)

```diff
-   52070: (bb, ub, hb) => {
+   52529: (dd, Jd, kd) => {
```

#### 189. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2323` → after: `L2323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2323) · [Before (L2323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2323)

```diff
-   52079: (bb, ub, hb) => {
+   52538: (dd, Jd, kd) => {
```

#### 190. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2326` → after: `L2326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2326) · [Before (L2326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2326)

```diff
-   52085: (bb, ub, hb) => {
+   52540: (dd, Jd, kd) => {
```

#### 191. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2329` → after: `L2329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2329) · [Before (L2329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2329)

```diff
-   52087: (bb, ub, hb) => {
+   52546: (dd, Jd, kd) => {
```

#### 192. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2332` → after: `L2332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2332) · [Before (L2332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2332)

```diff
-   52090: (bb, ub, hb) => {
+   52555: (dd, Jd, kd) => {
```

#### 193. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2335` → after: `L2335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2335) · [Before (L2335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2335)

```diff
-   52096: (bb, ub, hb) => {
+   52557: (dd, Jd, kd) => {
```

#### 194. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2338` → after: `L2338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2338) · [Before (L2338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2338)

```diff
-   52098: (bb, ub, hb) => {
+   52565: (dd, Jd, kd) => {
```

#### 195. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2341` → after: `L2341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2341) · [Before (L2341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2341)

```diff
-   52107: (bb, ub, hb) => {
+   52571: (dd, Jd, kd) => {
```

#### 196. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2344` → after: `L2344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2344) · [Before (L2344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2344)

```diff
-   52114: (bb, ub, hb) => {
+   52573: (dd, Jd, kd) => {
```

#### 197. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2347` → after: `L2347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2347) · [Before (L2347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2347)

```diff
-   52116: (bb, ub, hb) => {
+   52581: (dd, Jd, kd) => {
```

#### 198. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2350` → after: `L2350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2350) · [Before (L2350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2350)

```diff
-   52123: (bb, ub, hb) => {
+   52588: (dd, Jd, kd) => {
```

#### 199. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2353` → after: `L2353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2353) · [Before (L2353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2353)

```diff
-   52126: (bb, ub, hb) => {
+   52591: (dd, Jd, kd) => {
```

#### 200. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2356` → after: `L2356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2356) · [Before (L2356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2356)

```diff
-   52130: (bb, ub, hb) => {
+   52594: (dd, Jd, kd) => {
```

#### 201. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2359` → after: `L2359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2359) · [Before (L2359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2359)

```diff
-   52135: (bb, ub, hb) => {
+   52597: (dd, Jd, kd) => {
```

#### 202. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2362` → after: `L2362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2362) · [Before (L2362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2362)

```diff
-   52137: (bb, ub, hb) => {
+   52606: (dd, Jd, kd) => {
```

#### 203. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2365` → after: `L2365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2365) · [Before (L2365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2365)

```diff
-   52146: (bb, ub, hb) => {
+   52610: (dd, Jd, kd) => {
```

#### 204. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2368` → after: `L2368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2368) · [Before (L2368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2368)

```diff
-   52152: (bb, ub, hb) => {
+   52617: (dd, Jd, kd) => {
```

#### 205. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2371` → after: `L2371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2371) · [Before (L2371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2371)

```diff
-   52159: (bb, ub, hb) => {
+   52622: (dd, Jd, kd) => {
```

#### 206. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2374` → after: `L2374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2374) · [Before (L2374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2374)

```diff
-   52162: (bb, ub, hb) => {
+   52626: (dd, Jd, kd) => {
```

#### 207. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2377` → after: `L2377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2377) · [Before (L2377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2377)

```diff
-   52168: (bb, ub, hb) => {
+   52635: (dd, Jd, kd) => {
```

#### 208. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2380` → after: `L2380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2380) · [Before (L2380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2380)

```diff
-   52171: (bb, ub, hb) => {
+   52639: (dd, Jd, kd) => {
```

#### 209. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2383` → after: `L2383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2383) · [Before (L2383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2383)

```diff
-   52176: (bb, ub, hb) => {
+   52643: (dd, Jd, kd) => {
```

#### 210. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2386` → after: `L2386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2386) · [Before (L2386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2386)

```diff
-   52185: (bb, ub, hb) => {
+   52645: (dd, Jd, kd) => {
```

#### 211. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2389` → after: `L2389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2389) · [Before (L2389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2389)

```diff
-   52187: (bb, ub, hb) => {
+   52652: (dd, Jd, kd) => {
```

#### 212. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2392` → after: `L2392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2392) · [Before (L2392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2392)

```diff
-   52191: (bb, ub, hb) => {
+   52658: (dd, Jd, kd) => {
```

#### 213. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2395` → after: `L2395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2395) · [Before (L2395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2395)

```diff
-   52200: (bb, ub, hb) => {
+   52666: (dd, Jd, kd) => {
```

#### 214. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2398` → after: `L2398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2398) · [Before (L2398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2398)

```diff
-   52204: (bb, ub, hb) => {
+   52675: (dd, Jd, kd) => {
```

#### 215. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2401` → after: `L2401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2401) · [Before (L2401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2401)

```diff
-   52212: (bb, ub, hb) => {
+   52677: (dd, Jd, kd) => {
```

#### 216. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2404` → after: `L2404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2404) · [Before (L2404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2404)

```diff
-   52221: (bb, ub, hb) => {
+   52683: (dd, Jd, kd) => {
```

#### 217. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2407` → after: `L2407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2407) · [Before (L2407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2407)

```diff
-   52230: (bb, ub, hb) => {
+   52690: (dd, Jd, kd) => {
```

#### 218. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2410` → after: `L2410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2410) · [Before (L2410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2410)

```diff
-   52238: (bb, ub, hb) => {
+   52699: (dd, Jd, kd) => {
```

#### 219. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2413` → after: `L2413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2413) · [Before (L2413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2413)

```diff
-   52242: (bb, ub, hb) => {
+   52706: (dd, Jd, kd) => {
```

#### 220. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2416` → after: `L2416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2416) · [Before (L2416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2416)

```diff
-   52247: (bb, ub, hb) => {
+   52708: (dd, Jd, kd) => {
```

#### 221. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2419` → after: `L2419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2419) · [Before (L2419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2419)

```diff
-   52250: (bb, ub, hb) => {
+   52715: (dd, Jd, kd) => {
```

#### 222. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2422` → after: `L2422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2422) · [Before (L2422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2422)

```diff
-   52254: (bb, ub, hb) => {
+   52718: (dd, Jd, kd) => {
```

#### 223. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2425` → after: `L2425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2425) · [Before (L2425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2425)

```diff
-   52259: (bb, ub, hb) => {
+   52722: (dd, Jd, kd) => {
```

#### 224. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2428` → after: `L2428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2428) · [Before (L2428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2428)

```diff
-   52263: (bb, ub, hb) => {
+   52724: (dd, Jd, kd) => {
```

#### 225. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2431` → after: `L2431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2431) · [Before (L2431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2431)

```diff
-   52265: (bb, ub, hb) => {
+   52728: (dd, Jd, kd) => {
```

#### 226. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2434` → after: `L2434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2434) · [Before (L2434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2434)

```diff
-   52273: (bb, ub, hb) => {
+   52735: (dd, Jd, kd) => {
```

#### 227. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2437` → after: `L2437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2437) · [Before (L2437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2437)

```diff
-   52282: (bb, ub, hb) => {
+   52742: (dd, Jd, kd) => {
```

#### 228. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2440` → after: `L2440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2440) · [Before (L2440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2440)

```diff
-   52290: (bb, ub, hb) => {
+   52745: (dd, Jd, kd) => {
```

#### 229. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2443` → after: `L2443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2443) · [Before (L2443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2443)

```diff
-   52294: (bb, ub, hb) => {
+   52749: (dd, Jd, kd) => {
```

#### 230. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2446` → after: `L2446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2446) · [Before (L2446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2446)

```diff
-   52299: (bb, ub, hb) => {
+   52754: (dd, Jd, kd) => {
```

#### 231. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2449` → after: `L2449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2449) · [Before (L2449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2449)

```diff
-   52301: (bb, ub, hb) => {
+   52756: (dd, Jd, kd) => {
```

#### 232. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2452` → after: `L2452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2452) · [Before (L2452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2452)

```diff
-   52307: (bb, ub, hb) => {
+   52759: (dd, Jd, kd) => {
```

#### 233. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2455` → after: `L2455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2455) · [Before (L2455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2455)

```diff
-   52310: (bb, ub, hb) => {
+   52767: (dd, Jd, kd) => {
```

#### 234. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2458` → after: `L2458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2458) · [Before (L2458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2458)

```diff
-   52313: (bb, ub, hb) => {
+   52769: (dd, Jd, kd) => {
```

#### 235. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2461` → after: `L2461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2461) · [Before (L2461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2461)

```diff
-   52316: (bb, ub, hb) => {
+   52773: (dd, Jd, kd) => {
```

#### 236. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2464` → after: `L2464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2464) · [Before (L2464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2464)

```diff
-   52325: (bb, ub, hb) => {
+   52780: (dd, Jd, kd) => {
```

#### 237. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2467` → after: `L2467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2467) · [Before (L2467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2467)

```diff
-   52333: (bb, ub, hb) => {
+   52788: (dd, Jd, kd) => {
```

#### 238. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2470` → after: `L2470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2470) · [Before (L2470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2470)

```diff
-   52342: (bb, ub, hb) => {
+   52797: (dd, Jd, kd) => {
```

#### 239. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2473` → after: `L2473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2473) · [Before (L2473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2473)

```diff
-   52345: (bb, ub, hb) => {
+   52804: (dd, Jd, kd) => {
```

#### 240. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2476` → after: `L2476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2476) · [Before (L2476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2476)

```diff
-   52352: (bb, ub, hb) => {
+   52806: (dd, Jd, kd) => {
```

#### 241. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2479` → after: `L2479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2479) · [Before (L2479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2479)

```diff
-   52361: (bb, ub, hb) => {
+   52811: (dd, Jd, kd) => {
```

#### 242. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2482` → after: `L2482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2482) · [Before (L2482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2482)

```diff
-   52367: (bb, ub, hb) => {
+   52817: (dd, Jd, kd) => {
```

#### 243. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2485` → after: `L2485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2485) · [Before (L2485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2485)

```diff
-   52371: (bb, ub, hb) => {
+   52822: (dd, Jd, kd) => {
```

#### 244. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2488` → after: `L2488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2488) · [Before (L2488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2488)

```diff
-   52375: (bb, ub, hb) => {
+   52826: (dd, Jd, kd) => {
```

#### 245. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2491` → after: `L2491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2491) · [Before (L2491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2491)

```diff
-   52378: (bb, ub, hb) => {
+   52829: (dd, Jd, kd) => {
```

#### 246. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2494` → after: `L2494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2494) · [Before (L2494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2494)

```diff
-   52385: (bb, ub, hb) => {
+   52835: (dd, Jd, kd) => {
```

#### 247. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2497` → after: `L2497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2497) · [Before (L2497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2497)

```diff
-   52391: (bb, ub, hb) => {
+   52837: (dd, Jd, kd) => {
```

#### 248. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2500` → after: `L2500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2500) · [Before (L2500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2500)

```diff
-   52399: (bb, ub, hb) => {
+   52843: (dd, Jd, kd) => {
```

#### 249. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2503` → after: `L2503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2503) · [Before (L2503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2503)

```diff
-   52408: (bb, ub, hb) => {
+   52846: (dd, Jd, kd) => {
```

#### 250. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2506` → after: `L2506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2506) · [Before (L2506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2506)

```diff
-   52414: (bb, ub, hb) => {
+   52855: (dd, Jd, kd) => {
```

#### 251. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2509` → after: `L2509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2509) · [Before (L2509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2509)

```diff
-   52422: (bb, ub, hb) => {
+   52863: (dd, Jd, kd) => {
```

#### 252. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2512` → after: `L2512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2512) · [Before (L2512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2512)

```diff
-   52427: (bb, ub, hb) => {
+   52869: (dd, Jd, kd) => {
```

#### 253. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2515` → after: `L2515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2515) · [Before (L2515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2515)

```diff
-   52431: (bb, ub, hb) => {
+   52876: (dd, Jd, kd) => {
```

#### 254. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2518` → after: `L2518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2518) · [Before (L2518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2518)

```diff
-   52434: (bb, ub, hb) => {
+   52881: (dd, Jd, kd) => {
```

#### 255. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2521` → after: `L2521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2521) · [Before (L2521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2521)

```diff
-   52442: (bb, ub, hb) => {
+   52887: (dd, Jd, kd) => {
```

#### 256. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2524` → after: `L2524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2524) · [Before (L2524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2524)

```diff
-   52444: (bb, ub, hb) => {
+   52894: (dd, Jd, kd) => {
```

#### 257. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2527` → after: `L2527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2527) · [Before (L2527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2527)

```diff
-   52452: (bb, ub, hb) => {
+   52899: (dd, Jd, kd) => {
```

#### 258. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2530` → after: `L2530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2530) · [Before (L2530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2530)

```diff
-   52459: (bb, ub, hb) => {
+   52902: (dd, Jd, kd) => {
```

#### 259. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2533` → after: `L2533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2533) · [Before (L2533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2533)

```diff
-   52462: (bb, ub, hb) => {
+   52911: (dd, Jd, kd) => {
```

#### 260. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2536` → after: `L2536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2536) · [Before (L2536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2536)

```diff
-   52464: (bb, ub, hb) => {
+   52915: (dd, Jd, kd) => {
```

#### 261. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2539` → after: `L2539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2539) · [Before (L2539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2539)

```diff
-   52466: (bb, ub, hb) => {
+   52918: (dd, Jd, kd) => {
```

#### 262. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2542` → after: `L2542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2542) · [Before (L2542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2542)

```diff
-   52472: (bb, ub, hb) => {
+   52922: (dd, Jd, kd) => {
```

#### 263. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2545` → after: `L2545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2545) · [Before (L2545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2545)

```diff
-   52477: (bb, ub, hb) => {
+   52928: (dd, Jd, kd) => {
```

#### 264. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2548` → after: `L2548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2548) · [Before (L2548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2548)

```diff
-   52485: (bb, ub, hb) => {
+   52931: (dd, Jd, kd) => {
```

#### 265. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2551` → after: `L2551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2551) · [Before (L2551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2551)

```diff
-   52494: (bb, ub, hb) => {
+   52935: (dd, Jd, kd) => {
```

#### 266. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2554` → after: `L2554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2554) · [Before (L2554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2554)

```diff
-   52500: (bb, ub, hb) => {
+   52940: (dd, Jd, kd) => {
```

#### 267. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2557` → after: `L2557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2557) · [Before (L2557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2557)

```diff
-   52508: (bb, ub, hb) => {
+   52945: (dd, Jd, kd) => {
```

#### 268. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2560` → after: `L2560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2560) · [Before (L2560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2560)

```diff
-   52514: (bb, ub, hb) => {
+   52954: (dd, Jd, kd) => {
```

#### 269. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2563` → after: `L2563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2563) · [Before (L2563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2563)

```diff
-   52521: (bb, ub, hb) => {
+   52962: (dd, Jd, kd) => {
```

#### 270. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2566` → after: `L2566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2566) · [Before (L2566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2566)

```diff
-   52524: (bb, ub, hb) => {
+   52964: (dd, Jd, kd) => {
```

#### 271. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2569` → after: `L2569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2569) · [Before (L2569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2569)

```diff
-   52528: (bb, ub, hb) => {
+   52972: (dd, Jd, kd) => {
```

#### 272. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2572` → after: `L2572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2572) · [Before (L2572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2572)

```diff
-   52530: (bb, ub, hb) => {
+   52979: (dd, Jd, kd) => {
```

#### 273. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2575` → after: `L2575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2575) · [Before (L2575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2575)

```diff
-   52539: (bb, ub, hb) => {
+   52983: (dd, Jd, kd) => {
```

#### 274. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2578` → after: `L2578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2578) · [Before (L2578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2578)

```diff
-   52544: (bb, ub, hb) => {
+   52987: (dd, Jd, kd) => {
```

#### 275. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2581` → after: `L2581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2581) · [Before (L2581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2581)

```diff
-   52549: (bb, ub, hb) => {
+   52993: (dd, Jd, kd) => {
```

#### 276. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2584` → after: `L2584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2584) · [Before (L2584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2584)

```diff
-   52557: (bb, ub, hb) => {
+   53001: (dd, Jd, kd) => {
```

#### 277. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2587` → after: `L2587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2587) · [Before (L2587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2587)

```diff
-   52564: (bb, ub, hb) => {
+   53003: (dd, Jd, kd) => {
```

#### 278. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2590` → after: `L2590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2590) · [Before (L2590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2590)

```diff
-   52571: (bb, ub, hb) => {
+   53008: (dd, Jd, kd) => {
```

#### 279. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2593` → after: `L2593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2593) · [Before (L2593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2593)

```diff
-   52577: (bb, ub, hb) => {
+   53015: (dd, Jd, kd) => {
```

#### 280. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2596` → after: `L2596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2596) · [Before (L2596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2596)

```diff
-   52582: (bb, ub, hb) => {
+   53024: (dd, Jd, kd) => {
```

#### 281. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2599` → after: `L2599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2599) · [Before (L2599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2599)

```diff
-   52587: (bb, ub, hb) => {
+   53032: (dd, Jd, kd) => {
```

#### 282. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2602` → after: `L2602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2602) · [Before (L2602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2602)

```diff
-   52589: (bb, ub, hb) => {
+   53040: (dd, Jd, kd) => {
```

#### 283. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2605` → after: `L2605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2605) · [Before (L2605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2605)

```diff
-   52591: (bb, ub, hb) => {
+   53047: (dd, Jd, kd) => {
```

#### 284. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2608` → after: `L2608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2608) · [Before (L2608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2608)

```diff
-   52596: (bb, ub, hb) => {
+   53052: (dd, Jd, kd) => {
```

#### 285. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2611` → after: `L2611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2611) · [Before (L2611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2611)

```diff
-   52599: (bb, ub, hb) => {
+   53056: (dd, Jd, kd) => {
```

#### 286. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2614` → after: `L2614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2614) · [Before (L2614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2614)

```diff
-   52608: (bb, ub, hb) => {
+   53060: (dd, Jd, kd) => {
```

#### 287. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2617` → after: `L2617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2617) · [Before (L2617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2617)

```diff
-   52615: (bb, ub, hb) => {
+   53062: (dd, Jd, kd) => {
```

#### 288. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2620` → after: `L2620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2620) · [Before (L2620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2620)

```diff
-   52620: (bb, ub, hb) => {
+   53068: (dd, Jd, kd) => {
```

#### 289. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2623` → after: `L2623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2623) · [Before (L2623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2623)

```diff
-   52627: (bb, ub, hb) => {
+   53073: (dd, Jd, kd) => {
```

#### 290. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2626` → after: `L2626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2626) · [Before (L2626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2626)

```diff
-   52634: (bb, ub, hb) => {
+   53076: (dd, Jd, kd) => {
```

#### 291. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2629` → after: `L2629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2629) · [Before (L2629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2629)

```diff
-   52636: (bb, ub, hb) => {
+   53081: (dd, Jd, kd) => {
```

#### 292. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2632` → after: `L2632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2632) · [Before (L2632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2632)

```diff
-   52640: (bb, ub, hb) => {
+   53086: (dd, Jd, kd) => {
```

#### 293. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2635` → after: `L2635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2635) · [Before (L2635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2635)

```diff
-   52649: (bb, ub, hb) => {
+   53090: (dd, Jd, kd) => {
```

#### 294. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2638` → after: `L2638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2638) · [Before (L2638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2638)

```diff
-   52656: (bb, ub, hb) => {
+   53096: (dd, Jd, kd) => {
```

#### 295. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2641` → after: `L2641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2641) · [Before (L2641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2641)

```diff
-   52662: (bb, ub, hb) => {
+   53105: (dd, Jd, kd) => {
```

#### 296. `bundles/bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2644` → after: `L2644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54cR2644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-3cea5e03faf28f681a4222a5de35b2003fc457697d823404ee01c6bb9845b54c) · [After (L2644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/itemSprites.js#L2644) · [Before (L2644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/itemSprites.js#L2644)

```diff
-   52669: (bb, ub, hb) => {
+   53108: (dd, Jd, kd) => {
```
